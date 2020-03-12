package io.ktor.start.intellij.locations

import com.intellij.codeInspection.*
import com.intellij.lang.injection.*
import com.intellij.openapi.project.*
import com.intellij.psi.util.*
import org.jetbrains.kotlin.idea.core.*
import org.jetbrains.kotlin.idea.inspections.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.psi.psiUtil.*

class MakeParameterOptionalQuickFix : LocalQuickFix {
    override fun getFamilyName(): String = "Make parameter nullable"

    override fun applyFix(project: Project, descriptor: ProblemDescriptor) {
        val element = InjectedLanguageManager.getInstance(project)
            .getInjectionHost(descriptor.psiElement)
            ?: error("Unable to find injection host for element")

        val parameterNameElement = descriptor.psiElement
            .parentOfType<LocationsPatternPsiElement.SubstitutionElement>()
            ?.getChildOfType<LocationsPatternPsiElement.ParameterNameElement>()
            ?: error("Unable to find parameter name element")

        val propertyName = parameterNameElement.text.trim()
        val classElement = element.parentOfType<KtClass>() ?: error("Unable to find class element")
        val property = classElement.findPropertyByName(propertyName)
            ?: error("Unable to find property with name $propertyName")

        if (property is KtParameter) {
            val factory = KtPsiFactory(project)
            val oldType = property.typeReference ?: error("No type for property $propertyName")
            val newType = factory.createType(oldType.text + "?")
            oldType.replace(newType)
            property.setDefaultValue(factory.createExpression("null"))
            property.defaultValue?.endOffset?.let { endOffset ->
                property.findExistingEditor()?.moveCaret(endOffset)
            }
        }
    }
}