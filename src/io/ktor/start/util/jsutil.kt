package io.ktor.start.util

external object Object {
    fun keys(obj: dynamic): Array<String>
    fun values(obj: dynamic): Array<dynamic>
}

fun jsObject(vararg pairs: List<Pair<String, dynamic>>): dynamic {
    val obj = js("({})")
    for ((key, value) in pairs) obj[key] = value
    return obj
}
