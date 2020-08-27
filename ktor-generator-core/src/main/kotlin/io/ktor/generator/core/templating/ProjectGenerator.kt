package io.ktor.generator.core.templating

import io.ktor.generator.core.*
import io.ktor.generator.core.features.*
import io.ktor.generator.core.templating.application.*
import io.ktor.generator.core.templating.build.*

/**
 * Creates the main generator that generates a whole project, including build scripts, source code, and docs.
 * */
fun projectGenerator(project: Project, features: Features) =
    buildGenerator(project, features) + appGenerator(project, features) + docsGenerator(project, features)
