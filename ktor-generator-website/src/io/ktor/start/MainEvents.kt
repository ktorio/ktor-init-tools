package io.ktor.start

import js.externals.jquery.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import kotlin.browser.*

fun registerKeyboardUsability() {
    document.addEventListener("keydown", { be ->
        val e = be as KeyboardEvent
        val active = document.activeElement
        val dependencyFilter = document.getElementById("dependency-filter")

        if ((active?.tagName != "INPUT") && (active?.tagName != "TEXTAREA") && e.key === "f") {
            dependencyFilter.asDynamic()?.focus()
            e.preventDefault()
        }

        if (active === dependencyFilter) {
            val current = jq(".artifact.active:visible")
            when (e.key) {
                "Escape" -> {
                    dependencyFilter.asDynamic()?.blur()
                    e.preventDefault()
                }
                "Enter" -> {
                    val checkbox = current.find("[type=checkbox]")
                    checkbox.prop("checked", !(checkbox.prop("checked").asDynamic()))
                    e.preventDefault()
                }
                "ArrowUp", "ArrowDown" -> {
                    val up = e.key === "ArrowUp"
                    val count = current.length
                    var next: JQuery<HTMLElement>
                    if (count == 0) {
                        next = jq(".artifact:visible").first()
                    } else {
                        next = current

                        do {
                            next = if (up) next.prev(".artifact") else next.next(".artifact")
                        } while (next.length.toInt() >= 1 && !next.`is`(":visible"))

                        if (next.length == 0) {
                            next = if (up) jq(".artifact:visible").last() else jq(".artifact:visible").first()
                        }
                    }

                    next.addClass("active")
                    current.removeClass("active")

                    if (next.length.toInt() >= 1) {
                        next[0]?.scrollIntoView(
                            jsObject(
                                "behavior" to "instant",
                                "block" to "center",
                                "inline" to "center"
                            )
                        )
                    }

                    e.preventDefault()
                }
            }
        }
    })
}
