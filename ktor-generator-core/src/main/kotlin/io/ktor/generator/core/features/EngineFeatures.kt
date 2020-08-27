package io.ktor.generator.core.features

/**
 * Fake features for templating (see [NettyEngine], [JettyEngine], [TomcatEngine], [CioEngine]).
 *
 * Adds corresponding engine dependency to the list of build system dependencies and allows generating main class name
 * based on selected engine.
 * */
open class EngineFeature(val engineName: String) : KtorFeature {
    override val id = engineName
    override val name = engineName
    override val description = null
    override val vendor = KtorPluginVendor.JetBrains
    override val requiredFeatures = listOf<String>()
    override val documentation = null

    override val installReceipt = FeatureInstallReceipt(
        dependencies = listOf(
            MavenDependency(
                group = "io.ktor",
                artifact = "ktor-server-$engineName",
                version = DependencyVersionTemplate.KtorVersion
            )
        )
    )
    override val testInstallReceipt = null
}

object NettyEngine : EngineFeature("netty")
object JettyEngine : EngineFeature("jetty")
object TomcatEngine : EngineFeature("tomcat")
object CioEngine : EngineFeature("cio")

