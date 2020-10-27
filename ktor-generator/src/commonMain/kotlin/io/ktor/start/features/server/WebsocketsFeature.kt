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

object WebsocketsFeature : ServerFeature(ApplicationKt, RoutingFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-websockets:\$ktor_version")
    override val id = "ktor-websockets"
    override val title = "WebSockets"
    override val description = "Adds WebSockets support for bidirectional communication with the client"
    override val documentation = "https://ktor.io/docs/clients-websockets.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.websocket.*")
        addImport("io.ktor.http.cio.websocket.*")
        addImport("java.time.*")

        addFeatureInstall {
            +"install(io.ktor.websocket.WebSockets)" {
                +"pingPeriod = Duration.ofSeconds(15)"
                +"timeout = Duration.ofSeconds(15)"
                +"maxFrameSize = Long.MAX_VALUE"
                +"masking = false"
            }
        }
        
        addRoute {
            +"webSocket(\"/myws/echo\")" {
                +"send(Frame.Text(\"Hi from server\"))"
                +"while (true)" {
                    +"val frame = incoming.receive()"
                    +"if (frame is Frame.Text)" {
                        +"send(Frame.Text(\"Client said: \" + frame.readText()))"
                    }
                }
            }
        }
    }
}
