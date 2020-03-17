package io.ktor.start.intellij.locations

import com.intellij.openapi.util.TextRange
import com.intellij.psi.*
import com.intellij.util.IncorrectOperationException

internal class PatternParameterBackReference(
    private val componentElement: LocationsPatternPsiElement.ParameterNameElement,
    private val references: PsiElement
): PsiReferenceBase<PsiElement>(references), PsiPolyVariantReference {
    override fun resolve(): PsiElement? {
        return references
    }

    override fun multiResolve(incompleteCode: Boolean): Array<ResolveResult> {
        return arrayOf(PsiElementResolveResult(references))
    }

    override fun getRangeInElement(): TextRange {
        return TextRange(0, element.textLength)
    }

    override fun handleElementRename(newElementName: String): PsiElement {
        val result = ManipulatorImpl().handleContentChange(componentElement, newElementName)
            ?: throw IncorrectOperationException("Failed to rename location parameter")

        return result
    }
}
