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

object HttpsRedirectFeature : ServerFeature(ApplicationKt) {
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "https-redirect"
    override val title = "HttpsRedirect"
    override val description = "All the affected HTTP calls perform a redirect to its HTTPS counterpart before processing the call"
    override val documentation = "https://ktor.io/docs/https-redirect.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            +"// https://ktor.io/servers/features/https-redirect.html#testing"
            +"if (!testing)" {
                +"install(HttpsRedirect)" {
                    +"// The port to redirect to. By default 443, the default HTTPS port."
                    +"sslPort = 443"
                    +"// 301 Moved Permanently, or 302 Found redirect."
                    +"permanentRedirect = true"
                }
            }
        }
    }
}
