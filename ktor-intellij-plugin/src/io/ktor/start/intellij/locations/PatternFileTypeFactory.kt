package io.ktor.start.intellij.locations

import com.intellij.openapi.fileTypes.*

class PatternFileTypeFactory : FileTypeFactory() {
    override fun createFileTypes(consumer: FileTypeConsumer) {
        consumer.consume(PatternFileType)
    }
}