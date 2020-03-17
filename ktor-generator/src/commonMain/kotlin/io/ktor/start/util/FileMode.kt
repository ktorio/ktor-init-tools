package io.ktor.start.util

data class FileMode(val mode: Int) {
    constructor(octalMode: String) : this(octalMode.toInt(8))

    val isUserExecutable: Boolean
        get() = ((mode ushr 6) and 1) != 0
}
