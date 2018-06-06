package io.ktor.start.features

import io.ktor.start.*

object WebsocketsFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-websockets:\$ktor_version")
    override val id = "ktor-websockets"
    override val title = "WebSockets"
    override val description = "Adds WebSockets support for bidirectional communication with the client"
}