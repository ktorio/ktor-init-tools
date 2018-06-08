package io.ktor.start.intellij

import com.intellij.ide.util.projectWizard.*
import com.intellij.openapi.*
import com.intellij.openapi.module.*
import com.intellij.openapi.projectRoots.*
import com.intellij.openapi.roots.*
import com.intellij.openapi.roots.ui.configuration.*
import com.intellij.openapi.util.*
import com.intellij.openapi.util.io.*
import com.intellij.openapi.vfs.*
import com.intellij.ui.components.*
import com.intellij.uiDesigner.core.*
import io.ktor.start.*
import io.ktor.start.features.*
import io.ktor.start.project.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import java.awt.*
import java.io.*
import javax.swing.*

// https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/platform/MinecraftModuleType.kt
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

// https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/creator/MinecraftProjectCreator.kt
// https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/creator/MinecraftModuleBuilder.kt
// https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/buildsystem/BuildSystem.kt
// https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/buildsystem/gradle/GradleBuildSystem.kt
// https://github.com/joewalnes/idea-community/blob/master/platform/vcs-impl/src/com/intellij/openapi/vcs/impl/VcsInitialization.java
class KtorModuleBuilder : JavaModuleBuilder() {
    override fun getPresentableName() = KtorModuleType.NAME
    override fun getNodeIcon() = KtorModuleType.KTOR_ICON
    override fun getGroupName() = KtorModuleType.NAME
    override fun getWeight() = JavaModuleBuilder.BUILD_SYSTEM_WEIGHT - 1
    override fun getBuilderId() = "KTOR_MODULE"
    override fun isSuitableSdkType(sdk: SdkTypeId?) = sdk === JavaSdk.getInstance()
    val config = KtorModuleConfig()

    override fun setupRootModel(rootModel: ModifiableRootModel) {
        val project = rootModel.project
        val root = createAndGetRoot() ?: return
        val module = rootModel.module
        rootModel.addContentEntry(root)
        if (moduleJdk != null) rootModel.sdk = moduleJdk

        project.name

        project.backgroundTask("Setting Up Project") {
            val info = BuildInfo(
                includeWrapper = config.wrapper,
                projectType = config.projectType,
                ktorVersion = config.ktorVersion,
                artifactName = config.artifactId,
                artifactGroup = config.artifactGroup,
                artifactVersion = config.artifactVersion,
                ktorEngine = config.engine,
                fetch = {
                    val url =
                        KtorModuleType::class.java.getResourceAsStream(it)
                                ?: KtorModuleType::class.java.getResourceAsStream("/$it")
                                ?: ClassLoader.getSystemClassLoader().getResourceAsStream("/$it")
                                ?: ClassLoader.getSystemClassLoader().getResourceAsStream(it)
                    url?.readBytes() ?: error("Can't find resource '$it'")
                }
            )

            runBlocking {
                for ((_, content) in generate(info, listOf(ApplicationKt) + config.featuresToInstall)) {
                    root.createFile(content.name, content.data)
                }
            }

            //if (info.projectType == "gradle") {
            //    // Tell Gradle to import this project
            //    // https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/buildsystem/gradle/GradleBuildSystem.kt#L272
            //    val projectDataManager = ServiceManager.getService(ProjectDataManager::class.java)
            //    val gradleProjectImportBuilder = org.jetbrains.plugins.gradle.service.project.wizard.GradleProjectImportBuilder(projectDataManager)
            //    val gradleProjectImportProvider = org.jetbrains.plugins.gradle.service.project.wizard.GradleProjectImportBuilder(gradleProjectImportBuilder)
            //}
        }
    }

    private fun createAndGetRoot(): VirtualFile? {
        val temp = contentEntryPath ?: return null
        val path = FileUtil.toSystemIndependentName(temp)
        File(path).mkdirs()
        return LocalFileSystem.getInstance().refreshAndFindFileByPath(path)
    }

    override fun getModuleType(): ModuleType<*> = JavaModuleType.getModuleType()
    override fun getParentGroup() = KtorModuleType.NAME

    override fun createWizardSteps(
        wizardContext: WizardContext, modulesProvider: ModulesProvider
    ) = arrayOf(
        KtorArtifactWizardStep(config)
    )

    override fun getCustomOptionsStep(context: WizardContext, parentDisposable: Disposable?) =
        KtorModuleWizardStep(config)

}

class KtorModuleConfig {
    var artifactGroup = "com.example"
    var artifactId = "example"
    var artifactVersion = "0.0.1"
    var projectType = ProjectType.Gradle
    var featuresToInstall = listOf<Feature>()
    var ktorVersion = Versions.LAST
    var wrapper = true
    var engine = KtorEngine.Netty
}

class KtorArtifactWizardStep(val config: KtorModuleConfig) : ModuleWizardStep() {
    lateinit var groupId: JTextField
    lateinit var artifactId: JTextField
    lateinit var version: JTextField

    val panel = JPanel().apply {
        layout = GridLayoutManager(5, 2)
        fun addLabelText(name: String, value: String, row: Int): JTextField {
            val tfield = JTextField(value)
            addAtGrid(JLabel(name), row = row, column = 0, anchor = GridConstraints.ANCHOR_WEST, fill = GridConstraints.FILL_NONE, HSizePolicy = GridConstraints.SIZEPOLICY_FIXED, VSizePolicy = GridConstraints.SIZEPOLICY_FIXED)
            addAtGrid(tfield, row = row, column = 1, anchor = GridConstraints.ANCHOR_WEST, fill = GridConstraints.FILL_HORIZONTAL, HSizePolicy = GridConstraints.SIZEPOLICY_CAN_GROW or GridConstraints.SIZEPOLICY_WANT_GROW, VSizePolicy = GridConstraints.SIZEPOLICY_FIXED)
            return tfield
        }
        addAtGrid(JLabel(""), row = 0, column = 0, HSizePolicy = GridConstraints.SIZEPOLICY_FIXED, VSizePolicy = GridConstraints.SIZEPOLICY_FIXED)
        groupId = addLabelText("GroupId", config.artifactGroup, row = 1)
        artifactId = addLabelText("ArtifactId", config.artifactId, row = 2)
        version = addLabelText("Version", config.artifactVersion, row = 3)
        add(Spacer().apply {}, GridConstraints().apply { row = 4; column = 0; fill = GridConstraints.FILL_VERTICAL })
    }

    override fun updateDataModel() {
        config.artifactGroup = groupId.text
        config.artifactId = artifactId.text
        config.artifactVersion = version.text
    }

    override fun getComponent() = panel
}

class KtorModuleWizardStep(val config: KtorModuleConfig) : ModuleWizardStep() {
    override fun updateDataModel() {
        println("updateDataModel")
        //context.projectJdk = JavaSdkUtil.getIdeaRtJarPath()
        config.projectType = projectTypeCB.selectedItem as ProjectType
        config.featuresToInstall = featuresToCheckbox.keys.filter { it.selected }
        config.ktorVersion = versionCB.selected
        config.wrapper = wrapperCheckBox.isSelected
        config.engine = engineCB.selected
    }

    lateinit var projectTypeCB: JComboBox<ProjectType>
    lateinit var engineCB: JComboBox<KtorEngine>
    lateinit var versionCB: JComboBox<SemVer>
    lateinit var wrapperCheckBox: JCheckBox
    val featuresToCheckbox = LinkedHashMap<Feature, JCheckBox>()
    val panel = JPanel().apply {
        layout = BoxLayout(this, BoxLayout.Y_AXIS)
        add(JPanel().apply {
            layout = BoxLayout(this, BoxLayout.X_AXIS)
            add(JLabel("Project:"))
            add(JComboBox(ProjectType.values()).apply {
                projectTypeCB = this
            })
            add(JCheckBox("Wrapper", true).apply {
                wrapperCheckBox = this
            })
            add(JLabel("Using:"))
            add(JComboBox(KtorEngine.values()).apply {
                engineCB = this
            })
            add(JLabel("Ktor Version:"))
            add(JComboBox(Versions.ALL).apply {
                versionCB = this
            })
        })
        add(JLabel("Features:", SwingConstants.LEFT).apply {
            alignmentX = Component.LEFT_ALIGNMENT
        })
        add(JBScrollPane(JPanel().apply {
            layout = BoxLayout(this, BoxLayout.Y_AXIS)
            //border = IdeBorderFactory.createBorder()
            for (feature in ALL_FEATURES) {
                add(JCheckBox(feature.title).apply {
                    featuresToCheckbox[feature] = this
                    addActionListener {
                        updatedFeature(feature)
                    }
                })
            }
        }, JBScrollPane.VERTICAL_SCROLLBAR_ALWAYS, JBScrollPane.HORIZONTAL_SCROLLBAR_NEVER))
    }

    var Feature.selected: Boolean
        get() = featuresToCheckbox[this]?.isSelected ?: false
        set(value) {
            featuresToCheckbox[this]?.isSelected = value
        }

    fun updatedFeature(feature: Feature) {
        if (feature.selected) {
            for (feat in feature.featureDeps) {
                feat.selected = true
            }
        }
    }

    // https://github.com/minecraft-dev/MinecraftDev/blob/dev/src/main/kotlin/com/demonwav/mcdev/creator/ProjectChooserWizardStep.kt
    override fun getComponent(): JComponent {
        println("KtorModuleWizardStep.getComponent")
        return panel
    }
}