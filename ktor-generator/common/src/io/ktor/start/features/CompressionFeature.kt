package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object CompressionFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "compression"
    override val title = "Compression"
    override val description = "Compress outgoing content using gzip, deflate or custom encoder and thus reduce the size of the response"
    override val documentation = "https://ktor.io/features/compression.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.features.*"
    )

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(Compression)" {
            "gzip" {
                +"priority = 1.0"
            }
            "deflate" {
                +"priority = 10.0"
                +"minimumSize(1024) // condition"
            }
        }
    }
}
