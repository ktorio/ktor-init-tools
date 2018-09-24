package io.ktor.start.features.server

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object WebjarsFeature : ServerFeature(ApplicationKt, RoutingFeature) {
    override val since = Versions.V094
    override val repos = Repos.ktor
    override val artifacts = listOf(
        "io.ktor:ktor-webjars:\$ktor_version",
        "org.webjars:jquery:3.2.1" // sample
    )
    override val id = "webjars"
    override val title = "Webjars"
    override val description = "Allows you to package your assets such as javascript libraries and css as part of your uber-jar."
    override val documentation = "https://ktor.io/features/webjars.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.webjars.*")
        addImport("java.time.*")

        addFeatureInstall {
            +"install(Webjars)" {
                +"path = \"/webjars\" //defaults to /webjars"
                +"zone = ZoneId.systemDefault() //defaults to ZoneId.systemDefault()"
            }
        }
        addRoute {
            +"get(\"/webjars\")" {
                +"call.respondText(\"<script src='/webjars/jquery/jquery.js'></script>\", ContentType.Text.Html)"
            }
        }
    }
}
