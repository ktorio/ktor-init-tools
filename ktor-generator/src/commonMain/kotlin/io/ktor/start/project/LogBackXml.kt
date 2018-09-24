package io.ktor.start.project

import io.ktor.start.*
import io.ktor.start.util.*

internal object LogBackXml : BuildInfoBlock() {
    override fun BlockBuilder.render(info: BuildInfo) {
        fileText("resources/logback.xml") {
            xml {
                "<configuration>" {
                    "<appender name=\"STDOUT\" class=\"ch.qos.logback.core.ConsoleAppender\">" {
                        "<encoder>" {
                            +"<pattern>%d{YYYY-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>"
                        }
                    }
                    "<root level=\"trace\">" {
                        +"<appender-ref ref=\"STDOUT\"/>"
                    }
                    +"<logger name=\"org.eclipse.jetty\" level=\"INFO\"/>"
                    +"<logger name=\"io.netty\" level=\"INFO\"/>"
                }
            }
        }
    }
}
