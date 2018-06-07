package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object StaticContentFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-host-common:\$ktor_version")
    override val id = "static-content"
    override val title = "Static Content"
    override val description = "Serves static files from defined locations."
    override val documentation = "https://ktor.io/features/static-content.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.content.*"
    )

    override fun Indenter.routing(info: BuildInfo) {
        +"// Static feature. Try to access `/static/ktor_logo.svg`"
        "static(\"static\")" {
            +"resources(\"static\")"
        }
    }

    override suspend fun addFiles(info: BuildInfo, files: FileContainer, fetcher: FileFetcher) {
        files.add("${info.artifactName}/resources/static/ktor_logo.svg", fetcher.fetch("static/ktor_logo.svg"))
    }
}
