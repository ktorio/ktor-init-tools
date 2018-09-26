package io.ktor.start.util

class MetaListIterable<T>(val items: List<T>) : Iterable<Pair<IteratorStepInfo<T>, T>> {
    override fun iterator() =
        items.withIndex().map { IteratorStepInfo(it.index, items.size, it.value) to it.value }.iterator()
}

val <T> Iterable<T>.metaIter get() = MetaListIterable(this.toList())

data class IteratorStepInfo<T>(
    val index0: Int,
    val length: Int,
    val item: T
) {
    val isFirst get() = index0 == 0
    val isLast get() = index0 >= length - 1
}

val <T> IteratorStepInfo<T>.optComma get() = if (this.isLast) "" else ","
