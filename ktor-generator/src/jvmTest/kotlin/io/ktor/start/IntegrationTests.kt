package io.ktor.start

import io.ktor.start.features.*
import io.ktor.start.features.server.*
import io.ktor.start.swagger.*
import io.ktor.start.util.*
import kotlinx.coroutines.*
import org.junit.*
import org.junit.rules.*
import java.io.*

class IntegrationTests {
    companion object {
        val GRADLE_VERSION = "4.7"
    }

    @Rule
    @JvmField
    var testProjectDir = TemporaryFolder()

    val info = BuildInfo(
        includeWrapper = false,
        projectType = ProjectType.Gradle,
        ktorVersion = Versions.LAST,
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

    // @TODO: 'implementation gradleTestKit()' in build.gradle doesn't work

    ///**
    // * Verifies that a generated project compiles, and passes all the tests.
    // */
    //@Test
    //fun testNormalGradleGeneration() {
    //    val testProjectRoot = testProjectDir.root
    //    //val testProjectRoot = File("/tmp/normal-gradle")
    //
    //    runBlocking {
    //        generate(info, ALL_FEATURES)
    //            .writeToFolder(testProjectRoot, print = true)
    //
    //        org.gradle.testkit.runner.GradleRunner.create()
    //            .withProjectDir(testProjectRoot)
    //            .withGradleVersion(GRADLE_VERSION)
    //            .withArguments(
    //                //"-i",
    //                "check"
    //            )
    //            .forwardOutput()
    //            .build()
    //    }
    //}
    //
    //@Test
    //fun testSwaggerGeneration() {
    //    val testProjectRoot = testProjectDir.root
    //    //val testProjectRoot = File("/tmp/swagger-gen")
    //
    //    runBlocking {
    //        generate(info, SwaggerGenerator(SwaggerModel.parseJson(getResourceString("/swagger.json")!!)))
    //            .writeToFolder(testProjectRoot)
    //
    //        val result = org.gradle.testkit.runner.GradleRunner.create()
    //            .withProjectDir(testProjectRoot)
    //            //.withArguments("check") // Test should fail, but the code should be valid
    //            .withGradleVersion(GRADLE_VERSION)
    //            .withArguments(
    //                //"-i",
    //                "compileTestKotlin"
    //            )
    //            .forwardOutput()
    //            .build()
    //
    //        //println("RESULT: ${result.tasks.joinToString(", ") { it.path }}")
    //    }
    //}
}
