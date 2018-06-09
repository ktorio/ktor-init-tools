package io.ktor.start.intellij

import com.intellij.openapi.module.*
import com.intellij.openapi.util.*
import javax.swing.*

class KtorModuleType : ModuleType<KtorModuleBuilder>("ktor") {
    companion object {
        val NAME = "Ktor"
        val DESCRIPTION = "Ktor Quickstart"
        val KTOR_BIG_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon.png") }
        val KTOR_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon16.png") }
        val INSTANCE = KtorModuleType()
    }

    override fun createModuleBuilder(): KtorModuleBuilder = KtorModuleBuilder()
    override fun getName(): String = NAME
    override fun getDescription(): String = DESCRIPTION
    override fun getNodeIcon(isOpened: Boolean): Icon? = KTOR_ICON
    override fun getIcon(): Icon = KTOR_BIG_ICON
}
