import org.jetbrains.kotlin.gradle.dsl.Coroutines
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

val ktor_version: String by project
val kotlin_version: String by project

plugins {
    application
    kotlin("jvm") version "1.4.0"
}

group = "io.ktor.start"
version = "0.0.1"
application {
    mainClassName = "io.ktor.server.netty.EngineMain"
}

repositories {
    mavenLocal()
    jcenter()
    maven { url = uri("https://kotlin.bintray.com/ktor") }
}

dependencies {
    implementation("io.ktor:ktor-server-netty:$ktor_version)")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version)")
    implementation("ch.qos.logback:logback-classic:1.2.1)")
    implementation("io.ktor:ktor-server-core:$ktor_version)")
    testImplementation "io.ktor:ktor-server-tests:$ktor_version"
}

kotlin.sourceSets["main"].kotlin.srcDirs("src/main/kotlin")
kotlin.sourceSets["test"].kotlin.srcDirs("src/test/kotlin")

sourceSets["main"].resources.srcDirs("resources/main")
sourceSets["test"].resources.srcDirs("resources/test")