package io.ktor.start.swagger

import io.ktor.start.util.*

data class SwaggerModel(
    val filename: String,
    val info: SwaggerInfo,
    val basePath: String,
    val schemes: List<String>,
    val produces: List<String>,
    val consumes: List<String>,
    val securityDefinitions: Map<String, SecurityDefinition>,
    val paths: Map<String, PathModel>,
    val definitions: Map<String, TypeDef>
) {
    interface GenType
    interface BasePrimType : GenType
    data class PrimType(val type: String, val format: String?, val untyped: Any?) : BasePrimType
    object StringType : BasePrimType {
        override fun toString(): String = "String"
    }
    object IntType : BasePrimType {
        override fun toString(): String = "Int"
    }
    object LongType : BasePrimType {
        override fun toString(): String = "Long"
    }
    object BoolType : BasePrimType {
        override fun toString(): String = "Bool"
    }
    object DoubleType : BasePrimType {
        override fun toString(): String = "Double"
    }
    data class RefType(val type: String) : GenType {
        override fun toString(): String = type.substringAfterLast('/')
    }
    data class ArrayType(val items: GenType) : GenType {
        override fun toString(): String = "List<$items>"
    }
    data class OptionalType(val type: GenType) : GenType {
        override fun toString(): String = "$type?"
    }
    data class ObjType(val fields: Map<String, GenType>) : GenType {
        override fun toString(): String = "Any/*Unsupported {$fields}*/"
    }

    data class Prop(val name: String, val type: GenType, val required: Boolean) {
        val rtype = if (required) type else OptionalType(type)
    }

    data class TypeDef(
        val name: String,
        val props: Map<String, Prop>
    ) {
        val propsList = props.values
    }

    class SecurityDefinition(
        val kname: String,
        val description: String,
        val type: String,
        val name: String,
        val inside: String
    )


    data class NamedUrl(val name: String, val url: String)

    data class Parameter(
        val name: String,
        val inside: String,
        val required: Boolean,
        val description: String,
        val default: Any?,
        val schema: GenType
    )

    data class Security(
        val name: String,
        val info: List<String>
    )

    data class PathMethodModel(
        val path: String,
        val method: String,
        val summary: String,
        val description: String,
        val tags: List<String>,
        val security: List<Security>,
        val operationId: String,
        val parameters: List<Parameter>,
        val responses: List<Response>
    )

    data class PathModel(
        val path: String,
        val methods: Map<String, PathMethodModel>
    ) {
        val methodsList = methods.values
    }

    data class SwaggerInfo(
        val description: String,
        val version: String,
        val title: String,
        val contact: NamedUrl,
        val license: NamedUrl
    )

    data class Response(
        val code: String,
        val description: String,
        val schema: GenType?
    ) {
        val intCode = code.toIntOrNull() ?: -1
    }

    companion object {
        fun parseDefinitionElement(def: Any?): GenType {
            return Dynamic {
                val ref = def["\$ref"]
                if (ref != null) {
                    RefType(ref.str)
                } else {
                    val type = def["type"]
                    if (type == "array") {
                        val items = def["items"]
                        ArrayType(parseDefinitionElement(items))
                    } else {
                        val format = def["format"]
                        when (type.str) {
                            "string" -> StringType
                            "integer", "int" -> IntType
                            "double", "number" -> DoubleType
                            "long" -> LongType
                            "bool", "boolean" -> BoolType
                            "null" -> error("null? : $def")
                            "object" -> {
                                val props = def["properties"]
                                val entries = props.strEntries.map { it.first to parseDefinitionElement(it.second) }.toMap()
                                ObjType(entries)
                            }
                            else -> {
                                //error("Other prim $type, $def")
                                PrimType(type.str, format?.str, def)
                            }
                        }
                    }
                }
            }
        }

        fun parseDefinition(name: String, def: Any?): TypeDef {
            //println("Definition $name:")
            return Dynamic {
                //println(" - " + def["required"].list)
                val type = def["type"].str
                if (type != "object") error("Only supported 'object' definitions but found '$type'")
                val required = def["required"].strList.toSet()
                val props = def["properties"].let {
                    it.strEntries.map { (key, element) ->
                        val pdef = parseDefinitionElement(element)
                        key to Prop(key.str, pdef, key in required)
                    }.toMap()
                }

                TypeDef(name, props)
            }
        }

        fun parseParameter(def: Any?): Parameter {
            return Dynamic {
                Parameter(
                    name = def["name"].str,
                    inside = def["in"].str,
                    required = def["required"].bool,
                    description = def["description"].str,
                    default = def["default"],
                    schema = parseDefinitionElement(def["schema"] ?: def)
                )
            }
        }

        fun parseMethodPath(path: String, method: String, def: Any?): PathMethodModel {
            return Dynamic {
                PathMethodModel(
                    path = path,
                    method = method,
                    summary = def["summary"].str,
                    description = def["description"].str,
                    tags = def["tags"].strList,
                    security = def["security"].list.map {
                        val name = it.strKeys.first()
                        val info = it[name]
                        Security(name, info.strList)
                    },
                    operationId = def["tags"].str,
                    parameters = def["parameters"].list.map { parseParameter(it) },
                    responses = def["responses"].let {
                        it.strEntries.map { (code, rdef) ->
                            Response(code, rdef["description"].str, rdef["schema"]?.let { parseDefinitionElement(it) })
                        }
                    }
                )
            }
        }

        fun parsePath(path: String, def: Any?): PathModel {
            return Dynamic {
                PathModel(path, def.strEntries.map { (method, methodDef) ->
                    method to parseMethodPath(path, method, methodDef)
                }.toMap())
            }
        }

        fun parse(model: Any?, filename: String = "unknown.json"): SwaggerModel {
            return Dynamic {
                if (model["swagger"] != "2.0") error("Not a swagger: '2.0' model")
                val info = model["info"].let {
                    SwaggerInfo(
                        description = it["description"].str,
                        version = it["version"].str,
                        title = it["title"].str,
                        contact = it["contact"].let { NamedUrl(it["name"].str, it["url"].str) },
                        license = it["license"].let { NamedUrl(it["name"].str, it["url"].str) }
                    )
                }
                val basePath = model["basePath"].str
                val schemes = model["schemes"].list.map { it.str }
                val produces = model["produces"].list.map { it.str }
                val consumes = model["consumes"].list.map { it.str }
                val securityDefinitions = model["securityDefinitions"].let {
                    it.strEntries.map { (kname, obj) ->
                        kname to SecurityDefinition(
                            kname = kname.str,
                            description = obj["description"].str,
                            type = obj["type"].str,
                            name = obj["name"].str,
                            inside = obj["in"].str
                        )
                    }.toMap()
                }
                val paths = model["paths"].let {
                    it.strEntries.map { (key, obj) ->
                        key to parsePath(key, obj)
                    }.toMap()
                }
                val definitions = model["definitions"].let {
                    it.strEntries.map { (key, obj) ->
                        key to parseDefinition(key, obj)
                    }.toMap()
                }
                SwaggerModel(
                    filename = filename,
                    info = info,
                    basePath = basePath,
                    schemes = schemes,
                    produces = produces,
                    consumes = consumes,
                    securityDefinitions = securityDefinitions,
                    paths = paths,
                    definitions = definitions
                )
            }
        }
    }
}
