package io.ktor.start.util

import kotlin.collections.set
import kotlin.js.*

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
        class CenterEntry(
            val fileNameBytes: ByteArray,
            val crc32: Int,
            val headerOffset: Int,
            val size: Int,
            val date: Date
        )

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

    private fun Date.toDosDate() =
        (this.getDate()) or ((this.getMonth() + 1) shl 5) or ((this.getFullYear() - 1980) shl 9)

    private fun Date.toDosTime() = (this.getSeconds() / 2) or (this.getMinutes() shl 5) or (this.getHours() shl 11)
}

fun buildZip(generate: ZipBuilder.() -> Unit): ByteArray {
    val zb = ZipBuilder()
    generate(zb)
    return zb.toByteArray()
}
