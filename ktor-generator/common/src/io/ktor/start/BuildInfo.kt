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

package io.ktor.start

import io.ktor.start.util.*

data class BuildInfo(
    val includeWrapper: Boolean,
    val projectType: ProjectType,
    val ktorVersion: SemVer,
    val artifactName: String,
    val artifactGroup: String,
    val artifactVersion: String,
    val ktorEngine: KtorEngine,
    val fetch: suspend (path: String) -> ByteArray
) {
    val ktorVer = ktorVersion
    val developmentPackage = "io.ktor.server.${ktorEngine.id}"
    val developmentEngineFQ = "$developmentPackage.DevelopmentEngine"
}

typealias BuildInfoBlock = Block<BuildInfo>
