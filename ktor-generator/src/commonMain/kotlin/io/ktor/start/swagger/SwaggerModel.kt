package io.ktor.start.swagger

import io.dahgan.*
import io.ktor.start.util.*
import io.ktor.start.util.DynamicAccess.entries
import io.ktor.start.util.DynamicAccess.get
import io.ktor.start.util.DynamicAccess.str
import kotlin.reflect.*

/**
 * https://swagger.io/specification/
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/1.2.md
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md
 * https://blog.readme.io/an-example-filled-guide-to-swagger-3-2/
 */
data class SwaggerModel(
    val filename: String,
    val untyped: Any?,
    val source: String,
    val info: SwaggerInfo,
    val servers: List<Server>,
    val produces: List<String>,
    val consumes: List<String>,
    val securityDefinitions: Map<String, SecurityDefinition>,
    val routes: Map<String, PathModel>
) {
    val routesList = routes.values
    val definitions: Map<String, TypeDef> = this.constructDefinitions()

    val tags = routesList.flatMap { it.methodsList }.flatMap { it.processedTags }.distinct()

    data class Server(
        val url: String,
        val description: String,
        val variables: Map<String, ServerVariable>
    ) {
        //V2:
        //info:
        //  title: Swagger Sample App
        //host: example.com
        //basePath: /v1
        //schemes: ['http', 'https']
        //
        //V3:
        //servers:
        //- url: https://{subdomain}.site.com/{version}
        //  description: The main prod server
        //  variables:
        //    subdomain:
        //      default: production
        //    version:
        //      enum:
        //        - v1
        //        - v2
        //      default: v2
    }

    data class ServerVariable(
        val name: String,
        val default: String,
        val description: String,
        val enum: List<String>?
    )

    class InfoGenType<T : GenType>(val type: T, val rule: JsonRule?, val default: Any?) {
        override fun toString(): String = if (rule != null) "$type($rule)" else "$type"
    }

    interface GenType {
        val ktype: KClass<*>
    }

    interface BasePrimType : GenType

    open class BaseStringType : BasePrimType {
        override val ktype: KClass<*> = String::class
    }

    data class Identifier(val id: String)

    object PasswordType : BaseStringType() {
        override fun toString(): String = "String"
    }

    object Base64Type : BaseStringType() {
        override fun toString(): String = "Base64Type"
    }

    object BinaryStringType : BaseStringType() {
        override fun toString(): String = "String"
    }

    object StringType : BaseStringType() {
        override fun toString(): String = "String"
    }

    object VoidType : GenType {
        override val ktype: KClass<*> = Unit::class
        override fun toString(): String = "Unit"
    }

    abstract class IntegerType : BasePrimType

    inline fun <T> T.validate(validator: (T) -> Boolean): T {
        if (!validator(this)) throw IllegalArgumentException()
        return this
    }

    object Int32Type : IntegerType() {
        override val ktype: KClass<*> = Int::class
        override fun toString(): String = "Int"
    }

    object Int64Type : IntegerType() {
        override val ktype: KClass<*> = Long::class
        override fun toString(): String = "Long"
    }

    object BoolType : BasePrimType {
        override val ktype: KClass<*> = Boolean::class
        override fun toString(): String = "Bool"
    }

    object FloatType : BasePrimType {
        override val ktype: KClass<*> = Float::class
        override fun toString(): String = "Float"
    }

    object DoubleType : BasePrimType {
        override val ktype: KClass<*> = Double::class
        override fun toString(): String = "Double"
    }

    object DateType : BasePrimType {
        override val ktype: KClass<*> = DateTime::class
        override fun toString(): String = "Date"
    }

    object DateTimeType : BasePrimType {
        override val ktype: KClass<*> = DateTime::class
        override fun toString(): String = "DateTime"
    }

    data class ArrayType(val items: InfoGenType<GenType>) : GenType {
        override val ktype: KClass<*> = List::class
        override fun toString(): String = "List<$items>"
    }

    data class OptionalType(val type: InfoGenType<GenType>) : GenType {
        override val ktype: KClass<*> = Any::class
        override fun toString(): String = "$type?"
    }

    interface MapLikeGenType : GenType {
        val fields: Map<String, InfoGenType<GenType>>
    }

    //data class UnnamedObject(val type: ObjType)

    data class NamedObject(val path: String, val kind: InfoGenType<ObjType>) : MapLikeGenType {
    //data class NamedObject(val path: String, val def: TypeDef?) : MapLikeGenType {
        override val ktype: KClass<*> = Any::class
        val name = path.substringAfterLast('/')

        override fun toString(): String = name
        override val fields = kind.type.fields
    }

    data class ObjType(val namePath: String?, val guessPath: List<String>, val propList: List<Prop>) : MapLikeGenType {
        val props = propList.associateBy { it.name }
        override val fields: Map<String, InfoGenType<GenType>> = propList.map { it.name to it.type }.toMap()
        override val ktype: KClass<*> = Map::class
        val guessName = ID.normalizeClassName(if (guessPath.isNotEmpty()) guessPath else listOf("Unknown"))
        override fun toString(): String = "Any/*Unsupported {$fields} namePath=$namePath, guessName=$guessName, guessPath=$guessPath*/"
    }

    data class Prop(val name: String, val type: InfoGenType<GenType>, val required: Boolean) {
        val rtype = if (required) type else OptionalType(type)
        val rule get() = type.rule

        fun toRuleString(param: String = name): String? = rule?.toKotlin(param, type)
    }

    class SecurityDefinition(
        val id: String,
        val description: String,
        val type: SecurityType,
        val name: String,
        val inside: String
    )

    data class Contact(val name: String, val url: String, val email: String)
    data class License(val name: String, val url: String)

    enum class Inside(val id: String) {
        QUERY("query"), HEADER("header"), PATH("path"), FORM_DATA("formData"), BODY("body");

        companion object {
            val BY_ID = values().associateBy { it.id }
            operator fun get(id: String) = BY_ID[id] ?: error("Unsupported Parameter.'in'='$id'")
        }
    }

    enum class SecurityType(val id: String) {
        API_KEY("apiKey"), HTTP("http"), OAUTH2("oauth2"), OPEN_ID_CONNECT("openIdConnect");

        companion object {
            val BY_ID = values().associateBy { it.id }
            operator fun get(id: String) = BY_ID[id] ?: error("Unsupported Security.'type'='$id'")
        }
    }

    data class Parameter(
        val name: String,
        val inside: Inside,
        val required: Boolean,
        val description: String,
        val default: Any?,
        val schema: InfoGenType<GenType>
    )

    data class Security(
        val name: String,
        val info: List<String>
    )

    data class ProcessedTag(val tag: String) {
        val id = ID.normalizeMethodName(tag)
        val registerMethodName = ID.normalizeMethodName("register" + tag.capitalize())
    }

    data class PathMethodModel(
        val path: String,
        val method: String,
        val summary: String,
        val description: String?,
        val tags: List<String>,
        val security: List<Security>,
        val operationId: String?,
        val parameters: List<Parameter>,
        val responses: List<Response>,
        val requestBody: List<TypeWithContentType>
    ) {
        val processedTags = tags.map { ProcessedTag(it) }
        val summaryDescription = (summary + "\n\n" + (description ?: "")).trim()

        val parametersQuery = parameters.filter { it.inside == Inside.QUERY }
        val parametersBody = parameters.filter { it.inside == Inside.BODY }
        val parametersFormData = parameters.filter { it.inside == Inside.FORM_DATA }
        val parametersPath = parameters.filter { it.inside == Inside.PATH }
        val parametersHeader = parameters.filter { it.inside == Inside.HEADER }

        val requestBodyOld = if (parametersBody.isNotEmpty())
            listOf(TypeWithContentType(ContentType.ApplicationJson, InfoGenType(ObjType(null, listOf(), parametersBody.map { Prop(it.name, it.schema, required = true) }), null, null)))
        else
            listOf()

        val requestBodyMerged = requestBodyOld + requestBody

        fun securityDefinitions(model: SwaggerModel): List<Pair<Security, SecurityDefinition?>> {
            return security.map { it to model.securityDefinitions[it.name] }
        }

        val errorResponses = responses.filter { it.intCode != 200 }
        val okResponse = responses.firstOrNull { it.intCode == 200 }
        val defaultResponse = okResponse ?: Response("200", "OK", listOf(TypeWithContentType(ContentType.ApplicationJson, InfoGenType(StringType, rule = null, default = null))))
        val responseType = defaultResponse.schema?.type ?: SwaggerModel.VoidType
        val methodName = ID.normalizeMethodName(operationId ?: "$method/$path")
    }

    data class PathModel(
        val path: String,
        val methods: Map<String, PathMethodModel>
    ) {
        val methodsList = methods.values
    }

    data class SwaggerInfo(
        val title: String,
        val description: String,
        val termsOfService: String,
        val version: String,
        val contact: Contact,
        val license: License
    ) {
        val className = title.takeIf { it.isNotEmpty() }?.let { ID.normalizeClassName(it) } ?: "SwaggerApi"
        val classNameServer = "${className}Server"
        val classNameClient = "${className}Client"
        val classNameServerTest = "${classNameServer}Test"
    }

    data class Response(
        val code: String,
        val description: String,
        val kinds: List<TypeWithContentType>
    ) {
        val schema: InfoGenType<GenType>? = kinds.firstOrNull()?.schema
        val intCode = when (code) {
            "default" -> 200
            else -> code.toIntOrNull() ?: -1
        }
    }

    class TypeWithContentType(val contentType: ContentType, val schema: InfoGenType<GenType>)

    companion object {
        object Versions {
            val V2 = SemVer("2.0")
            val V3 = SemVer("3.0.0")
            val V3_0_1 = SemVer("3.0.1")

            val MIN = V2
            val MAX = V3_0_1
        }

        // https://swagger.io/specification/#data-types
        fun parseDefinitionElement(def: Any?, root: Any?, namePath: String?, guessPath: List<String>): InfoGenType<GenType> {
            return Dynamic {
                val ref = def["\$ref"]
                if (ref != null) {
                    val path = ref.str
                    val referee = parseDefinitionElement(Json.followReference(def, root, path), root, path, listOf(path))
                    return if (referee.type is ObjType) {
                        @Suppress("UNCHECKED_CAST")
                        InfoGenType(NamedObject(path, referee as InfoGenType<ObjType>), null, null)
                    } else {
                        referee
                    }
                } else {
                    val type = def["type"]
                    val format = def["format"]
                    val default = def["default"]
                    val rule = JsonRule.parseOrNull(def)
                    val ptype = when (type) {
                        // Primitive
                        "integer" -> when (format.str) {
                            "int32", "null", "" -> Int32Type
                            "int64" -> Int64Type
                            else -> Int32Type
                        }
                        "number" -> when (format.str) {
                            "float" -> FloatType
                            "double", "null", "" -> DoubleType
                            else -> DoubleType
                        }
                        "string" -> when (format.str) {
                            "string", "null", "" -> StringType
                            "byte" -> Base64Type // Base64
                            "binary" -> BinaryStringType // ISO-8859-1
                            "date" -> DateType
                            "date-time" -> DateTimeType
                            "password" -> PasswordType
                            else -> StringType
                        }
                        "boolean" -> BoolType
                        // Composed Types
                        "array" -> {
                            val items = def["items"]
                            ArrayType(parseDefinitionElement(items, root, null, guessPath + listOf("elements")))
                        }
                        null, "object" -> {
                            val props = def["properties"]
                            val required = def["required"].strList.toSet()
                            val entries =
                                props.strEntries
                                    .map {
                                        Prop(it.first, parseDefinitionElement(it.second, root, null, guessPath + it.first), it.first in required)
                                    }
                            ObjType(namePath, guessPath, entries)
                        }
                        "null" -> error("null? : $def")
                        else -> {
                            error("Other prim $type, $def")
                            //PrimType(type.str, format?.str, def)
                        }
                    }
                    InfoGenType(ptype, rule, default = default)
                }
            }
        }

        fun parseParameter(def: Any?, root: Any?): Parameter {
            return Dynamic {
                val paramName = def["name"].str
                Parameter(
                    name = paramName,
                    inside = Inside[def["in"].str],
                    required = def["required"]?.bool ?: false,
                    description = def["description"].str,
                    default = def["default"],
                    schema = parseDefinitionElement(def["schema"] ?: def, root, null, listOf("param", paramName))
                )
            }
        }

        fun parseMethodPath(path: String, method: String, def: Any?, root: Any?, version: SemVer): PathMethodModel {
            return Dynamic {
                val operationId = def["operationId"]?.str
                PathMethodModel(
                    path = path,
                    method = method,
                    summary = def["summary"].str,
                    description = def["description"]?.str,
                    tags = def["tags"].strList,
                    security = def["security"].list.map {
                        val name = it.strKeys.first()
                        val info = it[name]
                        Security(name, info.strList)
                    },
                    operationId = operationId,
                    parameters = def["parameters"].list.map { parseParameter(it, root) },
                    responses = def["responses"].let {
                        it.strEntries.map { (code, rdef) ->
                            Response(code, rdef["description"].str, parseTypeWithContentTypes(rdef, root, version, listOf("responses")))
                        }
                    },
                    requestBody = parseTypeWithContentTypes(def["requestBody"], root, version, listOf(operationId ?: "$method/$path", "ReqBody"))
                )
            }
        }

        private fun parseTypeWithContentTypes(rdef: Any?, root: Any?, version: SemVer, guessPath: List<String>): List<TypeWithContentType> {
            val kinds = arrayListOf<TypeWithContentType>()

            when (version.v) {
                SwVersion.V2 -> {
                    val schema = rdef["schema"]?.let { parseDefinitionElement(it, root, null, guessPath) }
                    if (schema != null) {
                        kinds += TypeWithContentType(ContentType.ApplicationJson, schema)
                    }
                }
                SwVersion.V3 -> {
                    val content = rdef["content"]
                    for (fcontent in content.entries) {
                        val contentType = fcontent.first?.str
                        val contentInfo = fcontent.second
                        val schema = contentInfo["schema"]
                        val fschema = schema?.let { parseDefinitionElement(it, root, null, guessPath) }
                        if (contentType != null && fschema != null) {
                            kinds += TypeWithContentType(ContentType(contentType), fschema)
                        }
                    }
                }
            }

            return kinds
        }

        enum class SwVersion {
            V2, V3
        }

        fun parsePath(path: String, def: Any?, root: Any?, version: SemVer): PathModel {
            return Dynamic {
                PathModel(path, def.strEntries.map { (method, methodDef) ->
                    method to parseMethodPath(path, method, methodDef, root, version)
                }.toMap())
            }
        }

        fun parseJsonOrYaml(source: String, filename: String): SwaggerModel {
            val trimmedSource = source.trim()
            return if (trimmedSource.startsWith("{")) parseJson(source, filename) else parseYaml(source, filename)
        }

        fun parseJson(source: String, filename: String = "unknown.json"): SwaggerModel {
            return parse(Json.parse(source), source, filename)
        }

        fun parseYaml(source: String, filename: String = "unknown.yaml"): SwaggerModel {
            return parse(Yaml.load(source), source, filename)
        }

        val SemVer.v get() = when {
            this.is20() -> SwVersion.V2
            this.is30() -> SwVersion.V3
            else -> error("Unsupported version")
        }
        fun SemVer.is20() = (this < Versions.V3)
        fun SemVer.is30() = (this >= Versions.V3)

        fun parse(model: Any?, source: String, filename: String = "unknown.json"): SwaggerModel {
            return Dynamic {
                val root = model
                val version = model["swagger"] ?: model["openapi"]
                val semVer = SemVer(version.toString())

                if (semVer !in (Versions.MIN..Versions.MAX)) throw IllegalArgumentException("Not a swagger/openapi: '2.0' or '3.0.0' model")

                val info = model["info"].let {
                    SwaggerInfo(
                        title = it["title"].str,
                        description = it["description"].str,
                        termsOfService = it["termsOfService"].str,
                        contact = it["contact"].let { Contact(it["name"].str, it["url"].str, it["email"].str) },
                        license = it["license"].let { License(it["name"].str, it["url"].str) },
                        version = it["version"].str
                    )
                }
                val servers = arrayListOf<Server>()
                when (semVer.v) {
                    SwVersion.V2 -> {
                        val host = model["host"]?.str ?: "127.0.0.1"
                        val basePath = model["basePath"]?.str ?: "/"
                        val schemes = model["schemes"].strList
                        servers += Server(
                            url = "{scheme}://$host$basePath", description = info.description, variables = mapOf(
                                "scheme" to ServerVariable("scheme", schemes.firstOrNull() ?: "https", "", schemes)
                            )
                        )
                    }
                    SwVersion.V3 -> for (userver in model["servers"].list) {
                        servers += Server(
                            url = userver["url"].str,
                            description = userver["description"]?.str ?: "API",
                            variables = userver["variables"].map.map { (uname, uvar) ->
                                val name = uname.str
                                name to ServerVariable(
                                    name,
                                    uvar["default"].str,
                                    uvar["description"].str,
                                    uvar["enum"]?.strList
                                )
                            }.toMap()
                        )
                    }
                }
                val produces = model["produces"].list.map { it.str }
                val consumes = model["consumes"].list.map { it.str }

                val securityDefinitions = model["securityDefinitions"].let {
                    it.strEntries.map { (kname, obj) ->
                        kname to SecurityDefinition(
                            id = kname.str,
                            description = obj["description"].str,
                            type = SecurityType[obj["type"].str],
                            name = obj["name"].str,
                            inside = obj["in"].str
                        )
                    }.toMap()
                }
                val paths = model["paths"].let {
                    it.strEntries.map { (key, obj) ->
                        key to parsePath(key, obj, root, semVer)
                    }.toMap()
                }

                SwaggerModel(
                    filename = filename,
                    untyped = model,
                    source = source,
                    info = info,
                    servers = servers,
                    produces = produces,
                    consumes = consumes,
                    securityDefinitions = securityDefinitions,
                    routes = paths
                )
            }
        }
    }

    class ReferenceFinder(val model: SwaggerModel) {
        val out = LinkedHashSet<NamedObject>()
        val unnameds = LinkedHashSet<ObjType>()
        val explored = LinkedHashSet<GenType>()

        class Result(val out: Set<NamedObject>, unfilteredUnnameds: Set<ObjType>) {
            val outObjs = out.map { it.kind.type }.toSet()
            val unnamed = unfilteredUnnameds.filter { it !in outObjs }
        }

        fun find(): Result {
            for (path in this.model.routes.values) path.find()
            return Result(out, unnameds)
        }

        fun PathModel.find() {
            for (method in methodsList) method.find()
        }

        fun PathMethodModel.find() {
            for (response in responses) response.find()
            for (param in parameters) param.find()
            for (rb in requestBody) rb.find()
        }

        fun InfoGenType<out GenType>.find() {
            this.type.find()
        }

        fun TypeWithContentType.find() = this.schema.find()

        fun Prop.find() {
            this.type.find()
        }

        fun Parameter.find() {
            this.schema.find()
        }

        fun Response.find() {
            this.schema?.find()
        }

        fun GenType.find() {
            if (this in explored) return
            explored += this

            when (this) {
                is NamedObject -> {
                    out += this
                    kind.find()
                }
                is MapLikeGenType -> {
                    for (field in fields) field.value.find()
                    if (this is ObjType) {
                        unnameds += this
                    }
                }
                is ArrayType -> {
                    items.find()
                }
            }
        }
    }

    data class TypeDef(val name: String, val props: Map<String, Prop>, val synthetic: Boolean) {
        val propsList = props.values
    }
}


fun SwaggerModel.constructDefinitions(): Map<String, SwaggerModel.TypeDef> {
    val res = SwaggerModel.ReferenceFinder(this).find()

    //for (u in res.unnamed) println("unnamed: $u")

    val namedDefs = res.out.map {
        SwaggerModel.TypeDef(it.name, it.kind.type.props, synthetic = false)
    }.filterNotNull().associateBy { it.name }

    val unnamedDefs = res.unnamed.map {
        val props = it.fields.map { (name, type) ->
            name to SwaggerModel.Prop(name, type, true)
        }.toMap()
        SwaggerModel.TypeDef(it.guessName, props, synthetic = true)
    }.associateBy { it.name }

    return namedDefs + unnamedDefs
}


fun JsonRule.toKotlin(param: String, type: SwaggerModel.GenType): String = toKotlin(param, type.ktype)
fun JsonRule.toKotlin(param: String, type: SwaggerModel.InfoGenType<*>): String = toKotlin(param, type.type)

fun SwaggerModel.GenType?.toDefaultUntyped(path: List<String> = listOf(), default: Any? = null): Any? {
    return when (this) {
        null -> null
        is SwaggerModel.OptionalType -> null
        is SwaggerModel.BaseStringType -> default?.str ?: path.joinToString(".")
        is SwaggerModel.DateType -> ""
        is SwaggerModel.DateTimeType -> ""
        is SwaggerModel.Int32Type -> Dynamic { default.tryInt ?: 0 }
        is SwaggerModel.DoubleType -> Dynamic { default.tryDouble ?: 0.0 }
        is SwaggerModel.Int64Type -> Dynamic { default.tryLong ?: 0L }
        is SwaggerModel.BoolType -> Dynamic { default.tryBool ?: false }
        is SwaggerModel.ArrayType -> listOf<Any?>().toMutableList()
        is SwaggerModel.MapLikeGenType -> fields.map { it.key to it.value.type.toDefaultUntyped(path + it.key, it.value.default) }.toMap().toMutableMap()
        is SwaggerModel.VoidType -> Unit
        else -> error("Unsupported '$this'")
    }
}
