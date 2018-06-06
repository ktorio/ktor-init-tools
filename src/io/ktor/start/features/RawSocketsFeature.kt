package io.ktor.start.features

import io.ktor.start.*

object RawSocketsFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-network:\$ktor_version")
    override val id = "ktor-network"
    override val title = "Raw Sockets"
    override val description = "Adds Raw Socket support for listening and connecting to tcp and udp sockets"
    override val documentation = "https://ktor.io/servers/raw-sockets.html"
}