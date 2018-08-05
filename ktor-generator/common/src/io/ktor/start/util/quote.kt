package io.ktor.start.util

fun String.escape(): String {
    val out = StringBuilder()
    for (n in 0 until this.length) {
        val c = this[n]
        when (c) {
            '\\' -> out.append("\\\\")
            '"' -> out.append("\\\"")
            '\n' -> out.append("\\n")
            '\r' -> out.append("\\r")
            '\t' -> out.append("\\t")
            else -> if (c in ' ' until '\u007f') {
                out.append(c)
            } else {
                out.append("\\u" + c.toInt().toString(16).padStart(4, '0'))
            }
        }
    }
    return out.toString()
}

fun String.unescape(): String {
    val out = StringBuilder()
    var n = 0
    while (n < this.length) {
        val c = this[n++]
        when (c) {
            '\\' -> {
                val c2 = this[n++]
                when (c2) {
                    '\\' -> out.append('\\')
                    '"' -> out.append('\"')
                    'n' -> out.append('\n')
                    'r' -> out.append('\r')
                    't' -> out.append('\t')
                    'u' -> {
                        val chars = this.substring(n, n + 4)
                        n += 4
                        out.append(chars.toInt(16).toChar())
                    }
                    else -> {
                        out.append("\\$c2")
                    }
                }
            }
            else -> out.append(c)
        }
    }
    return out.toString()
}

fun String?.quote(): String = if (this != null) "\"${this.escape()}\"" else "null"

fun String.isQuoted(): Boolean = this.startsWith('"') && this.endsWith('"')

fun String.unquote(): String = if (isQuoted()) {
    this.substring(1, this.length - 1).unescape()
} else {
    this
}

val Any?.kquoteLit: String get() {
    return when (this) {
        null -> "null"
        is Number -> "$this"
        is String -> this.quote()
        is Pair<*, *> -> this.first.kquoteLit + " to " + this.second.kquoteLit
        is List<*> -> "listOf(" + this.joinToString(", ") { it.kquoteLit } + ")"
        is Set<*> -> "setOf(" + this.joinToString(", ") { it.kquoteLit } + ")"
        is Map<*, *> ->
            "mapOf(" + this.entries.joinToString(", ") { it.key.kquoteLit + " to " + it.value.kquoteLit } + ")"
        is Regex -> "Regex(" + this.pattern.quote() + ")"
        else -> "<error>"
    }
}
