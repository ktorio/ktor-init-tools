package io.ktor.start.intellij.locations

import com.intellij.lang.*
import com.intellij.psi.*
import com.intellij.psi.tree.*
import com.intellij.psi.util.*
import org.jetbrains.kotlin.psi.psiUtil.*

class LocationPatternBraceMatcher : PairedBraceMatcher {
    override fun getCodeConstructStart(file: PsiFile?, openingBraceOffset: Int): Int {
        if (file == null) return 0

        return file.findElementAt(openingBraceOffset)?.parentOfType<LocationsPatternPsiElement.SubstitutionElement>()
            ?.startOffset
            ?: openingBraceOffset
    }

    override fun getPairs(): Array<BracePair> {
        return arrayOf(BracePair(PatternLexer.TOKEN_SUB_OPEN, PatternLexer.TOKEN_SUB_CLOSE, false))
    }

    override fun isPairedBracesAllowedBeforeType(lbraceType: IElementType, contextType: IElementType?): Boolean {
        return true
    }
}