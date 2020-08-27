package io.ktor.generator.core.features

/**
 * [KtorFeature] is wrapping the Marketplace API.
 *
 * It provides access to feature basic metadata (such as id, name, vendor) as well as to
 * its documentation that is kept separately on Marketplace server and provided on request
 * and to its [FeatureInstallReceipt]
 */
interface KtorFeature {
    val id: String
    val name: String
    val description: String?
    val vendor: KtorPluginVendor
    val requiredFeatures: List<String>

    /**
     * Documentation should be lazily requested from Marketplace on the first time when the feature is being viewed.
     * */
    val documentation: KtorFeatureDocumentation?

    /**
     * Install receipt will be lazily requested from Marketplace when the project is being generated.
     *
     * [installReceipt] represents how feature should be added to a project and provides some templates to use in
     * the main application.
     *
     * See [FeatureInstallReceipt] for more info.
     * */
    val installReceipt: FeatureInstallReceipt

    /**
     * Install receipt will be lazily requested from Marketplace when the project is being generated.
     *
     * [testInstallReceipt] represents how feature should be added to tests and provides some templates to use in
     * the test application. Optional value since not all of the features provide test functionality.
     *
     * See [FeatureInstallReceipt] for more info.
     * */
    val testInstallReceipt: FeatureInstallReceipt?

    // Shortcut functions used for simplicity in rocker templates:
    val testExtraTemplates get() = testInstallReceipt?.extraTemplates.orEmpty()

    // Shortcut functions used for simplicity in rocker templates:
    val installBlock get() = installReceipt.installBlock
    val extraTemplates get() = installReceipt.extraTemplates

    val extraTestTemplates get() = testInstallReceipt?.extraTemplates.orEmpty()
}

class KtorFeatureDocumentation(
    val description: String,
    val usage: String,
    val options: String
)