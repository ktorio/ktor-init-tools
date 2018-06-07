package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object HSTSFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "hsts"
    override val title = "HSTS"
    override val description = "Enable HTTP Strict Transport Security (HSTS)"
    override val documentation = "https://ktor.io/features/hsts.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            "install(HSTS)" {
                +"includeSubDomains = true"
            }
        }
    }
}
