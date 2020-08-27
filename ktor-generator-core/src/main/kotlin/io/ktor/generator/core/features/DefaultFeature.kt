package io.ktor.generator.core.features

/**
 * Fake feature representing the core of the Ktor itself.
 *
 *
 * Adds the following to Gradle:
 * - mavenLocal()
 * - jcenter()
 * - maven { url 'https://kotlin.bintray.com/ktor' }
 * - implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version"
 * - implementation "ch.qos.logback:logback-classic:$logback_version"
 * - implementation("io.ktor:ktor-server-core:$ktor_version")
 * - testImplementation "io.ktor:ktor-server-tests:$ktor_version"
 *
 * Adds the following to the application code:
 * - import io.ktor.application.*
 * - import io.ktor.response.*
 * - import io.ktor.request.*
 *
 * Adds the following to the tests:
 * - import io.ktor.application.*
 * - import io.ktor.response.*
 * - import io.ktor.request.*
 * */
object DefaultFeature : KtorFeature {
    override val id = "ktor"
    override val name = "Ktor"
    override val description = null
    override val vendor = KtorPluginVendor.JetBrains
    override val requiredFeatures = listOf<String>()
    override val documentation = null

    override val installReceipt = FeatureInstallReceipt(
        additionalGradleRepositories = listOf(
            GradleRepository.FunctionDefinedRepository(functionName = "mavenLocal"),
            GradleRepository.FunctionDefinedRepository(functionName = "jcenter"),
            GradleRepository.UrlDefinedRepository(url = "https://kotlin.bintray.com/ktor"),
        ),
        additionalMavenRepositories = listOf(
            MavenRepository(
                id = "jcenter",
                url = "https://jcenter.bintray.com"
            ),
            MavenRepository(
                id = "ktor",
                url = "https://kotlin.bintray.com/ktor"
            ),
            // TODO: do we really need this? :
            MavenRepository(
                id = "jsWrappers",
                url = "https://kotlin.bintray.com/kotlin-js-wrappers"
            ),
        ),
        dependencies = listOf(
            MavenDependency(
                group = "org.jetbrains.kotlin",
                artifact = "kotlin-stdlib-jdk8",
                version = DependencyVersionTemplate.KotlinVersion
            ),
            MavenDependency(
                group = "ch.qos.logback",
                artifact = "logback-classic",
                version = DependencyVersionTemplate.AdhockVersion("1.2.1")
            ),
            MavenDependency(
                group = "io.ktor",
                artifact = "ktor-server-core",
                version = DependencyVersionTemplate.KtorVersion
            )
        ),
        imports = listOf(
            "io.ktor.application.*",
            "io.ktor.response.*",
            "io.ktor.request.*"
        ),
    )

    override val testInstallReceipt = FeatureInstallReceipt(
        dependencies = listOf(
            MavenDependency(
                group = "io.ktor",
                artifact = "ktor-server-tests",
                version = DependencyVersionTemplate.KtorVersion
            )
        ),
        imports = listOf(
            "io.ktor.application.*",
            "io.ktor.response.*",
            "io.ktor.request.*",
            "kotlin.test.*",
            "io.ktor.server.testing.*"
        )
    )
}
