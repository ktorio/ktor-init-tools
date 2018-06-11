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

class SemVer(val version: String) : Comparable<SemVer> {
    private val parts1 = version.split('-', limit = 2)
    private val parts2 = parts1.first().split('.')

    val major = parts2.getOrNull(0)?.toIntOrNull() ?: 0
    val minor = parts2.getOrNull(1)?.toIntOrNull() ?: 0
    val patch = parts2.getOrNull(2)?.toIntOrNull() ?: 0
    val info = parts1.getOrNull(1) ?: ""

    override fun compareTo(other: SemVer): Int {
        return this.major.compareTo(other.major).takeIf { it != 0 }
                ?: this.minor.compareTo(other.minor).takeIf { it != 0 }
                ?: this.patch.compareTo(other.patch).takeIf { it != 0 }
                ?: this.info.compareTo(other.info).takeIf { it != 0 }
                ?: 0
    }

    override fun toString(): String = version
}