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

import io.ktor.start.util.*

val KOTLIN_VERSION = "1.2.51"
val KOTLINX_COROUTINES_VERSION = "0.23.4"

object Versions {
    val V092 = SemVer("0.9.2")
    val V093 = SemVer("0.9.3")
    //val ALL = arrayOf(V092, V093)
    val ALL = arrayOf(V093)
    val LAST = V093
}
