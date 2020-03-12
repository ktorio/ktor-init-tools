package io.ktor.start.intellij.locations

import com.intellij.lexer.*
import com.intellij.openapi.editor.*
import com.intellij.openapi.editor.colors.*
import com.intellij.openapi.editor.colors.TextAttributesKey.*
import com.intellij.openapi.fileTypes.*
import com.intellij.openapi.project.*
import com.intellij.openapi.vfs.*
import com.intellij.psi.tree.*

class PatternSyntaxHighlighter : SyntaxHighlighterBase() {
    override fun getTokenHighlights(tokenType: IElementType?): Array<TextAttributesKey> {
        return when (tokenType) {
            PatternLexer.TOKEN_COMPONENT -> arrayOf(DefaultLanguageHighlighterColors.CONSTANT)
            PatternLexer.TOKEN_SUB_OPEN, PatternLexer.TOKEN_SUB_CLOSE -> arrayOf(ParameterBraces)
            else -> emptyArray()
        }
    }

    override fun getHighlightingLexer(): Lexer {
        return PatternLexer()
    }

    companion object : SyntaxHighlighterFactory() {
        val ParameterName: TextAttributesKey =
            createTextAttributesKey("PARAMETER_NAME", DefaultLanguageHighlighterColors.IDENTIFIER)

        val ParameterBraces: TextAttributesKey =
            createTextAttributesKey("PARAMETER_BRACES", DefaultLanguageHighlighterColors.BRACES)

        override fun getSyntaxHighlighter(project: Project?, virtualFile: VirtualFile?): SyntaxHighlighter {
            return PatternSyntaxHighlighter()
        }
    }
}