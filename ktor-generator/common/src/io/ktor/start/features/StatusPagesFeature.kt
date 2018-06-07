package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object StatusPagesFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-host-common:\$ktor_version")
    override val id = "status-pages"
    override val title = "Status Pages"
    override val description = "Allow to respond to thrown exceptions."
    override val documentation = "https://ktor.io/features/status-pages.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.classes(info: BuildInfo) {
        +"class AuthenticationException : RuntimeException()"
        +"class AuthorizationException : RuntimeException()"
    }

    override fun Indenter.routing(info: BuildInfo) {
        "install(StatusPages)" {
            "exception<AuthenticationException>"(suffix = " cause ->") {
                +"call.respond(HttpStatusCode.Unauthorized)"
            }
            "exception<AuthorizationException>"(suffix = " cause ->") {
                +"call.respond(HttpStatusCode.Forbidden)"
            }
        }
    }
}
