package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object BuildFiles : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
        when (info.projectType) {
            "gradle" -> {
                fileText("build.gradle") {
                    "buildscript" {
                        +"ext.kotlin_version = '$KOTLIN_VERSION'"
                        +"ext.ktor_version = '${info.ktorVersion}'"
                        +"ext.logback_version = '1.2.1'"
                        +""
                        "repositories" {
                            +"jcenter()"
                        }
                        +""
                        "dependencies" {
                            +"classpath \"org.jetbrains.kotlin:kotlin-gradle-plugin:\$kotlin_version\""
                        }
                    }
                    +""
                    +"apply plugin: 'kotlin'"
                    +"apply plugin: 'application'"
                    +""
                    +"mainClassName = \"${info.developmentEngineFQ}\""
                    +""
                    "sourceSets" {
                        +"main.kotlin.srcDirs = ['src']"
                        +"main.resources.srcDirs = ['resources']"
                    }
                    +""
                    "repositories" {
                        for (repo in reposToInclude) {
                            when (repo) {
                                "jcenter" -> +"jcenter()"
                                else -> +"maven { url '$repo' }"
                            }
                        }
                    }
                    +""
                    "dependencies" {
                        linedeferred {
                            println("compileDependencies: $compileDependencies")
                            for (dep in compileDependencies) {
                                +"compile \"${dep.dependency}\""
                            }
                            for (dep in testDependencies) {
                                +"testCompile \"${dep.dependency}\""
                            }
                        }
                    }
                    +""
                    +"kotlin.experimental.coroutines = 'enable'"
                }
                if (info.includeWrapper) {
                    fileBinary("gradlew", mode = "755".toInt(8)) { info.fetch("gradle/gradlew") }
                    fileBinary("gradlew.bat") { info.fetch("gradle/gradlew.bat") }
                    fileBinary("gradle/wrapper/gradle-wrapper.jar") {
                        info.fetch("gradle/gradle/wrapper/gradle-wrapper.jar")
                    }
                    fileBinary("gradle/wrapper/gradle-wrapper.properties") {
                        info.fetch("gradle/gradle/wrapper/gradle-wrapper.properties")
                    }
                }
            }
            else -> {
                error("Unsupported build type ${info.projectType}")
            }
        }

        addMavenRepository("jcenter")
        addCompileDependency(MvnArtifact("org.jetbrains.kotlin:kotlin-stdlib-jdk8:\$kotlin_version"))
        addCompileDependency(MvnArtifact("io.ktor:ktor-server-${info.ktorEngine}:\$ktor_version"))
        addCompileDependency(MvnArtifact("ch.qos.logback:logback-classic:\$logback_version"))
        addTestDependency(MvnArtifact("io.ktor:ktor-server-tests:\$ktor_version"))
    }
}

private val BlockBuilder.reposToInclude: LinkedHashSet<String> by Extra.PropertyThis { LinkedHashSet<String>() }
private val BlockBuilder.compileDependencies: LinkedHashSet<MvnArtifact> by Extra.PropertyThis { LinkedHashSet<MvnArtifact>() }
private val BlockBuilder.testDependencies: LinkedHashSet<MvnArtifact> by Extra.PropertyThis { LinkedHashSet<MvnArtifact>() }

fun BlockBuilder.addMavenRepository(repository: String) {
    reposToInclude += repository
}

fun BlockBuilder.addCompileDependency(dependency: MvnArtifact) {
    compileDependencies += dependency
}

fun BlockBuilder.addTestDependency(dependency: MvnArtifact) {
    testDependencies += dependency
}
