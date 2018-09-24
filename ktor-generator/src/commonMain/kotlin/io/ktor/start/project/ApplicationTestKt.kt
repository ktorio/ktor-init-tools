package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object ApplicationTestKt : BuildInfoBlock(ApplicationKt) {
    val TESTS = newSlot("TESTS")

    override fun BlockBuilder.render(info: BuildInfo) {
        addTestImport("kotlin.test.*")
        addTestImport("io.ktor.server.testing.*")

        fileText("test/ApplicationTest.kt") {
            +"package ${info.artifactGroup}"
            SEPARATOR {
                linedeferred {
                    for (import in applicationKtImports + applicationTestKtImports) {
                        +"import $import"
                    }
                }
            }
            SEPARATOR {
                "class ApplicationTest" {
                    block(TESTS)
                }
            }
        }
    }
}

val BlockBuilder.applicationTestKtImports: LinkedHashSet<String> by Extra.PropertyThis { LinkedHashSet<String>() }

fun BlockBuilder.addTestImport(import: String) {
    applicationTestKtImports += import
}

fun BlockBuilder.addTestMethod(name: String, block: Indenter.() -> Unit) {
    appendSeparated(ApplicationTestKt.TESTS) {
        +"@Test"
        "fun $name()" {
            block()
        }
    }
}
