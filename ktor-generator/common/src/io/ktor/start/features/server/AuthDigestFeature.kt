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

package io.ktor.start.features.server

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object AuthDigestFeature : ServerFeature(ApplicationKt, AuthFeature) {
    override val group: String = "Authentication"
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-auth:\$ktor_version")
    override val id = "auth-digest"
    override val title = "Authentication Digest"
    override val description = "Handle Digest authentication"
    override val documentation = "https://ktor.io/features/authentication/digest.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addAuthProvider {
            +"val myRealm = \"MyRealm\""
            +"val usersInMyRealmToHA1: Map<String, ByteArray> = mapOf("
                +"// pass=\"test\", HA1=MD5(\"test:MyRealm:pass\")=\"fb12475e62dedc5c2744d98eb73b8877\""
                +"\"test\" to hex(\"fb12475e62dedc5c2744d98eb73b8877\")"
            +")"
            +"digest(\"myDigestAuth\")" {
                +"userNameRealmPasswordDigestProvider = " {
                    +"userName, realm ->"
                    +"usersInMyRealmToHA1[userName]"
                }
            }
        }
        addRoute {
            "authenticate(\"myDigestAuth\")" {
                "get(\"/protected/route/digest\")" {
                    +"val principal = call.principal<UserIdPrincipal>()!!"
                    +"call.respondText(\"Hello \${principal.name}\")"
                }
            }
        }
    }
}