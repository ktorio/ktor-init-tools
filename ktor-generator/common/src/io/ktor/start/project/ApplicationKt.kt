package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object ApplicationKt : BuildInfoBlock(BuildFiles) {
    val MODULE_INSTALL = newSlot("MODULE_INSTALL")
    val MODULE_POST = newSlot("MODULE_POST")
    val APPLICATION_CLASSES = newSlot("APPLICATION_CLASSES")
    val EXTENSIONS = newSlot("EXTENSIONS")

    override fun BlockBuilder.render(info: BuildInfo) {
        fileText("src/application.kt") {
            +"package ${info.developmentPackage}"
            +""
            linedeferred {
                for (import in applicationKtImports) {
                    +"import $import"
                }
            }
            if (info.ktorVer >= Versions.V092) {
                +"fun main(args: Array<String>): Unit = ${info.developmentEngineFQ}.main(args)"
            } else {
                +"fun main(args: Array<String>): Unit = ${info.developmentPackage}.main(args)"
            }
            block(APPLICATION_CLASSES)
            "fun Application.main()" {
                block(MODULE_INSTALL)
                block(MODULE_POST)
            }
            block(EXTENSIONS)
        }
    }
}

private val BlockBuilder.applicationKtImports: LinkedHashSet<String> by extraProperty { LinkedHashSet<String>() }

fun BlockBuilder.addImport(import: String) {
    applicationKtImports += import
}

fun BlockBuilder.addFeatureInstall(callback: Indenter.() -> Unit) {
    append(ApplicationKt.MODULE_INSTALL) {
        +""
        callback()
    }
}

fun BlockBuilder.addExtensionMethods(callback: Indenter.() -> Unit) {
    append(ApplicationKt.EXTENSIONS) {
        +""
        callback()
    }
}

fun BlockBuilder.addApplicationClasses(callback: Indenter.() -> Unit) {
    append(ApplicationKt.APPLICATION_CLASSES) {
        +""
        callback()
    }
}
