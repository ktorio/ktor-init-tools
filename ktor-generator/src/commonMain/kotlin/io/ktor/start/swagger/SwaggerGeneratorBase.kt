package io.ktor.start.swagger

import io.ktor.start.*
import io.ktor.start.swagger.SwaggerGeneratorInterface.renderResponse
import io.ktor.start.util.*

open class SwaggerGeneratorBase {
    fun Indenter.doc(title: String, description: String = "", params: Map<String, Any?> = mapOf(), retval: String? = null) {
        doc(buildList {
            add(title.stripLineBreaks())
            add("")
            addAll(description.lines())
            add("")
            for ((name, value) in params) {
                add("@param ${name.stripLineBreaks()} ${value.toString().stripLineBreaks()}")
            }
            add("")
            if (retval != null) {
                add("@return ${retval.stripLineBreaks()}")
            }
        })
    }

    fun Indenter.doc(lines: List<String>) {
        val strippedLines = lines
            .dropWhile { it.isNullOrBlank() }
            .dropLastWhile { it.isNullOrBlank() }
            .dropDoubleEmpty()
        +"/**"
        for (line in strippedLines) {
            +" * $line"
        }
        +" */"
    }

    fun List<String>.dropDoubleEmpty(): List<String> = buildList {
        for (n in 0 until this@dropDoubleEmpty.size) {
            val prev = this@dropDoubleEmpty.getOrNull(n - 1)
            val current = this@dropDoubleEmpty.getOrNull(n)
            if (!prev.isNullOrBlank() || !current.isNullOrBlank()) {
                add(current!!)
            }
        }
    }

    fun Indenter.swaggerDtos(info: BuildInfo, model: SwaggerModel) {
        for (def in model.definitions.values) {
            SEPARATOR {
                // @TODO: Consider using object instead?
                val classKeywords = if (def.props.isNotEmpty()) "data class" else "class"
                if (def.synthetic) {
                    +"// Synthetic class name"
                }
                +"$classKeywords ${def.name}("
                indent {
                    val props = def.props.values
                    for ((index, prop) in props.withIndex()) {
                        val comma = if (index >= props.size - 1) "" else ","
                        +"val ${prop.name}: ${prop.type.toKotlinType()}$comma"
                    }
                }
                val propsWithRules = def.propsList.filter { it.type.rule != null }
                if (propsWithRules.isNotEmpty()) {
                    +") {"
                    indent {
                        +"init" {
                            for (prop in propsWithRules) {
                                +"${prop.name}.verifyParam(${prop.name.quote()}) { ${prop.toRuleString("it")} }"
                            }
                        }
                    }
                    +"}"
                } else {
                    +")"
                }
            }
        }
    }

    fun Indenter.routeBodyCheckParameters(method: SwaggerModel.PathMethodModel): Any? {
        var retval: Any? = null

        SEPARATOR {
            val reqBody = method.requestBody.firstOrNull()
            if (reqBody != null) {
                +"val body = call().receive<${reqBody.schema.toKotlinType()}>()"
            }

            for (param in method.parameters) {
                val pschema = param.schema
                val rule = pschema.rule
                if (rule != null) {
                    +"checkRequest(${rule.toKotlin(
                        param.name,
                        pschema
                    )}) { ${"Invalid ${param.name}".quote()} }"
                }
            }
        }
        SEPARATOR {
            for (response in method.errorResponses) {
                +"if (false) ${indentString(indentLevel) { renderResponse(response) }}"
            }
        }
        SEPARATOR {
            if (method.responseType != SwaggerModel.VoidType) {
                val loginRoute = method.tryGetCompatibleLoginRoute()

                val untyped = method.responseType.toDefaultUntyped()

                if (loginRoute?.username != null) {
                    +"val username = ${loginRoute.username.fullPath}"
                    +"// @TODO: Your username/password validation here"
                    if (loginRoute.password != null) {
                        +"val password = ${loginRoute.password.fullPath}"
                        +"if (username != password) httpException(HttpStatusCode.Unauthorized, \"username != password\")"
                    }
                    +"val token = myjwt.sign(username)"
                    Dynamic {
                        untyped[loginRoute.tokenPath] = SwaggerModel.Identifier("token")
                    }
                }

                retval = untyped
            }
        }
        return retval
    }
}