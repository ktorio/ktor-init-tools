package io.ktor.start

import io.ktor.start.swagger.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import kotlin.test.*

class SwaggerGenerationTest {
    private fun getResourceString(name: String) =
        SwaggerGenerationTest::class.java.getResourceAsStream(name)?.readBytes()?.toString(Charsets.UTF_8)

    @Test
    fun name() = runBlocking {
        val untypedModel = Json.parse(getResourceString("/swagger.json")!!)
        val model = SwaggerModel.parse(untypedModel)
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(BuildInfo(), swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test
    fun name2() = runBlocking {
        val untypedModel = Json.parse(getResourceString("/uspto.json")!!)
        val model = SwaggerModel.parse(untypedModel)
        val swaggerGenerator = SwaggerGenerator(model)
        val results = generate(BuildInfo(), swaggerGenerator)
        for ((file, res) in results) {
            println("$file: $res")
        }
        Unit
    }

    @Test(expected = IllegalArgumentException::class)
    fun name3() = runBlocking {
        SwaggerModel.parse(Json.parse(getResourceString("/empty.json")!!))
        Unit
    }
}
