package io.ktor.start.swagger

import io.ktor.start.BuildInfo
import io.ktor.start.features.server.addCustomStatusPage
import io.ktor.start.project.*
import io.ktor.start.util.Block
import io.ktor.start.util.BlockBuilder

class SwaggerGenerator(
    val model: SwaggerModel,
    val generationKind: Kind
) : Block<BuildInfo>(*model.buildDepsFromModel().toTypedArray()) {
    enum class Kind { INTERFACE, RAW }

    override fun BlockBuilder.render(info: BuildInfo) {
        addImport("kotlin.reflect.*") // For KClass
        addImport("java.util.*") // For Date

        addCustomStatusPage {
            "exception<HttpException>"(suffix = " cause ->") {
                +"call.respond(cause.code, cause.description)"
            }
        }

        val arguments = arrayListOf<SwaggerArgument>()
        if (model.securityDefinitions.isNotEmpty()) {
            SwaggerGeneratorCommon.apply {
                arguments += generateJwt(model)
            }
        }

        when (generationKind) {
            Kind.RAW -> {
                SwaggerGeneratorRaw.apply {
                    registerRoutes(info, model, arguments)
                    fileSwaggerBackendHandler("src/${model.info.classNameServer}.kt", info, model, arguments)
                    fileSwaggerFrontendHandler("src/${model.info.classNameClient}.kt", info, model)
                }
            }
            Kind.INTERFACE -> {
                SwaggerGeneratorInterface.apply {
                    registerRoutes(info, model, arguments)
                    fileSwaggerCommonInterface("src/${model.info.className}.kt", info, model)
                    fileSwaggerBackendHandler("src/${model.info.classNameServer}.kt", info, model, arguments)
                    fileSwaggerFrontendHandler("src/${model.info.classNameClient}.kt", info, model)
                }
            }
        }

        SwaggerGeneratorCommon.apply {
            fileSwaggerBackendTests("test/${model.info.classNameServerTest}.kt", info, model)
            filesHttpApi(
                "api.http",
                "http-client.env.json",
                if (model.filename.endsWith(".json")) "api.json" else "api.yaml",
                info,
                model
            )
        }
    }
}
