import js.externals.jquery.*
import org.w3c.dom.*
import kotlin.browser.*

//fun jq(str: String) = jQuery(str) // BUG?
//inline fun jq(str: String) = jQuery(str)
external val jQuery: JQueryStatic<HTMLElement> = definedExternally

inline fun jq(str: String) = jQuery(str)

//external fun JQuery.on(name: String, event: dynamic)
//inline fun JQuery<HTMLElement>.on(name: String, event: dynamic) = this.asDynamic().on(name, event)
inline fun JQuery<HTMLElement>.on(name: String, noinline event: () -> Unit) = this.asDynamic().on(name, event)

const val DOLLAR = '$'

data class Dependency(val repo: String, val artifact: String, val title: String)
val dependencies = listOf(
    Dependency("jcenter", "org.jetbrains.kotlinx:kotlinx-html-jvm:0.6.9", "HTML DSL")
)

fun main(args: Array<String>) {
    addDependencies()
    registerBuildButton()
    removeLoading()
}

fun addDependencies() {
    for (dependency in dependencies) {
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
                                +"jcenter()"
                                +"maven { url 'https://kotlin.bintray.com/ktor' }"
                            }
                            +""
                            "dependencies" {
                                +"compile \"org.jetbrains.kotlin:kotlin-stdlib-jdk8:${DOLLAR}kotlin_version\""
                                +"compile \"io.ktor:ktor-server-$ktorEngine:${DOLLAR}ktor_version\""
                                +"compile \"io.ktor:ktor-html-builder:${DOLLAR}ktor_version\""
                                +"compile \"ch.qos.logback:logback-classic:${DOLLAR}logback_version\""
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
                    +""
                    +"fun main(args: Array<String>): Unit = $developmentPackage.main(args)"
                    +""
                    "fun Application.main()" {
                        "routing" {
                            "get(\"/\")" {
                                +"call.respondText(\"HELLO WORLD!\")"
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

fun removeLoading() {
    jq(".loading").removeClass("loading").addClass("loaded")
}
