package io.ktor.start.features

import io.ktor.start.*

object AuthFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val id = "auth"
    override val title = "Authentication"
    override val description = "Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2"
    override val documentation = "https://ktor.io/features/authentication.html"
}