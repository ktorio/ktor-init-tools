package io.ktor.start

import io.ktor.start.features.client.*
import io.ktor.start.features.server.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import org.junit.*
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
        fetch = {
            val url =
                GenerationTest::class.java.getResourceAsStream(it)
                        ?: GenerationTest::class.java.getResourceAsStream("/$it")
                        ?: ClassLoader.getSystemClassLoader().getResourceAsStream("/$it")
                        ?: ClassLoader.getSystemClassLoader().getResourceAsStream(it)
            url?.readBytes() ?: error("Can't find resource '$it'")
        }
    )

    @Test
    fun testSmoke() = suspendTest {
        val files = generate(info, RoutingFeature)
        assertEquals(setOf("build.gradle", "settings.gradle", "resources/application.conf", "src/application.kt"), files.keys)
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
            files["src/application.kt"]!!.string.replace("\t", " ".repeat(4))
        )
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
                import io.ktor.client.engine.apache.*
                import io.ktor.client.features.json.*

                fun main(args: Array<String>): Unit = io.ktor.server.netty.DevelopmentEngine.main(args)

                fun Application.module() {
                    val client = HttpClient(Apache) {
                        install(JsonFeature) {
                            serializer = GsonSerializer()
                        }
                    }

                }


            """.trimIndent(),
            files["src/application.kt"]!!.string.replace("\t", " ".repeat(4))
        )
    }
}

fun suspendTest(callback: suspend () -> Unit) {
    runBlocking { callback() }
}