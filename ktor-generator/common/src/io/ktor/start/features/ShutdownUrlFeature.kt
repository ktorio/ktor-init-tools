package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object ShutdownUrlFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-host-common:\$ktor_version")
    override val id = "shutdown-url"
    override val title = "Shutdown URL"
    override val description = "This feature enables a URL that when accessed, shutdowns the server."
    override val documentation = "https://ktor.io/features/shutdown-url.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.server.engine.*"
    )

    override fun Indenter.hoconKtorDeploymentSection(info: BuildInfo) {
        +"shutdown.url = \"/ktor/application/shutdown\""
    }

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(ShutDownUrl.ApplicationCallFeature)" {
            +"// The URL that will be intercepted (you can also use the application.conf's ktor.deployment.shutdown.url key)"
            +"shutDownUrl = \"/ktor/application/shutdown\""
            +"// A function that will be executed to get the exit code of the process"
            +"exitCodeSupplier = { 0 } // ApplicationCall.() -> Int"
        }
    }
}
