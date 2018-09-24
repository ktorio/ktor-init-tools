package io.ktor.start.util

class Stack<T> {
    private val items = arrayListOf<T>()

    val size get() = items.size
    fun pop(): T = items.removeAt(items.size - 1)
    fun peek(): T = items[items.size - 1]
    fun push(value: T) = run { items.add(value) }
}