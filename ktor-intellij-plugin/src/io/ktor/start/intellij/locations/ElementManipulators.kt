package io.ktor.start.intellij.locations

import com.intellij.openapi.util.TextRange
import com.intellij.psi.AbstractElementManipulator
import com.intellij.psi.PsiFileFactory
import org.jetbrains.kotlin.psi.psiUtil.findDescendantOfType


class ManipulatorImpl : AbstractElementManipulator<LocationsPatternPsiElement.ParameterNameElement>() {
    override fun handleContentChange(
        element: LocationsPatternPsiElement.ParameterNameElement,
        range: TextRange,
        newContent: String?
    ): LocationsPatternPsiElement.ParameterNameElement? {
        if (newContent == null) return null

        val dummy = PsiFileFactory.getInstance(element.project)
            .createFileFromText(LocationsPatternLanguage, "{$newContent}")

        val newElement =
            dummy.findDescendantOfType<LocationsPatternPsiElement.ParameterNameElement>() ?: return null

        return element.replace(newElement) as LocationsPatternPsiElement.ParameterNameElement
    }
}

class SubstitutionManipulatorImpl : AbstractElementManipulator<LocationsPatternPsiElement.SubstitutionElement>() {
    override fun handleContentChange(
        element: LocationsPatternPsiElement.SubstitutionElement,
        range: TextRange,
        newContent: String?
    ): LocationsPatternPsiElement.SubstitutionElement? {
        if (newContent == null) return null
        val parameterElement = element.parameterNameElement ?: return null

        val dummy = PsiFileFactory.getInstance(element.project)
            .createFileFromText(LocationsPatternLanguage, "{$newContent}")

        val newElement =
            dummy.findDescendantOfType<LocationsPatternPsiElement.ParameterNameElement>() ?: return null

        parameterElement.replace(newElement)
        return element
    }
}
