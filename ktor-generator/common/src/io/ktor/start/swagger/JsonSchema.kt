package io.ktor.start.swagger

import io.ktor.start.util.*

// https://tools.ietf.org/html/draft-wright-json-schema-validation-00
sealed class JsonRule {
    abstract class RuleList : JsonRule() {
        abstract val rules: List<JsonRule>
    }

    class Not(val rule: JsonRule):  JsonRule() // NOT
    class AllOf(override val rules: List<JsonRule>):  RuleList() // AND
    class AnyOf(override val rules: List<JsonRule>):  RuleList() // OR
    class OneOf(override val rules: List<JsonRule>):  RuleList() // XOR
    class MultipleOf(val value: Double) : JsonRule() // %
    class Minimum(val value: Double, val exclusive: Boolean) : JsonRule()
    class Maximum(val value: Double, val exclusive: Boolean) : JsonRule()
    class MinLength(val value: Int) : JsonRule()
    class MaxLength(val value: Int) : JsonRule()
    class MinItems(val value: Int) : JsonRule()
    class MaxItems(val value: Int) : JsonRule()
    object UniqueItems : JsonRule()
    class MinProperties(val value: Int) : JsonRule()
    class MaxProperties(val value: Int) : JsonRule()
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
                    "minimum" -> rules += JsonRule.Minimum(value.double, def["minimumExclusive"].bool)
                    "maximum" -> rules += JsonRule.Maximum(value.double, def["maximumExclusive"].bool)
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
            // @TODO: Combine minimum and maximum to form ".." and "until" ranges
            return if (rules.size == 1) rules.first() else JsonRule.AllOf(rules)
        }

        val JsonRule.ruleList: List<JsonRule> get() = if (this is JsonRule.RuleList) this.rules else listOf(this)

    }
}

fun JsonRule.toKotlin(): String {
    return when (this) {
        is JsonRule.Not -> "!(${rule.toKotlin()})"
        is JsonRule.AllOf -> rules.joinToString(" && ") { it.toKotlin() }
        is JsonRule.AnyOf -> rules.joinToString(" || ") { it.toKotlin() }
        is JsonRule.OneOf -> rules.joinToString(" xor ") { it.toKotlin() }
        is JsonRule.MultipleOf -> "(it % $value)"
        is JsonRule.Minimum -> if (exclusive) "it > $value" else "it >= $value"
        is JsonRule.Maximum -> if (exclusive) "it < $value" else "it <= $value"
        is JsonRule.MinLength -> "it.size >= $value"
        is JsonRule.MaxLength -> "it.size <= $value"
        is JsonRule.MinItems -> "it.size >= $value"
        is JsonRule.MaxItems -> "it.size <= $value"
        is JsonRule.MinProperties -> "it.size >= $value"
        is JsonRule.MaxProperties -> "it.size <= $value"
        is JsonRule.Pattern -> "Regex(${pattern.pattern.quote()}).matches(it)"
        is JsonRule.UniqueItems -> "it.distinct().size == it.size" // @TODO: Optimize!
        is JsonRule.Enumerable -> "it in ${items.kquoteLit}"
        else -> error("Unsupported Json Rule $this")
    }
}
