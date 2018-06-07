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
    val blocks = arrayListOf<Indenter.() -> Unit>()

    fun render(indenter: Indenter) {
        for (block in blocks) {
            block(indenter)
        }
    }

    override fun toString(): String = "SlotInstance($slot)"
}

class FileResult(
    val name: String,
    val data: ByteArray,
    val type: String,
    val mode: Int
)

open class BlockBuilder(val subject: Any) : Extra by Extra.Mixin() {
    val blockInstances = LinkedHashMap<BlockSlot<*>, SlotInstance<*>>()
    val files = LinkedHashMap<String, suspend () -> FileResult>()

    fun <TSubject> getSlotInstance(slot: BlockSlot<TSubject>): SlotInstance<TSubject> {
        @Suppress("UNCHECKED_CAST")
        return blockInstances.getOrPut(slot) { SlotInstance(slot) } as SlotInstance<TSubject>
    }

    fun append(slot: BlockSlot<*>, once: Boolean = false, callback: Indenter.() -> Unit) {
        if (slot.block !in currentBlock!!.blockDeps) {
            error("To use $slot, must directly depend on block ${slot.block}")
        }
        // @TODO: ONCE: Lines added should appear only once
        //val instance = blockInstances[slot] ?: error("Slot $slot not defined. Must depend on block ${slot.block}. currentBlock=$currentBlock")
        val instance = getSlotInstance(slot)
        instance.blocks += callback
    }

    fun fileText(name: String, charset: Charset = UTF8, mode: Int = "644".toInt(8), callback: suspend Indenter.() -> Unit) {
        fileBinary(name, type = "text", mode = mode) {
            val indenter = Indenter()
            indenter.apply { callback() }
            indenter.toString().toByteArray(charset)
        }
    }

    fun fileBinary(name: String, type: String = "binary", mode: Int = "644".toInt(8), callback: suspend () -> ByteArray) {
        files[name] = {
            FileResult(name, callback(), type, mode)
        }
    }

    fun <TSubject> Indenter.block(slot: BlockSlot<TSubject>) {
        val instance = getSlotInstance(slot)
        linedeferred {
            instance.render(this)
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

    override fun toString(): String = "Block(${this::class.simpleName})"
}
