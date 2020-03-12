package io.ktor.start.intellij.locations

import com.intellij.codeInspection.*
import com.intellij.openapi.project.*
import com.intellij.psi.util.*
import org.jetbrains.kotlin.idea.core.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.util.capitalizeDecapitalize.*

class AddOuterClassParameterQuickFix(
    private val simpleClassName: String,
    private val convert: Boolean
) : LocalQuickFix {
    override fun getFamilyName(): String = when (convert) {
        false -> "Add constructor parameter for outer class"
        true -> "Convert object to class and add parameter"
    }

    override fun applyFix(project: Project, descriptor: ProblemDescriptor) {
        var classElement = descriptor.psiElement.parentOfType<KtClassOrObject>()
            ?: error("Unable to lookup class element for ${descriptor.psiElement}")
        val factory = KtPsiFactory(project)

        if (classElement is KtObjectDeclaration) {
            classElement = convertToClass(project, classElement)
        }

        if (classElement is KtClass) {
            classElement.createPrimaryConstructorIfAbsent()
            val parametersList = classElement.createPrimaryConstructorParameterListIfAbsent()
            val existingNames = parametersList.parameters.mapNotNull { it.name }.toSet()
            val name = KotlinNameSuggester.suggestNameByName(simpleClassName.decapitalizeAsciiOnly()) { suggestion ->
                suggestion !in existingNames
            }

            val text = buildString {
                append("val ")
                append(name)
                append(": ")
                append(simpleClassName)
            }

            parametersList.addParameter(factory.createParameter(text))
        }
    }
}