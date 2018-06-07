package io.ktor.start.intellij

import com.intellij.ide.util.frameworkSupport.*
import com.intellij.ide.util.projectWizard.*
import com.intellij.openapi.*
import com.intellij.openapi.module.*
import com.intellij.openapi.projectRoots.*
import com.intellij.openapi.roots.*
import com.intellij.openapi.roots.ui.configuration.*

import javax.swing.*
import com.intellij.openapi.util.IconLoader
import com.intellij.openapi.util.Pair
import com.intellij.openapi.vfs.*
import org.jetbrains.jps.model.module.*
import com.intellij.openapi.roots.CompilerModuleExtension
import com.intellij.ui.*
import com.intellij.ui.components.*
import com.intellij.uiDesigner.core.*
import io.ktor.start.features.*
import javafx.scene.layout.*
import org.jetbrains.jps.model.serialization.JpsModelSerializationDataService.getModuleExtension



class KtorModuleType : ModuleType<KtorModuleBuilder>("ktor") {
    companion object {
        val KTOR_BIG_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon.png") }
        val KTOR_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon16.png") }
        val INSTANCE = KtorModuleType()
    }

    override fun createModuleBuilder(): KtorModuleBuilder = KtorModuleBuilder()
    override fun getName(): String = "Ktor"
    override fun getDescription(): String = "Ktor Quickstart"
    override fun getNodeIcon(isOpened: Boolean): Icon? = KTOR_ICON
    override fun getIcon(): Icon = KTOR_BIG_ICON

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

    override fun setupRootModel(rootModel: ModifiableRootModel) {
        val compilerModuleExtension = rootModel.getModuleExtension(CompilerModuleExtension::class.java)
        compilerModuleExtension.setExcludeOutput(true)
        rootModel.inheritSdk()
        //final VirtualFile root = contentEntryPath
        //rootModel.addContentEntry(root);
    }

    override fun getCustomOptionsStep(context: WizardContext?, parentDisposable: Disposable?): ModuleWizardStep? {
        //return ProjectJdkForModuleStep(context, JavaSdk.getInstance())
        return KtorModuleWizardStep()
    }
}

class KtorModuleWizardStep : ModuleWizardStep() {
    override fun updateDataModel() {
    }

    // https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/creator/ProjectChooserWizardStep.kt
    override fun getComponent(): JComponent {
        return JPanel().apply {
            layout = BoxLayout(this, BoxLayout.Y_AXIS)
            add(JPanel().apply {
                add(JLabel("Project:"))
                add(JComboBox(arrayOf("gradle", "maven")))
                add(JCheckBox("Wrapper", true))
                add(JLabel("Using:"))
                add(JComboBox(arrayOf("netty", "jetty", "tomcat", "cio")))
                add(JLabel("Ktor Version:"))
                add(JComboBox(arrayOf("0.9.2")))
            })
            add(JLabel("Features:"))
            add(JBScrollPane(JPanel().apply {
                layout = BoxLayout(this, BoxLayout.Y_AXIS)
                //border = IdeBorderFactory.createBorder()
                for (feature in ALL_FEATURES) {
                    add(JCheckBox(feature.title))
                }
            }, JBScrollPane.VERTICAL_SCROLLBAR_ALWAYS, JBScrollPane.HORIZONTAL_SCROLLBAR_NEVER))
        }
    }
}