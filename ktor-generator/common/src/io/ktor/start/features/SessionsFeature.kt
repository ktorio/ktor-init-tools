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

object SessionsFeature : ServerFeature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-sessions:\$ktor_version") // Only required for Cache and Directory storages
    override val id = "ktor-sessions"
    override val title = "Sessions"
    override val description = "Adds supports for sessions: with the payload in the client or the server"
    override val documentation = "https://ktor.io/features/sessions.html"
}
