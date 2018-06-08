package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object ApplicationKt : BuildInfoBlock(BuildFiles, ApplicationConf) {
    val MODULE_INSTALL = newSlot("MODULE_INSTALL")
    val MODULE_POST = newSlot("MODULE_POST")
    val APPLICATION_CLASSES = newSlot("APPLICATION_CLASSES")
    val EXTENSIONS = newSlot("EXTENSIONS")

    override fun BlockBuilder.render(info: BuildInfo) {
        addImport("io.ktor.application.*")
        addImport("io.ktor.response.*")
        addImport("io.ktor.request.*")

        fileText("src/application.kt") {
            +"package ${info.artifactGroup}"
            SEPARATOR {
                linedeferred {
                    for (import in applicationKtImports) {
                        +"import $import"
                    }
                }
            }
            SEPARATOR {
                if (info.ktorVer >= Versions.V092) {
                    +"fun main(args: Array<String>): Unit = ${info.developmentEngineFQ}.main(args)"
                } else {
                    +"fun main(args: Array<String>): Unit = ${info.developmentPackage}.main(args)"
                }
            }
            SEPARATOR {
                block(APPLICATION_CLASSES)
            }
            SEPARATOR {
                "fun Application.main()" {
                    block(MODULE_INSTALL)
                    EMPTY_LINE_ONCE()
                    block(MODULE_POST)
                }
            }
            SEPARATOR {
                block(EXTENSIONS)
            }
        }
    }
}

private val BlockBuilder.applicationKtImports: LinkedHashSet<String> by Extra.PropertyThis { LinkedHashSet<String>() }

fun BlockBuilder.addImport(import: String) {
    applicationKtImports += import
}

fun BlockBuilder.addFeatureInstall(callback: Indenter.() -> Unit) {
    appendSeparated(ApplicationKt.MODULE_INSTALL) {
        callback()
    }
}

fun BlockBuilder.addExtensionMethods(callback: Indenter.() -> Unit) {
    appendSeparated(ApplicationKt.EXTENSIONS) {
        callback()
    }
}

fun BlockBuilder.addApplicationClasses(callback: Indenter.() -> Unit) {
    appendSeparated(ApplicationKt.APPLICATION_CLASSES) {
        callback()
    }
}
