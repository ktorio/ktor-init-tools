package io.ktor.start.util

import org.khronos.webgl.*
import kotlin.browser.*
import kotlin.coroutines.experimental.*
import kotlin.js.*

external object Object {
    fun keys(obj: dynamic): Array<String>
    fun values(obj: dynamic): Array<dynamic>
}

fun jsObject(vararg pairs: List<Pair<String, dynamic>>): dynamic {
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