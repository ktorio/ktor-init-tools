package io.ktor.generator.core

import io.ktor.generator.core.features.*
import io.ktor.generator.core.templating.*
import io.ktor.generator.core.templating.Generator.Companion.DEFAULT_RENDERER
import io.ktor.generator.core.templating.build.*

val GRADLE_PROJECT_NETTY = Project(
    companyWebsite = "https://start.ktor.io/",
    name = "Test Project",
    ktorVersion = "1.3.2",
    kotlinVersion = "1.4.0",
    buildSystem = BuildSystem.GRADLE,
    engine = Engine.NETTY
)

val NO_EXTRA_FEATURES = Features.create(Engine.NETTY, emptyList())

fun main() {
    buildGenerator(GRADLE_PROJECT_NETTY, NO_EXTRA_FEATURES)
        .generate(DEFAULT_RENDERER.withPathRemapping { path ->
            "tmp/$path"
        })
}