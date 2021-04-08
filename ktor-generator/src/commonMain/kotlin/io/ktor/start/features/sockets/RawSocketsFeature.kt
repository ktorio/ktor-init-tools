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

package io.ktor.start.features.sockets

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object RawSocketsFeature : ServerFeature(ApplicationKt) {
    override val group = "Sockets"

    override val id = "ktor-network"
    override val title = "Raw Sockets"
    override val description = "Adds Raw Socket support for listening and connecting to tcp and udp sockets"
    override val documentation = "https://ktor.io/docs/servers-raw-sockets.html"

    val SERVER_SOCKET = newSlot("SERVER_SOCKET")
    val CLIENT_SOCKET = newSlot("CLIENT_SOCKET")

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("java.io.*")
        addImport("java.util.*")
        addImport("io.ktor.network.selector.*")
        addImport("io.ktor.network.sockets.*")
        addImport("io.ktor.network.util.*")
        addImport("kotlin.coroutines.experimental.*")
        addImport("kotlinx.coroutines.experimental.*")
        addImport("io.ktor.utils.io.*")

        fileText("src/EchoApp.kt") {
            +"package ${info.artifactGroup}"
            putImports(applicationKtImports)
            SEPARATOR {
                +"/**"
                +" * Two mains are provided, you must first start EchoApp.Server, and then EchoApp.Client."
                +" * You can also start EchoApp.Server and then use a telnet client to connect to the echo server."
                +" */"
                +"object EchoApp" {
                    +"val selectorManager = ActorSelectorManager(Dispatchers.IO)"
                    +"val DefaultPort = 9002"
                    SEPARATOR {
                        +"object Server" {
                            +"@JvmStatic"
                            +"fun main(args: Array<String>)" {
                                +"runBlocking" {
                                    block(SERVER_SOCKET) {
                                        +"val serverSocket = aSocket(selectorManager).tcp().bind(port = DefaultPort)"
                                    }

                                    +"println(\"Echo Server listening at \${serverSocket.localAddress}\")"
                                    +"while (true)" {
                                        +"val socket = serverSocket.accept()"
                                        +"println(\"Accepted \$socket\")"
                                        +"launch" {
                                            +"val read = socket.openReadChannel()"
                                            +"val write = socket.openWriteChannel(autoFlush = true)"
                                            +"try" {
                                                +"while (true)" {
                                                    +"val line = read.readUTF8Line()"
                                                    +"write.writeStringUtf8(\"\$line\\n\")"
                                                }
                                            }
                                            appending("catch (e: Throwable)") {
                                                +"socket.close()"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    SEPARATOR {
                        +"object Client" {
                            +"@JvmStatic"
                            +"fun main(args: Array<String>)" {
                                +"runBlocking" {
                                    block(CLIENT_SOCKET) {
                                        +"val socket = aSocket(selectorManager).tcp().connect(\"127.0.0.1\", port = DefaultPort)"
                                    }

                                    +"val read = socket.openReadChannel()"
                                    +"val write = socket.openWriteChannel(autoFlush = true)"
                                    SEPARATOR {
                                        +"launch(Dispatchers.IO)" {
                                            +"while (true)" {
                                                +"val line = read.readUTF8Line()"
                                                +"println(\"server: \$line\")"
                                            }
                                        }
                                    }
                                    SEPARATOR {
                                        +"for (line in System.`in`.lines())" {
                                            +"println(\"client: \$line\")"
                                            +"write.writeStringUtf8(\"\$line\\n\")"
                                        }
                                    }
                                }
                            }
                            SEPARATOR {
                                +"private fun InputStream.lines() = Scanner(this).lines()"
                            }
                            SEPARATOR {
                                val sequence = if (info.is100OrGreater) "sequence" else "buildSequence"
                                +"private fun Scanner.lines() = $sequence" {
                                    +"while (hasNext())" {
                                        +"yield(readLine())"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
