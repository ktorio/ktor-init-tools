package io.ktor.start

import io.ktor.start.util.*

data class BuildInfo(
    val includeWrapper: Boolean,
    val projectType: ProjectType,
    val ktorVersion: SemVer,
    val artifactName: String,
    val artifactGroup: String,
    val artifactVersion: String,
    val ktorEngine: KtorEngine,
    val fetch: suspend (path: String) -> ByteArray
) {
    val ktorVer = ktorVersion
    val developmentPackage = "io.ktor.server.${ktorEngine.id}"
    val developmentEngineFQ = "$developmentPackage.DevelopmentEngine"
}

typealias BuildInfoBlock = Block<BuildInfo>
