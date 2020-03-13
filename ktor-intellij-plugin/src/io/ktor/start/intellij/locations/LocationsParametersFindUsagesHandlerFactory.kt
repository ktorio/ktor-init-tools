package io.ktor.start.intellij.locations

import com.intellij.find.findUsages.FindUsagesHandler
import com.intellij.find.findUsages.FindUsagesHandlerFactory
import com.intellij.psi.PsiElement
import com.intellij.psi.util.parentOfType

class LocationsParametersFindUsagesHandlerFactory : FindUsagesHandlerFactory() {
    override fun canFindUsages(element: PsiElement): Boolean {
        return element is LocationsPatternPsiElement.ParameterNameElement ||
                element is LocationsPatternPsiElement.SubstitutionElement
    }

    override fun createFindUsagesHandler(element: PsiElement, forHighlightUsages: Boolean): FindUsagesHandler? {
        return when (element) {
            is LocationsPatternPsiElement.ParameterNameElement -> DefaultFindUsagesHandler(element.parentOfType()!!)
            is LocationsPatternPsiElement.SubstitutionElement -> DefaultFindUsagesHandler(element)
            else -> null
        }
    }

    private class DefaultFindUsagesHandler(
        private val substitution: LocationsPatternPsiElement.SubstitutionElement
    ) : FindUsagesHandler(substitution) {
    }
}
