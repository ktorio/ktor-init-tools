package io.ktor.start.features.client

import io.ktor.start.*
import io.ktor.start.util.*


abstract class ClientEngine(vararg deps: Block<BuildInfo>) : ClientFeature(*deps) {
    override val group = "HttpClient Engine"
}

object CoreClientEngine : ClientEngine() {
    override val id = "ktor-client-core"
    override val title = "HttpClient Engine"
    override val description = "Core of the HttpClient. Required for libraries."
    override val documentation = "https://ktor.io/clients/http-client.html"
}

object ApacheClientEngine : ClientEngine(CoreClientEngine) {
    override val id: String = "ktor-client-apache"
    override val title = "Apache HttpClient Engine"
    override val description = "Engine for the Ktor HttpClient using Apache. Supports HTTP 1.x and HTTP 2.0."
    override val documentation = "https://ktor.io/clients/http-client.html#apache"
}

object CioClientEngine : ClientEngine(CoreClientEngine) {
    override val id: String = "ktor-client-cio"
    override val title = "CIO HttpClient Engine"
    override val description = "Engine for the Ktor HttpClient using CIO (Corroutine I/O). Only supports HTTP 1.x."
    override val documentation = "https://ktor.io/clients/http-client.html#cio"
}

object JettyClientEngine : ClientEngine(CoreClientEngine) {
    override val id: String = "ktor-client-jetty"
    override val title = "Jetty HttpClient Engine"
    override val description = "Engine for the Ktor HttpClient using Jetty. Only supports HTTP 2.x."
    override val documentation = "https://ktor.io/clients/http-client.html#jetty"
}
