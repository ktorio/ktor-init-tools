#!/usr/bin/env kscript

import java.io.*
import java.nio.charset.*
import java.util.*

fun main(args: Array<String>) {
    val properties = Properties().apply { load(File("gradle.properties").readText().reader()) }
    val version = properties["version"]

    File("ktor-intellij-plugin/resources/META-INF/plugin.xml").updateFile(save = true) {
        it.replace(Regex("<version>(.*?)</version>"), "<version>$version</version>")
    }

    File("ktor-generator-website/resources/index.html").updateFile(save = true) {
        it.replace(Regex("""Ktor Project Generator \((.*?)\)"""), "Ktor Project Generator ($version)")
    }
}

fun File.updateFile(save: Boolean, charset: Charset = Charsets.UTF_8, callback: (String) -> String) {
    print("Processing $this...")
    val oldText = this.readText(charset)
    val newText = callback(oldText)
    if (save) {
        if (oldText != newText) {
            this.writeText(newText, charset)
            println("Saved")
        } else {
            println("Same content")
        }
    } else {
        println("Not saved")
    }
}