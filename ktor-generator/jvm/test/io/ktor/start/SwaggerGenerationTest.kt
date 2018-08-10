package io.ktor.start

import io.ktor.start.swagger.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import kotlin.test.*

class SwaggerGenerationTest {
    val swagger by lazy { SwaggerModel.parseJson(getResourceString("/swagger.json")!!) }
    val swaggerYaml by lazy { SwaggerModel.parseYaml(getResourceString("/swagger.yaml")!!) }
    val uspto by lazy { SwaggerModel.parseJson(getResourceString("/uspto.json")!!) }
    val petstore3 by lazy { SwaggerModel.parseJson(getResourceString("/small-petstore3.json")!!) }
    val buildInfo by lazy { BuildInfo(fetch = { getResourceBytes(it) ?: error("Couldn't find $it") }) }

    private fun getResourceBytes(name: String) =
        null
                ?: SwaggerGenerationTest::class.java.getResourceAsStream(name)?.readBytes()
                ?: SwaggerGenerationTest::class.java.getResourceAsStream("/$name")?.readBytes()
                ?: ClassLoader.getSystemClassLoader().getResourceAsStream(name)?.readBytes()
                ?: ClassLoader.getSystemClassLoader().getResourceAsStream("/$name")?.readBytes()

    private fun getResourceString(name: String) =
        getResourceBytes(name)?.toString(Charsets.UTF_8)

    @Test
    fun model2() = runBlocking {
        val model = swagger
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(buildInfo, swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test
    fun model2Yaml() = runBlocking {
        val model = swaggerYaml
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(buildInfo, swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test
    fun model3() = runBlocking {
        val model = uspto
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(buildInfo, swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test
    fun modelWithJsonSchemaRules() = runBlocking {
        val model = petstore3
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(buildInfo, swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test(expected = IllegalArgumentException::class)
    fun invalidJson() = runBlocking {
        SwaggerModel.parseJson(getResourceString("/empty.json")!!)
        Unit
    }

    @Test
    fun serverParsing() = runBlocking {
        // URL
        assertEquals("{scheme}://127.0.0.1/api", swagger.servers.first().url)
        assertEquals("{scheme}://developer.uspto.gov/ds-api", uspto.servers.first().url)

        // VARIABLES
        assertEquals(
            mapOf(
                "scheme" to SwaggerModel.ServerVariable("scheme", "https", "", listOf("https", "http"))
            ), swagger.servers.first().variables
        )
        assertEquals(
            mapOf(
                "scheme" to SwaggerModel.ServerVariable(
                    "scheme", "https", "The Data Set API is accessible via https and http", listOf("https", "http")
                )
            ),
            uspto.servers.first().variables
        )
        Unit
    }

    @Test
    fun detectLoginHeuristicsInApiHttp() = runBlocking {
        val model = swagger
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(buildInfo, swaggerGenerator)
        val str = results["api.http"].toString()
        assertTrue(str.contains("client.assert(typeof response.body.user.token !== \"undefined\", \"No token returned\");"), "but was $str")
    }
}