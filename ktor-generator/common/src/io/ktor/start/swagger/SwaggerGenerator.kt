package io.ktor.start.swagger

import io.ktor.start.*
import io.ktor.start.features.client.*
import io.ktor.start.features.server.*
import io.ktor.start.http.*
import io.ktor.start.project.*
import io.ktor.start.util.*
import kotlin.reflect.*

class SwaggerGenerator(val model: SwaggerModel) : Block<BuildInfo>(*model.buildDepsFromModel().toTypedArray()) {
    companion object {
        fun SwaggerModel.buildDepsFromModel(): Set<Block<BuildInfo>> {
            val model = this
            val out = LinkedHashSet<Block<BuildInfo>>()
            out += ApplicationKt
            out += ApplicationConf
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
        val registerInstances = arrayListOf<String>()
        val registerInstancesDecl = arrayListOf<String>()
        if (model.securityDefinitions.isNotEmpty()) {
            addImport("io.ktor.auth.*")
            addImport("io.ktor.auth.jwt.*")
            addImport("com.auth0.jwt.*")
            addImport("com.auth0.jwt.algorithms.*")

            addHoconTop {
                +"jwt" {
                    +"secret = \"TODO-change-this-supersecret-or-use-SECRET-env\""
                    +"secret = \${?SECRET}"
                }
            }

            addApplicationClasses {
                +"open class MyJWT(val secret: String)" {
                    +"private val algorithm = Algorithm.HMAC256(secret)"
                    +"val verifier = JWT.require(algorithm).build()"
                    +"fun sign(name: String): String = JWT.create().withClaim(\"name\", name).sign(algorithm)"
                }
            }

            addAuthProvider {
                registerInstances += "myjwt"
                registerInstancesDecl += "val myjwt: MyJWT"
                for (sec in model.securityDefinitions.values) {
                    +"// ---------------"
                    +"// @TODO: Please, edit the application.conf # jwt.secret property and provide a secure random value for it"
                    +"// ---------------"
                    for (descLine in sec.description.lines()) {
                        +"// $descLine"
                    }
                    +"jwt(${sec.id.quote()})" {
                        +"authSchemes(\"Bearer\", \"Token\")"
                        +"verifier(myjwt.verifier)"
                        +"validate" {
                            +"UserIdPrincipal(it.payload.getClaim(\"name\").asString())"
                        }
                    }
                }
            }

            prependSeparated(ApplicationKt.MODULE_INSTALL) {
                +"val myjwt = MyJWT(secret = environment.config.property(\"jwt.secret\").getString())"
            }
        }
        addRoute {
            +"registerRoutes(${model.info.classNameServer}(${registerInstances.joinToString(", ")}))"
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
                renderBackend(model, registerInstancesDecl)
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

        fileText(if (model.filename.endsWith(".json")) "api.json" else "api.yaml") {
            +model.source
        }
        fileText("http-client.env.json") {
            +Json.encodePrettyUntyped(
                mapOf(
                    "localhost" to mapOf(
                        "host" to "http://127.0.0.1:8080"
                    ),
                    "prod" to mapOf(
                        "host" to "https://my.domain.com"
                    )
                ), "    "
            )
        }

        fileText("api.http") {
            +"# ${model.info.title.stripLineBreaks()}"
            for (descLine in model.info.description.lines()) {
                +"# $descLine"
            }
            +""
            for (path in model.paths.values) {
                for (method in path.methodsList) {
                    val httpMethod = method.method.toUpperCase()
                    +"###"
                    +""

                    for (descLine in method.description.lines()) {
                        +"# $descLine"
                    }

                    +"$httpMethod {{host}}${path.path}"
                    for ((sec, secdef) in method.securityDefinitions(model).filter {
                        it.second?.inside == "header" && it.second?.type == SwaggerModel.SecurityType.API_KEY
                    }) {
                        +"${secdef!!.name}: Bearer {{ auth_token }}"
                    }
                    if (httpMethod == "POST" || httpMethod == "PUT") {
                        +"Content-Type: application/json"
                        +""
                        val postBody = method.parameters.filter { it.inside == SwaggerModel.Inside.BODY }
                            .map { it.name to it.schema.type.toKotlinDefaultUntyped() }.toMap()
                        +Json.encodePrettyUntyped(postBody)
                    }
                    +""
                    val loginRoute = method.tryGetCompatibleLoginRoute()
                    if (loginRoute != null) {
                        val tokenPath = loginRoute.tokenPath
                        val responsePath = "response.body.${tokenPath.joinToString(".")}"
                        +"> {%"
                        +"client.assert(typeof $responsePath !== \"undefined\", \"No token returned\");"
                        +"client.global.set(\"auth_token\", $responsePath);"
                        +"%}"
                        +""
                    }
                }
            }
        }
    }

    class CompatibleLoginRoute(
        val methodModel: SwaggerModel.PathMethodModel,
        val tokenPath: List<String>,
        val username: FieldInParamRef?,
        val password: FieldInParamRef?
    )

    data class FieldInParamRef(val param: SwaggerModel.Parameter, val path: List<String>) {
        val fullPathParts = listOf(param.name) + path
        val fullPath = fullPathParts.joinToString(".")
    }

    fun List<SwaggerModel.Parameter>.findField(vararg names: String, matchType: KClass<out SwaggerModel.GenType>? = null): FieldInParamRef? {
        for (param in this) {
            for (name in names) {
                val path = param.schema.findField(name, matchType = matchType)
                if (path != null) {
                    return FieldInParamRef(param, path)
                }
            }
        }
        return null
    }

    // Heuristics trying to figure out an auth token to store from the response fields
    fun SwaggerModel.PathMethodModel.tryGetCompatibleLoginRoute(): CompatibleLoginRoute? {
        val method = this
        val path = this.path
        if (path.endsWith("/login")) {
            val tokenPath = method.responseType.findField("token")
            if (tokenPath != null) {
                val username = parameters.findField("username", "name", "email", "user", matchType = SwaggerModel.BaseStringType::class)
                val password = parameters.findField("password", "pass", matchType = SwaggerModel.BaseStringType::class)

                return CompatibleLoginRoute(method, tokenPath, username, password)
            }
        }
        return null
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

    fun Indenter.renderInterface(model: SwaggerModel) {
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
                        for (descLine in path.description.lines()) {
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
                                +"$inAnnotation ${param.name}: ${param.schema.toKotlin()}$default${info.optComma}"
                            }
                        }
                        +"): ${path.responseType.toKotlin()}"
                    }
                }
            }
        }
    }

    fun Indenter.renderBackend(model: SwaggerModel, registerInstancesDecl: List<String>) {
        +"class ${model.info.classNameServer}(${registerInstancesDecl.joinToString(", ")}) : SwaggerBaseServer, ${model.info.className}" {
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
                                    val loginRoute = method.tryGetCompatibleLoginRoute()

                                    val untyped = method.responseType.toKotlinDefaultUntyped()

                                    if (loginRoute?.username != null) {
                                        +"val username = ${loginRoute.username.fullPath}"
                                        +"// @TODO: Your username/password validation here"
                                        if (loginRoute.password != null) {
                                            +"val password = ${loginRoute.password.fullPath}"
                                            +"if (username != password) httpException(HttpStatusCode.Unauthorized)"
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

    fun Indenter.toKotlinDefault(type: SwaggerModel.InfoGenType<*>?, default: Any?, typed: Boolean) =
        toKotlinDefault(type?.type, default, typed)

    fun Indenter.toKotlinDefault(type: SwaggerModel.GenType?, default: Any?, typed: Boolean) {
        when (type) {
            null -> +"null"
            is SwaggerModel.OptionalType -> +"null"
            is SwaggerModel.BaseStringType -> {
                if (default is SwaggerModel.Identifier) {
                    +default.id
                } else {
                    +(default?.toString() ?: "").quote()
                }
            }
            is SwaggerModel.DateType -> +"Date()"
            is SwaggerModel.DateTimeType -> +"Date()"
            is SwaggerModel.Int32Type -> +"${((default as? Number?)?.toInt() ?: 0)}"
            is SwaggerModel.DoubleType -> +"${((default as? Number?)?.toDouble() ?: 0.0)}"
            is SwaggerModel.Int64Type -> +"${((default as? Number?)?.toLong() ?: 0L)}"
            is SwaggerModel.BoolType -> +"${((default as? Boolean?) ?: false)}"
            is SwaggerModel.ArrayType -> {
                +"listOf()"
            }
            is SwaggerModel.MapLikeGenType -> {
                if (typed && type is SwaggerModel.NamedObject) {
                    val def = type.kind
                    +"${type.name}("
                    indent {
                        val props = def.type.fields.entries.toList()
                        for ((info, entry) in props.metaIter) {
                            val (key, prop) = entry
                            val rdefault = if (default is Map<*, *>) default[key] else null
                            +"$key = ${indentStringHere { toKotlinDefault(prop, rdefault, typed) }}${info.optComma}"
                        }
                    }
                    +")"
                } else {
                    +"mapOf("
                    indent {
                        for ((info, entry) in type.fields.entries.metaIter) {
                            val (key, prop) = entry
                            val rdefault = if (default is Map<*, *>) default[key] else null
                            +"${key.quote()} to ${indentStringHere {
                                toKotlinDefault(prop, rdefault, typed) }}${info.optComma}"
                        }
                    }
                    +")"
                }
            }
            is SwaggerModel.VoidType -> +"Unit"
            else -> error("Unsupported '$type'")
        }
    }

    fun SwaggerModel.GenType?.toKotlinDefaultUntyped(path: List<String> = listOf()): Any? {
        return when (this) {
            null -> null
            is SwaggerModel.OptionalType -> null
            is SwaggerModel.BaseStringType -> path.joinToString(".")
            is SwaggerModel.DateType -> ""
            is SwaggerModel.DateTimeType -> ""
            is SwaggerModel.Int32Type -> 0
            is SwaggerModel.DoubleType -> "0.0"
            is SwaggerModel.Int64Type -> "0L"
            is SwaggerModel.BoolType -> "false"
            is SwaggerModel.ArrayType -> listOf<Any?>().toMutableList()
            is SwaggerModel.MapLikeGenType -> fields.map { it.key to it.value.type.toKotlinDefaultUntyped(path + it.key) }.toMap().toMutableMap()
            is SwaggerModel.VoidType -> Unit
            else -> error("Unsupported '$this'")
        }
    }
}

fun SwaggerModel.InfoGenType<*>.findField(name: String, path: List<String> = listOf(), matchType: KClass<out SwaggerModel.GenType>? = null): List<String>? =
    type.findField(name, path, matchType)

fun SwaggerModel.GenType.findField(name: String, path: List<String> = listOf(), matchType: KClass<out SwaggerModel.GenType>? = null): List<String>? {
    when (this) {
        is SwaggerModel.NamedObject -> {
            return this.kind.type.findField(name, path)
        }
        is SwaggerModel.ObjType -> {
            for ((fname, field) in this.fields) {
                val fpath = path + fname
                if (fname == name && ((matchType == null) || (matchType.isInstance(field.type)))) return fpath
                val res = field.type.findField(name, fpath)
                if (res != null) return res
            }
        }
    }
    return null
}

val <T> IteratorStepInfo<T>.optComma get() = if (this.isLast) "" else ","
