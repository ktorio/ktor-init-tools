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
        val GRADLE_VERSION_DSL = "4.10.2"
    }

    @Rule
    @JvmField
    var testProjectDir = TemporaryFolder()

    fun getResourceString(name: String): String = getResourceBytes(name).toString(UTF8)

    fun getResourceBytes(name: String): ByteArray {
        val loaders = listOf(
            RoutingFeature::class.java.classLoader,
            GenerationTest::class.java.classLoader,
            ClassLoader.getSystemClassLoader()
        )
        val url = loaders.mapNotNull { it.getResource(name) ?: it.getResource("/$name") }.firstOrNull()

        val bytesUrl = url?.readBytes()
        if (bytesUrl != null) {
            return bytesUrl
        }

        for (folder in listOf("../common/resources", "src/commonMain/resources", "src/jvmTest/resources")) {
            val file = File(File(folder), name)
            val bytes = file.takeIf { it.exists() }?.readBytes() ?: continue
            return bytes
        }

        error("Can't find resource '$name' cwd=${File(".").absolutePath}")
    }

    val info = BuildInfo(
        includeWrapper = false,
        projectType = ProjectType.Gradle,
        ktorVersion = Versions.LAST,
        artifactName = "example1",
        artifactGroup = "com.example",
        artifactVersion = "0.1.0-SNAPSHOT",
        ktorEngine = KtorEngine.Netty,
        fetch = { getResourceBytes(it) }
    )

    /**
     * Verifies that a generated project compiles, and passes all the tests.
     */
    @Test
    fun testNormalGradleGeneration() {
        val testProjectRoot = testProjectDir.root
        //val testProjectRoot = File("/tmp/normal-gradle")

        val info = info
        val features = ALL_FEATURES

        runGenerationTestBlocking(info, features) {
            generate(info, features)
                .writeToFolder(testProjectRoot, print = true)

            org.gradle.testkit.runner.GradleRunner.create()
                .withProjectDir(testProjectRoot)
                .withGradleVersion(GRADLE_VERSION)
                .withArguments("check")
                .forwardOutput()
                .build()
        }
    }

    @Test
    fun testNormalGradleGenerationWithKotlinDsl() {
        val testProjectRoot = testProjectDir.root
        //val testProjectRoot = File("/tmp/normal-gradle")

        val info = info.copy(projectType = ProjectType.GradleKotlinDsl)
        val features = ALL_FEATURES

        runGenerationTestBlocking(info, features) {
            generate(info, features)
                .writeToFolder(testProjectRoot, print = true)

            org.gradle.testkit.runner.GradleRunner.create()
                .withProjectDir(testProjectRoot)
                .withGradleVersion(GRADLE_VERSION_DSL)
                .withArguments("check")
                .forwardOutput()
                .build()
        }
    }

    @Test
    fun testSwaggerGeneration() {
        val testProjectRoot = testProjectDir.root
        //val testProjectRoot = File("/tmp/swagger-gen")

        val model = SwaggerModel.parseJson(getResourceString("/swagger.json")!!)
        val info = info
        val features = listOf(SwaggerGenerator(model, SwaggerGenerator.Kind.INTERFACE))

        runGenerationTestBlocking(info, features) {
            generate(info, features).writeToFolder(testProjectRoot)

            val result = org.gradle.testkit.runner.GradleRunner.create()
                .withProjectDir(testProjectRoot)
                //.withArguments("check") // Test should fail, but the code should be valid
                .withGradleVersion(GRADLE_VERSION)
                .withArguments(
                    //"-i",
                    "compileTestKotlin"
                )
                .forwardOutput()
                .build()
        }
    }

    @Test
    fun testNormalGradleGenerationBeta() {
        val testProjectRoot = testProjectDir.root
        //val testProjectRoot = File("/tmp/normal-gradle")

        val info = info.copy(ktorVersion = Versions.LAST_EAP)
        val features = ALL_FEATURES

        runGenerationTestBlocking(info, features) {
            generate(info, features)
                .writeToFolder(testProjectRoot, print = true)

            org.gradle.testkit.runner.GradleRunner.create()
                .withProjectDir(testProjectRoot)
                .withGradleVersion(GRADLE_VERSION)
                .withArguments("-i", "check")
                .forwardOutput()
                .build()
        }
    }

    @Test
    fun testBetaWithAllFeaturesSwaggerAndKotlinDsl() {
        val testProjectRoot = testProjectDir.root
        //val testProjectRoot = File("/tmp/swagger-gen")

        val model = SwaggerModel.parseJson(getResourceString("/swagger.json")!!)
        val info = info.copy(projectType = ProjectType.GradleKotlinDsl, ktorVersion = Versions.LAST_EAP)
        val features = ALL_FEATURES + SwaggerGenerator(model, SwaggerGenerator.Kind.INTERFACE)

        runGenerationTestBlocking(info, features) {
            generate(info, features).writeToFolder(testProjectRoot)

            val result = org.gradle.testkit.runner.GradleRunner.create()
                .withProjectDir(testProjectRoot)
                //.withArguments("check") // Test should fail, but the code should be valid
                .withGradleVersion(GRADLE_VERSION)
                .withArguments(
                    //"-i",
                    "compileTestKotlin"
                )
                .forwardOutput()
                .build()
        }
    }

    @Test
    fun testResourceAvailabilityKotlinDsl() {
        val testProjectRoot = testProjectDir.root
        //val testProjectRoot = File("/tmp/swagger-gen")

        val model = SwaggerModel.parseJson(getResourceString("/swagger.json")!!)
        val info = info.copy(projectType = ProjectType.GradleKotlinDsl, ktorVersion = Versions.LAST_EAP)
        val features = ALL_FEATURES + SwaggerGenerator(model, SwaggerGenerator.Kind.INTERFACE)

        runGenerationTestBlocking(info, features) {
            generate(info, features).writeToFolder(testProjectRoot)

            testProjectRoot["src/resourcetest.kt"].writeText("""
                package io.ktor.resourcetest

                object ResourceTest {
                    @kotlin.jvm.JvmStatic fun main(args: Array<String>) {
                        check(ResourceTest::class.java.getResourceAsStream("application.conf") != null)
                    }
                }
            """.trimIndent())

            fun String.updateClassName(name: String) = replace(Regex("""mainClassName\s*=\s*"(.*)""""), "mainClassName = ${name.quote()}")

            testProjectRoot["build.gradle.kts"].updateText { it.updateClassName("io.ktor.resourcetest.ResourceTest") }

            val result = org.gradle.testkit.runner.GradleRunner.create()
                .withProjectDir(testProjectRoot)
                .withGradleVersion(GRADLE_VERSION)
                .withArguments("run")
                .forwardOutput()
                .build()
        }
    }

    private fun runGenerationTestBlocking(info: BuildInfo, features: Iterable<BuildInfoBlock>, callback: suspend () -> Unit) {
        runBlocking {
            try {
                callback()
            } catch (e: Throwable) {
                val folder = File(System.getProperty("java.io.tmpdir") + "/swagger-project")
                folder.deleteRecursively()
                println("Writing problematic project to '$folder'")
                try {
                    generate(info, features).writeToFolder(folder)
                } catch (e: Throwable) {
                    e.printStackTrace()
                }

                throw e
            }
        }
    }
}
