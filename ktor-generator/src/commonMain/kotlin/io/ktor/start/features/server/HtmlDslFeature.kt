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

object HtmlDslFeature : ServerFeature(ApplicationKt, RoutingFeature) {
    override val group: String = "Templating"
    override val repos = Repos.mavenCentral
    override val artifacts = listOf("io.ktor:ktor-html-builder:\$ktor_version")
    override val id = "html-dsl"
    override val title = "HTML DSL"
    override val description = "Generate HTML using Kotlin code like a pure-core template engine"
    override val documentation = "https://ktor.io/docs/html-dsl.html"

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
