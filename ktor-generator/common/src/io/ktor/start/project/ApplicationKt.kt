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

package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

object ApplicationKt : BuildInfoBlock(BuildFiles, ApplicationConf, GitIgnoreFile) {
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
                +"fun main(args: Array<String>): Unit = ${info.developmentEngineFQ}.main(args)"
            }
            SEPARATOR {
                block(APPLICATION_CLASSES)
            }
            SEPARATOR {
                "fun Application.module()" {
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

val BlockBuilder.applicationKtImports: LinkedHashSet<String> by Extra.PropertyThis { LinkedHashSet<String>() }

fun BlockBuilder.addImport(import: String) {
    applicationKtImports += import
}

fun Indenter.putImports(imports: Set<String>) {
    SEPARATOR {
        linedeferred {
            for (import in imports) {
                +"import $import"
            }
        }
    }
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
