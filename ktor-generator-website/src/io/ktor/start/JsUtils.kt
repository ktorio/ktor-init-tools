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
    override fun resumeWithException(exception: Throwable) = console.error(exception)
}

fun launch(callback: suspend () -> Unit) {
    callback.startCoroutine(EmptyContinuation)
}

//fun io.ktor.start.jq(str: String) = io.ktor.start.getJQuery(str) // BUG?
//inline fun io.ktor.start.jq(str: String) = io.ktor.start.getJQuery(str)
external val jQuery: JQueryStatic<HTMLElement> = definedExternally

inline fun jq(str: String) = jQuery(str)
inline fun jq(str: Element) = jQuery(str)
inline fun jq(str: Node) = jQuery(str.unsafeCast<Element>())
inline fun jqId(id: String) = jQuery("#$id")

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

suspend fun dialogOpenFile(filter: String = "*"): List<File> = suspendCoroutine { continuation ->
    if (windowInputFile == null) {
        val wif = jq("<input type='file' style='display:none;'>")[0]
        windowInputFile = wif.unsafeCast<HTMLInputElement>()
        document.body?.append(wif)
    }
    val inputFile = windowInputFile
    var completedOnce = false
    var files = arrayOf<File>()

    val completed = {
        if (!completedOnce) {
            completedOnce = true

            selectedFiles = files

            //console.log('completed', files);
            if (files.size > 0.0) {
                val ff = arrayListOf<File>()
                for (n in 0 until selectedFiles.asDynamic().length) ff += selectedFiles[n].unsafeCast<File>()
                continuation.resume(ff)
            } else {
                continuation.resumeWithException(RuntimeException("cancel"))
            }
        }
    }

    windowInputFile?.value = ""

    windowInputFile?.onclick = {
        document.body?.onfocus = {
            document.body?.onfocus = null
            window.setTimeout({
                completed()
            }, 2000)
        }
        Unit
    }

    windowInputFile?.onchange = { e ->
        files = e.target.asDynamic()["files"]
        //var v = this.value;
        //console.log(v);
        completed()
    }

    inputFile?.click()
}

suspend fun File.read(): ByteArray = suspendCoroutine { c ->
    val reader = FileReader()
    reader.onload = {
        c.resume(Int8Array((reader.result as ArrayBuffer)) as ByteArray)
    }
    reader.onerror = {
        c.resumeWithException(RuntimeException("onerror"))
    }
    reader.readAsArrayBuffer(this)
}

var windowInputFile: HTMLInputElement? = null
var selectedFiles = arrayOf<File>()
