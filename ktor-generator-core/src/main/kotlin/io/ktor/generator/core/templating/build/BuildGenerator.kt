package io.ktor.generator.core.templating.build

import io.ktor.generator.core.*
import io.ktor.generator.core.features.*
import io.ktor.generator.core.templating.*

fun buildGenerator(project: Project, features: Features) = makeSimpleGenerator(project, features) {
    val buildGradle = rockerTemplate("build/templates/gradle/buildGradle.rocker.raw")
    val settingsGradle = rockerTemplate("build/templates/gradle/settingsGradle.rocker.raw")
    val gradleProperties = rockerTemplate("build/templates/gradle/gradleProperties.rocker.raw")

    val buildGradleKts = rockerTemplate("build/templates/gradleKts/buildGradleKts.rocker.raw")
    val settingsGradleKts = rockerTemplate("build/templates/gradleKts/settingsGradleKts.rocker.raw")

    val pomXml = rockerTemplate("build/templates/maven/pomXml.rocker.raw")


    when (project.buildSystem) {
        BuildSystem.GRADLE -> {
            generate(path = "build.gradle", template = buildGradle)
            generate(path = "settings.gradle", template = settingsGradle)
            generate(path = "gradle.properties", template = gradleProperties)
        }
        BuildSystem.GRADLE_KTS -> {
            generate(path = "build.gradle.kts", template = buildGradleKts)
            generate(path = "settings.gradle.kts", template = settingsGradleKts)
            generate(path = "gradle.properties", template = gradleProperties)
        }
        BuildSystem.MAVEN -> {
            generate(path = "pom.xml", template = pomXml)
        }
    }
}