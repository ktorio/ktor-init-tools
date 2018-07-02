package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object GitIgnoreFile : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
        fileText(".gitignore") {
            +"/.gradle"
            +"/.idea"
            +"/out"
            +"/build"
            +"*.iml"
            +"*.ipr"
            +"*.iws"
        }
    }
}