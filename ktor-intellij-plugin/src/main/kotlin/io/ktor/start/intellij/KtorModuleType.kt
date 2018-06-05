package io.ktor.start.intellij

import com.intellij.ide.util.frameworkSupport.*
import com.intellij.ide.util.projectWizard.*
import com.intellij.openapi.module.*
import com.intellij.openapi.projectRoots.*
import com.intellij.openapi.roots.*
import com.intellij.openapi.roots.ui.configuration.*

import javax.swing.*
import com.intellij.openapi.util.IconLoader
import com.intellij.openapi.util.Pair
import com.intellij.openapi.vfs.*
import org.jetbrains.jps.model.module.*

class KtorModuleType : ModuleType<KtorModuleBuilder>("ktor") {
    companion object {
        //var KTOR_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon.png") }
        var KTOR_ICON = IconLoader.getIcon("/icons/ktor-icon16.png")
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

    override fun getIcon(): Icon {
        return super.getIcon()
    }

    override fun isSupportedRootType(type: JpsModuleSourceRootType<*>?): Boolean {
        return super.isSupportedRootType(type)
    }

    override fun toString(): String {
        return super.toString()
    }

    override fun isValidSdk(module: Module, projectSdk: Sdk?): Boolean {
        return super.isValidSdk(module, projectSdk)
    }

    override fun isMarkInnerSupportedFor(type: JpsModuleSourceRootType<*>?): Boolean {
        return super.isMarkInnerSupportedFor(type)
    }

    override fun modifyProjectTypeStep(settingsStep: SettingsStep, moduleBuilder: ModuleBuilder): ModuleWizardStep? {
        return super.modifyProjectTypeStep(settingsStep, moduleBuilder)
    }

    override fun modifySettingsStep(settingsStep: SettingsStep, moduleBuilder: ModuleBuilder): ModuleWizardStep? {
        return super.modifySettingsStep(settingsStep, moduleBuilder)
    }

    override fun getDefaultAcceptableRole(): FrameworkRole {
        return super.getDefaultAcceptableRole()
    }

    override fun createWizardSteps(
        wizardContext: WizardContext,
        moduleBuilder: KtorModuleBuilder,
        modulesProvider: ModulesProvider
    ): Array<ModuleWizardStep> {
        return super.createWizardSteps(wizardContext, moduleBuilder, modulesProvider)
    }
}

class KtorModuleBuilder : ModuleBuilder(), SourcePathsBuilder {
    override fun addSourcePath(sourcePathInfo: Pair<String, String>?) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun setSourcePaths(sourcePaths: MutableList<Pair<String, String>>?) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun getSourcePaths(): MutableList<Pair<String, String>> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun getModuleType(): ModuleType<*> {
        return KtorModuleType()
    }

    override fun setupRootModel(modifiableRootModel: ModifiableRootModel) {
        //final VirtualFile root = contentEntryPath
        //rootModel.addContentEntry(root);
    }
}
