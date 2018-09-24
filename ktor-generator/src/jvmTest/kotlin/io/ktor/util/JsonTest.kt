package io.ktor.util

import io.ktor.start.util.*
import org.junit.Test
import kotlin.test.*

class JsonTest {
    @Test
    fun testPrettyEmpty() {
        assertEquals("{}", Json.encodePrettyUntyped(mapOf<Any?, Any?>()).trim())
        assertEquals("[]", Json.encodePrettyUntyped(listOf<Any?>()).trim())
        assertEquals("{\n\t\"hello\": []\n}", Json.encodePrettyUntyped(mapOf("hello" to listOf<String>())).trim())
    }
}