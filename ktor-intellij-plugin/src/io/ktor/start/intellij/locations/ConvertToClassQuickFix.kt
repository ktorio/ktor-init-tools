package io.ktor.start.intellij.locations

import com.intellij.codeInspection.*
import com.intellij.openapi.project.*
import org.jetbrains.kotlin.psi.*

class ConvertToClassQuickFix(
    private val parameterName: String,
    private val optional: Boolean
) : LocalQuickFix {
    override fun getFamilyName(): String = "Convert locations object to class"

    override fun applyFix(project: Project, descriptor: ProblemDescriptor) {
        val objectElement = findClassOrObject(project, descriptor.psiElement)
                as? KtObjectDeclaration
            ?: error("Kotlin object not found.")

        val newClass = convertToClass(project, objectElement)
        addClassParameter(project, newClass, parameterName, optional)
    }
}