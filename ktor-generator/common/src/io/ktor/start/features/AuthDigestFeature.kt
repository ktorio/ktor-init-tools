package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*

object AuthDigestFeature : Feature(ApplicationKt, AuthFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val id = "auth-digest"
    override val title = "Authentication Digest"
    override val description = "Handle Digest authentication"
    override val documentation = "https://ktor.io/features/authentication/digest.html"
}