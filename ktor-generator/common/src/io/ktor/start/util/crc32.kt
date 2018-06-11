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

package io.ktor.start.util

object CRC32 {
    val table = IntArray(256).apply {
        val POLY: Int = 0xEDB88320.toInt()
        for (n in 0 until 256) {
            var c = n
            for (k in 0 until 8) {
                c = if ((c and 1) != 0) {
                    POLY xor (c ushr 1)
                } else {
                    c ushr 1
                }
            }
            this[n] = c
        }
    }

    fun update(initial: Int, u: ByteArray): Int {
        var crc = initial xor (-1)
        for (i in 0 until u.size) {
            crc = table[(crc xor u[i].toInt()) and 0xFF] xor (crc ushr 8)
        }
        return crc xor (-1)
    }
}

fun ByteArray.crc32(): Int = CRC32.update(0, this)
