/*
 * Copyright 2018 JetBrains s.r.o.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package io.ktor.start.features

import io.ktor.start.*
import io.ktor.start.features.sockets.*
import io.ktor.start.features.client.*
import io.ktor.start.features.server.*

val ALL_SERVER_FEATURES by lazy { ALL_FEATURES.filterIsInstance<ServerFeature>() }
val ALL_CLIENT_FEATURES by lazy { ALL_FEATURES.filterIsInstance<ClientFeature>() }

val ALL_FEATURES: List<Feature> = listOf(
    // Client Features
    CoreClientEngine,
    ApacheClientEngine,
    CioClientEngine,
    JettyClientEngine,
    MockClientEngine,
    HttpTimeoutClientFeature,
    AuthBasicClientFeature,
    GsonClientFeature,
    WebSocketClientFeature,
    LoggingClientFeature,
    UserAgentClientFeature,

    // Server Features
    HtmlDslFeature,
    CssDslFeature,
    FreemarkerFeature,
    VelocityFeature,
    MustacheFeature,
    ThymeleafFeature,
    StaticContentFeature,
    AuthBasicFeature,
    AuthDigestFeature,
    AuthJwtFeature,
    AuthLdapFeature,
    AuthOauthFeature,
    AuthFeature,
    JsonGsonFeature,
    JsonJacksonFeature,
    LocationsFeature,
    MetricsFeature,
    SessionsFeature,
    CompressionFeature,
    CachingHeadersFeature,
    CallLoggingFeature,
    ConditionalHeadersFeature,
    CORSFeature,
    AutoHeadResponseFeature,
    DataConversionFeature,
    DefaultHeadersFeature,
    ForwardedHeaderSupportFeature,
    HSTSFeature,
    StatusPagesFeature,
    RoutingFeature,
    WebjarsFeature,
    ContentNegotiationFeature,
    HttpsRedirectFeature,
    ShutdownUrlFeature,
    WebsocketsFeature,
    RawSocketsFeature,
    PartialContentFeature,
    RawSocketsTlsFeature
)

val ALL_FEATURES_BY_ID = ALL_FEATURES.associateBy { it.id }
