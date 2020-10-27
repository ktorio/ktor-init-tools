package io.ktor.start.features.server

import io.ktor.start.BuildInfo
import io.ktor.start.Repos
import io.ktor.start.ServerFeature
import io.ktor.start.project.ApplicationKt
import io.ktor.start.project.addApplicationClasses
import io.ktor.start.project.addFeatureInstall
import io.ktor.start.project.addImport
import io.ktor.start.util.BlockBuilder

object MustacheFeature : ServerFeature(ApplicationKt, RoutingFeature) {
    override val group: String = "Templating"
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-mustache:\$ktor_version")
    override val id = "mustache"
    override val title = "Mustache"
    override val description = "Serve HTML content using Mustache template engine"
    override val documentation = "https://ktor.io/docs/mustache.html"

    override fun BlockBuilder.renderFeature(info: BuildInfo) {
        addImport("com.github.mustachejava.DefaultMustacheFactory")
        addImport("io.ktor.mustache.Mustache")
        addImport("io.ktor.mustache.MustacheContent")
        addApplicationClasses {
            +"data class MustacheUser(val id: Int, val name: String)"
        }
        addFeatureInstall {
            "install(Mustache)" {
                +"mustacheFactory = DefaultMustacheFactory(\"templates/mustache\")"
            }
        }
        addRoute {
            "get(\"/html-mustache\")" {
                +"call.respond(MustacheContent(\"index.hbs\", mapOf(\"user\" to MustacheUser(1, \"user1\"))))"
            }
        }
        fileText("resources/templates/mustache/index.hbs") {
            +"<html>"
            +"<body>"
            +"<p>Hello, {{user.name}}</p>"
            +"</body>"
            +"</html>"
        }
    }
}
