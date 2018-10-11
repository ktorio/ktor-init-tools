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
    val V100_alpha_1 = KtorVersion(version = "1.0.0-alpha-1", kotlinVersion = "1.3.0-rc-131", extraRepos = listOf("https://kotlin.bintray.com/kotlin-eap"))
    //val ALL = arrayOf(V092, V093)
    //val ALL = arrayOf(V094, V093) // @TODO: Not possible until `Feature.since` is taken into account in the feature selector
    val ALL = arrayOf(V094, V100_alpha_1, V095)
    val LAST = V095
    val LAST_BETA = V100_alpha_1

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