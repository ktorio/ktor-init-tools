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

import io.ktor.start.swagger.*
import io.ktor.start.util.*

data class BuildInfo(
    val includeWrapper: Boolean = false,
    val projectType: ProjectType = ProjectType.Gradle,
    val ktorVersion: KtorVersion = Versions.LAST,
    val artifactName: String = "example",
    val artifactGroup: String = "com.example",
    val artifactVersion: String = "0.0.1-SNAPSHOT",
    val ktorEngine: KtorEngine = KtorEngine.Netty,
    val generateFeatureSample: Boolean = true,
    //val swaggerGenKind: SwaggerGenerator.Kind = SwaggerGenerator.Kind.INTERFACE,
    val swaggerGenKind: SwaggerGenerator.Kind = SwaggerGenerator.Kind.RAW,
    val fetch: suspend (path: String) -> ByteArray = { TODO("Must set fetch") }
) : BlockBuilder.Config() {
    val ktorVer = ktorVersion
    val developmentPackage = "io.ktor.server.${ktorEngine.id}"
    val developmentEngineFQ = "$developmentPackage.DevelopmentEngine"
    val kotlinVersion get() = ktorVersion.semKotlinVersion

    override fun transform(data: ByteArray, charset: Charset?): ByteArray {
        if (charset == null) return data
        val content = data.toString(charset)
        return if (ktorVersion.semVersion >= SemVer("1.0.0")) {
            content
                .replace("kotlin.coroutines.experimental.", "kotlin.coroutines.")
                .replace("kotlinx.coroutines.experimental.", "kotlinx.coroutines.")
        } else {
            content
        }.toByteArray(charset)
    }
}

typealias BuildInfoBlock = Block<BuildInfo>
