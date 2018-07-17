# ktor-init-tools

A set of tools for creating Ktor projects.

This includes:
* A MPP library shared for Ktor project generation.
* A Website for generating Ktor projects as ZIP files client-side *(Kotlin-JS)*.
* A IntelliJ plugin generating Ktor projects *(Kotlin-JVM)*.

The code generation features:
* Maven and Gradle support including wrappers.
* Backend engine selection.
* Ktor version selection.
* GroupId/ArtifactId/Version definition.
* Feature selection with sample code generation.
* Code generation from swagger models.
* Easy to modify and add new things.

## Project Generation Website

The website is generated in the `/docs` folder as plain static files.
You can serve it locally with any webserver like `hs docs/`.
Once pushed, it will be available in its domain via github's pages.

You can compile it continuously on change with the following command:

```bash
./gradlew -t :ktor-generator-website:buildAndCopy
```

## IntelliJ plugin

To run an IDE with the plugin for development:

```bash
./gradlew :ktor-intellij-plugin:runIde
```
