package io.ktor.start.features.client

import io.ktor.start.*
import io.ktor.start.features.server.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object HttpTimeoutClientFeature : ClientFeature(CoreClientEngine) {
    override val id = "ktor-client-http-timeout"
    override val title = "HttpTimeout feature HttpClient"
    override val description = "Supports request, connect and socket timeout for the Http Client"
    override val documentation = "https://ktor.io/clients/http-client/features/timeout.html"
    override val since = Versions.V131

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.features.*")
        append(CoreClientEngine.CLIENT_FEATURES) {
            +"install(HttpTimeout)" {
            }
        }
    }
}

object AuthBasicClientFeature : ClientFeature(CoreClientEngine) {
    override val id = "ktor-client-auth-jvm"
    override val title = "Auth feature HttpClient"
    override val description = "Supports authentication for the Http Client"
    override val documentation = "https://ktor.io/clients/http-client/features/auth.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.features.auth.*")
        append(CoreClientEngine.CLIENT_FEATURES) {
            +"install(Auth)" {
            }
        }
    }
}

/**
 * Json feature with Gson serializer generator.
 */
object GsonClientFeature : ClientFeature(CoreClientEngine, ApplicationKt) {
    override val id = "ktor-client-json-jvm"
    override val title = "Json serialization for HttpClient"
    override val description = "Supports JSON serialization for the Http Client"
    override val documentation = "https://ktor.io/clients/http-client/features/json-feature.html"
    override val repos = super.repos + listOf("https://kotlin.bintray.com/kotlinx")
    override val artifacts = listOf(
        "io.ktor:ktor-client-json-jvm:\$ktor_version",
        "io.ktor:ktor-client-gson:\$ktor_version"
    )

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.features.json.*")
        addImport("io.ktor.client.request.*")
        addImport("kotlinx.coroutines.experimental.*")
        addApplicationClasses {
            +"data class JsonSampleClass(val hello: String)"
        }
        append(CoreClientEngine.CLIENT_FEATURES) {
            "install(JsonFeature)" {
                +"serializer = GsonSerializer()"
            }
        }
        append(CoreClientEngine.CLIENT_USAGE) {
            "runBlocking" {
                +"// Sample for making a HTTP Client request"
                +"/*"
                "val message = client.post<JsonSampleClass>" {
                    +"url(\"http://127.0.0.1:8080/path/to/endpoint\")"
                    +"contentType(ContentType.Application.Json)"
                    +"body = JsonSampleClass(hello = \"world\")"
                }
                +"*/"
            }
        }
    }
}

object LoggingClientFeature : ClientFeature(CoreClientEngine) {
    override val id: String = "ktor-client-logging"
    override val title: String = "Logging feature"
    override val description: String = "Logging feature for debugging client calls"
    override val documentation: String = "https://ktor.io/clients/http-client/features/logging.html"

    override val since: KtorVersion = Versions.V101

    override val artifacts = listOf(
        "io.ktor:ktor-client-logging-jvm:\$ktor_version"
    )

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.features.logging.*")

        append(CoreClientEngine.CLIENT_FEATURES) {
            "install(Logging)" {
                +"level = LogLevel.HEADERS"
            }
        }
    }
}

object UserAgentClientFeature : ClientFeature(CoreClientEngine) {
    override val id: String = "ktor-client-user-agent"
    override val title: String = "User agent feature"
    override val description: String = "User agent header support feature"
    override val documentation: String = "https://ktor.io/clients/http-client/features/user-agent.html"

    override val since: KtorVersion = Versions.V101
    override val artifacts: List<String> get() = emptyList()

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.features.UserAgent")
        addImport("io.ktor.client.features.BrowserUserAgent")

        append(CoreClientEngine.CLIENT_FEATURES) {
            +"BrowserUserAgent() // install default browser-like user-agent"
            +"// install(UserAgent) { agent = \"some user agent\" }"
        }
    }
}

object WebSocketClientFeature : ClientFeature(CoreClientEngine, CioClientEngine, WebsocketsFeature) {
    override val id = "ktor-client-websockets"
    override val title = "WebSockets HttpClient support"
    override val description = "HttpClient feature to establish bidirectional communication using WebSockets"
    override val documentation = "https://ktor.io/clients/http-client/features/websockets.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.client.*")
        addImport("io.ktor.client.features.websocket.*")
        addImport("io.ktor.client.features.websocket.WebSockets")
        addImport("io.ktor.http.*")
        addImport("io.ktor.http.cio.websocket.*")
        addImport("io.ktor.http.cio.websocket.Frame")
        addImport("kotlinx.coroutines.experimental.*")
        addImport("kotlinx.coroutines.experimental.channels.*")

        fileText("src/WsClientApp.kt") {
            putImports(applicationKtImports)
            SEPARATOR {
                +"object WsClientApp" {
                    +"@JvmStatic"
                    +"fun main(args: Array<String>)" {
                        +"runBlocking" {
                            +"val client = HttpClient(CIO).config { install(WebSockets) }"

                            +"client.ws(method = HttpMethod.Get, host = \"127.0.0.1\", port = 8080, path = \"/myws/echo\")" {
                                // this: WebSocketSession"
                                +"send(Frame.Text(\"Hello World\"))"
                                +"for (message in incoming.map { it as? Frame.Text }.filterNotNull())" {
                                    +"println(\"Server said: \" + message.readText())"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
