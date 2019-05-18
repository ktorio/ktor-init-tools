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

internal class BuildFilesGradle(val kotlin: Boolean) : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
        val properties = Properties.getProperties(info)
        fileText("gradle.properties") {
            for ((key, value) in properties) {
                +"$key=$value"
            }
        }

        if (kotlin) {
            fileText("build.gradle.kts") {
                +"import org.jetbrains.kotlin.gradle.dsl.Coroutines"
                +"import org.jetbrains.kotlin.gradle.tasks.KotlinCompile"
                +""
                for (key in properties.keys) {
                    if (key.contains('.')) continue // kotlin.code.style for example
                    +"val $key: String by project"
                }
                +""
                +"plugins" {
                    +"application"
                    +"kotlin(\"jvm\") version \"${info.kotlinVersion}\""
                }
                +""
                +"group = \"${info.artifactGroup}\""
                +"version = \"${info.artifactVersion}\""
                +""
                +"application" {
                    +"mainClassName = \"${info.developmentEngineFQ}\""
                }
                +""
                +"repositories" {
                    for (repo in getAllReposToInclude(info)) {
                        +genMavenRepoKotlin(repo)
                    }
                }
                +""
                +"dependencies" {
                    linedeferred {
                        println("compileDependencies: $compileDependencies")
                        for (dep in compileDependencies) {
                            +"compile(\"${dep.dependency}\")"
                        }
                        for (dep in testDependencies - compileDependencies) {
                            +"testCompile(\"${dep.dependency}\")"
                        }
                    }
                }
                +""
                +"kotlin.sourceSets[\"main\"].kotlin.srcDirs(\"src\")"
                +"kotlin.sourceSets[\"test\"].kotlin.srcDirs(\"test\")"
                +""
                +"sourceSets[\"main\"].resources.srcDirs(\"resources\")"
                +"sourceSets[\"test\"].resources.srcDirs(\"testresources\")"
            }
            fileText("settings.gradle.kts") {
                +"rootProject.name = \"${info.artifactName}\""
            }
        } else {
            fileText("build.gradle") {
                "buildscript" {
                    "repositories" {
                        for (repo in setOf("jcenter") + info.ktorVersion.extraRepos.toSet()) {
                            +genMavenRepoGroovy(repo)
                        }
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
                +"group '${info.artifactGroup}'"
                +"version '${info.artifactVersion}'"

                +"mainClassName = \"${info.developmentEngineFQ}\""
                +""
                "sourceSets" {
                    +"main.kotlin.srcDirs = main.java.srcDirs = ['src']"
                    +"test.kotlin.srcDirs = test.java.srcDirs = ['test']"
                    +"main.resources.srcDirs = ['resources']"
                    +"test.resources.srcDirs = ['testresources']"
                }
                +""
                "repositories" {
                    for (repo in getAllReposToInclude(info)) {
                        +genMavenRepoGroovy(repo)
                    }
                }
                +""
                "dependencies" {
                    linedeferred {
                        println("compileDependencies: $compileDependencies")
                        for (dep in compileDependencies) {
                            +"compile \"${dep.dependency}\""
                        }
                        for (dep in testDependencies - compileDependencies) {
                            +"testCompile \"${dep.dependency}\""
                        }
                    }
                }
            }
            fileText("settings.gradle") {
                +"rootProject.name = \"${info.artifactName}\""
            }
        }
        if (info.includeWrapper) {
            fileBinary("gradlew", mode = FileMode("755")) { info.fetch("gradle/gradlew") }
            fileBinary("gradlew.bat") { info.fetch("gradle/gradlew.bat") }
            fileBinary("gradle/wrapper/gradle-wrapper.jar") {
                info.fetch("gradle/gradle/wrapper/gradle-wrapper.jar")
            }
            fileBinary("gradle/wrapper/gradle-wrapper.properties") {
                if (kotlin) {
                    info.fetch("gradle/gradle/wrapper/gradle-wrapper.properties.kotlin-dsl")
                } else {
                    info.fetch("gradle/gradle/wrapper/gradle-wrapper.properties")
                }
            }
        }
    }

    private fun genMavenRepoKotlin(repo: String): String = when (repo) {
        "local" -> "mavenLocal()"
        "jcenter" -> "jcenter()"
        else -> "maven { url = uri(\"$repo\") }"
    }

    private fun genMavenRepoGroovy(repo: String): String =  when (repo) {
        "local" -> "mavenLocal()"
        "jcenter" -> "jcenter()"
        else -> "maven { url '$repo' }"
    }
}
