package io.ktor.start.util

import java.util.*

actual typealias DateTime = Date

actual fun NewDateTime(): DateTime = Date()
actual fun NewDateTime(time: Long): DateTime = Date(time)

actual val DateTime.time: Long get() = (this as Date).time

actual val DateTime.fullYear: Int get() = (this as Date).year
actual val DateTime.month: Int get() = (this as Date).month
actual val DateTime.date: Int get() = (this as Date).date
actual val DateTime.hours: Int get() = (this as Date).hours
actual val DateTime.minutes: Int get() = (this as Date).minutes
actual val DateTime.seconds: Int get() = (this as Date).seconds
