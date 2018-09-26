package io.ktor.start.swagger

import io.ktor.start.BuildInfo
import io.ktor.start.util.BlockBuilder

object SwaggerGeneratorRaw {

    fun BlockBuilder.registerRoutes(info: BuildInfo, model: SwaggerModel, arguments: ArrayList<SwaggerArgument>) {
        TODO()
    }

    fun BlockBuilder.fileSwaggerBackendHandler(
        fileName: String,
        info: BuildInfo,
        model: SwaggerModel,
        arguments: ArrayList<SwaggerArgument>
    ) {
        TODO()
    }

    fun BlockBuilder.fileSwaggerFrontendHandler(fileName: String, info: BuildInfo, model: SwaggerModel) {
        TODO()
    }

}
