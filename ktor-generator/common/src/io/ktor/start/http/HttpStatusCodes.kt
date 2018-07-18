package io.ktor.start.http

data class FreeHttpStatusCode(val code: Int, val description: String)

enum class HttpStatusCode(val code: Int, val description: String) {
    Continue(100, "Continue"),
    SwitchingProtocols(101, "Switching Protocols"),
    Processing(102, "Processing"),

    OK(200, "OK"),
    Created(201, "Created"),
    Accepted(202, "Accepted"),
    NonAuthoritativeInformation(203, "Non-Authoritative Information"),
    NoContent(204, "No Content"),
    ResetContent(205, "Reset Content"),
    PartialContent(206, "Partial Content"),

    MultipleChoices(300, "Multiple Choices"),
    MovedPermanently(301, "Moved Permanently"),
    Found(302, "Found"),
    SeeOther(303, "See Other"),
    NotModified(304, "Not Modified"),
    UseProxy(305, "Use Proxy"),
    SwitchProxy(306, "Switch Proxy"),
    TemporaryRedirect(307, "Temporary Redirect"),
    PermanentRedirect(308, "Permanent Redirect"),

    BadRequest(400, "Bad Request"),
    Unauthorized(401, "Unauthorized"),
    PaymentRequired(402, "Payment Required"),
    Forbidden(403, "Forbidden"),
    NotFound(404, "Not Found"),
    MethodNotAllowed(405, "Method Not Allowed"),
    NotAcceptable(406, "Not Acceptable"),
    ProxyAuthenticationRequired(407, "Proxy Authentication Required"),
    RequestTimeout(408, "Request Timeout"),
    Conflict(409, "Conflict"),
    Gone(410, "Gone"),
    LengthRequired(411, "Length Required"),
    PreconditionFailed(412, "Precondition Failed"),
    PayloadTooLarge(413, "Payload Too Large"),
    RequestURITooLong(414, "Request-URI Too Long"),

    UnsupportedMediaType(415, "Unsupported Media Type"),
    RequestedRangeNotSatisfiable(416, "Requested Range Not Satisfiable"),
    ExceptionFailed(417, "Exception Failed"),
    UpgradeRequired(426, "Upgrade Required"),
    TooManyRequests(429, "Too Many Requests"),
    RequestHeaderFieldTooLarge(431, "Request Header Fields Too Large"),

    InternalServerError(500, "Internal Server Error"),
    NotImplemented(501, "Not Implemented"),
    BadGateway(502, "Bad Gateway"),
    ServiceUnavailable(503, "Service Unavailable"),
    GatewayTimeout(504, "Gateway Timeout"),
    VersionNotSupported(505, "HTTP Version Not Supported"),
    VariantAlsoNegotiates(506, "Variant Also Negotiates");

    val free = FreeHttpStatusCode(code, description)

    companion object {
        val byCode = values().associateBy { it.code }
    }
}
