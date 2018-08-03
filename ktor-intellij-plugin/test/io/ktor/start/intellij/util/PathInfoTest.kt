package io.ktor.start.intellij.util

import org.junit.*
import kotlin.test.*

class PathInfoTest {
    @Test
    fun checks() {
        PathInfo("").let { info ->
            assertEquals(null, info.parent)
            assertEquals("", info.name)
            assertEquals("", info.path)
        }

        PathInfo("/").let { info ->
            assertEquals("", info.parent)
            assertEquals("", info.name)
            assertEquals("/", info.path)
        }

        PathInfo("test").let { info ->
            assertEquals(null, info.parent)
            assertEquals("test", info.name)
            assertEquals("test", info.path)
        }

        PathInfo("hello/world").let { info ->
            assertEquals("hello", info.parent)
            assertEquals("world", info.name)
            assertEquals("hello/world", info.path)
        }

        PathInfo("hello/world/42").let { info ->
            assertEquals("hello/world", info.parent)
            assertEquals("42", info.name)
            assertEquals("hello/world/42", info.path)
        }
    }
}