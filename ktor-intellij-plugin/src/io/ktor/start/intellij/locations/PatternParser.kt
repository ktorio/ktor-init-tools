package io.ktor.start.intellij.locations

import com.intellij.extapi.psi.*
import com.intellij.lang.*
import com.intellij.lexer.*
import com.intellij.openapi.fileTypes.*
import com.intellij.openapi.project.*
import com.intellij.openapi.util.*
import com.intellij.psi.*
import com.intellij.psi.tree.*
import com.intellij.psi.util.*
import io.ktor.start.intellij.KtorModuleType
import org.jetbrains.kotlin.idea.caches.resolve.*
import org.jetbrains.kotlin.psi.*
import org.jetbrains.kotlin.psi.psiUtil.*
import org.jetbrains.kotlin.resolve.descriptorUtil.*
import org.jetbrains.kotlin.resolve.lazy.*
import org.jetbrains.kotlinx.serialization.compiler.resolve.*
import javax.swing.*

object LocationsPatternLanguage : Language("Kotlin.ktor.locations.pattern") {
    override fun getDisplayName(): String {
        return "ktor locations pattern"
    }
}

class PatternInjector : LanguageInjector {
    override fun getLanguagesToInject(
        host: PsiLanguageInjectionHost,
        injectionPlacesRegistrar: InjectedLanguagePlaces
    ) {
        if (host.isValidHost && host is KtStringTemplateExpression) {
            val annotation = host.parentOfType<KtAnnotationEntry>() ?: return
            val annotationFqName = annotation.resolveToCall(BodyResolveMode.PARTIAL)
                ?.candidateDescriptor
                ?.returnType
                ?.toClassDescriptor
                ?.fqNameOrNull()
                ?.asString()
                ?: return

            if (annotationFqName != "io.ktor.locations.Location") {
                return
            }

            val argument = host.parentOfType<KtValueArgument>() ?: return
            if (argument.getArgumentName()?.text == "path" || argument.parent.children.indexOf(argument) == 0) {
                val length = host.textLength

                injectionPlacesRegistrar.addPlace(
                    LocationsPatternLanguage, TextRange.from(0, length),
                    null, null
                )
            }
        }
    }
}

object PatternFileType : LanguageFileType(LocationsPatternLanguage) {
    override fun getDescription(): String {
        return "ktor locations path pattern"
    }

    override fun getIcon(): Icon? {
        return KtorModuleType.KTOR_ICON
    }

    override fun getName(): String {
        return LocationsPatternLanguage.displayName
    }

    override fun getDefaultExtension(): String {
        return "locationspattern"
    }
}

class PatternFileImpl(viewProvider: FileViewProvider) : PsiFileBase(viewProvider,
    LocationsPatternLanguage
) {
    override fun getFileType(): FileType {
        return PatternFileType
    }

    val parameterNames: List<LocationsPatternPsiElement.ParameterNameElement>
        get() = collectDescendantsOfType()
}

class PatternParserDefinition : ParserDefinition {
    override fun createParser(project: Project?): PsiParser {
        return PsiParser { _, builder ->
            parseLocationsPattern(builder)
            builder.treeBuilt
        }
    }

    override fun createFile(viewProvider: FileViewProvider?): PsiFile {
        return PatternFileImpl(viewProvider!!)
    }

    override fun getStringLiteralElements(): TokenSet {
        return TokenSet.EMPTY
    }

    override fun getFileNodeType(): IFileElementType {
        return IFileElementType(LocationsPatternLanguage)
    }

    override fun createLexer(project: Project?): Lexer {
        return PatternLexer()
    }

    override fun createElement(node: ASTNode): PsiElement {
        return createPsiElement(node)
    }

    override fun getCommentTokens(): TokenSet {
        return TokenSet.EMPTY
    }

    override fun getWhitespaceTokens(): TokenSet {
        return TokenSet.EMPTY
    }
}