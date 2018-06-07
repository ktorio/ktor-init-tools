package io.ktor.start.intellij

import com.intellij.ide.util.projectWizard.*
import com.intellij.openapi.*
import com.intellij.openapi.application.*
import com.intellij.openapi.module.*
import com.intellij.openapi.progress.*
import com.intellij.openapi.project.*
import com.intellij.openapi.projectRoots.*
import com.intellij.openapi.roots.*
import com.intellij.openapi.util.*
import com.intellij.openapi.util.io.*
import com.intellij.openapi.vfs.*
import com.intellij.ui.components.*
import io.ktor.start.*
import io.ktor.start.features.*
import io.ktor.start.project.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
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

    override fun setupRootModel(rootModel: ModifiableRootModel) {
        val project = rootModel.project
        val root = createAndGetRoot() ?: return
        val module = rootModel.module
        rootModel.addContentEntry(root)
        if (moduleJdk != null) rootModel.sdk = moduleJdk

        //val configuration = settings.values.iterator().next()
        //addDependencies(configuration, buildSystem)

        project.backgroundTask("Setting Up Project") {
            val info = BuildInfo(
                includeWrapper = true,
                projectType = "gradle",
                ktorVersion = "0.9.2",
                artifactName = "sample",
                artifactGroup = "com.sample",
                ktorEngine = "netty",
                fetch = {
                    val url =
                        KtorModuleType::class.java.getResourceAsStream(it)
                                ?: KtorModuleType::class.java.getResourceAsStream("/$it")
                                ?: ClassLoader.getSystemClassLoader().getResourceAsStream("/$it")
                                ?: ClassLoader.getSystemClassLoader().getResourceAsStream("$it")
                    url?.readBytes() ?: error("Can't find resource '$it'")
                }
            )

            runBlocking {
                for ((_, content) in generate(info, ApplicationKt)) {
                    root.createFile(content.name, content.data)
                }
            }
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

    override fun getCustomOptionsStep(context: WizardContext, parentDisposable: Disposable?): ModuleWizardStep? {
        //return ProjectJdkForModuleStep(context, JavaSdk.getInstance())
        return KtorModuleWizardStep(context)
    }
}

fun VirtualFile.createFile(path: String, data: String, charset: Charset = UTF8): VirtualFile =
    createFile(path, data.toByteArray(charset))

fun VirtualFile.createFile(path: String, data: ByteArray): VirtualFile {
    val file = File(path)
    val dir = this.createDirectories(file.parent)
    return runWriteAction {
        dir.createChildData(null, file.name).apply {
            setBinaryContent(data)
        }
    }
}

fun VirtualFile.createDirectories(path: String?): VirtualFile {
    if (path == null) return this
    return runWriteAction {
        val parts = path.split('/', limit = 2)
        val firstName = parts[0]
        val lastName = parts.getOrNull(1)
        val child = this.findChild(firstName) ?: this.createChildDirectory(null, firstName)
        if (lastName != null) child.createDirectories(lastName) else child
    }
}

fun Project.backgroundTask(
    name: String,
    indeterminate: Boolean = true,
    cancellable: Boolean = false,
    background: Boolean = false,
    callback: (indicator: ProgressIndicator) -> Unit
) {
    ProgressManager.getInstance().run(object : Task.Backgroundable(this, name, cancellable, { background }) {
        override fun shouldStartInBackground() = background

        override fun run(indicator: ProgressIndicator) {
            if (indeterminate) indicator.isIndeterminate = true
            callback(indicator)
        }
    })
}

inline fun <T> runWriteAction(crossinline runnable: () -> T): T {
    //return ApplicationManager.getApplication().runWriteAction(Computable { runnable() })
    return object : WriteAction<T>() {
        @Throws(Throwable::class)
        override fun run(result: Result<T>) {
            val res = runnable()
            result.setResult(res)
        }
    }.execute().throwException().resultObject
}

class KtorModuleWizardStep(val context: WizardContext) : ModuleWizardStep() {
    override fun updateDataModel() {
        println("updateDataModel")
        //context.projectJdk = JavaSdkUtil.getIdeaRtJarPath()
    }

    val featuresToCheckbox = LinkedHashMap<Feature, JCheckBox>()
    val panel = JPanel().apply {
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