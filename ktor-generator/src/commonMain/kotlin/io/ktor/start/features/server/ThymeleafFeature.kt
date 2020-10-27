package io.ktor.start.features.server

import io.ktor.start.BuildInfo
import io.ktor.start.Repos
import io.ktor.start.ServerFeature
import io.ktor.start.project.ApplicationKt
import io.ktor.start.project.addApplicationClasses
import io.ktor.start.project.addFeatureInstall
import io.ktor.start.project.addImport
import io.ktor.start.util.BlockBuilder

object ThymeleafFeature : ServerFeature(ApplicationKt, RoutingFeature) {
    override val group: String = "Templating"
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-thymeleaf:\$ktor_version")
    override val id = "thymeleaf"
    override val title = "Thymeleaf"
    override val description = "Serve HTML content using Thymeleaf template engine"
    override val documentation = "https://ktor.io/docs/thymeleaf.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("io.ktor.thymeleaf.Thymeleaf")
        addImport("io.ktor.thymeleaf.ThymeleafContent")
        addImport("org.thymeleaf.templateresolver.ClassLoaderTemplateResolver")
        addApplicationClasses {
            +"data class ThymeleafUser(val id: Int, val name: String)"
        }
        addFeatureInstall {
            "install(Thymeleaf)" {
                +"setTemplateResolver(ClassLoaderTemplateResolver().apply {"
                indent { 
                    +"prefix = \"templates/thymeleaf/\""
                    +"suffix = \".html\""
                    +"characterEncoding = \"utf-8\""
                }
                +"})"
            }
        }
        addRoute {
            "get(\"/html-thymeleaf\")" {
                +"call.respond(ThymeleafContent(\"index\", mapOf(\"user\" to ThymeleafUser(1, \"user1\"))))"
            }
        }
        fileText("resources/templates/thymeleaf/index.html") {
            +"<!DOCTYPE html >"
            +"<html xmlns:th=\"http://www.thymeleaf.org\">"
            +"<head>"
            +"<meta charset=\"UTF-8\">"
            +"<title>Title</title>"
            +"</head>"
            +"<body>"
            +"<span th:text=\"\${user.name}\"></span>"
            +"</body>"
            +"</html>"
        }
    }
}
