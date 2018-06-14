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

package io.ktor.start

import io.ktor.start.features.*
import io.ktor.start.project.*
import io.ktor.start.util.*
import js.externals.jquery.*
import kotlin.browser.*

@Suppress("unused")
fun main(args: Array<String>) {
    jq(".intellij-plugin").css("display", "inline-block")

    jq("#include_wrapper").change { updateHash() }
    jq("#ktor-engine").change { updateHash() }
    jq("#ktor-version").change { updateHash() }
    jq("#project-type").change { updateHash() }

    jq("#artifact-group").keyup { updateHash() }
    jq("#artifact-name").keyup { updateHash() }
    jqId(artifactVersionId).keyup { updateHash() }

    jq("#include_wrapper").prop("checked", if ("no_wrapper" in hashParams) "" else "checked")
    jq("#artifact-group").`val`(hashParams["artifact-group"]?.firstOrNull() ?: "com.example")
    jq("#artifact-name").`val`(hashParams["artifact-name"]?.firstOrNull() ?: "ktor-demo")
    jq("#$artifactVersionId").`val`(hashParams[artifactVersionId]?.firstOrNull() ?: "0.0.1-SNAPSHOT")
    jq("#ktor-version").`val`(hashParams["ktor-version"]?.firstOrNull() ?: defaultKtorVersion)
    jq("#ktor-engine").`val`(hashParams["ktor-engine"]?.firstOrNull() ?: defaultKtorEngine)
    jq("#ktor-version").`val`(hashParams["ktor-version"]?.firstOrNull() ?: defaultKtorVersion)
    jq("#project-type").`val`(hashParams["project-type"]?.firstOrNull() ?: ProjectType.Gradle.id)

    addDependencies()
    registerBuildButton()
    handleFiltering()
    removeLoading()
    updateHash()
    registerKeyboardUsability()
}

val defaultArtifactGroup = "com.example"
val defaultArtifactName = "ktor-demo"
val defaultArtifactVersion = "0.0.1-SNAPSHOT"
val defaultKtorVersion = Versions.LAST.version
val defaultKtorEngine = "netty"

val artifactGroupId = "artifact-group"
val artifactNameId = "artifact-name"
val artifactVersionId = "artifact-version"

var JQuery<*>.checked: Boolean
    get() = !!this.prop("checked").asDynamic()
    set(value) = run { this.prop("checked", if (value) "checked" else "") }

var includeWrapper
    get() = jq("#include_wrapper").checked
    set(value) {
        jq("#include_wrapper").checked = value
    }

fun updateHash() {
    val items = LinkedHashMap<String, ArrayList<String>>()
    if (!includeWrapper) items["no_wrapper"] = arrayListOf("")
    val dependency = arrayListOf<String>()
    items["dependency"] = dependency
    for (dep in ALL_FEATURES) {
        if (jq("#artifact-${dep.id}").checked) dependency += dep.id
    }
    val ktorEngine = jq("#ktor-engine").`val`()
    if (ktorEngine != defaultKtorEngine) items["ktor-engine"] = arrayListOf(ktorEngine)

    val ktorVersion = jq("#ktor-version").`val`()
    if (ktorVersion != defaultKtorVersion) items["ktor-version"] = arrayListOf(ktorVersion)

    val projectType = jq("#project-type").`val`()
    if (projectType != "gradle") items["project-type"] = arrayListOf(projectType)

    for ((key, default) in listOf(
        artifactGroupId to defaultArtifactGroup,
        artifactNameId to defaultArtifactName,
        artifactVersionId to defaultArtifactVersion
    )) {
        val str = jqId(key).`val`()
        if (str != default) items[key] = arrayListOf(str)
    }

    document.location?.hash = items.formUrlEncode()

    try {
        window.top.postMessage(jsObject("type" to "updateHash", "value" to document.location?.hash), "*")
    } catch (e: dynamic) {
        console.error(e)
    }
}

val hashParams: Map<String, List<String>> by lazy {
    try {
        window.location.hash.trim('#').formUrlDecode()
    } catch (e: Throwable) {
        mapOf<String, List<String>>()
    }
}

// @TODO: Encode
fun String.formUrlDecode(): Map<String, List<String>> = this.split('&')
    .map { val (key, value) = it.split('=', limit = 2) + listOf(""); key to value }
    .groupBy { it.first }
    .map { it.key to it.value.map { it.second } }
    .toMap()

fun List<Pair<String, String>>.formUrlEncode(): String {
    return this.joinToString("&") { if (it.second.isNotEmpty()) "${it.first}=${it.second}" else it.first }
}

fun Map<String, List<String>>.formUrlEncode(): String {
    return entries.flatMap { entry -> entry.value.map { entry.key to it } }.formUrlEncode()
}

fun addDependencies() {
    val deps = jq("#dependencies")
    deps.text("")

    val dependencyIds = (hashParams["dependency"] ?: listOf()).toSet()

    for (dependency in ALL_FEATURES) {
        //console.log(dependency)
        val checkedBool = dependency.id in dependencyIds
        val checked = if (checkedBool) "checked" else ""
        deps.append(
            jq("<label for='artifact-${dependency.id}' class='artifact' />")
                .append(
                    jq("<div class='title' />")
                        .append(jq("<input id='artifact-${dependency.id}' type='checkbox' $checked />"))
                        .append(jq("<span />").text(" ${dependency.title}"))
                        .append(jq("<span class='artifact-name' />").text(" (${dependency.artifacts.joinToString(", ")})"))
                )
                .append(
                    jq("<div class='subtitle' />")
                        .append(jq("<div />").text(dependency.description))
                        .append(
                            jq("<div />")
                                .apply {
                                    if (dependency.documentation != null) {
                                        append(
                                            jq("<a />").attr("href", dependency.documentation ?: "").attr(
                                                "target",
                                                "_blank"
                                            ).text("Documentation")
                                        )
                                    }
                                }
                        )
                )
        )
    }

    for (dependency in ALL_FEATURES) {
        jq("#artifact-${dependency.id}").change {
            updateHash()
        }
    }
}

suspend fun build(dev: Boolean) {
    val projectType = jq("#project-type").`val`().unsafeCast<String>()
    val ktorEngine = jq("#ktor-engine").`val`().unsafeCast<String>()
    val ktorVersion = jq("#ktor-version").`val`().unsafeCast<String>()
    val artifactGroup = jqId(artifactGroupId).`val`().unsafeCast<String>()
    val artifactName = jqId(artifactNameId).`val`().unsafeCast<String>()
    val artifactVersion = jqId(artifactVersionId).`val`().unsafeCast<String>()
    println("Generating ktor-sample.zip...")
    println("projectType: $projectType")
    println("ktorEngine: $ktorEngine")
    println("artifactGroup: $artifactGroup")
    println("artifactName: $artifactName")
    println("artifactVersion: $artifactVersion")

    val dependenciesToInclude = ALL_FEATURES.filter {
        jq("#artifact-${it.id}").prop("checked").unsafeCast<Boolean>()
    }.toSet()

    for (dependency in ALL_FEATURES) {
        val toInclude = dependency in dependenciesToInclude
        println("DEPENDENCY: $dependency :: include=$toInclude")
    }

    val info = BuildInfo(
        includeWrapper = includeWrapper,
        projectType = ProjectType(projectType),
        ktorVersion = SemVer(ktorVersion),
        artifactName = artifactName,
        artifactGroup = artifactGroup,
        artifactVersion = artifactVersion,
        ktorEngine = KtorEngine(ktorEngine),
        fetch = { fetchFile(it) }
    )
    try {
        val zipBytes = buildZip {
            val files = generate(info, (listOf(ApplicationKt) + dependenciesToInclude))
            for ((file, result) in files) {
                val rname = "${info.artifactName}/$file"
                if (dev) {
                    console.warn("ADD file: $rname")
                    try {
                        console.log(result.data.toString(UTF8))
                    } catch (e: Throwable) {
                        console.log("<binary file>")
                    }
                }
                this@buildZip.add(rname, result.data, mode = result.mode)
            }
        }
        if (!dev) {
            generateBrowserFile(
                "ktor-sample-$projectType-$ktorEngine-$artifactGroup-$artifactName.zip",
                zipBytes
            )
        }
    } catch (e: Throwable) {
        console.error(e)
        window.alert("Couldn't generate ZIP. Reason: $e")
    }
}

val isLocalEnv get() = document.location!!.hostname in setOf("127.0.0.1", "localhost")

fun registerBuildButton() {
    if (isLocalEnv) {
        jq("#buildButtonDev").removeAttr("disabled").css("display", "inline-block").on("click") {
            launch {
                build(dev = true)
            }
        }
    }

    jq("#buildButton").removeAttr("disabled").on("click") {
        launch {
            build(dev = false)
        }
    }
}


fun handleFiltering() {
    val dependencyFilter = jq("#dependency-filter")
    dependencyFilter.on("keyup") {
        val filter = dependencyFilter.`val`().unsafeCast<String>().toLowerCase()
        jq("label.artifact").each { index, element ->
            //console.log(thiz, element)
            val visible = (filter.isEmpty() || jq(element).text().toLowerCase().contains(filter))
            if (visible) jq(element).show() else jq(element).hide()
        }
    }
}

fun removeLoading() {
    jq(".loading").removeClass("loading").addClass("loaded")
}
