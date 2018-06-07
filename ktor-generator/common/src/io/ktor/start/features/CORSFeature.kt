package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object CORSFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "cors"
    override val title = "CORS"
    override val description = "Enable Cross-Origin Resource Sharing (CORS)"
    override val documentation = "https://ktor.io/features/cors.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            "install(CORS)" {
                +"method(HttpMethod.Options)"
                +"method(HttpMethod.Get)"
                +"method(HttpMethod.Post)"
                +"method(HttpMethod.Put)"
                +"method(HttpMethod.Delete)"
                +"method(HttpMethod.Patch)"
                +"header(HttpHeaders.Authorization)"
                +"allowCredentials = true"
                +"anyHost()"
            }
        }
    }
}
