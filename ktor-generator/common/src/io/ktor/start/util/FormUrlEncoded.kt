package io.ktor.start.util

fun String.encodeURIComponent(): String {
    return buildString {
        for (v in this@encodeURIComponent) {
            when (v) {
                '&', ' ', '=', '/' -> {
                    append('%')
                    append(v.toInt().toString(16).padStart(2, '0'))
                }
                else -> append(v)
            }
        }
    }
}

//fun List<Pair<String, String>>.formUrlEncode(): String =
//    joinToString("&") { it.first.encodeURIComponent() + "=" + it.second.encodeURIComponent() }


// @TODO: Encode
fun String.formUrlDecode(): Map<String, List<String>> = this.split('&')
    .map { val (key, value) = it.split('=', limit = 2) + listOf(""); key to value }
    .groupBy { it.first }
    .map { it.key to it.value.map { it.second } }
    .toMap()

fun List<Pair<String, String>>.formUrlEncode(): String =
    this.joinToString("&") {
        when {
            it.second.isNotEmpty() -> "${it.first.encodeURIComponent()}=${it.second.encodeURIComponent()}"
            else -> it.first.encodeURIComponent()
        }
    }

fun Map<String, List<String>>.formUrlEncode(): String =
    entries.flatMap { entry -> entry.value.map { entry.key to it } }.formUrlEncode()
