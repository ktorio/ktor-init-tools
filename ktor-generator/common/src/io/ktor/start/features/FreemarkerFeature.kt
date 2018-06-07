package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.project.*
import io.ktor.start.util.*

object FreemarkerFeature : Feature(ApplicationKt, RoutingFeature) {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-freemarker:\$ktor_version")
    override val id = "freemarker"
    override val title = "Freemarker"
    override val description = "Serve HTML content using Apache's FreeMarker template engine"
    override val documentation = "https://ktor.io/features/templates/freemarker.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("freemarker.cache.*")
        addImport("io.ktor.freemarker.*")
        addApplicationClasses {
            +"data class IndexData(val items: List<Int>)"
        }
        addFeatureInstall {
            "install(FreeMarker)" {
                +"templateLoader = ClassTemplateLoader(this::class.java.classLoader, \"templates\")"
            }
        }
        addRoute {
            "get(\"/html-freemarker\")" {
                +"call.respond(FreeMarkerContent(\"index.ftl\", mapOf(\"data\" to IndexData(listOf(1, 2, 3))), \"\"))"
            }
        }
        fileText("resources/templates/index.ftl") {
            +"<#-- @ftlvariable name=\"data\" type=\"${info.artifactGroup}.IndexData\" -->"
            +"<html>"
            indent {
                +"<body>"
                indent {
                    +"<ul>"
                    +"<#list data.items as item>"
                    indent {
                        +"<li>\${item}</li>"
                    }
                    +"</#list>"
                    +"</ul>"
                }
                +"</body>"
            }
            +"</html>"
        }
    }
}