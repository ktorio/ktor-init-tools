package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object HtmlDslFeature : Feature() {
    override val repos = Repos.jcenter
    override val artifacts = listOf("io.ktor:ktor-html-builder:\$ktor_version")
    override val id = "html-dsl"
    override val title = "HTML DSL"
    override val description = "Generate HTML using Kotlin code"
    override val documentation = "https://ktor.io/features/templates/html-dsl.html"

    override fun imports(info: BuildInfo) = listOf(
        "io.ktor.html.*",
        "kotlinx.html.*"
    )

    override fun Indenter.routing(info: BuildInfo) {
        +""
        "get(\"/html-dsl\")" {
            "call.respondHtml" {
                "body" {
                    +"h1 { +\"HTML\" }"
                }
            }
        }
    }
}
