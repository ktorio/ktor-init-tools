package io.ktor.start.project

import io.ktor.start.*

object Properties {
    fun getProperties(info: BuildInfo): Map<String, String> {
        return HashMap<String, String>().apply {
            this["kotlin.code.style"] = "official"
            this["kotlin_version"] = KOTLIN_VERSION
            this["ktor_version"] = info.ktorVersion.toString()
            this["logback_version"] = "1.2.1"

            if (info.ktorVer == Versions.V093) {
                // Temporal for Ktor 0.9.3 because of the metadata problem
                this["kotlinx_coroutines_version"] = KOTLINX_COROUTINES_VERSION_FOR_KTOR_V093
            }
        }
    }
}