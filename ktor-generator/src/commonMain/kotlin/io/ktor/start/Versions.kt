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

object Versions {
    val V094 = KtorVersion(version = "0.9.4", kotlinVersion = "1.2.61")
    val V095 = KtorVersion(version = "0.9.5", kotlinVersion = "1.2.70")
    val V100 = KtorVersion(version = "1.0.0", kotlinVersion = "1.3.10")
    val V101 = KtorVersion(version = "1.0.1", kotlinVersion = "1.3.10")
    val V111 = KtorVersion(version = "1.1.1", kotlinVersion = "1.3.11")
    val V112 = KtorVersion(version = "1.1.2", kotlinVersion = "1.3.20")
    val V113 = KtorVersion(version = "1.1.3", kotlinVersion = "1.3.21")
    val V114 = KtorVersion(version = "1.1.4", kotlinVersion = "1.3.30")
    val V115 = KtorVersion(version = "1.1.5", kotlinVersion = "1.3.30")
    val V120 = KtorVersion(version = "1.2.0", kotlinVersion = "1.3.31")
    val V121 = KtorVersion(version = "1.2.1", kotlinVersion = "1.3.31")
    val V122 = KtorVersion(version = "1.2.2", kotlinVersion = "1.3.40")
    val V123 = KtorVersion(version = "1.2.3", kotlinVersion = "1.3.41")
    val V124 = KtorVersion(version = "1.2.4", kotlinVersion = "1.3.50")
    val V126 = KtorVersion(version = "1.2.6", kotlinVersion = "1.3.60")
    val V130 = KtorVersion(version = "1.3.0", kotlinVersion = "1.3.61")
    val V131 = KtorVersion(version = "1.3.1", kotlinVersion = "1.3.61")
    val V132 = KtorVersion(version = "1.3.2", kotlinVersion = "1.3.70")
    val V140 = KtorVersion(version = "1.4.0", kotlinVersion = "1.4.0")
    val V141 = KtorVersion(version = "1.4.1", kotlinVersion = "1.4.10")

    val ALL = arrayOf(V101, V115, V126, V130, V132, V140)
    val LAST = V132
    val LAST_EAP = V132

    private val VMAP = ALL.associate { it.version to it }
    fun fromString(version: String): KtorVersion? = VMAP[version]
}

data class KtorVersion(
    val version: String,
    val kotlinVersion: String,
    val extraRepos: List<String> = listOf()
) : Comparable<KtorVersion>  {
    val semVersion = SemVer(version)
    val semKotlinVersion = SemVer(kotlinVersion)

    override fun compareTo(other: KtorVersion): Int = this.semVersion.compareTo(other.semVersion)
    override fun toString(): String = semVersion.toString()
}

