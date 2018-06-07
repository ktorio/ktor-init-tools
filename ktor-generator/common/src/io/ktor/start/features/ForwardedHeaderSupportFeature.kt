package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object ForwardedHeaderSupportFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "forwarded-header-support"
    override val title = "ForwardedHeaderSupport"
    override val description = "This feature allows you to handle reverse proxy headers to get information about the original request when it’s behind a proxy."
    override val documentation = "https://ktor.io/features/forward-headers.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        +"install(ForwardedHeaderSupport) // WARNING: for security, do not include this if not behind a reverse proxy"
        +"install(XForwardedHeaderSupport) // WARNING: for security, do not include this if not behind a reverse proxy"
    }
}
