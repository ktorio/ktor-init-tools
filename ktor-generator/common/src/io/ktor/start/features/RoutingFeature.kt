package io.ktor.start.features

import io.ktor.start.*

object RoutingFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "routing"
    override val title = "Routing"
    override val description = "Allows to define structured routes and associated handlers."
    override val documentation = "https://ktor.io/features/routing.html"
}
