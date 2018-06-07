package io.ktor.start.generate

import io.ktor.start.*
import io.ktor.start.util.*

object KtorProjectGenerator {
    suspend fun generate(info: BuildInfo, fetchFile: suspend (path: String) -> ByteArray, files: FileContainer) = info.apply {
        // BUILDSCRIPT
        when (projectType) {
            "maven" -> files.add("$artifactName/pom.xml", indenter { buildPomXml(info.copy()) })
            "gradle" -> {
                files.add("$artifactName/build.gradle", indenter { buildBuildGradle(info.copy()) })
                if (includeWrapper) {
                    files.add("$artifactName/gradlew", fetchFile("gradle/gradlew"), mode = "755".toInt(8))
                    files.add("$artifactName/gradlew.bat", fetchFile("gradle/gradlew.bat"))
                    files.add(
                        "$artifactName/gradle/wrapper/gradle-wrapper.jar",
                        fetchFile("gradle/gradle/wrapper/gradle-wrapper.jar")
                    )
                    files.add(
                        "$artifactName/gradle/wrapper/gradle-wrapper.properties",
                        fetchFile("gradle/gradle/wrapper/gradle-wrapper.properties")
                    )
                }
            }
            else -> throw RuntimeException("Unknown project type $projectType")
        }

        files.add("$artifactName/resources/application.conf", indenter { buildApplicationConf(info.copy()) })

        for (feat in info.featuresToInclude) {
            feat.addFiles(info, object : FileContainer {
                override fun add(name: String, content: ByteArray, mode: Int) {
                    files.add(name, content, mode = mode)
                }
            })
        }

        files.add("$artifactName/src/Application.kt", indenter { buildApplicationKt(info.copy()) })
    }
}

fun Indenter.buildPomXml(info: BuildInfo) = info.apply {
    TODO("Unsupported Maven for now")
}

const val DOLLAR = '$'

fun Indenter.buildBuildGradle(info: BuildInfo) = info.apply {
    "buildscript" {
        +"ext.kotlin_version = '$KOTLIN_VERSION'"
        +"ext.ktor_version = '$ktorVersion'"
        +"ext.logback_version = '1.2.1'"
        +""
        "repositories" {
            +"jcenter()"
        }
        +""
        "dependencies" {
            +"classpath \"org.jetbrains.kotlin:kotlin-gradle-plugin:${DOLLAR}kotlin_version\""
        }
    }
    +""
    +"apply plugin: 'kotlin'"
    +"apply plugin: 'application'"
    +""
    +"mainClassName = \"$developmentEngineFQ\""
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
        +"compile \"org.jetbrains.kotlin:kotlin-stdlib-jdk8:${DOLLAR}kotlin_version\""
        +"compile \"io.ktor:ktor-server-$ktorEngine:${DOLLAR}ktor_version\""
        +"compile \"ch.qos.logback:logback-classic:${DOLLAR}logback_version\""
        +""
        for (artifact in dependenciesToInclude.flatMap { it.artifacts }.distinct()) {
            +"compile \"$artifact\""
        }
        +""
        +"testCompile \"io.ktor:ktor-server-tests:${DOLLAR}ktor_version\""
    }
    +""
    +"kotlin.experimental.coroutines = 'enable'"
}

fun Indenter.buildApplicationConf(info: BuildInfo) = info.apply {
    "ktor" {
        "deployment" {
            +"port = 8080"
            +"port = \${?PORT}"
        }

        "application" {
            +"modules = [ $artifactGroup.ApplicationKt.main ]"
        }
    }
}


fun Indenter.buildApplicationKt(info: BuildInfo) = info.apply {
    val imports = LinkedHashSet<String>()

    +"package $artifactGroup"
    +""
    imports += "io.ktor.application.*"
    imports += "io.ktor.response.*"
    imports += "io.ktor.routing.*"
    imports += "io.ktor.http.*"
    for (feat in info.featuresToInclude) {
        imports += feat.imports(info)
    }
    for (p in imports) {
        +"import $p"
    }
    +""
    if (ktorVer >= Versions.V092) {
        +"fun main(args: Array<String>): Unit = $developmentEngineFQ.main(args)"
    } else {
        +"fun main(args: Array<String>): Unit = $developmentPackage.main(args)"
    }
    +""

    for (feat in info.featuresToInclude) {
        feat.apply { classes(info) }
    }

    "fun Application.main()" {
        for (feat in info.featuresToInclude) {
            feat.apply { installFeature(info) }
        }

        "routing" {
            "get(\"/\")" {
                +"call.respondText(\"HELLO WORLD!\")"
            }
            for (feat in info.featuresToInclude) {
                feat.apply { routing(info) }
            }
        }
    }

    for (feat in info.featuresToInclude) {
        feat.apply { extensions(info) }
    }
}
