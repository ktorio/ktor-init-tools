package io.ktor.start.intellij

import com.intellij.openapi.application.*
import com.intellij.openapi.progress.*
import com.intellij.openapi.project.*
import com.intellij.openapi.vfs.*
import com.intellij.uiDesigner.core.*
import io.ktor.start.util.*
import java.awt.*
import java.io.*
import javax.swing.*


fun VirtualFile.createFile(path: String, data: String, charset: Charset = UTF8): VirtualFile =
    createFile(path, data.toByteArray(charset))

fun VirtualFile.createFile(path: String, data: ByteArray): VirtualFile {
    val file = File(path)
    val dir = this.createDirectories(file.parent)
    return runWriteAction {
        dir.createChildData(null, file.name).apply {
            setBinaryContent(data)
        }
    }
}

fun VirtualFile.createDirectories(path: String?): VirtualFile {
    if (path == null) return this
    return runWriteAction {
        val parts = path.split('/', limit = 2)
        val firstName = parts[0]
        val lastName = parts.getOrNull(1)
        val child = this.findChild(firstName) ?: this.createChildDirectory(null, firstName)
        if (lastName != null) child.createDirectories(lastName) else child
    }
}

fun Project.backgroundTask(
    name: String,
    indeterminate: Boolean = true,
    cancellable: Boolean = false,
    background: Boolean = false,
    callback: (indicator: ProgressIndicator) -> Unit
) {
    ProgressManager.getInstance().run(object : Task.Backgroundable(this, name, cancellable, { background }) {
        override fun shouldStartInBackground() = background

        override fun run(indicator: ProgressIndicator) {
            if (indeterminate) indicator.isIndeterminate = true
            callback(indicator)
        }
    })
}

inline fun <T> runWriteAction(crossinline runnable: () -> T): T {
    //return ApplicationManager.getApplication().runWriteAction(Computable { runnable() })
    return object : WriteAction<T>() {
        @Throws(Throwable::class)
        override fun run(result: Result<T>) {
            val res = runnable()
            result.setResult(res)
        }
    }.execute().throwException().resultObject
}

val <T> JComboBox<T>.selected get() = selectedItem as T

fun JPanel.addAtGrid(
    item: JComponent,
    row: Int, column: Int,
    rowSpan: Int = 1, colSpan: Int = 1,
    anchor: Int = GridConstraints.ANCHOR_CENTER,
    fill: Int = GridConstraints.FILL_NONE,
    HSizePolicy: Int = GridConstraints.SIZEPOLICY_CAN_GROW or GridConstraints.SIZEPOLICY_CAN_SHRINK,
    VSizePolicy: Int = GridConstraints.SIZEPOLICY_CAN_GROW or GridConstraints.SIZEPOLICY_CAN_SHRINK,
    minimumSize: Dimension = Dimension(-1, -1),
    preferredSize: Dimension = Dimension(-1, -1),
    maximumSize: Dimension = Dimension(-1, -1)
) {
    add(item, GridConstraints(row, column, rowSpan, colSpan, anchor, fill, HSizePolicy, VSizePolicy, minimumSize, preferredSize, maximumSize))
}
