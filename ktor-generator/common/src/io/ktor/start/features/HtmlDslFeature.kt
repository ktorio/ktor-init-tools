package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object HtmlDslFeature : Feature(ApplicationKt, RoutingFeature) {
    override val repos = Repos.jcenter
    override val artifacts = listOf("io.ktor:ktor-html-builder:\$ktor_version")
    override val id = "html-dsl"
    override val title = "HTML DSL"
    override val description = "Generate HTML using Kotlin code like a pure-core template engine"
    override val documentation = "https://ktor.io/features/templates/html-dsl.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.html.*")
        addImport("kotlinx.html.*")
        addRoute {
            "get(\"/html-dsl\")" {
                "call.respondHtml" {
                    "body" {
                        +"h1 { +\"HTML\" }"
                        "ul" {
                            "for (n in 1..10)" {
                                +"li { +\"\$n\" }"
                            }
                        }
                    }
                }
            }
        }
    }
}
