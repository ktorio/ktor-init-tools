package io.ktor.start

fun getResourceBytes(name: String) =
    null
            ?: SwaggerGenerationTest::class.java.getResourceAsStream(name)?.readBytes()
            ?: SwaggerGenerationTest::class.java.getResourceAsStream("/$name")?.readBytes()
            ?: ClassLoader.getSystemClassLoader().getResourceAsStream(name)?.readBytes()
            ?: ClassLoader.getSystemClassLoader().getResourceAsStream("/$name")?.readBytes()

fun getResourceString(name: String) =
    getResourceBytes(name)?.toString(Charsets.UTF_8)

