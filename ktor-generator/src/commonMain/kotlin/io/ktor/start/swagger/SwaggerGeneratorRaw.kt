package io.ktor.start.swagger

import io.ktor.start.*
import io.ktor.start.features.server.*
import io.ktor.start.project.*
import io.ktor.start.swagger.SwaggerGeneratorInterface.doc
import io.ktor.start.util.*

object SwaggerGeneratorRaw : SwaggerGeneratorBase() {

    fun BlockBuilder.registerRoutes(info: BuildInfo, model: SwaggerModel, arguments: SwaggerArguments) {
        addImport("io.ktor.swagger.experimental.*")
        addSwaggerUtils(info)
        addRoute {
            +"${model.info.classNameServer}(${arguments.instances}).apply" {
                for (tag in model.tags) {
                    +"${tag.registerMethodName}()"
                }
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
                +"import io.ktor.application.*"
                +"import io.ktor.response.*"
                +"import io.ktor.routing.*"
                +"import java.util.*"
                +"import io.ktor.swagger.experimental.*"
                +"import io.ktor.auth.*"
                +"import io.ktor.http.*"
            }

            SEPARATOR {
                doc(title = model.info.title, description = model.info.description)
                +"class ${model.info.classNameServer}(${arguments.decls})" {
                    val processedMethods = hashSetOf<SwaggerModel.PathMethodModel>()
                    for (tag in model.tags) {
                        SEPARATOR {
                            doc(tag.tag)
                            +"fun Routing.${tag.registerMethodName}()" {
                                for (route in model.routes.values) {
                                    for (method in route.methodsList) {
                                        if (!method.processedTags.contains(tag)) continue // Not containing this tag
                                        if (method in processedMethods) continue // Already processed
                                        processedMethods += method

                                        SEPARATOR {
                                            if (method.security.isNotEmpty()) {
                                                +"authenticate(${method.security.joinToString(", ") { it.name.quote() }})" {
                                                    route(method, route)
                                                }
                                            } else {
                                                route(method, route)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    fun Indenter.route(
        method: SwaggerModel.PathMethodModel,
        route: SwaggerModel.PathModel
    ) {
        +"${method.method}(${route.path.quote()})" {
            // Parameter reading
            SEPARATOR {
                for ((pinfo, param) in method.parameters.metaIter) {
                    val pname = param.name
                    val qpname = pname.quote()
                    val ptype = param.schema.toKotlinType()
                    val inAnnotation = when (param.inside) {
                        SwaggerModel.Inside.BODY -> "call.getBodyParam<$ptype>($qpname)"
                        SwaggerModel.Inside.HEADER -> "call.getHeader<$ptype>($qpname)"
                        SwaggerModel.Inside.QUERY -> "call.getQuery<$ptype>($qpname)"
                        SwaggerModel.Inside.PATH -> "call.getPath<$ptype>($qpname)"
                        SwaggerModel.Inside.FORM_DATA -> "call.getFormData<$ptype>($qpname)"
                    }
                    val default = if (param.required) {
                        //"{ error(" + "mandatory $pname".quote() + ") }"
                        ""
                    } else {
                        "{ " + indentStringHere {
                            toKotlinDefault(param.schema, param.default, typed = true)
                        } + " }"
                    }
                    +"val ${param.name} = $inAnnotation $default"
                }
            }
            SEPARATOR {
                val untyped = routeBodyCheckParameters(method)
                +"call.respond(${indentString(indentLevel) {
                    toKotlinDefault(method.responseType, untyped, typed = true)
                }})"
            }
        }
    }

    fun BlockBuilder.fileSwaggerFrontendHandler(fileName: String, info: BuildInfo, model: SwaggerModel) {
        fileText(fileName) {
            SEPARATOR {
                +"package ${info.artifactGroup}"
            }

            SEPARATOR {
                +"import io.ktor.client.*"
                +"import io.ktor.client.request.*"
            }

            SEPARATOR {
                doc(title = model.info.title + " Client", description = model.info.description)
                +"open class ${model.info.classNameClient}(val endpoint: String, val client: HttpClient = HttpClient())" {
                    for (route in model.routes.values) {
                        for (method in route.methodsList) {
                            val responseType = method.responseType.toKotlinType()
                            SEPARATOR {
                                doc(
                                    title = "",
                                    description = method.summaryDescription,
                                    params = method.parameters.associate { it.name to it.description },
                                    retval = method.defaultResponse.description
                                )
                                +"suspend fun ${method.methodName}("
                                indent {
                                    for ((pinfo, param) in method.parameters.metaIter) {
                                        val qpname = param.name.quote()
                                        val default = if (param.required) "" else " = " + indentStringHere {
                                            toKotlinDefault(param.schema, param.default, typed = true)
                                        }
                                        +"${param.name}: ${param.schema.toKotlinType()}$default${pinfo.optComma} // ${param.inside}"
                                    }
                                }
                                +"): $responseType" {
                                    val replacedPath = method.path.replace(Regex("\\{(\\w+)\\}")) {
                                        "\$" + it.groupValues[1]
                                    }

                                    +"return client.${method.method}<$responseType>(\"\$endpoint$replacedPath\")" {
                                        if (method.parametersQuery.isNotEmpty()) {
                                            +"this.url" {
                                                +"this.parameters.apply" {
                                                    for (param in method.parametersQuery) {
                                                        +"this.append(${param.name.quote()}, \"\$${param.name}\")"
                                                    }
                                                }
                                            }
                                        }
                                        if (method.parametersBody.isNotEmpty()) {
                                            +"this.body = mutableMapOf<String, Any?>().apply" {
                                                for (param in method.parametersBody) {
                                                    +"this[${param.name.quote()}] = ${param.name}"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    fun BlockBuilder.fileSwaggerDtos(fileName: String, info: BuildInfo, model: SwaggerModel) {
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
                swaggerDtos(info, model)
            }
        }
    }

}
