package io.ktor.start.intellij

import com.intellij.ide.util.projectWizard.*
import com.intellij.ui.components.*
import io.ktor.start.*
import io.ktor.start.features.*
import io.ktor.start.intellij.util.*
import io.ktor.start.util.*
import java.awt.*
import javax.swing.*

class KtorModuleWizardStep(val config: KtorModuleConfig) : ModuleWizardStep() {
    override fun updateDataModel() {
        config.projectType = projectTypeCB.selectedItem as ProjectType
        config.featuresToInstall = featuresToCheckbox.keys.filter { it.selected }
        config.ktorVersion = versionCB.selected
        config.wrapper = wrapperCheckBox.isSelected
        config.engine = engineCB.selected
    }

    lateinit var projectTypeCB: JComboBox<ProjectType>
    lateinit var engineCB: JComboBox<KtorEngine>
    lateinit var versionCB: JComboBox<SemVer>
    lateinit var wrapperCheckBox: JCheckBox
    val featuresToCheckbox = LinkedHashMap<Feature, JCheckBox>()
    val panel = JPanel().apply {
        layout = BoxLayout(this, BoxLayout.Y_AXIS)
        add(JPanel().apply {
            layout = BoxLayout(this, BoxLayout.X_AXIS)
            add(JLabel("Project:"))
            add(JComboBox(ProjectType.values()).apply {
                projectTypeCB = this
            })
            add(JCheckBox("Wrapper", true).apply {
                wrapperCheckBox = this
            })
            add(JLabel("Using:"))
            add(JComboBox(KtorEngine.values()).apply {
                engineCB = this
            })
            add(JLabel("Ktor Version:"))
            add(JComboBox(Versions.ALL).apply {
                versionCB = this
            })
        })
        add(JLabel("Features:", SwingConstants.LEFT).apply {
            alignmentX = Component.LEFT_ALIGNMENT
        })
        add(
            JBScrollPane(
                JPanel().apply {
                    layout = BoxLayout(this, BoxLayout.Y_AXIS)
                    //border = IdeBorderFactory.createBorder()
                    for (feature in ALL_FEATURES) {
                        add(JCheckBox(feature.title).apply {
                            featuresToCheckbox[feature] = this
                            addActionListener {
                                updatedFeature(feature)
                            }
                        })
                    }
                },
                JBScrollPane.VERTICAL_SCROLLBAR_ALWAYS,
                JBScrollPane.HORIZONTAL_SCROLLBAR_NEVER
            )
        )
    }

    var Feature.selected: Boolean
        get() = featuresToCheckbox[this]?.isSelected ?: false
        set(value) {
            featuresToCheckbox[this]?.isSelected = value
        }

    fun updatedFeature(feature: Feature) {
        if (feature.selected) {
            for (feat in feature.featureDeps) {
                feat.selected = true
            }
        }
    }

    override fun getComponent() = panel
}