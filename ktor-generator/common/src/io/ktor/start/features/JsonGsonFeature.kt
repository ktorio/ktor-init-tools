package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object JsonGsonFeature : Feature(ApplicationKt, ContentNegotiationFeature, RoutingFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-gson:\$ktor_version")
    override val id = "ktor-gson"
    override val title = "GSON"
    override val description = "Handles JSON serialization using GSON library"
    override val documentation = "https://ktor.io/features/content-negotiation/gson.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.gson.*")
        addImport("io.ktor.features.*")
        appendSeparated(ContentNegotiationFeature.BLOCK) {
            "gson" {
            }
        }
        addRoute {
            "get(\"/json/gson\")" {
                +"call.respond(mapOf(\"hello\" to \"world\"))"
            }
        }
    }
}