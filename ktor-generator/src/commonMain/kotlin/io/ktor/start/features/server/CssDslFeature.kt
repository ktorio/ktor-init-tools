/*
 * Copyright 2018 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package io.ktor.start.features.server

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object CssDslFeature : ServerFeature(ApplicationKt, RoutingFeature, HtmlDslFeature) {
    override val group: String = "Templating"
    override val repos = Repos.mavenCentral + Repos.kotlin_js_wrappers
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
