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

package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object BuildFiles : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
        when (info.projectType) {
            ProjectType.Gradle -> BuildFilesGradle.apply { render(info) }
            ProjectType.Maven -> BuildFilesMaven.apply { render(info) }
        }

        addMavenRepository(Repos.jcenter)
        addMavenRepository(Repos.ktor)
        addCompileDependency(MvnArtifact("org.jetbrains.kotlin:kotlin-stdlib-jdk8:\$kotlin_version"))

        // Temporal for Ktor 0.9.3 because of the metadata problem
        addCompileDependency(MvnArtifact("org.jetbrains.kotlinx:kotlinx-coroutines-core:\$kotlinx_coroutines_version"))
        addCompileDependency(MvnArtifact("org.jetbrains.kotlinx:kotlinx-coroutines-io:\$kotlinx_coroutines_version"))
        addCompileDependency(MvnArtifact("org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:\$kotlinx_coroutines_version"))

        addCompileDependency(MvnArtifact("io.ktor:ktor-server-${info.ktorEngine.id}:\$ktor_version"))
        addCompileDependency(MvnArtifact("ch.qos.logback:logback-classic:\$logback_version"))
        addTestDependency(MvnArtifact("io.ktor:ktor-server-tests:\$ktor_version"))
    }
}

internal val BlockBuilder.reposToInclude: LinkedHashSet<String> by Extra.PropertyThis { LinkedHashSet<String>() }
internal val BlockBuilder.compileDependencies: LinkedHashSet<MvnArtifact> by Extra.PropertyThis { LinkedHashSet<MvnArtifact>() }
internal val BlockBuilder.testDependencies: LinkedHashSet<MvnArtifact> by Extra.PropertyThis { LinkedHashSet<MvnArtifact>() }

fun BlockBuilder.addMavenRepository(repository: String) {
    reposToInclude += repository
}

fun BlockBuilder.addMavenRepository(repos: List<String>) {
    reposToInclude += repos
}

fun BlockBuilder.addCompileDependency(dependency: MvnArtifact) {
    compileDependencies += dependency
}

fun BlockBuilder.addTestDependency(dependency: MvnArtifact) {
    testDependencies += dependency
}
