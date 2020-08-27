package io.ktor.generator.core.templating

import com.fizzed.rocker.BindableRockerModel
import com.fizzed.rocker.Rocker
import com.fizzed.rocker.runtime.OutputStreamOutput
import io.ktor.generator.core.*
import io.ktor.generator.core.features.*
import java.io.File
import java.io.FileOutputStream
import java.nio.file.Path

/**
 * Keeps configured templates for future code generation.
 *
 * [GeneratorContext] is also needed for dsl-like creation of the [Generator] (see [makeSimpleGenerator]).
 * */
class GeneratorContext(project: Project, features: Features) {
    private data class RockerTemplate(val path: String, val model: BindableRockerModel)

    private val templates = mutableListOf<RockerTemplate>()

    val arguments = hashMapOf(
        "project" to project,
        "features" to features
    )

    fun generate(path: String, template: BindableRockerModel, bind: Map<String, Any?> = emptyMap()) {
        templates += RockerTemplate(path, template.relaxedBind(arguments + bind))
    }

    fun renderTemplates(renderer: TemplateRenderer) {
        templates.forEach { (path, model) -> renderer(path, model) }
    }
}

/**
 * Functional interface describing how templates should be rendered to specified file paths.
 * */
typealias TemplateRenderer = (path: String, template: BindableRockerModel) -> Unit

/**
 * Returns a new renderer based on [this] that changes given file paths using given [map] function.
 * */
fun TemplateRenderer.withPathRemapping(map: (path: String) -> String): TemplateRenderer = { path, template ->
    this@withPathRemapping(map(path), template)
}

/**
 * Generates project using configured templates.
 * */
class Generator(private val contexts: List<GeneratorContext>) {
    fun generate(renderer: TemplateRenderer) {
        contexts.forEach { ctx -> ctx.renderTemplates(renderer) }
    }

    /**
     * Combine multiple generators into a single one.
     * */
    operator fun plus(other: Generator) = Generator(contexts + other.contexts)

    companion object {
        /**
         * Default [TemplateRenderer] that writes generated code right to specified files.
         * */
        val DEFAULT_RENDERER: TemplateRenderer = { path, model ->
            model.render { contentType, charsetName ->
                OutputStreamOutput(contentType, fileOutputStream(path), charsetName)
            }
        }
    }
}

/**
 * Dsl-like function that allows building project file generators with the [GeneratorContext.generate] called multiple
 * times on the receiver.
 *
 * @param project describes the basic project configuration such as name, kotlin/ktor versions, package, build system, etc.
 * @param features represents a list of Ktor features being added to the project.
 * */
fun makeSimpleGenerator(project: Project, features: Features, callback: GeneratorContext.() -> Unit): Generator {
    val ctx = GeneratorContext(project, features)
    ctx.callback()
    return Generator(listOf(ctx))
}

/**
 * Creates a [BindableRockerModel] from a relative path to the *templating* folder.
 *
 * */
fun rockerTemplate(relativePath: String) =
    Rocker.template("$relativePath")