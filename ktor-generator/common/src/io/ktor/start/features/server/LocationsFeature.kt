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

object LocationsFeature : ServerFeature(ApplicationKt, RoutingFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-locations:\$ktor_version")
    override val id = "ktor-locations"
    override val title = "Locations"
    override val description = "Allows to define route locations in a typed way"
    override val documentation = "https://ktor.io/features/locations.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.locations.*")

        addApplicationClasses {
            SEPARATOR {
                +"@Location(\"/location/{name}\")"
                +"class MyLocation(val name: String, val arg1: Int = 42, val arg2: String = \"default\")"
            }
            SEPARATOR {
                +"@Location(\"/type/{name}\") data class Type(val name: String)" {
                    SEPARATOR {
                        +"@Location(\"/edit\")"
                        +"data class Edit(val type: Type)"
                    }
                    SEPARATOR {
                        +"@Location(\"/list/{page}\")"
                        +"data class List(val type: Type, val page: Int)"
                    }
                }
            }
        }
        addFeatureInstall {
            +"install(Locations)" {
            }
        }
        addRoute {
            +"get<MyLocation>" {
                +"call.respondText(\"Location: name=\${it.name}, arg1=\${it.arg1}, arg2=\${it.arg2}\")"
            }

            +"// Register nested routes"
            +"get<Type.Edit>" {
                +"call.respondText(\"Inside \$it\")"
            }
            +"get<Type.List>" {
                +"call.respondText(\"Inside \$it\")"
            }
        }
    }
}
