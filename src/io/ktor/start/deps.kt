package io.ktor.start

import io.ktor.start.util.*

data class Dependency(
    val repos: List<String>,
    val artifact: String,
    val id: String,
    val title: String,
    val description: String,
    val documentation: String? = null
)

object Repos {
    val jcenter = listOf("jcenter")
    val ktor = listOf("ktor")
    val kotlin_js_wrappers = listOf("https://kotlin.bintray.com/kotlin-js-wrappers")
}

@Suppress("unused")
object Dependencies {
    val HTML_DSL = Dependency(
        Repos.jcenter,
        "io.ktor:ktor-html-builder:\$ktor_version",
        "html-dsl",
        "HTML DSL",
        "Generate HTML using Kotlin code"
    )
    val CSS_DSL = Dependency(
        Repos.ktor + Repos.kotlin_js_wrappers,
        "org.jetbrains:kotlin-css-jvm:1.0.0-pre.31-kotlin-1.2.41",
        "css-dsl",
        "CSS DSL",
        "Generate CSS using Kotlin code"
    )
    val TPL_FREEMARKER = Dependency(
        Repos.ktor,
        "io.ktor:ktor-freemarker:\$ktor_version",
        "freemarker",
        "Freemarker",
        "Serve HTML content using Apache freemarker",
        documentation = "https://ktor.io/features/freemarker.html"
    )
    val TPL_VELOCITY = Dependency(
        Repos.ktor,
        "io.ktor:ktor-velocity:\$ktor_version",
        "velocity",
        "Velocity",
        "Serve HTML content using Apache velocity"
    )
    val AUTH = Dependency(
        Repos.ktor,
        "io.ktor:ktor-auth:\$ktor_version",
        "auth",
        "Authentication",
        "Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2",
        documentation = "https://ktor.io/features/authentication.html"
    )
    val AUTH_JWT = Dependency(
        Repos.ktor,
        "io.ktor:ktor-auth-jwt:\$ktor_version",
        "auth-jwt",
        "Authentication JWT",
        "Handle JWT authentication",
        documentation = "https://ktor.io/features/authentication.html#jwt"
    )
    val AUTH_LDAP = Dependency(
        Repos.ktor,
        "io.ktor:ktor-auth-ldap:\$ktor_version",
        "auth-ldap",
        "Authentication LDAP",
        "Handle JDAP authentication",
        documentation = "https://ktor.io/features/authentication.html#ldap"
    )
    val JSON_GSON = Dependency(
        Repos.ktor,
        "io.ktor:ktor-gson:\$ktor_version",
        "ktor-gson",
        "GSON",
        "Handles JSON serialization using GSON library"
    )
    val JSON_JACKSON = Dependency(
        Repos.ktor,
        "io.ktor:ktor-jackson:\$ktor_version",
        "ktor-jackson",
        "Jackson",
        "Handles JSON serialization using Jackson library"
    )
    val LOCATIONS = Dependency(
        Repos.ktor,
        "io.ktor:ktor-locations:\$ktor_version",
        "ktor-locations",
        "Locations",
        "Allows to define route locations in a typed way",
        documentation = "https://ktor.io/features/locations.html"
    )
    val METRICS = Dependency(
        Repos.ktor,
        "io.ktor:ktor-metrics:\$ktor_version",
        "ktor-metrics",
        "Metrics",
        "Adds supports for monitoring several metrics"
    )
    val SESSIONS = Dependency(
        Repos.ktor,
        "io.ktor:ktor-sessions:\$ktor_version",
        "ktor-sessions",
        "Sessions",
        "Adds supports for sessions: with the payload in the client or the server",
        documentation = "https://ktor.io/features/sessions.html"
    )
    val WEBSOCKETS = Dependency(
        Repos.ktor,
        "io.ktor:ktor-websockets:\$ktor_version",
        "ktor-websockets",
        "WebSockets",
        "Adds WebSockets support for bidirectional communication with the client"
    )
    val RAW_SOCKETS = Dependency(
        Repos.ktor,
        "io.ktor:ktor-network:\$ktor_version",
        "ktor-network",
        "Raw Sockets",
        "Adds Raw Socket support for listening and connecting to tcp and udp sockets",
        documentation = "https://ktor.io/servers/raw-sockets.html"
    )
    val RAW_SOCKETS_TLS = Dependency(
        Repos.ktor,
        "io.ktor:ktor-network-tls:\$ktor_version",
        "ktor-network-tls",
        "Raw Secure SSL/TLS Sockets",
        "Adds Raw Socket support for listening and connecting to tcp and udp sockets with secure sockets",
        documentation = "https://ktor.io/servers/raw-sockets.html#secure"
    )
    val HTTP_CLIENT = Dependency(
        Repos.ktor,
        "io.ktor:ktor-client-apache:\$ktor_version",
        "ktor-client-apache",
        "HTTP Client",
        "Adds support for doing HTTP requests",
        documentation = "https://ktor.io/clients/http-client.html"
    )
}

val dependencies = Object.values(Dependencies).unsafeCast<Array<Dependency>>().filter { it is Dependency }
