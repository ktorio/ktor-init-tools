package io.ktor.start.swagger

import io.ktor.start.util.*
import kotlin.reflect.*

// https://tools.ietf.org/html/draft-wright-json-schema-validation-00
sealed class JsonRule {
    abstract class RuleList : JsonRule() {
        abstract val rules: List<JsonRule>
    }

    abstract class MinMaxDouble() : JsonRule() {
        abstract val value: Double
        abstract val exclusive: Boolean

        val valueAsInt get() = value.toInt()

        fun toString(clazz: KClass<*>): String = when (clazz) {
            Int::class -> "$valueAsInt"
            else -> "$value"
        }
    }

    abstract class MinMaxInt() : JsonRule() {
        abstract val value: Int
    }

    abstract class MinInt : MinMaxInt()
    abstract class MaxInt : MinMaxInt()

    class MinLength(override val value: Int) : MinInt()
    class MinItems(override val value: Int) : MinInt()
    class MinProperties(override val value: Int) : MinInt()

    class MaxLength(override val value: Int) : MaxInt()
    class MaxItems(override val value: Int) : MaxInt()
    class MaxProperties(override val value: Int) : MaxInt()

    class Not(val rule: JsonRule) : JsonRule() // NOT
    class AllOf(override val rules: List<JsonRule>) : RuleList() // AND
    class AnyOf(override val rules: List<JsonRule>) : RuleList() // OR
    class OneOf(override val rules: List<JsonRule>) : RuleList() // XOR
    class MultipleOf(val value: Double) : JsonRule() // %
    class Minimum(override val value: Double, override val exclusive: Boolean) : MinMaxDouble()
    class Maximum(override val value: Double, override val exclusive: Boolean) : MinMaxDouble()
    class Range(val min: Minimum, val max: Maximum, val exclusive: Boolean) : JsonRule()
    object UniqueItems : JsonRule()
    object Required : JsonRule()
    class Pattern(val pattern: Regex) : JsonRule()
    class Enumerable(val items: Set<Any?>) : JsonRule()

    companion object {
        fun parseOrNull(def: Any?): JsonRule? {
            val parsed = parse(def)
            return if (parsed is RuleList && parsed.rules.isEmpty()) null else parsed
        }

        fun parse(def: Any?): JsonRule = Dynamic {
            val rules = arrayListOf<JsonRule>()
            for ((key, value) in def.strEntries) {
                when (key) {
                    "not" -> rules += JsonRule.Not(parse(value))
                    "allOf" -> rules += parse(value).ruleList
                    "anyOf" -> JsonRule.AnyOf(parse(value).ruleList).let { if (it.rules.isNotEmpty()) rules += it }
                    "oneOf" -> JsonRule.OneOf(parse(value).ruleList).let { if (it.rules.isNotEmpty()) rules += it }
                    "multipleOf" -> rules += JsonRule.MultipleOf(value.double)
                    "minimum" -> rules += JsonRule.Minimum(value.double, def["exclusiveMinimum"].bool)
                    "maximum" -> rules += JsonRule.Maximum(value.double, def["exclusiveMaximum"].bool)
                    "minLength" -> rules += JsonRule.MinLength(value.int)
                    "maxLength" -> rules += JsonRule.MaxLength(value.int)
                    "minItems" -> rules += JsonRule.MinItems(value.int)
                    "maxItems" -> rules += JsonRule.MaxItems(value.int)
                    "minProperties" -> rules += JsonRule.MinProperties(value.int)
                    "maxProperties" -> rules += JsonRule.MaxProperties(value.int)
                    "required" -> if (value.bool) rules += JsonRule.Required
                    "pattern" -> rules += JsonRule.Pattern(Regex(value.str))
                    "uniqueItems" -> if (value.bool) rules += JsonRule.UniqueItems
                    "enum" -> rules += JsonRule.Enumerable(value.list.toSet())
                    else -> Unit // Ignore other properties
                }
            }

            val min = rules.filterIsInstance<JsonRule.Minimum>().firstOrNull()
            val max = rules.filterIsInstance<JsonRule.Maximum>().firstOrNull()

            if (min != null && max != null && !min.exclusive) {
                rules.removeAll { it is JsonRule.Minimum || it is JsonRule.Maximum }
                rules += JsonRule.Range(min, max, max.exclusive)
            }

            return if (rules.size == 1) rules.first() else JsonRule.AllOf(rules)
        }

        @Suppress("IfThenToElvis")
        val JsonRule.ruleList: List<JsonRule> get() = if (this is JsonRule.RuleList) this.rules else listOf(this)

    }
}

fun JsonRule.toKotlin(clazz: KClass<*>): String {
    return when (this) {
        is JsonRule.Not -> "!(${rule.toKotlin(clazz)})"
        is JsonRule.AllOf -> rules.joinToString(" && ") { it.toKotlin(clazz) }
        is JsonRule.AnyOf -> rules.joinToString(" || ") { it.toKotlin(clazz) }
        is JsonRule.OneOf -> rules.joinToString(" xor ") { it.toKotlin(clazz) }
        is JsonRule.MultipleOf -> "(it % $value)"
        is JsonRule.Minimum -> if (exclusive) "it > ${toString(clazz)}" else "it >= ${toString(clazz)}"
        is JsonRule.Maximum -> if (exclusive) "it < ${toString(clazz)}" else "it <= ${toString(clazz)}"
        is JsonRule.Range -> if (exclusive) "it in ${min.toString(clazz)} until ${max.toString(clazz)}" else "it in ${min.toString(clazz)} .. ${max.toString(clazz)}"
        is JsonRule.MinInt -> "it.size >= $value"
        is JsonRule.MaxInt -> "it.size <= $value"
        is JsonRule.Pattern -> "Regex(${pattern.pattern.quote()}).matches(it)"
        is JsonRule.UniqueItems -> "it.distinct().size == it.size" // @TODO: Optimize!
        is JsonRule.Enumerable -> "it in ${items.kquoteLit}"
        else -> error("Unsupported $this")
    }
}
