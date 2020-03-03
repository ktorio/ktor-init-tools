package io.ktor.start.swagger

import io.ktor.start.util.*
import kotlin.test.*

class YamlSchemaTest {
    @Test
    fun openAPITest() {
        val openAPIStream = YamlSchemaTest::javaClass.javaClass.classLoader
                .getResourceAsStream("openapi.yaml")!!
                .readBytes()
                .toString(UTF8)

        val model = SwaggerModel.parseJsonOrYaml(openAPIStream, filename = "openapi.yaml")

        val windowHierarchyChildDef = model.definitions["WindowHierarchyChild"]
                ?: error("WindowHierarchyChild does not exist")
        val expectedOptions = listOf("id", "parent", "text", "package", "checkable", "clickable", "index",
                "contentDescription", "focusable", "resourceId", "enabled", "password", "longClickable", "longText",
                "clazz", "scrollable", "selected", "checked", "focused", "bounds", "children")

        for (requiredOption in expectedOptions) {
            assertTrue { windowHierarchyChildDef.props.contains(requiredOption) }
        }

        val prop = windowHierarchyChildDef.props["children"]
        assertEquals("List<WindowHierarchyChild>", prop!!.type.toString())
    }
}