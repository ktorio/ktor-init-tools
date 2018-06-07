package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object HttpsRedirectFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "https-redirect"
    override val title = "HttpsRedirect"
    override val description = "All the affected HTTP calls perform a redirect to its HTTPS counterpart before processing the call"
    override val documentation = "https://ktor.io/features/https-redirect.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(HttpsRedirect)" {
            +"// The port to redirect to. By default 443, the default HTTPS port."
            +"sslPort = 443"
            +"// 301 Moved Permanently, or 302 Found redirect."
            +"permanentRedirect = true"
        }
    }
}
