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

package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object FreemarkerFeature : ServerFeature(ApplicationKt, RoutingFeature) {
    override val group: String = "Templating"
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-freemarker:\$ktor_version")
    override val id = "freemarker"
    override val title = "Freemarker"
    override val description = "Serve HTML content using Apache's FreeMarker template engine"
    override val documentation = "https://ktor.io/features/templates/freemarker.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("freemarker.cache.*")
        addImport("io.ktor.freemarker.*")
        addApplicationClasses {
            +"data class IndexData(val items: List<Int>)"
        }
        addFeatureInstall {
            "install(FreeMarker)" {
                +"templateLoader = ClassTemplateLoader(this::class.java.classLoader, \"templates\")"
            }
        }
        addRoute {
            "get(\"/html-freemarker\")" {
                +"call.respond(FreeMarkerContent(\"index.ftl\", mapOf(\"data\" to IndexData(listOf(1, 2, 3))), \"\"))"
            }
        }
        fileText("resources/templates/index.ftl") {
            +"<#-- @ftlvariable name=\"data\" type=\"${info.artifactGroup}.IndexData\" -->"
            +"<html>"
            indent {
                +"<body>"
                indent {
                    +"<ul>"
                    +"<#list data.items as item>"
                    indent {
                        +"<li>\${item}</li>"
                    }
                    +"</#list>"
                    +"</ul>"
                }
                +"</body>"
            }
            +"</html>"
        }
    }
}