package io.ktor.start

import io.ktor.start.features.*
import io.ktor.start.features.both.*
import io.ktor.start.features.client.*
import io.ktor.start.features.server.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import java.io.*
import kotlin.test.*

class GenerationTest {
    val info = BuildInfo(
        includeWrapper = false,
        projectType = ProjectType.Gradle,
        ktorVersion = Versions.V093,
        artifactName = "example1",
        artifactGroup = "com.example",
        artifactVersion = "0.1.0-SNAPSHOT",
        ktorEngine = KtorEngine.Netty,
        fetch = { name ->
            val loaders = listOf(RoutingFeature::class.java.classLoader, GenerationTest::class.java.classLoader, ClassLoader.getSystemClassLoader())
            val url = loaders.mapNotNull { it.getResource(name) ?: it.getResource("/$name") }.firstOrNull()
            val file = File(File("../common/resources"), name)
            url?.readBytes() ?: file.takeIf { it.exists() }?.readBytes() ?: error("Can't find resource '$name'")
        }
    )

    @Test
    fun testSmoke() = suspendTest {
        val files = generate(info, RoutingFeature)
        assertEquals(
            setOf("build.gradle", "settings.gradle", "resources/logback.xml", ".gitignore", "resources/application.conf", "src/application.kt"),
            files.keys
        )
        assertEquals(
            """
                package com.example

                import io.ktor.application.*
                import io.ktor.response.*
                import io.ktor.request.*
                import io.ktor.routing.*
                import io.ktor.http.*

                fun main(args: Array<String>): Unit = io.ktor.server.netty.DevelopmentEngine.main(args)

                fun Application.module() {
                    routing {
                        get("/") {
                            call.respondText("HELLO WORLD!", contentType = ContentType.Text.Plain)
                        }
                    }
                }


            """.trimIndent(),
            files["src/application.kt"]!!.string
        )
    }

    @Test
    fun testSmoke2() = suspendTest {
        generate(info, ALL_FEATURES) // Check that no exception is thrown
    }

    @Test
    fun testClient() = suspendTest {
        val files = generate(info, ApacheClientEngine, JsonClientFeature)
        assertEquals(
            """
                package com.example

                import io.ktor.application.*
                import io.ktor.response.*
                import io.ktor.request.*
                import io.ktor.client.*
                import io.ktor.client.engine.apache.*
                import io.ktor.client.features.json.*
                import io.ktor.client.request.*
                import java.net.URL

                fun main(args: Array<String>): Unit = io.ktor.server.netty.DevelopmentEngine.main(args)

                fun Application.module() {
                    val client = HttpClient(Apache) {
                        install(JsonFeature) {
                            serializer = GsonSerializer()
                        }
                    }
                    runBlocking {
                        val message = client.post<JsonSampleClass> {
                            url(URL("http://127.0.0.1:8080/path/to/endpoint"))
                            contentType(ContentType.Application.Json)
                            body = JsonSampleClass(hello = "world")
                        }
                    }

                }

                data class JsonSampleClass(val hello: String)


            """.trimIndent(),
            files["src/application.kt"]!!.string.replace("\t", " ".repeat(4))
        )
    }

    @Test
    fun testSockets() = suspendTest {
        val str = generate(info, RawSocketsTlsFeature)["src/EchoApp.kt"]!!.string
        assertTrue { str.contains("val serverSocket = aSocket(selectorManager).tcp().bind(port = DefaultPort)") }
    }
}

fun suspendTest(callback: suspend () -> Unit) {
    runBlocking { callback() }
}
