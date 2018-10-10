package io.ktor.start.util

import kotlin.test.*

class SemVerTest {
    @Test
    fun simple() {
        //assertEquals(-1, SemVer("1.0.0-alpha-1").compareTo(SemVer("0.9.5")))

        assertEquals(
            "0.9.4, 0.9.5, 1.0.0, 1.0.0-alpha-1",
            listOf(SemVer("1.0.0"), SemVer("0.9.4"), SemVer("1.0.0-alpha-1"), SemVer("0.9.5")).sorted().joinToString(", ")
        )

        assertEquals(+1, SemVer("1.0.0").compareTo(SemVer("0.9.5")))
    }
}