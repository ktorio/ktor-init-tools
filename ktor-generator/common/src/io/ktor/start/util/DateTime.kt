package io.ktor.start.util

expect class DateTime

expect fun NewDateTime(): DateTime
expect fun NewDateTime(time: Long): DateTime
expect val DateTime.time: Long

expect val DateTime.fullYear: Int
expect val DateTime.month: Int
expect val DateTime.date: Int
expect val DateTime.hours: Int
expect val DateTime.minutes: Int
expect val DateTime.seconds: Int
