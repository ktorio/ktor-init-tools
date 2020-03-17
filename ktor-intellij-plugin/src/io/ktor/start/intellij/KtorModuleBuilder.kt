/*
 * Copyright 2018 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package io.ktor.start.intellij

import com.intellij.execution.RunManager
import com.intellij.ide.actions.ImportModuleAction
import com.intellij.ide.util.projectWizard.JavaModuleBuilder
import com.intellij.ide.util.projectWizard.WizardContext
import com.intellij.openapi.Disposable
import com.intellij.openapi.projectRoots.JavaSdk
import com.intellij.openapi.projectRoots.SdkTypeId
import com.intellij.openapi.roots.ModifiableRootModel
import com.intellij.openapi.roots.ui.configuration.ModulesProvider
import com.intellij.openapi.util.io.FileUtil
import com.intellij.openapi.vfs.LocalFileSystem
import com.intellij.openapi.vfs.VirtualFile
import com.intellij.projectImport.ProjectImportProvider
import io.ktor.start.BuildInfo
import io.ktor.start.ProjectType
import io.ktor.start.intellij.util.backgroundTask
import io.ktor.start.intellij.util.get
import io.ktor.start.intellij.util.invokeLater
import io.ktor.start.project.ApplicationKt
import io.ktor.start.swagger.SwaggerGenerator
import io.ktor.start.util.generate
import kotlinx.coroutines.runBlocking
import org.jetbrains.idea.maven.execution.MavenRunConfigurationType
import org.jetbrains.idea.maven.execution.MavenRunnerParameters
import org.jetbrains.idea.maven.project.MavenProjectsManager
import java.io.File

class KtorModuleBuilder : JavaModuleBuilder() {
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

        project.backgroundTask("Setting Up Project") { progress ->
            progress.text = "Preparing"
            val info = BuildInfo(
                includeWrapper = config.wrapper,
                projectType = config.projectType,
                ktorVersion = config.ktorVersion,
                artifactName = config.artifactId,
                artifactGroup = config.artifactGroup,
                artifactVersion = config.artifactVersion,
                ktorEngine = config.engine,
                swaggerGenKind = config.swaggerGenKind,
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
                val blocks = listOf(ApplicationKt) + config.featuresToInstall + config.swaggerModules.map {
                    SwaggerGenerator(
                        it,
                        config.swaggerGenKind
                    )
                }
                for ((_, content) in generate(info, blocks)) {
                    progress.text = "Generating ${content.name}"
                    File(root.path, content.name).apply {
                        parentFile.apply {
                            if (!isDirectory) {
                                if (!mkdirs()) error("Failed to create directory $this")
                            }
                        }
                        writeBytes(content.data)
                        if (content.mode.isUserExecutable) {
                            setExecutable(true)
                        }
                    }
                }
            }

            progress.text = "Configuring project model"
            root.refresh(false, true)

            when (info.projectType) {
                ProjectType.GradleKotlinDsl,
                ProjectType.Gradle -> {
                    val buildGradle = root["build.gradle.kts"] ?: root["build.gradle"]
                    if (buildGradle != null) {
                        invokeLater {
                            val provider = ProjectImportProvider.PROJECT_IMPORT_PROVIDER.extensions
                                .firstOrNull { it.canImport(buildGradle, project) }
                                ?: return@invokeLater

                            val wizard = ImportModuleAction.createImportWizard(
                                project,
                                null,
                                buildGradle,
                                provider
                            )

                            if (wizard != null && (wizard.stepCount <= 0 || wizard.showAndGet())) {
                                ImportModuleAction.createFromWizard(project, wizard)
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
                                isShared = false
                            })
                    }
                }
            }

            progress.text = "Done."
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