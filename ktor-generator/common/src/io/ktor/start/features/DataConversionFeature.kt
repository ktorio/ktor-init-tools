package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object DataConversionFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "data-conversion"
    override val title = "DataConversion"
    override val description = "Allows to serialize and deserialize a list of values (used by the Locations feature)"
    override val documentation = "https://ktor.io/features/caching-headers.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            +"install(DataConversion)"
        }
    }
}
