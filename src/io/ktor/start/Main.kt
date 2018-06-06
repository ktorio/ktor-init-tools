package io.ktor.start

import io.ktor.start.features.*
import io.ktor.start.util.*
import js.externals.jquery.*
import kotlin.browser.*

val defaultArtifactGroup = "com.example"
val defaultArtifactName = "ktor-demo"
val defaultKtorVersion = "0.9.2"
val defaultKtorEngine = "netty"

val insideIframe: Boolean by lazy {
    try {
        window.self !== window.top
    } catch (e: dynamic) {
        true
    }
}

//val globalLocation get() = window.top.location
//val localLocation get() = window.location

var JQuery<*>.checked
    get(): Boolean = !!this.prop("checked").asDynamic()
    set(value: Boolean) {
        this.prop("checked", if (value) "checked" else "")
    }

var includeWrapper
    get() = jq("#include_wrapper").checked
    set(value) {
        jq("#include_wrapper").checked = value
    }

fun updateHash() {
    val items = LinkedHashMap<String, ArrayList<String>>()
    if (!includeWrapper) {
        items["no_wrapper"] = arrayListOf("")
    }
    val dependency = arrayListOf<String>()
    items["dependency"] = dependency
    for (dep in dependencies) {
        if (jq("#artifact-${dep.id}").checked) {
            dependency += dep.id
        }
    }
    val ktorEngine = jq("#ktor-engine").`val`()
    if (ktorEngine != defaultKtorEngine) {
        items["ktor-engine"] = arrayListOf(ktorEngine)
    }

    val ktorVersion = jq("#ktor-version").`val`()
    if (ktorVersion != defaultKtorVersion) {
        items["ktor-version"] = arrayListOf(ktorVersion)
    }

    val projectType = jq("#project-type").`val`()
    if (projectType != "gradle") {
        items["project-type"] = arrayListOf(projectType)
    }

    val artifactGroup = jq("#artifact-group").`val`()
    if (artifactGroup != defaultArtifactGroup) {
        items["artifact-group"] = arrayListOf(artifactGroup)
    }

    val artifactName = jq("#artifact-name").`val`()
    if (artifactName != defaultArtifactName) {
        items["artifact-name"] = arrayListOf(artifactName)
    }

    document.location?.hash = items.formUrlEncode()

    try {
        window.top.postMessage(jsObject("type" to "updateHash", "value" to document.location?.hash), "*")
    } catch (e: dynamic) {
        console.error(e)
    }
}

fun main(args: Array<String>) {
    //println("TEST2")
    //println(localLocation)
    //println(globalLocation)
    jq("#include_wrapper").change { updateHash() }
    jq("#ktor-engine").change { updateHash() }
    jq("#ktor-version").change { updateHash() }
    jq("#project-type").change { updateHash() }
    jq("#artifact-group").change { updateHash() }
    jq("#artifact-name").change { updateHash() }
    jq("#artifact-group").keyup { updateHash() }
    jq("#artifact-name").keyup { updateHash() }

    jq("#include_wrapper").prop("checked", if ("no_wrapper" in hashParams) "" else "checked")
    jq("#artifact-group").`val`(hashParams["artifact-group"]?.firstOrNull() ?: "com.example")
    jq("#artifact-name").`val`(hashParams["artifact-name"]?.firstOrNull() ?: "ktor-demo")
    jq("#ktor-version").`val`(hashParams["ktor-version"]?.firstOrNull() ?: defaultKtorVersion)
    jq("#ktor-engine").`val`(hashParams["ktor-engine"]?.firstOrNull() ?: defaultKtorEngine)
    jq("#ktor-version").`val`(hashParams["ktor-version"]?.firstOrNull() ?: defaultKtorVersion)

    addDependencies()
    registerBuildButton()
    handleFiltering()
    removeLoading()
    updateHash()
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

    for (dependency in dependencies) {
        //console.log(dependency)
        val checkedBool = dependency.id in dependencyIds
        val checked = if (checkedBool) "checked" else ""
        deps.append(
            jq("<label for='artifact-${dependency.id}' class='artifact' />")
                .append(
                    jq("<div class='title' />")
                        .append(jq("<input id='artifact-${dependency.id}' type='checkbox' $checked />"))
                        .append(jq("<span />").text(" ${dependency.title}"))
                        .append(jq("<span class='artifact-name' />").text(" (${dependency.artifact})"))
                )
                .append(
                    jq("<div class='subtitle' />")
                        .append(jq("<div />").text(dependency.description))
                        .append(
                            jq("<div />")
                                .apply {
                                    if (dependency.documentation != null) {
                                        append(
                                            jq("<a />").attr("href", dependency.documentation).attr(
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

    for (dependency in dependencies) {
        jq("#artifact-${dependency.id}").change {
            updateHash()
        }
    }
}

suspend fun build(dev: Boolean) {
    val projectType = jq("#project-type").`val`().unsafeCast<String>()
    val ktorEngine = jq("#ktor-engine").`val`().unsafeCast<String>()
    val ktorVersion = jq("#ktor-version").`val`().unsafeCast<String>()
    val artifactGroup = jq("#artifact-group").`val`().unsafeCast<String>()
    val artifactName = jq("#artifact-name").`val`().unsafeCast<String>()
    println("Generating ktor-sample.zip...")
    println("projectType: $projectType")
    println("ktorEngine: $ktorEngine")
    println("artifactGroup: $artifactGroup")
    println("artifactName: $artifactName")

    val dependenciesToInclude = dependencies.filter {
        jq("#artifact-${it.id}").prop("checked").unsafeCast<Boolean>()
    }.toSet()

    for (dependency in dependencies) {
        val toInclude = dependency in dependenciesToInclude
        println("DEPENDENCY: $dependency :: include=$toInclude")
    }

    val reposToInclude = (listOf("jcenter", "ktor")
            + dependenciesToInclude.flatMap { it.repos }).toSet()

    try {
        val zipBytes = buildZip {
            val developmentPackage = "io.ktor.server.$ktorEngine"
            val developmentEngineFQ = "$developmentPackage.DevelopmentEngine"

            val info = BuildInfo(
                ktorVersion = ktorVersion,
                developmentPackage = developmentPackage,
                artifactName = artifactName,
                artifactGroup = artifactGroup,
                developmentEngineFQ = developmentEngineFQ,
                reposToInclude = reposToInclude,
                dependenciesToInclude = dependenciesToInclude,
                ktorEngine = ktorEngine
            )

            fun addFile(name: String, data: ByteArray, mode: Int = "644".octal) {
                if (dev) {
                    console.warn("ADD file: $name")
                    try {
                        console.log(data.toString(UTF8))
                    } catch (e: Throwable) {
                        console.log("<binary file>")
                    }
                }
                add(name, data, mode = mode)
            }

            fun addFile(name: String, data: String, charset: Charset = UTF8, mode: Int = "644".octal) {
                addFile(name, data.toByteArray(charset), mode = mode)
            }

            // BUILDSCRIPT
            when (projectType) {
                "maven" -> addFile("$artifactName/pom.xml", indenter { buildPomXml(info.copy()) })
                "gradle" -> {
                    addFile("$artifactName/build.gradle", indenter { buildBuildGradle(info.copy()) })
                    if (includeWrapper) {
                        addFile(
                            "$artifactName/gradlew",
                            fetchFile("gradle/gradlew"),
                            mode = "755".toInt(8)
                        )
                        addFile("$artifactName/gradlew.bat", fetchFile("gradle/gradlew.bat"))
                        addFile(
                            "$artifactName/gradle/wrapper/gradle-wrapper.jar",
                            fetchFile("gradle/gradle/wrapper/gradle-wrapper.jar")
                        )
                        addFile(
                            "$artifactName/gradle/wrapper/gradle-wrapper.properties",
                            fetchFile("gradle/gradle/wrapper/gradle-wrapper.properties")
                        )
                    }
                }
                else -> throw RuntimeException("Unknown project type $projectType")
            }

            addFile("$artifactName/resources/application.conf", indenter { buildApplicationConf(info.copy()) })

            if (info.hasDependency(Dependencies.TPL_FREEMARKER)) {
                FreemarkerFeature.addFiles(info, object : FileContainer {
                    override fun add(name: String, content: ByteArray, mode: Int) {
                        addFile(name, content, mode = mode)
                    }
                })
            }

            addFile("$artifactName/src/Application.kt", indenter { buildApplicationKt(info.copy()) })
        }
        if (!dev) {
            generateBrowserFile("ktor-sample-$projectType-$ktorEngine-$artifactGroup-$artifactName.zip", zipBytes)
        }
    } catch (e: Throwable) {
        console.error(e)
        window.alert("Couldn't generate ZIP. Reason: $e")
    }
}

fun registerBuildButton() {
    if (document.location!!.hostname in setOf("127.0.0.1", "localhost")) {
        jq("#buildButtonDev").removeAttr("disabled").css("display", "inline-block").on("click", {
            launch {
                build(dev = true)
            }
        })
    }

    jq("#buildButton").removeAttr("disabled").on("click", {
        launch {
            build(dev = false)
        }
    })
}

data class BuildInfo(
    val ktorVersion: String,
    val developmentPackage: String,
    val artifactName: String,
    val artifactGroup: String,
    val developmentEngineFQ: String,
    val reposToInclude: Set<String>,
    val dependenciesToInclude: Set<Dependency>,
    val ktorEngine: String
)

fun Indenter.buildPomXml(info: BuildInfo) = info.apply {
    TODO("Unsupported Maven for now")
}

const val DOLLAR = '$'

fun Indenter.buildBuildGradle(info: BuildInfo) = info.apply {
    "buildscript" {
        +"ext.kotlin_version = '1.2.41'"
        +"ext.ktor_version = '$ktorVersion'"
        +"ext.logback_version = '1.2.1'"
        +""
        "repositories" {
            +"jcenter()"
        }
        +""
        "dependencies" {
            +"classpath \"org.jetbrains.kotlin:kotlin-gradle-plugin:${DOLLAR}kotlin_version\""
        }
    }
    +""
    +"apply plugin: 'kotlin'"
    +"apply plugin: 'application'"
    +""
    +"mainClassName = \"$developmentEngineFQ\""
    +""
    "sourceSets" {
        +"main.kotlin.srcDirs = ['src']"
        +"main.resources.srcDirs = ['resources']"
    }
    +""
    "repositories" {
        for (repo in reposToInclude) {
            when (repo) {
                "jcenter" -> +"jcenter()"
                "ktor" -> +"maven { url 'https://kotlin.bintray.com/ktor' }"
                else -> +"maven { url '$repo' }"
            }
        }
    }
    +""
    "dependencies" {
        +"compile \"org.jetbrains.kotlin:kotlin-stdlib-jdk8:${DOLLAR}kotlin_version\""
        +"compile \"io.ktor:ktor-server-$ktorEngine:${DOLLAR}ktor_version\""
        +"compile \"ch.qos.logback:logback-classic:${DOLLAR}logback_version\""
        +""
        for (dep in dependenciesToInclude) {
            +"compile \"${dep.artifact}\""
        }
        +""
        +"testCompile \"io.ktor:ktor-server-tests:${DOLLAR}ktor_version\""
    }
    +""
    +"kotlin.experimental.coroutines = 'enable'"
}

fun Indenter.buildApplicationConf(info: BuildInfo) = info.apply {
    "ktor" {
        "deployment" {
            +"port = 8080"
            +"port = \${?PORT}"
        }

        "application" {
            +"modules = [ $artifactGroup.ApplicationKt.main ]"
        }
    }
}

val VER_092 = SemVer("0.9.2")

fun BuildInfo.hasDependency(dep: Dependency): Boolean = dep in dependenciesToInclude

fun Indenter.buildApplicationKt(info: BuildInfo) = info.apply {
    val packages = LinkedHashSet<String>()

    +"package $artifactGroup"
    +""
    packages += "io.ktor.application"
    packages += "io.ktor.response"
    packages += "io.ktor.routing"
    packages += "io.ktor.http"
    if (hasDependency(Dependencies.HTML_DSL)) {
        packages += "io.ktor.html"
        packages += "kotlinx.html"
    }
    if (hasDependency(Dependencies.CSS_DSL)) {
        packages += "kotlinx.html"
        packages += "kotlinx.css"
        //packages += "kotlinx.css.properties"
    }
    if (hasDependency(Dependencies.TPL_FREEMARKER)) {
        packages += FreemarkerFeature.imports(info)
    }
    for (p in packages) {
        +"import $p.*"
    }
    +""
    if (SemVer(ktorVersion) >= VER_092) {
        +"fun main(args: Array<String>): Unit = $developmentEngineFQ.main(args)"
    } else {
        +"fun main(args: Array<String>): Unit = $developmentPackage.main(args)"
    }
    +""

    if (info.hasDependency(Dependencies.TPL_FREEMARKER)) {
        FreemarkerFeature.apply { classes(info) }
        +""
    }

    "fun Application.main()" {
        if (info.hasDependency(Dependencies.TPL_FREEMARKER)) {
            FreemarkerFeature.apply { installFeature(info) }
            +""
        }

        "routing" {
            "get(\"/\")" {
                +"call.respondText(\"HELLO WORLD!\")"
            }
            if (hasDependency(Dependencies.HTML_DSL)) {
                +""
                "get(\"/html-dsl\")" {
                    "call.respondHtml" {
                        "body" {
                            +"h1 { +\"HTML\" }"
                        }
                    }
                }
            }
            if (info.hasDependency(Dependencies.TPL_FREEMARKER)) {
                +""
                FreemarkerFeature.apply { routing(info) }
            }
            if (hasDependency(Dependencies.CSS_DSL)) {
                +""
                "get(\"/styles.css\")" {
                    "call.respondCss" {
                        "body" {
                            +"backgroundColor = Color.red"
                        }
                        "p" {
                            +"fontSize = 2.em"
                        }
                        "rule(\"p.myclass\")" {
                            +"color = Color.blue"
                        }
                    }
                }
            }
        }
    }

    if (hasDependency(Dependencies.CSS_DSL)) {
        +""
        "fun FlowOrMetaDataContent.styleCss(builder: CSSBuilder.() -> Unit)" {
            "style(type = ContentType.Text.CSS.toString())" {
                +"+CSSBuilder().apply(builder).toString()"
            }
        }

        "fun CommonAttributeGroupFacade.style(builder: CSSBuilder.() -> Unit)" {
            +"this.style = CSSBuilder().apply(builder).toString().trim()"
        }

        "suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit)" {
            +"this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)"
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
