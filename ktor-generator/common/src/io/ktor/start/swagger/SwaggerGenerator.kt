package io.ktor.start.swagger

import io.ktor.start.*
import io.ktor.start.features.server.*
import io.ktor.start.project.*
import io.ktor.start.util.*

class SwaggerGenerator(val model: SwaggerModel) : Block<BuildInfo>(RoutingFeature, ApplicationKt) {
    override fun BlockBuilder.render(info: BuildInfo) {
        addApplicationClasses {
            for (def in model.definitions.values) {
                +"data class ${def.name}("
                indent {
                    val props = def.props.values
                    for ((index, prop) in props.withIndex()) {
                        val comma = if (index >= props.size - 1) "" else ","
                        +"val ${prop.name}: ${prop.rtype.toKotlin()}$comma"
                    }
                }
                +")"
            }
        }
        addRoute {
            for (route in model.paths.values) {
                if (route.methodsList.size == 1) {
                    val method = route.methodsList.first()
                    renderAuths(method.security) {
                        +"${method.method}(${route.path.quote()})" {
                            renderRouteMethodBody(method)
                        }
                    }
                } else {
                    +"route(${route.path.quote()})" {
                        for (method in route.methodsList) {
                            +method.method {
                                renderAuths(method.security) {
                                    renderRouteMethodBody(method)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    fun Indenter.renderRouteMethodBody(method: SwaggerModel.PathMethodModel) {
    }

    fun Indenter.renderAuths(security: List<SwaggerModel.Security>, callback: Indenter.() -> Unit) {
        if (security.isNotEmpty()) {
            +"authenticate(${security.map { it.name.quote() }.joinToString(", ")})" {
                callback()
            }
        } else {
            callback()
        }
    }

    fun SwaggerModel.GenType.toKotlin(): String = when (this) {
        is SwaggerModel.OptionalType -> "${this.type.toKotlin()}?"
        is SwaggerModel.PrimType -> when (type) {
            "string" -> "String"
            "integer" -> "Int"
            "long" -> "Long"
            "boolean" -> "Boolean"
            // @TODO: Unsupported unnamed type
            "object" -> "Any"
            else -> error("Unsupported prim of type $type ($this)")
        }
        is SwaggerModel.RefType -> {
            type.substringAfterLast('/')
        }
        is SwaggerModel.ArrayType -> {
            "Lis<${this.items.toKotlin()}>"
        }
        else -> error("Unsupported $this")
    }
}
