package io.ktor.start.intellij.locations

import com.intellij.openapi.editor.Editor
import com.intellij.psi.PsiElement
import com.intellij.psi.PsiReference
import com.intellij.psi.util.parentOfType
import com.intellij.refactoring.listeners.RefactoringElementListener
import com.intellij.refactoring.rename.RenamePsiElementProcessor
import com.intellij.usageView.UsageInfo
import com.intellij.util.containers.MultiMap
import org.jetbrains.kotlin.psi.psiUtil.findPropertyByName
import org.jetbrains.kotlin.psi.psiUtil.forEachDescendantOfType

class ParameterRenameProcessor : RenamePsiElementProcessor() {
    override fun canProcessElement(element: PsiElement): Boolean {
        return element is LocationsPatternPsiElement.SubstitutionElement
                || element is LocationsPatternPsiElement.ParameterNameElement
    }

    override fun findReferences(element: PsiElement): MutableCollection<PsiReference> {
        return super.findReferences(element)
    }

    override fun substituteElementToRename(element: PsiElement, editor: Editor?): PsiElement? {
        if (element is LocationsPatternPsiElement.ParameterNameElement) {
            return element.parentOfType<LocationsPatternPsiElement.SubstitutionElement>()
        }
        if (element is LocationsPatternPsiElement.SubstitutionElement) {
            return element
        }

        return super.substituteElementToRename(element, editor)
    }

    override fun findReferences(
        element: PsiElement,
        searchInCommentsAndStrings: Boolean
    ): MutableCollection<PsiReference> {
        return super.findReferences(element, searchInCommentsAndStrings)
    }

    override fun renameElement(
        element: PsiElement,
        newName: String,
        usages: Array<out UsageInfo>,
        listener: RefactoringElementListener?
    ) {
        super.renameElement(element, newName, usages, listener)
    }

    override fun prepareRenaming(element: PsiElement, newName: String, allRenames: MutableMap<PsiElement, String>) {
        super.prepareRenaming(element, newName, allRenames)

        val parameterName = when (element) {
            is LocationsPatternPsiElement.SubstitutionElement -> element.name ?: return
            is LocationsPatternPsiElement.ParameterNameElement -> element.text.trim()
            else -> return
        }

        findClassOrObject(element.project, element)
            ?.findPropertyByName(parameterName)
            ?.let { property ->
                allRenames[property] = newName
            }
    }

    override fun findExistingNameConflicts(
        element: PsiElement,
        newName: String,
        conflicts: MultiMap<PsiElement, String>
    ) {
        if (element is LocationsPatternPsiElement.SubstitutionElement) {
            element.parentOfType<PatternFileImpl>()
                ?.forEachDescendantOfType<LocationsPatternPsiElement.SubstitutionElement> { substitution ->
                    if (substitution !== element && substitution.name == newName) {
                        conflicts.putValue(substitution, "Parameter $newName is already defined")
                    }
                }
        } else if (element is LocationsPatternPsiElement.ParameterNameElement) {
            element.parentOfType<LocationsPatternPsiElement.SubstitutionElement>()?.let { substitution ->
                findExistingNameConflicts(
                    substitution,
                    newName,
                    conflicts
                )
            }
        }
    }

    override fun isInplaceRenameSupported(): Boolean {
        return true
    }
}

