package io.ktor.start.intellij.locations

import com.intellij.codeInspection.*
import com.intellij.psi.*
import org.jetbrains.kotlin.idea.search.usagesSearch.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.psi.psiUtil.*
import org.jetbrains.kotlin.resolve.descriptorUtil.*

class MissingOwnerClassReferenceInspection : LocalInspectionTool() {
    override fun buildVisitor(holder: ProblemsHolder, isOnTheFly: Boolean): PsiElementVisitor {
        return object : PsiElementVisitor() {
            override fun visitElement(element: PsiElement?) {
                if (element is KtClassOrObject) {
                    processClassOrObject(element, holder)
                }

                super.visitElement(element)
            }
        }
    }

    private fun processClassOrObject(classElement: KtClassOrObject, holder: ProblemsHolder) {
        if (!classElement.isLocation()) return
        val parentClass = classElement.getParentOfType<KtClassOrObject>(true) ?: return
        if (!parentClass.isLocation()) return

        if (parentClass is KtObjectDeclaration && classElement is KtObjectDeclaration) {
            holder.registerProblem(
                classElement.getObjectKeyword() ?: classElement.navigationElement,
                "Nesting objects is no longer recommended. Convert the inner object into a class.",
                ProblemHighlightType.ERROR,
                AddOuterClassParameterQuickFix(
                    parentClass.fqName?.shortName()?.asString()
                        ?: parentClass.name?.substringAfterLast(".") ?: "?",
                    convert = true
                )
            )
        } else if (classElement.primaryConstructorParameters.none { it.refersToClass(parentClass) }) {
            holder.registerProblem(
                classElement.nameIdentifier ?: classElement.navigationElement,
                "There is no property referencing outer class.",
                AddOuterClassParameterQuickFix(
                    parentClass.fqName?.shortName()?.asString()
                        ?: parentClass.name?.substringAfterLast(".") ?: "?",
                    convert = false
                )
            )
        }
    }

    private fun KtClassOrObject.isLocation() = annotationEntries.any { it.isLocation() }

    private fun KtParameter.refersToClass(other: KtClassOrObject): Boolean {
        return descriptor?.type?.constructor?.declarationDescriptor?.fqNameOrNull() == other.fqName
    }
}