package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object BuildFiles : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
        when (info.projectType) {
            ProjectType.Gradle -> BuildFilesGradle.apply { render(info) }
            ProjectType.Maven -> BuildFilesMaven.apply { render(info) }
            else -> error("Unsupported build type ${info.projectType}")
        }

        addMavenRepository(Repos.jcenter)
        addMavenRepository(Repos.ktor)
        addCompileDependency(MvnArtifact("org.jetbrains.kotlin:kotlin-stdlib-jdk8:\$kotlin_version"))
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
