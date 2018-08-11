package io.ktor.start.swagger

class ContentType(val str: String) {
    companion object {
        val ApplicationJson = ContentType("application/json")
    }

    override fun toString(): String = str
}