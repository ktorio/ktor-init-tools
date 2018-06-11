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

import kotlin.math.*

class ByteArrayOutputStream {
    private var pos = 0
    private var data = ByteArray(1024)
    val size get() = pos

    private fun ensure(count: Int): ByteArrayOutputStream {
        if (pos + count > data.size) {
            data = data.copyOf(max(pos + count, data.size * 2))
        }
        return this
    }

    private inline fun byte(v: Number) = run { data[pos++] = v.toByte() }
    fun u8(v: Int) = ensure(1).apply { byte(v) }
    fun u16_le(v: Int) = ensure(2).apply { byte(v shr 0); byte(v shr 8) }
    fun u32_le(v: Int) = ensure(4).apply { byte(v shr 0); byte(v shr 8); byte(v shr 16); byte(v shr 24) }
    fun bytes(data: ByteArray) = ensure(data.size).apply { for (n in 0 until data.size) byte(data[n]) }

    fun toByteArray(): ByteArray {
        return data.copyOf(pos)
    }

    inline fun build(builder: ByteArrayOutputStream.() -> Unit): ByteArray {
        builder(this)
        return toByteArray()
    }
}

inline fun buildByteArray(builder: ByteArrayOutputStream.() -> Unit): ByteArray = ByteArrayOutputStream().build(builder)
