package io.ktor.start.util

import kotlin.math.*


class StrReader(val str: String, val file: String = "file", var pos: Int = 0) {
    val length: Int = this.str.length
    val hasMore: Boolean get() = (this.pos < this.str.length)

    inline fun slice(action: () -> Unit): String? {
        val start = this.pos
        action()
        val end = this.pos
        return if (end > start) this.slice(start, end) else null
    }

    fun slice(start: Int, end: Int): String = this.str.substring(start, end)
    fun peek(count: Int): String = substr(this.pos, count)
    fun peekChar(): Char = if (hasMore) this.str[this.pos] else '\u0000'
    fun read(count: Int): String = this.peek(count).apply { skip(count) }
    inline fun skipWhile(filter: (Char) -> Boolean) = run { while (hasMore && filter(this.peekChar())) this.readChar() }

    inline fun readWhile(filter: (Char) -> Boolean) = this.slice { skipWhile(filter) } ?: ""
    fun unread(count: Int = 1) = this.apply { this.pos -= count; }
    fun readChar(): Char = if (hasMore) this.str[this.pos++] else '\u0000'
    fun read(): Char = if (hasMore) this.str[this.pos++] else '\u0000'


    fun readExpect(expected: String): String {
        val readed = this.read(expected.length)
        if (readed != expected) throw IllegalArgumentException("Expected '$expected' but found '$readed' at $pos")
        return readed
    }

    fun expect(expected: Char) = readExpect("$expected")
    fun skip(count: Int = 1) = this.apply { this.pos += count; }
    private fun substr(pos: Int, length: Int): String {
        return this.str.substring(min(pos, this.length), min(pos + length, this.length))
    }

    fun skipSpaces() = this.apply { this.skipWhile { it.isWhitespace() } }

    fun tryRead(str: String): Boolean {
        if (peek(str.length) == str) {
            skip(str.length)
            return true
        }
        return false
    }
}

fun StrReader.readStringLit(reportErrors: Boolean = true): String {
    val out = StringBuilder()
    val quotec = read()
    when (quotec) {
        '"', '\'' -> Unit
        else -> error("Invalid string literal")
    }
    var closed = false
    while (hasMore) {
        val c = read()
        if (c == '\\') {
            val cc = read()
            out.append(
                when (cc) {
                    '\\' -> '\\'; '/' -> '/'; '\'' -> '\''; '"' -> '"'
                    'b' -> '\b'; 'f' -> '\u000c'; 'n' -> '\n'; 'r' -> '\r'; 't' -> '\t'
                    'u' -> read(4).toInt(0x10).toChar()
                    else -> Json.invalidJson("Invalid char '$cc'")
                }
            )
        } else if (c == quotec) {
            closed = true
            break
        } else {
            out.append(c)
        }
    }
    if (!closed && reportErrors) {
        throw RuntimeException("String literal not closed! '${this.str}'")
    }
    return out.toString()
}
