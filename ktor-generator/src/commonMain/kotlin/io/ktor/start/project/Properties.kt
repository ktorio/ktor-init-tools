package io.ktor.start.project

import io.ktor.start.*

object Properties {
    fun getProperties(info: BuildInfo): Map<String, String> {
        return HashMap<String, String>().apply {
            this["kotlin.code.style"] = "official"
            this["kotlin_version"] = info.kotlinVersion.toString()
            this["ktor_version"] = info.ktorVersion.toString()
            this["logback_version"] = "1.2.1"
        }
    }
}