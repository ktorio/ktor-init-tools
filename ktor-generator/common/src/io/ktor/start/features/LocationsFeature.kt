package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*

object LocationsFeature : Feature(ApplicationKt, StatusPagesFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-locations:\$ktor_version")
    override val id = "ktor-locations"
    override val title = "Locations"
    override val description = "Allows to define route locations in a typed way"
    override val documentation = "https://ktor.io/features/locations.html"
}
