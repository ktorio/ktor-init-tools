package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object DefaultHeadersFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "default-headers"
    override val title = "DefaultHeaders"
    override val description = "This feature adds a default set of headers to HTTP responses"
    override val documentation = "https://ktor.io/features/default-headers.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(DefaultHeaders)" {
            +"header(\"X-Engine\", \"Ktor\") // will send this header with each response"
        }
    }
}
