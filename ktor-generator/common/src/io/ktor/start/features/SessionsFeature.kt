package io.ktor.start.features

import io.ktor.start.*

object SessionsFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-sessions:\$ktor_version")
    override val id = "ktor-sessions"
    override val title = "Sessions"
    override val description = "Adds supports for sessions: with the payload in the client or the server"
    override val documentation = "https://ktor.io/features/sessions.html"
}
