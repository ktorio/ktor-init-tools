package io.ktor.generator.core

import io.ktor.generator.core.features.*
import io.ktor.generator.core.templating.application.*
import io.ktor.generator.core.templating.build.*
import io.ktor.generator.core.testing.*
import io.ktor.generator.core.testing.testcases.*
import kotlin.test.*

class GeneratorTests {
    @Test
    fun testNameParsing() {
        assertEquals("", "".toMavenName(), message = "empty project name")
        assertEquals("a", "a".toMavenName(), message = "single letter project name")
        assertEquals("a9", "a9".toMavenName(), message = "project name with numbers")
        assertEquals("my-project", "My Project".toMavenName(), message = "project name with space")
        assertEquals("my-project", "My   Project".toMavenName(), message = "project name with multiple spaces")
        assertEquals("my-project", "My   Project".toMavenName(), message = "project name with tab")
        assertEquals(
            expected = "this0139wdnad-is123151qf-my-new-project",
            actual = "this0139wdnad* is123151qfçƒß√ my-new project".toMavenName(),
            message = "project name with trash characters"
        )
        assertEquals("my-pro-ject", "-My   -Pro-ject".toMavenName(), message = "project name with dashes")
    }

    @Test
    fun testGradleGenerationNoFeatures() {
        ensureFileContentIdentical(
            relativeFilePath = "no-features/gradle/build.gradle",
            generator = buildGenerator(GRADLE_PROJECT, NO_FEATURES),
            generatedFilePath = "build.gradle"
        )

        ensureFileContentIdentical(
            relativeFilePath = "no-features/gradle/settings.gradle",
            generator = buildGenerator(GRADLE_PROJECT, NO_FEATURES),
            generatedFilePath = "settings.gradle"
        )

        ensureFileContentIdentical(
            relativeFilePath = "no-features/gradle/gradle.properties",
            generator = buildGenerator(GRADLE_PROJECT, NO_FEATURES),
            generatedFilePath = "gradle.properties"
        )
    }

    @Test
    fun testGradleGenerationWithFeatures() = ensureFileContentIdentical(
        relativeFilePath = "three-features/gradle/build.gradle",
        generator = buildGenerator(GRADLE_PROJECT, THREE_FEATURES),
        generatedFilePath = "build.gradle"
    )

    @Test(expected = MissingRequiredFeatureException::class)
    fun testMissingRequiredFeatures() {
        Features.create(Engine.NETTY, listOf(CORS_FEATURE, LOCATIONS_FEATURE))
    }

    @Test
    fun testGradleKtsGenerationNoFeatures() {
        ensureFileContentIdentical(
            relativeFilePath = "no-features/gradle-kts/build.gradle.kts",
            generator = buildGenerator(GRADLE_KTS_PROJECT, NO_FEATURES),
            generatedFilePath = "build.gradle.kts"
        )

        ensureFileContentIdentical(
            relativeFilePath = "no-features/gradle-kts/settings.gradle.kts",
            generator = buildGenerator(GRADLE_KTS_PROJECT, NO_FEATURES),
            generatedFilePath = "settings.gradle.kts"
        )

        ensureFileContentIdentical(
            relativeFilePath = "no-features/gradle-kts/gradle.properties",
            generator = buildGenerator(GRADLE_KTS_PROJECT, NO_FEATURES),
            generatedFilePath = "gradle.properties"
        )
    }

    @Test
    fun testGradleKtsGenerationWithFeatures() = ensureFileContentIdentical(
        relativeFilePath = "three-features/gradle-kts/build.gradle.kts",
        generator = buildGenerator(GRADLE_KTS_PROJECT, THREE_FEATURES),
        generatedFilePath = "build.gradle.kts"
    )

    @Test
    fun testMavenGenerationNoFeatures() = ensureFileContentIdentical(
        relativeFilePath = "no-features/maven/pom.xml",
        generator = buildGenerator(MAVEN_PROJECT, NO_FEATURES),
        generatedFilePath = "pom.xml"
    )

    @Test
    fun testMavenGenerationWithFeatures() = ensureFileContentIdentical(
        relativeFilePath = "three-features/maven/pom.xml",
        generator = buildGenerator(MAVEN_PROJECT, THREE_FEATURES),
        generatedFilePath = "pom.xml"
    )

    @Test
    fun testAppGenerationNoFeatures() = ensureFileContentIdentical(
        relativeFilePath = "no-features/app/Application.kt",
        generator = appGenerator(GRADLE_PROJECT, NO_FEATURES),
        generatedFilePath = "src/main/kotlin/Application.kt"
    )

    @Test
    fun testAppGenerationWithFeatures() = ensureFileContentIdentical(
        relativeFilePath = "three-features/app/Application.kt",
        generator = appGenerator(GRADLE_PROJECT, THREE_FEATURES),
        generatedFilePath = "src/main/kotlin/Application.kt"
    )

    @Test
    fun testAppTestGenerationNoFeatures() = ensureFileContentIdentical(
        relativeFilePath = "no-features/app-test/ApplicationTest.kt",
        generator = appGenerator(GRADLE_PROJECT, NO_FEATURES),
        generatedFilePath = "src/test/kotlin/ApplicationTest.kt"
    )

    @Test
    fun testAppTestGenerationWithFeatures() = ensureFileContentIdentical(
        relativeFilePath = "three-features/app-test/ApplicationTest.kt",
        generator = appGenerator(GRADLE_PROJECT, THREE_FEATURES),
        generatedFilePath = "src/test/kotlin/ApplicationTest.kt"
    )

    @Test
    fun testReadmeGenerationNoFeatures() = ensureFileContentIdentical(
        relativeFilePath = "no-features/readme/Readme.md",
        generator = docsGenerator(GRADLE_KTS_PROJECT, NO_FEATURES),
        generatedFilePath = "Readme.md"
    )


    @Test
    fun testReadmeGenerationWithFeatures() = ensureFileContentIdentical(
        relativeFilePath = "three-features/readme/Readme.md",
        generator = docsGenerator(MAVEN_PROJECT, THREE_FEATURES),
        generatedFilePath = "Readme.md"
    )
}