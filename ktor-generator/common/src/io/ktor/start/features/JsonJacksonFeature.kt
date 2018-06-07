package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object JsonJacksonFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-jackson:\$ktor_version")
    override val id = "ktor-jackson"
    override val title = "Jackson"
    override val description = "Handles JSON serialization using Jackson library"
    override val documentation = "https://ktor.io/features/content-negotiation/jackson.html"

    override fun imports(info: BuildInfo) = listOf(
        "com.fasterxml.jackson.databind.*",
        "io.ktor.jackson.*",
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(ContentNegotiation)" {
            "jackson" {
                +"enable(SerializationFeature.INDENT_OUTPUT)"
            }
        }
    }

    override fun Indenter.routing(info: BuildInfo) {
        +""
        "get(\"/json/jackson\")" {
            +"call.respond(mapOf(\"hello\" to \"world\"))"
        }
    }
}