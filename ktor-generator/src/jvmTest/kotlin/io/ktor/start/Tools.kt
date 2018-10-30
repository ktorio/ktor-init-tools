package io.ktor.start

import java.io.File
import java.nio.charset.Charset

fun File.updateTextIfExists(charset: Charset = Charsets.UTF_8, update: (String) -> String) {
    if (exists()) updateText(charset, update)
}

fun File.updateText(charset: Charset = Charsets.UTF_8, update: (String) -> String) {
    val oldContent = this.readText(charset)
    val newContent = update(oldContent)
    this.writeText(newContent, charset)
}

operator fun File.get(child: String) = File(this, child)
