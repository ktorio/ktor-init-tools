package io.ktor.generator.core.features

/**
 * [FeatureInstallReceipt] contains information that will be added to project build and to its source code
 * in order to add, install and configure a specific feature.
 * It doesn't contain the feature's source code but it does contain a Gradle/Maven dependency and a code snippet needed
 * to install this feature.
 *
 * @param [imports] a list of imports should be added to project in order to use the feature.
 *
 * @param installBlock if not null will be put in the application code to install the feature. Example:
 * install(Locations) { ... }
 *
 * @param extraTemplates provides a list of extra templates (classes, functions, examples) that will be put to the
 * project's code base in order to teach users how to use the plugin.
 *
 * @param dependencies a list of dependencies that should be included into Gradle/Maven in order to use the feature.
 *
 * @param additionalMavenRepositories a list of Maven repositories (urls) that should be mentioned in Maven in order to
 * be able to download required Maven plugins or dependencies from remote.
 *
 * @param additionalGradleRepositories the same as [additionalMavenRepositories] but for Gradle.
 *
 * @param requiredMavenPlugins a list of Maven plugins that are required to be installed to make feature work (in case
 * user selects Maven as a build system for their project).
 *
 * @param requiredGradlePlugins a list of Gradle plugins that are required to be installed to make feature work (in case
 * user selects Gradle as a build system for their project).
 *
 * */
class FeatureInstallReceipt(
    val imports: List<String> = emptyList(),
    val installBlock: String? = null,
    val extraTemplates: List<CodeTemplate> = emptyList(),
    dependencies: List<MavenDependency> = emptyList(),
    additionalMavenRepositories: List<MavenRepository> = emptyList(),
    additionalGradleRepositories: List<GradleRepository> = emptyList(),
    requiredMavenPlugins: List<MavenPlugin> = emptyList(),
    requiredGradlePlugins: List<GradlePlugin> = emptyList()
) {
    val mavenReceipt = MavenInstallReceipt(requiredMavenPlugins, additionalMavenRepositories, dependencies)
    val gradleReceipt = GradleInstallReceipt(requiredGradlePlugins, additionalGradleRepositories, dependencies)
}

data class CodeTemplate(
    val position: Position,
    val text: String
) {
    enum class Position {
        INSIDE_APPLICATION_MODULE,
        OUTSIDE_APPLICATION_MODULE,
        SEPARATE_FILE,
        TEST_FUNCTION
    }
}

/**
 * [MavenInstallReceipt] is needed as a part of [FeatureInstallReceipt]. It describes the way feature will be
 * added to Maven as a dependency in case user specifies Maven as a build system.
 * */
data class MavenInstallReceipt(
    val requiredPlugins: List<MavenPlugin>,
    val additionalRepositories: List<MavenRepository>,
    val dependencies: List<MavenDependency>
)

data class MavenDependency(
    val group: String,
    val artifact: String,
    val version: DependencyVersionTemplate?
)

/**
 * Version of the dependency that will be used in gradle or maven.
 * */
interface DependencyVersionTemplate {
    val gradleFormat: String
    val mavenFormat: String

    object KotlinVersion : DependencyVersionTemplate {
        override val gradleFormat = "\$kotlin_version"
        override val mavenFormat = "\${kotlin_version}"
    }

    object KtorVersion : DependencyVersionTemplate {
        override val gradleFormat = "\$ktor_version"
        override val mavenFormat = "\${ktor_version}"
    }

    class AdhockVersion(val version: String) : DependencyVersionTemplate {
        override val gradleFormat = version
        override val mavenFormat = version
    }
}

data class MavenPlugin(
    val group: String,
    val artifact: String,
    val version: String? = null,
)

data class MavenRepository(
    val id: String,
    val url: String
)

data class GradlePlugin(
    val id: String,
    val version: String? = null
)

sealed class GradleRepository {
    class FunctionDefinedRepository(val functionName: String) : GradleRepository()
    class UrlDefinedRepository(val url: String) : GradleRepository()
}

/**
 * [GradleInstallReceipt] is needed as a part of [FeatureInstallReceipt]. It describes the way feature will be
 * added to Gradle as a dependency in case user specifies Gradle as a build system. It reuses the information
 * already kept in [MavenInstallReceipt].
 * */
class GradleInstallReceipt(
    val requiredPlugins: List<GradlePlugin>,
    val additionalRepositories: List<GradleRepository>,
    val dependencies: List<MavenDependency>
)