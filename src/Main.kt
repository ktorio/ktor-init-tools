import js.externals.jquery.*
import org.w3c.dom.*
import kotlin.browser.*

//fun jq(str: String) = jQuery(str) // BUG?
//inline fun jq(str: String) = jQuery(str)
external val jQuery: JQueryStatic<HTMLElement> = definedExternally

inline fun jq(str: String) = jQuery(str)
inline fun jq(str: HTMLElement) = jQuery(str)

//external fun JQuery.on(name: String, event: dynamic)
//inline fun JQuery<HTMLElement>.on(name: String, event: dynamic) = this.asDynamic().on(name, event)
inline fun JQuery<HTMLElement>.on(name: String, noinline event: () -> Unit) = this.asDynamic().on(name, event)
inline fun JQuery<HTMLElement>.each(noinline event: (index: Int, element: HTMLElement) -> Unit): Unit = this.asDynamic().each(event)

inline fun JQuery<HTMLElement>.change(noinline event: () -> Unit) = this.asDynamic().change(event)

const val DOLLAR = '$'

fun main(args: Array<String>) {
    //console.log(dependencies)
    addDependencies()
    registerBuildButton()
    handleFiltering()
    removeLoading()
}

fun addDependencies() {
    val deps = jq("#dependencies")
    deps.text("")

    for (dependency in dependencies) {
        deps.append(
            jq("<label for='artifact-${dependency.id}' class='artifact' />")
                .append(
                    jq("<div class='title' />")
                        .append(jq("<input id='artifact-${dependency.id}' type='checkbox' />"))
                        .append(jq("<span />").text(" ${dependency.title}"))
                        .append(jq("<span class='artifact-name' />").text(" (${dependency.artifact})"))
                )
                .append(jq("<div class='subtitle' />")
                    .append(jq("<div />").text(dependency.description))
                    .append(
                        jq("<div />")
                            .apply {
                                if (dependency.documentation != null) {
                                    append(jq("<a />").attr("href", dependency.documentation).attr("target", "_blank").text("Documentation"))
                                }
                            }
                    )
                )
        )
    }
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

                // BUILDSCRIPT
                when (projectType) {
                    "maven" -> {
                        TODO("Unsupported maven for now")
                    }
                    "gradle" -> {
                        add("$artifactName/build.gradle", indenter {
                            "buildscript" {
                                +"ext.kotlin_version = '1.2.30'"
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
                        })
                    }
                    else -> throw RuntimeException("Unknown project type $projectType")
                }
                add("$artifactName/resources/application.conf", indenter {
                    "ktor" {
                        "deployment" {
                            +"port = 8080"
                        }

                        "application" {
                            +"modules = [ $artifactGroup.ApplicationKt.main ]"
                        }
                    }
                })
                add("$artifactName/src/Application.kt", indenter {
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
                })
            })
        } catch (e: Throwable) {
            console.error(e)
            window.alert("Couldn't generate ZIP. Reason: $e")
        }
    })
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
