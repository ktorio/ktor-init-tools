package io.ktor.util

import io.ktor.start.util.*
import org.junit.*
import kotlin.test.*

class IndenterTest {
    @Test
    fun name() {
        val indenter = Indenter {
            +"HELLO"
            +""
            +"WORLD"
        }
        assertEquals("HELLO\n\nWORLD\n", indenter.toString())
    }

    @Test
    fun testEmptyLineOnce1() {
        val indenter = Indenter {
            +"HELLO"
            EMPTY_LINE_ONCE()
            +"WORLD"
        }
        assertEquals("HELLO\n\nWORLD\n", indenter.toString())
    }

    @Test
    fun testEmptyLineOnce2() {
        val indenter = Indenter {
            +"HELLO"
            EMPTY_LINE_ONCE()
            EMPTY_LINE_ONCE()
            +"WORLD"
        }
        assertEquals("HELLO\n\nWORLD\n", indenter.toString())
    }

    @Test
    fun testBlock() {
        val indenter = Indenter {
            "hello" {
                +"world"
            }
        }
        assertEquals("hello {\n\tworld\n}\n", indenter.toString())
    }
}