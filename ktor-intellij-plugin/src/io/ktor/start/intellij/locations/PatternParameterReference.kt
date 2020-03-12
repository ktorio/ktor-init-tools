package io.ktor.start.intellij.locations

import com.intellij.lang.injection.*
import com.intellij.openapi.util.*
import com.intellij.psi.*
import com.intellij.psi.util.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.psi.psiUtil.*

class PatternParameterReference(
    element: PsiNameIdentifierOwner,
    range: TextRange
) : PsiReferenceBase<PsiNameIdentifierOwner>(element, range), PsiPolyVariantReference {
    override fun multiResolve(incompleteCode: Boolean): Array<ResolveResult> {
        val propertyName = element.name ?: return emptyArray()
        val classElement = element.parentOfType<KtClassOrObject>() ?: return emptyArray()

        val manager = InjectedLanguageManager.getInstance(element.project) ?: return emptyArray()

        return classElement.annotationEntries.flatMap { entry ->
            val file = entry.valueArguments.singleOrNull()
                ?.getArgumentExpression()
                ?.findDescendantOfType<KtStringTemplateExpression>()
                ?.let { manager.getInjectedPsiFiles(it)?.singleOrNull()?.first as? PatternFileImpl }

            file?.parameterNames?.filter { it.text == propertyName }.orEmpty()
        }.map { PsiElementResolveResult(it) }.toTypedArray()
    }

    override fun resolve(): PsiElement? {
        return multiResolve(false).singleOrNull()?.element
    }

}