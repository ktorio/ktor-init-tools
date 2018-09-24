/*
 * Copyright 2018 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package io.ktor.start.util

class Indenter(@PublishedApi internal val actions: ArrayList<Action> = arrayListOf<Indenter.Action>()) {
    object INDENTS {
        private val INDENTS = arrayListOf("")

        operator fun get(index: Int): String {
            if (index >= INDENTS.size) {
                val calculate = INDENTS.size * 10
                var indent = INDENTS[INDENTS.size - 1]
                while (calculate >= INDENTS.size) {
                    indent += "\t"
                    INDENTS.add(indent)
                }
            }
            return if (index <= 0) "" else INDENTS[index]
        }
    }

    interface Action {
        interface Text : Action {
            val str: String
        }

        data class Marker(val data: Any) : Action
        data class Inline(override val str: String) : Text
        data class Line(override val str: String) : Text
        data class LineDeferred(val callback: () -> Indenter) : Action
        object EmptyLineOnce : Action
        object Indent : Action
        object Unindent : Action
    }

    //val indentEmptyLines = false
    val indentEmptyLines = true

    companion object {
        fun genString(init: Indenter.() -> Unit) = gen(init).toString()

        val EMPTY = Indenter.gen { }

        inline fun gen(init: Indenter.() -> Unit): Indenter {
            val indenter = Indenter()
            indenter.init()
            return indenter
        }

        fun single(str: String): Indenter = Indenter(arrayListOf(Action.Line(str)))

        operator fun invoke(init: Indenter.() -> Unit): Indenter = gen(init)
        operator fun invoke(str: String): Indenter = single(str)

        fun replaceString(templateString: String, replacements: Map<String, String>): String {
            val pattern = Regex("\\$(\\w+)")
            return pattern.replace(templateString) { result ->
                replacements[result.groupValues[1]] ?: ""
            }
        }
    }

    var out: String = ""

    fun inline(str: String) = this.apply { this.actions.add(Action.Inline(str)) }
    fun line(indenter: Indenter) = this.apply { this.actions.addAll(indenter.actions) }
    fun line(str: String) = this.apply { this.actions.add(Action.Line(str)) }
    fun line(str: String?) {
        if (str != null) line(str)
    }

    fun mark(data: Any) = this.apply { this.actions.add(Action.Marker(data)) }

    fun linedeferred(init: Indenter.() -> Unit): Indenter {
        this.actions.add(Action.LineDeferred({
            val indenter = Indenter()
            indenter.init()
            indenter
        }))
        return this
    }

    inline fun line(str: String, callback: () -> Unit): Indenter {
        line(if (str.isEmpty()) "{" else "$str {")
        indent(callback)
        line("}")
        return this
    }

    //class IndentedLine

    inline fun line(str: String, afterOpen: String = "", afterClose: String = "", callback: () -> Unit): Indenter {
        val rafter = if (afterOpen.isEmpty()) "" else " $afterOpen"
        line(if (str.isEmpty()) "{$rafter" else "$str {$rafter")
        indent(callback)
        line("}$afterClose")
        return this
    }

    inline fun lineNoOpen(str: String, callback: () -> Unit): Indenter {
        line(str)
        indent(callback)
        line("}")
        return this
    }

    inline fun indent(callback: () -> Unit): Indenter {
        _indent()
        try {
            callback()
        } finally {
            _unindent()
        }
        return this
    }

    inline fun indent(count: Int, callback: () -> Unit): Indenter {
        _indent(count)
        try {
            callback()
        } finally {
            _unindent(count)
        }
        return this
    }

    var indentLevel: Int = 0; private set

    fun _indent() = _indent(1)
    fun _unindent() = _unindent(1)

    fun _indent(count: Int) {
        for (v in 0 until count) actions.add(Action.Indent)
        indentLevel += count
    }

    fun _unindent(count: Int) {
        for (v in 0 until count) actions.add(Action.Unindent)
        indentLevel -= count
    }

    class IndenterEvaluator(val markHandler: ((sb: StringBuilder, line: Int, data: Any) -> Unit)?, val indentEmptyLines: Boolean, val doIndent: Boolean) {
        val out = StringBuilder()
        var line = 0

        var newLine = true
        var indentIndex = 0
        var allowEmptyLine = false

        fun outAppend(str: String) = out.append(str)
        fun outAppend(str: Char) = out.append(str)

        fun doLine() {
            if (doIndent) outAppend('\n')
            line++
            newLine = true
        }

        fun eval(actions: List<Action>) {
            for (action in actions) {
                when (action) {
                    is Action.Text -> {
                        if (newLine) {
                            if (!indentEmptyLines && action.str.isEmpty()) {
                                doLine()
                            } else {
                                if (doIndent) outAppend(INDENTS[indentIndex]) else outAppend(" ")
                            }
                        }
                        outAppend(action.str)
                        if (action is Action.Line) {
                            line += action.str.count { it == '\n' }
                            doLine()
                        } else {
                            newLine = false
                        }
                        allowEmptyLine = true
                    }
                    is Action.LineDeferred -> eval(action.callback().actions)
                    Action.Indent, Action.Unindent -> {
                        allowEmptyLine = false
                        indentIndex += if (action == Action.Indent) +1 else -1
                    }
                    Action.EmptyLineOnce -> {
                        if (allowEmptyLine) {
                            doLine()
                            allowEmptyLine = false
                        }
                    }
                    is Action.Marker -> {
                        markHandler?.invoke(out, line, action.data)
                    }
                }
            }
        }
    }

    fun toString(markHandler: ((sb: StringBuilder, line: Int, data: Any) -> Unit)?, doIndent: Boolean): String {
        return IndenterEvaluator(markHandler, indentEmptyLines, doIndent).apply { eval(actions) }.out.toString()
    }

    //operator fun IndentedLine.plus(indentedLine: IndentedLine) = TODO()

    inline fun appending(text: String, callback: () -> Unit) {
        val lastAction = actions.lastOrNull() as? Action.Line ?: error("Expected a line")
        if (lastAction.str != "}") error("Expected a '}'")
        actions.removeAt(actions.size - 1)
        line("} $text", callback = callback)
    }

    inline operator fun String.invoke(suffix: String = "", callback: () -> Unit) = line(this, afterOpen = suffix, callback = callback)
    inline operator fun String.unaryPlus() = line(this)

    inline fun String.xml(callback: () -> Unit) {
        val tagName = Regex("<(\\w+)").find(this)?.groupValues?.getOrNull(1) ?: error("Invalid XML tag")
        line(this)
        indent {
            callback()
        }
        line("</$tagName>")
    }

    fun toString(markHandler: ((sb: StringBuilder, line: Int, data: Any) -> Unit)?): String =
        toString(markHandler = markHandler, doIndent = true)

    fun toString(doIndent: Boolean = true, indentChunk: String = "\t"): String {
        val out = toString(markHandler = null, doIndent = doIndent)
        return if (indentChunk == "\t") out else out.replace("\t", indentChunk)
    }

    override fun toString(): String = toString(null, doIndent = true)
}

operator fun Unit.unaryPlus(): Unit = this
operator fun Indenter.unaryPlus(): Indenter = this
//operator fun Indenter.IndentedLine.unaryPlus(): Indenter.IndentedLine = this

val Indenter.SEPARATOR get() = EMPTY_LINE_ONCE()

fun Indenter.EMPTY_LINE_ONCE() {
    this.actions.add(Indenter.Action.EmptyLineOnce)
}

fun Indenter.SEPARATOR(callback: Indenter.() -> Unit) {
    SEPARATOR
    callback()
    //SEPARATOR
}

class XmlIndenter(val indenter: Indenter) {
    inline operator fun String.invoke(callback: () -> Unit) {
        val tagName = Regex("<(\\w+)").find(this)?.groupValues?.getOrNull(1) ?: error("Invalid XML tag")
        indenter.line(this)
        indenter.indent {
            callback()
        }
        indenter.line("</$tagName>")
    }

    // @TODO: FIX!
    //fun linedeferred(init: XmlIndenter.() -> Unit): Indenter {
    //    return indenter.linedeferred { XmlIndenter(this).apply(init) }
    //}
}

fun Indenter.xml(callback: XmlIndenter.() -> Unit) {
    callback(XmlIndenter(this))
}

fun Indenter.indentStringHere(callback: Indenter.() -> Unit): String = indentString(indentLevel, callback)

fun indentString(level: Int, callback: Indenter.() -> Unit): String {
    return Indenter { indent(level) { callback()} }.toString().trim()
}
