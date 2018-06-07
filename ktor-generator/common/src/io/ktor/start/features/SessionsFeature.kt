package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*

object SessionsFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-sessions:\$ktor_version")
    override val id = "ktor-sessions"
    override val title = "Sessions"
    override val description = "Adds supports for sessions: with the payload in the client or the server"
    override val documentation = "https://ktor.io/features/sessions.html"
}
