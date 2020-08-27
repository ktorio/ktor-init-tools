package io.ktor.generator.core.testing

import com.fizzed.rocker.runtime.OutputStreamOutput
import io.ktor.generator.core.*
import io.ktor.generator.core.templating.*
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.OutputStream
import kotlin.test.*


const val TESTING_FOLDER_PATH = "src/test/resources/generated"

/**
 * Checks that generator generates a file with path = [generatedFilePath] identical to the one in *testing* folder.
 *
 * In case the file [TESTING_FOLDER_PATH]/[relativeFilePath] does not exist in the *testing* folder it will be generated
 * by the provided [generator] and taken from the specified [generatedFilePath].
 *
 * Otherwise, the content of the generated file will be compared to the [TESTING_FOLDER_PATH]/[relativeFilePath] one
 * and assertion will be thrown if they differ. No new files will be generated in this case.
 * */
inline fun ensureFileContentIdentical(relativeFilePath: String, generator: Generator, generatedFilePath: String) {
    val path = "$TESTING_FOLDER_PATH/$relativeFilePath"
    val expectedFile = File(path)

    when {
        expectedFile.exists() -> {
            // The following code takes an output of the generator for one single file and redirects it to a string.
            // Other generated files get ignored.
            val generatedContent = streamToString { outputStream ->
                val toStringRenderer = singleFileRenderer(generatedFilePath, outputStream)
                generator.generate(toStringRenderer)
            }

            assertEquals(expectedFile.content(), generatedContent, message = "Generated file $relativeFilePath has unexpected content")
        }
        else -> {
            val toFileRenderer = singleFileRenderer(
                desiredPath = generatedFilePath,
                outputStream = fileOutputStream(path)
            )
            generator.generate(toFileRenderer)
        }
    }
}

fun streamToString(prepare: (OutputStream) -> Unit): String {
    val stream = ByteArrayOutputStream()
    prepare(stream)
    return String(stream.toByteArray())
}

fun File.content() = readLines().joinToString("\n")

/**
 * Creates a [TemplateRenderer] that renders one single file matching the [desiredPath] to the given [outputStream].
 * */
fun singleFileRenderer(desiredPath: String, outputStream: OutputStream): TemplateRenderer = { path, template ->
    if (path == desiredPath) {
        template.render { contentType, charsetName ->
            OutputStreamOutput(contentType, outputStream, charsetName)
        }
    }
}