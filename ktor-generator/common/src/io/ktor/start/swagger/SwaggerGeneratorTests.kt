package io.ktor.start.swagger

import io.ktor.start.util.*

object SwaggerGeneratorTests {
    fun Indenter.renderTests(model: SwaggerModel) {
        +"class SwaggerBackendTest" {
            for (method in model.paths.flatMap { it.value.methodsList }) {
                +"@Test"
                +"fun test${method.methodName}()" {
                    +"withTestApplication" {
                        +"handleRequest(HttpMethod.${method.methodName.capitalize()}, \"${method.path}\") {"
                        indent {

                        }
                        +"}.apply {"
                        indent {
                            +"assertEquals(\"-\", this.response.content)"
                        }
                        +"}"
                    }
                }
            }
        }
    }
}