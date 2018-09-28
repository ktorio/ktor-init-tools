package io.ktor.start.util

inline fun <T> buildList(callback: MutableList<T>.() -> Unit): List<T> = ArrayList<T>().apply(callback)