package io.ktor.start.util

data class MvnArtifact(val dependency: String) {
    val parts = dependency.split(":")
    val group get() = parts.getOrNull(0)
    val name get() = parts.getOrNull(1)
    val version get() = parts.getOrNull(2)
}
