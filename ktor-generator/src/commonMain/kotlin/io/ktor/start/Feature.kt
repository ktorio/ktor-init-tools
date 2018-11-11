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

import io.ktor.start.project.*
import io.ktor.start.util.*

interface FileContainer {
    fun add(name: String, content: ByteArray, mode: FileMode = FileMode("644"))
}

fun FileContainer.add(name: String, content: String, charset: Charset = UTF8, mode: FileMode = FileMode("644")) {
    add(name, content.toByteArray(charset), mode = mode)
}

abstract class ServerFeature(vararg deps: Block<BuildInfo>) : Feature(*deps) {
}

abstract class ClientFeature(vararg deps: Block<BuildInfo>) : Feature(*deps) {
}

abstract class Feature(vararg deps: Block<BuildInfo>) : Block<BuildInfo>(*deps) {
    val featureDeps get() = blockDeps.filterIsInstance<Feature>()

    open val group: String = "Features"
    open val tags = listOf<String>()
    open val since: KtorVersion? = null

    open val repos: List<String> = Repos.ktor
    abstract val id: String
    open val artifacts: List<String> by lazy { listOf("io.ktor:$id:\$ktor_version") }
    open val testArtifacts: List<String> by lazy { listOf<String>() }
    abstract val title: String
    abstract val description: String
    open val documentation: String? = null

    final override fun BlockBuilder.render(info: BuildInfo) {
        for (repo in repos) {
            addMavenRepository(repo)
        }
        for (artifact in artifacts) {
            addCompileDependency(MvnArtifact(artifact))
        }
        for (artifact in artifacts) {
            addTestDependency(MvnArtifact(artifact))
        }
        if (info.generateFeatureSample) {
            renderFeature(info)
        }
    }

    open fun BlockBuilder.renderFeature(info: BuildInfo) {
    }

    override fun toString(): String = "Feature($id)"
}

class FeatureSet(features: Iterable<Feature>) {
    val direct = features.toSet()
    val all = direct.flatMap { it.getAllDependantBlocks().filterIsInstance<Feature>() }.toSet()
    val transitive = all - direct
}
