package io.ktor.start.util

class SemVer(val version: String) : Comparable<SemVer> {
    private val parts1 = version.split('-', limit = 2)
    private val parts2 = parts1.first().split('.')

    val major = parts2.getOrNull(0)?.toIntOrNull() ?: 0
    val minor = parts2.getOrNull(1)?.toIntOrNull() ?: 0
    val patch = parts2.getOrNull(2)?.toIntOrNull() ?: 0
    val info = parts1.getOrNull(1) ?: ""

    override fun compareTo(other: SemVer): Int {
        return this.major.compareTo(other.major).takeIf { it != 0 }
                ?: this.minor.compareTo(other.minor).takeIf { it != 0 }
                ?: this.patch.compareTo(other.patch).takeIf { it != 0 }
                ?: this.info.compareTo(other.info).takeIf { it != 0 }
                ?: 0
    }

    override fun toString(): String = version
}