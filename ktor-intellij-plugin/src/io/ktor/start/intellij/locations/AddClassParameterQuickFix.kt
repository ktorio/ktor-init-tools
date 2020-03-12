package io.ktor.start.intellij.locations

import com.intellij.codeInspection.*
import com.intellij.openapi.project.*
import org.jetbrains.kotlin.psi.*

class AddClassParameterQuickFix(
    private val parameterName: String,
    private val optional: Boolean
) : LocalQuickFix {
    override fun getFamilyName(): String {
        return "Add path parameter to constructor."
    }

    override fun applyFix(project: Project, descriptor: ProblemDescriptor) {
        val classElement = findClassOrObject(project, descriptor.psiElement) as? KtClass
            ?: error("No kotlin class found")

        addClassParameter(project, classElement, parameterName, optional)
    }
}
