/*
 * Copyright 2018 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

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