package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object StatusPagesFeature : Feature(ApplicationKt, RoutingFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-host-common:\$ktor_version")
    override val id = "status-pages"
    override val title = "Status Pages"
    override val description = "Allow to respond to thrown exceptions."
    override val documentation = "https://ktor.io/features/status-pages.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addApplicationClasses {
            +"class AuthenticationException : RuntimeException()"
            +"class AuthorizationException : RuntimeException()"
        }
        addRoute {
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
}
