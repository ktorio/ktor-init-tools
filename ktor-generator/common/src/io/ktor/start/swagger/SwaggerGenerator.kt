package io.ktor.start.swagger

import io.ktor.start.*
import io.ktor.start.features.client.*
import io.ktor.start.features.server.*
import io.ktor.start.http.*
import io.ktor.start.project.*
import io.ktor.start.util.*

class SwaggerGenerator(val model: SwaggerModel) : Block<BuildInfo>(*model.buildDepsFromModel().toTypedArray()) {
    companion object {
        fun SwaggerModel.buildDepsFromModel(): Set<Block<BuildInfo>> {
            val model = this
            val out = LinkedHashSet<Block<BuildInfo>>()
            out += ApplicationKt
            out += StatusPagesFeature
            out += RoutingFeature
            out += ApacheClientEngine
            out += JsonJacksonFeature
            if (model.securityDefinitions.isNotEmpty()) {
                out += AuthJwtFeature // @TODO: Do this conditionally based on Security blocks
                out += AuthFeature
            }
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
            SEPARATOR {
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
        if (model.securityDefinitions.isNotEmpty()) {
            addImport("io.ktor.auth.*")
            addImport("io.ktor.auth.jwt.*")

            addAuthProvider {
                for (sec in model.securityDefinitions.values) {
                    +"// ${sec.description.split("\n").joinToString("\\n")}"
                    +"jwt(${sec.id.quote()})" {
                        +"authSchemes(\"Bearer\", \"Token\")"
                    }
                }
            }
        }
        addRoute {
            +"registerRoutes(${model.info.classNameServer}())"
        }
    }

    fun Indenter.renderResponse(response: SwaggerModel.Response) {
        val code = response.intCode
        if (code == 200) {
            val rindentLevel = indentLevel
            +"call.respond(${indentString(rindentLevel + 2) { toKotlinDefault(response.schema?.type, null) }})"
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
                                val default = if (param.required) "" else " = " + indentStringHere {
                                    toKotlinDefault(
                                        param.schema,
                                        param.default
                                    )
                                }
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
        SEPARATOR {
            +"interface ${model.info.classNameClient} : ${model.info.className}" {
                +"fun setToken(token: String)" // @TODO: Based on security stuff
            }
        }
        SEPARATOR {
            +"fun ${model.info.classNameClient}(endpoint: String, client: HttpClient = HttpClient()): ${model.info.classNameClient} = createClient(client, endpoint)"
        }
    }

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

    fun Indenter.toKotlinDefault(type: SwaggerModel.InfoGenType<*>?, default: Any?) =
        toKotlinDefault(type?.type, default)

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
