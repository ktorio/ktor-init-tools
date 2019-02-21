/*
 * This is a YAML parser from https://github.com/kareez/dahgan made in a single file in four objects to keep methods contained and removed special characters from identifiers + stackoverflow fixes.
 *
 * # Dahgan
 * A YAML 1.2 syntax parser written in [Kotlin](https://kotlinlang.org/)
 *
 * [![GitHub license](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg?style=flat)](https://www.apache.org/licenses/LICENSE-2.0)
 * [![Build Status - Master](https://travis-ci.org/kareez/dahgan.svg?branch=master)](https://travis-ci.org/kareez/dahgan)
 * [![Build Status - Develop](https://travis-ci.org/kareez/dahgan.svg?branch=develop)](https://travis-ci.org/kareez/dahgan)
 * [![Maven Central](https://maven-badges.herokuapp.com/maven-central/com.github.mhshams/dahgan/badge.svg)](https://maven-badges.herokuapp.com/maven-central/com.github.mhshams/dahgan)
 *
 * ## About
 * Dahgan is a YAML syntax parser, generated directly from the YAML 1.2 specification, together with a YEAST tokenizer that allows converting YAML files to YEAST tokens.
 *
 * The Core module is a [Kotlin](https://kotlinlang.org/) implementation of a Haskell based YAML parser called [YamlReference](https://hackage.haskell.org/package/YamlReference).
 *
 * ## Modules
 * #### Core
 * The Core module consists of YAML 1.2 specification, the parser and the YEAST tokenizer. [Read More](core/README.md)
 * #### Loader
 * The Loader module takes the generated tokens from Core module and generates Kotlin objects. [Read More](loader/README.md)
 *
 * Released under Apache License 2.0
 */
package io.dahgan

import io.ktor.start.util.*
import kotlin.math.*

object Yaml {
    /**
     * Loads the first yaml document in the given text and returns the loaded object.
     * Depending on the content, the result can be a simple text, a map or a list.
     */
    fun load(text: String): Any = load(text.toByteArray(UTF8))

    /**
     * Loads the first yaml document in the given file and returns the loaded object.
     * Depending on the content, the result can be a simple text, a map or a list.
     */
    //fun load(file: File): Any = load(file.readBytes())

    /**
     * Loads the first yaml document in the given byte array and returns the loaded object.
     * Depending on the content, the result can be a simple text, a map or a list.
     */
    fun load(bytes: ByteArray): Any = load(YamlSpec.yaml().tokenize("load", bytes, false))[0]

    /**
     * Loads all yaml documents in the given text and returns the loaded objects.
     * The result is a list of loaded objects.
     */
    fun loadAll(text: String): List<Any> = loadAll(text.toByteArray(UTF8))

    /**
     * Loads all yaml documents in the given file and returns the loaded objects.
     * The result is a list of loaded objects.
     */
    //fun loadAll(file: File): List<Any> = loadAll(file.readBytes())

    /**
     * Loads all yaml documents in the given byte array and returns the loaded objects.
     * The result is a list of loaded objects.
     */
    fun loadAll(bytes: ByteArray): List<Any> = load(YamlSpec.yaml().tokenize("load-all", bytes, false))

    private fun load(tokens: List<YamlParser.Token>): List<Any> {
        val anchors = HashMap<String, Any>()

        val context = Stack<Context>()
        context.push(ListContext())

        tokens.forEach {
            visitor(it.code).visit(anchors, context, it)
        }

        val result = context.pop().peek()
        if (result is List<*>) {
            return result as List<Any>
        }
        throw IllegalStateException("unexpected result: $result")
    }

    private fun visitor(code: YamlParser.Code): Visitor = when (code) {
        YamlParser.Code.Text -> TextVisitor()
        YamlParser.Code.Meta -> TextVisitor()
        YamlParser.Code.LineFeed -> EndOfLineVisitor("\n")
        YamlParser.Code.LineFold -> EndOfLineVisitor(" ")
        YamlParser.Code.BeginComment -> BeginIgnoreVisitor()
        YamlParser.Code.EndComment -> EndIgnoreVisitor()
        YamlParser.Code.BeginAnchor -> BeginVisitor(SingleContext())
        YamlParser.Code.EndAnchor -> EndVisitor()
        YamlParser.Code.BeginAlias -> BeginVisitor(SingleContext())
        YamlParser.Code.EndAlias -> EndAliasVisitor()
        YamlParser.Code.BeginScalar -> BeginVisitor(ScalarContext())
        YamlParser.Code.EndScalar -> EndVisitor()
        YamlParser.Code.BeginSequence -> BeginVisitor(ListContext())
        YamlParser.Code.EndSequence -> EndVisitor()
        YamlParser.Code.BeginMapping -> BeginVisitor(MapContext())
        YamlParser.Code.EndMapping -> EndVisitor()
        YamlParser.Code.BeginPair -> BeginVisitor(PairContext())
        YamlParser.Code.EndPair -> EndVisitor()
        YamlParser.Code.BeginNode -> BeginVisitor(NodeContext())
        YamlParser.Code.EndNode -> EndNodeVisitor()
        YamlParser.Code.BeginDocument -> BeginVisitor(SingleContext())
        YamlParser.Code.EndDocument -> EndVisitor()
        YamlParser.Code.Error -> ErrorVisitor()
        else -> SKIP
    }

    private abstract class Context {
        protected val data: MutableList<Any> = ArrayList()

        fun add(any: Any) = data.add(any)

        abstract fun peek(): Any
    }

    private class SingleContext : Context() {
        override fun peek(): Any = data.first()
    }

    private class ScalarContext : Context() {
        override fun peek(): Any = data.joinToString("")
    }

    private class NodeContext : Context() {
        override fun peek(): Any = if (data.size > 1) Pair(data.first(), data[1]) else Pair("", data.first())
    }

    private class ListContext : Context() {
        override fun peek(): Any = data
    }

    private class MapContext : Context() {
        override fun peek(): Any = data.filterIsInstance<Pair<*, *>>().toMap()
    }

    private class PairContext : Context() {
        override fun peek(): Any = Pair(data[0], data[1])
    }

    private interface Visitor {
        fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token)
    }

    private class BeginVisitor(val context: Context) : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            contexts.push(context)
        }
    }

    private class BeginIgnoreVisitor : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            contexts.push(object : Context() {
                override fun peek(): Any = throw UnsupportedOperationException()
            })
        }
    }

    private class EndIgnoreVisitor : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            contexts.pop()
        }
    }

    private class EndVisitor : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            val top = contexts.pop()
            contexts.peek().add(top.peek())
        }
    }

    private class EndNodeVisitor : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            val top = contexts.pop().peek() as Pair<Any, Any>
            if (top.first.toString().isNotEmpty()) {
                anchors.put(top.first.toString(), top.second)
            }
            contexts.peek().add(top.second)
        }
    }

    private class EndAliasVisitor : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            val top = contexts.pop()
            contexts.peek().add(anchors[top.peek().toString()]!!)
        }
    }

    private class TextVisitor : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            contexts.peek().add(token.text.toString())
        }
    }

    private class EndOfLineVisitor(val join: String) : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            contexts.peek().add(join)
        }
    }

    private class ErrorVisitor : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            throw IllegalStateException("${token.text} - Line #${token.line} , Character #${token.lineChar + 1}")
        }
    }

    private object SKIP : Visitor {
        override fun visit(anchors: MutableMap<String, Any>, contexts: Stack<Context>, token: YamlParser.Token) {
            //do nothing
        }
    }
}

@Suppress(
    "MemberVisibilityCanBePrivate", "FunctionName", "ObjectPropertyName", "ObjectPropertyName",
    "UNUSED_PARAMETER"
)
internal object YamlSpec : YamlParser() {
    /**
     * Converts the Unicode input (called name in error messages) to a list of 'Token' according to the YAML spec. This is it!
     */
    fun yaml() = PatternTokenizer(l_yaml_stream)

    /**
     * ** Spec productions
     *
     * These are copied directly from the YAML specification, with some changes to adapt to Kotlin language syntax and
     * also ease some of the decisions.
     *
     * See: https://yaml.org/spec/1.2/spec.html
     */

    /**
     * 5.1 Character Set
     */

    /**
     * [1] c-printable ::=  #x9 | #xA | #xD | [#x20-#x7E]          /* 8 bit */
     *                    | #x85 | [#xA0-#xD7FF] | [#xE000-#xFFFD] /* 16 bit */
     *                    | [#x10000-#x10FFFF]                     /* 32 bit */
     *
     * */
    val c_printable =
        of(0x9) or 0xA or 0xD or 0x20..0x7E or 0x85 or 0xA0..0xD7FF or 0xE000..0xFFFD or 0x10000..0x10FFFF

    /**
     * [2] nb-json ::= #x9 | [#x20-#x10FFFF]
     */
    val nb_json = of(0x9) or 0x20..0x10FFFF

    /**
     * 5.2 Character Encodings
     */

    /**
     *  [3] c-byte-order-mark ::= #xFEFF
     */
    val c_byte_order_mark = bom(0xFEFF)

    /**
     * 5.3 Indicator Characters
     */

    /**
     * [4] c-sequence-entry ::= “-”
     */
    val c_sequence_entry = indicator('-')
    /**
     * [5] c-mapping-key ::= “?”
     */
    val c_mapping_key = indicator('?')
    /**
     * [6] c-mapping-value ::= “:”
     */
    val c_mapping_value = indicator(':')

    /**
     * [7] c-collect-entry ::= “,”
     */
    val c_collect_entry = indicator(',')
    /**
     * [8] c-sequence-start ::= “[”
     */
    val c_sequence_start = indicator('[')
    /**
     * [9] c-sequence-end ::= “]”
     */
    val c_sequence_end = indicator(']')
    /**
     * [10] c-mapping-start ::= “{”
     */
    val c_mapping_start = indicator('{')
    /**
     * [11] c-mapping-end ::= “}”
     */
    val c_mapping_end = indicator('}')

    /**
     * [12] c-comment ::= “#”
     */
    val c_comment = indicator('#')

    /**
     * [13] c-anchor ::= “&”
     */
    val c_anchor = indicator('&')
    /**
     * [14] c-alias ::= “*”
     */
    val c_alias = indicator('*')
    /**
     * [15] c-tag ::= “!”
     */
    val c_tag = indicator('!')

    /**
     * [16] c-literal ::= “|”
     */
    val c_literal = indicator('|')
    /**
     * [17] c-folded ::= “>”
     */
    val c_folded = indicator('>')

    /**
     * [18] c-single-quote ::= “'”
     */
    val c_single_quote = indicator('\'')
    /**
     * [19] c-double-quote ::= “"”
     */
    val c_double_quote = indicator('"')

    /**
     * [20] c-directive ::= “%”
     */
    val c_directive = indicator('%')

    /**
     * [21] c-reserved ::= “@” | “`”
     */
    val c_reserved = indicator('@' or '`')

    /**
     * [22] c-indicator ::= “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
     *                     | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
     *                     | “%” | “@” | “`”
     */
    val c_indicator = c_sequence_entry or c_mapping_key or c_mapping_value or c_collect_entry or
            c_sequence_start or c_sequence_end or c_mapping_start or c_mapping_end or c_comment or c_anchor or
            c_alias or c_tag or c_literal or c_folded or c_single_quote or c_double_quote or c_directive or c_reserved

    /**
     * [23] c-flow-indicator ::= “,” | “[” | “]” | “{” | “}”
     */
    val c_flow_indicator =
        c_collect_entry or c_sequence_start or c_sequence_end or c_mapping_start or c_mapping_end

    /**
     * 5.4 Line Break Characters
     */

    /**
     * [24] b-line-feed ::= #xA    /* LF */
     */
    val b_line_feed = of(0xA)
    /**
     * [25] b-carriage-return ::= #xD    /* CR */
     */
    val b_carriage_return = of(0xD)
    /**
     * [26] b-char ::= b-line-feed | b-carriage-return
     */
    val b_char = b_line_feed or b_carriage_return

    /**
     * [27] nb-char ::= c-printable - b-char - c-byte-order-mark
     */
    val nb_char = c_printable not b_char not c_byte_order_mark

    /**
     * [28] b-break ::= (b-carriage-return b-line-feed) /* DOS, Windows */
     *                 | b-carriage-return                 /* MacOS upto 9.x */
     *                 | b-line-feed                       /* UNIX, MacOS X */
     */
    val b_break = ((b_carriage_return and b_line_feed) or b_carriage_return or b_line_feed) and nextLine()

    /**
     * [29] b-as-line-feed ::= b-break
     */
    val b_as_line_feed = token(Code.LineFeed, b_break)

    /**
     * [30] b-non-content ::= b-break
     */
    val b_non_content = token(Code.Break, b_break)

    /**
     * 5.5 White Space Characters
     */

    /**
     * [31] s-space ::= #x20 /* SP */
     */
    val s_space = of(0x20)
    /**
     * [32] s-tab ::= #x9  /* TAB */
     */
    val s_tab = of(0x9)
    /**
     * [33] s-white ::= s-space | s-tab
     */
    val s_white = s_space or s_tab

    /**
     * [34] ns-char ::= nb-char - s-white
     */
    val ns_char = nb_char not s_white

    /**
     * 5.6 Miscellaneous Characters
     */

    /**
     * [35] ns-dec-digit ::= [#x30-#x39] /* 0-9 */
     */
    val ns_dec_digit = of(0x30..0x39)

    /**
     * [36] ns-hex-digit ::=  ns-dec-digit
     *                      | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
     */
    val ns_hex_digit = ns_dec_digit or 0x41..0x46 or 0x61..0x66

    /**
     * [37] ns-ascii-letter ::= [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
     */
    val ns_ascii_letter = 0x41..0x5A or 0x61..0x7A

    /**
     * [38] ns-word-char ::= ns-dec-digit | ns-ascii-letter | “-”
     */
    val ns_word_char = ns_dec_digit or ns_ascii_letter or '-'

    /**
     * [39] ns-uri-char ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
     *                     | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
     *                     | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
     */
    val ns_uri_char = "escape" cho
            ('%' cmt "escape" and ns_hex_digit and ns_hex_digit or ns_word_char or '#' or
                    ';' or '/' or '?' or ':' or '@' or '&' or '=' or '+' or '$' or ',' or
                    '_' or '.' or '!' or '~' or '*' or '\'' or '(' or ')' or '[' or ']')

    /**
     * [40] ns-tag-char ::= ns-uri-char - “!” - c-flow-indicator
     */
    val ns_tag_char = ns_uri_char not c_tag not c_flow_indicator

    /**
     * 5.7 Escaped Characters
     */

    /**
     * [41] c-escape ::= “\”
     */
    val c_escape = indicator('\\')

    /**
     * [42] ns-esc-null ::= “0”
     */
    val ns_esc_null = meta('0')
    /**
     * [43] ns-esc-bell ::= “a”
     */
    val ns_esc_bell = meta('a')
    /**
     * [44] ns-esc-backspace ::= “b”
     */
    val ns_esc_backspace = meta('b')
    /**
     * [45] ns-esc-horizontal-tab ::= “t” | #x9
     */
    val ns_esc_horizontal_tab = meta('t' or 0x9)
    /**
     * [46] ns-esc-line-feed ::= “n”
     */
    val ns_esc_line_feed = meta('n')
    /**
     * [47] ns-esc-vertical-tab ::= “v”
     */
    val ns_esc_vertical_tab = meta('v')
    /**
     * [48] ns-esc-form-feed ::= “f”
     */
    val ns_esc_form_feed = meta('f')
    /**
     * [49] ns-esc-carriage-return ::= “r”
     */
    val ns_esc_carriage_return = meta('r')
    /**
     * [50] ns-esc-escape ::= “e”
     */
    val ns_esc_escape = meta('e')
    /**
     * [51] ns-esc-space ::= #x20
     */
    val ns_esc_space = meta(0x20)
    /**
     * [52] ns-esc-double-quote ::= “"”
     */
    val ns_esc_double_quote = meta('"')
    /**
     * [53] ns-esc-slash ::= “/”
     */
    val ns_esc_slash = meta('/')
    /**
     * [54] ns-esc-backslash ::= “\”
     */
    val ns_esc_backslash = meta('\\')
    /**
     * [55] ns-esc-next-line ::= “N”
     */
    val ns_esc_next_line = meta('N')
    /**
     * [56] ns-esc-non-breaking-space ::= “_”
     */
    val ns_esc_non_breaking_space = meta('_')
    /**
     * [57] ns-esc-line-separator ::= “L”
     */
    val ns_esc_line_separator = meta('L')
    /**
     * [58] ns-esc-paragraph-separator ::= “P”
     */
    val ns_esc_paragraph_separator = meta('P')
    /**
     * [59] ns-esc-8-bit ::= “x”
     *                       ( ns-hex-digit × 2 )
     */
    val ns_esc_8_bit = indicator('x') cmt "escaped" and meta(ns_hex_digit tms 2)
    /**
     * [60] ns-esc-16-bit ::= “u”
     *                        ( ns-hex-digit × 4 )
     */
    val ns_esc_16_bit = indicator('u') cmt "escaped" and meta(ns_hex_digit tms 4)
    /**
     * [61] ns-esc-32-bit ::= “U”
     *                        ( ns-hex-digit × 8 )
     */
    val ns_esc_32_bit = indicator('U') cmt "escaped" and meta(ns_hex_digit tms 8)

    /**
     * [62] c-ns-esc-char ::= “\”
     *                        ( ns-esc-null | ns-esc-bell | ns-esc-backspace
     *                        | ns-esc-horizontal-tab | ns-esc-line-feed
     *                        | ns-esc-vertical-tab | ns-esc-form-feed
     *                        | ns-esc-carriage-return | ns-esc-escape | ns-esc-space
     *                        | ns-esc-double-quote | ns-esc-slash | ns-esc-backslash
     *                        | ns-esc-next-line | ns-esc-non-breaking-space
     *                        | ns-esc-line-separator | ns-esc-paragraph-separator
     *                        | ns-esc-8-bit | ns-esc-16-bit | ns-esc-32-bit )
     */
    val c_ns_esc_char = wrapTokens(
        Code.BeginEscape, Code.EndEscape,
        c_escape cmt "escape" and ("escaped" cho (
                ns_esc_null or ns_esc_bell or ns_esc_backspace or
                        ns_esc_horizontal_tab or ns_esc_line_feed or
                        ns_esc_vertical_tab or ns_esc_form_feed or
                        ns_esc_carriage_return or ns_esc_escape or ns_esc_space or
                        ns_esc_double_quote or ns_esc_slash or ns_esc_backslash or
                        ns_esc_next_line or ns_esc_non_breaking_space or
                        ns_esc_line_separator or ns_esc_paragraph_separator or
                        ns_esc_8_bit or ns_esc_16_bit or ns_esc_32_bit))
    )

    /**
     * 6.1 Indentation Spaces
     */

    /**
     * [63] s-indent(n) ::= s-space × n
     */
    fun s_indent(n: Int) = token(Code.Indent, s_space tms n)

    /**
     * [64] s-indent(<n) ::= s-space × m /* Where m < n */
     */
    fun s_indent_lt(n: Int) = token(Code.Indent, s_space lms n)

    /**
     * [65] s-indent(≤n) ::= s-space × m /* Where m ≤ n */
     */
    fun s_indent_le(n: Int) = token(Code.Indent, s_space lms n + 1)

    /**
     * 6.2 Separation Spaces
     */

    /**
     * [66] s-separate-in-line ::= s-white+ | /* Start of line */
     */
    val s_separate_in_line = token(Code.White, oom(s_white)) or sol()

    /**
     * 6.3 Line Prefixes
     */

    /**
     * [67] s-line-prefix(n,c) ::= c = block-out ⇒ s-block-line-prefix(n)
     *                             c = block-in  ⇒ s-block-line-prefix(n)
     *                             c = flow-out  ⇒ s-flow-line-prefix(n)
     *                             c = flow-in   ⇒ s-flow-line-prefix(n)
     */
    fun s_line_prefix(n: Int, c: Context) = when (c) {
        Context.BlockOut -> s_block_line_prefix(n)
        Context.BlockIn -> s_block_line_prefix(n)
        Context.FlowOut -> s_flow_line_prefix(n)
        Context.FlowIn -> s_flow_line_prefix(n)
        else -> throw IllegalArgumentException("invalid context: $c")
    }

    /**
     * [68] s-block-line-prefix(n) ::= s-indent(n)
     */
    fun s_block_line_prefix(n: Int) = s_indent(n)

    /**
     * [69] s-flow-line-prefix(n) ::= s-indent(n) s-separate-in-line?
     */
    fun s_flow_line_prefix(n: Int) = s_indent(n) and opt(s_separate_in_line)

    /**
     * 6.4 Empty Lines
     */

    /**
     * [70] l-empty(n,c) ::= ( s-line-prefix(n,c) | s-indent(<n) )
     *                       b-as-line-feed
     */
    fun l_empty(n: Int, c: Context) = (s_line_prefix(n, c) or s_indent_lt(n)) and b_as_line_feed

    /**
     * 6.5 Line Folding
     */

    /**
     * [71] b-l-trimmed(n,c) ::= b-non-content l-empty(n,c)+
     */
    fun b_l_trimmed(n: Int, c: Context) = b_non_content and oom(l_empty(n, c))

    /**
     * [72] b-as-space ::= b-break
     */
    val b_as_space = token(Code.LineFold, b_break)

    /**
     * [73] b-l-folded(n,c) ::= b-l-trimmed(n,c) | b-as-space
     */
    fun b_l_folded(n: Int, c: Context) = b_l_trimmed(n, c) or b_as_space

    /**
     * [74] s-flow-folded(n) ::= s-separate-in-line? b-l-folded(n,flow-in)
     *                           s-flow-line-prefix(n)
     */
    fun s_flow_folded(n: Int) =
        opt(s_separate_in_line) and b_l_folded(n, Context.FlowIn) and s_flow_line_prefix(n)

    /**
     * 6.6 Comments
     */

    /**
     * [75] c-nb-comment-text ::= “#” nb-char*
     */
    val c_nb_comment_text = wrapTokens(Code.BeginComment, Code.EndComment, c_comment and meta(zom(nb_char)))

    /**
     * [76] b-comment ::= b-non-content | /* End of file */
     */
    val b_comment = b_non_content or eof()

    /**
     * [77] s-b-comment ::= ( s-separate-in-line c-nb-comment-text? )?
     *                      b-comment
     */
    val s_b_comment = opt((s_separate_in_line and opt(c_nb_comment_text))) and b_comment

    /**
     * [78] l-comment ::= s-separate-in-line c-nb-comment-text? b-comment
     */
    val l_comment = s_separate_in_line and opt(c_nb_comment_text) and b_comment

    /**
     * [79] s-l-comments ::= ( s-b-comment | /* Start of line */ )
     *                       l-comment*
     */
    val s_l_comments = (s_b_comment or sol()) and zom(nonEmpty(l_comment))

    /**
     * 6.7 Separation Lines
     */

    /**
     * 80] s-separate(n,c) ::= c = block-out ⇒ s-separate-lines(n)
     *                         c = block-in  ⇒ s-separate-lines(n)
     *                         c = flow-out  ⇒ s-separate-lines(n)
     *                         c = flow-in   ⇒ s-separate-lines(n)
     *                         c = block-key ⇒ s-separate-in-line
     *                         c = flow-key  ⇒ s-separate-in-line
     */
    fun s_separate(n: Int, c: Context) = when (c) {
        Context.BlockOut -> s_separate_lines(n)
        Context.BlockIn -> s_separate_lines(n)
        Context.FlowOut -> s_separate_lines(n)
        Context.FlowIn -> s_separate_lines(n)
        Context.BlockKey -> s_separate_in_line
        Context.FlowKey -> s_separate_in_line
    }

    /**
     * [81] s-separate-lines(n) ::= ( s-l-comments s-flow-line-prefix(n) )
     *                             | s-separate-in-line
     */
    fun s_separate_lines(n: Int) = s_l_comments and s_flow_line_prefix(n) or s_separate_in_line

    /**
     * 6.8 Directives
     */

    /**
     * [82] l-directive ::= “%”
     *                     ( ns-yaml-directive
     *                     | ns-tag-directive
     *                     | ns-reserved-directive )
     *                     s-l-comments
     */
    val l_directive = (wrapTokens(
        Code.BeginDirective, Code.EndDirective, (c_directive cmt "doc") and
                ("directive" cho (ns_yaml_directive() or ns_tag_directive() or ns_reserved_directive()))
    )) and s_l_comments

    /**
     * [83] ns-reserved-directive ::= ns-directive-name
     *                                ( s-separate-in-line ns-directive-parameter )*
     */
    fun ns_reserved_directive() = ns_directive_name() and zom(s_separate_in_line and ns_directive_parameter())

    /**
     * [84] ns-directive-name ::= ns-char+
     */
    fun ns_directive_name() = meta(oom(ns_char))

    /**
     * [85] ns-directive-parameter ::= ns-char+
     */
    fun ns_directive_parameter() = meta(oom(ns_char))

    /**
     * 6.8.1 Yaml Directives
     */

    /**
     * [86] ns-yaml-directive ::= “Y” “A” “M” “L”
     *                            s-separate-in-line ns-yaml-version
     */
    fun ns_yaml_directive() =
        (meta('Y' and 'A' and 'M' and 'L') cmt "directive") and s_separate_in_line and ns_yaml_version()

    /**
     * [87] ns-yaml-version ::= ns-dec-digit+ “.” ns-dec-digit+
     */
    fun ns_yaml_version() = meta(oom(ns_dec_digit) and '.' and oom(ns_dec_digit))

    /**
     * 6.8.2 Tag Directives
     */

    /**
     * [88] ns-tag-directive ::= “T” “A” “G”
     *                           s-separate-in-line c-tag-handle
     *                           s-separate-in-line ns-tag-prefix
     */
    fun ns_tag_directive() = (meta('T' and 'A' and 'G') cmt "directive") and
            s_separate_in_line and c_tag_handle() and s_separate_in_line and ns_tag_prefix()

    /**
     * 6.8.2.1 Tag Handles
     */

    /**
     * [89] c-tag-handle ::=  c-named-tag-handle
     *                      | c-secondary-tag-handle
     *                      | c-primary-tag-handle
     */
    fun c_tag_handle() = c_named_tag_handle() or c_secondary_tag_handle() or c_primary_tag_handle()

    /**
     * [90] c-primary-tag-handle ::= “!”
     */
    fun c_primary_tag_handle() = wrapTokens(Code.BeginHandle, Code.EndHandle, c_tag)

    /**
     * [91] c-secondary-tag-handle ::= “!” “!”
     */
    fun c_secondary_tag_handle() = wrapTokens(Code.BeginHandle, Code.EndHandle, c_tag and c_tag)

    /**
     * [92] c-named-tag-handle ::= “!” ns-word-char+ “!”
     */
    fun c_named_tag_handle() =
        wrapTokens(Code.BeginHandle, Code.EndHandle, c_tag and meta(oom(ns_word_char) and c_tag))

    /**
     * 6.8.2.2 Tag Prefixes
     */

    /**
     * [93] ns-tag-prefix ::= c-ns-local-tag-prefix | ns-global-tag-prefix
     */
    fun ns_tag_prefix() =
        wrapTokens(Code.BeginTag, Code.EndTag, c_ns_local_tag_prefix() or ns_global_tag_prefix())

    /**
     * [94] c-ns-local-tag-prefix ::= “!” ns-uri-char*
     */
    fun c_ns_local_tag_prefix() = c_tag and meta(zom(ns_uri_char))

    /**
     * [95] ns-global-tag-prefix ::= ns-tag-char ns-uri-char*
     */
    fun ns_global_tag_prefix() = meta(ns_tag_char and zom(ns_uri_char))

    /**
     * 6.9 Node Properties
     */

    /**
     * [96] c-ns-properties(n,c) ::=  ( c-ns-tag-property
     *                                  ( s-separate(n,c) c-ns-anchor-property )? )
     *                              | ( c-ns-anchor-property
     *                                  ( s-separate(n,c) c-ns-tag-property )? )
     */
    fun c_ns_properties(n: Int, c: Context) = wrapTokens(
        Code.BeginProperties, Code.EndProperties,
        (c_ns_tag_property() and opt(s_separate(n, c) and c_ns_anchor_property)) or
                (c_ns_anchor_property and opt(s_separate(n, c) and c_ns_tag_property()))
    )

    /**
     * 6.9.1 Node Tags
     */

    /**
     * [97] c-ns-tag-property ::=  c-verbatim-tag
     *                           | c-ns-shorthand-tag
     *                           | c-non-specific-tag
     */
    fun c_ns_tag_property() =
        wrapTokens(Code.BeginTag, Code.EndTag, c_verbatim_tag() or c_ns_shorthand_tag() or c_non_specific_tag())

    /**
     * [98] c-verbatim-tag ::= “!” “<” ns-uri-char+ “>”
     */
    fun c_verbatim_tag() = c_tag and indicator('<') and meta(oom(ns_uri_char)) and indicator('>')

    /**
     * [99] c-ns-shorthand-tag ::= c-tag-handle ns-tag-char+
     */
    fun c_ns_shorthand_tag() = c_tag_handle() and meta(oom(ns_tag_char))

    /**
     * [100] c-non-specific-tag ::= “!”
     */
    fun c_non_specific_tag() = c_tag

    /**
     * 6.9.2 Node Anchors
     */

    /**
     * [101] c-ns-anchor-property ::= “&” ns-anchor-name
     */
    val c_ns_anchor_property = wrapTokens(Code.BeginAnchor, Code.EndAnchor, c_anchor and ns_anchor_name())

    /**
     * [102] ns-anchor-char ::= ns-char - c-flow-indicator
     */
    fun ns_anchor_char() = ns_char not c_flow_indicator

    /**
     * [103] ns-anchor-name ::= ns-anchor-char+
     */
    fun ns_anchor_name() = meta(oom(ns_anchor_char()))

    /**
     * 7.1 Alias Nodes
     */

    /**
     * [104] c-ns-alias-node ::= “*” ns-anchor-name
     */
    val c_ns_alias_node = wrapTokens(Code.BeginAlias, Code.EndAlias, (c_alias cmt "node") and ns_anchor_name())

    /**
     * 7.2 Empty Nodes
     */

    /**
     * [105] e-scalar ::= /* Empty */
     */
    val e_scalar = wrapTokens(Code.BeginScalar, Code.EndScalar, empty())

    /**
     * [106] e-node ::= e-scalar
     */
    val e_node = wrapTokens(Code.BeginNode, Code.EndNode, e_scalar)

    /**
     * 7.3.1 Double Quoted Style
     */

    /**
     * [107] nb-double-char ::= c-ns-esc-char | ( nb-json - “\” - “"” )
     */
    val nb_double_char = ("escape" cho (c_ns_esc_char or (nb_json not c_escape not c_double_quote)))
    /**
     * [108] ns-double-char ::= nb-double-char - s-white
     */
    val ns_double_char = nb_double_char not s_white

    /**
     * [109] c-double-quoted(n,c) ::= “"” nb-double-text(n,c) “"”
     */
    fun c_double_quoted(n: Int, c: Context) = wrapTokens(
        Code.BeginScalar, Code.EndScalar, (c_double_quote cmt "node") and
                text(nb_double_text(n, c)) and c_double_quote
    )

    /**
     * [110] nb-double-text(n,c) ::= c = flow-out  ⇒ nb-double-multi-line(n)
     *                               c = flow-in   ⇒ nb-double-multi-line(n)
     *                               c = block-key ⇒ nb-double-one-line
     *                               c = flow-key  ⇒ nb-double-one-line
     */
    fun nb_double_text(n: Int, c: Context) = when (c) {
        Context.FlowOut -> nb_double_multi_line(n)
        Context.FlowIn -> nb_double_multi_line(n)
        Context.BlockKey -> nb_double_one_line
        Context.FlowKey -> nb_double_one_line
        else -> throw IllegalArgumentException("unexpected")
    }

    /**
     * [111] nb-double-one-line ::= nb-double-char*
     */
    val nb_double_one_line = zom(nb_double_char)

    /**
     * [112] s-double-escaped(n) ::= s-white* “\” b-non-content
     *                               l-empty(n,flow-in)* s-flow-line-prefix(n)
     */
    fun s_double_escaped(n: Int) = zom(s_white) and
            wrapTokens(Code.BeginEscape, Code.EndEscape, (c_escape cmt "escape") and b_non_content) and
            zom(l_empty(n, Context.FlowIn)) and s_flow_line_prefix(n)

    /**
     * [113] s-double-break(n) ::= s-double-escaped(n) | s-flow-folded(n)
     */
    fun s_double_break(n: Int) = "escape" cho (s_double_escaped(n) or s_flow_folded(n))

    /**
     * [114] nb-ns-double-in-line ::= ( s-white* ns-double-char )*
     */
    val nb_ns_double_in_line = zom(zom(s_white) and ns_double_char)

    /**
     * [115] s-double-next-line(n) ::= s-double-break(n)
     *                                 ( ns-double-char nb-ns-double-in-line
     *                                  ( s-double-next-line(n) | s-white* ) )?
     */
    fun s_double_next_line(n: Int): Parser =
        s_double_break(n) and opt(ns_double_char and nb_ns_double_in_line and
                ({ state: State -> s_double_next_line(n)(state) } or zom(s_white)))

    /**
     * [116] nb-double-multi-line(n) ::= nb-ns-double-in-line
     *                                  ( s-double-next-line(n) | s-white* )
     */
    fun nb_double_multi_line(n: Int) = nb_ns_double_in_line and (s_double_next_line(n) or zom(s_white))

    /**
     * 7.3.2 Single Quoted Style
     */

    /**
     * [117] c-quoted-quote ::= “'” “'”
     */
    val c_quoted_quote = wrapTokens(Code.BeginEscape, Code.EndEscape, c_single_quote cmt "escape" and meta('\''))
    /**
     * [118] nb-single-char ::= c-quoted-quote | ( nb-json - “'” )
     */
    val nb_single_char = "escape" cho (c_quoted_quote or (nb_json not c_single_quote))
    /**
     * [119] ns-single-char ::= nb-single-char - s-white
     */
    val ns_single_char = nb_single_char not s_white

    /**
     * [120] c-single-quoted(n,c) ::= “'” nb-single-text(n,c) “'”
     */
    fun c_single_quoted(n: Int, c: Context) = wrapTokens(
        Code.BeginScalar, Code.EndScalar,
        (c_single_quote cmt "node") and text(nb_single_text(n, c)) and c_single_quote
    )

    /**
     * [121] nb-single-text(n,c) ::= c = flow-out  ⇒ nb-single-multi-line(n)
     *                               c = flow-in   ⇒ nb-single-multi-line(n)
     *                               c = block-key ⇒ nb-single-one-line
     *                               c = flow-key  ⇒ nb-single-one-line
     */
    fun nb_single_text(n: Int, c: Context) = when (c) {
        Context.FlowOut -> nb_single_multi_line(n)
        Context.FlowIn -> nb_single_multi_line(n)
        Context.BlockKey -> nb_single_one_line
        Context.FlowKey -> nb_single_one_line
        else -> throw IllegalArgumentException("unexpected")
    }

    /**
     * [122] nb-single-one-line ::= nb-single-char*
     */
    val nb_single_one_line = zom(nb_single_char)

    /**
     * [123] nb-ns-single-in-line ::= ( s-white* ns-single-char )*
     */
    val nb_ns_single_in_line = zom(zom(s_white) and ns_single_char)

    /**
     * [124] s-single-next-line(n) ::= s-flow-folded(n)
     *                                 ( ns-single-char nb-ns-single-in-line
     *                                   ( s-single-next-line(n) | s-white* ) )?
     */
    fun s_single_next_line(n: Int): Parser =
        s_flow_folded(n) and (opt(ns_single_char and nb_ns_single_in_line and
                ({ state: State -> s_single_next_line(n)(state) } or zom(s_white))))

    /**
     * [125] nb-single-multi-line(n) ::= nb-ns-single-in-line
     *                                  ( s-single-next-line(n) | s-white* )
     */
    fun nb_single_multi_line(n: Int) = nb_ns_single_in_line and (s_single_next_line(n) or zom(s_white))

    /**
     * 7.3.3 Plain Style
     */

    /**
     * [126] ns-plain-first(c) ::=   ( ns-char - c-indicator )
     *                            | ( ( “?” | “:” | “-” )
     *                              /* Followed by an ns-plain-safe(c)) */ )
     */
    @Suppress("UNUSED-PARAMETER")
    fun ns_plain_first(c: Context) = (ns_char not c_indicator) or (('?' or ':' or '-') and pla(ns_char))

    /**
     * [127] ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
     *                            c = flow-in   ⇒ ns-plain-safe-in
     *                            c = block-key ⇒ ns-plain-safe-out
     *                            c = flow-key  ⇒ ns-plain-safe-in
     */
    fun ns_plain_safe(c: Context) = when (c) {
        Context.FlowOut -> ns_plain_safe_out
        Context.FlowIn -> ns_plain_safe_in
        Context.BlockKey -> ns_plain_safe_out
        Context.FlowKey -> ns_plain_safe_in
        else -> throw IllegalArgumentException("unexpected")
    }

    /**
     * [128] ns-plain-safe-out ::= ns-char
     */
    val ns_plain_safe_out = ns_char not c_mapping_value not c_comment
    /**
     * [129] ns-plain-safe-in ::= ns-char - c-flow-indicator
     */
    val ns_plain_safe_in = ns_plain_safe_out not c_flow_indicator

    /**
     * [130] ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
     *                           | ( /* An ns-char preceding */ “#” )
     *                           | ( “:” /* Followed by an ns-plain-safe(c) */ )
     */
    fun ns_plain_char(c: Context) = ns_plain_safe(c) or (plb(ns_char) and '#') or (':' and pla(ns_char))

    /**
     * [131] ns-plain(n,c) ::= c = flow-out  ⇒ ns-plain-multi-line(n,c)
     *                         c = flow-in   ⇒ ns-plain-multi-line(n,c)
     *                         c = block-key ⇒ ns-plain-one-line(c)
     *                         c = flow-key  ⇒ ns-plain-one-line(c)
     */
    fun ns_plain(n: Int, c: Context) = wrapTokens(
        Code.BeginScalar, Code.EndScalar, text(
            when (c) {
                Context.FlowOut -> ns_plain_multi_line(n, c)
                Context.FlowIn -> ns_plain_multi_line(n, c)
                Context.BlockKey -> ns_plain_one_line(c)
                Context.FlowKey -> ns_plain_one_line(c)
                else -> throw IllegalArgumentException("unexpected")
            }
        )
    )

    /**
     * [132] nb-ns-plain-in-line(c) ::= ( s-white* ns-plain-char(c) )*
     */
    fun nb_ns_plain_in_line(c: Context) = zom(zom(s_white) and ns_plain_char(c))

    /**
     * [133] ns-plain-one-line(c) ::= ns-plain-first(c) nb-ns-plain-in-line(c)
     */
    fun ns_plain_one_line(c: Context) = ns_plain_first(c) cmt "node" and nb_ns_plain_in_line(c)

    /**
     * [134] s-ns-plain-next-line(n,c) ::= s-flow-folded(n)
     *                                     ns-plain-char(c) nb-ns-plain-in-line(c)
     */
    fun s_ns_plain_next_line(n: Int, c: Context) =
        s_flow_folded(n) and ns_plain_char(c) and nb_ns_plain_in_line(c)

    /**
     * [135] ns-plain-multi-line(n,c) ::= ns-plain-one-line(c)
     *                                    s-ns-plain-next-line(n,c)*
     */
    fun ns_plain_multi_line(n: Int, c: Context) = ns_plain_one_line(c) and zom(s_ns_plain_next_line(n, c))

    /**
     * 7.4 Flow Collection Styles
     */

    /** [136] in-flow(c) ::= c = flow-out  ⇒ flow-in
     *                       c = flow-in   ⇒ flow-in
     *                       c = block-key ⇒ flow-key
     *                       c = flow-key  ⇒ flow-key
     */
    fun in_flow(c: Context) = when (c) {
        Context.FlowOut -> Context.FlowIn
        Context.FlowIn -> Context.FlowIn
        Context.BlockKey -> Context.FlowKey
        Context.FlowKey -> Context.FlowKey
        else -> throw IllegalArgumentException("unexpected")
    }

    /**
     * 7.4.1 Flow Sequences
     */

    /**
     * [137] c-flow-sequence(n,c) ::= “[” s-separate(n,c)?
     *                                ns-s-flow-seq-entries(n,in-flow(c))? “]”
     */
    fun c_flow_sequence(n: Int, c: Context) = wrapTokens(
        Code.BeginSequence, Code.EndSequence, (c_sequence_start cmt "node") and
                opt(s_separate(n, c)) and opt(ns_s_flow_seq_entries(n, in_flow(c))) and c_sequence_end
    )

    /**
     * [138] ns-s-flow-seq-entries(n,c) ::= ns-flow-seq-entry(n,c) s-separate(n,c)?
     *                                      ( “,” s-separate(n,c)?
     *                                        ns-s-flow-seq-entries(n,c)? )?
     */
    fun ns_s_flow_seq_entries(n: Int, c: Context): Parser = ns_flow_seq_entry(n, c) and opt(s_separate(n, c)) and
            opt(c_collect_entry and opt(s_separate(n, c)) and opt({ state ->
                ns_s_flow_seq_entries(
                    n,
                    c
                )(state)
            }))

    /**
     * [139] ns-flow-seq-entry(n,c) ::= ns-flow-pair(n,c) | ns-flow-node(n,c)
     */
    fun ns_flow_seq_entry(n: Int, c: Context) = "pair" cho (ns_flow_pair(n, c) or ("node" cho ns_flow_node(n, c)))

    /**
     * 7.4.2 Flow
     */

    /**
     * [140] c-flow-mapping(n,c) ::= “{” s-separate(n,c)?
     *                               ns-s-flow-map-entries(n,in-flow(c))? “}”
     */
    fun c_flow_mapping(n: Int, c: Context) = wrapTokens(
        Code.BeginMapping, Code.EndMapping, (c_mapping_start cmt "node") and
                opt(s_separate(n, c)) and opt(ns_s_flow_map_entries(n, in_flow(c))) and c_mapping_end
    )

    /**
     * [141] ns-s-flow-map-entries(n,c) ::= ns-flow-map-entry(n,c) s-separate(n,c)?
     *                                      ( “,” s-separate(n,c)?
     *                                         ns-s-flow-map-entries(n,c)? )?
     */
    fun ns_s_flow_map_entries(n: Int, c: Context): Parser = ns_flow_map_entry(n, c) and opt(s_separate(n, c)) and
            opt(c_collect_entry and opt(s_separate(n, c)) and opt({ state ->
                ns_s_flow_map_entries(
                    n,
                    c
                )(state)
            }))

    /**
     * [142] ns-flow-map-entry(n,c) ::=   ( “?” s-separate(n,c)
     *                                      ns-flow-map-explicit-entry(n,c) )
     *                                 | ns-flow-map-implicit-entry(n,c)
     */
    fun ns_flow_map_entry(n: Int, c: Context) = wrapTokens(
        Code.BeginPair, Code.EndPair, "key" cho (((c_mapping_key cmt "key") and
                s_separate(n, c) and ns_flow_map_explicit_entry(n, c)) or ns_flow_map_implicit_entry(n, c))
    )

    /**
     * [143] ns-flow-map-explicit-entry(n,c) ::=  ns-flow-map-implicit-entry(n,c)
     *                                          | ( e-node /* Key */
     *                                              e-node /* Value */ )
     */
    fun ns_flow_map_explicit_entry(n: Int, c: Context) = ns_flow_map_implicit_entry(n, c) or (e_node and e_node)

    /**
     * [144] ns-flow-map-implicit-entry(n,c) ::=  ns-flow-map-yaml-key-entry(n,c)
     *                                          | c-ns-flow-map-empty-key-entry(n,c)
     *                                          | c-ns-flow-map-json-key-entry(n,c)
     */
    fun ns_flow_map_implicit_entry(n: Int, c: Context) = "pair" cho (ns_flow_map_yaml_key_entry(n, c) or
            c_ns_flow_map_empty_key_entry(n, c) or c_ns_flow_map_json_key_entry(n, c))

    /**
     * [145] ns-flow-map-yaml-key-entry(n,c) ::= ns-flow-yaml-node(n,c)
     *                                           ( s-separate(n,c)?
     *                                             c-ns-flow-map-separate-value(n,c) )
     *                                          | e-node )
     */
    fun ns_flow_map_yaml_key_entry(n: Int, c: Context) = (("node" cho ns_flow_yaml_node(n, c)) cmt "pair") and
            ((opt(s_separate(n, c)) and c_ns_flow_map_separate_value(n, c)) or e_node)

    /**
     * [146] c-ns-flow-map-empty-key-entry(n,c) ::= e-node /* Key */
     *                                              c-ns-flow-map-separate-value(n,c)
     */
    fun c_ns_flow_map_empty_key_entry(n: Int, c: Context) = e_node and c_ns_flow_map_separate_value(n, c)

    /**
     * [147] c-ns-flow-map-separate-value(n,c) ::= “:” /* Not followed by an
     *                                                  ns-plain-safe(c) */
     *                                            ( ( s-separate(n,c) ns-flow-node(n,c) )
     *                                            | e-node /* Value */ )
     */
    fun c_ns_flow_map_separate_value(n: Int, c: Context) = c_mapping_value and (nla(ns_char) cmt "pair") and
            ((s_separate(n, c) and ns_flow_node(n, c)) or e_node)

    /**
     * [148] c-ns-flow-map-json-key-entry(n,c) ::= c-flow-json-node(n,c)
     *                                              ( ( s-separate(n,c)?
     *                                                  c-ns-flow-map-adjacent-value(n,c) )
     *                                            | e-node )
     */
    fun c_ns_flow_map_json_key_entry(n: Int, c: Context) = (("node" cho c_flow_json_node(n, c)) cmt "pair") and
            ((opt(s_separate(n, c)) and c_ns_flow_map_adjacent_value(n, c)) or e_node)

    /**
     * [149] c-ns-flow-map-adjacent-value(n,c) ::= “:” ( ( s-separate(n,c)?
     *                                                      ns-flow-node(n,c) )
     *                                                 | e-node ) /* Value */
     */
    fun c_ns_flow_map_adjacent_value(n: Int, c: Context) = (c_mapping_value cmt "pair") and
            ((opt(s_separate(n, c)) and ns_flow_node(n, c)) or e_node)

    /**
     * [150] ns-flow-pair(n,c) ::=  ( “?” s-separate(n,c)
     *                                  ns-flow-map-explicit-entry(n,c) )
     *                            | ns-flow-pair-entry(n,c)
     */
    fun ns_flow_pair(n: Int, c: Context) = wrapTokens(
        Code.BeginMapping, Code.EndMapping, wrapTokens(
            Code.BeginPair, Code.EndPair,
            ((c_mapping_key cmt "pair") and s_separate(n, c) and ns_flow_map_explicit_entry(
                n,
                c
            )) or ns_flow_pair_entry(n, c)
        )
    )

    /**
     * [151] ns-flow-pair-entry(n,c) ::=  ns-flow-pair-yaml-key-entry(n,c)
     *                                  | c-ns-flow-map-empty-key-entry(n,c)
     *                                  | c-ns-flow-pair-json-key-entry(n,c)
     */
    fun ns_flow_pair_entry(n: Int, c: Context) = ns_flow_pair_yaml_key_entry(n, c) or
            c_ns_flow_map_empty_key_entry(n, c) or
            c_ns_flow_pair_json_key_entry(n, c)

    /**
     * [152] ns-flow-pair-yaml-key-entry(n,c) ::= ns-s-implicit-yaml-key(flow-key)
     *                                            c-ns-flow-map-separate-value(n,c)
     */
    fun ns_flow_pair_yaml_key_entry(n: Int, c: Context) = ns_s_implicit_yaml_key(Context.FlowKey) and
            c_ns_flow_map_separate_value(n, c)

    /**
     * [153] c-ns-flow-pair-json-key-entry(n,c) ::= c-s-implicit-json-key(flow-key)
     *                                              c-ns-flow-map-adjacent-value(n,c)
     */
    fun c_ns_flow_pair_json_key_entry(n: Int, c: Context) =
        c_s_implicit_json_key(Context.FlowKey) and c_ns_flow_map_adjacent_value(n, c)

    /**
     * [154] ns-s-implicit-yaml-key(c) ::= ns-flow-yaml-node(n/a,c) s-separate-in-line?
     *                                     /* At most 1024 characters altogether */
     */
    fun ns_s_implicit_yaml_key(c: Context) =
        limitedTo("node" cho ns_flow_yaml_node(-1, c) and opt(s_separate_in_line), 1024)

    /**
     * [155] c-s-implicit-json-key(c) ::= c-flow-json-node(n/a,c) s-separate-in-line?
     *                                    /* At most 1024 characters altogether */
     */
    fun c_s_implicit_json_key(c: Context) =
        limitedTo("node" cho c_flow_json_node(-1, c) and opt(s_separate_in_line), 1024)
// 7.5 Flow Nodes

    /**
     * [156] ns-flow-yaml-content(n,c) ::= ns-plain(n,c)
     */
    fun ns_flow_yaml_content(n: Int, c: Context) = ns_plain(n, c)

    /**
     * [157] c-flow-json-content(n,c) ::=  c-flow-sequence(n,c) | c-flow-mapping(n,c)
     *                                   | c-single-quoted(n,c) | c-double-quoted(n,c)
     */
    fun c_flow_json_content(n: Int, c: Context) = { state: State -> c_flow_sequence(n, c)(state) } or
            c_flow_mapping(n, c) or c_single_quoted(n, c) or c_double_quoted(n, c)

    /**
     * [158] ns-flow-content(n,c) ::= ns-flow-yaml-content(n,c) | c-flow-json-content(n,c)
     */
    fun ns_flow_content(n: Int, c: Context) =
        ns_flow_yaml_content(n, c) or { state -> c_flow_json_content(n, c)(state) }

    /**
     * [159] ns-flow-yaml-node(n,c) ::=  c-ns-alias-node
     *                                 | ns-flow-yaml-content(n,c)
     *                                 | ( c-ns-properties(n,c)
     *                                      ( ( s-separate(n,c)
     *                                          ns-flow-yaml-content(n,c) )
     *                                      | e-scalar ) )
     */
    fun ns_flow_yaml_node(n: Int, c: Context) = wrapTokens(
        Code.BeginNode, Code.EndNode,
        (c_ns_alias_node or ns_flow_yaml_content(n, c) or (c_ns_properties(n, c) and
                ((s_separate(n, c) and ns_flow_yaml_content(n, c)) or e_scalar)))
    )

    /**
     * [160] c-flow-json-node(n,c) ::= ( c-ns-properties(n,c) s-separate(n,c) )?
     *                                 c-flow-json-content(n,c)
     */
    fun c_flow_json_node(n: Int, c: Context) = wrapTokens(Code.BeginNode, Code.EndNode, opt(
        c_ns_properties(n, c) and
                s_separate(n, c)
    ) and { state -> c_flow_json_content(n, c)(state) })

    /**
     * [161] ns-flow-node(n,c) ::=  c-ns-alias-node
     *                            | ns-flow-content(n,c)
     *                            | ( c-ns-properties(n,c)
     *                              ( ( s-separate(n,c)
     *                                  ns-flow-content(n,c) )
     *                                | e-scalar ) )
     */
    fun ns_flow_node(n: Int, c: Context) = wrapTokens(
        Code.BeginNode, Code.EndNode, (c_ns_alias_node or ns_flow_content(n, c) or
                (c_ns_properties(n, c) and ((s_separate(n, c) and ns_flow_content(n, c)) or e_scalar)))
    )

    /**
     * 8.1.1 Block Scalar Headers
     */

    /**
     * [162] c-b-block-header(m,t) ::= ( ( c-indentation-indicator(m)
     *                                     c-chomping-indicator(t) )
     *                                 | ( c-chomping-indicator(t)
     *                                     c-indentation-indicator(m) ) )
     *                                 s-b-comment
     */
    fun c_b_block_header(n: Int) = "header" cho (c_indentation_indicator(n).snd("m", c_chomping_indicator()).snd(
        "t",
        (s_white or b_char) omt "header"
    ) and s_b_comment and peekResult("m", "t") or
            c_chomping_indicator().snd("t", c_indentation_indicator(n)).snd("m", s_b_comment) and peekResult(
        "m",
        "t"
    ))

    /**
     * 8.1.1.1 Block Indentation Indicator
     */

    /**
     * [163] c-indentation-indicator(m) ::= ns-dec-digit ⇒ m = ns-dec-digit - #x30
     *                                      /* Empty */  ⇒ m = auto-detect()
     */
    fun c_indentation_indicator(n: Int) =
        indicator(ns_dec_digit not '0') and asInt() or detect_scalar_indentation(n)

    fun detect_scalar_indentation(n: Int) = peek(
        zom(nb_char) and
                opt(b_non_content and zom(l_empty(n, Context.BlockIn))) and count_spaces(-n)
    )

    fun count_spaces(n: Int): Parser =
        (s_space and { state -> count_spaces(n + 1)(state) }) or result(max(1, n))

    /**
     * 8.1.1.2 Chomping Indicator
     */

    /**
     * [164] c-chomping-indicator(t) ::= “-”         ⇒ t = strip
     *                                   “+”         ⇒ t = keep
     *                                   /* Empty */ ⇒ t = clip
     */
    fun c_chomping_indicator() =
        (indicator('-') and result(Chomp.Strip)) or (indicator('+') and result(Chomp.Keep)) or result(Chomp.Clip)

    fun end_block_scalar(t: Chomp) = when (t) {
        Chomp.Strip -> emptyToken(Code.EndScalar)
        Chomp.Clip -> emptyToken(Code.EndScalar)
        Chomp.Keep -> empty()
    }

    /**
     * [165] b-chomped-last(t) ::= t = strip ⇒ b-non-content | /* End of file */
     *                             t = clip  ⇒ b-as-line-feed | /* End of file */
     *                             t = keep  ⇒ b-as-line-feed | /* End of file */
     */
    fun b_chomped_last(t: Chomp) = when (t) {
        Chomp.Strip -> emptyToken(Code.EndScalar) and b_non_content
        Chomp.Clip -> b_as_line_feed and emptyToken(Code.EndScalar)
        Chomp.Keep -> b_as_line_feed
    }

    /**
     * [166] l-chomped-empty(n,t) ::= t = strip ⇒ l-strip-empty(n)
     *                                t = clip  ⇒ l-strip-empty(n)
     *                                t = keep  ⇒ l-keep-empty(n)
     */
    fun l_chomped_empty(n: Int, t: Chomp) = when (t) {
        Chomp.Strip -> l_strip_empty(n)
        Chomp.Clip -> l_strip_empty(n)
        Chomp.Keep -> l_keep_empty(n)
    }

    /**
     * [167] l-strip-empty(n) ::= ( s-indent(≤n) b-non-content )*
     *                            l-trail-comments(n)?
     */
    fun l_strip_empty(n: Int) = zom(s_indent_le(n) and b_non_content) and opt(l_trail_comments(n))

    /**
     * [168] l-keep-empty(n) ::= l-empty(n,block-in)*
     *                           l-trail-comments(n)?
     */
    fun l_keep_empty(n: Int) =
        zom(l_empty(n, Context.BlockIn)) and emptyToken(Code.EndScalar) and opt(l_trail_comments(n))

    /**
     * [169] l-trail-comments(n) ::= s-indent(<n) c-nb-comment-text b-comment
     *                               l-comment*
     */
    fun l_trail_comments(n: Int) =
        s_indent_lt(n) and c_nb_comment_text and b_comment and zom(nonEmpty(l_comment))

    /**
     * 8.1.2 Literal Style
     */

    /**
     * [170] c-l+literal(n) ::= “|” c-b-block-header(m,t)
     *                           l-literal-content(n+m,t)
     */
    fun c_l_literal(n: Int) = emptyToken(Code.BeginScalar) and (c_literal cmt "node") and
            prefixErrorWith(c_b_block_header(n), emptyToken(Code.EndScalar)) and text { state ->
                val m = state.yields["m"] as Int
                val t = state.yields["t"] as Chomp

                l_literal_content(n + m, t)(state)
            }

    /**
     * [171] l-nb-literal-text(n) ::= l-empty(n,block-in)*
     *                                s-indent(n) nb-char+
     */
    fun l_nb_literal_text(n: Int) = zom(l_empty(n, Context.BlockIn)) and s_indent(n) and oom(nb_char)

    /**
     * [172] b-nb-literal-next(n) ::= b-as-line-feed
     *                                l-nb-literal-text(n)
     */
    fun b_nb_literal_next(n: Int) = b_as_line_feed and l_nb_literal_text(n)

    /**
     * [173] l-literal-content(n,t) ::= ( l-nb-literal-text(n) b-nb-literal-next(n)*
     *                                    b-chomped-last(t) )?
     *                                  l-chomped-empty(n,t)
     */
    fun l_literal_content(n: Int, t: Chomp) = ((l_nb_literal_text(n) and zom(b_nb_literal_next(n)) and
            b_chomped_last(t)) or end_block_scalar(t)) and l_chomped_empty(n, t)

    /**
     * 8.1.3 Folded Style
     */

    /**
     * [174] c-l+folded(n) ::= “>” c-b-block-header(m,t)
     *                          l-folded-content(n+m,t)
     */
    fun c_l_folded(n: Int) = emptyToken(Code.BeginScalar) and (c_folded cmt "node") and
            prefixErrorWith(c_b_block_header(n), emptyToken(Code.EndScalar)) and
            text({ state ->
                val m = state.yields["m"] as Int
                val t = state.yields["t"] as Chomp

                l_folded_content(n + m, t)(state)
            })

    /**
     * [175] s-nb-folded-text(n) ::= s-indent(n) ns-char nb-char*
     */
    fun s_nb_folded_text(n: Int) = s_indent(n) and (ns_char cmt "fold") and zom(nb_char)

    /**
     * [176] l-nb-folded-lines(n) ::= s-nb-folded-text(n)
     *                                ( b-l-folded(n,block-in) s-nb-folded-text(n) )*
     */
    fun l_nb_folded_lines(n: Int) =
        s_nb_folded_text(n) and zom(b_l_folded(n, Context.BlockIn) and s_nb_folded_text(n))

    /**
     * [177] s-nb-spaced-text(n) ::= s-indent(n) s-white nb-char*
     */
    fun s_nb_spaced_text(n: Int) = s_indent(n) and (s_white cmt "fold") and zom(nb_char)

    /**
     * [178] b-l-spaced(n) ::= b-as-line-feed
     *                         l-empty(n,block-in)*
     */
    fun b_l_spaced(n: Int) = b_as_line_feed and zom(l_empty(n, Context.BlockIn))

    /**
     * [179] l-nb-spaced-lines(n) ::= s-nb-spaced-text(n)
     *                                ( b-l-spaced(n) s-nb-spaced-text(n) )*
     */
    fun l_nb_spaced_lines(n: Int) = s_nb_spaced_text(n) and zom(b_l_spaced(n) and s_nb_spaced_text(n))

    /**
     * [180] l-nb-same-lines(n) ::= l-empty(n,block-in)*
     *                              ( l-nb-folded-lines(n) | l-nb-spaced-lines(n) )
     */
    fun l_nb_same_lines(n: Int) = zom(l_empty(n, Context.BlockIn)) and
            ("fold" cho (l_nb_folded_lines(n) or l_nb_spaced_lines(n)))

    /**
     * [181] l-nb-diff-lines(n) ::= l-nb-same-lines(n)
     *                              ( b-as-line-feed l-nb-same-lines(n) )*
     */
    fun l_nb_diff_lines(n: Int) = l_nb_same_lines(n) and zom(b_as_line_feed and l_nb_same_lines(n))

    /**
     * [182] l-folded-content(n,t) ::= ( l-nb-diff-lines(n) b-chomped-last(t) )?
     *                                 l-chomped-empty(n,t)
     */
    fun l_folded_content(n: Int, t: Chomp) =
        ((l_nb_diff_lines(n) and b_chomped_last(t)) or end_block_scalar(t)) and
                l_chomped_empty(n, t)

    /**
     * 8.2.1 Block Sequences
     */

    fun detect_collection_indentation(n: Int) = peek(zom(nonEmpty(l_comment)) and count_spaces(-n))

    val detect_inline_indentation = peek(count_spaces(0))

    /**
     * [183] l+block-sequence(n) ::= ( s-indent(n+m) c-l-block-seq-entry(n+m) )+
     *                               /* For some fixed auto-detected m > 0 */
     */
    fun l_block_sequence(n: Int) = detect_collection_indentation(n).snd(
        "m",
        wrapTokens(Code.BeginSequence, Code.EndSequence) { state ->
            val m = state.yields["m"] as Int
            oom(s_indent(n + m) and c_l_block_seq_entry(n + m))(state)
        }
    )

    /**
     * [184] c-l-block-seq-entry(n) ::= “-” /* Not followed by an ns-char */
     *                                  s-l+block-indented(n,block-in)
     */
    fun c_l_block_seq_entry(n: Int): Parser = c_sequence_entry and (nla(ns_char) cmt "node") and
            s_l_block_indented(n, Context.BlockIn)

    /**
     * [185] s-l+block-indented(n,c) ::=  ( s-indent(m)
     *                                      ( ns-l-compact-sequence(n+1+m)
     *                                      | ns-l-compact-mapping(n+1+m) ) )
     *                                  | s-l+block-node(n,c)
     *                                  | ( e-node s-l-comments )
     */
    fun s_l_block_indented(n: Int, c: Context): Parser = detect_inline_indentation.snd("m",
        (("node" cho ({ state: State ->
            val m = state.yields["m"] as Int
            (s_indent(m) and (ns_l_in_line_sequence(n + 1 + m) or ns_l_in_line_mapping(n + 1 + m)))(state)
        } or s_l_block_node(n, c) or e_node and opt(s_l_comments) and unparsed(n + 1))) recovery unparsed(n + 1)))

    /**
     * [186] ns-l-compact-sequence(n) ::= c-l-block-seq-entry(n)
     *                                    ( s-indent(n) c-l-block-seq-entry(n) )*
     */
    fun ns_l_in_line_sequence(n: Int) = wrapTokens(
        Code.BeginNode, Code.EndNode, wrapTokens(
            Code.BeginSequence, Code.EndSequence,
            c_l_block_seq_entry(n) and zom(s_indent(n) and c_l_block_seq_entry(n))
        )
    )

    /**
     * 8.2.2 Block Mappings
     */

    /**
     * [187] l+block-mapping(n) ::= ( s-indent(n+m) ns-l-block-map-entry(n+m) )+
     *                              /* For some fixed auto-detected m > 0 */
     */
    fun l_block_mapping(n: Int) = detect_collection_indentation(n).snd(
        "m", wrapTokens(Code.BeginMapping, Code.EndMapping) { state ->
            val m = state.yields["m"] as Int
            oom(s_indent(n + m) and ns_l_block_map_entry(n + m))(state)
        }
    )

    /**
     * [188] ns-l-block-map-entry(n) ::=  c-l-block-map-explicit-entry(n)
     *                                  | ns-l-block-map-implicit-entry(n)
     */
    fun ns_l_block_map_entry(n: Int) = wrapTokens(
        Code.BeginPair, Code.EndPair, c_l_block_map_explicit_entry(n) or ns_l_block_map_implicit_entry(n)
    )

    /**
     * [189] c-l-block-map-explicit-entry(n) ::= c-l-block-map-explicit-key(n)
     *                                           ( l-block-map-explicit-value(n)
     *                                           | e-node )
     */
    fun c_l_block_map_explicit_entry(n: Int) =
        c_l_block_map_explicit_key(n) and (l_block_map_explicit_value(n) or e_node)

    /**
     * [190] c-l-block-map-explicit-key(n) ::= “?” s-l+block-indented(n,block-out)
     */
    fun c_l_block_map_explicit_key(n: Int) =
        (c_mapping_key cmt "node") and s_l_block_indented(n, Context.BlockOut)

    /**
     * [191] l-block-map-explicit-value(n) ::= s-indent(n)
     *                                         “:” s-l+block-indented(n,block-out)
     */
    fun l_block_map_explicit_value(n: Int) =
        s_indent(n) and c_mapping_value and s_l_block_indented(n, Context.BlockOut)

    /**
     * [192] ns-l-block-map-implicit-entry(n) ::= ( ns-s-block-map-implicit-key
     *                                            | e-node )
     *                                            c-l-block-map-implicit-value(n)
     */
    fun ns_l_block_map_implicit_entry(n: Int) =
        (ns_s_block_map_implicit_key() or e_node) and c_l_block_map_implicit_value(n)

    /**
     * [193] ns-s-block-map-implicit-key ::=  c-s-implicit-json-key(block-key)
     *                                      | ns-s-implicit-yaml-key(block-key)
     */
    fun ns_s_block_map_implicit_key() =
        c_s_implicit_json_key(Context.BlockKey) or ns_s_implicit_yaml_key(Context.BlockKey)

    /**
     * [194] c-l-block-map-implicit-value(n) ::= “:” ( s-l+block-node(n,block-out)
     *                                               | ( e-node s-l-comments ) )
     */
    fun c_l_block_map_implicit_value(n: Int): Parser = (c_mapping_value cmt "node") and
            ((s_l_block_node(
                n,
                Context.BlockOut
            ) or e_node and opt(s_l_comments) and unparsed(n + 1)) recovery unparsed(n + 1))

    /**
     * [195] ns-l-compact-mapping(n) ::= ns-l-block-map-entry(n)
     *                                  ( s-indent(n) ns-l-block-map-entry(n) )*
     */
    fun ns_l_in_line_mapping(n: Int) = wrapTokens(
        Code.BeginNode, Code.EndNode, wrapTokens(
            Code.BeginMapping, Code.EndMapping,
            ns_l_block_map_entry(n) and zom(s_indent(n) and ns_l_block_map_entry(n))
        )
    )

    /**
     * 8.2.3 Block Nodes
     */

    fun unparsed(n: Int) = (sol() or unparsed_text() and unparsed_break()) and
            zom(nonEmpty(unparsed_indent(n) and (unparsed_text() and unparsed_break())))

    fun unparsed_indent(n: Int) = token(Code.Unparsed, s_space tms n)

    fun unparsed_text() = token(Code.Unparsed, upto(eof() or c_forbidden() or b_break))

    fun unparsed_break() = eof() or peek(c_forbidden()) or token(Code.Unparsed, b_break) or empty()

    /**
     * [196] s-l+block-node(n,c) ::= s-l+block-in-block(n,c) | s-l+flow-in-block(n)
     */
    fun s_l_block_node(n: Int, c: Context) = s_l_block_in_block(n, c) or s_l_flow_in_block(n)

    /**
     * [197] s-l+flow-in-block(n) ::= s-separate(n+1,flow-out)
     *                                ns-flow-node(n+1,flow-out) s-l-comments
     */
    fun s_l_flow_in_block(n: Int) =
        s_separate(n + 1, Context.FlowOut) and ns_flow_node(n + 1, Context.FlowOut) and s_l_comments

    /**
     * [198] s-l+block-in-block(n,c) ::= s-l+block-scalar(n,c) | s-l+block-collection(n,c)
     */
    fun s_l_block_in_block(n: Int, c: Context) =
        wrapTokens(Code.BeginNode, Code.EndNode, (s_l_block_scalar(n, c) or s_l_block_collection(n, c)))

    /**
     * [199] s-l+block-scalar(n,c) ::= s-separate(n+1,c)
     *                                 ( c-ns-properties(n+1,c) s-separate(n+1,c) )?
     *                                 ( c-l+literal(n) | c-l+folded(n) )
     */
    fun s_l_block_scalar(n: Int, c: Context) = s_separate(n + 1, c) and
            opt(c_ns_properties(n + 1, c) and s_separate(n + 1, c)) and (c_l_literal(n) or c_l_folded(n))

    /**
     * [200] s-l+block-collection(n,c) ::= ( s-separate(n+1,c) c-ns-properties(n+1,c) )?
     *                                     s-l-comments
     *                                     ( l+block-sequence(seq-spaces(n,c))
     *                                     | l+block-mapping(n) )
     */
    fun s_l_block_collection(n: Int, c: Context) =
        opt(s_separate(n + 1, c) and (c_ns_properties(n + 1, c) and pla(s_l_comments))) and
                (s_l_comments) and (l_block_sequence(seq_spaces(n, c)) or l_block_mapping(n))

    /**
     * [201] seq-spaces(n,c) ::= c = block-out ⇒ n-1
     *                           c = block-in  ⇒ n
     */
    fun seq_spaces(n: Int, c: Context) = when (c) {
        Context.BlockOut -> n - 1
        Context.BlockIn -> n
        else -> throw IllegalArgumentException("unexpected")
    }

    /**
     * 9.1.1 Document Prefix
     */

    /**
     * [202] l-document-prefix ::= c-byte-order-mark? l-comment*
     */
    val l_document_prefix = opt(c_byte_order_mark) and zom(nonEmpty(l_comment))

    /**
     * 9.1.2 Document Markers
     */

    /**
     * [203] c-directives-end ::= “-” “-” “-”
     */
    val c_directives_end = token(Code.DirectivesEnd, '-' and '-' and '-')
    /**
     * [204] c-document-end ::= “.” “.” “.”
     */
    val c_document_end = token(Code.DocumentEnd, '.' and '.' and '.')
    /**
     * [205] l-document-suffix ::= c-document-end s-l-comments
     */
    val l_document_suffix = c_document_end and s_l_comments

    /**
     * [206] c-forbidden ::= /* Start of line */
     *                       ( c-directives-end | c-document-end )
     *                       ( b-char | s-white | /* End of file */ )
     */
    fun c_forbidden() = sol() and (c_directives_end or c_document_end) and (b_char or s_white or eof())

    /**
     * 9.1.3 Explicit Documents
     */

    /**
     * [207] l-bare-document ::= s-l+block-node(-1,block-in)
     *                           /* Excluding c-forbidden content */
     */
    val l_bare_document = forbidding("node" cho s_l_block_node(-1, Context.BlockIn), c_forbidden())

    /**
     * 9.1.4 Explicit Documents
     */

    /**
     * [208] l-explicit-document ::= c-directives-end
     *                              ( l-bare-document
     *                              | ( e-node s-l-comments ) )
     */
    val l_explicit_document = (c_directives_end cmt "doc") and
            ((l_bare_document or e_node and opt(s_l_comments) and unparsed(0)) recovery unparsed(0))

    /**
     * 9.1.5 Directives Documents
     */

    /**
     * [209] l-directive-document ::= l-directive+
     *                                l-explicit-document
     */
    val l_directives_document = oom(l_directive) and l_explicit_document

    /**
     * 9.2 Streams
     */

    /**
     * [210] l-any-document ::=  l-directive-document
     *                         | l-explicit-document
     *                         | l-bare-document
     */
    val l_any_document = wrapTokens(
        Code.BeginDocument, Code.EndDocument,
        "doc" cho ((l_directives_document or l_explicit_document or l_bare_document) recovery unparsed(0))
    )

    /**
     * [211] l-yaml-stream ::= l-document-prefix* l-any-document?
     *                         ( l-document-suffix+ l-document-prefix* l-any-document?
     *                         | l-document-prefix* l-explicit-document? )*
     */
    val l_yaml_stream = zom(nonEmpty(l_document_prefix)) and
            (eof() or pla(c_document_end and (b_char or s_white or eof())) or l_any_document) and
            zom(
                nonEmpty(
                    "more" cho (oom(l_document_suffix cmt "more") and zom(nonEmpty(l_document_prefix)) and
                            (eof() or l_any_document) or zom(nonEmpty(l_document_prefix)) and
                            ("doc" cho opt(wrapTokens(Code.BeginDocument, Code.EndDocument, l_explicit_document))))
                )
            )
}

object YamlDecoder : YamlParser() {
    /**
     * A Decoder decodes a stream of unicode characters.
     */
    interface Decoder {
        /**
         * Decodes a single unicode character in the given offset of given byte array.
         */
        fun decode(bytes: ByteArray, offset: Int): UniChar
    }

    /**
     * Represents a unicode character and its ending offset in the input stream.
     *
     * @param offset the ending offset of character in the stream
     * @param code the character code
     */
    data class UniChar(val offset: Int, val code: Int)

    /**
     * Decodes a UTF-32 (LE or BE) byte array to unicode characters.
     */
    class UTF32Decoder
    private constructor(val combine: (Int, Int, Int, Int) -> Int) : Decoder {

        companion object {
            /**
             * Decodes a UTF-32BE byte array to unicode characters.
             *
             * Combine function combines two bytes of a UTF-32BE character and returns the result.
             */
            fun be(): UTF32Decoder = UTF32Decoder { first, second, third, fourth ->
                fourth + 256 * (third + 256 * (second + 256 * first))
            }

            /**
             * Decodes a UTF-32LE byte array to unicode characters.
             *
             * Combine function combines two bytes of a UTF-32LE character and returns the result.
             */
            fun le(): UTF32Decoder = UTF32Decoder { first, second, third, fourth ->
                first + 256 * (second + 256 * (third + 256 * fourth))
            }
        }

        /**
         * @see Decoder#decode
         */
        override fun decode(bytes: ByteArray, offset: Int): UniChar {
            if (hasFewerThan(offset, 4, bytes)) {
                throw IllegalArgumentException("UTF-32 input contains invalid number of bytes")
            }

            val first = bytes[offset].toUnsignedInt()
            val second = bytes[offset + 1].toUnsignedInt()
            val third = bytes[offset + 2].toUnsignedInt()
            val fourth = bytes[offset + 3].toUnsignedInt()

            return UniChar(offset + 4, combine(first, second, third, fourth))
        }
    }

    /**
     * Decodes a UTF-16 (LE or BE) byte array to unicode characters.
     */
    class UTF16Decoder
    private constructor(val combine: (Int, Int) -> Int) : Decoder {

        companion object {
            /**
             * Decodes a UTF-16BE byte array to unicode characters.
             *
             * Combine function combines two bytes of a UTF-16BE character and returns the result.
             */
            fun be(): UTF16Decoder = UTF16Decoder { first, second -> second + first * 256 }

            /**
             * Decodes a UTF-16LE byte array to unicode characters.
             *
             * Combine function combines two bytes of a UTF-16LE character and returns the result.
             */
            fun le(): UTF16Decoder = UTF16Decoder { first, second -> first + second * 256 }
        }

        /**
         * Copied from the unicode FAQs.
         */
        private val surrogateOffset = 0x10000 - (0xD800 * 1024) - 0xDC00

        /**
         * @see Decoder#decode
         */
        override fun decode(bytes: ByteArray, offset: Int): UniChar {
            val head = undo(bytes, offset)
            return when {
                head.code in 0xD800..0xDBFF -> combineLead(head, bytes, head.offset)
                head.code in 0xDC00..0xDFFF -> throw IllegalArgumentException("UTF-16 contains trail surrogate without lead surrogate")
                else -> head
            }
        }

        /**
         * Decodes a UTF-16 (LE or BE) byte array to a unicode char.
         */
        private fun undo(bytes: ByteArray, offset: Int): UniChar {
            if (hasFewerThan(offset, 2, bytes)) {
                throw IllegalArgumentException("UTF-16 input contains odd number of bytes")
            }
            val first = bytes[offset].toUnsignedInt()
            val second = bytes[offset + 1].toUnsignedInt()

            return UniChar(offset + 2, combine(first, second))
        }

        /**
         * Combines two UTF-16 surrogates into a single unicode character.
         */
        private fun combineSurrogates(lead: Int, trail: Int): Int = lead * 1024 + trail + surrogateOffset

        /**
         * Combines the lead surrogate with the head of the rest of the input characters,
         * assumed to be a trail surrogate, and continues combining surrogate pairs.
         */
        private fun combineLead(lead: UniChar, bytes: ByteArray, offset: Int): UniChar {
            if (hasFewerThan(offset, 2, bytes)) {
                throw IllegalArgumentException("UTF-16 contains lead surrogate as final character")
            }

            val tail = undo(bytes, offset)
            val tailChar = tail.code

            if (tail.code in 0xDC00..0xDFFF) {
                return UniChar(tail.offset, combineSurrogates(lead.code, tailChar))
            }
            throw IllegalArgumentException("UTF-16 contains lead surrogate without trail surrogate")
        }
    }

    /**
     *  Decodes a UTF-8 byte array to unicode characters.
     */
    class UTF8Decoder : Decoder {

        /**
         * @see Decoder#decode
         */
        override fun decode(bytes: ByteArray, offset: Int): UniChar {
            if (hasFewerThan(offset, 1, bytes)) {
                throw IllegalArgumentException("UTF-8 input contains invalid number of bytes")
            }

            val first = bytes[offset].toUnsignedInt()

            return when {
                first < 0x80 -> UniChar(offset + 1, first)
                first < 0xC0 -> throw IllegalArgumentException("UTF-8 input contains invalid first byte")
                first < 0xE0 -> decodeTwoUTF8(first, offset + 1, bytes)
                first < 0xF0 -> decodeThreeUTF8(first, offset + 1, bytes)
                first < 0xF8 -> decodeFourUTF8(first, offset + 1, bytes)
                else -> throw IllegalArgumentException("UTF-8 input contains invalid first byte")
            }
        }

        /**
         * Decodes a two-byte UTF-8 character,
         * where the first byte is already available and the second is the head of
         * the bytes, and then continues to undo the UTF-8 encoding.
         */
        private fun decodeTwoUTF8(first: Int, offset: Int, bytes: ByteArray): UniChar {
            if (hasFewerThan(offset, 1, bytes)) {
                throw IllegalArgumentException("UTF-8 double byte char is missing second byte at eof")
            }

            val second = bytes[offset].toUnsignedInt()

            return when {
                second < 0x80 || 0xBF < second -> throw IllegalArgumentException("UTF-8 triple byte char has invalid second byte")
                else -> UniChar(offset + 1, combineTwoUTF8(first, second))
            }
        }

        /**
         * Combines the first and second bytes of a two-byte UTF-8 char into a single unicode char.
         */
        private fun combineTwoUTF8(first: Int, second: Int) =
            (first - 0xC0) * 64 + (second - 0x80)

        /**
         * Decodes a three-byte UTF-8 character,
         * where the first byte is already available and the second and third are the
         * head of the bytes, and then continues to undo the UTF-8 encoding.
         */
        private fun decodeThreeUTF8(first: Int, offset: Int, bytes: ByteArray): UniChar {
            if (hasFewerThan(offset, 2, bytes)) {
                throw IllegalArgumentException("UTF-8 triple byte char is missing bytes at eof")
            }

            val second = bytes[offset].toUnsignedInt()
            val third = bytes[offset + 1].toUnsignedInt()

            return when {
                second < 0x80 || 0xBF < second -> throw IllegalArgumentException("UTF-8 triple byte char has invalid second byte")
                third < 0x80 || 0xBF < third -> throw IllegalArgumentException("UTF-8 triple byte char has invalid third byte")
                else -> UniChar(offset + 2, combineThreeUTF8(first, second, third))
            }
        }

        /**
         * Combines the first, second and third bytes of a three-byte UTF-8 char into a single unicode char.
         */
        private fun combineThreeUTF8(first: Int, second: Int, third: Int) =
            (first - 0xE0) * 4096 + (second - 0x80) * 64 + (third - 0x80)

        /**
         * Decodes a four-byte UTF-8 character, where the first byte is already available and the second, third and fourth
         * are the head of the bytes, and then continues to undo the UTF-8 encoding.
         */
        private fun decodeFourUTF8(first: Int, offset: Int, bytes: ByteArray): UniChar {
            if (hasFewerThan(offset, 3, bytes)) {
                throw IllegalArgumentException("UTF-8 quad byte char is missing bytes at eof")
            }

            val second = bytes[offset].toUnsignedInt()
            val third = bytes[offset + 1].toUnsignedInt()
            val fourth = bytes[offset + 2].toUnsignedInt()

            return when {
                second < 0x80 || 0xBF < second -> throw IllegalArgumentException("UTF-8 quad byte char has invalid second byte")
                third < 0x80 || 0xBF < third -> throw IllegalArgumentException("UTF-8 quad byte char has invalid third byte")
                fourth < 0x80 || 0xBF < fourth -> throw IllegalArgumentException("UTF-8 quad byte char has invalid fourth byte")
                else -> UniChar(offset + 3, combineFourUTF8(first, second, third, fourth))
            }
        }

        /**
         * Combines the first, second, third and fourth bytes of a four-byte UTF-8 char into a single unicode char.
         */
        private fun combineFourUTF8(first: Int, second: Int, third: Int, fourth: Int) =
            (first - 0xF0) * 262144 + (second - 0x80) * 4096 + (third - 0x80) * 64 + (fourth - 0x80)
    }

    /**
     *  Checks whether there are fewer than n bytes left to read.
     */
    private fun hasFewerThan(offset: Int, n: Int, bytes: ByteArray) = bytes.size - offset < n

    /**
     * Copies the byte in an Int and returns the int representation of it.
     */
    private fun Byte.toUnsignedInt(): Int = this.toInt() and 0xFF

    /**
     * Recognized Unicode encodings. As of YAML 1.2 UTF-32 is also required.
     */
    enum class Encoding(private val text: String) {
        UTF8("UTF-8"), // UTF-8 encoding (or ASCII)
        UTF16LE("UTF-16LE"), // UTF-16 little endian
        UTF16BE("UTF-16BE"), // UTF-16 big endian
        UTF32LE("UTF-32LE"), // UTF-32 little endian
        UTF32BE("UTF-32BE"); // UTF-32 big endian

        override fun toString() = text
    }

    /**
     * A Stream wraps the given input (normal byte array) and decodes it lazily, on demand.
     */
    interface Stream {
        companion object {
            /**
             * Creates a Stream with given input.
             */
            fun of(input: ByteArray): Stream = ByteStream(input)

            /**
             * Creates an empty Stream
             */
            fun empty(): Stream = ByteStream(byteArrayOf())
        }

        /**
         * Returns the encoding of the input.
         */
        fun encoding(): Encoding

        /**
         * Returns the current head of the input.
         */
        fun head(): UniChar

        /**
         * Returns tail Stream of current Stream.
         */
        fun tail(): Stream

        /**
         * Returns true of the Stream is empty, false otherwise.
         */
        fun isEmpty(): Boolean

        /**
         * Returns true of the Stream is not empty, false otherwise.
         */
        fun isNotEmpty(): Boolean

        /**
         * Pushes an already decoded character in to head of current Stream.
         */
        fun push(head: UniChar): Stream

        /**
         * Returns all available characters in the Stream
         */
        fun codes(): IntArray
    }

    /**
     * Wraps the given byte arrays, detects its encoding and finally converts it to characters.
     */
    class ByteStream(private val input: ByteArray, private val offset: Int = 0) : Stream {
        companion object {
            private val X00 = 0x00.toByte()
            private val XFE = 0xFE.toByte()
            private val XFF = 0xFF.toByte()
            private val XEF = 0xEF.toByte()
            private val XBB = 0xBB.toByte()
            private val XBF = 0xBF.toByte()

            private val decoders = mapOf(
                Encoding.UTF8 to UTF8Decoder(),
                Encoding.UTF16LE to UTF16Decoder.le(),
                Encoding.UTF16BE to UTF16Decoder.be(),
                Encoding.UTF32LE to UTF32Decoder.le(),
                Encoding.UTF32BE to UTF32Decoder.be()
            )
        }

        @Suppress("ReplaceSizeCheckWithIsNotEmpty")
        private val encoding: Encoding by lazy {
            when {
                input.size >= 4 && input[0] == X00 && input[1] == X00 && input[2] == XFE && input[3] == XFF -> Encoding.UTF32BE
                input.size >= 4 && input[0] == X00 && input[1] == X00 && input[2] == X00 -> Encoding.UTF32BE
                input.size >= 4 && input[0] == XFF && input[1] == XFE && input[2] == X00 && input[3] == X00 -> Encoding.UTF32LE
                input.size >= 4 && input[1] == X00 && input[2] == X00 && input[3] == X00 -> Encoding.UTF32LE
                input.size >= 2 && input[0] == XFE && input[1] == XFF -> Encoding.UTF16BE
                input.size >= 1 && input[0] == X00 -> Encoding.UTF16BE
                input.size >= 2 && input[0] == XFF && input[1] == XFE -> Encoding.UTF16LE
                input.size >= 2 && input[1] == X00 -> Encoding.UTF16LE
                input.size >= 4 && input[0] == XEF && input[1] == XBB && input[2] == XBF -> Encoding.UTF8
                else -> Encoding.UTF8
            }
        }

        private val head: UniChar by lazy {
            decoders[encoding]!!.decode(input, offset)
        }

        /**
         * @see Stream#encoding()
         */
        override fun encoding(): Encoding = encoding

        /**
         * @see Stream#head()
         */
        override fun head(): UniChar = head

        /**
         * @see Stream#tail()
         */
        override fun tail(): ByteStream = ByteStream(this.input, head.offset)

        /**
         * @see Stream#isEmpty()
         */
        override fun isEmpty(): Boolean = input.size <= offset

        /**
         * @see Stream#isNotEmpty()
         */
        override fun isNotEmpty(): Boolean = !isEmpty()

        /**
         * @see Stream#push(head)
         */
        override fun push(head: UniChar): Stream = PushedStream(head, this)

        /**
         * @see Stream#codes()
         */
        override fun codes(): IntArray {
            val destination = ArrayList<Int>()

            var current = this
            while (current.isNotEmpty()) {
                destination.add(current.head.code)
                current = current.tail()
            }

            return destination.toIntArray()
        }
    }

    /**
     * A PushedStream adds the given decoded character as head to the given Stream.
     */
    class PushedStream(private val head: UniChar, private val tail: Stream) : Stream {
        /**
         * @see Stream#encoding()
         */
        override fun encoding(): Encoding = tail.encoding()

        /**
         * @see Stream#head()
         */
        override fun head(): UniChar = head

        /**
         * @see Stream#tail()
         */
        override fun tail(): Stream = tail

        /**
         * @see Stream#isEmpty()
         */
        override fun isEmpty(): Boolean = false

        /**
         * @see Stream#isNotEmpty()
         */
        override fun isNotEmpty(): Boolean = true

        /**
         * @see Stream#push(head)
         */
        override fun push(head: UniChar): Stream = PushedStream(head, this)

        /**
         * @see Stream#codes()
         */
        override fun codes(): IntArray = intArrayOf(head.code, *tail.codes())
    }
}

/**
 * A 'Parser' is basically a function computing a 'Reply'.
 */
internal typealias Parser = ((YamlParser.State) -> YamlParser.Reply)

open class YamlParser {

    /**
     * Chomp method.
     */
    enum class Chomp(val text: String) {
        /**
         * Remove all trailing line breaks.
         */
        Strip("strip"),

        /**
         * Keep first trailing line break.
         */
        Clip("clip"),

        /**
         * Keep all trailing line breaks.
         */
        Keep("keep");

        override fun toString(): String = text

        companion object {
            fun from(word: String): Chomp = when (word) {
                "strip" -> Strip
                "clip" -> Clip
                "keep" -> Keep
                else -> throw IllegalArgumentException("unknown chomp: $word")
            }
        }
    }

    /**
     * Code represents the one-character YEAST token code char.
     */
    enum class Code(val code: String) {

        /**
         *  BOM, contains TF8, TF16LE, TF32BE, etc.
         */
        Bom("U"),

        /**
         * Content text characters.
         */
        Text("T"),

        /**
         * Non-content (meta) text characters.
         */
        Meta("t"),

        /**
         * Separation line break.
         */
        Break("b"),

        /**
         * Line break normalized to content line feed.
         */
        LineFeed("L"),

        /**
         * Line break folded to content space.
         */
        LineFold("l"),

        /**
         * Character indicating structure.
         */
        Indicator("I"),

        /**
         * Separation white space.
         */
        White("w"),

        /**
         * Indentation spaces.
         */
        Indent("i"),

        /**
         * Document start marker.
         */
        DirectivesEnd("K"),

        /**
         * Document end marker.
         */
        DocumentEnd("k"),

        /**
         * Begins escape sequence.
         */
        BeginEscape("E"),

        /**
         * Ends escape sequence.
         */
        EndEscape("e"),

        /**
         * Begins comment.
         */
        BeginComment("C"),

        /**
         * Ends comment.
         */
        EndComment("c"),

        /**
         * Begins directive.
         */
        BeginDirective("D"),

        /**
         * Ends directive
         */
        EndDirective("d"),

        /**
         * Begins tag
         */
        BeginTag("G"),

        /**
         * Ends tag
         */
        EndTag("g"),

        /**
         * Begins tag handle
         */
        BeginHandle("H"),

        /**
         * Ends tag handle
         */
        EndHandle("h"),

        /**
         * Begins anchor
         */
        BeginAnchor("A"),

        /**
         * Ends anchor
         */
        EndAnchor("a"),

        /**
         * Begins node properties
         */
        BeginProperties("P"),

        /**
         * Ends node properties
         */
        EndProperties("p"),

        /**
         * Begins alias
         */
        BeginAlias("R"),

        /**
         * Ends alias
         */
        EndAlias("r"),

        /**
         * Begins scalar content
         */
        BeginScalar("S"),

        /**
         * Ends scalar content
         */
        EndScalar("s"),

        /**
         * Begins sequence content
         */
        BeginSequence("Q"),

        /**
         * Ends sequence content
         */
        EndSequence("q"),

        /**
         * Begins mapping content
         */
        BeginMapping("M"),

        /**
         * Ends mapping content
         */
        EndMapping("m"),

        /**
         * Begins mapping key:value pair
         */
        BeginPair("X"),

        /**
         * Ends mapping key:value pair
         */
        EndPair("x"),

        /**
         * Begins complete node
         */
        BeginNode("N"),

        /**
         * Ends complete node
         */
        EndNode("n"),

        /**
         * Begins document
         */
        BeginDocument("O"),

        /**
         * Ends document
         */
        EndDocument("o"),

        /**
         * Begins YAML stream
         */
        BeginStream(""),

        /**
         * Ends YAML stream
         */
        EndStream(""),

        /**
         * Parsing error at this point
         */
        Error("!"),

        /**
         * Unparsed due to errors (or at end of test)
         */
        Unparsed("-"),

        /**
         * Detected parameter (for testing)
         */
        Detected("$");

        override fun toString() = code
    }

    /**
     * Production context.
     */
    enum class Context(val text: String) {
        /**
         * Outside block sequence.
         */
        BlockOut("block-out"),

        /**
         * Inside block sequence.
         */
        BlockIn("block-in"),

        /**
         * Outside flow collection.
         */
        FlowOut("flow-out"),

        /**
         * Inside flow collection.
         */
        FlowIn("flow-in"),

        /**
         * Implicit block key.
         */
        BlockKey("block-key"),

        /**
         * Implicit flow key.
         */
        FlowKey("flow-key");


        override fun toString(): String = text

        companion object {
            fun from(word: String): Context = when (word) {
                "block_out" -> BlockOut
                "block_in" -> BlockIn
                "flow_out" -> FlowOut
                "flow_in" -> FlowIn
                "block_key" -> BlockKey
                "flow_key" -> FlowKey
                else -> throw IllegalArgumentException("unknown context: $word")
            }
        }
    }

    /**
     * Each invocation of a 'Parser' yields a 'Reply'. The 'Result' is only one part of the 'Reply'.
     */
    data class Reply(
        /**
         * Parsing result.
         */
        val result: Result,

        /**
         * Tokens generated by the parser.
         */
        val tokens: List<Token>,

        /**
         * Commitment to a decision point.
         */
        val commit: String?,

        /**
         * The updated parser state.
         */
        val state: State
    ) {
        override fun toString() = "Result: $result , Tokens: ${showTokens(tokens)}, Commit: $commit, State: {$state}"
    }

    /**
     * The 'Result' of each invocation is either an error, the actual result, or
     * a continuation for computing the actual result.
     */
    sealed class Result(val parser: Parser?, val completed: Boolean, val hasMore: Boolean) {
        /**
         * Parsing aborted with a failure.
         */
        class Failed(val message: Any) : Result(null, false, false) {
            override fun toString() = "Failed $message"
        }

        /**
         * Parsing completed with a result.
         */
        class Completed(val result: Any) : Result(null, true, false) {
            override fun toString() = "Result $result"
        }

        /**
         * Parsing is ongoing with a continuation.
         */
        class More(val result: Parser) : Result(result, true, true) {
            override fun toString() = "More"
        }
    }

    /**
     * Parsing state
     */
    data class State(
        /**
         * The input name for error messages.
         */
        val name: String,

        /**
         * The decoded input Stream.
         */
        val input: YamlDecoder.Stream,

        /**
         * Current decision name.
         */
        val decision: String,

        /**
         * Lookahead characters limit.
         */
        val limit: Int,

        /**
         * Pattern we must not enter into.
         */
        val forbidden: Parser?,

        /**
         * Disables token generation.
         */
        val isPeek: Boolean,

        /**
         * Is at start of line?
         */
        val isSol: Boolean,

        /**
         * (Reversed) characters collected for a token.
         */
        val chars: IntArray,

        /**
         * Byte offset of first collected character.
         */
        val charsByteOffset: Int,

        /**
         * Char offset of first collected character.
         */
        val charsCharOffset: Int,

        /**
         * Line of first collected character.
         */
        val charsLine: Int,

        /**
         * Character in line of first collected character.
         */
        val charsLineChar: Int,

        /**
         * Offset in bytes in the input.
         */
        val byteOffset: Int,

        /**
         * Offset in characters in the input.
         */
        val charOffset: Int,

        /**
         * Builds on YAML's line break definition.
         */
        val line: Int,

        /**
         * Character number in line.
         */
        val lineChar: Int,

        /**
         * Of token we are collecting chars for.
         */
        val code: Code,

        /**
         * Last matched character.
         */
        val last: Int,

        /**
         * The replies that are stored for future use.
         */
        val yields: MutableMap<String, Any>
    ) {
        override fun toString() = name
    }

    /**
     * Tries to parse this and failing that parses other, unless this has committed in which case is fails immediately.
     */
    infix fun Parser.or(other: ((State) -> Reply)): Parser = decide(this, other)

    /**
     * see Parse#or(parser)
     */
    infix fun Parser.or(other: Char): Parser = decide(this, of(other))

    /**
     * see Parse#or(parser)
     */
    infix fun Parser.or(other: Int): Parser = decide(this, of(other))

    /**
     * see Parse#or(parser)
     */
    infix fun Parser.or(other: IntRange): Parser = decide(this, of(other))

    /**
     * Parsers this and if it succeeds, parses the other.
     */
    infix fun Parser.and(other: Parser): Parser = { state ->
        and_bindParser(this, other)(state)
    }

    private fun and_bindParser(left: Parser, right: Parser): Parser = { state ->
        val reply = left(state)
        when (reply.result) {
            is Result.Failed -> reply.copy(result = Result.Failed(reply.result.message))
            is Result.Completed -> reply.copy(result = Result.More(right))
            is Result.More -> reply.copy(result = Result.More(and_bindParser(reply.result.result, right)))
        }
    }

    /**
     * see Parse#and(parser)
     */
    infix fun Parser.and(other: Char): Parser = this and of(other)

    /**
     * Parses this and if it succeeds, stores the result for future use and then parses the other.
     * TODO: is there a better way to keep the parse result ?
     */
    fun Parser.snd(name: String, other: Parser): Parser = { state ->
        fun clone(current: Map<String, Any>, result: Any): MutableMap<String, Any> {
            val map = HashMap(current)
            map[name] = result
            return map
        }

        fun bindParser(left: Parser, right: Parser): Parser = { state ->
            val reply = left(state)

            when (reply.result) {
                is Result.Failed -> reply.copy(result = Result.Failed(reply.result.message))
                is Result.Completed -> reply.copy(
                    result = Result.More(right),
                    state = reply.state.copy(yields = clone(state.yields, reply.result.result))
                )
                is Result.More -> reply.copy(result = Result.More(bindParser(reply.result.result, right)))
            }
        }

        bindParser(this, other)(state)
    }

    /**
     * Matches parser, except if rejected matches at this point.
     */
    infix fun Parser.not(rejected: Parser): Parser = reject(rejected, null) and this

    infix fun Parser.not(rejected: Char): Parser = reject(of(rejected), null) and this

    /**
     * Commits to decision (in an option) after successfully matching the parser.
     */
    infix fun Parser.cmt(decision: String): Parser = this and commit(decision)

    /**
     * Commits to decision (in an option) if the current position matches parser, without consuming any characters.
     */
    infix fun Parser.omt(decision: String): Parser = peek(this) and commit(decision)

    /**
     * Repeats parser exactly n times.
     */
    infix fun Parser.tms(n: Int): Parser = if (n <= 0) empty() else this and (this tms n - 1)

    /**
     * Matches fewer than n occurrences of parser.
     */
    infix fun Parser.lms(n: Int): Parser = when {
        n < 1 -> fail("Fewer than 0 repetitions")
        n == 1 -> reject(this, null)
        else -> "<x" cho ((this cmt "<x") and (this lms n - 1) or empty())
    }

    /**
     * Parses the specified parser; if it fails, it continues to the recovery parser to recover.
     */
    infix fun Parser.recovery(recover: Parser): Parser = { state ->
        val unparsed = { state: State -> finishToken()(state.copy(code = Code.Unparsed)) }
        val reply = this(state)
        if (state.isPeek)
            reply
        else when (reply.result) {
            is Result.Completed -> reply
            is Result.More -> reply.copy(result = Result.More(reply.result.result recovery recover))
            is Result.Failed -> reply.copy(
                result = Result.More(
                    fake(
                        Code.Error,
                        reply.result.message
                    ) and unparsed and recover
                )
            )
        }
    }

    /**
     * Converts 'Char' to a parser for a character (that returns nothing).
     */
    fun of(char: Char) = nextIf { it == char.toInt() }

    /**
     * see of(char)
     */
    fun of(code: Int) = nextIf { it == code }

    /**
     * Converts an int range to a parser for a character range (that returns nothing).
     */
    fun of(range: IntRange) = nextIf { range.start <= it && it <= range.endInclusive }

    /**
     * @see Parser#or(parser)
     */
    infix fun IntRange.or(other: IntRange): Parser = of(this) or of(other)

    /**
     * @see Parser#or(parser)
     */
    infix fun Char.or(other: Char): Parser = of(this) or of(other)

    /**
     * @see Parser#or(parser)
     */
    infix fun Char.or(other: Int): Parser = of(this) or of(other)

    /**
     * @see Parser#or(parser)
     */
    infix fun Char.and(other: Char): Parser = of(this) and of(other)

    /**
     * @see Parser#or(parser)
     */
    infix fun Char.and(other: Parser): Parser = of(this) and other

    /**
     *  Prepares a 'Reply' with the specified state and result.
     */
    fun returnReply(state: State, result: Any): Reply = Reply(Result.Completed(result), emptyList(), null, state)

    /**
     * Prepares a 'Reply' with the specified state and error message.
     */
    fun failReply(state: State, message: Any): Reply = Reply(Result.Failed(message), emptyList(), null, state)

    /**
     * Returns a failReply for an unexpected character.
     */
    fun unexpectedReply(state: State): Reply =
        if (state.input.isEmpty())
            failReply(state, "Unexpected end of input")
        else
            failReply(state, "Unexpected '${escape(state.input.head().code)}'")

    /**
     * Fails with a message.
     */
    fun fail(message: Any): Parser = { state -> failReply(state, message) }

    /**
     * Succeeds if parser matches some non-empty input characters at this point.
     */
    fun nonEmpty(parser: Parser): Parser = { state ->
        fun nonEmptyParser(offset: Int, parser: Parser): Parser = { state ->
            val reply = parser(state)
            val newSate = reply.state
            when (reply.result) {
                is Result.Failed -> reply
                is Result.Completed -> if (newSate.charOffset > offset) reply else failReply(
                    newSate,
                    "Matched empty pattern"
                )
                is Result.More -> reply.copy(result = Result.More(nonEmptyParser(offset, reply.result.result)))
            }
        }

        nonEmptyParser(state.charOffset, parser)(state)
    }

    /**
     * Always matches without consuming any input.
     */
    fun empty(): Parser = { state -> returnReply(state, "") }

    /**
     * Matches the end of the input.
     */
    fun eof(): Parser = { state -> if (state.input.isEmpty()) returnReply(state, "") else unexpectedReply(state) }

    /**
     * Matches the start of a line.
     */
    fun sol(): Parser =
        { state -> if (state.isSol) returnReply(state, "") else failReply(state, "Expected start of line") }

    /**
     * Returns a 'Reply' containing the state and token.
     * Any collected characters are cleared (either there are none, or we
     * put them in this token, or we don't want them).
     */
    fun tokenReply(state: State, token: Token): Reply = Reply(
        Result.Completed(""),
        listOf(token),
        null,
        state.copy(chars = intArrayOf(), charsByteOffset = -1, charsCharOffset = -1, charsLine = -1, charsLineChar = -1)
    )

    /**
     * Places all collected text into a new token and begins a new
     * one, or does nothing if there are no collected characters.
     */
    fun finishToken(): Parser = { state ->
        val newState = state.copy(
            chars = IntArray(0),
            charsByteOffset = -1,
            charsCharOffset = -1,
            charsLine = -1,
            charsLineChar = -1
        )

        when {
            state.isPeek -> returnReply(newState, "")
            state.chars.isEmpty() -> returnReply(newState, "")
            else -> tokenReply(
                newState, Token(
                    state.charsByteOffset,
                    state.charsCharOffset,
                    state.charsLine,
                    state.charsLineChar,
                    state.code,
                    Escapable.of(state.chars.reversed().toIntArray())
                )
            )
        }
    }

    /**
     * Places all text matched by parser into a 'Token' with the specified code (unless it is empty).
     * Note it collects the text even if there is an error.
     */
    fun token(code: Code, parser: Parser): Parser = finishToken() and with(
        { state: State, code: Code? -> state.copy(code = code!!) },
        State::code,
        code,
        parser and finishToken()
    )

    /**
     * Creates a token with the specified code and "fake"
     * text characters, instead of whatever characters are collected so far.
     */
    fun fake(code: Code, text: Any): Parser = { state ->
        if (state.isPeek) {
            returnReply(state, "")
        } else {
            tokenReply(
                state, Token(
                    if (state.charsByteOffset == -1) state.byteOffset else state.charsByteOffset,
                    if (state.charsCharOffset == -1) state.charOffset else state.charsCharOffset,
                    if (state.charsLine == -1) state.line else state.charsLine,
                    if (state.charsLineChar == -1) state.lineChar else state.charsLineChar,
                    code,
                    Escapable.of(text.toString())
                )
            )
        }
    }

    /**
     * Collects the text matched by the specified parser into a Meta token.
     */
    fun meta(parser: Parser): Parser = token(Code.Meta, parser)

    /**
     * @see meta(parser)
     */
    fun meta(char: Char): Parser = token(Code.Meta, of(char))

    /**
     * @see meta(parser)
     */
    fun meta(code: Int): Parser = token(Code.Meta, of(code))

    /**
     * Collects the text matched by the specified parser into an Indicator token.
     */
    fun indicator(parser: Parser): Parser = token(Code.Indicator, parser)

    /**
     * @see indicator(parser)
     */
    fun indicator(char: Char): Parser = token(Code.Indicator, of(char))

    /**
     * Collects the text matched by the specified parser into a Text token.
     */
    fun text(parser: Parser): Parser = token(Code.Text, parser)

    /**
     * Returns an empty token.
     */
    fun emptyToken(code: Code): Parser = finishToken() and { state ->
        if (state.isPeek)
            returnReply(state, "")
        else
            tokenReply(
                state,
                Token(state.byteOffset, state.charOffset, state.line, state.lineChar, code, Escapable.of(""))
            )
    }

    /**
     * Wraps the specified parser with matching beginCode and endCode tokens.
     */
    fun wrapTokens(beginCode: Code, endCode: Code, parser: Parser): Parser =
        emptyToken(beginCode) and prefixErrorWith(parser, emptyToken(endCode)) and emptyToken(endCode)

    /**
     * Invokes the prefix parser if an error is detected during the pattern parser, and then return the error.
     */
    fun prefixErrorWith(parser: Parser, prefix: Parser): Parser = { state ->
        val reply = parser(state)
        when (reply.result) {
            is Result.Completed -> reply
            is Result.More -> reply.copy(result = Result.More(prefixErrorWith(reply.result.result, prefix)))
            is Result.Failed -> reply.copy(result = Result.More(prefix and fail(reply.result.message)))
        }
    }

    /**
     * Tries to match parser, otherwise does nothing.
     */
    fun opt(parser: Parser): Parser = parser and empty() or empty()

    /**
     * Matches zero or more occurrences of repeat, as long as each one actually consumes input characters.
     */
    fun zom(parser: Parser): Parser {
        fun zomParser(): Parser = (parser cmt "*") and { state -> zomParser()(state) } or empty()
        return "*" cho zomParser()
    }

    /**
     * Matches one or more occurrences of parser, as long as each one actually consumed input characters.
     */
    fun oom(parser: Parser): Parser = parser and zom(parser)

    /**
     * Tries to parse first, and failing that parses
     * second, unless first has committed in which case is fails immediately.
     */
    fun decide(left: Parser, right: Parser): Parser = { state ->
        fun decideParser(point: State, tokens: List<Token>, left: Parser, right: Parser): Parser = { state ->
            val reply = left(state)
            val newTokens = tokens + reply.tokens
            when (reply.result) {
                is Result.Failed -> Reply(Result.More(right), emptyList(), null, point)
                is Result.Completed -> reply.copy(tokens = newTokens)
                is Result.More ->
                    if (reply.commit != null)
                        reply.copy(tokens = newTokens, result = Result.More(reply.result.result))
                    else
                        decideParser(point, newTokens, reply.result.result, right)(reply.state)
            }
        }

        decideParser(state, emptyList(), left, right)(state)
    }

    /**
     * Provides a decision name to the choice about to
     * be made in parser, to allow to commit to it.
     */
    fun choice(decision: String, parser: Parser): Parser = { state ->
        fun choiceParser(parentDecision: String, makingDecision: String, parser: Parser): Parser = { state ->
            val reply = parser(state)
            val commit = when (reply.commit) {
                null -> null
                makingDecision -> null
                else -> reply.commit
            }

            when (reply.result) {
                is Result.More -> reply.copy(
                    commit = commit,
                    result = Result.More(choiceParser(parentDecision, makingDecision, reply.result.result))
                )
                else -> reply.copy(commit = commit, state = reply.state.copy(decision = parentDecision))
            }
        }

        choiceParser(state.decision, decision, parser)(state.copy(decision = decision))
    }

    /**
     * Succeeds if parser matches at the previous character. It does not consume any input.
     */
    fun prev(parser: Parser): Parser = { state ->
        fun prevParser(point: State, parser: Parser, state: State): Reply {
            val reply = parser(state)
            return when (reply.result) {
                is Result.Failed -> failReply(point, reply.result.message)
                is Result.Completed -> returnReply(point, reply.result.result)
                is Result.More -> prevParser(point, reply.result.result, reply.state)
            }
        }
        prevParser(
            state,
            parser,
            state.copy(isPeek = true, input = state.input.push(YamlDecoder.UniChar(-1, state.last)))
        )
    }

    /**
     * Succeeds if parser matches at this point, but does not consume any input.
     */
    fun peek(parser: Parser): Parser = { state ->
        fun peekParser(point: State, parser: Parser, state: State): Reply {
            val reply = parser(state)
            return when (reply.result) {
                is Result.Failed -> failReply(point, reply.result.message)
                is Result.Completed -> returnReply(point, reply.result.result)
                is Result.More -> peekParser(point, reply.result.result, reply.state)
            }
        }
        peekParser(state, parser, state.copy(isPeek = true))
    }

    /**
     * Fails if parser matches at this point, and does nothing otherwise.
     * If name is provided, it is used in the error message, otherwise the messages uses the current character.
     */
    fun reject(parser: Parser, name: String?): Parser {
        fun rejectParser(point: State, name: String?, parser: Parser, state: State): Reply {
            val reply = parser(state)
            return when (reply.result) {
                is Result.Failed -> returnReply(point, "")
                is Result.Completed -> if (name == null) unexpectedReply(point) else failReply(
                    point,
                    "Unexpected $name"
                )
                is Result.More -> rejectParser(point, name, reply.result.result, reply.state)
            }
        }

        return { state -> rejectParser(state, name, parser, state.copy(isPeek = true)) }
    }

    /**
     * Consumes all the character up to and not including the next point where the specified parser is a match.
     */
    fun upto(parser: Parser): Parser = zom(nla(parser) and nextIf({ true }))

    /**
     *  Commits the parser to all the decisions up to the most recent parent decision.
     *  This makes all tokens generated in this parsing path immediately available to the caller.
     */
    fun commit(decision: String): Parser = { state -> Reply(Result.Completed(""), emptyList(), decision, state) }

    /**
     * Increments line counter and resets lineChar.
     */
    fun nextLine(): Parser = { state ->
        returnReply(state.copy(isSol = true, line = state.line + 1, lineChar = 0), "")
    }

    /**
     * Invokes the specified parser with the value of the specified field set to value for the duration of the
     * invocation, using the set and get functions to manipulate it.
     */
    fun <T> with(set: (State, T?) -> State, get: (State) -> T, value: T?, parser: Parser): Parser = { state ->

        fun withParser(parentValue: T, parser: Parser): Parser = { state ->
            val reply = parser(state)
            when (reply.result) {
                is Result.More -> reply.copy(result = Result.More(withParser(parentValue, reply.result.result)))
                else -> reply.copy(state = set(reply.state, parentValue))
            }
        }
        withParser(get(state), parser)(set(state, value))
    }

    /**
     * Parses the specified parser ensuring that it does not contain anything matching the forbidden parser.
     */
    fun forbidding(parser: Parser, forbidden: Parser): Parser = with(
        { state: State, forbidden: Parser? -> state.copy(forbidden = forbidden) },
        State::forbidden,
        forbidden and empty(),
        parser
    )

    /**
     * Parses the specified parser ensuring that it does not consume more than the limit input chars.
     */
    fun limitedTo(parser: Parser, limit: Int): Parser = with(
        { state: State, limit: Int? -> state.copy(limit = limit!!) },
        State::limit,
        limit,
        parser
    )

    /**
     * Fails if the current position matches the 'State' forbidden
     * pattern or if the 'State' lookahead limit is reached. Otherwise it consumes
     * (and buffers) the next input char if it satisfies test.
     */
    fun nextIf(test: (Int) -> Boolean): Parser {
        fun consumeNextIf(state: State): Reply {
            return if (!state.input.isEmpty() && test(state.input.head().code)) {
                val char = state.input.head().code
                val chars = if (state.isPeek) IntArray(0) else intArrayOf(char) + state.chars

                val byteOffset =
                    if (state.isPeek) -1 else if (state.chars.isEmpty()) state.byteOffset else state.charsByteOffset
                val charOffset =
                    if (state.isPeek) -1 else if (state.chars.isEmpty()) state.charOffset else state.charsCharOffset
                val line = if (state.isPeek) -1 else if (state.chars.isEmpty()) state.line else state.charsLine
                val lineChar =
                    if (state.isPeek) -1 else if (state.chars.isEmpty()) state.lineChar else state.charsLineChar

                val isSol = if (char == 0xFEFF) state.isSol else false

                val newState = state.copy(
                    input = state.input.tail(),
                    last = char,
                    chars = chars,
                    charsByteOffset = byteOffset,
                    charsCharOffset = charOffset,
                    charsLine = line,
                    charsLineChar = lineChar,
                    isSol = isSol,
                    byteOffset = state.input.head().offset,
                    charOffset = state.charOffset + 1,
                    lineChar = state.lineChar + 1
                )

                returnReply(newState, "")
            } else {
                unexpectedReply(state)
            }
        }

        fun limitedNextIf(state: State): Reply = when (state.limit) {
            -1 -> consumeNextIf(state)
            0 -> failReply(state, "Lookahead limit reached")
            else -> consumeNextIf(state.copy(limit = state.limit - 1))
        }

        return { state ->
            if (state.forbidden == null) limitedNextIf(state) else {
                val newParser = reject(state.forbidden, "forbidden pattern")
                val reply = newParser(state.copy(forbidden = null))
                when (reply.result) {
                    is Result.Failed -> reply
                    is Result.Completed -> limitedNextIf(state)
                    else -> throw IllegalStateException("ME: unexpected")
                }
            }
        }
    }

    /**
     * Doesn't actually detect the encoding, we just call it
     * this way to make the productions compatible with the spec. Instead it simply
     * reports the encoding (which was already detected when we started parsing).
     */
    fun bom(code: Int): Parser = { state ->
        (of(code) and fake(Code.Bom, state.input.encoding().toString().substring(1)))(state)
    }

    /**
     * Returns the last consumed character, which is assumed to be a decimal digit, as an integer.
     */
    fun asInt(): Parser = { state -> returnReply(state, state.last - 0x30) }

    /**
     * Returns the previously stored result value with given name
     */
    fun peekResult(result: String): Parser = { state -> returnReply(state, state.yields[result] as Any) }

    /**
     * Returns the previously stored results value with given names
     */
    fun peekResult(first: String, second: String): Parser = { state ->
        returnReply(state.copy(yields = state.yields), "(${state.yields[first] as Any},${state.yields[second] as Any})")
    }

    /**
     * Wraps the given value and returns it as parser.
     */
    fun result(result: Int): Parser = { state -> returnReply(state, result) }

    /**
     * Wraps the given value and returns it as parser.
     */
    fun result(result: Chomp): Parser = { state -> returnReply(state, result) }

    /**
     * Provides a decision name to the choice about to be made, to allow to @commit@ to it.
     */
    infix fun String.cho(parser: Parser): Parser = choice(this, parser)

    /**
     * Commits to decision (in an option) after successfully matching the parser.
     */
    infix fun Char.cmt(decision: String): Parser = of(this) and commit(decision)

    /**
     * Matches the current point without consuming any characters,
     * if the previous character matches the lookbehind parser (single character positive lookbehind)
     */
    fun plb(lookbehind: Parser): Parser = prev(lookbehind)

    /**
     * Matches the current point without consuming any characters,
     * if it matches the lookahead parser (positive lookahead)
     */
    fun pla(lookahead: Parser): Parser = peek(lookahead)

    /**
     * Matches the current point without consuming any characters,
     * if it matches the lookahead parser (negative lookahead)
     */
    fun nla(lookahead: Parser): Parser = reject(lookahead, null)

    /**
     * Result tokens
     *
     * The parsing result is a stream of tokens rather than a parse tree. The idea is to
     * convert the YAML input into byte codes. These byte codes are intended to be written
     * into a byte codes file (or more likely a UNIX pipe) for further processing.
     */

    /**
     * Parsed token.
     */
    data class Token(
        /**
         * 0-base byte offset in stream.
         */
        val byteOffset: Int,

        /**
         * 0-base character offset in stream.
         */
        val charOffset: Int,

        /**
         * 1-based line number.
         */
        val line: Int,

        /**
         * 0-based character in line.
         */
        val lineChar: Int,

        /**
         * Specific token 'Code'.
         */
        val code: Code,

        /**
         * Contained input chars, if any.
         */
        val text: Escapable
    ) {


        /**
         * Converts a 'Token' to two YEAST lines: a comment with the position numbers and the actual token line.
         */
        override fun toString() = "# B: $byteOffset, C: $charOffset, L: $line, c: $lineChar\n$code$text\n"
    }

    /**
     * A container to keep the input, as normal text or array of codes, and lazily escape them if needed.
     */
    sealed class Escapable {
        companion object {
            fun of(text: IntArray): Escapable = Code(text)

            fun of(text: String): Escapable = Text(text)
        }

        class Code(val codes: IntArray) : Escapable() {
            override fun toString(): String = escape(codes, "")
        }

        class Text(val text: String) : Escapable() {
            override fun toString(): String = text
        }
    }

    /**
     * 'Tokenizer' converts a (named) input text into a list of 'Token'. Errors
     * are reported as tokens with the Error 'Code', and the unparsed text
     * following an error may be attached as a final token (if the withFollowing is true).
     */
    interface Tokenizer {
        fun tokenize(name: String, input: ByteArray, withFollowing: Boolean): List<Token>
    }

    /**
     * Converts the pattern to a simple 'Tokenizer'.
     */
    class PatternTokenizer(val pattern: Parser) : Tokenizer {

        override fun tokenize(name: String, input: ByteArray, withFollowing: Boolean): List<Token> {
            return patternParser(withFollowing, wrap(pattern), initialState(name, input))
        }

        //fun patternParser(parser: Parser, state: State): Sequence<Token> {
        //    val reply = parser(state)
        //    val tokens = commitBugs(reply)
        //    val rState = reply.state
        //
        //    return when (reply.result) {
        //        is Result.Failed -> errorTokens(tokens, rState, reply.result.message as String, withFollowing)
        //        is Result.Completed -> tokens
        //        is Result.More -> tokens + patternParser(reply.result.result, rState)
        //    }
        //}

        private fun patternParser(withFollowing: Boolean, _parser: Parser, _state: State): List<Token> {
            val out = arrayListOf<Token>()
            var parser = _parser
            var state = _state

            loop@ while (true) {
                val reply = parser(state)
                val tokens = commitBugs(reply)
                val rState = reply.state

                when (reply.result) {
                    is Result.Failed -> {
                        out += errorTokens(tokens, rState, reply.result.message as String, withFollowing)
                        break@loop
                    }
                    is Result.Completed -> {
                        out += tokens
                        break@loop
                    }
                    is Result.More -> {
                        out += tokens
                        parser = reply.result.result
                        state = rState
                        continue@loop
                    }
                }
            }
            return out
        }
    }

    /**
     * Converts the parser returning parser to a
     * simple 'Tokenizer' (only used for tests). The result is reported as a token
     * with the Detected 'Code' The result is reported as a token with the Detected 'Code'.
     */
    class ParserTokenizer(val what: String, val parser: Parser) : Tokenizer {

        override fun tokenize(name: String, input: ByteArray, withFollowing: Boolean): List<Token> {

            fun parserParser(parser: Parser, state: State): List<Token> {
                val reply = parser(state)
                val tokens = commitBugs(reply)
                val rState = reply.state

                return when (reply.result) {
                    is Result.Failed -> errorTokens(tokens, rState, reply.result.message as String, withFollowing)
                    is Result.Completed -> tokens + Token(
                        rState.byteOffset, rState.charOffset, rState.line,
                        rState.lineChar, Code.Detected, Escapable.of("$what=${reply.result.result}")
                    )
                    is Result.More -> tokens + parserParser(reply.result.result, rState)
                }
            }

            return parserParser(wrap(parser), initialState(name, input))
        }
    }


    companion object : YamlParser() {
        /**
         * Escapes the given character (code) if needed.
         */
        fun escape(code: Int): String = when {
            ' '.toInt() <= code && code != '\\'.toInt() && code <= '~'.toInt() -> "${code.toChar()}"
            code <= 0xFF -> "\\x${toHex(2, code)}"
            code in 256..0xFFFF -> "\\u${toHex(4, code)}"
            else -> "\\U${toHex(8, code)}"
        }

        /**
         * Escapes all the non-ASCII characters in the given text, as well as escaping
         * the \\ character, using the \\xXX, \\uXXXX and \\UXXXXXXXX escape sequences.
         */
        fun escape(text: IntArray, separator: String = ", "): String =
            text.map(YamlParser.Companion::escape).joinToString(separator)

        /**
         * Converts the int to the specified number of hexadecimal digits.
         */
        fun toHex(digits: Int, n: Int): String =
            if (digits == 1) "${intToDigit(n)}" else "${toHex(digits - 1, n / 16)}${intToDigit(n % 16)}"

        fun intToDigit(n: Int): Char = if (n < 10) (48 + n).toChar() else (87 + n).toChar()

        /**
         * Converts a list of tokens to a multi-line YEAST text.
         */
        fun showTokens(tokens: List<Token>): String = tokens.fold("") { text, token -> text + token.toString() }

        /**
         * Returns an initial 'State' for parsing the input (with name for error messages).
         */
        private fun initialState(name: String, input: ByteArray): State = State(
            name, YamlDecoder.Stream.of(input), "", -1, null, false,
            true, intArrayOf(), -1, -1, -1, -1, 0, 0, 1, 0, Code.Unparsed, ' '.toInt(), HashMap()
        )

        /**
         * Inserts an error token if a commit was made outside a named choice. This should never happen outside tests.
         */
        private fun commitBugs(reply: Reply): List<Token> {
            val tokens = reply.tokens
            val state = reply.state

            return if (reply.commit == null)
                tokens
            else
                tokens + Token(
                    state.byteOffset, state.charOffset, state.line, state.lineChar, Code.Error,
                    Escapable.of("Commit to '${reply.commit}' was made outside it")
                )
        }

        /**
         * Invokes the parser, ensures any unclaimed input characters
         * are wrapped into a token (only happens when testing productions), ensures no
         * input is left unparsed, and returns the parser's result.
         */
        private fun wrap(parser: Parser): Parser =
            parser.snd("result", finishToken()) and eof() and peekResult("result")

        /**
         * Appends an Error token with the specified message at the end of tokens, and if withFollowing
         * also appends the unparsed text following the error as a final Unparsed token.
         */
        private fun errorTokens(tokens: List<Token>, state: State, message: String, flag: Boolean): List<Token> {
            val newTokens = tokens +
                    Token(
                        state.byteOffset,
                        state.charOffset,
                        state.line,
                        state.lineChar,
                        Code.Error,
                        Escapable.of(message)
                    )

            return if (flag && state.input.isNotEmpty())
                newTokens +
                        Token(
                            state.byteOffset,
                            state.charOffset,
                            state.line,
                            state.lineChar,
                            Code.Unparsed,
                            Escapable.of(state.input.codes())
                        )
            else
                newTokens
        }
    }
}
