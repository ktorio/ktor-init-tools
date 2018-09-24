package io.ktor.util

import io.ktor.start.util.*
import org.junit.Test
import kotlin.test.*

class IdTest {
    @Test
    fun name() {
        assertEquals("helloWorld", ID.normalizeMethodName("hello-world"))
        assertEquals("pathToHello", ID.normalizeMethodName("/path/to/{hello}"))
    }
}