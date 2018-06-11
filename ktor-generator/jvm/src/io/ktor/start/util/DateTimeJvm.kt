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
