package io.ktor.generator.core

import java.io.File
import java.io.FileOutputStream

/**
 * Makes a name that can be put into a Maven *artifactId* field.
 *
 * Example: if a project name is "My Test Project" then the resulting maven name would be "my-test-project"
 * */
fun String.toMavenName() = this
    .split("[^A-Za-z0-9]|-".toRegex())
    .map { it.toLowerCase() }
    .filterNot { it.isEmpty() }
    .joinToString(separator = "-")
    .removeSurrounding("-")

/**
 * Creates a [FileOutputStream] to a file in given [path]. In case file or any of containing directories do not exist
 * they get created.
 *
 * Note: no exceptions are being checked. Please, don't use in case you are not 100% sure the file will be created
 * by your file system.
 * */
fun fileOutputStream(path: String): FileOutputStream {
    val outputFile = File(path)
    outputFile.parentFile.mkdirs()
    outputFile.createNewFile()
    return FileOutputStream(path)
}