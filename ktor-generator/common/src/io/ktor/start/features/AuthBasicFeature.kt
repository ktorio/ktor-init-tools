package io.ktor.start.features

import io.ktor.start.*

object AuthBasicFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val dependencies by lazy { listOf(AuthFeature) }
    override val id = "auth-basic"
    override val title = "Authentication Basic"
    override val description = "Handle Basic authentication"
    override val documentation = "https://ktor.io/features/authentication/basic.html"
}