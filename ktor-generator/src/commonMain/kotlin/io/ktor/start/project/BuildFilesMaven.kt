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

internal object BuildFilesMaven : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
        fileText("pom.xml") {
            xml {
                +"<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
                "<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd\">" {
                    +"<modelVersion>4.0.0</modelVersion>"
                    +"<groupId>${info.artifactGroup}</groupId>"
                    +"<artifactId>${info.artifactName}</artifactId>"
                    +"<version>${info.artifactVersion}</version>"
                    +"<name>${info.artifactName}</name>"
                    +"<description>${info.artifactName}</description>"
                    "<properties>" {
                        for ((key, value) in Properties.getProperties(info)) {
                            +"<$key>$value</$key>"
                        }

                        +"<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>"
                        +"<kotlin.compiler.incremental>true</kotlin.compiler.incremental>"
                        +"<main.class>${info.developmentEngineFQ}</main.class>"
                    }
                    "<repositories>" {
                        linedeferred {
                            repos@for ((index, repo) in getAllReposToInclude(info).withIndex()) {
                                val repoUrl = when (repo) {
                                    "local" -> continue@repos // Skip local since it is already included
                                    "jcenter" -> "https://jcenter.bintray.com"
                                    else -> repo
                                }
                                xml {
                                    "<repository>" {
                                        +"<id>repo$index</id>"
                                        +"<url>$repoUrl</url>"
                                        +"<releases><enabled>true</enabled></releases>"
                                        +"<snapshots><enabled>true</enabled></snapshots>"
                                    }
                                }
                            }
                        }
                    }
                    "<dependencies>" {
                        linedeferred {
                            for ((deps, test) in listOf(compileDependencies to false, testDependencies to true)) {
                                for (dep in deps) {
                                    val version = dep.version ?: ""
                                    val mvnVersion = if (version.startsWith("\$")) "\${" + version.substring(1) + "}" else version
                                    xml {
                                        "<dependency>" {
                                            +"<groupId>${dep.group}</groupId>"
                                            +"<artifactId>${dep.name}</artifactId>"
                                            +"<version>$mvnVersion</version>"
                                            if (test) {
                                                +"<scope>test</scope>"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    "<build>" {
                        +"<sourceDirectory>\${project.basedir}/src</sourceDirectory>"
                        +"<testSourceDirectory>\${project.basedir}/test</testSourceDirectory>"
                        "<resources>" {
                            "<resource>" {
                                +"<directory>\${project.basedir}/resources</directory>"
                            }
                        }
                        "<plugins>" {
                            "<plugin>" {
                                +"<groupId>org.apache.maven.plugins</groupId>"
                                +"<artifactId>maven-surefire-plugin</artifactId>"
                            }
                            "<plugin>" {
                                +"<artifactId>maven-compiler-plugin</artifactId>"
                                +"<configuration><source>1.8</source><target>1.8</target></configuration>"
                            }
                            "<plugin>" {
                                +"<artifactId>kotlin-maven-plugin</artifactId>"
                                +"<groupId>org.jetbrains.kotlin</groupId>"
                                +"<version>\${kotlin_version}</version>"
                                "<executions>" {
                                    for (test in listOf(false, true)) {
                                        val name = if (test) "test-compile" else "compile"
                                        "<execution>" {
                                            +"<id>$name</id>"
                                            +"<goals><goal>$name</goal></goals>"
                                            "<configuration>" {
                                                +"<experimentalCoroutines>enable</experimentalCoroutines>"
                                            }
                                        }
                                    }
                                }
                            }
                            "<plugin>" {
                                +"<groupId>org.apache.maven.plugins</groupId>"
                                +"<artifactId>maven-jar-plugin</artifactId>"
                                +"<version>2.6</version>"
                                "<configuration>" {
                                    "<archive>" {
                                        "<manifest>" {
                                            +"<addClasspath>true</addClasspath>"
                                            +"<mainClass>\${main.class}</mainClass>"
                                        }
                                    }
                                }
                            }
                            "<plugin>" {
                                +"<groupId>org.apache.maven.plugins</groupId>"
                                +"<artifactId>maven-assembly-plugin</artifactId>"
                                +"<version>2.6</version>"
                                "<executions>" {
                                    "<execution>" {
                                        +"<id>make-assembly</id>"
                                        +"<phase>package</phase>"
                                        +"<goals> <goal>single</goal> </goals>"
                                        "<configuration>" {
                                            "<archive>" {
                                                "<manifest>" {
                                                    +"<mainClass>\${main.class}</mainClass>"
                                                }
                                            }
                                            "<descriptorRefs>" {
                                                +"<descriptorRef>jar-with-dependencies</descriptorRef>"
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
        if (info.includeWrapper) {
            fileBinary("mvnw", mode = "755".toInt(8)) { info.fetch("maven/mvnw") }
            fileBinary("mvnw.cmd") { info.fetch("maven/mvnw.cmd") }
            for (file in listOf(
                "maven-wrapper.jar",
                "maven-wrapper.properties",
                "MavenWrapperDownloader.java"
            )) {
                fileBinary(".mvn/wrapper/$file") {
                    info.fetch("maven/wrapper/$file")
                }
            }
        }
    }
}