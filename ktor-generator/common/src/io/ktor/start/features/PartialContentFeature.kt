package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object PartialContentFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "partial-content"
    override val title = "PartialContent"
    override val description = "Handles requests with the Range header. Generating Accept-Ranges and the Content-Range headers and slicing the served content when required."
    override val documentation = "https://ktor.io/features/partial-content.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(PartialContent)" {
            +"// Maximum number of ranges that will be accepted from a HTTP request."
            +"// If the HTTP request specifies more ranges, they will all be merged into a single range."
            +"maxRangeCount = 10"
        }
    }
}
