package io.ktor.start

import io.ktor.start.swagger.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import kotlin.test.*

class SwaggerGenerationTest {
    val swagger by lazy { SwaggerModel.parse(Json.parse(getResourceString("/swagger.json")!!)) }
    val uspto by lazy { SwaggerModel.parse(Json.parse(getResourceString("/uspto.json")!!)) }

    private fun getResourceString(name: String) =
        SwaggerGenerationTest::class.java.getResourceAsStream(name)?.readBytes()?.toString(Charsets.UTF_8)

    @Test
    fun model2() = runBlocking {
        val model = swagger
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(BuildInfo(), swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test
    fun model3() = runBlocking {
        val model = uspto
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(BuildInfo(), swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test(expected = IllegalArgumentException::class)
    fun invalidJson() = runBlocking {
        SwaggerModel.parse(Json.parse(getResourceString("/empty.json")!!))
        Unit
    }

    @Test
    fun serverParsing() = runBlocking {
        assertEquals("{scheme}://127.0.0.1/api", swagger.servers.first().url)
        assertEquals("{scheme}://developer.uspto.gov/ds-api", uspto.servers.first().url)
        Unit
    }
}
