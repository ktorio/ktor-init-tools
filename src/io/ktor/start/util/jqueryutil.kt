package io.ktor.start.util

import js.externals.jquery.*
import org.w3c.dom.*

//fun io.ktor.start.jq(str: String) = io.ktor.start.getJQuery(str) // BUG?
//inline fun io.ktor.start.jq(str: String) = io.ktor.start.getJQuery(str)
external val jQuery: JQueryStatic<HTMLElement> = definedExternally

inline fun jq(str: String) = jQuery(str)
inline fun jq(str: HTMLElement) = jQuery(str)

//external fun JQuery.io.ktor.start.on(name: String, event: dynamic)
//inline fun JQuery<HTMLElement>.io.ktor.start.on(name: String, event: dynamic) = this.asDynamic().io.ktor.start.on(name, event)
inline fun JQuery<HTMLElement>.on(name: String, noinline event: () -> Unit) = this.asDynamic().on(name, event)

inline fun JQuery<HTMLElement>.each(noinline event: (index: Int, element: HTMLElement) -> Unit): Unit =
    this.asDynamic().each(event)

inline fun JQuery<HTMLElement>.change(noinline event: () -> Unit) = this.asDynamic().change(event)
