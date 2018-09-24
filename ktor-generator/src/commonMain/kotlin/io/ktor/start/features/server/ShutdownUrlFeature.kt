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

object ShutdownUrlFeature : ServerFeature(ApplicationKt, ApplicationConf) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-host-common:\$ktor_version")
    override val id = "shutdown-url"
    override val title = "Shutdown URL"
    override val description = "This feature enables a URL that when accessed, shutdowns the server."
    override val documentation = "https://ktor.io/features/shutdown-url.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.server.engine.*")
        addHoconDeployment {
            +"shutdown.url = \"/ktor/application/shutdown\""
        }
        addFeatureInstall {
            "install(ShutDownUrl.ApplicationCallFeature)" {
                +"// The URL that will be intercepted (you can also use the application.conf's ktor.deployment.shutdown.url key)"
                +"shutDownUrl = \"/ktor/application/shutdown\""
                +"// A function that will be executed to get the exit code of the process"
                +"exitCodeSupplier = { 0 } // ApplicationCall.() -> Int"
            }
        }
    }
}
