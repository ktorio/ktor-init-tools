package io.ktor.start.intellij.locations

import com.intellij.extapi.psi.*
import com.intellij.lang.*
import com.intellij.psi.*
import com.intellij.util.*
import org.jetbrains.kotlin.psi.psiUtil.*

internal fun createPsiElement(node: ASTNode): PsiElement {
    return when (node.elementType) {
        PatternLexer.TOKEN_COMPONENT -> {
            when (node.treeParent.elementType) {
                PatternLexer.SUBSTITUTION -> LocationsPatternPsiElement.ParameterNameElement(node)
                else -> LocationsPatternPsiElement.ComponentElement(node)
            }
        }
        PatternLexer.SUBSTITUTION -> LocationsPatternPsiElement.SubstitutionElement(node)
        PatternLexer.TOKEN_SLASH -> LocationsPatternPsiElement.SlashElement(node)
        PatternLexer.ROOT -> LocationsPatternPsiElement.RootElement(node)
        PatternLexer.TOKEN_OPTIONAL -> LocationsPatternPsiElement.VarArgElement(node)
        PatternLexer.TOKEN_ELLIPSIS -> LocationsPatternPsiElement.VarArgElement(node)

        else -> LocationsPatternPsiElement.OtherElement(node)
    }
}

sealed class LocationsPatternPsiElement(node: ASTNode) : ASTWrapperPsiElement(node) {

    class RootElement(node: ASTNode) : LocationsPatternPsiElement(node)

    class SlashElement(node: ASTNode) : LocationsPatternPsiElement(node)

    class ComponentElement(node: ASTNode) : LocationsPatternPsiElement(node)

    class SubstitutionElement(node: ASTNode) : LocationsPatternPsiElement(node), PsiNameIdentifierOwner {
        val parameterNameElement: ParameterNameElement?
            get() = findDescendantOfType()

        override fun getNameIdentifier(): PsiElement? = parameterNameElement

        override fun getName(): String? = parameterNameElement?.text?.trim()

        override fun setName(name: String): PsiElement {
            if ('{' in name || '}' in name) {
                throw IncorrectOperationException("Unable to rename parameter to '$name' because of illegal characters")
            }

            val parameterNameElement = parameterNameElement
                ?: throw IncorrectOperationException("Unable to rename substitution with no name")

            val file = PsiFileFactory.getInstance(project).createFileFromText(
                "dummy.${PatternFileType.defaultExtension}",
                PatternFileType, "{$name}"
            )

            return parameterNameElement.replace(
                file.findDescendantOfType<ParameterNameElement>()
                    ?: error("Unable to find element")
            )
        }

        override fun getTextOffset(): Int {
            return parameterNameElement?.textOffset ?: super.getTextOffset()
        }
    }

    class ParameterNameElement(node: ASTNode) : LocationsPatternPsiElement(node)

    class OtherElement(node: ASTNode) : LocationsPatternPsiElement(node)

    class VarArgElement(node: ASTNode) : LocationsPatternPsiElement(node) {
        val isEllipsis: Boolean get() = node.elementType == PatternLexer.TOKEN_ELLIPSIS
    }
}
