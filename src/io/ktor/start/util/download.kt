package io.ktor.start.util

import org.w3c.dom.*
import org.w3c.dom.url.*
import org.w3c.files.*
import kotlin.browser.*

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
