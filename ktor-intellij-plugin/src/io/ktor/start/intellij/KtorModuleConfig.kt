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

package io.ktor.start.intellij

import io.ktor.start.*
import io.ktor.start.swagger.*

class KtorModuleConfig {
    var artifactGroup = "com.example"
    var artifactId = "example"
    var artifactVersion = "0.0.1"
    var projectType = ProjectType.Gradle
    var featuresToInstall = listOf<Feature>()
    var ktorVersion = Versions.LAST
    var wrapper = true
    var engine = KtorEngine.Netty
    var swaggerModules = listOf<SwaggerModel>()
    var swaggerGenKind: SwaggerGenerator.Kind = SwaggerGenerator.Kind.RAW
}
