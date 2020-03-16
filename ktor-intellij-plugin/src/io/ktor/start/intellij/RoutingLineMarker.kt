package io.ktor.start.intellij

import com.intellij.codeInsight.daemon.LineMarkerInfo
import com.intellij.codeInsight.daemon.LineMarkerProvider
import com.intellij.icons.AllIcons
import com.intellij.openapi.editor.markup.GutterIconRenderer
import com.intellij.psi.PsiElement
import com.intellij.psi.impl.source.tree.LeafPsiElement
import com.intellij.psi.util.parentOfType
import io.ktor.start.intellij.locations.isRouteingInvocation
import org.jetbrains.kotlin.idea.editor.fixers.range
import org.jetbrains.kotlin.lexer.KtTokens
import org.jetbrains.kotlin.psi.KtCallExpression

class RoutingLineMarker : LineMarkerProvider {
    override fun getLineMarkerInfo(element: PsiElement): LineMarkerInfo<*>? {
        return null
    }

    override fun collectSlowLineMarkers(
        elements: MutableList<PsiElement>,
        result: MutableCollection<LineMarkerInfo<PsiElement>>
    ) {
        for (element in elements) {
            if (element is LeafPsiElement
                && element.elementType == KtTokens.IDENTIFIER
                && element.text == "routing"
            ) {
                val callExpression = element.parentOfType<KtCallExpression>()
                if (callExpression != null && callExpression.isRouteingInvocation()) {
                    result.add(LineMarkerInfo(
                        element, element.range, AllIcons.Nodes.Weblistener,
                        11, null, null,
                        GutterIconRenderer.Alignment.LEFT
                    ))
                }
            }
        }
    }
}
