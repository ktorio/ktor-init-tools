package io.ktor.start.swagger

import io.ktor.start.BuildInfo
import io.ktor.start.features.server.addRoute
import io.ktor.start.http.HttpStatusCode
import io.ktor.start.project.addImport
import io.ktor.start.util.*

object SwaggerGeneratorInterface : SwaggerGeneratorBase() {

    fun BlockBuilder.registerRoutes(info: BuildInfo, model: SwaggerModel, arguments: SwaggerArguments) {
        addImport("io.ktor.swagger.experimental.*")
        fileBinary("src/io/ktor/swagger/experimental/SwaggerUtils.kt") { info.fetch("swagger/SwaggerUtils.kt.txt") }
        addRoute {
            +"registerRoutes(${model.info.classNameServer}(${arguments.instances}))"
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
                doc(title = model.info.title, description = model.info.description)
                +"interface ${model.info.className} : SwaggerBaseApi" {
                    for (route in model.routes.values) {
                        for (method in route.methodsList) {
                            SEPARATOR {
                                doc(
                                    title = "",
                                    description = method.summaryDescription,
                                    params = method.parameters.associate { it.name to it.description },
                                    retval = method.defaultResponse.description
                                )
                                +"@Path(${route.path.quote()})"
                                +"@Method(${method.method.toUpperCase().quote()})"
                                if (method.security.isNotEmpty()) {
                                    +"@Auth(${method.security.joinToString(", ") { it.name.quote() }})"
                                }
                                +"suspend fun ${method.methodName}("
                                indent {
                                    for ((pinfo, param) in method.parameters.metaIter) {
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
                                        +"$inAnnotation ${param.name}: ${param.schema.toKotlinType()}$default${pinfo.optComma}"
                                    }
                                }
                                +"): ${method.responseType.toKotlinType()}"
                            }
                        }
                    }
                }

                swaggerDtos(info, model)
            }
        }
    }

    fun BlockBuilder.fileSwaggerBackendHandler(
        fileName: String,
        info: BuildInfo,
        model: SwaggerModel,
        arguments: SwaggerArguments
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
                +"class ${model.info.classNameServer}(${arguments.decls}) : SwaggerBaseServer, ${model.info.className}" {
                    for (paths in model.routes.values) {
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
                                    val untyped = routeBodyCheckParameters(method)
                                    +"return ${indentString(indentLevel) {
                                        toKotlinDefault(method.responseType, untyped, typed = true)
                                    }}"
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
