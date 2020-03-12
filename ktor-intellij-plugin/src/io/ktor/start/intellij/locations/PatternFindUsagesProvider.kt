package io.ktor.start.intellij.locations

import com.intellij.lang.cacheBuilder.DefaultWordsScanner
import com.intellij.lang.cacheBuilder.WordOccurrence
import com.intellij.lang.cacheBuilder.WordsScanner
import com.intellij.lang.findUsages.*
import com.intellij.psi.*
import com.intellij.psi.tree.TokenSet
import com.intellij.util.Processor

class PatternFindUsagesProvider : EmptyFindUsagesProvider() {
    override fun getWordsScanner(): WordsScanner? {
        return object : DefaultWordsScanner(
            PatternLexer(),
            TokenSet.create(PatternLexer.TOKEN_COMPONENT),
            TokenSet.EMPTY,
            TokenSet.EMPTY
        ) {
            override fun processWords(fileText: CharSequence?, processor: Processor<WordOccurrence>?) {
                super.processWords(fileText, processor)
            }
        }
    }

    override fun canFindUsagesFor(psiElement: PsiElement): Boolean {
        return psiElement is LocationsPatternPsiElement.ParameterNameElement
                || psiElement is LocationsPatternPsiElement.SubstitutionElement
    }

    override fun getType(element: PsiElement): String {
        return when (element) {
            is LocationsPatternPsiElement.ParameterNameElement -> "parameter"
            is LocationsPatternPsiElement.SubstitutionElement -> "parameter"
            else -> ""
        }
    }
}
