package io.ktor.start.util

object ID {
    fun normalizeMethodName(str: List<String>): String = normalizeMethodName(str.joinToString("/"))
    fun normalizeClassName(str: List<String>): String = normalizeClassName(str.joinToString("/"))

    fun normalizeMethodName(str: String): String = normalize(str).decapitalize()
    fun normalizeClassName(str: String): String = normalize(str).capitalize()
    fun normalize(str: String): String = Regex("\\w+").findAll(str).joinToString("") { it.value.capitalize() }
}