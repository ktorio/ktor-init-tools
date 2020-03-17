package io.ktor.start.intellij.locations

import com.intellij.psi.PsiElement
import com.intellij.psi.PsiReference
import com.intellij.psi.search.searches.DefinitionsScopedSearch
import com.intellij.psi.search.searches.ReferencesSearch
import com.intellij.util.ProcessingContext
import com.intellij.util.Processor
import com.intellij.util.QueryExecutor
import org.jetbrains.kotlin.idea.util.application.runReadAction
import org.jetbrains.kotlin.psi.psiUtil.collectDescendantsOfType

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
