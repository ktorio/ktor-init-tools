package io.ktor.start.features.client

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*


abstract class ClientEngine(vararg deps: Block<BuildInfo>) : ClientFeature(*deps) {
    override val group = "HttpClient Engine"
}

object CoreClientEngine : ClientEngine(ApplicationKt) {
    override val id = "ktor-client-core"
    override val title = "HttpClient Engine"
    override val description = "Core of the HttpClient. Required for libraries."
    override val documentation = "https://ktor.io/clients/http-client.html"

    val CLIENT_USAGE = newSlot("CLIENT")
    val CLIENT_FEATURES = newSlot("CLIENT_FEATURES")

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.*")

        appendSeparated(ApplicationKt.MODULE_INSTALL) {
            linedeferred {
                "val client = HttpClient($clientEngine)" {
                    block(CLIENT_FEATURES)
                }
            }
            block(CLIENT_USAGE)
        }
    }
}

internal var BlockBuilder.clientEngine: String by Extra.PropertyThis { "" }


object ApacheClientEngine : ClientEngine(CoreClientEngine) {
    override val id: String = "ktor-client-apache"
    override val title = "Apache HttpClient Engine"
    override val description = "Engine for the Ktor HttpClient using Apache. Supports HTTP 1.x and HTTP 2.0."
    override val documentation = "https://ktor.io/clients/http-client.html#apache"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.engine.apache.*")
        clientEngine = "Apache"
    }
}

object CioClientEngine : ClientEngine(CoreClientEngine) {
    override val id: String = "ktor-client-cio"
    override val title = "CIO HttpClient Engine"
    override val description = "Engine for the Ktor HttpClient using CIO (Corroutine I/O). Only supports HTTP 1.x."
    override val documentation = "https://ktor.io/clients/http-client.html#cio"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.engine.cio.*")
        clientEngine = "CIO"
    }
}

object JettyClientEngine : ClientEngine(CoreClientEngine) {
    override val id: String = "ktor-client-jetty"
    override val title = "Jetty HttpClient Engine"
    override val description = "Engine for the Ktor HttpClient using Jetty. Only supports HTTP 2.x."
    override val documentation = "https://ktor.io/clients/http-client.html#jetty"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.engine.jetty.*")
        clientEngine = "Jetty"
    }
}

object MockClientEngine : ClientEngine(CoreClientEngine) {
    override val id: String = "ktor-client-mock"
    override val title = "Mock HttpClient Engine"
    override val description = "Engine for using in tests to simulate HTTP responses programmatically."
    override val documentation = "https://ktor.io/clients/http-client.html#mock"

    override val artifacts = listOf<String>()
    override val testArtifacts = listOf("io.ktor:ktor-client-mock:\$ktor_version")

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
    }
}
