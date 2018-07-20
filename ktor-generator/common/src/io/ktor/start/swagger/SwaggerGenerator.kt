package io.ktor.start.swagger

import io.ktor.start.*
import io.ktor.start.features.server.*
import io.ktor.start.http.*
import io.ktor.start.project.*
import io.ktor.start.util.*

class SwaggerGenerator(val model: SwaggerModel) : Block<BuildInfo>(*model.buildDepsFromModel().toTypedArray()) {
    companion object {
        fun SwaggerModel.buildDepsFromModel(): Set<Block<BuildInfo>> {
            val out = LinkedHashSet<Block<BuildInfo>>()
            out += ApplicationKt
            out += StatusPagesFeature
            out += RoutingFeature
            out += AuthJwtFeature // @TODO: Do this conditionally based on Security blocks
            return out
        }
    }

    override fun BlockBuilder.render(info: BuildInfo) {
        addApplicationClasses {
            +"class HttpException(val code: HttpStatusCode, val description: String = code.description) : RuntimeException(description)"
        }
        addExtensionMethods {
            +"inline fun Parameters.getInt(name: String, default: () -> Int = {0}): Int = get(name)?.toInt() ?: default()"
            +"inline fun <reified T : Any> Parameters.getTyped(name: String): T = getTyped(T::class, name)"
            +"fun <T : Any> Parameters.getTyped(type: KClass<T>, name: String): T = TODO()"
            +"fun httpException(code: HttpStatusCode, message: String = code.description): Nothing = throw HttpException(code, message)"
            +"fun httpException(code: Int, message: String = \"Error \$code\"): Nothing = throw HttpException(HttpStatusCode(code, message))"
        }
        addCustomStatusPage {
            "exception<HttpException>"(suffix = " cause ->") {
                +"call.respond(cause.code, cause.description)"
            }
        }
        addApplicationClasses {
        //addExtensionMethods {
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
                            renderAuths(method.security) {
                                +method.method {
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
        for (param in method.parameters) {
            +"// ${param.description.replace("\n", " ")}"
            when (param.inside) {
                // Parameter based
                "query", "path" -> {
                    val base = when (param.inside) {
                        "query" -> "call.request.queryParameters"
                        "path" -> "call.parameters"
                        else -> error("Unexpected")
                    }

                    when (param.schema) {
                        SwaggerModel.StringType -> +"val ${param.name} = $base.get(\"${param.name}\")"
                        SwaggerModel.Int32Type -> +"val ${param.name} = $base.getInt(\"${param.name}\") { ${(param.default as? Number?)?.toInt() ?: 0} }"
                        is SwaggerModel.ArrayType -> +"val ${param.name} = $base.getTyped<${param.schema.toKotlin()}>(\"${param.name}\")"
                        else -> {
                            // @TODO:
                            println("Unknown schema: ${param.schema}")
                        }
                    }
                }
                "formData" -> {
                    // @TODO:
                }
                "body" -> {
                    // @TODO
                }
                "header" -> {
                    // @TODO
                }
                else -> error("Unsupported param.in=${param.inside}")
            }
        }
        for (response in method.responses.filter { it.intCode != 200 }) {
            +"if (false)" {
                renderResponse(response)
            }
        }

        val okResponse = method.responses.firstOrNull { it.intCode == 200 }
        if (okResponse != null) {
            renderResponse(okResponse)
        } else {
            +"call.respondText(\"ok\", contentType = ContentType.Text.Plain)"
        }
    }

    fun Indenter.renderResponse(response: SwaggerModel.Response) {
        val code = response.intCode
        if (code == 200) {
            val rindentLevel = indentLevel
            +"call.respond(${Indenter { indent(rindentLevel + 2) { toKotlinDefault(response.schema) } }.toString().trim()})"
        } else {
            val httpStatus = HttpStatusCode.byCode[code]
            if (httpStatus != null) {
                +"httpException(HttpStatusCode.${httpStatus.name})"
            } else {
                +"httpException($code, ${response.description.quote()})"
            }
        }
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
        is SwaggerModel.StringType -> "String"
        is SwaggerModel.Int32Type -> "Int"
        is SwaggerModel.DoubleType -> "Double"
        is SwaggerModel.Int64Type -> "Long"
        is SwaggerModel.BoolType -> "Boolean"
        is SwaggerModel.RefType -> {
            type.substringAfterLast('/')
        }
        is SwaggerModel.ArrayType -> {
            "List<${this.items.toKotlin()}>"
        }
        is SwaggerModel.ObjType -> {
            "Any/*Unsupported ${this.fields}*/"
        }
        else -> error("Unsupported $this")
    }

    fun Indenter.toKotlinDefault(type: SwaggerModel.GenType?) {
        when (type) {
            null -> +"null"
            is SwaggerModel.OptionalType -> +"null"
            is SwaggerModel.StringType -> +"\"\""
            is SwaggerModel.Int32Type -> +"0"
            is SwaggerModel.DoubleType -> +"0.0"
            is SwaggerModel.Int64Type -> +"0L"
            is SwaggerModel.BoolType -> +"false"
            is SwaggerModel.RefType -> {
                val def = model.definitions[type.type.substringAfterLast('/')]
                if (def != null) {
                    +"${def.name}("
                    indent {
                        val props = def.props.entries.toList()
                       for (index in props.indices) {
                           val key = props[index].key
                           val prop = props[index].value
                           val last = index >= props.size - 1
                           val comma = if (last) "" else ","
                           val rindentLevel = this.indentLevel
                           +"$key = ${Indenter { indent(rindentLevel) { toKotlinDefault(prop.rtype) } }.toString().trim()}$comma"
                       }
                    }
                    +")"
                } else {
                    +"error"
                }
            }
            is SwaggerModel.ArrayType -> {
                +"listOf()"
            }
            is SwaggerModel.ObjType -> {
                +"Any()/*Unsupported ${type.fields}*/"
            }
            else -> error("Unsupported $this")
        }
    }
}
