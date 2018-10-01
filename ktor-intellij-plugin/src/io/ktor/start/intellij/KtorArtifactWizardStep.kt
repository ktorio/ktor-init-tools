/*
 * Copyright 2018 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package io.ktor.start.intellij

import com.intellij.ide.util.projectWizard.*
import com.intellij.openapi.fileChooser.*
import com.intellij.openapi.ui.*
import com.intellij.uiDesigner.core.*
import io.ktor.start.intellij.util.*
import io.ktor.start.swagger.*
import io.ktor.start.util.*
import java.awt.event.*
import javax.swing.*

class KtorArtifactWizardStep(val config: KtorModuleConfig) : ModuleWizardStep() {
    val groupId: JTextField
    val artifactId: JTextField
    val version: JTextField
    val swaggerGenTypeLabel: JLabel
    val swaggerGenTypeCB: JComboBox<DisplaySwaggerGeneratorKind>

    val panel = JPanel().apply {
        layout = GridLayoutManager(7, 2)
        fun addLabelText(name: String, value: String, row: Int): JTextField {
            val tfield = JTextField(value)
            addAtGrid(
                JLabel(name),
                row = row,
                column = 0,
                anchor = GridConstraints.ANCHOR_WEST,
                fill = GridConstraints.FILL_NONE,
                HSizePolicy = GridConstraints.SIZEPOLICY_FIXED,
                VSizePolicy = GridConstraints.SIZEPOLICY_FIXED
            )
            addAtGrid(
                tfield,
                row = row,
                column = 1,
                anchor = GridConstraints.ANCHOR_WEST,
                fill = GridConstraints.FILL_HORIZONTAL,
                HSizePolicy = GridConstraints.SIZEPOLICY_CAN_GROW or GridConstraints.SIZEPOLICY_WANT_GROW,
                VSizePolicy = GridConstraints.SIZEPOLICY_FIXED
            )
            return tfield
        }
        addAtGrid(
            JLabel(""),
            row = 0,
            column = 0,
            HSizePolicy = GridConstraints.SIZEPOLICY_FIXED,
            VSizePolicy = GridConstraints.SIZEPOLICY_FIXED
        )
        groupId = addLabelText("GroupId", config.artifactGroup, row = 1)
        artifactId = addLabelText("ArtifactId", config.artifactId, row = 2)
        version = addLabelText("Version", config.artifactVersion, row = 3)
        swaggerGenTypeLabel = JLabel("Generation style:")
        swaggerGenTypeCB = JComboBox(SwaggerGenerator.Kind.values().map { DisplaySwaggerGeneratorKind(it) }.toTypedArray())
        //swaggerGenTypeCB.selectedItem = swaggerGenTypeCB.items.first { it.kind == SwaggerGenerator.Kind.RAW }
        swaggerGenTypeCB.selectedItem = DisplaySwaggerGeneratorKind(SwaggerGenerator.Kind.RAW)
        val addModelButton = JButton("Add Swagger Model...")
        val modelLabel = JLabel("")

        fun updateModelLabel() {
            val model = config.swaggerModules.firstOrNull()
            if (model != null) {
                modelLabel.text =
                        "${model.filename}, Routes: ${model.routes.size}, Defs: ${model.definitions.size}, SecDefs: ${model.securityDefinitions.size} (click to remove ❌)"
            } else {
                modelLabel.text = ""
            }

            swaggerGenTypeLabel.isVisible = model != null
            swaggerGenTypeCB.isVisible = model != null
            addModelButton.isVisible = model == null
        }

        modelLabel.addMouseListener(object : MouseAdapter() {
            override fun mouseClicked(e: MouseEvent?) {
                config.swaggerModules = listOf()
                updateModelLabel()
            }
        })

        addAtGrid(
            modelLabel, row = 4, column = 1,
            HSizePolicy = GridConstraints.SIZEPOLICY_FIXED,
            VSizePolicy = GridConstraints.SIZEPOLICY_FIXED,
            fill = GridConstraints.FILL_NONE
        )
        addAtGrid(
            addModelButton.apply {
                addActionListener {
                    try {
                        val file = FileChooser.chooseFile(
                            FileChooserDescriptor(true, false, false, false, false, false), null, null
                        )
                        if (file != null) {
                            val fileStr = file.inputStream.readBytes().toString(UTF8)
                            val model = SwaggerModel.parseJsonOrYaml(fileStr, filename = file.name)
                            config.swaggerModules = listOf(model)
                        } else {
                            config.swaggerModules = listOf()
                        }
                    } catch (e: Throwable) {
                        Messages.showErrorDialog(e.message, "Error")
                    }
                    updateModelLabel()
                }
            },
            row = 4, column = 0,
            HSizePolicy = GridConstraints.SIZEPOLICY_FIXED,
            VSizePolicy = GridConstraints.SIZEPOLICY_FIXED
        )
        addAtGrid(
            swaggerGenTypeLabel,
            row = 5, column = 0,
            anchor = GridConstraints.ANCHOR_NORTHWEST
        )
        addAtGrid(swaggerGenTypeCB.apply {
            //addActionListener {
            //    println(it)
            //}
        }, row = 5, column = 1,
            HSizePolicy = GridConstraints.SIZEPOLICY_WANT_GROW,
            VSizePolicy = GridConstraints.SIZEPOLICY_FIXED,
            fill = GridConstraints.FILL_HORIZONTAL,
            anchor = GridConstraints.ANCHOR_NORTHWEST
        )
        add(Spacer().apply {}, GridConstraints().apply {
            colSpan = 2
            row = 6
            column = 0
            fill = GridConstraints.FILL_VERTICAL
        })

        updateModelLabel()

    }

    override fun updateDataModel() {
        config.artifactGroup = groupId.text
        config.artifactId = artifactId.text
        config.artifactVersion = version.text
        config.swaggerGenKind = swaggerGenTypeCB.selected.kind
    }

    override fun getComponent() = panel
}

data class DisplaySwaggerGeneratorKind(val kind: SwaggerGenerator.Kind) {
    override fun toString(): String = when (kind) {
        SwaggerGenerator.Kind.RAW -> "Raw Style (separated server and client)"
        SwaggerGenerator.Kind.INTERFACE -> "Interface-like Style (server and client share a single interface)"
    }
}