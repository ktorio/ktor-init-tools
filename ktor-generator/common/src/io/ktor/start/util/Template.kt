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

package io.ktor.start.util

suspend fun <TSubject : Any> generate(subject: TSubject, blocks: Iterable<Block<TSubject>>) = generate(subject, *(blocks.toList().toTypedArray()))

suspend fun <TSubject : Any> generate(subject: TSubject, vararg blocks: Block<TSubject>): Map<String, FileResult> {
    val out = LinkedHashMap<String, FileResult>()
    val bb = BlockBuilder(subject)
    for (block in blocks) bb.visit(block)
    for ((file, gen) in bb.files) {
        out[file] = gen()
    }
    return out
}

open class BlockSlot<TSubject>(val name: String, val block: Block<TSubject>) {
    override fun toString(): String = "Slot($block.$name)"
}

class SlotInstance<TSubject>(val slot: BlockSlot<TSubject>) : Extra by Extra.Mixin() {
    class RenderBlock(val replace: Boolean, val indenter: Indenter.() -> Unit)

    val blocks = arrayListOf<RenderBlock>()

    fun render(indenter: Indenter) {
        val only = blocks.lastOrNull { it.replace }
        if (only != null) {
            only.indenter(indenter)
        } else {
            for (block in blocks) {
                block.indenter(indenter)
            }
        }
    }

    override fun toString(): String = "SlotInstance($slot)"
}

class FileResult(
    val name: String,
    val data: ByteArray,
    val mode: Int,
    val charset: Charset?
) {
    val string: String by lazy {
        charset?.let { data.toString(it) } ?: data.hex
    }

    override fun toString(): String = "FileResult($name, ${if (charset != null) string else "binary(${data.size})"})"
}

open class BlockBuilder(val subject: Any) : Extra by Extra.Mixin() {
    val blockInstances = LinkedHashMap<BlockSlot<*>, SlotInstance<*>>()
    val files = LinkedHashMap<String, suspend () -> FileResult>()

    fun <TSubject> getSlotInstance(slot: BlockSlot<TSubject>): SlotInstance<TSubject> {
        @Suppress("UNCHECKED_CAST")
        return blockInstances.getOrPut(slot) { SlotInstance(slot) } as SlotInstance<TSubject>
    }

    fun _gen(slot: BlockSlot<*>): SlotInstance<*> {
        if (currentBlock == null) error("currentBlock==null")
        if (slot.block !in currentBlock!!.blockDeps && slot.block != currentBlock) {
            error("To use $slot, must directly depend on block ${slot.block}")
        }
        // @TODO: ONCE: Lines added should appear only once
        //val instance = blockInstances[slot] ?: error("Slot $slot not defined. Must depend on block ${slot.block}. currentBlock=$currentBlock")
        return getSlotInstance(slot)
    }

    fun replace(slot: BlockSlot<*>, callback: Indenter.() -> Unit) {
        val instance = _gen(slot)
        instance.blocks += SlotInstance.RenderBlock(true, callback)
    }

    fun append(slot: BlockSlot<*>, once: Boolean = false, callback: Indenter.() -> Unit) {
        val instance = _gen(slot)
        instance.blocks += SlotInstance.RenderBlock(false, callback)
    }

    fun appendSeparated(slot: BlockSlot<*>, once: Boolean = false, callback: Indenter.() -> Unit) {
        append(slot, once) {
            SEPARATOR {
                callback()
            }
        }
    }

    fun fileText(name: String, charset: Charset = UTF8, mode: Int = "644".toInt(8), callback: suspend Indenter.() -> Unit) {
        fileBinary(name, charset = charset, mode = mode) {
            val indenter = Indenter()
            indenter.apply { callback() }
            indenter.toString().toByteArray(charset)
        }
    }

    fun fileBinary(name: String, charset: Charset? = null, mode: Int = "644".toInt(8), callback: suspend () -> ByteArray) {
        files[name] = {
            FileResult(name, callback(), mode, charset = charset)
        }
    }

    fun <TSubject> Indenter.block(slot: BlockSlot<TSubject>, callback: (Indenter.() -> Unit)? = null) {
        val instance = getSlotInstance(slot)
        linedeferred {
            instance.render(this)
        }
        if (callback != null) {
            currentBlock(slot.block) {
                append(slot, callback = callback)
            }
        }
    }

    var currentBlock: Block<*>? = null

    fun currentBlock(temporal: Block<*>, callback: () -> Unit) {
        val old = currentBlock
        try {
            currentBlock = temporal
            callback()
        } finally {
            currentBlock = old
        }
    }

    private val visited = hashSetOf<Block<*>>()
    fun <TSubject> visit(block: Block<TSubject>) {
        if (block in visited) return
        //println("VISIT: $block")
        visited += block
        for (parent in block.blockDeps) visit(parent)
        currentBlock(block) {
            //println("RENDERING: $block")
            block.apply { render(subject as TSubject) }
        }
    }
}

open class Block<TSubject>(vararg blockDeps: Block<TSubject>) {
    val blockDeps = blockDeps.toSet()
    fun newSlot(name: String? = null) = BlockSlot(name ?: "unnamed", this)

    open fun BlockBuilder.render(info: TSubject) {
    }

    fun getAllDependantBlocks(out: LinkedHashSet<Block<TSubject>> = LinkedHashSet()): Set<Block<TSubject>> {
        if (this !in out) {
            out += this
            for (dep in blockDeps) dep.getAllDependantBlocks(out)
        }
        return out
    }

    override fun toString(): String = "Block(${this::class.simpleName})"
}
