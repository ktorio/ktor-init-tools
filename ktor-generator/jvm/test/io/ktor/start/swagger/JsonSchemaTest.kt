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

    @Test
    fun length() {
        assertEquals("it.length >= 4", test<Int>(mapOf("minLength" to 4)))
        assertEquals("it.length <= 16", test<Int>(mapOf("maxLength" to 16)))
        assertEquals("it.length in 4..16", test<Int>(mapOf("minLength" to 4, "maxLength" to 16)))
    }

    private inline fun <reified T> test(map: Map<Any?, Any?>) = JsonRule.parse(map).toKotlin("it", T::class)
}
