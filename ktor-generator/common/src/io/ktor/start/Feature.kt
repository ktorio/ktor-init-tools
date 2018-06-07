package io.ktor.start

import io.ktor.start.project.*
import io.ktor.start.util.*

interface FileContainer {
    fun add(name: String, content: ByteArray, mode: Int = "644".toInt(8))
}

interface FileFetcher {
    suspend fun fetch(path: String): ByteArray
}

fun FileContainer.add(name: String, content: String, charset: Charset = UTF8, mode: Int = "644".toInt(8)) {
    add(name, content.toByteArray(charset), mode = mode)
}

abstract class Feature(vararg deps: Block<BuildInfo>) : Block<BuildInfo>(*deps) {
    val featureDeps get() = blockDeps.filterIsInstance<Feature>()

    abstract val repos: List<String>
    abstract val artifacts: List<String>
    abstract val id: String
    abstract val title: String
    abstract val description: String
    open val documentation: String? = null

    final override fun BlockBuilder.render(info: BuildInfo) {
        for (repo in repos) {
            addMavenRepository(repo)
        }
        for (artifact in artifacts) {
            addCompileDependency(MvnArtifact(artifact))
        }
        renderFeature(info)
    }

    open fun BlockBuilder.renderFeature(info: BuildInfo) {
    }
}
