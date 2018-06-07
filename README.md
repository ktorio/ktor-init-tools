# start-ktor-io-proposal

A proposal for start.ktor.io. Pure Kotlin.JS project generating a ZIP file on the client side
based on the information and dependencies provided.

The application: <https://soywiz.github.io/start-ktor-io-proposal/>

## Website

To compile continuously:

```bash
./gradlew -t buildAndCopy
```

In other terminal, serve the docs folder:

```bash
hs docs/
```

## IntelliJ plugin

To run an IDE with the plugin:

```bash
./gradlew ktor-intellij-plugin:runIde
```
