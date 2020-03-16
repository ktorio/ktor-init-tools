package io.ktor.start.intellij.locations

import com.intellij.codeInsight.daemon.LineMarkerInfo
import com.intellij.codeInsight.daemon.LineMarkerProvider
import com.intellij.icons.AllIcons
import com.intellij.openapi.editor.markup.GutterIconRenderer
import com.intellij.psi.PsiElement
import com.intellij.psi.impl.source.tree.LeafPsiElement
import com.intellij.psi.util.parentOfType
import org.jetbrains.kotlin.idea.editor.fixers.range
import org.jetbrains.kotlin.lexer.KtTokens
import org.jetbrains.kotlin.psi.KtClassOrObject

class LocationsLineMarker : LineMarkerProvider {
    override fun getLineMarkerInfo(element: PsiElement): LineMarkerInfo<*>? {
        return null
    }

    override fun collectSlowLineMarkers(
        elements: MutableList<PsiElement>,
        result: MutableCollection<LineMarkerInfo<PsiElement>>
    ) {
        elements.filterIsInstance<LeafPsiElement>()
            .filter { it.elementType == KtTokens.IDENTIFIER }
            .mapNotNull { it.parentOfType<KtClassOrObject>()?.let { found -> Pair(it, found) } }
            .filter { it.second.annotationEntries.isNotEmpty() && it.second.nameIdentifier == it.first }
            .mapNotNullTo(result) { (element, classElement) ->
                val annotation = classElement.annotationEntries.firstOrNull { it.isLocation() }

                if (annotation != null) {
                    LineMarkerInfo(
                        element, element.range, AllIcons.Javaee.WebService,
                        11, null, null,
                        GutterIconRenderer.Alignment.LEFT
                    )
                } else {
                    null
                }
            }
    }
}
