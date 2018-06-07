package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object AutoHeadResponseFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "caching-headers"
    override val title = "CachingHeaders"
    override val description = "Send the headers Cache-Control and Expires used by clients and proxies to cache requests"
    override val documentation = "https://ktor.io/features/caching-headers.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(CachingHeaders)" {
            +"options { outgoingContent ->"
            indent {
                "when (outgoingContent.contentType?.withoutParameters())" {
                    +"ContentType.Text.CSS -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60))"
                    +"else -> null"
                }
            }
            +"}"
        }
    }
}
