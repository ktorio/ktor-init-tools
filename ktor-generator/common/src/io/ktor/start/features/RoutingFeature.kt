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

object RoutingFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "routing"
    override val title = "Routing"
    override val description = "Allows to define structured routes and associated handlers."
    override val documentation = "https://ktor.io/features/routing.html"
    val BLOCK = newSlot("BLOCK")

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.routing.*")
        addImport("io.ktor.http.*")
        appendSeparated(ApplicationKt.MODULE_POST) {
            "routing" {
                "get(\"/\")" {
                    +"call.respondText(\"HELLO WORLD!\", contentType = ContentType.Text.Plain)"
                }
                block(BLOCK)
            }
        }
    }
}

fun BlockBuilder.addRoute(callback: Indenter.() -> Unit) {
    appendSeparated(RoutingFeature.BLOCK) {
        callback()
    }
}