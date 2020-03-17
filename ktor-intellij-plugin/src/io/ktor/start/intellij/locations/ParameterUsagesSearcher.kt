package io.ktor.start.intellij.locations

import com.intellij.openapi.util.TextRange
import com.intellij.psi.*
import com.intellij.psi.search.searches.DefinitionsScopedSearch
import com.intellij.psi.search.searches.ReferencesSearch
import com.intellij.util.ProcessingContext
import com.intellij.util.Processor
import com.intellij.util.QueryExecutor
import org.jetbrains.kotlin.idea.util.application.runReadAction
import org.jetbrains.kotlin.psi.psiUtil.collectDescendantsOfType
import org.jetbrains.kotlin.psi.psiUtil.findDescendantOfType

class ParameterUsagesSearcher : QueryExecutor<PsiElement, DefinitionsScopedSearch.SearchParameters> {
    override fun execute(
        queryParameters: DefinitionsScopedSearch.SearchParameters,
        consumer: Processor<in PsiElement>
    ): Boolean {
        val searchElement = queryParameters.element
        if (searchElement !is LocationsPatternPsiElement) {
            return true
        }

        var cancelled = false
        runReadAction {
            searchElement.collectDescendantsOfType<LocationsPatternPsiElement.ParameterNameElement>()
                .forEach { element ->
                    LocationsBackReferenceProvider().getReferencesByElement(element.firstChild, ProcessingContext())
                        .map { it.element }.forEach { target ->
                            if (!consumer.process(target)) {
                                cancelled = true
                                return@runReadAction
                            }
                        }
                }
        }

        return !cancelled
    }
}

class ParametersReferencesSearcher : QueryExecutor<PsiReference, ReferencesSearch.SearchParameters> {
    override fun execute(
        queryParameters: ReferencesSearch.SearchParameters,
        consumer: Processor<in PsiReference>
    ): Boolean {
        val searchElement = queryParameters.elementToSearch
        if (searchElement !is LocationsPatternPsiElement) {
            return true
        }

        var cancelled = false
        runReadAction {
            searchElement.collectDescendantsOfType<LocationsPatternPsiElement.ParameterNameElement>()
                .forEach { element ->
                    LocationsBackReferenceProvider().getReferencesByElement(element.firstChild, ProcessingContext())
                        .forEach { target ->
                            if (!consumer.process(target)) {
                                cancelled = true
                                return@runReadAction
                            }
                        }
                }
        }

        return !cancelled
    }

}

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
