package io.ktor.start.intellij.locations

import com.intellij.lang.refactoring.RefactoringSupportProvider
import com.intellij.psi.PsiElement
import com.intellij.psi.util.parentOfType
import com.intellij.refactoring.RefactoringActionHandler
import org.jetbrains.kotlin.psi.KtNamedDeclaration

class LocationsRefactoringsSupportProvider : RefactoringSupportProvider() {
    override fun isInplaceRenameAvailable(element: PsiElement, context: PsiElement?): Boolean {
        return context != null &&
                context.parentOfType<KtNamedDeclaration>() != null &&
                (element is LocationsPatternPsiElement.SubstitutionElement ||
                element is LocationsPatternPsiElement.ParameterNameElement)
    }

    override fun isSafeDeleteAvailable(element: PsiElement): Boolean {
        return super.isSafeDeleteAvailable(element)
    }

    override fun isMemberInplaceRenameAvailable(element: PsiElement, context: PsiElement?): Boolean {
        return element is LocationsPatternPsiElement.SubstitutionElement ||
                element is LocationsPatternPsiElement.ParameterNameElement
    }
}