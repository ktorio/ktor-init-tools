package io.ktor.start.swagger

import io.ktor.start.*
import io.ktor.start.util.*
import kotlinx.coroutines.*
import java.io.*

object GenerationSpike {
    @JvmStatic
    fun main(args: Array<String>) {
        val testProjectRoot = File("/tmp/swagger-gen")

        runBlocking {
            val swaggerJson = getResourceString("/swagger.json")

            val model = SwaggerModel.parseJson(swaggerJson)
            generate(info.copy(
                //ktorVersion = Versions.LAST
                ktorVersion = Versions.V100_alpha_2
            ), SwaggerGenerator(model, info.swaggerGenKind)).writeToFolder(testProjectRoot)
            //println("RESULT: ${result.tasks.joinToString(", ") { it.path }}")
        }
    }

    val info = BuildInfo(
        includeWrapper = false,
        projectType = ProjectType.Gradle,
        ktorVersion = Versions.LAST,
        artifactName = "example1",
        artifactGroup = "com.example",
        artifactVersion = "0.1.0-SNAPSHOT",
        ktorEngine = KtorEngine.Netty,
        swaggerGenKind = SwaggerGenerator.Kind.RAW,
        fetch = { getResourceBytes(it) }
    )

    fun getResourceBytes(name: String): ByteArray {
        //println(File("ktor-generator/src/commonMain/resources/$name").absoluteFile)
        return null
            // @TODO: Hacks because bad import
            ?: File("ktor-generator/src/jvmTest/resources/$name").takeIf { it.exists() }?.readBytes()
            ?: File("ktor-generator/src/jvmMain/resources/$name").takeIf { it.exists() }?.readBytes()
            ?: File("ktor-generator/src/commonMain/resources/$name").takeIf { it.exists() }?.readBytes()
            ?: GenerationSpike::class.java.getResourceAsStream(name)?.readBytes()
            ?: GenerationSpike::class.java.getResourceAsStream("/$name")?.readBytes()
            ?: ClassLoader.getSystemClassLoader().getResourceAsStream(name)?.readBytes()
            ?: ClassLoader.getSystemClassLoader().getResourceAsStream("/$name")?.readBytes()
            ?: error("Can't find resources '$name'")
    }

    fun getResourceString(name: String) =
        getResourceBytes(name)?.toString(Charsets.UTF_8)

    fun Map<String, FileResult>.writeToFolder(folder: File, print: Boolean = false) {
        for (fileResult in this.values) {
            if (print && fileResult.charset != null) {
                println("${fileResult.name}:")
                println(fileResult.string)
                println()
            }
            val file = File(folder, fileResult.name)
            file.parentFile.mkdirs()
            file.writeBytes(fileResult.data)
        }
    }
}