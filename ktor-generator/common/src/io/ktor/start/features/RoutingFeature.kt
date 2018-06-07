package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object RoutingFeature : Feature(ApplicationKt) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-server-core:\$ktor_version")
    override val id = "routing"
    override val title = "Routing"
    override val description = "Allows to define structured routes and associated handlers."
    override val documentation = "https://ktor.io/features/routing.html"
    val BLOCK = newSlot("BLOCK")

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.routing.*")
        append(ApplicationKt.MODULE_POST) {
            "routing" {
                "get(\"/\")" {
                    +"HELLO WORLD!"
                }
                block(BLOCK)
            }
        }
    }
}

fun BlockBuilder.addRoute(callback: Indenter.() -> Unit) {
    append(RoutingFeature.BLOCK) {
        +""
        callback()
    }
}