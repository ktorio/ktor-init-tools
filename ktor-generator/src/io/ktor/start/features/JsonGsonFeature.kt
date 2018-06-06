package io.ktor.start.features

import io.ktor.start.*

object JsonGsonFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-gson:\$ktor_version")
    override val id = "ktor-gson"
    override val title = "GSON"
    override val description = "Handles JSON serialization using GSON library"
}