package io.ktor.start.util

import kotlin.js.*

actual typealias DateTime = Date

actual fun NewDateTime(): DateTime = Date()
actual fun NewDateTime(time: Long): DateTime = Date(time)

actual val DateTime.time: Long get() = (this as Date).getTime().toLong()

actual val DateTime.fullYear: Int get() = (this as Date).getFullYear()
actual val DateTime.month: Int get() = (this as Date).getMonth()
actual val DateTime.date: Int get() = (this as Date).getDate()
actual val DateTime.hours: Int get() = (this as Date).getHours()
actual val DateTime.minutes: Int get() = (this as Date).getMinutes()
actual val DateTime.seconds: Int get() = (this as Date).getSeconds()
