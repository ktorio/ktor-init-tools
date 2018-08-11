package io.ktor.start.swagger

data class ContentType(val str: String) {
    companion object {
        val ApplicationJson = ContentType("application/json")
        val ApplicationXWwwFormUrlencoded = ContentType("application/x-www-form-urlencoded")
    }

    override fun toString(): String = str
}