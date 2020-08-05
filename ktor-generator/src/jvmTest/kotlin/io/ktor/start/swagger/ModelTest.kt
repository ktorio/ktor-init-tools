package io.ktor.start.swagger

import org.junit.Test
import kotlin.test.assertEquals

class ModelTest {
    @Test
    fun `support default value for float type`() {
        assertEquals(0.0f, SwaggerModel.FloatType.toDefaultUntyped())
        assertEquals(42.0f, SwaggerModel.FloatType.toDefaultUntyped(emptyList(), 42.0))
    }
}