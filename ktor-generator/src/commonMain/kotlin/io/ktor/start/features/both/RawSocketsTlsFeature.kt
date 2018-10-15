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

package io.ktor.start.features.both

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object RawSocketsTlsFeature : ServerFeature(ApplicationKt, RawSocketsFeature) {
    override val group = "Sockets"

    override val repos = Repos.ktor
    override val id = "ktor-network-tls"
    override val title = "Raw Secure SSL/TLS Sockets"
    override val description =
        "Adds Raw Socket support for listening and connecting to tcp and udp sockets with secure sockets"
    override val documentation = "https://ktor.io/servers/raw-sockets.html#secure"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.network.tls.*")
        addImport("kotlinx.coroutines.experimental.*")

        //replace(RawSocketsFeature.SERVER_SOCKET) {
        //    +"val serverSocket = aSocket(selectorManager).tcp().bind(port = DefaultPort).tls()"
        //}
        //replace(RawSocketsFeature.CLIENT_SOCKET) {
        //    +"val socket = aSocket(selectorManager).tcp().connect(\"127.0.0.1\", port = DefaultPort).tls()"
        //}

        addImport("kotlinx.io.core.*")

        fileText("src/TlsRawSocket.kt") {
            +"package ${info.artifactGroup}"
            putImports(applicationKtImports)
            SEPARATOR {
                +"object TlsRawSocket" {
                    +"@JvmStatic"
                    +"fun main(args: Array<String>)" {
                        +"runBlocking" {
                            +"val selectorManager = ActorSelectorManager(ioCoroutineDispatcher)"
                            +"val socket = aSocket(selectorManager).tcp().connect(\"www.google.com\", port = 443).tls(coroutineContext = coroutineContext)"
                            +"val write = socket.openWriteChannel()"
                            +"val EOL = \"\\r\\n\""
                            +"write.writeStringUtf8(\"GET / HTTP/1.1\${EOL}Host: www.google.com\${EOL}Connection: close\${EOL}\${EOL}\")"
                            +"write.flush()"
                            +"println(socket.openReadChannel().readRemaining().readBytes().toString(Charsets.UTF_8))"
                        }
                    }
                }
            }
        }
    }
}