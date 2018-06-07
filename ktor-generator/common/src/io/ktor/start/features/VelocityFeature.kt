package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*

object VelocityFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-velocity:\$ktor_version")
    override val id = "velocity"
    override val title = "Velocity"
    override val description = "Serve HTML content using Apache's Velocity template engine"
    override val documentation = "https://ktor.io/features/templates/velocity.html"
}