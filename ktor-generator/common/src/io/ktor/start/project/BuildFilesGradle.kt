package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

internal object BuildFilesGradle : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
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
            +"group '${info.artifactName}'"
            +"version '${info.artifactVersion}'"

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
        fileText("settings.gradle") {
            +"rootProject.name = '${info.artifactName}'"
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
}
