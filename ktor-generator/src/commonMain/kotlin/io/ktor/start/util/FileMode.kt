package io.ktor.start.util

data class FileMode(val mode: Int) {
    constructor(octalMode: String) : this(octalMode.toInt(8))
}
