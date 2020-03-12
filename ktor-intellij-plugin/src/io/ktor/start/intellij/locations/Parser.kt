package io.ktor.start.intellij.locations

import com.intellij.lang.*

internal fun parseLocationsPattern(builder: PsiBuilder) {
    builder.setDebugMode(true)
    val root = builder.mark()
    do {
        val tokenType = builder.tokenType ?: break

        when (tokenType) {
            PatternLexer.TOKEN_COMPONENT -> {
                val component = builder.mark()
                builder.advanceLexer()
                component.done(PatternLexer.TOKEN_COMPONENT)
            }
            PatternLexer.TOKEN_SLASH -> {
                val slash = builder.mark()
                builder.advanceLexer()
                slash.done(PatternLexer.TOKEN_SLASH)
            }
            PatternLexer.TOKEN_ILLEGAL_CHARACTERS -> {
                val error = builder.mark()
                builder.advanceLexer()
                error.error("Illegal slash or character")
            }
            PatternLexer.TOKEN_SUB_CLOSE -> {
                val error = builder.mark()
                builder.advanceLexer()
                error.error("Substitution is closed with no open brace.")
            }
            PatternLexer.TOKEN_SUB_OPEN -> {
                parseSubstitution(builder)
            }
            PatternLexer.TOKEN_OPTIONAL -> {
                val error = builder.mark()
                builder.advanceLexer()
                error.error("Query is not supported.")
            }
            PatternLexer.TOKEN_ELLIPSIS -> {
                val ellipsis = builder.mark()
                builder.advanceLexer()
                ellipsis.done(tokenType)
            }
            else -> {
                builder.advanceLexer()
            }
        }
    } while (!builder.eof())

    root.done(PatternLexer.ROOT)
}

private fun parseSubstitution(builder: PsiBuilder) {
    check(builder.tokenType == PatternLexer.TOKEN_SUB_OPEN)

    val substitution = builder.mark()
    val open = builder.mark()
    builder.advanceLexer()

    if (builder.tokenType == null) {
        open.error("Unclosed substitution.")
        substitution.done(PatternLexer.SUBSTITUTION)
        return
    }
    open.done(PatternLexer.TOKEN_SUB_OPEN)

    do {
        val tokenType = builder.tokenType
        if (tokenType == null) {
            val error = builder.mark()
            error.error("Unclosed substitution.")
            break
        } else if (tokenType == PatternLexer.TOKEN_COMPONENT) {
            val component = builder.mark()
            builder.advanceLexer()
            component.done(tokenType)
        } else if (tokenType == PatternLexer.TOKEN_SUB_CLOSE) {
            val close = builder.mark()
            builder.advanceLexer()
            close.done(tokenType)
            break
        } else if (tokenType == PatternLexer.TOKEN_SUB_OPEN) {
            val error = builder.mark()
            builder.advanceLexer()
            error.error("Nested substitutions are not allowed.")
        } else if (tokenType == PatternLexer.TOKEN_ILLEGAL_CHARACTERS) {
            val error = builder.mark()
            builder.advanceLexer()
            error.error("Illegal character in substitution")
        } else if (tokenType == PatternLexer.TOKEN_OPTIONAL) {
            val optionalCharacter = builder.mark()
            builder.advanceLexer()
            if (builder.tokenType != null && builder.tokenType != PatternLexer.TOKEN_SUB_CLOSE) {
                optionalCharacter.error("Optional parameter marker should be at the end of substitution before the close brace.")
            } else {
                optionalCharacter.done(tokenType)
            }
        } else if (tokenType == PatternLexer.TOKEN_ELLIPSIS) {
            val ellipsis = builder.mark()
            builder.advanceLexer()
            if (builder.tokenType != null && builder.tokenType != PatternLexer.TOKEN_SUB_CLOSE) {
                ellipsis.error("Variable parameter ellipsis marker should be at the end of substitution before the close brace.")
            } else {
                ellipsis.done(tokenType)
            }
        } else {
            builder.advanceLexer()
        }
    } while (true)

    substitution.done(PatternLexer.SUBSTITUTION)
}