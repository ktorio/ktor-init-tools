package io.ktor.start.features

import io.ktor.start.*

object MetricsFeature : Feature() {
    override val repos = Repos.ktor
    override val artifacts = listOf("io.ktor:ktor-metrics:\$ktor_version")
    override val id = "ktor-metrics"
    override val title = "Metrics"
    override val description = "Adds supports for monitoring several metrics"
    override val documentation = "https://ktor.io/features/metrics.html"
}
