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
