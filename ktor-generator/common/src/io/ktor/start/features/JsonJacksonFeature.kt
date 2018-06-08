package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object JsonJacksonFeature : Feature(ApplicationKt, ContentNegotiationFeature, RoutingFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-jackson:\$ktor_version")
    override val id = "ktor-jackson"
    override val title = "Jackson"
    override val description = "Handles JSON serialization using Jackson library"
    override val documentation = "https://ktor.io/features/content-negotiation/jackson.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("com.fasterxml.jackson.databind.*")
        addImport("io.ktor.jackson.*")
        addImport("io.ktor.features.*")
        appendSeparated(ContentNegotiationFeature.BLOCK) {
            "jackson" {
                +"enable(SerializationFeature.INDENT_OUTPUT)"
            }
        }
        addRoute {
            "get(\"/json/jackson\")" {
                +"call.respond(mapOf(\"hello\" to \"world\"))"
            }
        }
    }
}