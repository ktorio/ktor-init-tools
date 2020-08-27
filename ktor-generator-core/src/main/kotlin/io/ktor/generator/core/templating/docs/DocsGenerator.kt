package io.ktor.generator.core.templating.application

import io.ktor.generator.core.*
import io.ktor.generator.core.features.*
import io.ktor.generator.core.templating.*

fun docsGenerator(project: Project, features: Features) = makeSimpleGenerator(project, features) {
    val readme = rockerTemplate("docs/templates/readme.rocker.raw")

    generate(path = "Readme.md", template = readme)
}