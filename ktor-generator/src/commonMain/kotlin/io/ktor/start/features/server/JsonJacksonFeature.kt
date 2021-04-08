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

object JsonJacksonFeature : ServerFeature(ApplicationKt,
    ContentNegotiationFeature,
    RoutingFeature
) {
    override val group: String = "Content Negotiation"

    override val artifacts = listOf("io.ktor:ktor-jackson:\$ktor_version")
    override val id = "ktor-jackson"
    override val title = "Jackson"
    override val description = "Handles JSON serialization using Jackson library"
    override val documentation = "https://ktor.io/docs/content-negotiation-jackson.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("com.fasterxml.jackson.databind.*")
        addImport("io.ktor.jackson.*")
        addImport("io.ktor.features.*")
        appendSeparated(ContentNegotiationFeature.BLOCK) {
            "jackson" {
                +"enable(SerializationFeature.INDENT_OUTPUT)"
            }
        }
        addRoute {
            "get(\"/json/jackson\")" {
                +"call.respond(mapOf(\"hello\" to \"world\"))"
            }
        }
    }
}
