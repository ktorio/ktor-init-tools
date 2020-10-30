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

object HSTSFeature : ServerFeature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "hsts"
    override val title = "HSTS"
    override val description = "Enable HTTP Strict Transport Security (HSTS)"
    override val documentation = "https://ktor.io/docs/hsts.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.features.*")
        addFeatureInstall {
            "install(HSTS)" {
                +"includeSubDomains = true"
            }
        }
    }
}
