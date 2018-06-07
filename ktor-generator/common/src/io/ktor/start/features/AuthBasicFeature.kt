package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object AuthBasicFeature : Feature(ApplicationKt, AuthFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val id = "auth-basic"
    override val title = "Authentication Basic"
    override val description = "Handle Basic authentication"
    override val documentation = "https://ktor.io/features/authentication/basic.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addAuthProvider {
            "basic" {

            }
        }
    }
}