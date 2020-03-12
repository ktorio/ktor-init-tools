package io.ktor.start.intellij.util

import com.intellij.testFramework.*
import io.ktor.start.intellij.locations.PatternParserDefinition
import org.junit.*

class ParsingTest : ParsingTestCase("", "locationspattern",
    PatternParserDefinition()
) {

    @Test
    fun testSmoke() {
        doTest(true)
    }

    override fun skipSpaces(): Boolean {
        return false
    }

    override fun includeRanges(): Boolean {
        return true
    }

    override fun getTestDataPath(): String {
        return "testresources"
    }
}
