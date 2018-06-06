package io.ktor.start

import io.ktor.start.features.*
import io.ktor.start.util.*

data class IntDependency(
    override val repos: List<String>,
    override val artifacts: List<String>,
    override val id: String,
    override val title: String,
    override val description: String,
    override val documentation: String? = null
) : Dependency

interface Dependency {
    val repos: List<String>
    val artifacts: List<String>
    val id: String
    val title: String
    val description: String
    val documentation: String?
}

object Repos {
    val jcenter = listOf("jcenter")
    val ktor = listOf("ktor")
    val kotlin_js_wrappers = listOf("https://kotlin.bintray.com/kotlin-js-wrappers")
}

@Suppress("unused")
object Dependencies {
    val HTML_DSL = IntDependency(
        Repos.jcenter,
        listOf("io.ktor:ktor-html-builder:\$ktor_version"),
        "html-dsl",
        "HTML DSL",
        "Generate HTML using Kotlin code"
    )
    val CSS_DSL = IntDependency(
        Repos.ktor + Repos.kotlin_js_wrappers,
        listOf("org.jetbrains:kotlin-css-jvm:1.0.0-pre.31-kotlin-1.2.41"),
        "css-dsl",
        "CSS DSL",
        "Generate CSS using Kotlin code"
    )
    val TPL_VELOCITY = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-velocity:\$ktor_version"),
        "velocity",
        "Velocity",
        "Serve HTML content using Apache velocity"
    )
    val AUTH = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-auth:\$ktor_version"),
        "auth",
        "Authentication",
        "Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2",
        documentation = "https://ktor.io/features/authentication.html"
    )
    val AUTH_JWT = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-auth-jwt:\$ktor_version"),
        "auth-jwt",
        "Authentication JWT",
        "Handle JWT authentication",
        documentation = "https://ktor.io/features/authentication.html#jwt"
    )
    val AUTH_LDAP = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-auth-ldap:\$ktor_version"),
        "auth-ldap",
        "Authentication LDAP",
        "Handle JDAP authentication",
        documentation = "https://ktor.io/features/authentication.html#ldap"
    )
    val JSON_GSON = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-gson:\$ktor_version"),
        "ktor-gson",
        "GSON",
        "Handles JSON serialization using GSON library"
    )
    val JSON_JACKSON = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-jackson:\$ktor_version"),
        "ktor-jackson",
        "Jackson",
        "Handles JSON serialization using Jackson library"
    )
    val LOCATIONS = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-locations:\$ktor_version"),
        "ktor-locations",
        "Locations",
        "Allows to define route locations in a typed way",
        documentation = "https://ktor.io/features/locations.html"
    )
    val METRICS = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-metrics:\$ktor_version"),
        "ktor-metrics",
        "Metrics",
        "Adds supports for monitoring several metrics"
    )
    val SESSIONS = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-sessions:\$ktor_version"),
        "ktor-sessions",
        "Sessions",
        "Adds supports for sessions: with the payload in the client or the server",
        documentation = "https://ktor.io/features/sessions.html"
    )
    val WEBSOCKETS = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-websockets:\$ktor_version"),
        "ktor-websockets",
        "WebSockets",
        "Adds WebSockets support for bidirectional communication with the client"
    )
    val RAW_SOCKETS = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-network:\$ktor_version"),
        "ktor-network",
        "Raw Sockets",
        "Adds Raw Socket support for listening and connecting to tcp and udp sockets",
        documentation = "https://ktor.io/servers/raw-sockets.html"
    )
    val RAW_SOCKETS_TLS = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-network-tls:\$ktor_version"),
        "ktor-network-tls",
        "Raw Secure SSL/TLS Sockets",
        "Adds Raw Socket support for listening and connecting to tcp and udp sockets with secure sockets",
        documentation = "https://ktor.io/servers/raw-sockets.html#secure"
    )
    val HTTP_CLIENT = IntDependency(
        Repos.ktor,
        listOf("io.ktor:ktor-client-apache:\$ktor_version"),
        "ktor-client-apache",
        "HTTP Client",
        "Adds support for doing HTTP requests",
        documentation = "https://ktor.io/clients/http-client.html"
    )
}

val dependencies: List<Dependency> by lazy {
    Object.values(Dependencies).unsafeCast<Array<IntDependency>>().filter { it is IntDependency } + ALL_FEATURES
}

