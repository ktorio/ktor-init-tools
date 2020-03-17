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

import com.intellij.openapi.module.*
import com.intellij.openapi.util.*
import javax.swing.*

class KtorModuleType : ModuleType<KtorModuleBuilder>("ktor") {
    companion object {
        val NAME = "Ktor"
        val DESCRIPTION = "Ktor Quickstart"
        val KTOR_BIG_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon.png") }
        val KTOR_ICON by lazy { IconLoader.getIcon("/icons/ktor-icon16.png") }
        val INSTANCE = KtorModuleType()
    }

    override fun createModuleBuilder(): KtorModuleBuilder = KtorModuleBuilder()
    override fun getName(): String = NAME
    override fun getDescription(): String = DESCRIPTION
    override fun getNodeIcon(isOpened: Boolean): Icon = KTOR_ICON
    override fun getIcon(): Icon = KTOR_BIG_ICON
}
