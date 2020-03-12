package io.ktor.start.intellij.locations

import com.intellij.lang.injection.*
import com.intellij.openapi.project.*
import com.intellij.psi.*
import com.intellij.psi.util.*
import org.jetbrains.kotlin.idea.inspections.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.psi.psiUtil.*

internal fun findClassOrObject(project: Project, psiElement: PsiElement): KtClassOrObject? {
    return InjectedLanguageManager.getInstance(project)
        .getInjectionHost(psiElement)
        ?.parentOfType()
}

internal fun convertToClass(
    project: Project,
    objectElement: KtObjectDeclaration
): KtClass {
    val objectKeyword = objectElement.getObjectKeyword()!!
    val editor = objectElement.findExistingEditor()!!

    val startOffset = objectKeyword.startOffset
    editor.document.replaceString(
        startOffset, objectKeyword.endOffset, "class"
    )

    PsiDocumentManager.getInstance(project).commitDocument(editor.document)
    val newElement = PsiDocumentManager.getInstance(project)
        .getPsiFile(editor.document)?.findElementAt(startOffset + 1)
        ?: error("Unable to lookup new class keyword element")

    return newElement.parentOfType() ?: error("Unable to lookup new class element")
}

internal fun addClassParameter(
    project: Project,
    classElement: KtClass,
    parameterName: String,
    optional: Boolean
) {
    classElement.createPrimaryConstructorIfAbsent()
    val parametersList = classElement.createPrimaryConstructorParameterListIfAbsent()

    val allVars = parametersList.parameters.isNotEmpty() && parametersList.parameters.all { it.isMutable }

    val text = buildString {
        if (allVars) {
            append("var ")
        } else {
            append("val ")
        }

        append(parameterName)
        append(": String")
        if (optional) {
            append("?")
        }
    }

    parametersList.addParameter(KtPsiFactory(project).createParameter(text))
}