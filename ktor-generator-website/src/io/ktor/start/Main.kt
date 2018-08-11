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
import io.ktor.start.swagger.*
import io.ktor.start.util.*
import js.externals.jquery.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import kotlin.browser.*
import kotlin.collections.component1
import kotlin.collections.component2
import kotlin.collections.set

val swaggerModels = arrayListOf<SwaggerModel>()
var swaggerGenerators = listOf<SwaggerGenerator>()

@Suppress("unused")
fun main(args: Array<String>) {
    jq("#ktor-version").text("")
    for (version in Versions.ALL) {
        jq("#ktor-version").append(jq("<option>").attr("value", version.version).text("Ktor ${version.version}"))
    }

    jq(".intellij-plugin").css("display", "inline-block")

    jq("#include_wrapper").change { updateHash() }
    jq("#ktor-engine").change { updateHash() }
    jq("#ktor-version").change { updateHash() }
    jq("#project-type").change { updateHash() }

    jq("#artifact-group").keyup { updateHash() }
    jq("#artifact-name").keyup { updateHash() }
    jqId(artifactVersionId).keyup { updateHash() }

    jq("#add-swager-model").asDynamic().click {
        launch {
            try {
                val files = dialogOpenFile("*")
                for (file in files) {
                    if (file.name.endsWith(".json") || file.name.endsWith(".yaml")) {
                        val jsonStr = file.read().toString(UTF8)
                        val model = SwaggerModel.parseJsonOrYaml(jsonStr, filename = file.name)
                        swaggerModels += model
                        updateSwaggerModels()
                    } else {
                        error("Not a JSON or YAML file")
                    }
                }
            } catch (e: CancelException) {
                // This is OK, the user cancelled, we shouldn't report
            } catch (e: Throwable) {
                console.error(e)
                window.alert(e.toString())
            }
        }
    }

    onHashUpdated(window.location.hash)

    addDependencies()
    registerBuildButton()
    handleFiltering()
    removeLoading()
    updateHash()
    registerKeyboardUsability()
    window.onpopstate = {
        onHashUpdated(window.location.hash)
    }
    window.addEventListener("message", { event: Event ->
        val edata = (event as MessageEvent).data.asDynamic()
        if (edata && edata.type === "updateHash") {
            onHashUpdated(edata.value)
        }
        Unit
    })
}

fun updateSwaggerModels() {
    val placeholder = jq("#swagger-models-placeholder")
    placeholder.text("")

    for (model in swaggerModels) {
        val span = jq("<button type='button' class='btn btn-info' style='margin:0 4px 4px 0;'>").text(model.filename)
        span.append(jq("<span class='badge badge-light' style='margin-left:4px;'>❌</span>"))
        span.on("click") {
            swaggerModels -= model
            updateSwaggerModels()
        }
        placeholder.append(span)
        placeholder.append(jq("<span>").text("Routes: ${model.paths.size}, Defs: ${model.definitions.size}, Auths: ${model.securityDefinitions.size}"))
    }

    // Allow only one swagger model
    jq("#add-swager-model").css("display", if (swaggerModels.isEmpty()) "inline-block" else "none")

    swaggerGenerators = swaggerModels.map { SwaggerGenerator(it) }
    onHashUpdated(document.location!!.hash)
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

class DependencyChecker(val hash: String) {
    val params = parseHash(hash)
    val dependencies = (params["dependency"] as? ArrayList<String>?)?.toSet() ?: setOf()

    fun includeDependency(depId: String): Boolean {
        if (depId in dependencies) return true
        val dep = ALL_FEATURES_BY_ID[depId]
        if (dep != null) return swaggerGenerators.any { dep!! in it.blockDeps }
        return false
    }
}


fun onHashUpdated(hash: String) {
    val params = parseHash(hash)
    //println("Hash updated: ${document.location?.href}")
    jq("#include_wrapper").prop("checked", if ("no_wrapper" in params) "" else "checked")
    jq("#artifact-group").`val`(params["artifact-group"]?.firstOrNull() ?: "com.example")
    jq("#artifact-name").`val`(params["artifact-name"]?.firstOrNull() ?: "ktor-demo")
    jq("#$artifactVersionId").`val`(params[artifactVersionId]?.firstOrNull() ?: "0.0.1-SNAPSHOT")
    jq("#ktor-version").`val`(params["ktor-version"]?.firstOrNull() ?: defaultKtorVersion)
    jq("#ktor-version").`val`(params["ktor-version"]?.firstOrNull() ?: defaultKtorVersion)
    jq("#ktor-engine").`val`(params["ktor-engine"]?.firstOrNull() ?: defaultKtorEngine)
    jq("#project-type").`val`(params["project-type"]?.firstOrNull() ?: ProjectType.Gradle.id)
    val dependencies = DependencyChecker(hash)
    for (dep in ALL_FEATURES) {
        val depId = dep.id
        val res = dependencies.includeDependency(depId)
        val item = jq("#artifact-$depId")
        item.checked = res
        //console.log("[$res, ${item.checked}] :: $depId in $dependencies")
    }
    updateIndeterminate(dependencies)
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

    //document.location?.hash = items.formUrlEncode()
    window.history.pushState(jsObject(), document.title, document.location?.pathname + "#" + items.formUrlEncode())

    try {
        window.top.postMessage(jsObject("type" to "updateHash", "value" to document.location?.hash), "*")
    } catch (e: dynamic) {
        console.error(e)
    }
    val dependencies = DependencyChecker(document.location!!.hash)
    updateIndeterminate(dependencies)
}

fun updateIndeterminate(dependencies: DependencyChecker) {
    val features = FeatureSet(ALL_FEATURES.filter { jq("#artifact-${it.id}").checked })
    //println("directFeatures:$directFeatures")
    //println("allFeatures:$allFeatures")
    //println("transitiveFeatures:$transitiveFeatures")
    for (feature in ALL_FEATURES) {
        val selector = jq("#artifact-${feature.id}")
        val selected = (feature in features.all) || (swaggerGenerators.any { feature in it.blockDeps })
        val indeterminate = feature in features.transitive
        selector.prop("indeterminate", indeterminate)
        selector.closest("label")
            .toggleClass("indeterminate", indeterminate)
            .toggleClass("selected", selected)
    }
}

fun parseHash(hash: String) = try {
    hash.trim('#').formUrlDecode()
} catch (e: Throwable) {
    mapOf<String, List<String>>()
}

val hashParams: Map<String, List<String>> get() = parseHash(window.location.hash)

fun addDependencies() {
    addDependenciesKind("server", ALL_SERVER_FEATURES)
    addDependenciesKind("client", ALL_CLIENT_FEATURES)
}

fun addDependenciesKind(kind: String, features: List<Feature>) {
    val dependencyIds = (hashParams["dependency"] ?: listOf()).toSet()

    val deps = jq("#dependencies-$kind")
    deps.text("")

    for ((group, subfeatures) in features.groupBy { it.group }) {
        deps.append(jq("<h2 class='artifact-group' />").text(group))
        for (feature in subfeatures) {
            //console.log(dependency)
            val checkedBool = feature.id in dependencyIds
            val checked = if (checkedBool) "checked" else ""

            val simplifiedArtifacts = (feature.artifacts + feature.testArtifacts)
                .map {
                    it.removePrefix("io.ktor:")
                        .removeSuffix(":\$ktor_version")
                }

            deps.append(
                jq("<label for='artifact-${feature.id}' class='artifact' />")
                    .append(
                        jq("<div class='title' />")
                            .append(jq("<input id='artifact-${feature.id}' type='checkbox' $checked />"))
                            .append(jq("<span />").text(" ${feature.title}"))
                            .append(jq("<span class='artifact-name' />").text(" (${simplifiedArtifacts.joinToString(", ")})"))
                    )
                    .append(
                        jq("<div class='subtitle' />")
                            .append(jq("<div />").text(feature.description))
                            .append(
                                jq("<div />")
                                    .apply {
                                        if (feature.documentation != null) {
                                            append(
                                                jq("<a />").attr("href", feature.documentation ?: "").attr(
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
    }

    for (feature in features) {
        jq("#artifact-${feature.id}").change {
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
            val files = generate(info, (listOf(ApplicationKt) + dependenciesToInclude + swaggerGenerators))
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
    handleFiltering("server")
    handleFiltering("client")
}

fun handleFiltering(kind: String) {
    val dependencyFilter = jq("#dependency-filter-$kind")
    dependencyFilter.on("keyup") {
        val filter = dependencyFilter.`val`().unsafeCast<String>().toLowerCase()
        jq("#dependencies-$kind label.artifact").each { index, element ->
            //console.log(thiz, element)
            val visible = (filter.isEmpty() || jq(element).text().toLowerCase().contains(filter))
            if (visible) jq(element).show() else jq(element).hide()
        }
    }
}

fun removeLoading() {
    jq(".loading").removeClass("loading").addClass("loaded")
}
