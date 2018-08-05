package io.ktor.start.util

object ID {
    fun normalizeMethodName(str: String): String = normalize(str).decapitalize()
    fun normalizeClassName(str: String): String = normalize(str).capitalize()
    fun normalize(str: String): String {
        return Regex("\\w+").findAll(str).joinToString("") { it.value.capitalize() }
    }
}