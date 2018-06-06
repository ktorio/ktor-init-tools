package io.ktor.start

import js.externals.jquery.*
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.url.*
import org.w3c.files.*
import kotlin.browser.*
import kotlin.coroutines.experimental.*
import kotlin.js.*

external object Object {
    fun keys(obj: dynamic): Array<String>
    fun values(obj: dynamic): Array<dynamic>
}

fun jsObject(vararg pairs: Pair<String, dynamic>): dynamic {
    val obj = js("({})")
    for ((key, value) in pairs) obj[key] = value
    return obj
}

suspend fun <T> Promise<T>.await(): T = suspendCoroutine { then(it::resume, it::resumeWithException) }
suspend fun fetchFile(file: String): ByteArray {
    val response = window.fetch(file).await()
    val buffer = response.arrayBuffer().await()
    return Int8Array(buffer).unsafeCast<ByteArray>()
}

val EmptyContinuation = object : Continuation<Unit> {
    override val context: CoroutineContext = EmptyCoroutineContext
    override fun resume(value: Unit) = Unit
    override fun resumeWithException(exception: Throwable) = Unit
}

fun launch(callback: suspend () -> Unit) {
    callback.startCoroutine(EmptyContinuation)
}

//fun io.ktor.start.jq(str: String) = io.ktor.start.getJQuery(str) // BUG?
//inline fun io.ktor.start.jq(str: String) = io.ktor.start.getJQuery(str)
external val jQuery: JQueryStatic<HTMLElement> = definedExternally

inline fun jq(str: String) = jQuery(str)
inline fun jq(str: HTMLElement) = jQuery(str)

//external fun JQuery.io.ktor.start.on(name: String, event: dynamic)
//inline fun JQuery<HTMLElement>.io.ktor.start.on(name: String, event: dynamic) = this.asDynamic().io.ktor.start.on(name, event)
inline fun JQuery<HTMLElement>.on(name: String, noinline event: () -> Unit) = this.asDynamic().on(name, event)

inline fun JQuery<HTMLElement>.each(noinline event: (index: Int, element: HTMLElement) -> Unit): Unit =
    this.asDynamic().each(event)

inline fun JQuery<HTMLElement>.change(noinline event: () -> Unit) = this.asDynamic().change(event)
inline fun JQuery<HTMLElement>.keyup(noinline event: () -> Unit) = this.asDynamic().keyup(event)

fun generateBrowserFile(filename: String, data: ByteArray, type: String = "application/octet-stream") {
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
