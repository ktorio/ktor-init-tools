package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object StaticContentFeature : Feature(ApplicationKt, RoutingFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-host-common:\$ktor_version")
    override val id = "static-content"
    override val title = "Static Content"
    override val description = "Serves static files from defined locations."
    override val documentation = "https://ktor.io/features/static-content.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.content.*")
        addRoute {
            +"// Static feature. Try to access `/static/ktor_logo.svg`"
            "static(\"static\")" {
                +"resources(\"static\")"
            }
        }
        fileBinary("resources/static/ktor_logo.svg") {
            info.fetch("static/ktor_logo.svg")
        }
    }
}
