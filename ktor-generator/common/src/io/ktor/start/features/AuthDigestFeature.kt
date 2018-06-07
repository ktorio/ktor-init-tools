package io.ktor.start.features

import io.ktor.start.*

object AuthDigestFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val dependencies by lazy { listOf(AuthFeature) }
    override val id = "auth-digest"
    override val title = "Authentication Digest"
    override val description = "Handle Digest authentication"
    override val documentation = "https://ktor.io/features/authentication/digest.html"
}