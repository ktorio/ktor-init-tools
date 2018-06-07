package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object AuthFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val id = "auth"
    override val title = "Authentication"
    override val description = "Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2"
    override val documentation = "https://ktor.io/features/authentication.html"

    val BLOCK = newSlot("BLOCK")

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addFeatureInstall {
            if (info.ktorVer >= Versions.V092) {
                "install(Authentication)" {
                    block(BLOCK)
                }
            } else {
                // @TODO: Update to 0.9.1
                "install(Authentication)" {
                    block(BLOCK)
                }
            }
        }
    }
}

fun BlockBuilder.addAuthProvider(callback: Indenter.() -> Unit) {
    append(AuthFeature.BLOCK) {
        callback()
    }
}
