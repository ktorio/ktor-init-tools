package io.ktor.generator.core.templating.application

import com.fizzed.rocker.Rocker
import io.ktor.generator.core.*
import io.ktor.generator.core.features.*
import io.ktor.generator.core.templating.*

fun appGenerator(project: Project, features: Features) = makeSimpleGenerator(project, features) {
    val application = rockerTemplate("application/templates/main/application.rocker.raw")
    val applicationTest = rockerTemplate("application/templates/test/applicationTest.rocker.raw")
    val applicationConf = rockerTemplate("application/templates/resources/applicationConf.rocker.raw")
    val logbackXml = rockerTemplate("application/templates/resources/logbackXml.rocker.raw")
    val featureTemplate = rockerTemplate("application/templates/main/featureTemplate.rocker.raw")

    generate(path = "src/main/kotlin/Application.kt", template = application)
    generate(path = "src/test/kotlin/ApplicationTest.kt", template = applicationTest)
    generate(path = "resources/main/application.conf", template = applicationConf)
    generate(path = "resources/main/logback.xml", template = logbackXml)

    features.forEach { feature ->
        generate(
            path = "src/main/kotlin${feature.name}.kt",
            template = featureTemplate,
            bind = hashMapOf("feature" to feature)
        )
    }
}