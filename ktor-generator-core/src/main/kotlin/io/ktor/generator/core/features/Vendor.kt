package io.ktor.generator.core.features

data class KtorPluginVendor(
    val name: String,
    val url: String
) {
    companion object {
        val JetBrains = KtorPluginVendor(
            name = "JetBrains",
            url = "https://www.jetbrains.com"
        )
    }
}