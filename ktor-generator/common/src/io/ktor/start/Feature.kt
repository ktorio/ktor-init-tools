package io.ktor.start

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

abstract class Feature {
    abstract val repos: List<String>
    abstract val artifacts: List<String>
    abstract val id: String
    abstract val title: String
    abstract val description: String
    open val documentation: String? = null

    open fun imports(info: BuildInfo): List<String> = listOf()
    open fun Indenter.hoconKtorSection(info: BuildInfo): Unit = Unit
    open fun Indenter.hoconKtorDeploymentSection(info: BuildInfo): Unit = Unit
    open fun Indenter.classes(info: BuildInfo): Unit = Unit
    open fun Indenter.installFeature(info: BuildInfo): Unit = Unit
    open fun Indenter.routing(info: BuildInfo): Unit = Unit
    open fun Indenter.extensions(info: BuildInfo): Unit = Unit
    open suspend fun addFiles(info: BuildInfo, files: FileContainer, fetcher: FileFetcher): Unit = Unit
}
