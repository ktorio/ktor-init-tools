package io.ktor.start.intellij.locations

import com.intellij.codeInsight.completion.*
import com.intellij.codeInsight.lookup.*
import com.intellij.psi.util.*

object CompletionInsertHandler : InsertHandler<LookupElement> {
    override fun handleInsert(context: InsertionContext, item: LookupElement) {
        val text = item.lookupString

        val element = PsiTreeUtil.findElementOfClassAtOffset(
            context.file,
            context.tailOffset - 1, LocationsPatternPsiElement::class.java, false
        ) ?: return

        context.document.replaceString(
            element.node.startOffset,
            element.node.startOffset + element.node.textLength, text
        )

        context.commitDocument()
    }
}
