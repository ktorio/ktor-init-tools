package io.ktor.start

import io.ktor.start.features.ALL_FEATURES
import io.ktor.start.features.both.RawSocketsTlsFeature
import io.ktor.start.features.client.ApacheClientEngine
import io.ktor.start.features.client.JsonClientFeature
import io.ktor.start.features.server.RoutingFeature
import io.ktor.start.project.ApplicationKt
import io.ktor.start.util.generate
import kotlinx.coroutines.runBlocking
import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class GenerationTest {
    val info = BuildInfo(
        includeWrapper = false,
        projectType = ProjectType.Gradle,
        ktorVersion = Versions.LAST,
        artifactName = "example1",
        artifactGroup = "com.example",
        artifactVersion = "0.1.0-SNAPSHOT",
        ktorEngine = KtorEngine.Netty,
        fetch = { name ->
            val loaders = listOf(
                RoutingFeature::class.java.classLoader,
                GenerationTest::class.java.classLoader,
                ClassLoader.getSystemClassLoader()
            )
            val url = loaders.mapNotNull { it.getResource(name) ?: it.getResource("/$name") }.firstOrNull()
            val file = File(File("../common/resources"), name)
            url?.readBytes() ?: file.takeIf { it.exists() }?.readBytes() ?: error("Can't find resource '$name'")
        }
    )

    @Test
    fun testSmoke() = suspendTest {
        val files = generate(info, RoutingFeature)
        assertEquals(
            listOf(
                ".gitignore",
                "build.gradle",
                "gradle.properties",
                "resources/application.conf",
                "resources/logback.xml",
                "settings.gradle",
                "src/Application.kt",
                "test/ApplicationTest.kt"
            ),
            files.keys.toList().sorted()
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

                @Suppress("unused") // Referenced in application.conf
                @kotlin.jvm.JvmOverloads
                fun Application.module(testing: Boolean = false) {
                    routing {
                        get("/") {
                            call.respondText("HELLO WORLD!", contentType = ContentType.Text.Plain)
                        }
                    }
                }


            """.trimIndent(),
            files[ApplicationKt.ApplicationKtFile]!!.string
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
                import kotlinx.coroutines.experimental.*

                fun main(args: Array<String>): Unit = io.ktor.server.netty.DevelopmentEngine.main(args)

                @Suppress("unused") // Referenced in application.conf
                @kotlin.jvm.JvmOverloads
                fun Application.module(testing: Boolean = false) {
                    val client = HttpClient(Apache) {
                        install(JsonFeature) {
                            serializer = GsonSerializer()
                        }
                    }
                    runBlocking {
                        // Sample for making a HTTP Client request
                        /*
                        val message = client.post<JsonSampleClass> {
                            url(URL("http://127.0.0.1:8080/path/to/endpoint"))
                            contentType(ContentType.Application.Json)
                            body = JsonSampleClass(hello = "world")
                        }
                        */
                    }

                }

                data class JsonSampleClass(val hello: String)


            """.trimIndent(),
            files[ApplicationKt.ApplicationKtFile]!!.string.replace("\t", " ".repeat(4))
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
