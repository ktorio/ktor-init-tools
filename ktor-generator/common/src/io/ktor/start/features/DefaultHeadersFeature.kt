package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object DefaultHeadersFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "default-headers"
    override val title = "DefaultHeaders"
    override val description = "This feature adds a default set of headers to HTTP responses"
    override val documentation = "https://ktor.io/features/default-headers.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            "install(DefaultHeaders)" {
                +"header(\"X-Engine\", \"Ktor\") // will send this header with each response"
            }
        }
    }
}
