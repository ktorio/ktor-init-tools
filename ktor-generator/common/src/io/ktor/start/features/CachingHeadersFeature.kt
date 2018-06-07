package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object CachingHeadersFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "auto-head-response"
    override val title = "AutoHeadResponse"
    override val description = "Provide responses to HEAD requests for existing routes that have the GET verb defined"
    override val documentation = "https://ktor.io/features/autoheadresponse.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        +"install(AutoHeadResponse)"
    }
}
