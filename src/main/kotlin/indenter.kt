
class Indenter {
    @PublishedApi
    internal var indentation = 0
    private val lines = arrayListOf<String>()

    object Indents {
        val indents = arrayListOf<String>()
        operator fun get(index: Int): String {
            while (indents.size <= index) indents.add((indents.lastOrNull()?.plus("    ") ?: ""))
            return indents[index]
        }
    }

    fun line(str: String) {
        lines += Indents[indentation] + str
    }

    inline fun line(str: String, callback: () -> Unit) {
        line("$str {")
        indent(callback)
        line("}")
    }

    inline operator fun String.invoke(callback: () -> Unit) = line(this, callback)
    inline operator fun String.unaryPlus() = line(this)

    inline fun indent(callback: () -> Unit) {
        indentation++
        try {
            callback()
        } finally {
            indentation--
        }
    }

    override fun toString() = lines.joinToString("\n")
}

fun indenter(callback: Indenter.() -> Unit): String = Indenter().apply(callback).toString()
