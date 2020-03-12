package io.ktor.start.intellij.locations

import com.intellij.lexer.*
import com.intellij.psi.tree.*

internal class PatternLexer : LexerBase() {
    private var myTokenStart = 0
    private var myTokenEnd = 0
    private var myTokenType: IElementType? = null

    private var myBuffer: CharSequence = ""
    private var myStartOffset = 0
    private var myEndOffset = 0
    private var myState = 0

    override fun start(buffer: CharSequence, startOffset: Int, endOffset: Int, initialState: Int) {
        myBuffer = buffer
        myStartOffset = startOffset
        myEndOffset = endOffset
        myState = initialState

        myTokenStart = startOffset
        myTokenEnd = startOffset

        advance()
    }

    override fun getState(): Int = myState

    override fun getTokenStart(): Int = myTokenStart

    override fun getBufferEnd(): Int = myEndOffset

    override fun getBufferSequence(): CharSequence = myBuffer

    override fun getTokenEnd(): Int = myTokenEnd

    override fun getTokenType(): IElementType? = myTokenType

    override fun advance() {
        myTokenStart = myTokenEnd
        if (myTokenStart == myEndOffset) {
            myTokenType = null
            return
        }

        var foundType: IElementType? = null
        val myBuffer = myBuffer
        var index = tokenStart
        val myEndOffset = myEndOffset

        while (index < myEndOffset) {
            val ch = myBuffer[index]
            if (ch == '\\' || ch < ' ') {
                foundType = TOKEN_ILLEGAL_CHARACTERS
                break
            }
            if (ch == '/') {
                foundType = TOKEN_SLASH
                break
            }
            if (ch == '{') {
                foundType = TOKEN_SUB_OPEN
                break
            }
            if (ch == '}') {
                foundType = TOKEN_SUB_CLOSE
                break
            }
            if (ch == '.') {
                foundType = TOKEN_ELLIPSIS
                break
            }
            if (ch == '?') {
                foundType = TOKEN_OPTIONAL
                break
            }

            index++
        }

        if (index != myTokenStart || foundType == null) {
            myTokenType = TOKEN_COMPONENT
        } else {
            when (foundType) {
                TOKEN_SLASH -> {
                    index = eatWhile(myBuffer, index + 1, myEndOffset, '/')
                }
                TOKEN_COMPONENT -> error("!!!")
                TOKEN_SUB_OPEN, TOKEN_SUB_CLOSE -> {
                    index++
                }
                TOKEN_ILLEGAL_CHARACTERS -> {
                    index = eatWhile(myBuffer, index + 1, myEndOffset) { it == '\\' || it < ' ' }
                }
                TOKEN_OPTIONAL -> {
                    index++
                }
                TOKEN_ELLIPSIS -> {
                    index = eatWhile(myBuffer, index + 1, myEndOffset, '.')
                    if (index - myTokenStart != 3) {
                        foundType = TOKEN_COMPONENT
                    }
                }
                else -> error("!!!")
            }
            myTokenType = foundType
        }

        myTokenEnd = index
    }

    private fun eatWhile(buffer: CharSequence, start: Int, end: Int, ch: Char): Int {
        return eatWhile(buffer, start, end) { it == ch }
    }

    private inline fun eatWhile(buffer: CharSequence, start: Int, end: Int, predicate: (Char) -> Boolean): Int {
        var index = start
        while (index < end) {
            if (!predicate(buffer[index])) {
                return index
            }
            index++
        }

        return index
    }

    companion object {
        val ROOT: IElementType = IElementType(
            "TOKEN_ROOT",
            LocationsPatternLanguage
        )
        val SUBSTITUTION: IElementType = IElementType(
            "TOKEN_SUBSTITUTION",
            LocationsPatternLanguage
        )

        val TOKEN_SLASH: IElementType = IElementType(
            "TOKEN_SLASH",
            LocationsPatternLanguage
        )
        val TOKEN_COMPONENT: IElementType = IElementType(
            "TOKEN_COMPONENT",
            LocationsPatternLanguage
        )
        val TOKEN_SUB_OPEN: IElementType = IElementType(
            "TOKEN_SUB_OPEN",
            LocationsPatternLanguage
        )
        val TOKEN_SUB_CLOSE: IElementType = IElementType(
            "TOKEN_SUB_CLOSE",
            LocationsPatternLanguage
        )
        val TOKEN_ILLEGAL_CHARACTERS: IElementType = IElementType(
            "TOKEN_ILLEGAL_SLASH",
            LocationsPatternLanguage
        )

        val TOKEN_ELLIPSIS: IElementType = IElementType(
            "TOKEN_ELLIPSIS",
            LocationsPatternLanguage
        )
        val TOKEN_OPTIONAL: IElementType = IElementType(
            "TOKEN_OPTIONAL",
            LocationsPatternLanguage
        )

    }
}