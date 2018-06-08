package io.ktor.start

enum class KtorEngine(val id: String) {
    Netty("netty"),
    Jetty("jetty"),
    Tomcat("tomcat"),
    CIO("cio");

    companion object {
        val BY_ID = values().associateBy { it.id }
        val BY_NAME = values().associateBy { it.name }
        val BY = BY_ID + BY_NAME

        operator fun invoke(name: String) = BY[name] ?: error("Unknown engine $name")
    }
}