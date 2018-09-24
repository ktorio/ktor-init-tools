package io.ktor.start.util

object Json {
    fun invalidJson(msg: String = "Invalid JSON"): Nothing = error(msg)

    fun parse(s: String): Any? = StrReader(s).decode()

    fun followReference(current: Any?, root: Any?, path: String): Any? {
        return Dynamic {
            if (!path.startsWith("#/")) error("Only supported absolute JSON paths!")
            val rpath = path.substring(2)
            var node = root
            for (part in rpath.split("/")) {
                node = node[part]
            }
            node
        }
    }

    fun StrReader.decode(): Any? {
        val ic = skipSpaces().read()
        when (ic) {
            '{' -> {
                val out = kotlin.collections.LinkedHashMap<String, Any?>()
                obj@ while (true) {
                    when (skipSpaces().read()) {
                        '}' -> break@obj; ',' -> continue@obj; else -> unread()
                    }
                    val key = decode() as String
                    skipSpaces().expect(':')
                    val value = decode()
                    out[key] = value
                }
                return out
            }
            '[' -> {
                val out = kotlin.collections.arrayListOf<Any?>()
                array@ while (true) {
                    when (skipSpaces().read()) {
                        ']' -> break@array; ',' -> continue@array; else -> unread()
                    }
                    val item = decode()
                    out += item
                }
                return out
            }
            '-', '+', in '0'..'9' -> {
                unread()
                val res =
                    readWhile { (it in '0'..'9') || it == '.' || it == 'e' || it == 'E' || it == '-' || it == '+' }
                return res.toDouble()
            }
            't', 'f', 'n' -> {
                unread()
                if (tryRead("true")) return true
                if (tryRead("false")) return false
                if (tryRead("null")) return null
                invalidJson()
            }
            '"' -> {
                unread()
                return readStringLit()
            }
            else -> invalidJson("JSON: Not expected '$ic'")
        }
    }

    fun stringify(obj: Any?) = encodeUntyped(obj)
    fun encodeUntyped(obj: Any?) = StringBuilder().apply { encodeUntyped(obj, this) }.toString()

    fun encodeUntyped(obj: Any?, b: StringBuilder) {
        when (obj) {
            null -> b.append("null")
            is Boolean -> b.append(if (obj) "true" else "false")
            is Map<*, *> -> {
                b.append('{')
                for ((i, v) in obj.entries.withIndex()) {
                    if (i != 0) b.append(',')
                    encodeUntyped(v.key, b)
                    b.append(':')
                    encodeUntyped(v.value, b)
                }
                b.append('}')
            }
            is Iterable<*> -> {
                b.append('[')
                for ((i, v) in obj.withIndex()) {
                    if (i != 0) b.append(',')
                    encodeUntyped(v, b)
                }
                b.append(']')
            }
            is Enum<*> -> encodeString(obj.name, b)
            is String -> encodeString(obj, b)
            is Number -> b.append("$obj")
            is CustomJsonSerializer -> obj.encodeToJson(b)
            else -> {
                error("JSON: Don't know how to serialize $obj")
                //encode(ClassFactory(obj::class).toMap(obj), b)
            }
        }
    }

    fun encodePrettyUntyped(obj: Any?, indentChunk: String = "\t"): String = Indenter().apply {
        encodePrettyUntyped(obj, this)
    }.toString(doIndent = true, indentChunk = indentChunk)

    fun encodePrettyUntyped(obj: Any?, b: Indenter) {
        when (obj) {
            null -> b.inline("null")
            is Boolean -> b.inline(if (obj) "true" else "false")
            is Map<*, *> -> {
                val entries = obj.entries
                if (entries.isEmpty()) {
                    b.inline("{}")
                } else {
                    b.line("{")
                    b.indent {
                        for ((i, v) in entries.withIndex()) {
                            if (i != 0) b.line(",")
                            b.inline(encodeString("" + v.key))
                            b.inline(": ")
                            encodePrettyUntyped(v.value, b)
                            if (i == entries.size - 1) b.line("")
                        }
                    }
                    b.inline("}")
                }
            }
            is Iterable<*> -> {
                val entries = obj.toList()
                if (entries.isEmpty()) {
                    b.inline("[]")
                } else {
                    b.line("[")
                    b.indent {
                        for ((i, v) in entries.withIndex()) {
                            if (i != 0) b.line(",")
                            encodePrettyUntyped(v, b)
                            if (i == entries.size - 1) b.line("")
                        }
                    }
                    b.inline("]")
                }
            }
            is String -> b.inline(encodeString(obj))
            is Number -> b.inline("$obj")
            //else -> encodePretty(ClassFactory(obj::class).toMap(obj), b)
            is CustomJsonSerializer -> {
                b.inline(StringBuilder().apply { obj.encodeToJson(this) }.toString())
            }
            else -> {
                error("JSON: Don't know how to serialize $obj")
                //encode(ClassFactory(obj::class).toMap(obj), b)
            }
        }
    }

    private fun encodeString(str: String) = StringBuilder().apply { encodeString(str, this) }.toString()

    private fun encodeString(str: String, b: StringBuilder) {
        b.append('"')
        for (c in str) {
            when (c) {
                '\\' -> b.append("\\\\"); '\'' -> b.append("\\'")
                //'/' -> b.append("\\/") // Stricter, but not as nice for strings with urls/paths because of the https://
                '"' -> b.append("\\\""); '\b' -> b.append("\\b"); '\u000c' -> b.append("\\f")
                '\n' -> b.append("\\n"); '\r' -> b.append("\\r"); '\t' -> b.append("\\t")
                else -> b.append(c)
            }
        }
        b.append('"')
    }
}

interface CustomJsonSerializer {
    fun encodeToJson(b: StringBuilder)
}

fun Map<*, *>.toJsonUntyped() = Json.encodeUntyped(this)
