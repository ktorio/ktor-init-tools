package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object ApplicationConf : BuildInfoBlock() {
    val KTOR = newSlot("KTOR")
    val DEPLOYMENT = newSlot("DEPLOYMENT")

    override fun BlockBuilder.render(info: BuildInfo) {
        fileText("resources/application.conf") {
            "ktor" {
                "deployment" {
                    +"port = 8080"
                    +"port = \${?PORT}"
                    block(DEPLOYMENT)
                }

                "application" {
                    +"modules = [ ${info.artifactGroup}.ApplicationKt.main ]"
                }

                block(KTOR)
            }
        }
    }
}

fun BlockBuilder.addHoconDeployment(block: Indenter.() -> Unit) {
    appendSeparated(ApplicationConf.DEPLOYMENT) {
        block()
    }
}

fun BlockBuilder.addHoconKtor(block: Indenter.() -> Unit) {
    appendSeparated(ApplicationConf.KTOR) {
        block()
    }
}
