package io.ktor.start

import io.ktor.start.features.*
import io.ktor.start.features.server.*
import io.ktor.start.swagger.*
import io.ktor.start.util.*
import kotlinx.coroutines.experimental.*
import org.gradle.testkit.runner.*
import org.junit.*
import org.junit.rules.*
import java.io.*

class IntegrationTests {
    @Rule
    @JvmField
    var testProjectDir = TemporaryFolder()

    val info = BuildInfo(
        includeWrapper = false,
        projectType = ProjectType.Gradle,
        ktorVersion = Versions.V093,
        artifactName = "example1",
        artifactGroup = "com.example",
        artifactVersion = "0.1.0-SNAPSHOT",
        ktorEngine = KtorEngine.Netty,
        fetch = { name ->
            val loaders = listOf(
                RoutingFeature::class.java.classLoader,
                GenerationTest::class.java.classLoader,
                ClassLoader.getSystemClassLoader()
            )
            val url = loaders.mapNotNull { it.getResource(name) ?: it.getResource("/$name") }.firstOrNull()
            val file = File(File("../common/resources"), name)
            url?.readBytes() ?: file.takeIf { it.exists() }?.readBytes() ?: error("Can't find resource '$name'")
        }
    )

    /**
     * Verifies that a generated project compiles, and passes all the tests.
     */
    @Test
    fun testNormalGradleGeneration() {
        runBlocking {
            generate(info, ALL_FEATURES)
                .writeToFolder(testProjectDir.root)

            GradleRunner.create()
                .withProjectDir(testProjectDir.root)
                .withArguments("check")
                .forwardOutput()
                .build()
        }
    }

    @Test
    fun testSwaggerGeneration() {
        runBlocking {
            generate(info, SwaggerGenerator(SwaggerModel.parseJson(getResourceString("/swagger.json")!!)))
                .writeToFolder(testProjectDir.root)

            val result = GradleRunner.create()
                .withProjectDir(testProjectDir.root)
                .withArguments("check")
                .forwardOutput()
                .build()

            println("RESULT: $result")
            println("RESULT: ${result.output}")
            println("RESULT: ${result.tasks.joinToString(", ") { it.path }}")
        }
    }
}
