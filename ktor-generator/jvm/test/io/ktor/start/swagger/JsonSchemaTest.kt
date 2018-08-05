package io.ktor.start.swagger

import org.junit.Test
import kotlin.test.*

class JsonSchemaTest {
    @Test
    fun name() {
        assertEquals("it <= 100", test<Int>(mapOf("maximum" to 100)))
        assertEquals("it < 100", test<Int>(mapOf("maximum" to 100, "exclusiveMaximum" to true)))
        assertEquals("it in 10 .. 100", test<Int>(mapOf("minimum" to 10, "maximum" to 100)))
        assertEquals("it in 10 until 100", test<Int>(mapOf("minimum" to 10, "maximum" to 100, "exclusiveMaximum" to true)))
        assertEquals("it > 10 && it < 100", test<Int>(mapOf("minimum" to 10, "exclusiveMinimum" to true, "maximum" to 100, "exclusiveMaximum" to true)))
        assertEquals("it > 10 && it <= 100", test<Int>(mapOf("minimum" to 10, "exclusiveMinimum" to true, "maximum" to 100, "exclusiveMaximum" to false)))
    }

    private inline fun <reified T> test(map: Map<Any?, Any?>) = JsonRule.parse(map).toKotlin(T::class)
}
