package io.ktor.generator.core.features

import io.ktor.generator.core.*

/**
 * Extended list of Ktor features used for simplisity of template generation.
 ** */
class Features private constructor(private val featureList: List<KtorFeature>) : List<KtorFeature> by featureList {
    companion object {
        /**
         * Constructs a [Features] instance from a list of [KtorFeature] with checking feature dependencies and adding defaults.
         *
         * @throws MissingRequiredFeatureException in case one of the features required by another feature is not in the [featureList].
         * */
        fun create(engine: Engine, featureList: List<KtorFeature>): Features {
            // Required feature check is being done here:
            val featureIds = featureList.map(KtorFeature::id)
            featureList.forEach { dependingFeature ->
                dependingFeature.requiredFeatures.forEach { requiredFeatureId ->
                    if (requiredFeatureId !in featureIds) {
                        throw MissingRequiredFeatureException(dependingFeature.id, requiredFeatureId)
                    }
                }
            }

            val engineFeature = when (engine) {
                Engine.NETTY -> NettyEngine
                Engine.JETTY -> JettyEngine
                Engine.CIO -> CioEngine
                Engine.TOMCAT -> TomcatEngine
            }

            return Features(featureList + engineFeature + DefaultFeature)
        }
    }

    val engine: EngineFeature? get() = featureList.filterIsInstance<EngineFeature>().firstOrNull()

    private fun <T> uniqueFeatureAttributes(transform: KtorFeature.() -> List<T>): List<T> =
        featureList.map { it.transform() }.flatten().distinct()

    // Shortcut functions used for simplicity in rocker templates:
    val allGradlePlugins
        get() = uniqueFeatureAttributes {
            installReceipt.gradleReceipt.requiredPlugins + testInstallReceipt?.gradleReceipt?.requiredPlugins.orEmpty()
        }

    val allMavenPlugins
        get() = uniqueFeatureAttributes {
            installReceipt.mavenReceipt.requiredPlugins + testInstallReceipt?.mavenReceipt?.requiredPlugins.orEmpty()
        }

    val allGradleRepositoryUrls
        get() = uniqueFeatureAttributes {
            installReceipt.gradleReceipt.additionalRepositories +
                    testInstallReceipt?.gradleReceipt?.additionalRepositories.orEmpty()
        }
            .filterIsInstance<GradleRepository.UrlDefinedRepository>()
            .map { it.url }

    val allGradleRepositoryFunctions
        get() = uniqueFeatureAttributes {
            installReceipt.gradleReceipt.additionalRepositories +
                    testInstallReceipt?.gradleReceipt?.additionalRepositories.orEmpty()
        }
            .filterIsInstance<GradleRepository.FunctionDefinedRepository>()
            .map { it.functionName }

    val allMavenRepositories
        get() = uniqueFeatureAttributes {
            installReceipt.mavenReceipt.additionalRepositories +
                    testInstallReceipt?.mavenReceipt?.additionalRepositories.orEmpty()
        }

    val mavenDependencies get() = uniqueFeatureAttributes { installReceipt.mavenReceipt.dependencies }
    val gradleDependencies get() = uniqueFeatureAttributes { installReceipt.gradleReceipt.dependencies }

    val testMavenDependencies get() = uniqueFeatureAttributes { testInstallReceipt?.mavenReceipt?.dependencies.orEmpty() }
    val testGradleDependencies get() = uniqueFeatureAttributes { testInstallReceipt?.gradleReceipt?.dependencies.orEmpty() }

    val imports get() = uniqueFeatureAttributes { installReceipt.imports }
    val testImports get() = uniqueFeatureAttributes { testInstallReceipt?.imports.orEmpty() }

    val allImports get() = (imports + testImports).distinct()
}

class MissingRequiredFeatureException(dependingFeatureId: String, requiredFeatureId: String) : IllegalStateException(
    "Feature $dependingFeatureId depends on the feature $requiredFeatureId but it is not selected."
)