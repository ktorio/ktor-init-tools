package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object HSTSFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "hsts"
    override val title = "HSTS"
    override val description = "Enable HTTP Strict Transport Security (HSTS)"
    override val documentation = "https://ktor.io/features/hsts.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(HSTS)" {
            +"includeSubDomains = true"
        }
    }
}
