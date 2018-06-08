package io.ktor.start

enum class ProjectType(val id: String) {
    Gradle("gradle"),
    Maven("maven");

    companion object {
        val BY_ID = values().associateBy { it.id }
        val BY_NAME = values().associateBy { it.name }
        val BY = BY_ID + BY_NAME

        operator fun invoke(name: String): ProjectType = BY[name] ?: error("Unknown project type $name")
    }
}