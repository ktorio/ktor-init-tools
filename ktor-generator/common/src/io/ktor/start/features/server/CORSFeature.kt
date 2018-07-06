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

object CORSFeature : ServerFeature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "cors"
    override val title = "CORS"
    override val description = "Enable Cross-Origin Resource Sharing (CORS)"
    override val documentation = "https://ktor.io/features/cors.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            "install(CORS)" {
                +"method(HttpMethod.Options)"
                +"method(HttpMethod.Put)"
                +"method(HttpMethod.Delete)"
                +"method(HttpMethod.Patch)"
                +"header(HttpHeaders.Authorization)"
                +"header(\"MyCustomHeader\")"
                +"allowCredentials = true"
                +"anyHost() // @TODO: Don't do this in production if possible. Try to limit it."
            }
        }
    }
}
