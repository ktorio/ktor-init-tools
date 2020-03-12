package io.ktor.start.intellij.locations

import com.intellij.lang.annotation.*
import com.intellij.psi.*

class ParameterNameAnnotator : Annotator {
    override fun annotate(element: PsiElement, holder: AnnotationHolder) {
        if (element is LocationsPatternPsiElement.ParameterNameElement) {
            holder.createInfoAnnotation(element, null)
                .apply {
                    tooltip = "Named path parameter"
                    textAttributes = PatternSyntaxHighlighter.ParameterName
                }
        }
    }
}