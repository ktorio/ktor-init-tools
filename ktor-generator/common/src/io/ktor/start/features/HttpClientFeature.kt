package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*

object HttpClientFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-client-apache:\$ktor_version")
    override val id = "ktor-client-apache"
    override val title = "HTTP Client"
    override val description = "Adds support for doing HTTP requests"
    override val documentation = "https://ktor.io/clients/http-client.html"
}
