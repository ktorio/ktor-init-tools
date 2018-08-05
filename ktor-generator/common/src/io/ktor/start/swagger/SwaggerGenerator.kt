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
        fileBinary("src/io/ktor/swagger/experimental/swagger-util.kt") { info.fetch("swagger/swagger-util.kt.txt") }
        addImport("kotlin.reflect.*") // For KClass
        addImport("java.util.*") // For Date
        addImport("io.ktor.swagger.experimental.*")
        addApplicationClasses {
        }
        addExtensionMethods {
        }
        addCustomStatusPage {
            "exception<HttpException>"(suffix = " cause ->") {
                +"call.respond(cause.code, cause.description)"
            }
        }
        fileText("src/swagger-model.kt") {
            SEPARATOR {
                +"package ${info.artifactGroup}"
            }
            SEPARATOR {
                +"import java.util.*"
                +"import io.ktor.swagger.experimental.*"
            }
            SEPARATOR {
                //addExtensionMethods {
                for (def in model.definitions.values) {
                    +"data class ${def.name}("
                    indent {
                        val props = def.props.values
                        for ((index, prop) in props.withIndex()) {
                            val comma = if (index >= props.size - 1) "" else ","
                            +"val ${prop.name}: ${prop.type.toKotlin()}$comma"
                        }
                    }
                    val propsWithRules = def.propsList.filter { it.type.rule != null }
                    if (propsWithRules.isNotEmpty()) {
                        +") {"
                        indent {
                            +"init" {
                                for (prop in propsWithRules) {
                                    +"${prop.name}.verifyParam(${prop.name.quote()}) { ${prop.toRuleString()} }"
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
        fileText("src/swagger-api.kt") {
            SEPARATOR {
                +"package ${info.artifactGroup}"
            }
            SEPARATOR {
                +"import java.util.*"
                +"import io.ktor.swagger.experimental.*"
            }
            SEPARATOR {
                renderInterface(model)
            }
        }
        fileText("src/swagger-backend.kt") {
            SEPARATOR {
                +"package ${info.artifactGroup}"
            }
            SEPARATOR {
                +"import java.util.*"
                +"import io.ktor.http.*"
                +"import io.ktor.swagger.experimental.*"
            }
            SEPARATOR {
                renderBackend(model)
            }
        }
        fileText("src/swagger-frontend.kt") {
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
                renderFrontend(model)
            }
        }
        addRoute {
            +"register(${model.info.classNameServer}())"
            //for (route in model.paths.values) {
            //    if (route.methodsList.size == 1) {
            //        val method = route.methodsList.first()
            //        renderAuths(method.security) {
            //            +"${method.method}(${route.path.quote()})" {
            //                renderRouteMethodBody(method)
            //            }
            //        }
            //    } else {
            //        +"route(${route.path.quote()})" {
            //            for (method in route.methodsList) {
            //                renderAuths(method.security) {
            //                    +method.method {
            //                        renderRouteMethodBody(method)
            //                    }
            //                }
            //            }
            //        }
            //    }
            //}
        }
    }

    //fun Indenter.renderRouteMethodBody(method: SwaggerModel.PathMethodModel) {
    //    +"// operationId=${method.operationId} tags=${method.tags}"
    //    for (param in method.parameters) {
    //        +"// ${param.description.replace("\n", " ")}"
    //        when (param.inside) {
    //            // Parameter based
    //            SwaggerModel.Inside.QUERY, SwaggerModel.Inside.PATH -> {
    //                val base = when (param.inside) {
    //                    SwaggerModel.Inside.QUERY -> "call.request.queryParameters"
    //                    SwaggerModel.Inside.PATH -> "call.parameters"
    //                    else -> error("Unexpected")
    //                }
//
    //                val pschema = param.schema
    //                val prule = pschema.rule
    //                val ptype = pschema.type
    //                val verify = if (prule != null) ", verify = { ${prule.toKotlin(ptype)} }" else ""
    //                when (ptype) {
    //                    is SwaggerModel.StringType -> +"val ${param.name} = $base.get(\"${param.name}\")"
    //                    is SwaggerModel.Int32Type -> {
    //                        +("val ${param.name} = $base.getInt(\"${param.name}\"$verify)" +
    //                                " { ${(param.default as? Number?)?.toInt() ?: 0} }")
    //                    }
    //                    is SwaggerModel.ArrayType -> {
    //                        +"val ${param.name} = $base.getTyped<${ptype.toKotlin()}>(\"${param.name}\"$verify)"
    //                    }
    //                    else -> {
    //                        // @TODO:
    //                        println("Unknown schema: ${param.schema}")
    //                    }
    //                }
    //            }
    //            SwaggerModel.Inside.FORM_DATA -> {
    //                // @TODO:
    //            }
    //            SwaggerModel.Inside.BODY -> {
    //                // @TODO
    //            }
    //            SwaggerModel.Inside.HEADER -> {
    //                // @TODO
    //            }
    //            else -> error("Unsupported param.in=${param.inside}")
    //        }
    //    }
    //    for (response in method.errorResponses) {
    //        +"if (false)" {
    //            renderResponse(response)
    //        }
    //    }
//
    //    val okResponse = method.okResponse
    //    if (okResponse != null) {
    //        renderResponse(okResponse)
    //    } else {
    //        +"call.respondText(\"ok\", contentType = ContentType.Text.Plain)"
    //    }
    //}

    fun Indenter.renderResponse(response: SwaggerModel.Response) {
        val code = response.intCode
        if (code == 200) {
            val rindentLevel = indentLevel
            +"call.respond(${indentString(rindentLevel + 2) { toKotlinDefault(response.schema?.type, null) } })"
        } else {
            val httpStatus = HttpStatusCode.byCode[code]
            if (httpStatus != null) {
                +"httpException(HttpStatusCode.${httpStatus.name})"
            } else {
                +"httpException($code, ${response.description.quote()})"
            }
        }
    }

    fun Indenter.renderInterface(model: SwaggerModel) {
        +"/**"
        +" * ${model.info.title}"
        +" * "
        +" * ${model.info.description}"
        +" */"
        +"interface ${model.info.className} : SwaggerBaseApi" {
            for (paths in model.paths.values) {
                for (path in paths.methodsList) {
                    SEPARATOR {
                        +"/**"
                        +" * ${path.description}"
                        +" * "
                        for (param in path.parameters) {
                            +" * @param ${param.name} ${param.description}"
                        }
                        if (path.parameters.isNotEmpty()) {
                            +" * "
                        }
                        +" * @return ${path.defaultResponse.description}"
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
                                val default = if (param.required) "" else " = " + indentStringHere { toKotlinDefault(param.schema, param.default) }
                                +"$inAnnotation ${param.name}: ${param.schema.toKotlin()}$default${info.optComma}"
                            }
                        }
                        +"): ${path.responseType.toKotlin()}"
                    }
                }
            }
        }
    }

    fun Indenter.renderBackend(model: SwaggerModel) {
        +"class ${model.info.classNameServer} : SwaggerBaseServer, ${model.info.className}" {
            for (paths in model.paths.values) {
                for (method in paths.methodsList) {
                    SEPARATOR {
                        +"override suspend fun ${method.methodName}("
                        indent {
                            for ((info, param) in method.parameters.metaIter) {
                                +"${param.name}: ${param.schema.toKotlin()}${info.optComma}"
                            }
                        }
                        +"): ${method.responseType.toKotlin()} {"
                        indent {
                            SEPARATOR {
                                for (param in method.parameters) {
                                    val pschema = param.schema
                                    val rule = pschema.rule
                                    if (rule != null) {
                                        +"check(${rule.toKotlin(pschema)}) { ${"Invalid ${param.name}".quote()} }"
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
                                    +"return ${indentString(indentLevel) {
                                        toKotlinDefault(method.responseType, null)
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

    fun Indenter.renderFrontend(model: SwaggerModel) {
        +"fun create${model.info.classNameClient}(endpoint: String, client: HttpClient = HttpClient()): ${model.info.className} = createClient(client, endpoint)"
    }

    //fun Indenter.renderAuths(security: List<SwaggerModel.Security>, callback: Indenter.() -> Unit) {
    //    if (security.isNotEmpty()) {
    //        +"authenticate(${security.map { it.name.quote() }.joinToString(", ")})" {
    //            callback()
    //        }
    //    } else {
    //        callback()
    //    }
    //}

    fun SwaggerModel.InfoGenType<*>.toKotlin(): String = type.toKotlin()

    fun SwaggerModel.GenType.toKotlin(): String = when (this) {
        is SwaggerModel.OptionalType -> "${this.type.toKotlin()}?"
        is SwaggerModel.StringType -> "String"
        is SwaggerModel.PasswordType -> "String" // @TODO: SecureString instead?
        is SwaggerModel.DateType -> "Date"
        is SwaggerModel.DateTimeType -> "Date"
        is SwaggerModel.Int32Type -> "Int"
        is SwaggerModel.DoubleType -> "Double"
        is SwaggerModel.Int64Type -> "Long"
        is SwaggerModel.BoolType -> "Boolean"
        is SwaggerModel.NamedObject -> name
        is SwaggerModel.ArrayType -> "List<${this.items.toKotlin()}>"
        is SwaggerModel.ObjType -> "Any/*Unsupported ${this.fields}*/"
        is SwaggerModel.VoidType -> "Unit"
        else -> error("Unsupported '$this' class=${this::class}")
    }

    fun Indenter.toKotlinDefault(type: SwaggerModel.InfoGenType<*>?, default: Any?) = toKotlinDefault(type?.type, default)

    fun Indenter.toKotlinDefault(type: SwaggerModel.GenType?, default: Any?) {
        when (type) {
            null -> +"null"
            is SwaggerModel.OptionalType -> +"null"
            is SwaggerModel.BaseStringType -> +(default?.toString() ?: "").quote()
            is SwaggerModel.DateType -> +"Date()"
            is SwaggerModel.DateTimeType -> +"Date()"
            is SwaggerModel.Int32Type -> +"${((default as? Number?)?.toInt() ?: 0)}"
            is SwaggerModel.DoubleType -> +"${((default as? Number?)?.toDouble() ?: 0.0)}"
            is SwaggerModel.Int64Type -> +"${((default as? Number?)?.toLong() ?: 0L)}"
            is SwaggerModel.BoolType -> +"${((default as? Boolean?) ?: false)}"
            is SwaggerModel.NamedObject -> {
                val def = type.kind
                +"${type.name}("
                indent {
                    val props = def.type.fields.entries.toList()
                    for ((info, entry) in props.metaIter) {
                        val (key, prop) = entry
                        +"$key = ${indentStringHere { toKotlinDefault(prop, null) }}${info.optComma}"
                    }
                }
                +")"
            }
            is SwaggerModel.ArrayType -> {
                +"listOf()"
            }
            is SwaggerModel.ObjType -> {
                //+"Any()/*Unsupported ${type.fields}*/"
                +"mapOf("
                indent {
                    for ((info, entry) in type.fields.entries.metaIter) {
                        val (key, prop) = entry
                        +"${key.quote()} to ${indentStringHere { toKotlinDefault(prop, null) }}${info.optComma}"
                    }
                }
                +")"
            }
            is SwaggerModel.VoidType -> +"Unit"
            else -> error("Unsupported '$type'")
        }
    }
}

val <T> IteratorStepInfo<T>.optComma get() = if (this.isLast) "" else ","
