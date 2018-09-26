package io.ktor.start.swagger

import io.ktor.start.BuildInfo
import io.ktor.start.features.server.addRoute
import io.ktor.start.http.HttpStatusCode
import io.ktor.start.project.addImport
import io.ktor.start.util.*

object SwaggerGeneratorInterface {
    fun BlockBuilder.registerInterfaceRoutes(info: BuildInfo, model: SwaggerModel, arguments: List<SwaggerArgument>) {
        addImport("io.ktor.swagger.experimental.*")
        fileBinary("src/io/ktor/swagger/experimental/SwaggerUtils.kt") { info.fetch("swagger/SwaggerUtils.kt.txt") }
        addRoute {
            +"registerRoutes(${model.info.classNameServer}(${arguments.joinToString(", ") { it.instance }}))"
        }
    }

    fun Indenter.renderResponse(response: SwaggerModel.Response) {
        val code = response.intCode
        if (code == 200) {
            val rindentLevel = indentLevel
            +"call.respond(${indentString(rindentLevel + 2) {
                toKotlinDefault(response.schema?.type, null, typed = true)
            }})"
        } else {
            val httpStatus = HttpStatusCode.byCode[code]
            if (httpStatus != null) {
                +"httpException(HttpStatusCode.${httpStatus.name})"
            } else {
                +"httpException($code, ${response.description.quote()})"
            }
        }
    }

    fun BlockBuilder.fileSwaggerCommonInterface(fileName: String, info: BuildInfo, model: SwaggerModel) {
        fileText(fileName) {
            SEPARATOR {
                +"package ${info.artifactGroup}"
            }
            SEPARATOR {
                +"import java.util.*"
                +"import io.ktor.swagger.experimental.*"
            }
            SEPARATOR {

                +"/**"
                +" * ${model.info.title.stripLineBreaks()}"
                +" * "
                for (descLine in model.info.description.lines()) {
                    +" * $descLine"
                }
                +" */"
                +"interface ${model.info.className} : SwaggerBaseApi" {
                    for (paths in model.paths.values) {
                        for (path in paths.methodsList) {
                            SEPARATOR {
                                +"/**"
                                for (descLine in path.summaryDescription.lines()) {
                                    +" * $descLine"
                                }
                                +" * "
                                for (param in path.parameters) {
                                    param.description.escape()
                                    +" * @param ${param.name} ${param.description.stripLineBreaks()}"
                                }
                                if (path.parameters.isNotEmpty()) {
                                    +" * "
                                }
                                +" * @return ${path.defaultResponse.description.stripLineBreaks()}"
                                +" */"
                                +"@Path(${paths.path.quote()})"
                                +"@Method(${path.method.toUpperCase().quote()})"
                                if (path.security.isNotEmpty()) {
                                    +"@Auth(${path.security.joinToString(", ") { it.name.quote() }})"
                                }
                                +"suspend fun ${path.methodName}("
                                indent {
                                    for ((info, param) in path.parameters.metaIter) {
                                        val qpname = param.name.quote()
                                        val inAnnotation = when (param.inside) {
                                            SwaggerModel.Inside.BODY -> "@Body($qpname)"
                                            SwaggerModel.Inside.HEADER -> "@Header($qpname)"
                                            SwaggerModel.Inside.QUERY -> "@Query($qpname)"
                                            SwaggerModel.Inside.PATH -> "@Path($qpname)"
                                            SwaggerModel.Inside.FORM_DATA -> "@FormData($qpname)"
                                        }
                                        val default = if (param.required) "" else " = " + indentStringHere {
                                            toKotlinDefault(param.schema, param.default, typed = true)
                                        }
                                        +"$inAnnotation ${param.name}: ${param.schema.toKotlinType()}$default${info.optComma}"
                                    }
                                }
                                +"): ${path.responseType.toKotlinType()}"
                            }
                        }
                    }
                }

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
        }
    }

    fun BlockBuilder.fileSwaggerBackendHandler(
        fileName: String,
        info: BuildInfo,
        model: SwaggerModel,
        arguments: List<SwaggerArgument>
    ) {
        fileText(fileName) {
            SEPARATOR {
                +"package ${info.artifactGroup}"
            }
            SEPARATOR {
                +"import java.util.*"
                +"import io.ktor.http.*"
                +"import io.ktor.request.*"
                +"import io.ktor.swagger.experimental.*"
            }
            SEPARATOR {
                +"class ${model.info.classNameServer}(${arguments.joinToString(", ") { it.decl }}) : SwaggerBaseServer, ${model.info.className}" {
                    for (paths in model.paths.values) {
                        for (method in paths.methodsList) {
                            SEPARATOR {
                                +"// ${method.method.stripLineBreaks().toUpperCase()} ${method.path.stripLineBreaks()}"
                                +"override suspend fun ${method.methodName}("
                                indent {
                                    for ((info, param) in method.parameters.metaIter) {
                                        +"${param.name}: ${param.schema.toKotlinType()}${info.optComma}"
                                    }
                                }
                                +"): ${method.responseType.toKotlinType()} {"
                                indent {
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

                                            +"return ${indentString(indentLevel) {
                                                toKotlinDefault(method.responseType, untyped, typed = true)
                                            }}"
                                        }
                                    }
                                }
                                +"}"
                            }
                        }
                    }
                }
            }
        }
    }

    fun BlockBuilder.fileSwaggerFrontendHandler(fileName: String, info: BuildInfo, model: SwaggerModel) {
        fileText(fileName) {
            SEPARATOR {
                +"package ${info.artifactGroup}"
            }
            SEPARATOR {
                +"import java.util.*"
                +"import io.ktor.http.*"
                +"import io.ktor.client.*"
                +"import io.ktor.swagger.experimental.*"
            }
            SEPARATOR {
                +"interface ${model.info.classNameClient} : ${model.info.className}" {
                    +"fun setToken(token: String)" // @TODO: Based on security stuff
                }
            }
            SEPARATOR {
                +"fun ${model.info.classNameClient}(endpoint: String, client: HttpClient = HttpClient()): ${model.info.classNameClient} = createClient(client, endpoint)"
            }
        }
    }
}