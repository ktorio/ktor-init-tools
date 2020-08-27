package io.ktor.generator.core

import io.ktor.generator.core.features.*

/**
 * Represents Ktor project with selected configuration.
 *
 * */
class Project(
    val companyWebsite: String,
    val name: String,
    val ktorVersion: String,
    val kotlinVersion: String,
    val buildSystem: BuildSystem,
    val engine: Engine
) {

    /**
     * [groupName] is calculated automatically by reversing a company website.
     *
     * Example: if your [companyWebsite] is "jetbrains.com" then [groupName] is set to "com.jetbrains"
     * */
    val groupName = companyWebsite.split(".").reversed().joinToString(".")

    /**
     * [artifactId] is a project name in a Gradle/Maven compatible format (see [toMavenName]).
     * */
    val artifactId = name.toMavenName()

    val mainClassName: String
        get() = "io.ktor.server.${engine.engineName}.EngineMain"
}

enum class BuildSystem {
    GRADLE, GRADLE_KTS, MAVEN;
}

enum class Engine(val engineName: String) {
    NETTY("netty"), JETTY("jetty"), CIO("cio"), TOMCAT("tomcat")
}