package io.ktor.start.features

import io.ktor.start.*

object RawSocketsTlsFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-network-tls:\$ktor_version")
    override val id = "ktor-network-tls"
    override val title = "Raw Secure SSL/TLS Sockets"
    override val description =
        "Adds Raw Socket support for listening and connecting to tcp and udp sockets with secure sockets"
    override val documentation = "https://ktor.io/servers/raw-sockets.html#secure"
}