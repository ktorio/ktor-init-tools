package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object ContentNegotiationFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "content-negotiation"
    override val title = "ContentNegotiation"
    override val description = "Provides automatic content conversion according to Content-Type and Accept headers."
    override val documentation = "https://ktor.io/features/content-negotiation.html"

    val BLOCK = newSlot("BLOCK")

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addFeatureInstall {
            "install(ContentNegotiation)" {
               block(BLOCK)
            }
        }
    }
}
