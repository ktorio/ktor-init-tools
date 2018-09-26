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
            out += AuthFeature // required for SwaggerUtils.kt
            if (model.securityDefinitions.isNotEmpty()) {
                out += AuthJwtFeature // @TODO: Do this conditionally based on Security blocks
            }
            return out
        }
    }

    override fun BlockBuilder.render(info: BuildInfo) {
        fileBinary("src/io/ktor/swagger/experimental/SwaggerUtils.kt") { info.fetch("swagger/SwaggerUtils.kt.txt") }
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

        fileSwaggerCommonInterface("src/${model.info.className}.kt", info, model)
        fileSwaggerBackendHandler("src/${model.info.classNameServer}.kt", info, model, registerInstancesDecl)
        fileSwaggerFrontendHandler("src/${model.info.classNameClient}.kt", info, model)
        fileSwaggerBackendTests("test/${model.info.classNameServer}Test.kt", info, model)

        fileText(if (model.filename.endsWith(".json")) "api.json" else "api.yaml") {
            +model.source
        }

        val paramsInUrls = model.paths.values.flatMap { it.methodsList }
            .flatMap { Regex("\\{(\\w+)\\}").findAll(it.path).map { it.groupValues[1] }.toList() }.toSet()

        fileText("http-client.env.json") {
            +Json.encodePrettyUntyped(
                mapOf(
                    "localhost" to mapOf(
                        "host" to "http://127.0.0.1:8080"
                    ) + paramsInUrls.map { "param_$it" to it }.toMap()
                    //"prod" to mapOf(
                    //    "host" to "https://my.domain.com"
                    //)
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

                    for (descLine in method.summaryDescription.lines()) {
                        +"# $descLine"
                    }

                    val escapedPath = path.path.replace(Regex("\\{(\\w+)\\}")) { matchResult ->
                        "{{param_${matchResult.groupValues[1]}}}"
                    }

                    // @TODO: Escaping when required?
                    val queryString = method.parametersQuery
                        .filter { it.default != null }
                        .joinToString("&") { it.name + "=" + it.schema.type.toKotlinDefault(it.default, typed = false) }

                    val rqueryString = if (queryString.isNotEmpty()) "?$queryString" else ""

                    +"$httpMethod {{host}}$escapedPath$rqueryString"
                    for ((sec, secdef) in method.securityDefinitions(model).filter {
                        it.second?.inside == "header" && it.second?.type == SwaggerModel.SecurityType.API_KEY
                    }) {
                        +"${secdef!!.name}: Bearer {{ auth_token }}"
                    }
                    if (httpMethod == "POST" || httpMethod == "PUT") {
                        val requestBody = method.requestBodyMerged.firstOrNull()
                        if (requestBody != null) {
                            val postBody = requestBody.schema.type.toDefaultUntyped()
                            val contentType = requestBody.contentType
                            +"Content-Type: $contentType"
                            +""
                            when (contentType) {
                                ContentType.ApplicationJson -> {
                                    +Json.encodePrettyUntyped(postBody)
                                }
                                ContentType.ApplicationXWwwFormUrlencoded -> {
                                    +Dynamic { postBody.strEntries.map { it.first to it.second.str }.formUrlEncode() }
                                }
                                else -> {
                                    +"# Unsupported contentType=$contentType"
                                }
                            }
                        }
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

    fun List<SwaggerModel.Parameter>.findField(
        vararg names: String,
        matchType: KClass<out SwaggerModel.GenType>? = null
    ): FieldInParamRef? {
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
                val username = parameters.findField(
                    "username",
                    "name",
                    "email",
                    "user",
                    matchType = SwaggerModel.BaseStringType::class
                )
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

    fun BlockBuilder.fileSwaggerBackendHandler(fileName: String, info: BuildInfo, model: SwaggerModel, registerInstancesDecl: List<String>) {
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
                +"class ${model.info.classNameServer}(${registerInstancesDecl.joinToString(", ")}) : SwaggerBaseServer, ${model.info.className}" {
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
        fileText("src/${model.info.classNameClient}.kt") {
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

    fun SwaggerModel.InfoGenType<*>.toKotlinType(): String = type.toKotlinType()

    fun SwaggerModel.GenType.toKotlinType(): String = when (this) {
        is SwaggerModel.OptionalType -> "${this.type.toKotlinType()}?"
        is SwaggerModel.StringType -> "String"
        is SwaggerModel.PasswordType -> "String" // @TODO: SecureString instead?
        is SwaggerModel.DateType -> "Date"
        is SwaggerModel.DateTimeType -> "Date"
        is SwaggerModel.Int32Type -> "Int"
        is SwaggerModel.DoubleType -> "Double"
        is SwaggerModel.Int64Type -> "Long"
        is SwaggerModel.BoolType -> "Boolean"
        is SwaggerModel.NamedObject -> name
        is SwaggerModel.ArrayType -> "List<${this.items.toKotlinType()}>"
        //is SwaggerModel.ObjType -> "Any/*Unsupported ${this.fields}, namePath=$namePath, guessName=$guessName, guessPath=$guessPath*/"
        is SwaggerModel.ObjType -> guessName
        is SwaggerModel.VoidType -> "Unit"
        else -> error("Unsupported '$this' class=${this::class}")
    }

    fun SwaggerModel.GenType?.toKotlinDefault(default: Any?, typed: Boolean, indentation: Int = 0): String {
        return indentString(indentation) { toKotlinDefault(this@toKotlinDefault, default, typed) }
    }

    fun Indenter.toKotlinDefault(type: SwaggerModel.InfoGenType<*>?, default: Any?, typed: Boolean) =
        toKotlinDefault(type?.type, default, typed)


    fun Indenter.toKotlinDefault(type: SwaggerModel.GenType?, default: Any?, typed: Boolean) {
        Dynamic {
            when (type) {
                null -> +"null"
                is SwaggerModel.OptionalType -> +"null"
                is SwaggerModel.BaseStringType -> {
                    if (default is SwaggerModel.Identifier) +default.id else +(default?.toString() ?: "").quote()
                }
                is SwaggerModel.DateType -> +"Date()"
                is SwaggerModel.DateTimeType -> +"Date()"
                is SwaggerModel.Int32Type -> +"${default.tryInt ?: 0}"
                is SwaggerModel.DoubleType -> +"${default.tryDouble ?: 0.0}"
                is SwaggerModel.Int64Type -> +"${default.tryLong ?: 0L}"
                is SwaggerModel.BoolType -> +"${default.tryBool ?: false}"
                is SwaggerModel.ArrayType -> +"listOf()"
                is SwaggerModel.MapLikeGenType -> {
                    if (typed && type is SwaggerModel.NamedObject) {
                        val def = type
                        +"${type.name}("
                        indent {
                            val props = def.fields.entries.toList()
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
                                    toKotlinDefault(prop, rdefault, typed)
                                }}${info.optComma}"
                            }
                        }
                        +")"
                    }
                }
                is SwaggerModel.VoidType -> +"Unit"
                else -> error("Unsupported '$type'")
            }
        }
    }
}

private fun BlockBuilder.fileSwaggerBackendTests(fileName: String, info: BuildInfo, model: SwaggerModel) {
    fileText(fileName) {
        SEPARATOR {
            +"package ${info.artifactGroup}"
        }
        SEPARATOR {
            +"import java.util.*"
            +"import io.ktor.config.*"
            +"import io.ktor.http.*"
            +"import io.ktor.request.*"
            +"import io.ktor.server.testing.*"
            +"import io.ktor.swagger.experimental.*"
            +"import kotlin.test.*"
        }
        SEPARATOR {
            +"class SwaggerRoutesTest" {
                for (path in model.paths.values) {
                    for (method in path.methods.values) {
                        SEPARATOR {
                            +"/**"
                            +" * @see ${model.info.classNameServer}.${method.methodName}"
                            +" */"
                            +"@Test"
                            +"fun test${method.methodName.capitalize()}()" {
                                +"withTestApplication" {
                                    +"// @TODO: Adjust path as required"
                                    +"handleRequest(HttpMethod.${method.method.toLowerCase().capitalize()}, \"${method.path}\") {"
                                    when (method.method.toUpperCase()) {
                                        "POST", "PUT" -> indent {
                                            +"// @TODO: Your body here"
                                            +"setBodyJson(mapOf<String, Any?>())"
                                        }
                                    }
                                    +"}.apply {"
                                    indent {
                                        +"// @TODO: Your test here"
                                        +"assertEquals(HttpStatusCode.OK, response.status())"
                                    }
                                    +"}"
                                }
                            }
                        }
                    }
                }
                SEPARATOR {
                    +"fun <R> withTestApplication(test: TestApplicationEngine.() -> R): R" {
                        +"return withApplication(createTestEnvironment())" {
                            +"(environment.config as MapApplicationConfig).apply" {
                                +"put(\"jwt.secret\", \"TODO-change-this-supersecret-or-use-SECRET-env\")"
                            }
                            +"application.module()"
                            +"test()"
                        }
                    }
                }

                SEPARATOR {
                    +"fun TestApplicationRequest.setBodyJson(value: Any?) = setBody(Json.stringify(value))"
                }
            }
        }
    }
}

fun SwaggerModel.InfoGenType<*>.findField(
    name: String,
    path: List<String> = listOf(),
    matchType: KClass<out SwaggerModel.GenType>? = null
): List<String>? =
    type.findField(name, path, matchType)

fun SwaggerModel.GenType.findField(
    name: String,
    path: List<String> = listOf(),
    matchType: KClass<out SwaggerModel.GenType>? = null
): List<String>? {
    when (this) {
        //is SwaggerModel.NamedObject -> return this.kind.type.findField(name, path)
        is SwaggerModel.MapLikeGenType -> {
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
