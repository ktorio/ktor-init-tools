package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*

object WebsocketsFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-websockets:\$ktor_version")
    override val id = "ktor-websockets"
    override val title = "WebSockets"
    override val description = "Adds WebSockets support for bidirectional communication with the client"
    override val documentation = "https://ktor.io/features/websockets.html"
}