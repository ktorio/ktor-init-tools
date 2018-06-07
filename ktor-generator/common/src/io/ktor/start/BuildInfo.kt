package io.ktor.start

import io.ktor.start.util.*

data class BuildInfo(
    val includeWrapper: Boolean,
    val projectType: String,
    val ktorVersion: String,
    val artifactName: String,
    val artifactGroup: String,
    val ktorEngine: String,
    val fetch: suspend (path: String) -> ByteArray
) {
    val ktorVer = SemVer(ktorVersion)
    val developmentPackage = "io.ktor.server.$ktorEngine"
    val developmentEngineFQ = "$developmentPackage.DevelopmentEngine"
}

typealias BuildInfoBlock = Block<BuildInfo>
