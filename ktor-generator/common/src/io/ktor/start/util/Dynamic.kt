package io.ktor.start.util

object Dynamic {
    inline operator fun <T> invoke(callback: DynamicAccess.() -> T): T = DynamicAccess(callback)
    inline operator fun <T, T2> invoke(value: T2, callback: DynamicAccess.(T2) -> T): T =
        DynamicAccess.run { callback(this, value) }
}

object DynamicAccess {
    inline operator fun <T> invoke(callback: DynamicAccess.() -> T): T = callback(DynamicAccess)

    val Any?.list: List<Any?>
        get() = when (this) {
            is List<*> -> this
            is Iterable<*> -> this.toList()
            else -> listOf()
        }

    val Any?.keys: List<Any?>
        get() = when (this) {
            is Map<*, *> -> keys.toList()
            else -> listOf()
        }

    val Any?.intKeys: List<Int> get() = keys.filterIsInstance<Int>()
    val Any?.strKeys: List<String> get() = keys.map { it.str }

    val Any?.strList: List<String> get() = list.map { it.str }

    val Any?.entries: List<Pair<Any?, Any?>> get() = keys.map { it to this[it] }
    val Any?.strEntries: List<Pair<String, Any?>> get() = strKeys.map { it to this[it] }

    val Any?.map: Map<Any?, Any?> get() = entries.toMap()

    operator fun Any?.get(key: Any?): Any? = if (key is Int) get(key) else get(key.str)

    operator fun Any?.get(key: String): Any? = when (this) {
        is Map<*, *> -> (this as Map<String, *>)[key]
        else -> null
    }

    operator fun Any?.get(key: Int): Any? = when (this) {
        is List<*> -> this[key]
        is Map<*, *> -> (this as Map<Int, *>)[key] ?: (this as Map<String, *>)["$key"]
        else -> null
    }

    fun Any?.toBoolOrNull(): Boolean? = when (this) {
        is Boolean -> this
        is String -> this == "1" || this == "true" || this == "on"
        is Number -> toInt() != 0
        else -> null
    }

    fun Any?.toIntOrNull(): Int? = when (this) {
        is Number -> toInt()
        is String -> this.toIntOrNull(10)
        else -> null
    }

    fun Any?.toLongOrNull(): Long? = when (this) {
        is Number -> toLong()
        is String -> toLongOrNull(10)
        else -> null
    }

    fun Any?.toDoubleOrNull(): Double? = when (this) {
        is Number -> toDouble()
        is String -> this.toDouble()
        else -> null
    }

    fun Any?.toIntDefault(default: Int = 0): Int = when (this) {
        is Number -> toInt()
        is String -> toIntOrNull(10) ?: default
        else -> default
    }

    fun Any?.toLongDefault(default: Long = 0L): Long = when (this) {
        is Number -> toLong()
        is String -> toLongOrNull(10) ?: default
        else -> default
    }

    fun Any?.toFloatDefault(default: Float = 0f): Float = when (this) {
        is Number -> toFloat()
        is String -> this.toFloat()
        else -> default
    }

    fun Any?.toDoubleDefault(default: Double = 0.0): Double = when (this) {
        is Number -> toDouble()
        is String -> this.toDouble()
        else -> default
    }

    val Any?.str: String get() = toString()
    val Any?.int: Int get() = toIntDefault()
    val Any?.bool: Boolean get() = toBoolOrNull() ?: false
    val Any?.float: Float get() = toFloatDefault()
    val Any?.double: Double get() = toDoubleDefault()
    val Any?.long: Long get() = toLongDefault()

    val Any?.intArray: IntArray get() = this as? IntArray ?: list.map { it.int }.toIntArray()
    val Any?.floatArray: FloatArray get() = this as? FloatArray ?: list.map { it.float }.toFloatArray()
    val Any?.doubleArray: DoubleArray get() = this as? DoubleArray ?: list.map { it.double }.toDoubleArray()
    val Any?.longArray: LongArray get() = this as? LongArray ?: list.map { it.long }.toLongArray()
}
