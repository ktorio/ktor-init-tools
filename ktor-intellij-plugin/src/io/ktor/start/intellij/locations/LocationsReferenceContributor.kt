package io.ktor.start.intellij.locations

import com.intellij.openapi.util.*
import com.intellij.patterns.*
import com.intellij.psi.*
import com.intellij.psi.util.*
import com.intellij.util.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.psi.psiUtil.*
import org.jetbrains.kotlin.utils.addToStdlib.*

class LocationsReferenceContributor : PsiReferenceContributor() {
    override fun registerReferenceProviders(registrar: PsiReferenceRegistrar) {
        registrar.registerReferenceProvider(
            PlatformPatterns.psiElement(KtNamedDeclaration::class.java),
            LocationsReferenceProvider1()
        )

        registrar.registerReferenceProvider(
            PlatformPatterns.psiElement(LocationsPatternPsiElement.SubstitutionElement::class.java),
            LocationsReferenceProvider0()
        )
    }
}

internal class LocationsReferenceProvider1 : PsiReferenceProvider() {
    override fun acceptsTarget(target: PsiElement): Boolean {
        return target is LocationsPatternPsiElement.ParameterNameElement
    }

    override fun getReferencesByElement(
        element: PsiElement,
        context: ProcessingContext
    ): Array<PsiReference> {
        val property = element as KtNamedDeclaration
        property.name ?: return emptyArray()

        if (property !is KtProperty && property !is KtParameter) {
            return emptyArray()
        }

        val clazz = property.parentOfType<KtClassOrObject>() ?: return emptyArray()

        return clazz.annotationEntries.filter {
            it.isLocation()
        }.mapNotNull { annotation ->
            annotation.valueArguments.singleOrNull()
                ?.getArgumentExpression()
                ?.cast<KtStringTemplateExpression>()
                ?.takeIf { it.isValidHost }
                ?.let {
                    PatternParameterReference(
                        property,
                        TextRange.from(
                            property.nameIdentifier?.startOffsetInParent ?: 0,
                            property.nameIdentifier?.textLength ?: property.textLength
                        )
                    )
                }
        }.toTypedArray()
    }
}

private val EMPTY_REFERENCES_ARRAY = emptyArray<PsiReference>()

internal class LocationsReferenceProvider0 : PsiReferenceProvider() {
    override fun getReferencesByElement(element: PsiElement, context: ProcessingContext): Array<PsiReference> {
        val componentElement =
            element.parentOfType<LocationsPatternPsiElement.ParameterNameElement>()
        val substitutionElement =
            componentElement?.parentOfType<LocationsPatternPsiElement.SubstitutionElement>()
                ?: return EMPTY_REFERENCES_ARRAY

        val propertyName = componentElement.text.trim()

        val classOrObject = findClassOrObject(element.project, substitutionElement)
        if (classOrObject is KtClass) {
            val property = classOrObject.findPropertyByName(propertyName)
            if (property != null) {
                val references = property.nameIdentifier
                if (references != null) {
                    return arrayOf(object : PsiReferenceBase<PsiElement>(references), PsiPolyVariantReference {
                        override fun resolve(): PsiElement? {
                            return references
                        }

                        override fun multiResolve(incompleteCode: Boolean): Array<ResolveResult> {
                            return arrayOf(PsiElementResolveResult(references))
                        }

                        override fun getRangeInElement(): TextRange {
                            return TextRange(0, element.textLength)
                        }

                        override fun handleElementRename(newElementName: String): PsiElement {
                            val result = ManipulatorImpl().handleContentChange(componentElement, newElementName)
                                ?: throw IncorrectOperationException("Failed to rename location parameter")

                            return result
                        }
                    })
                }
            }
        }

        return EMPTY_REFERENCES_ARRAY
    }
}
