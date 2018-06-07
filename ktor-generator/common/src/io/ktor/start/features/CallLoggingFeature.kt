package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object CallLoggingFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "call-logging"
    override val title = "CallLogging"
    override val description = "Logs client requests"
    override val documentation = "https://ktor.io/features/call-logging.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(CallLogging)" {
            +"level = Level.INFO"
            +"filter { call -> call.request.path().startsWith(\"/\") }"
        }
    }
}
