package io.ktor.start.features

import io.ktor.start.*

object JsonJacksonFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-jackson:\$ktor_version")
    override val id = "ktor-jackson"
    override val title = "Jackson"
    override val description = "Handles JSON serialization using Jackson library"
}