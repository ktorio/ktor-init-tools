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

object JsonGsonFeature : ServerFeature(ApplicationKt,
    ContentNegotiationFeature,
    RoutingFeature
) {
    override val group: String = "Content Negotiation"

    override val artifacts = listOf("io.ktor:ktor-gson:\$ktor_version")
    override val id = "ktor-gson"
    override val title = "GSON"
    override val description = "Handles JSON serialization using GSON library"
    override val documentation = "https://ktor.io/docs/content-negotiation-gson.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.gson.*")
        addImport("io.ktor.features.*")
        appendSeparated(ContentNegotiationFeature.BLOCK) {
            "gson" {
            }
        }
        addRoute {
            "get(\"/json/gson\")" {
                +"call.respond(mapOf(\"hello\" to \"world\"))"
            }
        }
    }
}
