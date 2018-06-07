package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object JsonGsonFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-gson:\$ktor_version")
    override val dependencies by lazy { listOf(ContentNegotiationFeature) }
    override val id = "ktor-gson"
    override val title = "GSON"
    override val description = "Handles JSON serialization using GSON library"
    override val documentation = "https://ktor.io/features/content-negotiation/gson.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.gson.*",
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(ContentNegotiation)" {
            "gson" {
            }
        }
    }

    override fun Indenter.routing(info: BuildInfo) {
        +""
        "get(\"/json/gson\")" {
            +"call.respond(mapOf(\"hello\" to \"world\"))"
        }
    }
}