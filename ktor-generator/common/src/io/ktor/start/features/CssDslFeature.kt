package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object CssDslFeature : Feature(ApplicationKt, RoutingFeature) {
    override val repos = Repos.jcenter + Repos.kotlin_js_wrappers
    override val artifacts = listOf("org.jetbrains:kotlin-css-jvm:1.0.0-pre.31-kotlin-1.2.41")
    override val id = "css-dsl"
    override val title = "CSS DSL"
    override val description = "Generate CSS using Kotlin code"
    override val documentation = "https://github.com/JetBrains/kotlin-wrappers/tree/master/kotlin-css"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("kotlinx.html.*")
        addImport("kotlinx.css.*")
        addImport("io.ktor.http.*")
        addRoute {
            "get(\"/styles.css\")" {
                "call.respondCss" {
                    "body" {
                        +"backgroundColor = Color.red"
                    }
                    "p" {
                        +"fontSize = 2.em"
                    }
                    "rule(\"p.myclass\")" {
                        +"color = Color.blue"
                    }
                }
            }
        }
        addExtensionMethods {
            "fun FlowOrMetaDataContent.styleCss(builder: CSSBuilder.() -> Unit)" {
                "style(type = ContentType.Text.CSS.toString())" {
                    +"+CSSBuilder().apply(builder).toString()"
                }
            }
        }
        addExtensionMethods {
            "fun CommonAttributeGroupFacade.style(builder: CSSBuilder.() -> Unit)" {
                +"this.style = CSSBuilder().apply(builder).toString().trim()"
            }
        }
        addExtensionMethods {
            "suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit)" {
                +"this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)"
            }
        }
    }
}
