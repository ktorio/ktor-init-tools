package io.ktor.start.swagger

import io.ktor.start.BuildInfo
import io.ktor.start.features.server.addAuthProvider
import io.ktor.start.features.server.addCustomStatusPage
import io.ktor.start.project.*
import io.ktor.start.util.Block
import io.ktor.start.util.BlockBuilder
import io.ktor.start.util.quote
import io.ktor.start.util.unaryPlus

class SwaggerGenerator(val model: SwaggerModel) : Block<BuildInfo>(*model.buildDepsFromModel().toTypedArray()) {
    override fun BlockBuilder.render(info: BuildInfo) {
        addImport("kotlin.reflect.*") // For KClass
        addImport("java.util.*") // For Date
        addApplicationClasses {
        }
        addExtensionMethods {
        }
        addCustomStatusPage {
            "exception<HttpException>"(suffix = " cause ->") {
                +"call.respond(cause.code, cause.description)"
            }
        }

        val arguments = arrayListOf<SwaggerArgument>()
        if (model.securityDefinitions.isNotEmpty()) {
            addImport("io.ktor.auth.*")
            addImport("io.ktor.auth.jwt.*")
            addImport("com.auth0.jwt.*")
            addImport("com.auth0.jwt.algorithms.*")

            addHoconTop {
                +"jwt" {
                    +"secret = \"TODO-change-this-supersecret-or-use-SECRET-env\""
                    +"secret = \${?SECRET}"
                }
            }

            addApplicationClasses {
                +"open class MyJWT(val secret: String)" {
                    +"private val algorithm = Algorithm.HMAC256(secret)"
                    +"val verifier = JWT.require(algorithm).build()"
                    +"fun sign(name: String): String = JWT.create().withClaim(\"name\", name).sign(algorithm)"
                }
            }

            addAuthProvider {
                arguments += SwaggerArgument("val myjwt: MyJWT", "myjwt")
                for (sec in model.securityDefinitions.values) {
                    +"// ---------------"
                    +"// @TODO: Please, edit the application.conf # jwt.secret property and provide a secure random value for it"
                    +"// ---------------"
                    for (descLine in sec.description.lines()) {
                        +"// $descLine"
                    }
                    +"jwt(${sec.id.quote()})" {
                        +"authSchemes(\"Bearer\", \"Token\")"
                        +"verifier(myjwt.verifier)"
                        +"validate" {
                            +"UserIdPrincipal(it.payload.getClaim(\"name\").asString())"
                        }
                    }
                }
            }

            prependSeparated(ApplicationKt.MODULE_INSTALL) {
                +"val myjwt = MyJWT(secret = environment.config.property(\"jwt.secret\").getString())"
            }
        }

        SwaggerGeneratorInterface.apply {
            registerInterfaceRoutes(info, model, arguments)
            fileSwaggerCommonInterface("src/${model.info.className}.kt", info, model)
            fileSwaggerBackendHandler("src/${model.info.classNameServer}.kt", info, model, arguments)
            fileSwaggerFrontendHandler("src/${model.info.classNameClient}.kt", info, model)
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
