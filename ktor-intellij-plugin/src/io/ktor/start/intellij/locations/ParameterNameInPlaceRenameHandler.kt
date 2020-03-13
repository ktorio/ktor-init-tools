package io.ktor.start.intellij.locations

import com.intellij.openapi.editor.Editor
import com.intellij.psi.PsiElement
import com.intellij.psi.PsiNameIdentifierOwner
import com.intellij.psi.PsiNamedElement
import com.intellij.psi.util.parentOfType
import com.intellij.refactoring.rename.inplace.MemberInplaceRenameHandler
import com.intellij.refactoring.rename.inplace.MemberInplaceRenamer
import com.intellij.refactoring.rename.inplace.VariableInplaceRenamer

class ParameterNameInPlaceRenameHandler : MemberInplaceRenameHandler() {
    override fun createMemberRenamer(
        element: PsiElement,
        elementToRename: PsiNameIdentifierOwner,
        editor: Editor
    ): MemberInplaceRenamer {
        return Renamer(elementToRename, element, editor)
    }

    override fun createRenamer(elementToRename: PsiElement, editor: Editor): VariableInplaceRenamer? {
        elementToRename.parentOfType<LocationsPatternPsiElement.SubstitutionElement>()?.let {
            return Renamer(it, null, editor)
        }

        return super.createRenamer(elementToRename, editor)
    }

    private class Renamer(elementToRename: PsiNamedElement, substituted: PsiElement?, editor: Editor) :
        MemberInplaceRenamer(elementToRename, substituted, editor) {

    }
}