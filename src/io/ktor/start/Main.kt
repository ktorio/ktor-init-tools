package io.ktor.start

import io.ktor.start.util.*
import kotlin.browser.*

fun main(args: Array<String>) {
    addDependencies()
    registerBuildButton()
    handleFiltering()
    removeLoading()
}

val hashParams: Map<String, List<String>> by lazy {
    try {
        window.location.hash.trim('#').formUrlDecode()
    } catch (e: Throwable) {
        mapOf<String, List<String>>()
    }
}

fun String.formUrlDecode(): Map<String, List<String>> = this.split('&')
    .map { val (key, value) = it.split('=', limit = 2); key to value }
    .groupBy { it.first }
    .map { it.key to it.value.map { it.second } }
    .toMap()

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

    jq("#artifact-group").`val`(hashParams["artifact-group"]?.firstOrNull() ?: "com.example")
    jq("#artifact-name").`val`(hashParams["artifact-name"]?.firstOrNull() ?: "ktor-demo")
    jq("#ktor-version").`val`(hashParams["ktor-version"]?.firstOrNull() ?: "0.9.2")
}

fun registerBuildButton() {
    jq("#buildButton").removeAttr("disabled").on("click", {
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
                + dependenciesToInclude.map { it.repo }).toSet()

        try {
            download("ktor-sample-$projectType-$ktorEngine-$artifactGroup-$artifactName.zip", buildZip {

                val developmentPackage = "io.ktor.server.$ktorEngine"
                val developmentEngineFQ = "$developmentPackage.DevelopmentEngine"

                val info = BuildInfo(
                    ktorVersion = ktorVersion,
                    developmentPackage = developmentPackage,
                    artifactGroup = artifactGroup,
                    developmentEngineFQ = developmentEngineFQ,
                    reposToInclude = reposToInclude,
                    dependenciesToInclude = dependenciesToInclude,
                    ktorEngine = ktorEngine
                )

                // BUILDSCRIPT
                when (projectType) {
                    "maven" -> add("$artifactName/pom.xml", indenter { buildPomXml(info) })
                    "gradle" -> add("$artifactName/build.gradle", indenter { buildBuildGradle(info) })
                    else -> throw RuntimeException("Unknown project type $projectType")
                }

                add("$artifactName/resources/application.conf", indenter { buildApplicationConf(info) })
                add("$artifactName/src/Application.kt", indenter { buildApplicationKt(info) })
            })
        } catch (e: Throwable) {
            console.error(e)
            window.alert("Couldn't generate ZIP. Reason: $e")
        }
    })
}

data class BuildInfo(
    val ktorVersion: String,
    val developmentPackage: String,
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
        }

        "application" {
            +"modules = [ $artifactGroup.ApplicationKt.main ]"
        }
    }
}

fun Indenter.buildApplicationKt(info: BuildInfo) = info.apply {
    +"package $artifactGroup"
    +""
    +"import io.ktor.application.*"
    +"import io.ktor.response.*"
    +"import io.ktor.routing.*"
    if (Dependencies.HTML_DSL in dependenciesToInclude) {
        +"import io.ktor.html.*"
        +"import kotlinx.html.*"
    }
    +""
    +"fun main(args: Array<String>): Unit = $developmentPackage.main(args)"
    +""
    "fun Application.main()" {
        "routing" {
            "get(\"/\")" {
                +"call.respondText(\"HELLO WORLD!\")"
            }
            +""
            if (Dependencies.HTML_DSL in dependenciesToInclude) {
                "get(\"/html\")" {
                    "call.respondHtml" {
                        "body" {
                            +"h1 { +\"HTML\" }"
                        }
                    }

                }
            }
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
