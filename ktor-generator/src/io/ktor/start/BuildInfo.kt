package io.ktor.start

import io.ktor.start.util.*

data class BuildInfo(
    val ktorVersion: String,
    val developmentPackage: String,
    val artifactName: String,
    val artifactGroup: String,
    val developmentEngineFQ: String,
    val reposToInclude: Set<String>,
    val dependenciesToInclude: Set<Feature>,
    val ktorEngine: String
) {
    val featuresToInclude = dependenciesToInclude
    val ktorVer = SemVer(ktorVersion)
}
