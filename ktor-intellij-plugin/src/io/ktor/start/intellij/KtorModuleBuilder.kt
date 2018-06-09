package io.ktor.start.intellij

import com.intellij.execution.*
import com.intellij.ide.actions.*
import com.intellij.ide.util.newProjectWizard.*
import com.intellij.ide.util.projectWizard.*
import com.intellij.openapi.*
import com.intellij.openapi.components.*
import com.intellij.openapi.externalSystem.service.project.*
import com.intellij.openapi.projectRoots.*
import com.intellij.openapi.roots.*
import com.intellij.openapi.roots.ui.configuration.*
import com.intellij.openapi.util.io.*
import com.intellij.openapi.vfs.*
import io.ktor.start.*
import io.ktor.start.intellij.util.*
import io.ktor.start.project.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import org.jetbrains.idea.maven.execution.*
import org.jetbrains.idea.maven.project.*
import org.jetbrains.plugins.gradle.service.project.wizard.*
import java.io.*

class KtorModuleBuilder : JavaModuleBuilder() {
    val SILENT_GRADLE_IMPORT = false

    override fun getPresentableName() = KtorModuleType.NAME
    override fun getNodeIcon() = KtorModuleType.KTOR_ICON
    override fun getGroupName() = KtorModuleType.NAME
    override fun getWeight() = BUILD_SYSTEM_WEIGHT - 1
    override fun getBuilderId() = "KTOR_MODULE"
    override fun isSuitableSdkType(sdk: SdkTypeId?) = sdk === JavaSdk.getInstance()
    val config = KtorModuleConfig()

    override fun setupRootModel(rootModel: ModifiableRootModel) {
        val root = createAndGetRoot() ?: return
        val project = rootModel.project
        val module = rootModel.module
        rootModel.addContentEntry(root)
        if (moduleJdk != null) rootModel.sdk = moduleJdk

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
                val blocks = listOf(ApplicationKt) + config.featuresToInstall
                for ((_, content) in generate(info, blocks)) {
                    root.createFile(content.name, content.data)
                }
            }

            when (info.projectType) {
                ProjectType.Gradle -> {
                    val buildGradle = root["build.gradle"]
                    if (buildGradle != null) {
                        invokeLater {
                            val wizard = AddModuleWizard(
                                project,
                                buildGradle.path,
                                GradleProjectImportProvider(
                                    GradleProjectImportBuilder(
                                        ServiceManager.getService(ProjectDataManager::class.java)
                                    )
                                )
                            )
                            if (SILENT_GRADLE_IMPORT) {
                                wizard.commit()
                                //wizard.clickDefaultButton()
                            } else {
                                if (wizard.showAndGet()) {
                                    ImportModuleAction.createFromWizard(project, wizard)
                                }
                            }
                        }
                    }
                }
                ProjectType.Maven -> {
                    val pomFile = root["pom.xml"]
                    if (pomFile != null) {
                        MavenProjectsManager.getInstance(project).apply {
                            addManagedFilesOrUnignore(listOf(pomFile))
                            importingSettings.apply {
                                isDownloadDocsAutomatically = true
                                isDownloadSourcesAutomatically = true
                            }
                        }

                        RunManager.getInstance(project).addConfiguration(
                            MavenRunConfigurationType.createRunnerAndConfigurationSettings(
                                null, null, MavenRunnerParameters().apply {
                                    workingDirPath = root.canonicalPath!!
                                    goals = listOf("clean", "package")
                                }, project
                            ).apply {
                                name = "${module.name} build"
                            },
                            false
                        )
                    }
                }
            }
        }
    }

    private fun createAndGetRoot(): VirtualFile? {
        val path = contentEntryPath?.let { FileUtil.toSystemIndependentName(it) } ?: return null
        return LocalFileSystem.getInstance().refreshAndFindFileByPath(File(path).apply { mkdirs() }.absolutePath)
    }

    override fun getParentGroup() = KtorModuleType.NAME

    override fun createWizardSteps(wizardContext: WizardContext, modulesProvider: ModulesProvider) = arrayOf(
        KtorArtifactWizardStep(config)
    )

    override fun getCustomOptionsStep(context: WizardContext, parentDisposable: Disposable?) =
        KtorModuleWizardStep(config)
}