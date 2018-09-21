package io.ktor.start

import io.ktor.start.util.*
import java.io.*

fun Map<String, FileResult>.writeToFolder(folder: File) {
    for (fileResult in this.values) {
        val file = File(folder, fileResult.name)
        file.parentFile.mkdirs()
        file.writeBytes(fileResult.data)
    }
}
