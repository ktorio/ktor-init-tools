package io.ktor.start.swagger

import io.ktor.start.BuildInfo
import io.ktor.start.features.client.ApacheClientEngine
import io.ktor.start.features.server.*
import io.ktor.start.project.ApplicationConf
import io.ktor.start.project.ApplicationKt
import io.ktor.start.util.*
import kotlin.reflect.KClass

data class SwaggerArguments(val arguments: List<SwaggerArgument>) {
    val instances get() = arguments.joinToString(", ") { it.instance }
    val decls get() = arguments.joinToString(", ") { it.decl }
}
data class SwaggerArgument(val decl: String, val instance: String)

fun SwaggerModel.InfoGenType<*>.toKotlinType(): String = type.toKotlinType()

fun SwaggerModel.GenType.toKotlinType(): String = when (this) {
    is SwaggerModel.OptionalType -> "${this.type.toKotlinType()}?"
    is SwaggerModel.StringType -> "String"
    is SwaggerModel.BinaryStringType -> "String"
    is SwaggerModel.PasswordType -> "String" // @TODO: SecureString instead?
    is SwaggerModel.DateType -> "Date"
    is SwaggerModel.DateTimeType -> "Date"
    is SwaggerModel.Int32Type -> "Int"
    is SwaggerModel.DoubleType -> "Double"
    is SwaggerModel.FloatType -> "Float"
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
            is SwaggerModel.FloatType -> +"${default.tryFloat ?: 0.0f}"
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
