package io.ktor.start.features

import io.ktor.start.*

object AuthJwtFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth-jwt:\$ktor_version")
    override val id = "auth-jwt"
    override val title = "Authentication JWT"
    override val description = "Handle JWT authentication"
    override val documentation = "https://ktor.io/features/authentication.html#jwt"
}