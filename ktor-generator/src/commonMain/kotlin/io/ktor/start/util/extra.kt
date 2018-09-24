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

import kotlin.reflect.*


interface Extra {
    var extra: LinkedHashMap<String, Any?>?

    class Mixin(override var extra: LinkedHashMap<String, Any?>? = null) : Extra

    @Suppress("UNCHECKED_CAST", "NOTHING_TO_INLINE")

    class Property<T : Any?>(val name: String? = null, val defaultGen: () -> T) {
        inline operator fun getValue(thisRef: Extra, property: KProperty<*>): T {
            val res = (thisRef.extra?.get(name ?: property.name) as T?)
            if (res == null) {
                val r = defaultGen()
                setValue(thisRef, property, r)
                return r
            }
            return res
        }

        inline operator fun setValue(thisRef: Extra, property: KProperty<*>, value: T): Unit = run {
            //beforeSet(value)
            thisRef.setExtra(name ?: property.name, value as Any?)
            //afterSet(value)
        }
    }

    class PropertyThis<in T2 : Extra, T : Any?>(val name: String? = null, val defaultGen: T2.() -> T) {
        inline operator fun getValue(thisRef: T2, property: KProperty<*>): T {
            val res = (thisRef.extra?.get(name ?: property.name) as T?)
            if (res == null) {
                val r = defaultGen(thisRef)
                setValue(thisRef, property, r)
                return r
            }
            return res
        }

        inline operator fun setValue(thisRef: T2, property: KProperty<*>, value: T): Unit = run {
            //beforeSet(value)
            if (thisRef.extra == null) thisRef.extra = LinkedHashMap()
            thisRef.extra?.set(name ?: property.name, value as Any?)
            //afterSet(value)
        }
    }
}

fun <T : Any> Extra.getExtraTyped(name: String): T? = extra?.get(name) as T?
fun Extra.getExtra(name: String): Any? = extra?.get(name)
fun Extra.setExtra(name: String, value: Any?): Unit {
    if (extra == null) extra = LinkedHashMap()
    extra?.set(name, value)
}
