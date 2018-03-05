import org.w3c.dom.*
import org.w3c.dom.url.*
import org.w3c.files.*
import kotlin.browser.*
import kotlin.js.*
import kotlin.math.*

class ZipBuilder {
    class FileInfo(val name: String, val data: ByteArray, val date: Date)

    val files = LinkedHashMap<String, FileInfo>()

    fun addParentDir(name: String, date: Date) {
        if (name == "") return
        addParentDir(name.substringBeforeLast('/', ""), date)
        val dname = "$name/"
        files[dname] = FileInfo(dname, byteArrayOf(), date)
    }

    fun add(name: String, data: ByteArray, date: Date = Date()) {
        addParentDir(name.substringBeforeLast('/', ""), date)
        files[name] = FileInfo(name, data, date)
    }

    fun add(name: String, data: String, charset: Charset = UTF8, date: Date = Date()) {
        add(name, data.toByteArray(charset), date)
    }

    fun toByteArray(): ByteArray {
        class CenterEntry(val fileNameBytes: ByteArray, val crc32: Int, val headerOffset: Int, val size: Int, val date: Date)

        val centerEntries = arrayListOf<CenterEntry>()

        // https://users.cs.jmu.edu/buchhofp/forensics/formats/pkzip.html
        return buildByteArray {
            // FILERECORD
            for (file in files.values) {
                val headerOffset = this.size
                val fileNameBytes = file.name.toByteArray(UTF8)
                val fileData = file.data
                val crc32 = fileData.crc32()
                u32_le(0x04034b50)
                u16_le(10) // MIN VER
                u16_le(0) // FLAGS
                u16_le(0) // COMPRESSION: STORED
                u16_le(file.date.toDosTime())
                u16_le(file.date.toDosDate())
                u32_le(crc32) // CRC32
                u32_le(fileData.size) // COMPRESSED_SIZE
                u32_le(fileData.size) // UNCOMPRESSED_SIZE
                u16_le(fileNameBytes.size) // FILE NAME LENGTH
                u16_le(0) // EXTRA LENGTH
                bytes(fileNameBytes)
                bytes(fileData)
                centerEntries += CenterEntry(fileNameBytes, crc32, headerOffset, fileData.size, file.date)
            }

            val directoryStart = this.size
            // DIRENTRY
            for (center in centerEntries) {
                u32_le(0x02014b50)
                u16_le(20) // VERSION
                u16_le(10) // VERSION_EXTRACT
                u16_le(0) // FLAGS
                u16_le(0) // COMPRESSION: STORED
                u16_le(center.date.toDosTime())
                u16_le(center.date.toDosDate())
                u32_le(center.crc32) // CRC32
                u32_le(center.size) // COMPRESSED SIZE
                u32_le(center.size) // UNCOMPRESSED SIZE
                u16_le(center.fileNameBytes.size) // FILE NAME LENGTH
                u16_le(0) // EXTRA LENGTH
                u16_le(0) // FILE COMMENT LENGTH
                u16_le(0) // DISK NUMBER START
                u16_le(0) // INTERNAL ATTRIBUTES
                u32_le(0) // EXTERNAL ATTRIBUTES
                u32_le(center.headerOffset) // HEADER OFFSET
                bytes(center.fileNameBytes)
            }
            val directoryEnd = this.size

            // ENDLOCATOR
            u32_le(0x06054b50)
            u16_le(0) // DISK NUMBER
            u16_le(0) // START DISK NUMBER
            u16_le(centerEntries.size) // ENTRIES ON DISK
            u16_le(centerEntries.size) // ENTRIES ON DIRECTORY
            u32_le(directoryEnd - directoryStart) // DIRECTORY SIZE
            u32_le(directoryStart) // DIRECTORY OFFSET
            u16_le(0) // COMMENT LENGTH
        }
    }

    private fun Date.toDosDate() = (this.getDate()) or ((this.getMonth() + 1) shl 5) or ((this.getFullYear() - 1980) shl 9)
    private fun Date.toDosTime() = (this.getSeconds() / 2) or (this.getMinutes() shl 5) or (this.getHours() shl 11)
}

fun buildZip(generate: ZipBuilder.() -> Unit): ByteArray {
    val zb = ZipBuilder()
    generate(zb)
    return zb.toByteArray()
}

interface Charset {
    fun decode(out: StringBuilder, src: ByteArray, start: Int, end: Int)
    fun encode(out: ByteArrayOutputStream, src: CharSequence, start: Int, end: Int)
}

object UTF8 : Charset {
    private fun createByte(codePoint: Int, shift: Int): Int = codePoint shr shift and 0x3F or 0x80

    override fun decode(out: StringBuilder, src: ByteArray, start: Int, end: Int) {
        var i = start
        while (i < end) {
            val c = src[i++].toInt() and 0xFF
            when (c shr 4) {
                0, 1, 2, 3, 4, 5, 6, 7 -> {
                    // 0xxxxxxx
                    out.append(c.toChar())
                }
                12, 13 -> {
                    // 110x xxxx   10xx xxxx
                    out.append((c and 0x1F shl 6 or (src[i++].toInt() and 0x3F)).toChar())
                }
                14 -> {
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    out.append((c and 0x0F shl 12 or (src[i++].toInt() and 0x3F shl 6) or (src[i++].toInt() and 0x3F)).toChar())
                }
            }
        }
    }

    override fun encode(out: ByteArrayOutputStream, src: CharSequence, start: Int, end: Int) {
        for (n in start until end) {
            val codePoint = src[n].toInt()

            if (codePoint and 0x7F.inv() == 0) { // 1-byte sequence
                out.u8(codePoint)
            } else {
                if (codePoint and 0x7FF.inv() == 0) { // 2-byte sequence
                    out.u8((codePoint shr 6 and 0x1F or 0xC0))
                } else if (codePoint and 0xFFFF.inv() == 0) { // 3-byte sequence
                    out.u8((codePoint shr 12 and 0x0F or 0xE0))
                    out.u8((createByte(codePoint, 6)))
                } else if (codePoint and -0x200000 == 0) { // 4-byte sequence
                    out.u8((codePoint shr 18 and 0x07 or 0xF0))
                    out.u8((createByte(codePoint, 12)))
                    out.u8((createByte(codePoint, 6)))
                }
                out.u8((codePoint and 0x3F or 0x80))
            }
        }
    }
}

object ASCII : Charset {
    override fun decode(out: StringBuilder, src: ByteArray, start: Int, end: Int) {
        for (n in start until end) out.append(src[n].toChar())
    }

    override fun encode(out: ByteArrayOutputStream, src: CharSequence, start: Int, end: Int) {
        for (n in start until end) out.u8(src[n].toInt())
    }
}

fun ByteArray.toString(charset: Charset): String = StringBuilder().apply { charset.decode(this, this@toString, 0, this@toString.size) }.toString()
fun String.toByteArray(charset: Charset): ByteArray = buildByteArray { charset.encode(this, this@toByteArray, 0, this@toByteArray.length) }

fun jsObject(vararg pairs: List<Pair<String, dynamic>>): dynamic {
    val obj = js("({})")
    for ((key, value) in pairs) obj[key] = value
    return obj
}

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

fun download(filename: String, data: ByteArray, type: String = "application/octet-stream") {
    val blob = Blob(arrayOf(data), BlobPropertyBag(type = type))
    if (window.navigator.asDynamic().msSaveOrOpenBlob) {
        window.navigator.asDynamic().msSaveBlob(blob, filename)
    } else {
        val elem = window.document.createElement("a") as HTMLAnchorElement
        elem.href = URL.createObjectURL(blob)
        elem.download = filename
        document.body?.appendChild(elem)
        elem.click()
        document.body?.removeChild(elem)
    }
}
