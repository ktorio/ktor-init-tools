package io.ktor.start.intellij

import io.ktor.start.*

class KtorModuleConfig {
    var artifactGroup = "com.example"
    var artifactId = "example"
    var artifactVersion = "0.0.1"
    var projectType = ProjectType.Gradle
    var featuresToInstall = listOf<Feature>()
    var ktorVersion = Versions.LAST
    var wrapper = true
    var engine = KtorEngine.Netty
}
