package io.ktor.start.intellij

import com.intellij.ide.util.projectWizard.ModuleBuilder
import com.intellij.openapi.module.ModuleType
import com.intellij.openapi.roots.*

import javax.swing.*
import com.intellij.openapi.util.IconLoader



class KtorModuleType : ModuleType<KtorModuleBuilder>("ktor") {
    companion object {
        //var KTOR_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon.png") }
        var KTOR_ICON = IconLoader.getIcon("/icons/ktor-icon.png")
    }

    override fun createModuleBuilder(): KtorModuleBuilder {
        return KtorModuleBuilder()
    }

    override fun getName(): String {
        return "Ktor"
    }

    override fun getDescription(): String {
        return "Ktor Quickstart"
    }

    override fun getNodeIcon(isOpened: Boolean): Icon? {
        return KTOR_ICON
    }
}

class KtorModuleBuilder : ModuleBuilder() {
    override fun getModuleType(): ModuleType<*> {
        return KtorModuleType()
    }

    override fun setupRootModel(modifiableRootModel: ModifiableRootModel?) {
    }

}