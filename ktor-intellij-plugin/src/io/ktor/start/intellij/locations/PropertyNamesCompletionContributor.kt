package io.ktor.start.intellij.locations

import com.intellij.codeInsight.completion.*
import com.intellij.codeInsight.lookup.*
import com.intellij.icons.*
import com.intellij.lang.injection.*
import com.intellij.openapi.editor.*
import com.intellij.patterns.*
import com.intellij.patterns.PlatformPatterns.*
import com.intellij.psi.*
import com.intellij.psi.util.*
import com.intellij.util.*
import org.jetbrains.kotlin.psi.*

private val capture: PsiElementPattern.Capture<PsiElement> = psiElement()
    .inside(LocationsPatternPsiElement.SubstitutionElement::class.java)
    .andNot(psiElement().afterSibling(
        psiElement(LocationsPatternPsiElement.VarArgElement::class.java)
    ))

class PropertyNamesCompletionContributor : CompletionContributor() {
    init {
        extend(
            CompletionType.BASIC, capture, LocationsPatternCompletionProvider()
        )

        extend(
            CompletionType.SMART, capture, LocationsPatternCompletionProvider()
        )
    }

    override fun handleEmptyLookup(parameters: CompletionParameters, editor: Editor?): String? {
        return when (findSubstitutionElement(parameters.position)?.findProperties()?.size) {
            null -> null
            0 -> "The class has no properties to substitute."
            else -> "No properties matching prefix."
        }
    }
}

private class LocationsPatternCompletionProvider : CompletionProvider<CompletionParameters>() {
    override fun addCompletions(
        parameters: CompletionParameters,
        context: ProcessingContext,
        result: CompletionResultSet
    ) {
        val prefix = findPrefix(parameters)
        val sink = when (prefix.length) {
            0 -> result
            else -> result.withPrefixMatcher(prefix)
        }

        findSubstitutionElement(parameters.position)?.findProperties()?.forEach { propertyName ->
            sink.addElement(
                LookupElementBuilder.create(propertyName)
                    .withIcon(AllIcons.Nodes.Property)
                    .withInsertHandler(StupidInsertHandler)
            )
        }
    }
}

internal fun findSubstitutionElement(element: PsiElement): LocationsPatternPsiElement.SubstitutionElement? {
    return element as? LocationsPatternPsiElement.SubstitutionElement
        ?: element.parentOfType()
}

internal fun LocationsPatternPsiElement.findProperties(): List<String>? {
    val containingClass = InjectedLanguageManager.getInstance(project)
        .getInjectionHost(this)
        ?.parentOfType<KtClass>() ?: return null

    return (containingClass.primaryConstructorParameters.mapNotNull { it.name } +
            containingClass.getProperties().mapNotNull { it.name }).distinct()
}

internal fun findPrefix(parameters: CompletionParameters): String {
    val element = PsiTreeUtil.findElementOfClassAtOffset(
        parameters.originalFile,
        parameters.offset - 1, LocationsPatternPsiElement::class.java, false
    ) as? LocationsPatternPsiElement.ParameterNameElement ?: return ""

    return element.text.take((parameters.offset - element.node.startOffset).coerceAtLeast(0))
}