package io.ktor.start.features

import io.ktor.start.*

object AuthOauthFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val dependencies by lazy { listOf(AuthFeature) }
    override val id = "auth-oauth"
    override val title = "Authentication OAuth"
    override val description = "Handle OAuth authentication"
    override val documentation = "https://ktor.io/features/authentication/oauth.html"
}