package io.ktor.start

import io.ktor.start.util.*
import java.io.*

fun Map<String, FileResult>.writeToFolder(folder: File, print: Boolean = false) {
    for (fileResult in this.values) {
        if (print && fileResult.charset != null) {
            println("${fileResult.name}:")
            println(fileResult.string)
            println()
        }
        val file = File(folder, fileResult.name)
        file.parentFile.mkdirs()
        file.writeBytes(fileResult.data)
    }
}
