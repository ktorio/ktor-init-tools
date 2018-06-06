package io.ktor.start.features

import io.ktor.start.*

object VelocityFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-velocity:\$ktor_version")
    override val id = "velocity"
    override val title = "Velocity"
    override val description = "Serve HTML content using Apache velocity"
}