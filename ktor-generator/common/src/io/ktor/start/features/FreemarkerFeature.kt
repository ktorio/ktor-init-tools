package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.util.*

object FreemarkerFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-freemarker:\$ktor_version")
    override val id = "freemarker"
    override val title = "Freemarker"
    override val description = "Serve HTML content using Apache's FreeMarker template engine"
    override val documentation = "https://ktor.io/features/templates/freemarker.html"

    override fun imports(info: BuildInfo) = listOf(
        "freemarker.cache.*",
        "io.ktor.freemarker.*"
    )

    override fun Indenter.classes(info: BuildInfo) {
        +"data class IndexData(val items: List<Int>)"
    }

    override fun Indenter.installFeature(info: BuildInfo) {
        "install(FreeMarker)" {
            +"templateLoader = ClassTemplateLoader(this::class.java.classLoader, \"templates\")"
        }
    }

    override fun Indenter.routing(info: BuildInfo) {
        "get(\"/html-freemarker\")" {
            +"call.respond(FreeMarkerContent(\"index.ftl\", mapOf(\"data\" to IndexData(listOf(1, 2, 3))), \"\"))"
        }
    }

    override fun Indenter.extensions(info: BuildInfo) {
    }

    override suspend fun addFiles(info: BuildInfo, files: FileContainer, fetcher: FileFetcher) {
        files.add("${info.artifactName}/resources/templates/index.ftl", indenter {
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
        })
    }
}