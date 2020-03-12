package io.ktor.start.intellij.locations

import com.intellij.codeInspection.*
import com.intellij.lang.injection.*
import com.intellij.psi.*
import com.intellij.psi.util.*
import org.jetbrains.kotlin.descriptors.impl.*
import org.jetbrains.kotlin.idea.caches.resolve.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.psi.psiUtil.*
import org.jetbrains.kotlin.types.*

class ParameterNameInspection : LocalInspectionTool() {
    override fun buildVisitor(holder: ProblemsHolder, isOnTheFly: Boolean): PsiElementVisitor {
        return object : PsiElementVisitor() {
            override fun visitElement(element: PsiElement?) {
                if (element is LocationsPatternPsiElement.ParameterNameElement) {
                    val containingClass = InjectedLanguageManager.getInstance(element.project)
                        .getInjectionHost(element)
                        ?.parentOfType<KtClassOrObject>()

                    if (containingClass != null) {
                        processParameterNameElement(element, containingClass, holder)
                    }
                }
                if (element is LocationsPatternPsiElement.SubstitutionElement) {
                    if (element.children.none {
                            it is LocationsPatternPsiElement.ParameterNameElement ||
                                    (it is LocationsPatternPsiElement.VarArgElement && it.isEllipsis)
                        }
                    ) {
                        holder.registerProblem(
                            element, "Empty substitutions are not allowed.",
                            ProblemHighlightType.ERROR
                        )
                    }
                }

                super.visitElement(element)
            }
        }
    }

    private fun processParameterNameElement(
        element: LocationsPatternPsiElement.ParameterNameElement,
        containingClass: KtClassOrObject,
        holder: ProblemsHolder
    ) {
        val propertyName = element.text.trim()
        val propertyOptional = element.nextSibling is LocationsPatternPsiElement.VarArgElement

        if (containingClass is KtObjectDeclaration) {
            holder.registerProblem(
                element,
                "Object shouldn't have parameters. Convert to a class to capture path components.",
                ProblemHighlightType.ERROR,
                ConvertToClassQuickFix(propertyName, propertyOptional)
            )
            return
        }

        val property = containingClass.findPropertyByName(propertyName)

        if (property == null) {
            holder.registerProblem(
                element, "Class has no property named $propertyName",
                ProblemHighlightType.ERROR,
                AddClassParameterQuickFix(propertyName, propertyOptional)
            )
        } else {
            checkPropertyVarArgs(element, property, holder)
        }
    }

    private fun checkPropertyVarArgs(
        element: LocationsPatternPsiElement.ParameterNameElement,
        property: KtNamedDeclaration,
        holder: ProblemsHolder
    ) {
        val nextSibling = element.nextSibling
        if (nextSibling is LocationsPatternPsiElement.VarArgElement) {
            if (nextSibling.node.elementType == PatternLexer.TOKEN_OPTIONAL) {
                val referencedProperty = property.resolveToDescriptorIfAny()?.referencedProperty
                val initializer = if (property is KtProperty) {
                    property.initializer
                } else if (property is KtParameter) {
                    property.defaultValue
                } else {
                    null
                }

                val type = referencedProperty?.type ?: return
                if (!type.isNullable() && initializer == null) {
                    holder.registerProblem(
                        nextSibling,
                        "Make class property nullable or provide a default argument",
                        ProblemHighlightType.ERROR,
                        MakeParameterOptionalQuickFix()
                    )
                }
            }
        }
    }
}
