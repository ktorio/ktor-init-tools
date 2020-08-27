package io.ktor.generator.core.testing.testcases

import io.ktor.generator.core.*

val GRADLE_PROJECT = Project(
    companyWebsite = "start.ktor.io",
    name = "Test Project",
    ktorVersion = "1.3.2",
    kotlinVersion = "1.4.0",
    buildSystem = BuildSystem.GRADLE,
    engine = Engine.NETTY
)

val GRADLE_KTS_PROJECT = Project(
    companyWebsite = "start.ktor.io",
    name = "Test Project",
    ktorVersion = "1.3.2",
    kotlinVersion = "1.4.0",
    buildSystem = BuildSystem.GRADLE_KTS,
    engine = Engine.NETTY
)

val MAVEN_PROJECT = Project(
    companyWebsite = "start.ktor.io",
    name = "Test Project",
    ktorVersion = "1.3.2",
    kotlinVersion = "1.4.0",
    buildSystem = BuildSystem.MAVEN,
    engine = Engine.NETTY
)