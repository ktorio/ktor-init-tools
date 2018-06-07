package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object ConditionalHeadersFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "conditional-headers"
    override val title = "ConditionalHeaders"
    override val description = "Avoids sending content if the client already has the same content using ETag or LastModified"
    override val documentation = "https://ktor.io/features/conditional-headers.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            +"install(ConditionalHeaders)"
        }
    }
}
