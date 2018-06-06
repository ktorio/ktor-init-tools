package io.ktor.start

import io.ktor.start.util.*

interface FileContainer {
    fun add(name: String, content: ByteArray, mode: Int = "644".toInt(8))
}

fun FileContainer.add(name: String, content: String, charset: Charset = UTF8, mode: Int = "644".toInt(8)) {
    add(name, content.toByteArray(charset), mode = mode)
}

abstract class Feature : Dependency {
    //abstract override val repos: List<String>
    //abstract override val artifacts: List<String>
    //abstract override val id: String
    //abstract override val title: String
    //abstract override val description: String
    override val documentation: String? = null

    open fun imports(info: BuildInfo): List<String> = listOf()
    open fun Indenter.classes(info: BuildInfo): Unit = Unit
    open fun Indenter.installFeature(info: BuildInfo): Unit = Unit
    open fun Indenter.routing(info: BuildInfo): Unit = Unit
    open fun Indenter.extensions(info: BuildInfo): Unit = Unit
    open fun addFiles(info: BuildInfo, files: FileContainer): Unit = Unit
}
