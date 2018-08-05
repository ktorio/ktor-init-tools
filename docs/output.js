(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
    }
    root.output = factory(typeof output === 'undefined' ? {} : output, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Continuation = Kotlin.kotlin.coroutines.experimental.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.experimental.startCoroutine_xtwlez$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var Throwable = Error;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var equals = Kotlin.equals;
  var numberToInt = Kotlin.numberToInt;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var plus_0 = Kotlin.kotlin.collections.plus_iwxh38$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var plus_1 = Kotlin.kotlin.collections.plus_khz7k3$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toString = Kotlin.toString;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var numberToDouble = Kotlin.numberToDouble;
  var numberToLong = Kotlin.numberToLong;
  var L0 = Kotlin.Long.ZERO;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var getKClass = Kotlin.getKClass;
  var kotlin = Kotlin.kotlin;
  var Long = Kotlin.Long;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var List = Kotlin.kotlin.collections.List;
  var Map = Kotlin.kotlin.collections.Map;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_8xshf9$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var toIntOrNull_0 = Kotlin.kotlin.text.toIntOrNull_6ic1pp$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_6ic1pp$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
  var unboxChar = Kotlin.unboxChar;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var toChar = Kotlin.toChar;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Any = Object;
  var toSet_0 = Kotlin.kotlin.collections.toSet_us0mfu$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var numberToByte = Kotlin.numberToByte;
  var toByte = Kotlin.toByte;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var decapitalize = Kotlin.kotlin.text.decapitalize_pdl1vz$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var until = Kotlin.kotlin.ranges.until_ui3wc7$;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var Pair = Kotlin.kotlin.Pair;
  var Set = Kotlin.kotlin.collections.Set;
  var Regex = Kotlin.kotlin.text.Regex;
  var Comparable = Kotlin.kotlin.Comparable;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  CancelException.prototype = Object.create(RuntimeException.prototype);
  CancelException.prototype.constructor = CancelException;
  Feature.prototype = Object.create(Block.prototype);
  Feature.prototype.constructor = Feature;
  ServerFeature.prototype = Object.create(Feature.prototype);
  ServerFeature.prototype.constructor = ServerFeature;
  ClientFeature.prototype = Object.create(Feature.prototype);
  ClientFeature.prototype.constructor = ClientFeature;
  KtorEngine.prototype = Object.create(Enum.prototype);
  KtorEngine.prototype.constructor = KtorEngine;
  ProjectType.prototype = Object.create(Enum.prototype);
  ProjectType.prototype.constructor = ProjectType;
  RawSocketsFeature.prototype = Object.create(ServerFeature.prototype);
  RawSocketsFeature.prototype.constructor = RawSocketsFeature;
  RawSocketsTlsFeature.prototype = Object.create(ServerFeature.prototype);
  RawSocketsTlsFeature.prototype.constructor = RawSocketsTlsFeature;
  ClientEngine.prototype = Object.create(ClientFeature.prototype);
  ClientEngine.prototype.constructor = ClientEngine;
  CoreClientEngine.prototype = Object.create(ClientEngine.prototype);
  CoreClientEngine.prototype.constructor = CoreClientEngine;
  ApacheClientEngine.prototype = Object.create(ClientEngine.prototype);
  ApacheClientEngine.prototype.constructor = ApacheClientEngine;
  CioClientEngine.prototype = Object.create(ClientEngine.prototype);
  CioClientEngine.prototype.constructor = CioClientEngine;
  JettyClientEngine.prototype = Object.create(ClientEngine.prototype);
  JettyClientEngine.prototype.constructor = JettyClientEngine;
  MockClientEngine.prototype = Object.create(ClientEngine.prototype);
  MockClientEngine.prototype.constructor = MockClientEngine;
  AuthBasicClientFeature.prototype = Object.create(ClientFeature.prototype);
  AuthBasicClientFeature.prototype.constructor = AuthBasicClientFeature;
  JsonClientFeature.prototype = Object.create(ClientFeature.prototype);
  JsonClientFeature.prototype.constructor = JsonClientFeature;
  WebSocketClientFeature.prototype = Object.create(ClientFeature.prototype);
  WebSocketClientFeature.prototype.constructor = WebSocketClientFeature;
  AuthBasicFeature.prototype = Object.create(ServerFeature.prototype);
  AuthBasicFeature.prototype.constructor = AuthBasicFeature;
  AuthDigestFeature.prototype = Object.create(ServerFeature.prototype);
  AuthDigestFeature.prototype.constructor = AuthDigestFeature;
  AuthFeature.prototype = Object.create(ServerFeature.prototype);
  AuthFeature.prototype.constructor = AuthFeature;
  AuthJwtFeature.prototype = Object.create(ServerFeature.prototype);
  AuthJwtFeature.prototype.constructor = AuthJwtFeature;
  AuthLdapFeature.prototype = Object.create(ServerFeature.prototype);
  AuthLdapFeature.prototype.constructor = AuthLdapFeature;
  AuthOauthFeature.prototype = Object.create(ServerFeature.prototype);
  AuthOauthFeature.prototype.constructor = AuthOauthFeature;
  AutoHeadResponseFeature.prototype = Object.create(ServerFeature.prototype);
  AutoHeadResponseFeature.prototype.constructor = AutoHeadResponseFeature;
  CORSFeature.prototype = Object.create(ServerFeature.prototype);
  CORSFeature.prototype.constructor = CORSFeature;
  CachingHeadersFeature.prototype = Object.create(ServerFeature.prototype);
  CachingHeadersFeature.prototype.constructor = CachingHeadersFeature;
  CallLoggingFeature.prototype = Object.create(ServerFeature.prototype);
  CallLoggingFeature.prototype.constructor = CallLoggingFeature;
  CompressionFeature.prototype = Object.create(ServerFeature.prototype);
  CompressionFeature.prototype.constructor = CompressionFeature;
  ConditionalHeadersFeature.prototype = Object.create(ServerFeature.prototype);
  ConditionalHeadersFeature.prototype.constructor = ConditionalHeadersFeature;
  ContentNegotiationFeature.prototype = Object.create(ServerFeature.prototype);
  ContentNegotiationFeature.prototype.constructor = ContentNegotiationFeature;
  CssDslFeature.prototype = Object.create(ServerFeature.prototype);
  CssDslFeature.prototype.constructor = CssDslFeature;
  DataConversionFeature.prototype = Object.create(ServerFeature.prototype);
  DataConversionFeature.prototype.constructor = DataConversionFeature;
  DefaultHeadersFeature.prototype = Object.create(ServerFeature.prototype);
  DefaultHeadersFeature.prototype.constructor = DefaultHeadersFeature;
  ForwardedHeaderSupportFeature.prototype = Object.create(ServerFeature.prototype);
  ForwardedHeaderSupportFeature.prototype.constructor = ForwardedHeaderSupportFeature;
  FreemarkerFeature.prototype = Object.create(ServerFeature.prototype);
  FreemarkerFeature.prototype.constructor = FreemarkerFeature;
  HSTSFeature.prototype = Object.create(ServerFeature.prototype);
  HSTSFeature.prototype.constructor = HSTSFeature;
  HtmlDslFeature.prototype = Object.create(ServerFeature.prototype);
  HtmlDslFeature.prototype.constructor = HtmlDslFeature;
  HttpsRedirectFeature.prototype = Object.create(ServerFeature.prototype);
  HttpsRedirectFeature.prototype.constructor = HttpsRedirectFeature;
  JsonGsonFeature.prototype = Object.create(ServerFeature.prototype);
  JsonGsonFeature.prototype.constructor = JsonGsonFeature;
  JsonJacksonFeature.prototype = Object.create(ServerFeature.prototype);
  JsonJacksonFeature.prototype.constructor = JsonJacksonFeature;
  LocationsFeature.prototype = Object.create(ServerFeature.prototype);
  LocationsFeature.prototype.constructor = LocationsFeature;
  MetricsFeature.prototype = Object.create(ServerFeature.prototype);
  MetricsFeature.prototype.constructor = MetricsFeature;
  PartialContentFeature.prototype = Object.create(ServerFeature.prototype);
  PartialContentFeature.prototype.constructor = PartialContentFeature;
  RoutingFeature.prototype = Object.create(ServerFeature.prototype);
  RoutingFeature.prototype.constructor = RoutingFeature;
  SessionsFeature.prototype = Object.create(ServerFeature.prototype);
  SessionsFeature.prototype.constructor = SessionsFeature;
  ShutdownUrlFeature.prototype = Object.create(ServerFeature.prototype);
  ShutdownUrlFeature.prototype.constructor = ShutdownUrlFeature;
  StaticContentFeature.prototype = Object.create(ServerFeature.prototype);
  StaticContentFeature.prototype.constructor = StaticContentFeature;
  StatusPagesFeature.prototype = Object.create(ServerFeature.prototype);
  StatusPagesFeature.prototype.constructor = StatusPagesFeature;
  VelocityFeature.prototype = Object.create(ServerFeature.prototype);
  VelocityFeature.prototype.constructor = VelocityFeature;
  WebsocketsFeature.prototype = Object.create(ServerFeature.prototype);
  WebsocketsFeature.prototype.constructor = WebsocketsFeature;
  HttpStatusCode.prototype = Object.create(Enum.prototype);
  HttpStatusCode.prototype.constructor = HttpStatusCode;
  ApplicationConf.prototype = Object.create(Block.prototype);
  ApplicationConf.prototype.constructor = ApplicationConf;
  ApplicationKt.prototype = Object.create(Block.prototype);
  ApplicationKt.prototype.constructor = ApplicationKt;
  ApplicationTestKt.prototype = Object.create(Block.prototype);
  ApplicationTestKt.prototype.constructor = ApplicationTestKt;
  BuildFiles.prototype = Object.create(Block.prototype);
  BuildFiles.prototype.constructor = BuildFiles;
  BuildFilesGradle.prototype = Object.create(Block.prototype);
  BuildFilesGradle.prototype.constructor = BuildFilesGradle;
  BuildFilesMaven.prototype = Object.create(Block.prototype);
  BuildFilesMaven.prototype.constructor = BuildFilesMaven;
  GitIgnoreFile.prototype = Object.create(Block.prototype);
  GitIgnoreFile.prototype.constructor = GitIgnoreFile;
  LogBackXml.prototype = Object.create(Block.prototype);
  LogBackXml.prototype.constructor = LogBackXml;
  JsonRule$RuleList.prototype = Object.create(JsonRule.prototype);
  JsonRule$RuleList.prototype.constructor = JsonRule$RuleList;
  JsonRule$MinMaxDouble.prototype = Object.create(JsonRule.prototype);
  JsonRule$MinMaxDouble.prototype.constructor = JsonRule$MinMaxDouble;
  JsonRule$MinMaxInt.prototype = Object.create(JsonRule.prototype);
  JsonRule$MinMaxInt.prototype.constructor = JsonRule$MinMaxInt;
  JsonRule$MinInt.prototype = Object.create(JsonRule$MinMaxInt.prototype);
  JsonRule$MinInt.prototype.constructor = JsonRule$MinInt;
  JsonRule$MaxInt.prototype = Object.create(JsonRule$MinMaxInt.prototype);
  JsonRule$MaxInt.prototype.constructor = JsonRule$MaxInt;
  JsonRule$MinLength.prototype = Object.create(JsonRule$MinInt.prototype);
  JsonRule$MinLength.prototype.constructor = JsonRule$MinLength;
  JsonRule$MinItems.prototype = Object.create(JsonRule$MinInt.prototype);
  JsonRule$MinItems.prototype.constructor = JsonRule$MinItems;
  JsonRule$MinProperties.prototype = Object.create(JsonRule$MinInt.prototype);
  JsonRule$MinProperties.prototype.constructor = JsonRule$MinProperties;
  JsonRule$MaxLength.prototype = Object.create(JsonRule$MaxInt.prototype);
  JsonRule$MaxLength.prototype.constructor = JsonRule$MaxLength;
  JsonRule$MaxItems.prototype = Object.create(JsonRule$MaxInt.prototype);
  JsonRule$MaxItems.prototype.constructor = JsonRule$MaxItems;
  JsonRule$MaxProperties.prototype = Object.create(JsonRule$MaxInt.prototype);
  JsonRule$MaxProperties.prototype.constructor = JsonRule$MaxProperties;
  JsonRule$Not.prototype = Object.create(JsonRule.prototype);
  JsonRule$Not.prototype.constructor = JsonRule$Not;
  JsonRule$AllOf.prototype = Object.create(JsonRule$RuleList.prototype);
  JsonRule$AllOf.prototype.constructor = JsonRule$AllOf;
  JsonRule$AnyOf.prototype = Object.create(JsonRule$RuleList.prototype);
  JsonRule$AnyOf.prototype.constructor = JsonRule$AnyOf;
  JsonRule$OneOf.prototype = Object.create(JsonRule$RuleList.prototype);
  JsonRule$OneOf.prototype.constructor = JsonRule$OneOf;
  JsonRule$MultipleOf.prototype = Object.create(JsonRule.prototype);
  JsonRule$MultipleOf.prototype.constructor = JsonRule$MultipleOf;
  JsonRule$Minimum.prototype = Object.create(JsonRule$MinMaxDouble.prototype);
  JsonRule$Minimum.prototype.constructor = JsonRule$Minimum;
  JsonRule$Maximum.prototype = Object.create(JsonRule$MinMaxDouble.prototype);
  JsonRule$Maximum.prototype.constructor = JsonRule$Maximum;
  JsonRule$Range.prototype = Object.create(JsonRule.prototype);
  JsonRule$Range.prototype.constructor = JsonRule$Range;
  JsonRule$UniqueItems.prototype = Object.create(JsonRule.prototype);
  JsonRule$UniqueItems.prototype.constructor = JsonRule$UniqueItems;
  JsonRule$Required.prototype = Object.create(JsonRule.prototype);
  JsonRule$Required.prototype.constructor = JsonRule$Required;
  JsonRule$Pattern.prototype = Object.create(JsonRule.prototype);
  JsonRule$Pattern.prototype.constructor = JsonRule$Pattern;
  JsonRule$Enumerable.prototype = Object.create(JsonRule.prototype);
  JsonRule$Enumerable.prototype.constructor = JsonRule$Enumerable;
  SwaggerGenerator.prototype = Object.create(Block.prototype);
  SwaggerGenerator.prototype.constructor = SwaggerGenerator;
  SwaggerModel$PasswordType.prototype = Object.create(SwaggerModel$BaseStringType.prototype);
  SwaggerModel$PasswordType.prototype.constructor = SwaggerModel$PasswordType;
  SwaggerModel$Base64Type.prototype = Object.create(SwaggerModel$BaseStringType.prototype);
  SwaggerModel$Base64Type.prototype.constructor = SwaggerModel$Base64Type;
  SwaggerModel$BinaryStringType.prototype = Object.create(SwaggerModel$BaseStringType.prototype);
  SwaggerModel$BinaryStringType.prototype.constructor = SwaggerModel$BinaryStringType;
  SwaggerModel$StringType.prototype = Object.create(SwaggerModel$BaseStringType.prototype);
  SwaggerModel$StringType.prototype.constructor = SwaggerModel$StringType;
  SwaggerModel$Int32Type.prototype = Object.create(SwaggerModel$IntegerType.prototype);
  SwaggerModel$Int32Type.prototype.constructor = SwaggerModel$Int32Type;
  SwaggerModel$Int64Type.prototype = Object.create(SwaggerModel$IntegerType.prototype);
  SwaggerModel$Int64Type.prototype.constructor = SwaggerModel$Int64Type;
  SwaggerModel$Inside.prototype = Object.create(Enum.prototype);
  SwaggerModel$Inside.prototype.constructor = SwaggerModel$Inside;
  SwaggerModel$SecurityType.prototype = Object.create(Enum.prototype);
  SwaggerModel$SecurityType.prototype.constructor = SwaggerModel$SecurityType;
  function jsObject(pairs) {
    var tmp$;
    var obj = {};
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var key = tmp$_0.component1()
      , value = tmp$_0.component2();
      obj[key] = value;
    }
    return obj;
  }
  function await$lambda(this$await) {
    return function (it) {
      this$await.then(getCallableRef('resume', function ($receiver, value) {
        return $receiver.resume_11rb$(value), Unit;
      }.bind(null, it)), getCallableRef('resumeWithException', function ($receiver, exception) {
        return $receiver.resumeWithException_tcv7n7$(exception), Unit;
      }.bind(null, it)));
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function await_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$await($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$await($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda(await$lambda(this.local$$receiver))(this.facade);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function fetchFile(file_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchFile(file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$fetchFile(file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$file = file_0;
  }
  Coroutine$fetchFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchFile.prototype.constructor = Coroutine$fetchFile;
  Coroutine$fetchFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch(this.local$file), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var response = this.result_0;
            this.state_0 = 3;
            this.result_0 = await_0(response.arrayBuffer(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var buffer = this.result_0;
            return new Int8Array(buffer);
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function EmptyContinuation$ObjectLiteral() {
    this.context_6qs5s0$_0 = experimental.EmptyCoroutineContext;
  }
  Object.defineProperty(EmptyContinuation$ObjectLiteral.prototype, 'context', {
    get: function () {
      return this.context_6qs5s0$_0;
    }
  });
  EmptyContinuation$ObjectLiteral.prototype.resume_11rb$ = function (value) {
  };
  EmptyContinuation$ObjectLiteral.prototype.resumeWithException_tcv7n7$ = function (exception) {
    console.error(exception);
  };
  EmptyContinuation$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Continuation]
  };
  var EmptyContinuation;
  function launch(callback) {
    startCoroutine(callback, EmptyContinuation);
  }
  var jq = defineInlineFunction('output.io.ktor.start.jq_61zpoe$', function (str) {
    return jQuery(str);
  });
  var jq_0 = defineInlineFunction('output.io.ktor.start.jq_2rdptt$', function (str) {
    return jQuery(str);
  });
  var jq_1 = defineInlineFunction('output.io.ktor.start.jq_b3w3xb$', function (str) {
    return jQuery(str);
  });
  var jqId = defineInlineFunction('output.io.ktor.start.jqId_61zpoe$', function (id) {
    return jQuery('#' + id);
  });
  var on = defineInlineFunction('output.io.ktor.start.on_nsccip$', function ($receiver, name, event) {
    return $receiver.on(name, event);
  });
  var each = defineInlineFunction('output.io.ktor.start.each_4tgbmb$', function ($receiver, event) {
    $receiver.each(event);
  });
  var change = defineInlineFunction('output.io.ktor.start.change_tue5ot$', function ($receiver, event) {
    return $receiver.change(event);
  });
  var keyup = defineInlineFunction('output.io.ktor.start.keyup_tue5ot$', function ($receiver, event) {
    return $receiver.keyup(event);
  });
  function generateBrowserFile(filename, data, type) {
    if (type === void 0)
      type = 'application/octet-stream';
    var tmp$, tmp$_0, tmp$_1;
    var o = {};
    o['type'] = type;
    var blob = new Blob([data], o);
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    }
     else {
      var elem = Kotlin.isType(tmp$ = window.document.createElement('a'), HTMLAnchorElement) ? tmp$ : throwCCE();
      elem.href = URL.createObjectURL(blob);
      elem.download = filename;
      (tmp$_0 = document.body) != null ? tmp$_0.appendChild(elem) : null;
      elem.click();
      (tmp$_1 = document.body) != null ? tmp$_1.removeChild(elem) : null;
    }
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function dialogOpenFile$lambda$lambda(closure$completedOnce, closure$files, closure$continuation) {
    return function () {
      var tmp$;
      if (!closure$completedOnce.v) {
        closure$completedOnce.v = true;
        selectedFiles = closure$files.v;
        if (closure$files.v.length > 0.0) {
          var ff = ArrayList_init();
          tmp$ = selectedFiles.length;
          for (var n = 0; n < tmp$; n++) {
            var element = selectedFiles[n];
            ff.add_11rb$(element);
          }
          closure$continuation.resume_11rb$(ff);
        }
         else {
          closure$continuation.resumeWithException_tcv7n7$(new CancelException());
        }
      }
      return Unit;
    };
  }
  function dialogOpenFile$lambda$lambda$lambda$lambda(closure$completed) {
    return function () {
      closure$completed();
      return Unit;
    };
  }
  function dialogOpenFile$lambda$lambda$lambda(closure$completed) {
    return function (it) {
      var tmp$;
      (tmp$ = document.body) != null ? (tmp$.onfocus = null) : null;
      return window.setTimeout(dialogOpenFile$lambda$lambda$lambda$lambda(closure$completed), 2000);
    };
  }
  function dialogOpenFile$lambda$lambda_0(closure$completed) {
    return function (it) {
      var tmp$;
      (tmp$ = document.body) != null ? (tmp$.onfocus = dialogOpenFile$lambda$lambda$lambda(closure$completed)) : null;
      return Unit;
    };
  }
  function dialogOpenFile$lambda$lambda_1(closure$files, closure$completed) {
    return function (e) {
      closure$files.v = e.target['files'];
      closure$completed();
      return Unit;
    };
  }
  function dialogOpenFile$lambda(continuation) {
    var tmp$;
    if (windowInputFile == null) {
      var str = "<input type='file' style='display:none;'>";
      var wif = jQuery(str)[0];
      windowInputFile = wif;
      (tmp$ = document.body) != null ? (tmp$.append(wif), Unit) : null;
    }
    var inputFile = windowInputFile;
    var completedOnce = {v: false};
    var files = {v: []};
    var completed = dialogOpenFile$lambda$lambda(completedOnce, files, continuation);
    windowInputFile != null ? (windowInputFile.value = '') : null;
    windowInputFile != null ? (windowInputFile.onclick = dialogOpenFile$lambda$lambda_0(completed)) : null;
    windowInputFile != null ? (windowInputFile.onchange = dialogOpenFile$lambda$lambda_1(files, completed)) : null;
    inputFile != null ? (inputFile.click(), Unit) : null;
    return Unit;
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function dialogOpenFile(filter_0, continuation_0, suspended) {
    var instance = new Coroutine$dialogOpenFile(filter_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$dialogOpenFile(filter_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$filter = filter_0;
  }
  Coroutine$dialogOpenFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$dialogOpenFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$dialogOpenFile.prototype.constructor = Coroutine$dialogOpenFile;
  Coroutine$dialogOpenFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$filter === void 0)
              this.local$filter = '*';
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda_0(dialogOpenFile$lambda)(this.facade);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function CancelException() {
    RuntimeException_init(this);
    this.name = 'CancelException';
  }
  CancelException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CancelException',
    interfaces: [RuntimeException]
  };
  function read$lambda$lambda(closure$c, closure$reader) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = Kotlin.isByteArray(tmp$_0 = new Int8Array(Kotlin.isType(tmp$ = closure$reader.result, ArrayBuffer) ? tmp$ : throwCCE())) ? tmp$_0 : throwCCE();
      closure$c.resume_11rb$(tmp$_1);
      return Unit;
    };
  }
  function read$lambda$lambda_0(closure$c) {
    return function (it) {
      closure$c.resumeWithException_tcv7n7$(RuntimeException_init_0('onerror'));
      return Unit;
    };
  }
  function read$lambda(this$read) {
    return function (c) {
      var reader = new FileReader();
      reader.onload = read$lambda$lambda(c, reader);
      reader.onerror = read$lambda$lambda_0(c);
      reader.readAsArrayBuffer(this$read);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_1(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  function read($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$read($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$read($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$read.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read.prototype.constructor = Coroutine$read;
  Coroutine$read.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda_1(read$lambda(this.local$$receiver))(this.facade);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var windowInputFile;
  var selectedFiles;
  var swaggerModels;
  var swaggerGenerators;
  function main$lambda() {
    updateHash();
    return Unit;
  }
  function main$lambda_0() {
    updateHash();
    return Unit;
  }
  function main$lambda_1() {
    updateHash();
    return Unit;
  }
  function main$lambda_2() {
    updateHash();
    return Unit;
  }
  function main$lambda_3() {
    updateHash();
    return Unit;
  }
  function main$lambda_4() {
    updateHash();
    return Unit;
  }
  function main$lambda_5() {
    updateHash();
    return Unit;
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  function main$lambda$lambda(continuation_0, suspended) {
    var instance = new Coroutine$main$lambda$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.local$tmp$ = void 0;
    this.local$file = void 0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 6;
            this.state_0 = 1;
            this.result_0 = dialogOpenFile('*', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var files = this.result_0;
            this.local$tmp$ = files.iterator();
            this.state_0 = 2;
            continue;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            this.local$file = this.local$tmp$.next();
            if (endsWith(this.local$file.name, '.json')) {
              this.state_0 = 3;
              this.result_0 = read(this.local$file, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw IllegalStateException_init('Not a JSON file'.toString());
            }

          case 3:
            var jsonStr = toString_1(this.result_0, UTF8_getInstance());
            var untypedModel = Json_getInstance().parse_61zpoe$(jsonStr);
            var model = SwaggerModel$Companion_getInstance().parse_hvn9da$(untypedModel, this.local$file.name);
            swaggerModels.add_11rb$(model);
            updateSwaggerModels();
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 2;
            continue;
          case 5:
            this.exceptionState_0 = 10;
            this.state_0 = 9;
            continue;
          case 6:
            this.exceptionState_0 = 10;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancelException)) {
              return Unit;
            }
             else {
              if (Kotlin.isType(e, Throwable)) {
                console.error(e);
                return window.alert(e.toString()), Unit;
              }
               else {
                throw e;
              }
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            return Unit;
          case 10:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 10) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function main$lambda_6() {
    launch(main$lambda$lambda);
    return Unit;
  }
  function main$lambda_7(it) {
    onHashUpdated(window.location.hash);
    return Unit;
  }
  function main$lambda_8(event) {
    var tmp$;
    var edata = (Kotlin.isType(tmp$ = event, MessageEvent) ? tmp$ : throwCCE()).data;
    if (edata && edata.type === 'updateHash') {
      onHashUpdated(edata.value);
    }
    return Unit;
  }
  function main(args) {
    var tmp$, tmp$_0;
    var str = '#ktor-version';
    jQuery(str).text('');
    tmp$ = Versions_getInstance().ALL;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var version = tmp$[tmp$_0];
      var str_0 = '#ktor-version';
      var tmp$_1 = jQuery(str_0);
      var str_1 = '<option>';
      tmp$_1.append(jQuery(str_1).attr('value', version.version).text('Ktor ' + version.version));
    }
    var str_2 = '.intellij-plugin';
    jQuery(str_2).css('display', 'inline-block');
    var str_3 = '#include_wrapper';
    jQuery(str_3).change(main$lambda);
    var str_4 = '#ktor-engine';
    jQuery(str_4).change(main$lambda_0);
    var str_5 = '#ktor-version';
    jQuery(str_5).change(main$lambda_1);
    var str_6 = '#project-type';
    jQuery(str_6).change(main$lambda_2);
    var str_7 = '#artifact-group';
    jQuery(str_7).keyup(main$lambda_3);
    var str_8 = '#artifact-name';
    jQuery(str_8).keyup(main$lambda_4);
    var id = artifactVersionId;
    jQuery('#' + id).keyup(main$lambda_5);
    var str_9 = '#add-swager-model';
    jQuery(str_9).click(main$lambda_6);
    onHashUpdated(window.location.hash);
    addDependencies();
    registerBuildButton();
    handleFiltering();
    removeLoading();
    updateHash();
    registerKeyboardUsability();
    window.onpopstate = main$lambda_7;
    window.addEventListener('message', main$lambda_8);
  }
  function updateSwaggerModels$lambda(closure$model) {
    return function () {
      var $receiver = swaggerModels;
      var element = closure$model;
      $receiver.remove_11rb$(element);
      updateSwaggerModels();
      return Unit;
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function updateSwaggerModels() {
    var tmp$;
    var str = '#swagger-models-placeholder';
    var placeholder = jQuery(str);
    placeholder.text('');
    tmp$ = swaggerModels.iterator();
    while (tmp$.hasNext()) {
      var model = tmp$.next();
      var str_0 = "<button type='button' class='btn btn-info' style='margin:0 4px 4px 0;'>";
      var span = jQuery(str_0).text(model.filename);
      var str_1 = "<span class='badge badge-light' style='margin-left:4px;'>\u274C<\/span>";
      span.append(jQuery(str_1));
      span.on('click', updateSwaggerModels$lambda(model));
      placeholder.append(span);
      placeholder.append(jQuery('<span>').text('Routes: ' + model.paths.size + ', Defs: ' + model.definitions.size + ', Auths: ' + model.securityDefinitions.size));
    }
    var str_2 = '#add-swager-model';
    jQuery(str_2).css('display', swaggerModels.isEmpty() ? 'inline-block' : 'none');
    var $receiver = swaggerModels;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new SwaggerGenerator(item));
    }
    swaggerGenerators = destination;
    onHashUpdated(ensureNotNull(document.location).hash);
  }
  var defaultArtifactGroup;
  var defaultArtifactName;
  var defaultArtifactVersion;
  var defaultKtorVersion;
  var defaultKtorEngine;
  var artifactGroupId;
  var artifactNameId;
  var artifactVersionId;
  function get_checked($receiver) {
    return !!$receiver.prop('checked');
  }
  function set_checked($receiver, value) {
    $receiver.prop('checked', value ? 'checked' : '');
  }
  function get_includeWrapper() {
    var str = '#include_wrapper';
    return get_checked(jQuery(str));
  }
  function set_includeWrapper(value) {
    var str = '#include_wrapper';
    set_checked(jQuery(str), value);
  }
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  function DependencyChecker(hash) {
    this.hash = hash;
    this.params = parseHash(this.hash);
    var tmp$, tmp$_0, tmp$_1;
    this.dependencies = (tmp$_1 = (tmp$_0 = (tmp$ = this.params.get_11rb$('dependency')) == null || Kotlin.isType(tmp$, ArrayList) ? tmp$ : null) != null ? toSet(tmp$_0) : null) != null ? tmp$_1 : emptySet();
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  DependencyChecker.prototype.includeDependency_61zpoe$ = function (depId) {
    if (this.dependencies.contains_11rb$(depId))
      return true;
    var dep = ALL_FEATURES_BY_ID.get_11rb$(depId);
    if (dep != null) {
      var $receiver = swaggerGenerators;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.blockDeps.contains_11rb$(ensureNotNull(dep))) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    }
    return false;
  };
  DependencyChecker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DependencyChecker',
    interfaces: []
  };
  function onHashUpdated(hash) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var params = parseHash(hash);
    var str = '#include_wrapper';
    var tmp$_14 = jQuery(str);
    var key = 'no_wrapper';
    var tmp$_15;
    tmp$_14.prop('checked', (Kotlin.isType(tmp$_15 = params, Map) ? tmp$_15 : throwCCE()).containsKey_11rb$(key) ? '' : 'checked');
    var str_0 = '#artifact-group';
    jQuery(str_0).val((tmp$_0 = (tmp$ = params.get_11rb$('artifact-group')) != null ? firstOrNull(tmp$) : null) != null ? tmp$_0 : 'com.example');
    var str_1 = '#artifact-name';
    jQuery(str_1).val((tmp$_2 = (tmp$_1 = params.get_11rb$('artifact-name')) != null ? firstOrNull(tmp$_1) : null) != null ? tmp$_2 : 'ktor-demo');
    var str_2 = '#artifact-version';
    jQuery(str_2).val((tmp$_4 = (tmp$_3 = params.get_11rb$(artifactVersionId)) != null ? firstOrNull(tmp$_3) : null) != null ? tmp$_4 : '0.0.1-SNAPSHOT');
    var str_3 = '#ktor-version';
    jQuery(str_3).val((tmp$_6 = (tmp$_5 = params.get_11rb$('ktor-version')) != null ? firstOrNull(tmp$_5) : null) != null ? tmp$_6 : defaultKtorVersion);
    var str_4 = '#ktor-version';
    jQuery(str_4).val((tmp$_8 = (tmp$_7 = params.get_11rb$('ktor-version')) != null ? firstOrNull(tmp$_7) : null) != null ? tmp$_8 : defaultKtorVersion);
    var str_5 = '#ktor-engine';
    jQuery(str_5).val((tmp$_10 = (tmp$_9 = params.get_11rb$('ktor-engine')) != null ? firstOrNull(tmp$_9) : null) != null ? tmp$_10 : defaultKtorEngine);
    var str_6 = '#project-type';
    jQuery(str_6).val((tmp$_12 = (tmp$_11 = params.get_11rb$('project-type')) != null ? firstOrNull(tmp$_11) : null) != null ? tmp$_12 : ProjectType$Gradle_getInstance().id);
    var dependencies = new DependencyChecker(hash);
    tmp$_13 = ALL_FEATURES.iterator();
    while (tmp$_13.hasNext()) {
      var dep = tmp$_13.next();
      var depId = dep.id;
      var res = dependencies.includeDependency_61zpoe$(depId);
      var str_7 = '#artifact-' + depId;
      var item = jQuery(str_7);
      set_checked(item, res);
    }
    updateIndeterminate(dependencies);
  }
  function updateHash() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var items = LinkedHashMap_init();
    if (!get_includeWrapper()) {
      var key = 'no_wrapper';
      var value = arrayListOf(['']);
      items.put_xwzc9p$(key, value);
    }
    var dependency = ArrayList_init();
    var key_0 = 'dependency';
    items.put_xwzc9p$(key_0, dependency);
    tmp$ = ALL_FEATURES.iterator();
    while (tmp$.hasNext()) {
      var dep = tmp$.next();
      var str = '#artifact-' + dep.id;
      if (get_checked(jQuery(str))) {
        var element = dep.id;
        dependency.add_11rb$(element);
      }
    }
    var str_0 = '#ktor-engine';
    var ktorEngine = jQuery(str_0).val();
    if (ktorEngine != defaultKtorEngine) {
      var key_1 = 'ktor-engine';
      var value_0 = arrayListOf([ktorEngine]);
      items.put_xwzc9p$(key_1, value_0);
    }
    var str_1 = '#ktor-version';
    var ktorVersion = jQuery(str_1).val();
    if (ktorVersion != defaultKtorVersion) {
      var key_2 = 'ktor-version';
      var value_1 = arrayListOf([ktorVersion]);
      items.put_xwzc9p$(key_2, value_1);
    }
    var str_2 = '#project-type';
    var projectType = jQuery(str_2).val();
    if (projectType != 'gradle') {
      var key_3 = 'project-type';
      var value_2 = arrayListOf([projectType]);
      items.put_xwzc9p$(key_3, value_2);
    }
    tmp$_0 = listOf([to(artifactGroupId, defaultArtifactGroup), to(artifactNameId, defaultArtifactName), to(artifactVersionId, defaultArtifactVersion)]).iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_3 = tmp$_0.next();
      var key_4 = tmp$_3.component1()
      , default_0 = tmp$_3.component2();
      var str_3 = jQuery('#' + key_4).val();
      if (str_3 != default_0) {
        var value_3 = arrayListOf([str_3]);
        items.put_xwzc9p$(key_4, value_3);
      }
    }
    window.history.pushState(jsObject([]), document.title, ((tmp$_1 = document.location) != null ? tmp$_1.pathname : null) + '#' + formUrlEncode_0(items));
    try {
      window.top.postMessage(jsObject([to('type', 'updateHash'), to('value', (tmp$_2 = document.location) != null ? tmp$_2.hash : null)]), '*');
    }
     catch (e) {
      console.error(e);
    }
    var dependencies = new DependencyChecker(ensureNotNull(document.location).hash);
    updateIndeterminate(dependencies);
  }
  function updateIndeterminate(dependencies) {
    var tmp$;
    var $receiver = ALL_FEATURES;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var str = '#artifact-' + element.id;
      if (get_checked(jQuery(str)))
        destination.add_11rb$(element);
    }
    var features = new FeatureSet(destination);
    tmp$ = ALL_FEATURES.iterator();
    loop_label: while (tmp$.hasNext()) {
      var feature = tmp$.next();
      var str_0 = '#artifact-' + feature.id;
      var selector = jQuery(str_0);
      var tmp$_1 = features.all.contains_11rb$(feature);
      if (!tmp$_1) {
        var $receiver_0 = swaggerGenerators;
        var any$result;
        any$break: do {
          var tmp$_2;
          if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_2 = $receiver_0.iterator();
          while (tmp$_2.hasNext()) {
            var element_0 = tmp$_2.next();
            if (element_0.blockDeps.contains_11rb$(feature)) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        tmp$_1 = any$result;
      }
      var selected = tmp$_1;
      var indeterminate = features.transitive.contains_11rb$(feature);
      selector.prop('indeterminate', indeterminate);
      selector.closest('label').toggleClass('indeterminate', indeterminate).toggleClass('selected', selected);
    }
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function parseHash(hash) {
    try {
      return formUrlDecode(trim(hash, Kotlin.charArrayOf(35)));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return emptyMap();
      }
       else
        throw e;
    }
  }
  function get_hashParams() {
    return parseHash(window.location.hash);
  }
  function formUrlDecode($receiver) {
    var $receiver_0 = split($receiver, Kotlin.charArrayOf(38));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1 = plus(split(item, Kotlin.charArrayOf(61), void 0, 2), listOf_0(''));
      var key = tmp$_1.get_za3lpa$(0);
      var value = tmp$_1.get_za3lpa$(1);
      tmp$_0.call(destination, to(key, value));
    }
    var destination_0 = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = destination.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var key_0 = element.first;
      var tmp$_0_0;
      var value_0 = destination_0.get_11rb$(key_0);
      if (value_0 == null) {
        var answer = ArrayList_init();
        destination_0.put_xwzc9p$(key_0, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value_0;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var destination_1 = ArrayList_init_0(destination_0.size);
    var tmp$_3;
    tmp$_3 = destination_0.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      var tmp$_4 = destination_1.add_11rb$;
      var tmp$_5 = item_0.key;
      var $receiver_1 = item_0.value;
      var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_6;
      tmp$_6 = $receiver_1.iterator();
      while (tmp$_6.hasNext()) {
        var item_1 = tmp$_6.next();
        destination_2.add_11rb$(item_1.second);
      }
      tmp$_4.call(destination_1, to(tmp$_5, destination_2));
    }
    return toMap(destination_1);
  }
  function formUrlEncode$lambda(it) {
    return it.second.length > 0 ? it.first + '=' + it.second : it.first;
  }
  function formUrlEncode($receiver) {
    return joinToString($receiver, '&', void 0, void 0, void 0, void 0, formUrlEncode$lambda);
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  function formUrlEncode_0($receiver) {
    var $receiver_0 = $receiver.entries;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_1 = element.value;
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element.key, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return formUrlEncode(destination);
  }
  function addDependencies() {
    addDependenciesKind('server', get_ALL_SERVER_FEATURES());
    addDependenciesKind('client', get_ALL_CLIENT_FEATURES());
  }
  function addDependenciesKind$lambda() {
    updateHash();
    return Unit;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function addDependenciesKind(kind, features) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var dependencyIds = toSet((tmp$ = get_hashParams().get_11rb$('dependency')) != null ? tmp$ : emptyList());
    var str = '#dependencies-' + kind;
    var deps = jQuery(str);
    deps.text('');
    var destination = LinkedHashMap_init();
    var tmp$_3;
    tmp$_3 = features.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      var key = element.group;
      var tmp$_0_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    tmp$_0 = destination.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_4 = tmp$_0.next();
      var group = tmp$_4.key;
      var subfeatures = tmp$_4.value;
      var str_0 = "<h2 class='artifact-group' />";
      deps.append(jQuery(str_0).text(group));
      tmp$_1 = subfeatures.iterator();
      while (tmp$_1.hasNext()) {
        var feature = tmp$_1.next();
        var checkedBool = dependencyIds.contains_11rb$(feature.id);
        var checked = checkedBool ? 'checked' : '';
        var $receiver = plus(feature.artifacts, feature.testArtifacts);
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
        var tmp$_5;
        tmp$_5 = $receiver.iterator();
        while (tmp$_5.hasNext()) {
          var item = tmp$_5.next();
          destination_0.add_11rb$(removeSuffix(removePrefix(item, 'io.ktor:'), ':$ktor_version'));
        }
        var simplifiedArtifacts = destination_0;
        var str_1 = "<label for='artifact-" + feature.id + "' class='artifact' />";
        var tmp$_6 = jQuery(str_1);
        var str_2 = "<div class='title' />";
        var tmp$_7 = jQuery(str_2);
        var str_3 = "<input id='artifact-" + feature.id + "' type='checkbox' " + checked + ' />';
        var tmp$_8 = tmp$_7.append(jQuery(str_3));
        var str_4 = '<span />';
        var tmp$_9 = tmp$_8.append(jQuery(str_4).text(' ' + feature.title));
        var str_5 = "<span class='artifact-name' />";
        var tmp$_10 = tmp$_6.append(tmp$_9.append(jQuery(str_5).text(' (' + joinToString(simplifiedArtifacts, ', ') + ')')));
        var str_6 = "<div class='subtitle' />";
        var tmp$_11 = jQuery(str_6).append(jQuery('<div />').text(feature.description));
        var $receiver_0 = jQuery('<div />');
        var tmp$_12;
        if (feature.documentation != null) {
          $receiver_0.append(jQuery('<a />').attr('href', (tmp$_12 = feature.documentation) != null ? tmp$_12 : '').attr('target', '_blank').text('Documentation'));
        }
        deps.append(tmp$_10.append(tmp$_11.append($receiver_0)));
      }
    }
    tmp$_2 = features.iterator();
    while (tmp$_2.hasNext()) {
      var feature_0 = tmp$_2.next();
      var str_7 = '#artifact-' + feature_0.id;
      jQuery(str_7).change(addDependenciesKind$lambda);
    }
  }
  function build$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$build$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$build$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$build$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$build$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$build$lambda.prototype.constructor = Coroutine$build$lambda;
  Coroutine$build$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = fetchFile(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function build(dev_0, continuation_0, suspended) {
    var instance = new Coroutine$build(dev_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$build(dev_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$projectType = void 0;
    this.local$ktorEngine = void 0;
    this.local$artifactGroup = void 0;
    this.local$artifactName = void 0;
    this.local$info = void 0;
    this.local$zb = void 0;
    this.local$dev = dev_0;
  }
  Coroutine$build.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$build.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$build.prototype.constructor = Coroutine$build;
  Coroutine$build.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var str = '#project-type';
            this.local$projectType = jQuery(str).val();
            var str_0 = '#ktor-engine';
            this.local$ktorEngine = jQuery(str_0).val();
            var str_1 = '#ktor-version';
            var ktorVersion = jQuery(str_1).val();
            var id = artifactGroupId;
            this.local$artifactGroup = jQuery('#' + id).val();
            var id_0 = artifactNameId;
            this.local$artifactName = jQuery('#' + id_0).val();
            var id_1 = artifactVersionId;
            var artifactVersion = jQuery('#' + id_1).val();
            println('Generating ktor-sample.zip...');
            println('projectType: ' + this.local$projectType);
            println('ktorEngine: ' + this.local$ktorEngine);
            println('artifactGroup: ' + this.local$artifactGroup);
            println('artifactName: ' + this.local$artifactName);
            println('artifactVersion: ' + artifactVersion);
            var $receiver = ALL_FEATURES;
            var destination = ArrayList_init();
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              var str_2 = '#artifact-' + element.id;
              if (jQuery(str_2).prop('checked'))
                destination.add_11rb$(element);
            }

            var dependenciesToInclude = toSet(destination);
            tmp$ = ALL_FEATURES.iterator();
            while (tmp$.hasNext()) {
              var dependency = tmp$.next();
              var toInclude = dependenciesToInclude.contains_11rb$(dependency);
              println('DEPENDENCY: ' + dependency + ' :: include=' + toInclude);
            }

            this.local$info = new BuildInfo(get_includeWrapper(), ProjectType$Companion_getInstance().invoke_61zpoe$(this.local$projectType), new SemVer(ktorVersion), this.local$artifactName, this.local$artifactGroup, artifactVersion, KtorEngine$Companion_getInstance().invoke_61zpoe$(this.local$ktorEngine), void 0, build$lambda);
            this.exceptionState_0 = 2;
            this.local$zb = new ZipBuilder();
            var tmp$_1;
            this.state_0 = 1;
            this.result_0 = generate(this.local$info, plus(plus(listOf_0(ApplicationKt_getInstance()), dependenciesToInclude), swaggerGenerators), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var files = this.result_0;
            tmp$_1 = files.entries.iterator();
            while (tmp$_1.hasNext()) {
              var tmp$_2 = tmp$_1.next();
              var file = tmp$_2.key;
              var result = tmp$_2.value;
              var rname = this.local$info.artifactName + '/' + file;
              if (this.local$dev) {
                console.warn('ADD file: ' + rname);
                try {
                  console.log(toString_1(result.data, UTF8_getInstance()));
                }
                 catch (e) {
                  if (Kotlin.isType(e, Throwable)) {
                    console.log('<binary file>');
                  }
                   else
                    throw e;
                }
              }
              this.local$zb.add_w0mhwy$(rname, result.data, void 0, result.mode);
            }

            var zipBytes = this.local$zb.toByteArray();
            if (!this.local$dev) {
              generateBrowserFile('ktor-sample-' + this.local$projectType + '-' + this.local$ktorEngine + '-' + this.local$artifactGroup + '-' + this.local$artifactName + '.zip', zipBytes);
            }

            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              console.error(e);
              window.alert("Couldn't generate ZIP. Reason: " + e);
            }
             else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            return;
          case 4:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function get_isLocalEnv() {
    return setOf(['127.0.0.1', 'localhost']).contains_11rb$(ensureNotNull(document.location).hostname);
  }
  function registerBuildButton$lambda$lambda(continuation_0, suspended) {
    var instance = new Coroutine$registerBuildButton$lambda$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$registerBuildButton$lambda$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$registerBuildButton$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$registerBuildButton$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$registerBuildButton$lambda$lambda.prototype.constructor = Coroutine$registerBuildButton$lambda$lambda;
  Coroutine$registerBuildButton$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = build(true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function registerBuildButton$lambda() {
    launch(registerBuildButton$lambda$lambda);
    return Unit;
  }
  function registerBuildButton$lambda$lambda_0(continuation_0, suspended) {
    var instance = new Coroutine$registerBuildButton$lambda$lambda_0(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$registerBuildButton$lambda$lambda_0(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$registerBuildButton$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$registerBuildButton$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$registerBuildButton$lambda$lambda_0.prototype.constructor = Coroutine$registerBuildButton$lambda$lambda_0;
  Coroutine$registerBuildButton$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = build(false, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function registerBuildButton$lambda_0() {
    launch(registerBuildButton$lambda$lambda_0);
    return Unit;
  }
  function registerBuildButton() {
    if (get_isLocalEnv()) {
      var str = '#buildButtonDev';
      jQuery(str).removeAttr('disabled').css('display', 'inline-block').on('click', registerBuildButton$lambda);
    }
    var str_0 = '#buildButton';
    jQuery(str_0).removeAttr('disabled').on('click', registerBuildButton$lambda_0);
  }
  function handleFiltering() {
    handleFiltering_0('server');
    handleFiltering_0('client');
  }
  function handleFiltering$lambda$lambda(closure$filter) {
    return function (index, element) {
      var tmp$ = closure$filter.length === 0;
      if (!tmp$) {
        tmp$ = contains(jQuery(element).text().toLowerCase(), closure$filter);
      }
      var visible = tmp$;
      if (visible) {
        jQuery(element).show();
      }
       else {
        jQuery(element).hide();
      }
      return Unit;
    };
  }
  function handleFiltering$lambda(closure$dependencyFilter, closure$kind) {
    return function () {
      var filter = closure$dependencyFilter.val().toLowerCase();
      var str = '#dependencies-' + closure$kind + ' label.artifact';
      jQuery(str).each(handleFiltering$lambda$lambda(filter));
      return Unit;
    };
  }
  function handleFiltering_0(kind) {
    var str = '#dependency-filter-' + kind;
    var dependencyFilter = jQuery(str);
    dependencyFilter.on('keyup', handleFiltering$lambda(dependencyFilter, kind));
  }
  function removeLoading() {
    var str = '.loading';
    jQuery(str).removeClass('loading').addClass('loaded');
  }
  function registerKeyboardUsability$lambda(be) {
    var tmp$, tmp$_0, tmp$_1;
    var e = Kotlin.isType(tmp$ = be, KeyboardEvent) ? tmp$ : throwCCE();
    var active = document.activeElement;
    tmp$_0 = listOf(['dependency-filter-client', 'dependency-filter-server']).iterator();
    while (tmp$_0.hasNext()) {
      var filterId = tmp$_0.next();
      var dependencyFilter = document.getElementById(filterId);
      if (!equals(active != null ? active.tagName : null, 'INPUT') && !equals(active != null ? active.tagName : null, 'TEXTAREA') && listOf(['f', 's', 'c']).contains_11rb$(e.key)) {
        if ((e.key === 'f' || e.key === 's') && contains(filterId, 'server') || (e.key === 'c' && contains(filterId, 'client'))) {
          dependencyFilter != null ? dependencyFilter.focus() : null;
          e.preventDefault();
        }
      }
      if (active === dependencyFilter) {
        var str = '.artifact.active:visible';
        var current = jQuery(str);
        switch (e.key) {
          case 'Escape':
            dependencyFilter != null ? dependencyFilter.blur() : null;
            e.preventDefault();
            break;
          case 'Enter':
            var checkbox = current.find('[type=checkbox]');
            checkbox.prop('checked', !checkbox.prop('checked'));
            e.preventDefault();
            break;
          case 'ArrowUp':
          case 'ArrowDown':
            var up = e.key === 'ArrowUp';
            var count = current.length;
            var next;
            if (equals(count, 0)) {
              var str_0 = '.artifact:visible';
              next = jQuery(str_0).first();
            }
             else {
              next = current;
              do {
                next = up ? next.prev('.artifact') : next.next('.artifact');
              }
               while (numberToInt(next.length) >= 1 && !next.is(':visible'));
              if (equals(next.length, 0)) {
                var tmp$_2;
                if (up) {
                  var str_1 = '.artifact:visible';
                  tmp$_2 = jQuery(str_1).last();
                }
                 else {
                  var str_2 = '.artifact:visible';
                  tmp$_2 = jQuery(str_2).first();
                }
                next = tmp$_2;
              }
            }

            next.addClass('active');
            current.removeClass('active');
            if (numberToInt(next.length) >= 1) {
              (tmp$_1 = next[0]) != null ? (tmp$_1.scrollIntoView(jsObject([to('behavior', 'instant'), to('block', 'center'), to('inline', 'center')])), Unit) : null;
            }

            e.preventDefault();
            break;
        }
      }
    }
    return Unit;
  }
  function registerKeyboardUsability() {
    document.addEventListener('keydown', registerKeyboardUsability$lambda);
  }
  function NewDateTime() {
    return new Date();
  }
  function NewDateTime_0(time) {
    return new Date(time);
  }
  function get_time($receiver) {
    var tmp$;
    return Kotlin.Long.fromNumber((Kotlin.isType(tmp$ = $receiver, Date) ? tmp$ : throwCCE()).getTime());
  }
  function get_fullYear($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Date) ? tmp$ : throwCCE()).getFullYear();
  }
  function get_month($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Date) ? tmp$ : throwCCE()).getMonth();
  }
  function get_date($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Date) ? tmp$ : throwCCE()).getDate();
  }
  function get_hours($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Date) ? tmp$ : throwCCE()).getHours();
  }
  function get_minutes($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Date) ? tmp$ : throwCCE()).getMinutes();
  }
  function get_seconds($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Date) ? tmp$ : throwCCE()).getSeconds();
  }
  function BuildInfo(includeWrapper, projectType, ktorVersion, artifactName, artifactGroup, artifactVersion, ktorEngine, generateFeatureSample, fetch) {
    if (includeWrapper === void 0)
      includeWrapper = false;
    if (projectType === void 0)
      projectType = ProjectType$Gradle_getInstance();
    if (ktorVersion === void 0)
      ktorVersion = Versions_getInstance().LAST;
    if (artifactName === void 0)
      artifactName = 'example';
    if (artifactGroup === void 0)
      artifactGroup = 'com.example';
    if (artifactVersion === void 0)
      artifactVersion = '0.0.1-SNAPSHOT';
    if (ktorEngine === void 0)
      ktorEngine = KtorEngine$Netty_getInstance();
    if (generateFeatureSample === void 0)
      generateFeatureSample = true;
    if (fetch === void 0)
      fetch = BuildInfo_init$lambda;
    this.includeWrapper = includeWrapper;
    this.projectType = projectType;
    this.ktorVersion = ktorVersion;
    this.artifactName = artifactName;
    this.artifactGroup = artifactGroup;
    this.artifactVersion = artifactVersion;
    this.ktorEngine = ktorEngine;
    this.generateFeatureSample = generateFeatureSample;
    this.fetch = fetch;
    this.ktorVer = this.ktorVersion;
    this.developmentPackage = 'io.ktor.server.' + this.ktorEngine.id;
    this.developmentEngineFQ = this.developmentPackage + '.DevelopmentEngine';
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function BuildInfo_init$lambda(it, continuation_0, suspended) {
    var instance = new Coroutine$BuildInfo_init$lambda(it, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$BuildInfo_init$lambda(it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$BuildInfo_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildInfo_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildInfo_init$lambda.prototype.constructor = Coroutine$BuildInfo_init$lambda;
  Coroutine$BuildInfo_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            throw new NotImplementedError_init('An operation is not implemented: ' + 'Must set fetch');
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BuildInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildInfo',
    interfaces: []
  };
  BuildInfo.prototype.component1 = function () {
    return this.includeWrapper;
  };
  BuildInfo.prototype.component2 = function () {
    return this.projectType;
  };
  BuildInfo.prototype.component3 = function () {
    return this.ktorVersion;
  };
  BuildInfo.prototype.component4 = function () {
    return this.artifactName;
  };
  BuildInfo.prototype.component5 = function () {
    return this.artifactGroup;
  };
  BuildInfo.prototype.component6 = function () {
    return this.artifactVersion;
  };
  BuildInfo.prototype.component7 = function () {
    return this.ktorEngine;
  };
  BuildInfo.prototype.component8 = function () {
    return this.generateFeatureSample;
  };
  BuildInfo.prototype.component9 = function () {
    return this.fetch;
  };
  BuildInfo.prototype.copy_7m8zrt$ = function (includeWrapper, projectType, ktorVersion, artifactName, artifactGroup, artifactVersion, ktorEngine, generateFeatureSample, fetch) {
    return new BuildInfo(includeWrapper === void 0 ? this.includeWrapper : includeWrapper, projectType === void 0 ? this.projectType : projectType, ktorVersion === void 0 ? this.ktorVersion : ktorVersion, artifactName === void 0 ? this.artifactName : artifactName, artifactGroup === void 0 ? this.artifactGroup : artifactGroup, artifactVersion === void 0 ? this.artifactVersion : artifactVersion, ktorEngine === void 0 ? this.ktorEngine : ktorEngine, generateFeatureSample === void 0 ? this.generateFeatureSample : generateFeatureSample, fetch === void 0 ? this.fetch : fetch);
  };
  BuildInfo.prototype.toString = function () {
    return 'BuildInfo(includeWrapper=' + Kotlin.toString(this.includeWrapper) + (', projectType=' + Kotlin.toString(this.projectType)) + (', ktorVersion=' + Kotlin.toString(this.ktorVersion)) + (', artifactName=' + Kotlin.toString(this.artifactName)) + (', artifactGroup=' + Kotlin.toString(this.artifactGroup)) + (', artifactVersion=' + Kotlin.toString(this.artifactVersion)) + (', ktorEngine=' + Kotlin.toString(this.ktorEngine)) + (', generateFeatureSample=' + Kotlin.toString(this.generateFeatureSample)) + (', fetch=' + Kotlin.toString(this.fetch)) + ')';
  };
  BuildInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.includeWrapper) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectType) | 0;
    result = result * 31 + Kotlin.hashCode(this.ktorVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.artifactName) | 0;
    result = result * 31 + Kotlin.hashCode(this.artifactGroup) | 0;
    result = result * 31 + Kotlin.hashCode(this.artifactVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.ktorEngine) | 0;
    result = result * 31 + Kotlin.hashCode(this.generateFeatureSample) | 0;
    result = result * 31 + Kotlin.hashCode(this.fetch) | 0;
    return result;
  };
  BuildInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.includeWrapper, other.includeWrapper) && Kotlin.equals(this.projectType, other.projectType) && Kotlin.equals(this.ktorVersion, other.ktorVersion) && Kotlin.equals(this.artifactName, other.artifactName) && Kotlin.equals(this.artifactGroup, other.artifactGroup) && Kotlin.equals(this.artifactVersion, other.artifactVersion) && Kotlin.equals(this.ktorEngine, other.ktorEngine) && Kotlin.equals(this.generateFeatureSample, other.generateFeatureSample) && Kotlin.equals(this.fetch, other.fetch)))));
  };
  function FileContainer() {
  }
  FileContainer.prototype.add_dkzqdg$ = function (name, content, mode, callback$default) {
    if (mode === void 0)
      mode = toInt('644', 8);
    callback$default ? callback$default(name, content, mode) : this.add_dkzqdg$$default(name, content, mode);
  };
  FileContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FileContainer',
    interfaces: []
  };
  function add($receiver, name, content, charset, mode) {
    if (charset === void 0)
      charset = UTF8_getInstance();
    if (mode === void 0)
      mode = toInt('644', 8);
    $receiver.add_dkzqdg$(name, toByteArray(content, charset), mode);
  }
  function ServerFeature(deps) {
    Feature.call(this, deps.slice());
  }
  ServerFeature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerFeature',
    interfaces: [Feature]
  };
  function ClientFeature(deps) {
    Feature.call(this, deps.slice());
  }
  ClientFeature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientFeature',
    interfaces: [Feature]
  };
  function Feature(deps) {
    Block.call(this, deps.slice());
    this.group_a4qfdz$_0 = 'Features';
    this.tags_4pwcxp$_0 = emptyList();
    this.repos_54de5l$_0 = Repos_getInstance().ktor;
    this.artifacts_g5f33r$_0 = lazy(Feature$artifacts$lambda(this));
    this.testArtifacts_6s9xgp$_0 = lazy(Feature$testArtifacts$lambda);
    this.documentation_nx4xfm$_0 = null;
  }
  Object.defineProperty(Feature.prototype, 'featureDeps', {
    get: function () {
      var $receiver = this.blockDeps;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, Feature))
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  Object.defineProperty(Feature.prototype, 'group', {
    get: function () {
      return this.group_a4qfdz$_0;
    }
  });
  Object.defineProperty(Feature.prototype, 'tags', {
    get: function () {
      return this.tags_4pwcxp$_0;
    }
  });
  Object.defineProperty(Feature.prototype, 'repos', {
    get: function () {
      return this.repos_54de5l$_0;
    }
  });
  Object.defineProperty(Feature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_g5f33r$_0.value;
    }
  });
  Object.defineProperty(Feature.prototype, 'testArtifacts', {
    get: function () {
      return this.testArtifacts_6s9xgp$_0.value;
    }
  });
  Object.defineProperty(Feature.prototype, 'documentation', {
    get: function () {
      return this.documentation_nx4xfm$_0;
    }
  });
  Feature.prototype.render_miqy8c$ = function ($receiver, info) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.repos.iterator();
    while (tmp$.hasNext()) {
      var repo = tmp$.next();
      addMavenRepository($receiver, repo);
    }
    tmp$_0 = this.artifacts.iterator();
    while (tmp$_0.hasNext()) {
      var artifact = tmp$_0.next();
      addCompileDependency($receiver, new MvnArtifact(artifact));
    }
    tmp$_1 = this.artifacts.iterator();
    while (tmp$_1.hasNext()) {
      var artifact_0 = tmp$_1.next();
      addTestDependency($receiver, new MvnArtifact(artifact_0));
    }
    if (info.generateFeatureSample) {
      this.renderFeature_gtq0m3$($receiver, info);
    }
  };
  Feature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
  };
  Feature.prototype.toString = function () {
    return 'Feature(' + this.id + ')';
  };
  function Feature$artifacts$lambda(this$Feature) {
    return function () {
      return listOf_0('io.ktor:' + this$Feature.id + ':' + '$' + 'ktor_version');
    };
  }
  function Feature$testArtifacts$lambda() {
    return emptyList();
  }
  Feature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Feature',
    interfaces: [Block]
  };
  function FeatureSet(features) {
    this.direct = toSet(features);
    var $receiver = this.direct;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = element.getAllDependantBlocks_7onwc9$();
      var destination_0 = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (Kotlin.isType(element_0, Feature))
          destination_0.add_11rb$(element_0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    this.all = toSet(destination);
    this.transitive = minus(this.all, this.direct);
  }
  FeatureSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FeatureSet',
    interfaces: []
  };
  function KtorEngine(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KtorEngine_initFields() {
    KtorEngine_initFields = function () {
    };
    KtorEngine$Netty_instance = new KtorEngine('Netty', 0, 'netty');
    KtorEngine$Jetty_instance = new KtorEngine('Jetty', 1, 'jetty');
    KtorEngine$Tomcat_instance = new KtorEngine('Tomcat', 2, 'tomcat');
    KtorEngine$CIO_instance = new KtorEngine('CIO', 3, 'cio');
    KtorEngine$Companion_getInstance();
  }
  var KtorEngine$Netty_instance;
  function KtorEngine$Netty_getInstance() {
    KtorEngine_initFields();
    return KtorEngine$Netty_instance;
  }
  var KtorEngine$Jetty_instance;
  function KtorEngine$Jetty_getInstance() {
    KtorEngine_initFields();
    return KtorEngine$Jetty_instance;
  }
  var KtorEngine$Tomcat_instance;
  function KtorEngine$Tomcat_getInstance() {
    KtorEngine_initFields();
    return KtorEngine$Tomcat_instance;
  }
  var KtorEngine$CIO_instance;
  function KtorEngine$CIO_getInstance() {
    KtorEngine_initFields();
    return KtorEngine$CIO_instance;
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function KtorEngine$Companion() {
    KtorEngine$Companion_instance = this;
    var $receiver = KtorEngine$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
    var $receiver_0 = KtorEngine$values();
    var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
    var destination_0 = LinkedHashMap_init_0(capacity_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      destination_0.put_xwzc9p$(element_0.name, element_0);
    }
    this.BY_NAME = destination_0;
    this.BY = plus_0(this.BY_ID, this.BY_NAME);
  }
  KtorEngine$Companion.prototype.invoke_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.BY.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Unknown engine ' + name).toString());
    }
    return tmp$_0;
  };
  KtorEngine$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KtorEngine$Companion_instance = null;
  function KtorEngine$Companion_getInstance() {
    KtorEngine_initFields();
    if (KtorEngine$Companion_instance === null) {
      new KtorEngine$Companion();
    }
    return KtorEngine$Companion_instance;
  }
  KtorEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KtorEngine',
    interfaces: [Enum]
  };
  function KtorEngine$values() {
    return [KtorEngine$Netty_getInstance(), KtorEngine$Jetty_getInstance(), KtorEngine$Tomcat_getInstance(), KtorEngine$CIO_getInstance()];
  }
  KtorEngine.values = KtorEngine$values;
  function KtorEngine$valueOf(name) {
    switch (name) {
      case 'Netty':
        return KtorEngine$Netty_getInstance();
      case 'Jetty':
        return KtorEngine$Jetty_getInstance();
      case 'Tomcat':
        return KtorEngine$Tomcat_getInstance();
      case 'CIO':
        return KtorEngine$CIO_getInstance();
      default:throwISE('No enum constant io.ktor.start.KtorEngine.' + name);
    }
  }
  KtorEngine.valueOf_61zpoe$ = KtorEngine$valueOf;
  function ProjectType(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ProjectType_initFields() {
    ProjectType_initFields = function () {
    };
    ProjectType$Gradle_instance = new ProjectType('Gradle', 0, 'gradle');
    ProjectType$Maven_instance = new ProjectType('Maven', 1, 'maven');
    ProjectType$Companion_getInstance();
  }
  var ProjectType$Gradle_instance;
  function ProjectType$Gradle_getInstance() {
    ProjectType_initFields();
    return ProjectType$Gradle_instance;
  }
  var ProjectType$Maven_instance;
  function ProjectType$Maven_getInstance() {
    ProjectType_initFields();
    return ProjectType$Maven_instance;
  }
  function ProjectType$Companion() {
    ProjectType$Companion_instance = this;
    var $receiver = ProjectType$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
    var $receiver_0 = ProjectType$values();
    var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
    var destination_0 = LinkedHashMap_init_0(capacity_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      destination_0.put_xwzc9p$(element_0.name, element_0);
    }
    this.BY_NAME = destination_0;
    this.BY = plus_0(this.BY_ID, this.BY_NAME);
  }
  ProjectType$Companion.prototype.invoke_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.BY.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('Unknown project type ' + name).toString());
    }
    return tmp$_0;
  };
  ProjectType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ProjectType$Companion_instance = null;
  function ProjectType$Companion_getInstance() {
    ProjectType_initFields();
    if (ProjectType$Companion_instance === null) {
      new ProjectType$Companion();
    }
    return ProjectType$Companion_instance;
  }
  ProjectType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProjectType',
    interfaces: [Enum]
  };
  function ProjectType$values() {
    return [ProjectType$Gradle_getInstance(), ProjectType$Maven_getInstance()];
  }
  ProjectType.values = ProjectType$values;
  function ProjectType$valueOf(name) {
    switch (name) {
      case 'Gradle':
        return ProjectType$Gradle_getInstance();
      case 'Maven':
        return ProjectType$Maven_getInstance();
      default:throwISE('No enum constant io.ktor.start.ProjectType.' + name);
    }
  }
  ProjectType.valueOf_61zpoe$ = ProjectType$valueOf;
  function Repos() {
    Repos_instance = this;
    this.jcenter = listOf_0('jcenter');
    this.ktor = listOf_0('https://kotlin.bintray.com/ktor');
    this.kotlin_js_wrappers = listOf_0('https://kotlin.bintray.com/kotlin-js-wrappers');
  }
  Repos.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Repos',
    interfaces: []
  };
  var Repos_instance = null;
  function Repos_getInstance() {
    if (Repos_instance === null) {
      new Repos();
    }
    return Repos_instance;
  }
  var KOTLIN_VERSION;
  var KOTLINX_COROUTINES_VERSION;
  function Versions() {
    Versions_instance = this;
    this.V092 = new SemVer('0.9.2');
    this.V093 = new SemVer('0.9.3');
    this.ALL = [this.V093];
    this.LAST = this.V093;
  }
  Versions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Versions',
    interfaces: []
  };
  var Versions_instance = null;
  function Versions_getInstance() {
    if (Versions_instance === null) {
      new Versions();
    }
    return Versions_instance;
  }
  function ALL_SERVER_FEATURES$lambda() {
    var $receiver = ALL_FEATURES;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, ServerFeature))
        destination.add_11rb$(element);
    }
    return destination;
  }
  var ALL_SERVER_FEATURES;
  function get_ALL_SERVER_FEATURES() {
    return ALL_SERVER_FEATURES.value;
  }
  function ALL_CLIENT_FEATURES$lambda() {
    var $receiver = ALL_FEATURES;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, ClientFeature))
        destination.add_11rb$(element);
    }
    return destination;
  }
  var ALL_CLIENT_FEATURES;
  function get_ALL_CLIENT_FEATURES() {
    return ALL_CLIENT_FEATURES.value;
  }
  var ALL_FEATURES;
  var ALL_FEATURES_BY_ID;
  function RawSocketsFeature() {
    RawSocketsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.group_yhj2r1$_0 = 'Sockets';
    this.repos_vj7xzp$_0 = Repos_getInstance().ktor;
    this.id_4qus7n$_0 = 'ktor-network';
    this.title_uiv1fw$_0 = 'Raw Sockets';
    this.description_mr4lsg$_0 = 'Adds Raw Socket support for listening and connecting to tcp and udp sockets';
    this.documentation_dqqdw2$_0 = 'https://ktor.io/servers/raw-sockets.html';
    this.SERVER_SOCKET = this.newSlot_pdl1vj$('SERVER_SOCKET');
    this.CLIENT_SOCKET = this.newSlot_pdl1vj$('CLIENT_SOCKET');
  }
  Object.defineProperty(RawSocketsFeature.prototype, 'group', {
    get: function () {
      return this.group_yhj2r1$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_vj7xzp$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'id', {
    get: function () {
      return this.id_4qus7n$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'title', {
    get: function () {
      return this.title_uiv1fw$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'description', {
    get: function () {
      return this.description_mr4lsg$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_dqqdw2$_0;
    }
  });
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.line_61zpoe$('val serverSocket = aSocket(selectorManager).tcp().bind(port = DefaultPort)');
    return Unit;
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda(this$RawSocketsFeature, this$renderFeature) {
    return function ($receiver) {
      var $receiver_0 = 'object Server';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$RawSocketsFeature_0 = this$RawSocketsFeature;
        var this$renderFeature_0 = this$renderFeature;
        $receiver.line_61zpoe$('@JvmStatic');
        var $receiver_1 = 'fun main(args: Array<String>)';
        var rafter_0 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
        $receiver._indent();
        try {
          var $receiver_2 = 'runBlocking';
          var rafter_1 = ''.length === 0 ? '' : ' ' + '';
          $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
          $receiver._indent();
          try {
            this$renderFeature_0.block_1s7wi0$($receiver, this$RawSocketsFeature_0.SERVER_SOCKET, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
            $receiver.line_61zpoe$('println("Echo Server listening at ${serverSocket.localAddress}")');
            var $receiver_3 = 'while (true)';
            var rafter_2 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$($receiver_3.length === 0 ? '{' + rafter_2 : $receiver_3 + ' {' + rafter_2);
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('val socket = serverSocket.accept()');
              $receiver.line_61zpoe$('println("Accepted $socket")');
              var rafter_3 = ''.length === 0 ? '' : ' ' + '';
              $receiver.line_61zpoe$('launch'.length === 0 ? '{' + rafter_3 : 'launch' + ' {' + rafter_3);
              $receiver._indent();
              try {
                $receiver.line_61zpoe$('val read = socket.openReadChannel()');
                $receiver.line_61zpoe$('val write = socket.openWriteChannel(autoFlush = true)');
                var rafter_4 = ''.length === 0 ? '' : ' ' + '';
                $receiver.line_61zpoe$('try'.length === 0 ? '{' + rafter_4 : 'try' + ' {' + rafter_4);
                $receiver._indent();
                try {
                  var $receiver_4 = 'while (true)';
                  var rafter_5 = ''.length === 0 ? '' : ' ' + '';
                  $receiver.line_61zpoe$($receiver_4.length === 0 ? '{' + rafter_5 : $receiver_4 + ' {' + rafter_5);
                  $receiver._indent();
                  try {
                    $receiver.line_61zpoe$('val line = read.readUTF8Line()');
                    $receiver.line_61zpoe$('write.writeStringUtf8("$line\\n")');
                  }
                  finally {
                    $receiver._unindent();
                  }
                  $receiver.line_61zpoe$('}' + '');
                  unaryPlus_0($receiver);
                }
                finally {
                  $receiver._unindent();
                }
                $receiver.line_61zpoe$('}' + '');
                unaryPlus_0($receiver);
                var $receiver_5 = 'catch (e: Throwable)';
                var rafter_6 = ''.length === 0 ? '' : ' ' + '';
                $receiver.line_61zpoe$($receiver_5.length === 0 ? '{' + rafter_6 : $receiver_5 + ' {' + rafter_6);
                $receiver._indent();
                try {
                  $receiver.line_61zpoe$('socket.close()');
                }
                finally {
                  $receiver._unindent();
                }
                $receiver.line_61zpoe$('}' + '');
                unaryPlus_0($receiver);
              }
              finally {
                $receiver._unindent();
              }
              $receiver.line_61zpoe$('}' + '');
              unaryPlus_0($receiver);
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}' + '');
          unaryPlus_0($receiver);
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('val socket = aSocket(selectorManager).tcp().connect("127.0.0.1", port = DefaultPort)');
    return Unit;
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$('launch'.length === 0 ? '{' + rafter : 'launch' + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_0 = 'while (true)';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter_0 : $receiver_0 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('val line = read.readUTF8Line()');
        $receiver.line_61zpoe$('println("server: $line")');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    var $receiver_0 = 'for (line in System.`in`.lines())';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('println("client: $line")');
      $receiver.line_61zpoe$('write.writeStringUtf8("$line\\n")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.line_61zpoe$('private fun InputStream.lines() = Scanner(this).lines()');
    return Unit;
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = 'private fun Scanner.lines() = buildSequence';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'while (hasNext())';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('yield(readLine())');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda_0(this$RawSocketsFeature, this$renderFeature) {
    return function ($receiver) {
      var $receiver_0 = 'object Client';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$RawSocketsFeature_0 = this$RawSocketsFeature;
        var this$renderFeature_0 = this$renderFeature;
        $receiver.line_61zpoe$('@JvmStatic');
        var $receiver_1 = 'fun main(args: Array<String>)';
        var rafter_0 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
        $receiver._indent();
        try {
          var $receiver_2 = 'runBlocking';
          var rafter_1 = ''.length === 0 ? '' : ' ' + '';
          $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
          $receiver._indent();
          try {
            this$renderFeature_0.block_1s7wi0$($receiver, this$RawSocketsFeature_0.CLIENT_SOCKET, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
            $receiver.line_61zpoe$('val read = socket.openReadChannel()');
            $receiver.line_61zpoe$('val write = socket.openWriteChannel(autoFlush = true)');
            SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
            SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2);
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}' + '');
          unaryPlus_0($receiver);
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
        SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda);
        SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda_0);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function RawSocketsFeature$renderFeature$lambda$lambda(this$RawSocketsFeature, this$renderFeature) {
    return function ($receiver) {
      $receiver.line_61zpoe$('/**');
      $receiver.line_61zpoe$(' * Two mains are provided, you must first start EchoApp.Server, and then EchoApp.Client.');
      $receiver.line_61zpoe$(' * You can also start EchoApp.Server and then use a telnet client to connect to the echo server.');
      $receiver.line_61zpoe$(' */');
      var $receiver_0 = 'object EchoApp';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$RawSocketsFeature_0 = this$RawSocketsFeature;
        var this$renderFeature_0 = this$renderFeature;
        $receiver.line_61zpoe$('val selectorManager = ActorSelectorManager(ioCoroutineDispatcher)');
        $receiver.line_61zpoe$('val DefaultPort = 9002');
        SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda(this$RawSocketsFeature_0, this$renderFeature_0));
        SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda_0(this$RawSocketsFeature_0, this$renderFeature_0));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function RawSocketsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, this$RawSocketsFeature_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RawSocketsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, this$RawSocketsFeature_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RawSocketsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, this$RawSocketsFeature_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$renderFeature = this$renderFeature_0;
    this.local$this$RawSocketsFeature = this$RawSocketsFeature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$RawSocketsFeature$renderFeature$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RawSocketsFeature$renderFeature$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RawSocketsFeature$renderFeature$lambda.prototype.constructor = Coroutine$RawSocketsFeature$renderFeature$lambda;
  Coroutine$RawSocketsFeature$renderFeature$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('package ' + this.local$closure$info.artifactGroup);
            putImports(this.local$$receiver, get_applicationKtImports(this.local$this$renderFeature));
            return SEPARATOR(this.local$$receiver, RawSocketsFeature$renderFeature$lambda$lambda(this.local$this$RawSocketsFeature, this.local$this$renderFeature)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RawSocketsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'java.io.*');
    addImport($receiver, 'java.util.*');
    addImport($receiver, 'io.ktor.network.selector.*');
    addImport($receiver, 'io.ktor.network.sockets.*');
    addImport($receiver, 'io.ktor.network.util.*');
    addImport($receiver, 'kotlin.coroutines.experimental.*');
    addImport($receiver, 'kotlinx.coroutines.experimental.*');
    addImport($receiver, 'kotlinx.coroutines.experimental.io.*');
    $receiver.fileText_7k8vha$('src/EchoApp.kt', void 0, void 0, RawSocketsFeature$renderFeature$lambda(info, $receiver, this));
  };
  RawSocketsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RawSocketsFeature',
    interfaces: [ServerFeature]
  };
  var RawSocketsFeature_instance = null;
  function RawSocketsFeature_getInstance() {
    if (RawSocketsFeature_instance === null) {
      new RawSocketsFeature();
    }
    return RawSocketsFeature_instance;
  }
  function RawSocketsTlsFeature() {
    RawSocketsTlsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RawSocketsFeature_getInstance()]);
    this.group_5abz84$_0 = 'Sockets';
    this.repos_aap0gi$_0 = Repos_getInstance().ktor;
    this.id_9x2ee2$_0 = 'ktor-network-tls';
    this.title_bb1x0b$_0 = 'Raw Secure SSL/TLS Sockets';
    this.description_j4k8eh$_0 = 'Adds Raw Socket support for listening and connecting to tcp and udp sockets with secure sockets';
    this.documentation_tpkipz$_0 = 'https://ktor.io/servers/raw-sockets.html#secure';
  }
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'group', {
    get: function () {
      return this.group_5abz84$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_aap0gi$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'id', {
    get: function () {
      return this.id_9x2ee2$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'title', {
    get: function () {
      return this.title_bb1x0b$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'description', {
    get: function () {
      return this.description_j4k8eh$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_tpkipz$_0;
    }
  });
  function RawSocketsTlsFeature$renderFeature$lambda$lambda($receiver) {
    var $receiver_0 = 'object TlsRawSocket';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('@JvmStatic');
      var $receiver_1 = 'fun main(args: Array<String>)';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        var $receiver_2 = 'runBlocking';
        var rafter_1 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('val selectorManager = ActorSelectorManager(ioCoroutineDispatcher)');
          $receiver.line_61zpoe$('val socket = aSocket(selectorManager).tcp().connect("www.google.com", port = 443).tls()');
          $receiver.line_61zpoe$('val write = socket.openWriteChannel()');
          $receiver.line_61zpoe$('val LINE = "\\r\\n"');
          $receiver.line_61zpoe$('write.writeStringUtf8("GET / HTTP/1.1${LINE}Host: www.google.com${LINE}Connection: close${LINE}${LINE}")');
          $receiver.line_61zpoe$('write.flush()');
          $receiver.line_61zpoe$('println(socket.openReadChannel().readRemaining().readBytes().toString(Charsets.UTF_8))');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function RawSocketsTlsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RawSocketsTlsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RawSocketsTlsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$renderFeature = this$renderFeature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$RawSocketsTlsFeature$renderFeature$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RawSocketsTlsFeature$renderFeature$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RawSocketsTlsFeature$renderFeature$lambda.prototype.constructor = Coroutine$RawSocketsTlsFeature$renderFeature$lambda;
  Coroutine$RawSocketsTlsFeature$renderFeature$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('package ' + this.local$closure$info.artifactGroup);
            putImports(this.local$$receiver, get_applicationKtImports(this.local$this$renderFeature));
            return SEPARATOR(this.local$$receiver, RawSocketsTlsFeature$renderFeature$lambda$lambda), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  RawSocketsTlsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.network.tls.*');
    addImport($receiver, 'kotlinx.io.core.*');
    $receiver.fileText_7k8vha$('src/TlsRawSocket.kt', void 0, void 0, RawSocketsTlsFeature$renderFeature$lambda(info, $receiver));
  };
  RawSocketsTlsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RawSocketsTlsFeature',
    interfaces: [ServerFeature]
  };
  var RawSocketsTlsFeature_instance = null;
  function RawSocketsTlsFeature_getInstance() {
    if (RawSocketsTlsFeature_instance === null) {
      new RawSocketsTlsFeature();
    }
    return RawSocketsTlsFeature_instance;
  }
  function ClientEngine(deps) {
    ClientFeature.call(this, deps.slice());
    this.group_efbin8$_0 = 'HttpClient Engine';
  }
  Object.defineProperty(ClientEngine.prototype, 'group', {
    get: function () {
      return this.group_efbin8$_0;
    }
  });
  ClientEngine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClientEngine',
    interfaces: [ClientFeature]
  };
  function CoreClientEngine() {
    CoreClientEngine_instance = this;
    ClientEngine.call(this, [ApplicationKt_getInstance()]);
    this.id_z0dcbv$_0 = 'ktor-client-core';
    this.title_vfzv4c$_0 = 'HttpClient Engine';
    this.description_awih0o$_0 = 'Core of the HttpClient. Required for libraries.';
    this.documentation_9k27km$_0 = 'https://ktor.io/clients/http-client.html';
    this.CLIENT_USAGE = this.newSlot_pdl1vj$('CLIENT');
    this.CLIENT_FEATURES = this.newSlot_pdl1vj$('CLIENT_FEATURES');
  }
  Object.defineProperty(CoreClientEngine.prototype, 'id', {
    get: function () {
      return this.id_z0dcbv$_0;
    }
  });
  Object.defineProperty(CoreClientEngine.prototype, 'title', {
    get: function () {
      return this.title_vfzv4c$_0;
    }
  });
  Object.defineProperty(CoreClientEngine.prototype, 'description', {
    get: function () {
      return this.description_awih0o$_0;
    }
  });
  Object.defineProperty(CoreClientEngine.prototype, 'documentation', {
    get: function () {
      return this.documentation_9k27km$_0;
    }
  });
  function CoreClientEngine$renderFeature$lambda$lambda(this$renderFeature, this$CoreClientEngine) {
    return function ($receiver) {
      var $receiver_0 = 'val client = HttpClient(' + get_clientEngine(this$renderFeature) + ')';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$CoreClientEngine_0 = this$CoreClientEngine;
        this$renderFeature.block_1s7wi0$($receiver, this$CoreClientEngine_0.CLIENT_FEATURES);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  function CoreClientEngine$renderFeature$lambda(this$renderFeature, this$CoreClientEngine) {
    return function ($receiver) {
      $receiver.linedeferred_yot30u$(CoreClientEngine$renderFeature$lambda$lambda(this$renderFeature, this$CoreClientEngine));
      this$renderFeature.block_1s7wi0$($receiver, this$CoreClientEngine.CLIENT_USAGE);
      return Unit;
    };
  }
  CoreClientEngine.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.*');
    $receiver.appendSeparated_qu2wte$(ApplicationKt_getInstance().MODULE_INSTALL, void 0, CoreClientEngine$renderFeature$lambda($receiver, this));
  };
  CoreClientEngine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CoreClientEngine',
    interfaces: [ClientEngine]
  };
  var CoreClientEngine_instance = null;
  function CoreClientEngine_getInstance() {
    if (CoreClientEngine_instance === null) {
      new CoreClientEngine();
    }
    return CoreClientEngine_instance;
  }
  function clientEngine$lambda($receiver) {
    return '';
  }
  var clientEngine;
  var clientEngine_metadata = new PropertyMetadata('clientEngine');
  function get_clientEngine($receiver) {
    var getValue_tv2abg$result;
    getValue_tv2abg$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = clientEngine.name) != null ? tmp$ : clientEngine_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = clientEngine.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = clientEngine.name) != null ? tmp$_3 : clientEngine_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_tv2abg$result = r;
        break getValue_tv2abg$break;
      }
      getValue_tv2abg$result = res;
    }
     while (false);
    return getValue_tv2abg$result;
  }
  function set_clientEngine($receiver, clientEngine_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = LinkedHashMap_init();
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = clientEngine.name) != null ? tmp$ : clientEngine_metadata.callableName;
    tmp$_2 = (tmp$_1 = clientEngine_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function ApacheClientEngine() {
    ApacheClientEngine_instance = this;
    ClientEngine.call(this, [CoreClientEngine_getInstance()]);
    this.id_jt5mgs$_0 = 'ktor-client-apache';
    this.title_qhya4j$_0 = 'Apache HttpClient Engine';
    this.description_4x0fyx$_0 = 'Engine for the Ktor HttpClient using Apache. Supports HTTP 1.x and HTTP 2.0.';
    this.documentation_8q7rad$_0 = 'https://ktor.io/clients/http-client.html#apache';
  }
  Object.defineProperty(ApacheClientEngine.prototype, 'id', {
    get: function () {
      return this.id_jt5mgs$_0;
    }
  });
  Object.defineProperty(ApacheClientEngine.prototype, 'title', {
    get: function () {
      return this.title_qhya4j$_0;
    }
  });
  Object.defineProperty(ApacheClientEngine.prototype, 'description', {
    get: function () {
      return this.description_4x0fyx$_0;
    }
  });
  Object.defineProperty(ApacheClientEngine.prototype, 'documentation', {
    get: function () {
      return this.documentation_8q7rad$_0;
    }
  });
  ApacheClientEngine.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.engine.apache.*');
    set_clientEngine($receiver, 'Apache');
  };
  ApacheClientEngine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApacheClientEngine',
    interfaces: [ClientEngine]
  };
  var ApacheClientEngine_instance = null;
  function ApacheClientEngine_getInstance() {
    if (ApacheClientEngine_instance === null) {
      new ApacheClientEngine();
    }
    return ApacheClientEngine_instance;
  }
  function CioClientEngine() {
    CioClientEngine_instance = this;
    ClientEngine.call(this, [CoreClientEngine_getInstance()]);
    this.id_z106rz$_0 = 'ktor-client-cio';
    this.title_74e7ma$_0 = 'CIO HttpClient Engine';
    this.description_tan2zy$_0 = 'Engine for the Ktor HttpClient using CIO (Corroutine I/O). Only supports HTTP 1.x.';
    this.documentation_l414pc$_0 = 'https://ktor.io/clients/http-client.html#cio';
  }
  Object.defineProperty(CioClientEngine.prototype, 'id', {
    get: function () {
      return this.id_z106rz$_0;
    }
  });
  Object.defineProperty(CioClientEngine.prototype, 'title', {
    get: function () {
      return this.title_74e7ma$_0;
    }
  });
  Object.defineProperty(CioClientEngine.prototype, 'description', {
    get: function () {
      return this.description_tan2zy$_0;
    }
  });
  Object.defineProperty(CioClientEngine.prototype, 'documentation', {
    get: function () {
      return this.documentation_l414pc$_0;
    }
  });
  CioClientEngine.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.engine.cio.*');
    set_clientEngine($receiver, 'CIO');
  };
  CioClientEngine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CioClientEngine',
    interfaces: [ClientEngine]
  };
  var CioClientEngine_instance = null;
  function CioClientEngine_getInstance() {
    if (CioClientEngine_instance === null) {
      new CioClientEngine();
    }
    return CioClientEngine_instance;
  }
  function JettyClientEngine() {
    JettyClientEngine_instance = this;
    ClientEngine.call(this, [CoreClientEngine_getInstance()]);
    this.id_wqanbw$_0 = 'ktor-client-jetty';
    this.title_px338j$_0 = 'Jetty HttpClient Engine';
    this.description_sfwk93$_0 = 'Engine for the Ktor HttpClient using Jetty. Only supports HTTP 2.x.';
    this.documentation_vlhxz9$_0 = 'https://ktor.io/clients/http-client.html#jetty';
  }
  Object.defineProperty(JettyClientEngine.prototype, 'id', {
    get: function () {
      return this.id_wqanbw$_0;
    }
  });
  Object.defineProperty(JettyClientEngine.prototype, 'title', {
    get: function () {
      return this.title_px338j$_0;
    }
  });
  Object.defineProperty(JettyClientEngine.prototype, 'description', {
    get: function () {
      return this.description_sfwk93$_0;
    }
  });
  Object.defineProperty(JettyClientEngine.prototype, 'documentation', {
    get: function () {
      return this.documentation_vlhxz9$_0;
    }
  });
  JettyClientEngine.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.engine.jetty.*');
    set_clientEngine($receiver, 'Jetty');
  };
  JettyClientEngine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JettyClientEngine',
    interfaces: [ClientEngine]
  };
  var JettyClientEngine_instance = null;
  function JettyClientEngine_getInstance() {
    if (JettyClientEngine_instance === null) {
      new JettyClientEngine();
    }
    return JettyClientEngine_instance;
  }
  function MockClientEngine() {
    MockClientEngine_instance = this;
    ClientEngine.call(this, [CoreClientEngine_getInstance()]);
    this.id_541874$_0 = 'ktor-client-mock';
    this.title_28v3i9$_0 = 'Mock HttpClient Engine';
    this.description_w4am8t$_0 = 'Engine for using in tests to simulate HTTP responses programmatically.';
    this.documentation_6p2g81$_0 = 'https://ktor.io/clients/http-client.html#mock';
    this.artifacts_50995k$_0 = emptyList();
    this.testArtifacts_o0ceoa$_0 = listOf_0('io.ktor:ktor-client-mock:$ktor_version');
  }
  Object.defineProperty(MockClientEngine.prototype, 'id', {
    get: function () {
      return this.id_541874$_0;
    }
  });
  Object.defineProperty(MockClientEngine.prototype, 'title', {
    get: function () {
      return this.title_28v3i9$_0;
    }
  });
  Object.defineProperty(MockClientEngine.prototype, 'description', {
    get: function () {
      return this.description_w4am8t$_0;
    }
  });
  Object.defineProperty(MockClientEngine.prototype, 'documentation', {
    get: function () {
      return this.documentation_6p2g81$_0;
    }
  });
  Object.defineProperty(MockClientEngine.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_50995k$_0;
    }
  });
  Object.defineProperty(MockClientEngine.prototype, 'testArtifacts', {
    get: function () {
      return this.testArtifacts_o0ceoa$_0;
    }
  });
  MockClientEngine.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
  };
  MockClientEngine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MockClientEngine',
    interfaces: [ClientEngine]
  };
  var MockClientEngine_instance = null;
  function MockClientEngine_getInstance() {
    if (MockClientEngine_instance === null) {
      new MockClientEngine();
    }
    return MockClientEngine_instance;
  }
  function AuthBasicClientFeature() {
    AuthBasicClientFeature_instance = this;
    ClientFeature.call(this, [CoreClientEngine_getInstance()]);
    this.id_7yu2dq$_0 = 'ktor-client-auth-basic';
    this.title_fwiqvh$_0 = 'Auth Basic feature HttpClient';
    this.description_vd12tr$_0 = 'Supports basic authentication for the Http Client';
    this.documentation_o7l9db$_0 = 'https://ktor.io/clients/http-client.html#basicauth';
  }
  Object.defineProperty(AuthBasicClientFeature.prototype, 'id', {
    get: function () {
      return this.id_7yu2dq$_0;
    }
  });
  Object.defineProperty(AuthBasicClientFeature.prototype, 'title', {
    get: function () {
      return this.title_fwiqvh$_0;
    }
  });
  Object.defineProperty(AuthBasicClientFeature.prototype, 'description', {
    get: function () {
      return this.description_vd12tr$_0;
    }
  });
  Object.defineProperty(AuthBasicClientFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_o7l9db$_0;
    }
  });
  function AuthBasicClientFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(BasicAuth)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('username = "test"');
      $receiver.line_61zpoe$('password = "pass"');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  AuthBasicClientFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.features.json.*');
    $receiver.append_qu2wte$(CoreClientEngine_getInstance().CLIENT_FEATURES, void 0, AuthBasicClientFeature$renderFeature$lambda);
  };
  AuthBasicClientFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthBasicClientFeature',
    interfaces: [ClientFeature]
  };
  var AuthBasicClientFeature_instance = null;
  function AuthBasicClientFeature_getInstance() {
    if (AuthBasicClientFeature_instance === null) {
      new AuthBasicClientFeature();
    }
    return AuthBasicClientFeature_instance;
  }
  function JsonClientFeature() {
    JsonClientFeature_instance = this;
    ClientFeature.call(this, [CoreClientEngine_getInstance(), ApplicationKt_getInstance()]);
    this.id_kihmg4$_0 = 'ktor-client-json';
    this.title_ymha91$_0 = 'Json serialization for HttpClient';
    this.description_mhece7$_0 = 'Supports basic authentication for the Http Client';
    this.documentation_c1tfk3$_0 = 'https://ktor.io/clients/http-client.html#jsonfeature';
  }
  Object.defineProperty(JsonClientFeature.prototype, 'id', {
    get: function () {
      return this.id_kihmg4$_0;
    }
  });
  Object.defineProperty(JsonClientFeature.prototype, 'title', {
    get: function () {
      return this.title_ymha91$_0;
    }
  });
  Object.defineProperty(JsonClientFeature.prototype, 'description', {
    get: function () {
      return this.description_mhece7$_0;
    }
  });
  Object.defineProperty(JsonClientFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_c1tfk3$_0;
    }
  });
  function JsonClientFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('data class JsonSampleClass(val hello: String)');
    return Unit;
  }
  function JsonClientFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(JsonFeature)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('serializer = GsonSerializer()');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function JsonClientFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'runBlocking';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'val message = client.post<JsonSampleClass>';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('url(URL("http://127.0.0.1:8080/path/to/endpoint"))');
        $receiver.line_61zpoe$('contentType(ContentType.Application.Json)');
        $receiver.line_61zpoe$('body = JsonSampleClass(hello = "world")');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  JsonClientFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.features.json.*');
    addImport($receiver, 'io.ktor.client.request.*');
    addImport($receiver, 'java.net.URL');
    addApplicationClasses($receiver, JsonClientFeature$renderFeature$lambda);
    $receiver.append_qu2wte$(CoreClientEngine_getInstance().CLIENT_FEATURES, void 0, JsonClientFeature$renderFeature$lambda_0);
    $receiver.append_qu2wte$(CoreClientEngine_getInstance().CLIENT_USAGE, void 0, JsonClientFeature$renderFeature$lambda_1);
  };
  JsonClientFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonClientFeature',
    interfaces: [ClientFeature]
  };
  var JsonClientFeature_instance = null;
  function JsonClientFeature_getInstance() {
    if (JsonClientFeature_instance === null) {
      new JsonClientFeature();
    }
    return JsonClientFeature_instance;
  }
  function WebSocketClientFeature() {
    WebSocketClientFeature_instance = this;
    ClientFeature.call(this, [CoreClientEngine_getInstance(), CioClientEngine_getInstance(), WebsocketsFeature_getInstance()]);
    this.id_vy1rrn$_0 = 'ktor-client-websocket';
    this.title_k9eaoc$_0 = 'WebSockets HttpClient support';
    this.description_91aqeo$_0 = 'HttpClient feature to establish bidirectional communication using WebSockets';
    this.documentation_77pdg2$_0 = 'https://ktor.io/clients/http-client.html#websockets';
  }
  Object.defineProperty(WebSocketClientFeature.prototype, 'id', {
    get: function () {
      return this.id_vy1rrn$_0;
    }
  });
  Object.defineProperty(WebSocketClientFeature.prototype, 'title', {
    get: function () {
      return this.title_k9eaoc$_0;
    }
  });
  Object.defineProperty(WebSocketClientFeature.prototype, 'description', {
    get: function () {
      return this.description_91aqeo$_0;
    }
  });
  Object.defineProperty(WebSocketClientFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_77pdg2$_0;
    }
  });
  function WebSocketClientFeature$renderFeature$lambda$lambda($receiver) {
    var $receiver_0 = 'object WsClientApp';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('@JvmStatic');
      var $receiver_1 = 'fun main(args: Array<String>)';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        var $receiver_2 = 'runBlocking';
        var rafter_1 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('val client = HttpClient(CIO).config { install(WebSockets) }');
          var $receiver_3 = 'client.ws(method = HttpMethod.Get, host = "127.0.0.1", port = 8080, path = "/myws/echo")';
          var rafter_2 = ''.length === 0 ? '' : ' ' + '';
          $receiver.line_61zpoe$($receiver_3.length === 0 ? '{' + rafter_2 : $receiver_3 + ' {' + rafter_2);
          $receiver._indent();
          try {
            $receiver.line_61zpoe$('send(Frame.Text("Hello World"))');
            var $receiver_4 = 'for (message in incoming.map { it as? Frame.Text }.filterNotNull())';
            var rafter_3 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$($receiver_4.length === 0 ? '{' + rafter_3 : $receiver_4 + ' {' + rafter_3);
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('println("Server said: " + message.readText())');
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}' + '');
          unaryPlus_0($receiver);
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function WebSocketClientFeature$renderFeature$lambda(this$renderFeature_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WebSocketClientFeature$renderFeature$lambda(this$renderFeature_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebSocketClientFeature$renderFeature$lambda(this$renderFeature_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$renderFeature = this$renderFeature_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$WebSocketClientFeature$renderFeature$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WebSocketClientFeature$renderFeature$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebSocketClientFeature$renderFeature$lambda.prototype.constructor = Coroutine$WebSocketClientFeature$renderFeature$lambda;
  Coroutine$WebSocketClientFeature$renderFeature$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            putImports(this.local$$receiver, get_applicationKtImports(this.local$this$renderFeature));
            return SEPARATOR(this.local$$receiver, WebSocketClientFeature$renderFeature$lambda$lambda), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  WebSocketClientFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.*');
    addImport($receiver, 'io.ktor.client.features.websocket.*');
    addImport($receiver, 'io.ktor.client.features.websocket.WebSockets');
    addImport($receiver, 'io.ktor.http.*');
    addImport($receiver, 'io.ktor.http.cio.websocket.*');
    addImport($receiver, 'io.ktor.http.cio.websocket.Frame');
    addImport($receiver, 'kotlinx.coroutines.experimental.*');
    addImport($receiver, 'kotlinx.coroutines.experimental.channels.*');
    $receiver.fileText_7k8vha$('src/WsClientApp.kt', void 0, void 0, WebSocketClientFeature$renderFeature$lambda($receiver));
  };
  WebSocketClientFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebSocketClientFeature',
    interfaces: [ClientFeature]
  };
  var WebSocketClientFeature_instance = null;
  function WebSocketClientFeature_getInstance() {
    if (WebSocketClientFeature_instance === null) {
      new WebSocketClientFeature();
    }
    return WebSocketClientFeature_instance;
  }
  function AuthBasicFeature() {
    AuthBasicFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance(), RoutingFeature_getInstance()]);
    this.group_v301hj$_0 = 'Authentication';
    this.repos_q2n095$_0 = Repos_getInstance().ktor;
    this.artifacts_aoeizt$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_grpqcf$_0 = 'auth-basic';
    this.title_p2a3pc$_0 = 'Authentication Basic';
    this.description_hdbtwc$_0 = 'Handle Basic authentication';
    this.documentation_pmttwe$_0 = 'https://ktor.io/features/authentication/basic.html';
  }
  Object.defineProperty(AuthBasicFeature.prototype, 'group', {
    get: function () {
      return this.group_v301hj$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'repos', {
    get: function () {
      return this.repos_q2n095$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_aoeizt$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'id', {
    get: function () {
      return this.id_grpqcf$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'title', {
    get: function () {
      return this.title_p2a3pc$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'description', {
    get: function () {
      return this.description_hdbtwc$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_pmttwe$_0;
    }
  });
  function AuthBasicFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'basic("myBasicAuth")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('realm = "Ktor Server"');
      $receiver.line_61zpoe$('validate { if (it.name == "test" && it.password == "password") UserIdPrincipal(it.name) else null }');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function AuthBasicFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'authenticate("myBasicAuth")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'get("/protected/route/basic")';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('val principal = call.principal<UserIdPrincipal>()!!');
        $receiver.line_61zpoe$('call.respondText("Hello ${principal.name}")');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  AuthBasicFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.features.auth.basic.*');
    addAuthProvider($receiver, AuthBasicFeature$renderFeature$lambda);
    addRoute($receiver, AuthBasicFeature$renderFeature$lambda_0);
  };
  AuthBasicFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthBasicFeature',
    interfaces: [ServerFeature]
  };
  var AuthBasicFeature_instance = null;
  function AuthBasicFeature_getInstance() {
    if (AuthBasicFeature_instance === null) {
      new AuthBasicFeature();
    }
    return AuthBasicFeature_instance;
  }
  function AuthDigestFeature() {
    AuthDigestFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance(), RoutingFeature_getInstance()]);
    this.group_xwyoip$_0 = 'Authentication';
    this.repos_swlnab$_0 = Repos_getInstance().ktor;
    this.artifacts_swddtp$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_956wr$_0 = 'auth-digest';
    this.title_rw8qqi$_0 = 'Authentication Digest';
    this.description_llyhdq$_0 = 'Handle Digest authentication';
    this.documentation_114cjg$_0 = 'https://ktor.io/features/authentication/digest.html';
  }
  Object.defineProperty(AuthDigestFeature.prototype, 'group', {
    get: function () {
      return this.group_xwyoip$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'repos', {
    get: function () {
      return this.repos_swlnab$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_swddtp$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'id', {
    get: function () {
      return this.id_956wr$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'title', {
    get: function () {
      return this.title_rw8qqi$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'description', {
    get: function () {
      return this.description_llyhdq$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_114cjg$_0;
    }
  });
  function AuthDigestFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('val myRealm = "MyRealm"');
    $receiver.line_61zpoe$('val usersInMyRealmToHA1: Map<String, ByteArray> = mapOf(');
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('// pass="test", HA1=MD5("test:MyRealm:pass")="fb12475e62dedc5c2744d98eb73b8877"');
      $receiver.line_61zpoe$('"test" to hex("fb12475e62dedc5c2744d98eb73b8877")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$(')');
    var $receiver_0 = 'digest("myDigestAuth")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'userNameRealmPasswordDigestProvider = ';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('userName, realm ->');
        $receiver.line_61zpoe$('usersInMyRealmToHA1[userName]');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function AuthDigestFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'authenticate("myDigestAuth")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'get("/protected/route/digest")';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('val principal = call.principal<UserIdPrincipal>()!!');
        $receiver.line_61zpoe$('call.respondText("Hello ${principal.name}")');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  AuthDigestFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.util.*');
    addAuthProvider($receiver, AuthDigestFeature$renderFeature$lambda);
    addRoute($receiver, AuthDigestFeature$renderFeature$lambda_0);
  };
  AuthDigestFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthDigestFeature',
    interfaces: [ServerFeature]
  };
  var AuthDigestFeature_instance = null;
  function AuthDigestFeature_getInstance() {
    if (AuthDigestFeature_instance === null) {
      new AuthDigestFeature();
    }
    return AuthDigestFeature_instance;
  }
  function AuthFeature() {
    AuthFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.group_kwci2j$_0 = 'Authentication';
    this.repos_pwpjax$_0 = Repos_getInstance().ktor;
    this.artifacts_e1kzvr$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_8i5ba9$_0 = 'auth';
    this.title_qx2fuq$_0 = 'Authentication';
    this.description_l2ahya$_0 = 'Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2';
    this.documentation_qqc0ww$_0 = 'https://ktor.io/features/authentication.html';
    this.BLOCK = this.newSlot_pdl1vj$('BLOCK');
  }
  Object.defineProperty(AuthFeature.prototype, 'group', {
    get: function () {
      return this.group_kwci2j$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'repos', {
    get: function () {
      return this.repos_pwpjax$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_e1kzvr$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'id', {
    get: function () {
      return this.id_8i5ba9$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'title', {
    get: function () {
      return this.title_qx2fuq$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'description', {
    get: function () {
      return this.description_l2ahya$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_qqc0ww$_0;
    }
  });
  function AuthFeature$renderFeature$lambda(this$AuthFeature, this$renderFeature) {
    return function ($receiver) {
      var $receiver_0 = 'install(Authentication)';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$AuthFeature_0 = this$AuthFeature;
        this$renderFeature.block_1s7wi0$($receiver, this$AuthFeature_0.BLOCK);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  AuthFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.auth.*');
    addFeatureInstall($receiver, AuthFeature$renderFeature$lambda(this, $receiver));
  };
  AuthFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthFeature',
    interfaces: [ServerFeature]
  };
  var AuthFeature_instance = null;
  function AuthFeature_getInstance() {
    if (AuthFeature_instance === null) {
      new AuthFeature();
    }
    return AuthFeature_instance;
  }
  function addAuthProvider$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function addAuthProvider($receiver, callback) {
    $receiver.appendSeparated_qu2wte$(AuthFeature_getInstance().BLOCK, void 0, addAuthProvider$lambda(callback));
  }
  function AuthJwtFeature() {
    AuthJwtFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.group_9f3pny$_0 = 'Authentication';
    this.repos_4eqofk$_0 = Repos_getInstance().ktor;
    this.artifacts_3aqenk$_0 = listOf_0('io.ktor:ktor-auth-jwt:$ktor_version');
    this.id_8v1dt4$_0 = 'auth-jwt';
    this.title_3edrvr$_0 = 'Authentication JWT';
    this.description_nhrp6d$_0 = 'Handle JWT authentication';
    this.documentation_em38mv$_0 = 'https://ktor.io/features/authentication/jwt.html';
  }
  Object.defineProperty(AuthJwtFeature.prototype, 'group', {
    get: function () {
      return this.group_9f3pny$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'repos', {
    get: function () {
      return this.repos_4eqofk$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_3aqenk$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'id', {
    get: function () {
      return this.id_8v1dt4$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'title', {
    get: function () {
      return this.title_3edrvr$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'description', {
    get: function () {
      return this.description_nhrp6d$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_em38mv$_0;
    }
  });
  AuthJwtFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthJwtFeature',
    interfaces: [ServerFeature]
  };
  var AuthJwtFeature_instance = null;
  function AuthJwtFeature_getInstance() {
    if (AuthJwtFeature_instance === null) {
      new AuthJwtFeature();
    }
    return AuthJwtFeature_instance;
  }
  function AuthLdapFeature() {
    AuthLdapFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.group_y264fy$_0 = 'Authentication';
    this.repos_t1t37k$_0 = Repos_getInstance().ktor;
    this.artifacts_35gluo$_0 = listOf_0('io.ktor:ktor-auth-ldap:$ktor_version');
    this.id_wrrgjc$_0 = 'auth-ldap';
    this.title_s1g6nr$_0 = 'Authentication LDAP';
    this.description_4vbylh$_0 = 'Handle LDAP authentication';
    this.documentation_hgcisn$_0 = 'https://ktor.io/features/authentication/ldap.html';
  }
  Object.defineProperty(AuthLdapFeature.prototype, 'group', {
    get: function () {
      return this.group_y264fy$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'repos', {
    get: function () {
      return this.repos_t1t37k$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_35gluo$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'id', {
    get: function () {
      return this.id_wrrgjc$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'title', {
    get: function () {
      return this.title_s1g6nr$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'description', {
    get: function () {
      return this.description_4vbylh$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_hgcisn$_0;
    }
  });
  AuthLdapFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthLdapFeature',
    interfaces: [ServerFeature]
  };
  var AuthLdapFeature_instance = null;
  function AuthLdapFeature_getInstance() {
    if (AuthLdapFeature_instance === null) {
      new AuthLdapFeature();
    }
    return AuthLdapFeature_instance;
  }
  function AuthOauthFeature() {
    AuthOauthFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.group_5ytf6q$_0 = 'Authentication';
    this.repos_az6gf4$_0 = Repos_getInstance().ktor;
    this.artifacts_mbz4ow$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_r4wajc$_0 = 'auth-oauth';
    this.title_bzjcyx$_0 = 'Authentication OAuth';
    this.description_v0yqkb$_0 = 'Handle OAuth authentication';
    this.documentation_tpmiex$_0 = 'https://ktor.io/features/authentication/oauth.html';
  }
  Object.defineProperty(AuthOauthFeature.prototype, 'group', {
    get: function () {
      return this.group_5ytf6q$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'repos', {
    get: function () {
      return this.repos_az6gf4$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_mbz4ow$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'id', {
    get: function () {
      return this.id_r4wajc$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'title', {
    get: function () {
      return this.title_bzjcyx$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'description', {
    get: function () {
      return this.description_v0yqkb$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_tpmiex$_0;
    }
  });
  AuthOauthFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthOauthFeature',
    interfaces: [ServerFeature]
  };
  var AuthOauthFeature_instance = null;
  function AuthOauthFeature_getInstance() {
    if (AuthOauthFeature_instance === null) {
      new AuthOauthFeature();
    }
    return AuthOauthFeature_instance;
  }
  function AutoHeadResponseFeature() {
    AutoHeadResponseFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_kzw2lb$_0 = Repos_getInstance().ktor;
    this.artifacts_g2pl8f$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_uzkfxz$_0 = 'caching-headers';
    this.title_jzj61i$_0 = 'CachingHeaders';
    this.description_fp9286$_0 = 'Send the headers Cache-Control and Expires used by clients and proxies to cache requests';
    this.documentation_felmrc$_0 = 'https://ktor.io/features/caching-headers.html';
  }
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'repos', {
    get: function () {
      return this.repos_kzw2lb$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_g2pl8f$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'id', {
    get: function () {
      return this.id_uzkfxz$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'title', {
    get: function () {
      return this.title_jzj61i$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'description', {
    get: function () {
      return this.description_fp9286$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_felmrc$_0;
    }
  });
  function AutoHeadResponseFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(CachingHeaders)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('options { outgoingContent ->');
      $receiver._indent();
      try {
        var $receiver_1 = 'when (outgoingContent.contentType?.withoutParameters())';
        var rafter_0 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('ContentType.Text.CSS -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60))');
          $receiver.line_61zpoe$('else -> null');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  AutoHeadResponseFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, AutoHeadResponseFeature$renderFeature$lambda);
  };
  AutoHeadResponseFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AutoHeadResponseFeature',
    interfaces: [ServerFeature]
  };
  var AutoHeadResponseFeature_instance = null;
  function AutoHeadResponseFeature_getInstance() {
    if (AutoHeadResponseFeature_instance === null) {
      new AutoHeadResponseFeature();
    }
    return AutoHeadResponseFeature_instance;
  }
  function CORSFeature() {
    CORSFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_sljj6q$_0 = Repos_getInstance().ktor;
    this.artifacts_orj4zi$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_hzkv3a$_0 = 'cors';
    this.title_rl6mmx$_0 = 'CORS';
    this.description_h31csd$_0 = 'Enable Cross-Origin Resource Sharing (CORS)';
    this.documentation_f5bx6t$_0 = 'https://ktor.io/features/cors.html';
  }
  Object.defineProperty(CORSFeature.prototype, 'repos', {
    get: function () {
      return this.repos_sljj6q$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_orj4zi$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'id', {
    get: function () {
      return this.id_hzkv3a$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'title', {
    get: function () {
      return this.title_rl6mmx$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'description', {
    get: function () {
      return this.description_h31csd$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_f5bx6t$_0;
    }
  });
  function CORSFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(CORS)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('method(HttpMethod.Options)');
      $receiver.line_61zpoe$('method(HttpMethod.Put)');
      $receiver.line_61zpoe$('method(HttpMethod.Delete)');
      $receiver.line_61zpoe$('method(HttpMethod.Patch)');
      $receiver.line_61zpoe$('header(HttpHeaders.Authorization)');
      $receiver.line_61zpoe$('header("MyCustomHeader")');
      $receiver.line_61zpoe$('allowCredentials = true');
      $receiver.line_61zpoe$("anyHost() // @TODO: Don't do this in production if possible. Try to limit it.");
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  CORSFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, CORSFeature$renderFeature$lambda);
  };
  CORSFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CORSFeature',
    interfaces: [ServerFeature]
  };
  var CORSFeature_instance = null;
  function CORSFeature_getInstance() {
    if (CORSFeature_instance === null) {
      new CORSFeature();
    }
    return CORSFeature_instance;
  }
  function CachingHeadersFeature() {
    CachingHeadersFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_go8v1k$_0 = Repos_getInstance().ktor;
    this.artifacts_4n8blk$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_894vts$_0 = 'auto-head-response';
    this.title_fnvyhr$_0 = 'AutoHeadResponse';
    this.description_vh4wqr$_0 = 'Provide responses to HEAD requests for existing routes that have the GET verb defined';
    this.documentation_z7p4ld$_0 = 'https://ktor.io/features/autoheadresponse.html';
  }
  Object.defineProperty(CachingHeadersFeature.prototype, 'repos', {
    get: function () {
      return this.repos_go8v1k$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_4n8blk$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'id', {
    get: function () {
      return this.id_894vts$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'title', {
    get: function () {
      return this.title_fnvyhr$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'description', {
    get: function () {
      return this.description_vh4wqr$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_z7p4ld$_0;
    }
  });
  function CachingHeadersFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('install(AutoHeadResponse)');
    return Unit;
  }
  CachingHeadersFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, CachingHeadersFeature$renderFeature$lambda);
  };
  CachingHeadersFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CachingHeadersFeature',
    interfaces: [ServerFeature]
  };
  var CachingHeadersFeature_instance = null;
  function CachingHeadersFeature_getInstance() {
    if (CachingHeadersFeature_instance === null) {
      new CachingHeadersFeature();
    }
    return CachingHeadersFeature_instance;
  }
  function CallLoggingFeature() {
    CallLoggingFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_194y32$_0 = Repos_getInstance().ktor;
    this.artifacts_7z519q$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_v4r6t6$_0 = 'call-logging';
    this.title_8s1j9$_0 = 'CallLogging';
    this.description_edg1wp$_0 = 'Logs client requests';
    this.documentation_7u6okn$_0 = 'https://ktor.io/features/call-logging.html';
  }
  Object.defineProperty(CallLoggingFeature.prototype, 'repos', {
    get: function () {
      return this.repos_194y32$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_7z519q$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'id', {
    get: function () {
      return this.id_v4r6t6$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'title', {
    get: function () {
      return this.title_8s1j9$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'description', {
    get: function () {
      return this.description_edg1wp$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_7u6okn$_0;
    }
  });
  function CallLoggingFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(CallLogging)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('level = Level.INFO');
      $receiver.line_61zpoe$('filter { call -> call.request.path().startsWith("/") }');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  CallLoggingFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addImport($receiver, 'org.slf4j.event.*');
    addFeatureInstall($receiver, CallLoggingFeature$renderFeature$lambda);
  };
  CallLoggingFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CallLoggingFeature',
    interfaces: [ServerFeature]
  };
  var CallLoggingFeature_instance = null;
  function CallLoggingFeature_getInstance() {
    if (CallLoggingFeature_instance === null) {
      new CallLoggingFeature();
    }
    return CallLoggingFeature_instance;
  }
  function CompressionFeature() {
    CompressionFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_c3s0zb$_0 = Repos_getInstance().ktor;
    this.artifacts_ser0pj$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_n0qw69$_0 = 'compression';
    this.title_d44xj4$_0 = 'Compression';
    this.description_57ts7w$_0 = 'Compress outgoing content using gzip, deflate or custom encoder and thus reduce the size of the response';
    this.documentation_45fzoi$_0 = 'https://ktor.io/features/compression.html';
  }
  Object.defineProperty(CompressionFeature.prototype, 'repos', {
    get: function () {
      return this.repos_c3s0zb$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_ser0pj$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'id', {
    get: function () {
      return this.id_n0qw69$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'title', {
    get: function () {
      return this.title_d44xj4$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'description', {
    get: function () {
      return this.description_57ts7w$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_45fzoi$_0;
    }
  });
  function CompressionFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(Compression)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$('gzip'.length === 0 ? '{' + rafter_0 : 'gzip' + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('priority = 1.0');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      var rafter_1 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$('deflate'.length === 0 ? '{' + rafter_1 : 'deflate' + ' {' + rafter_1);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('priority = 10.0');
        $receiver.line_61zpoe$('minimumSize(1024) // condition');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  CompressionFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, CompressionFeature$renderFeature$lambda);
  };
  CompressionFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CompressionFeature',
    interfaces: [ServerFeature]
  };
  var CompressionFeature_instance = null;
  function CompressionFeature_getInstance() {
    if (CompressionFeature_instance === null) {
      new CompressionFeature();
    }
    return CompressionFeature_instance;
  }
  function ConditionalHeadersFeature() {
    ConditionalHeadersFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_4o13ld$_0 = Repos_getInstance().ktor;
    this.artifacts_abh87l$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_o944rr$_0 = 'conditional-headers';
    this.title_5oe056$_0 = 'ConditionalHeaders';
    this.description_mg1h5i$_0 = 'Avoids sending content if the client already has the same content using ETag or LastModified';
    this.documentation_1wntaw$_0 = 'https://ktor.io/features/conditional-headers.html';
  }
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'repos', {
    get: function () {
      return this.repos_4o13ld$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_abh87l$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'id', {
    get: function () {
      return this.id_o944rr$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'title', {
    get: function () {
      return this.title_5oe056$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'description', {
    get: function () {
      return this.description_mg1h5i$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_1wntaw$_0;
    }
  });
  function ConditionalHeadersFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('install(ConditionalHeaders)');
    return Unit;
  }
  ConditionalHeadersFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, ConditionalHeadersFeature$renderFeature$lambda);
  };
  ConditionalHeadersFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConditionalHeadersFeature',
    interfaces: [ServerFeature]
  };
  var ConditionalHeadersFeature_instance = null;
  function ConditionalHeadersFeature_getInstance() {
    if (ConditionalHeadersFeature_instance === null) {
      new ConditionalHeadersFeature();
    }
    return ConditionalHeadersFeature_instance;
  }
  function ContentNegotiationFeature() {
    ContentNegotiationFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.group_77yfet$_0 = 'Content Negotiation';
    this.repos_27le6f$_0 = Repos_getInstance().ktor;
    this.artifacts_xpb4br$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_1tud0h$_0 = 'content-negotiation';
    this.title_178hmm$_0 = 'ContentNegotiation';
    this.description_j6ojmq$_0 = 'Provides automatic content conversion according to Content-Type and Accept headers.';
    this.documentation_f9k7z4$_0 = 'https://ktor.io/features/content-negotiation.html';
    this.BLOCK = this.newSlot_pdl1vj$('BLOCK');
  }
  Object.defineProperty(ContentNegotiationFeature.prototype, 'group', {
    get: function () {
      return this.group_77yfet$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'repos', {
    get: function () {
      return this.repos_27le6f$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_xpb4br$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'id', {
    get: function () {
      return this.id_1tud0h$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'title', {
    get: function () {
      return this.title_178hmm$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'description', {
    get: function () {
      return this.description_j6ojmq$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_f9k7z4$_0;
    }
  });
  function ContentNegotiationFeature$renderFeature$lambda(this$ContentNegotiationFeature, this$renderFeature) {
    return function ($receiver) {
      var $receiver_0 = 'install(ContentNegotiation)';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$ContentNegotiationFeature_0 = this$ContentNegotiationFeature;
        this$renderFeature.block_1s7wi0$($receiver, this$ContentNegotiationFeature_0.BLOCK);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  ContentNegotiationFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addFeatureInstall($receiver, ContentNegotiationFeature$renderFeature$lambda(this, $receiver));
  };
  ContentNegotiationFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ContentNegotiationFeature',
    interfaces: [ServerFeature]
  };
  var ContentNegotiationFeature_instance = null;
  function ContentNegotiationFeature_getInstance() {
    if (ContentNegotiationFeature_instance === null) {
      new ContentNegotiationFeature();
    }
    return ContentNegotiationFeature_instance;
  }
  function CssDslFeature() {
    CssDslFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance(), HtmlDslFeature_getInstance()]);
    this.group_veryml$_0 = 'Templating';
    this.repos_ylz245$_0 = plus(Repos_getInstance().jcenter, Repos_getInstance().kotlin_js_wrappers);
    this.artifacts_xzvytx$_0 = listOf_0('org.jetbrains:kotlin-css-jvm:1.0.0-pre.31-kotlin-1.2.41');
    this.id_du5bqr$_0 = 'css-dsl';
    this.title_xlm5kc$_0 = 'CSS DSL';
    this.description_hgqmog$_0 = 'Generate CSS using Kotlin code';
    this.documentation_4j75ma$_0 = 'https://github.com/JetBrains/kotlin-wrappers/tree/master/kotlin-css';
  }
  Object.defineProperty(CssDslFeature.prototype, 'group', {
    get: function () {
      return this.group_veryml$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'repos', {
    get: function () {
      return this.repos_ylz245$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_xzvytx$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'id', {
    get: function () {
      return this.id_du5bqr$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'title', {
    get: function () {
      return this.title_xlm5kc$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'description', {
    get: function () {
      return this.description_hgqmog$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_4j75ma$_0;
    }
  });
  function CssDslFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'get("/styles.css")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'call.respondCss';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        var rafter_1 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$('body'.length === 0 ? '{' + rafter_1 : 'body' + ' {' + rafter_1);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('backgroundColor = Color.red');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        var rafter_2 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$('p'.length === 0 ? '{' + rafter_2 : 'p' + ' {' + rafter_2);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('fontSize = 2.em');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        var $receiver_2 = 'rule("p.myclass")';
        var rafter_3 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_3 : $receiver_2 + ' {' + rafter_3);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('color = Color.blue');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function CssDslFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'fun FlowOrMetaDataContent.styleCss(builder: CSSBuilder.() -> Unit)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'style(type = ContentType.Text.CSS.toString())';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('+CSSBuilder().apply(builder).toString()');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function CssDslFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'fun CommonAttributeGroupFacade.style(builder: CSSBuilder.() -> Unit)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('this.style = CSSBuilder().apply(builder).toString().trim()');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function CssDslFeature$renderFeature$lambda_2($receiver) {
    var $receiver_0 = 'suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  CssDslFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'kotlinx.html.*');
    addImport($receiver, 'kotlinx.css.*');
    addImport($receiver, 'io.ktor.http.*');
    addRoute($receiver, CssDslFeature$renderFeature$lambda);
    addExtensionMethods($receiver, CssDslFeature$renderFeature$lambda_0);
    addExtensionMethods($receiver, CssDslFeature$renderFeature$lambda_1);
    addExtensionMethods($receiver, CssDslFeature$renderFeature$lambda_2);
  };
  CssDslFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CssDslFeature',
    interfaces: [ServerFeature]
  };
  var CssDslFeature_instance = null;
  function CssDslFeature_getInstance() {
    if (CssDslFeature_instance === null) {
      new CssDslFeature();
    }
    return CssDslFeature_instance;
  }
  function DataConversionFeature() {
    DataConversionFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_5edxv5$_0 = Repos_getInstance().ktor;
    this.artifacts_4tzc41$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_m3ch09$_0 = 'data-conversion';
    this.title_6equey$_0 = 'DataConversion';
    this.description_6nroeu$_0 = 'Allows to serialize and deserialize a list of values (used by the Locations feature)';
    this.documentation_wt7c60$_0 = 'https://ktor.io/features/caching-headers.html';
  }
  Object.defineProperty(DataConversionFeature.prototype, 'repos', {
    get: function () {
      return this.repos_5edxv5$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_4tzc41$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'id', {
    get: function () {
      return this.id_m3ch09$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'title', {
    get: function () {
      return this.title_6equey$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'description', {
    get: function () {
      return this.description_6nroeu$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_wt7c60$_0;
    }
  });
  function DataConversionFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('install(DataConversion)');
    return Unit;
  }
  DataConversionFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, DataConversionFeature$renderFeature$lambda);
  };
  DataConversionFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DataConversionFeature',
    interfaces: [ServerFeature]
  };
  var DataConversionFeature_instance = null;
  function DataConversionFeature_getInstance() {
    if (DataConversionFeature_instance === null) {
      new DataConversionFeature();
    }
    return DataConversionFeature_instance;
  }
  function DefaultHeadersFeature() {
    DefaultHeadersFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_56pzti$_0 = Repos_getInstance().ktor;
    this.artifacts_ip5x8q$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_zj8wu$_0 = 'default-headers';
    this.title_672wdb$_0 = 'DefaultHeaders';
    this.description_jltksl$_0 = 'This feature adds a default set of headers to HTTP responses';
    this.documentation_6rs2f1$_0 = 'https://ktor.io/features/default-headers.html';
  }
  Object.defineProperty(DefaultHeadersFeature.prototype, 'repos', {
    get: function () {
      return this.repos_56pzti$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_ip5x8q$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'id', {
    get: function () {
      return this.id_zj8wu$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'title', {
    get: function () {
      return this.title_672wdb$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'description', {
    get: function () {
      return this.description_jltksl$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_6rs2f1$_0;
    }
  });
  function DefaultHeadersFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(DefaultHeaders)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('header("X-Engine", "Ktor") // will send this header with each response');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  DefaultHeadersFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, DefaultHeadersFeature$renderFeature$lambda);
  };
  DefaultHeadersFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultHeadersFeature',
    interfaces: [ServerFeature]
  };
  var DefaultHeadersFeature_instance = null;
  function DefaultHeadersFeature_getInstance() {
    if (DefaultHeadersFeature_instance === null) {
      new DefaultHeadersFeature();
    }
    return DefaultHeadersFeature_instance;
  }
  function ForwardedHeaderSupportFeature() {
    ForwardedHeaderSupportFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_b9pbw1$_0 = Repos_getInstance().ktor;
    this.artifacts_rf2yhd$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_rltf7b$_0 = 'forwarded-header-support';
    this.title_a9cfc8$_0 = 'ForwardedHeaderSupport';
    this.description_htd7bg$_0 = 'This feature allows you to handle reverse proxy headers to get information about the original request when it\u2019s behind a proxy.';
    this.documentation_mm6hiu$_0 = 'https://ktor.io/features/forward-headers.html';
  }
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'repos', {
    get: function () {
      return this.repos_b9pbw1$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_rf2yhd$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'id', {
    get: function () {
      return this.id_rltf7b$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'title', {
    get: function () {
      return this.title_a9cfc8$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'description', {
    get: function () {
      return this.description_htd7bg$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_mm6hiu$_0;
    }
  });
  function ForwardedHeaderSupportFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('install(ForwardedHeaderSupport) // WARNING: for security, do not include this if not behind a reverse proxy');
    $receiver.line_61zpoe$('install(XForwardedHeadersSupport) // WARNING: for security, do not include this if not behind a reverse proxy');
    return Unit;
  }
  ForwardedHeaderSupportFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, ForwardedHeaderSupportFeature$renderFeature$lambda);
  };
  ForwardedHeaderSupportFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ForwardedHeaderSupportFeature',
    interfaces: [ServerFeature]
  };
  var ForwardedHeaderSupportFeature_instance = null;
  function ForwardedHeaderSupportFeature_getInstance() {
    if (ForwardedHeaderSupportFeature_instance === null) {
      new ForwardedHeaderSupportFeature();
    }
    return ForwardedHeaderSupportFeature_instance;
  }
  function FreemarkerFeature() {
    FreemarkerFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.group_yh747b$_0 = 'Templating';
    this.repos_tgu2yx$_0 = Repos_getInstance().ktor;
    this.artifacts_qojtbd$_0 = listOf_0('io.ktor:ktor-freemarker:$ktor_version');
    this.id_781f4x$_0 = 'freemarker';
    this.title_sgh6f4$_0 = 'Freemarker';
    this.description_jvgtwk$_0 = "Serve HTML content using Apache's FreeMarker template engine";
    this.documentation_xei3a6$_0 = 'https://ktor.io/features/templates/freemarker.html';
  }
  Object.defineProperty(FreemarkerFeature.prototype, 'group', {
    get: function () {
      return this.group_yh747b$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'repos', {
    get: function () {
      return this.repos_tgu2yx$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_qojtbd$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'id', {
    get: function () {
      return this.id_781f4x$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'title', {
    get: function () {
      return this.title_sgh6f4$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'description', {
    get: function () {
      return this.description_jvgtwk$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_xei3a6$_0;
    }
  });
  function FreemarkerFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('data class IndexData(val items: List<Int>)');
    return Unit;
  }
  function FreemarkerFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(FreeMarker)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function FreemarkerFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'get("/html-freemarker")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respond(FreeMarkerContent("index.ftl", mapOf("data" to IndexData(listOf(1, 2, 3))), ""))');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function FreemarkerFeature$renderFeature$lambda_2(closure$info_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FreemarkerFeature$renderFeature$lambda(closure$info_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FreemarkerFeature$renderFeature$lambda(closure$info_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$FreemarkerFeature$renderFeature$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FreemarkerFeature$renderFeature$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FreemarkerFeature$renderFeature$lambda.prototype.constructor = Coroutine$FreemarkerFeature$renderFeature$lambda;
  Coroutine$FreemarkerFeature$renderFeature$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('<#-- @ftlvariable name=' + '"' + 'data' + '"' + ' type=' + '"' + this.local$closure$info.artifactGroup + '.IndexData' + '"' + ' -->');
            this.local$$receiver.line_61zpoe$('<html>');
            this.local$$receiver._indent();
            try {
              this.local$$receiver.line_61zpoe$('<body>');
              this.local$$receiver._indent();
              try {
                this.local$$receiver.line_61zpoe$('<ul>');
                this.local$$receiver.line_61zpoe$('<#list data.items as item>');
                this.local$$receiver._indent();
                try {
                  this.local$$receiver.line_61zpoe$('<li>${item}<\/li>');
                }
                finally {
                  this.local$$receiver._unindent();
                }
                this.local$$receiver.line_61zpoe$('<\/#list>');
                this.local$$receiver.line_61zpoe$('<\/ul>');
              }
              finally {
                this.local$$receiver._unindent();
              }
              this.local$$receiver.line_61zpoe$('<\/body>');
            }
            finally {
              this.local$$receiver._unindent();
            }

            return this.local$$receiver.line_61zpoe$('<\/html>');
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FreemarkerFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'freemarker.cache.*');
    addImport($receiver, 'io.ktor.freemarker.*');
    addApplicationClasses($receiver, FreemarkerFeature$renderFeature$lambda);
    addFeatureInstall($receiver, FreemarkerFeature$renderFeature$lambda_0);
    addRoute($receiver, FreemarkerFeature$renderFeature$lambda_1);
    $receiver.fileText_7k8vha$('resources/templates/index.ftl', void 0, void 0, FreemarkerFeature$renderFeature$lambda_2(info));
  };
  FreemarkerFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FreemarkerFeature',
    interfaces: [ServerFeature]
  };
  var FreemarkerFeature_instance = null;
  function FreemarkerFeature_getInstance() {
    if (FreemarkerFeature_instance === null) {
      new FreemarkerFeature();
    }
    return FreemarkerFeature_instance;
  }
  function HSTSFeature() {
    HSTSFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_wmedff$_0 = Repos_getInstance().ktor;
    this.artifacts_18qyhx$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_7i9dib$_0 = 'hsts';
    this.title_xmr9z8$_0 = 'HSTS';
    this.description_7ox1eo$_0 = 'Enable HTTP Strict Transport Security (HSTS)';
    this.documentation_k58qw2$_0 = 'https://ktor.io/features/hsts.html';
  }
  Object.defineProperty(HSTSFeature.prototype, 'repos', {
    get: function () {
      return this.repos_wmedff$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_18qyhx$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'id', {
    get: function () {
      return this.id_7i9dib$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'title', {
    get: function () {
      return this.title_xmr9z8$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'description', {
    get: function () {
      return this.description_7ox1eo$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_k58qw2$_0;
    }
  });
  function HSTSFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(HSTS)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('includeSubDomains = true');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  HSTSFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, HSTSFeature$renderFeature$lambda);
  };
  HSTSFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HSTSFeature',
    interfaces: [ServerFeature]
  };
  var HSTSFeature_instance = null;
  function HSTSFeature_getInstance() {
    if (HSTSFeature_instance === null) {
      new HSTSFeature();
    }
    return HSTSFeature_instance;
  }
  function HtmlDslFeature() {
    HtmlDslFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.group_x9lhi3$_0 = 'Templating';
    this.repos_s98g9p$_0 = Repos_getInstance().jcenter;
    this.artifacts_szsc8z$_0 = listOf_0('io.ktor:ktor-html-builder:$ktor_version');
    this.id_bcmddh$_0 = 'html-dsl';
    this.title_r8vjpw$_0 = 'HTML DSL';
    this.description_1gtliw$_0 = 'Generate HTML using Kotlin code like a pure-core template engine';
    this.documentation_zdgxpy$_0 = 'https://ktor.io/features/templates/html-dsl.html';
  }
  Object.defineProperty(HtmlDslFeature.prototype, 'group', {
    get: function () {
      return this.group_x9lhi3$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'repos', {
    get: function () {
      return this.repos_s98g9p$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_szsc8z$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'id', {
    get: function () {
      return this.id_bcmddh$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'title', {
    get: function () {
      return this.title_r8vjpw$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'description', {
    get: function () {
      return this.description_1gtliw$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_zdgxpy$_0;
    }
  });
  function HtmlDslFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'get("/html-dsl")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'call.respondHtml';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        var rafter_1 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$('body'.length === 0 ? '{' + rafter_1 : 'body' + ' {' + rafter_1);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('h1 { +"HTML" }');
          var rafter_2 = ''.length === 0 ? '' : ' ' + '';
          $receiver.line_61zpoe$('ul'.length === 0 ? '{' + rafter_2 : 'ul' + ' {' + rafter_2);
          $receiver._indent();
          try {
            var $receiver_2 = 'for (n in 1..10)';
            var rafter_3 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_3 : $receiver_2 + ' {' + rafter_3);
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('li { +"$n" }');
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}' + '');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  HtmlDslFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.html.*');
    addImport($receiver, 'kotlinx.html.*');
    addRoute($receiver, HtmlDslFeature$renderFeature$lambda);
  };
  HtmlDslFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlDslFeature',
    interfaces: [ServerFeature]
  };
  var HtmlDslFeature_instance = null;
  function HtmlDslFeature_getInstance() {
    if (HtmlDslFeature_instance === null) {
      new HtmlDslFeature();
    }
    return HtmlDslFeature_instance;
  }
  function HttpsRedirectFeature() {
    HttpsRedirectFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_o6eu6g$_0 = Repos_getInstance().ktor;
    this.artifacts_xp2d0o$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_fmyhc0$_0 = 'https-redirect';
    this.title_n61xmn$_0 = 'HttpsRedirect';
    this.description_covkrn$_0 = 'All the affected HTTP calls perform a redirect to its HTTPS counterpart before processing the call';
    this.documentation_op6e1t$_0 = 'https://ktor.io/features/https-redirect.html';
  }
  Object.defineProperty(HttpsRedirectFeature.prototype, 'repos', {
    get: function () {
      return this.repos_o6eu6g$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_xp2d0o$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'id', {
    get: function () {
      return this.id_fmyhc0$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'title', {
    get: function () {
      return this.title_n61xmn$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'description', {
    get: function () {
      return this.description_covkrn$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_op6e1t$_0;
    }
  });
  function HttpsRedirectFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(HttpsRedirect)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('// The port to redirect to. By default 443, the default HTTPS port.');
      $receiver.line_61zpoe$('sslPort = 443');
      $receiver.line_61zpoe$('// 301 Moved Permanently, or 302 Found redirect.');
      $receiver.line_61zpoe$('permanentRedirect = true');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  HttpsRedirectFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, HttpsRedirectFeature$renderFeature$lambda);
  };
  HttpsRedirectFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HttpsRedirectFeature',
    interfaces: [ServerFeature]
  };
  var HttpsRedirectFeature_instance = null;
  function HttpsRedirectFeature_getInstance() {
    if (HttpsRedirectFeature_instance === null) {
      new HttpsRedirectFeature();
    }
    return HttpsRedirectFeature_instance;
  }
  function JsonGsonFeature() {
    JsonGsonFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), ContentNegotiationFeature_getInstance(), RoutingFeature_getInstance()]);
    this.group_28eo4a$_0 = 'Content Negotiation';
    this.repos_2ryd44$_0 = Repos_getInstance().ktor;
    this.artifacts_1ovdbw$_0 = listOf_0('io.ktor:ktor-gson:$ktor_version');
    this.id_ngj250$_0 = 'ktor-gson';
    this.title_3sb9nx$_0 = 'GSON';
    this.description_bw0nnb$_0 = 'Handles JSON serialization using GSON library';
    this.documentation_zd36vf$_0 = 'https://ktor.io/features/content-negotiation/gson.html';
  }
  Object.defineProperty(JsonGsonFeature.prototype, 'group', {
    get: function () {
      return this.group_28eo4a$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'repos', {
    get: function () {
      return this.repos_2ryd44$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_1ovdbw$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'id', {
    get: function () {
      return this.id_ngj250$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'title', {
    get: function () {
      return this.title_3sb9nx$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'description', {
    get: function () {
      return this.description_bw0nnb$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_zd36vf$_0;
    }
  });
  function JsonGsonFeature$renderFeature$lambda($receiver) {
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$('gson'.length === 0 ? '{' + rafter : 'gson' + ' {' + rafter);
    $receiver._indent();
    $receiver._unindent();
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function JsonGsonFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'get("/json/gson")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respond(mapOf("hello" to "world"))');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  JsonGsonFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.gson.*');
    addImport($receiver, 'io.ktor.features.*');
    $receiver.appendSeparated_qu2wte$(ContentNegotiationFeature_getInstance().BLOCK, void 0, JsonGsonFeature$renderFeature$lambda);
    addRoute($receiver, JsonGsonFeature$renderFeature$lambda_0);
  };
  JsonGsonFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonGsonFeature',
    interfaces: [ServerFeature]
  };
  var JsonGsonFeature_instance = null;
  function JsonGsonFeature_getInstance() {
    if (JsonGsonFeature_instance === null) {
      new JsonGsonFeature();
    }
    return JsonGsonFeature_instance;
  }
  function JsonJacksonFeature() {
    JsonJacksonFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), ContentNegotiationFeature_getInstance(), RoutingFeature_getInstance()]);
    this.group_hyp10i$_0 = 'Content Negotiation';
    this.repos_cybzs4$_0 = Repos_getInstance().ktor;
    this.artifacts_fad5hg$_0 = listOf_0('io.ktor:ktor-jackson:$ktor_version');
    this.id_ogwk7w$_0 = 'ktor-jackson';
    this.title_bxz38b$_0 = 'Jackson';
    this.description_8yz4hr$_0 = 'Handles JSON serialization using Jackson library';
    this.documentation_1tiou5$_0 = 'https://ktor.io/features/content-negotiation/jackson.html';
  }
  Object.defineProperty(JsonJacksonFeature.prototype, 'group', {
    get: function () {
      return this.group_hyp10i$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'repos', {
    get: function () {
      return this.repos_cybzs4$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_fad5hg$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'id', {
    get: function () {
      return this.id_ogwk7w$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'title', {
    get: function () {
      return this.title_bxz38b$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'description', {
    get: function () {
      return this.description_8yz4hr$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_1tiou5$_0;
    }
  });
  function JsonJacksonFeature$renderFeature$lambda($receiver) {
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$('jackson'.length === 0 ? '{' + rafter : 'jackson' + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('enable(SerializationFeature.INDENT_OUTPUT)');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function JsonJacksonFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'get("/json/jackson")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respond(mapOf("hello" to "world"))');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  JsonJacksonFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'com.fasterxml.jackson.databind.*');
    addImport($receiver, 'io.ktor.jackson.*');
    addImport($receiver, 'io.ktor.features.*');
    $receiver.appendSeparated_qu2wte$(ContentNegotiationFeature_getInstance().BLOCK, void 0, JsonJacksonFeature$renderFeature$lambda);
    addRoute($receiver, JsonJacksonFeature$renderFeature$lambda_0);
  };
  JsonJacksonFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonJacksonFeature',
    interfaces: [ServerFeature]
  };
  var JsonJacksonFeature_instance = null;
  function JsonJacksonFeature_getInstance() {
    if (JsonJacksonFeature_instance === null) {
      new JsonJacksonFeature();
    }
    return JsonJacksonFeature_instance;
  }
  function LocationsFeature() {
    LocationsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_ugvbpt$_0 = Repos_getInstance().ktor;
    this.artifacts_xu1ky7$_0 = listOf_0('io.ktor:ktor-locations:$ktor_version');
    this.id_7yznmx$_0 = 'ktor-locations';
    this.title_tgif60$_0 = 'Locations';
    this.description_x7k3dg$_0 = 'Allows to define route locations in a typed way';
    this.documentation_o1t10q$_0 = 'https://ktor.io/features/locations.html';
  }
  Object.defineProperty(LocationsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_ugvbpt$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_xu1ky7$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'id', {
    get: function () {
      return this.id_7yznmx$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'title', {
    get: function () {
      return this.title_tgif60$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'description', {
    get: function () {
      return this.description_x7k3dg$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_o1t10q$_0;
    }
  });
  function LocationsFeature$renderFeature$lambda$lambda($receiver) {
    $receiver.line_61zpoe$('@Location("/location/{name}")');
    $receiver.line_61zpoe$('class MyLocation(val name: String, val arg1: Int = 42, val arg2: String = "default")');
    return Unit;
  }
  function LocationsFeature$renderFeature$lambda$lambda_0($receiver) {
    var $receiver_0 = '@Location("/type/{name}") data class Type(val name: String)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('@Location("/edit") data class Edit(val type: Type)');
      $receiver.line_61zpoe$('@Location("/list/{page}") data class List(val type: Type, val page: Int)');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function LocationsFeature$renderFeature$lambda($receiver) {
    SEPARATOR($receiver, LocationsFeature$renderFeature$lambda$lambda);
    SEPARATOR($receiver, LocationsFeature$renderFeature$lambda$lambda_0);
    return Unit;
  }
  function LocationsFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(Locations)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    $receiver._unindent();
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function LocationsFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'get<MyLocation>';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respondText("Location: name=${it.name}, arg1=${it.arg1}, arg2=${it.arg2}")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    $receiver.line_61zpoe$('// Register nested routes');
    var $receiver_1 = 'get<Type.Edit>';
    var rafter_0 = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respondText("Inside $it")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    var $receiver_2 = 'get<Type.List>';
    var rafter_1 = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respondText("Inside $it")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  LocationsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.locations.*');
    addApplicationClasses($receiver, LocationsFeature$renderFeature$lambda);
    addFeatureInstall($receiver, LocationsFeature$renderFeature$lambda_0);
    addRoute($receiver, LocationsFeature$renderFeature$lambda_1);
  };
  LocationsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocationsFeature',
    interfaces: [ServerFeature]
  };
  var LocationsFeature_instance = null;
  function LocationsFeature_getInstance() {
    if (LocationsFeature_instance === null) {
      new LocationsFeature();
    }
    return LocationsFeature_instance;
  }
  function MetricsFeature() {
    MetricsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_xsu8vg$_0 = Repos_getInstance().ktor;
    this.artifacts_qhtto4$_0 = listOf_0('io.ktor:ktor-metrics:$ktor_version');
    this.id_z55v50$_0 = 'ktor-metrics';
    this.title_wshcbn$_0 = 'Metrics';
    this.description_c6mard$_0 = 'Adds supports for monitoring several metrics';
    this.documentation_dp5sfv$_0 = 'https://ktor.io/features/metrics.html';
  }
  Object.defineProperty(MetricsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_xsu8vg$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_qhtto4$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'id', {
    get: function () {
      return this.id_z55v50$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'title', {
    get: function () {
      return this.title_wshcbn$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'description', {
    get: function () {
      return this.description_c6mard$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_dp5sfv$_0;
    }
  });
  MetricsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MetricsFeature',
    interfaces: [ServerFeature]
  };
  var MetricsFeature_instance = null;
  function MetricsFeature_getInstance() {
    if (MetricsFeature_instance === null) {
      new MetricsFeature();
    }
    return MetricsFeature_instance;
  }
  function PartialContentFeature() {
    PartialContentFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_ybnc3b$_0 = Repos_getInstance().ktor;
    this.artifacts_l00cyf$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_tz5ocv$_0 = 'partial-content';
    this.title_xbafji$_0 = 'PartialContent';
    this.description_t5tcgi$_0 = 'Handles requests with the Range header. ' + 'Generating Accept-Ranges and the Content-Range headers and slicing the served content when required.';
    this.documentation_cyic7k$_0 = 'https://ktor.io/features/partial-content.html';
  }
  Object.defineProperty(PartialContentFeature.prototype, 'repos', {
    get: function () {
      return this.repos_ybnc3b$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_l00cyf$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'id', {
    get: function () {
      return this.id_tz5ocv$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'title', {
    get: function () {
      return this.title_xbafji$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'description', {
    get: function () {
      return this.description_t5tcgi$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_cyic7k$_0;
    }
  });
  function PartialContentFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(PartialContent)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('// Maximum number of ranges that will be accepted from a HTTP request.');
      $receiver.line_61zpoe$('// If the HTTP request specifies more ranges, they will all be merged into a single range.');
      $receiver.line_61zpoe$('maxRangeCount = 10');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  PartialContentFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addFeatureInstall($receiver, PartialContentFeature$renderFeature$lambda);
  };
  PartialContentFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PartialContentFeature',
    interfaces: [ServerFeature]
  };
  var PartialContentFeature_instance = null;
  function PartialContentFeature_getInstance() {
    if (PartialContentFeature_instance === null) {
      new PartialContentFeature();
    }
    return PartialContentFeature_instance;
  }
  function RoutingFeature() {
    RoutingFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_pq7355$_0 = Repos_getInstance().ktor;
    this.artifacts_w3p8dz$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_34kdmn$_0 = 'routing';
    this.title_opu6lc$_0 = 'Routing';
    this.description_2pi0zg$_0 = 'Allows to define structured routes and associated handlers.';
    this.documentation_bg4xu$_0 = 'https://ktor.io/features/routing.html';
    this.BLOCK = this.newSlot_pdl1vj$('BLOCK');
  }
  Object.defineProperty(RoutingFeature.prototype, 'repos', {
    get: function () {
      return this.repos_pq7355$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_w3p8dz$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'id', {
    get: function () {
      return this.id_34kdmn$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'title', {
    get: function () {
      return this.title_opu6lc$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'description', {
    get: function () {
      return this.description_2pi0zg$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_bg4xu$_0;
    }
  });
  function RoutingFeature$renderFeature$lambda(this$RoutingFeature, this$renderFeature) {
    return function ($receiver) {
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$('routing'.length === 0 ? '{' + rafter : 'routing' + ' {' + rafter);
      $receiver._indent();
      try {
        var this$RoutingFeature_0 = this$RoutingFeature;
        var this$renderFeature_0 = this$renderFeature;
        var $receiver_0 = 'get("/")';
        var rafter_0 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter_0 : $receiver_0 + ' {' + rafter_0);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('call.respondText("HELLO WORLD!", contentType = ContentType.Text.Plain)');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        this$renderFeature_0.block_1s7wi0$($receiver, this$RoutingFeature_0.BLOCK);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  RoutingFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.routing.*');
    addImport($receiver, 'io.ktor.http.*');
    $receiver.appendSeparated_qu2wte$(ApplicationKt_getInstance().MODULE_POST, void 0, RoutingFeature$renderFeature$lambda(this, $receiver));
  };
  RoutingFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RoutingFeature',
    interfaces: [ServerFeature]
  };
  var RoutingFeature_instance = null;
  function RoutingFeature_getInstance() {
    if (RoutingFeature_instance === null) {
      new RoutingFeature();
    }
    return RoutingFeature_instance;
  }
  function addRoute$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function addRoute($receiver, callback) {
    $receiver.appendSeparated_qu2wte$(RoutingFeature_getInstance().BLOCK, void 0, addRoute$lambda(callback));
  }
  function SessionsFeature() {
    SessionsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_uz3qjy$_0 = Repos_getInstance().ktor;
    this.artifacts_1earjm$_0 = listOf_0('io.ktor:ktor-server-sessions:$ktor_version');
    this.id_74og3u$_0 = 'ktor-sessions';
    this.title_vzgn3r$_0 = 'Sessions';
    this.description_dsfbot$_0 = 'Adds supports for sessions: with the payload in the client or the server';
    this.documentation_eyn7sb$_0 = 'https://ktor.io/features/sessions.html';
  }
  Object.defineProperty(SessionsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_uz3qjy$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_1earjm$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'id', {
    get: function () {
      return this.id_74og3u$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'title', {
    get: function () {
      return this.title_vzgn3r$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'description', {
    get: function () {
      return this.description_dsfbot$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_eyn7sb$_0;
    }
  });
  function SessionsFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('data class MySession(val count: Int = 0)');
    return Unit;
  }
  function SessionsFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(Sessions)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'cookie<MySession>("MY_SESSION")';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('cookie.extensions["SameSite"] = "lax"');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function SessionsFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'get("/session/increment")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('val session = call.sessions.get<MySession>() ?: MySession()');
      $receiver.line_61zpoe$('call.sessions.set(session.copy(count = session.count + 1))');
      $receiver.line_61zpoe$('call.respondText("Counter is ${session.count}. Refresh to increment.")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  SessionsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.sessions.*');
    addApplicationClasses($receiver, SessionsFeature$renderFeature$lambda);
    addFeatureInstall($receiver, SessionsFeature$renderFeature$lambda_0);
    addRoute($receiver, SessionsFeature$renderFeature$lambda_1);
  };
  SessionsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SessionsFeature',
    interfaces: [ServerFeature]
  };
  var SessionsFeature_instance = null;
  function SessionsFeature_getInstance() {
    if (SessionsFeature_instance === null) {
      new SessionsFeature();
    }
    return SessionsFeature_instance;
  }
  function ShutdownUrlFeature() {
    ShutdownUrlFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), ApplicationConf_getInstance()]);
    this.repos_nseft6$_0 = Repos_getInstance().ktor;
    this.artifacts_ymjlgq$_0 = listOf_0('io.ktor:ktor-server-host-common:$ktor_version');
    this.id_712coe$_0 = 'shutdown-url';
    this.title_osrccz$_0 = 'Shutdown URL';
    this.description_co788f$_0 = 'This feature enables a URL that when accessed, shutdowns the server.';
    this.documentation_e6x13j$_0 = 'https://ktor.io/features/shutdown-url.html';
  }
  Object.defineProperty(ShutdownUrlFeature.prototype, 'repos', {
    get: function () {
      return this.repos_nseft6$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_ymjlgq$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'id', {
    get: function () {
      return this.id_712coe$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'title', {
    get: function () {
      return this.title_osrccz$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'description', {
    get: function () {
      return this.description_co788f$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_e6x13j$_0;
    }
  });
  function ShutdownUrlFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('shutdown.url = "/ktor/application/shutdown"');
    return Unit;
  }
  function ShutdownUrlFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(ShutDownUrl.ApplicationCallFeature)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$("// The URL that will be intercepted (you can also use the application.conf's ktor.deployment.shutdown.url key)");
      $receiver.line_61zpoe$('shutDownUrl = "/ktor/application/shutdown"');
      $receiver.line_61zpoe$('// A function that will be executed to get the exit code of the process');
      $receiver.line_61zpoe$('exitCodeSupplier = { 0 } // ApplicationCall.() -> Int');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  ShutdownUrlFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.server.engine.*');
    addHoconDeployment($receiver, ShutdownUrlFeature$renderFeature$lambda);
    addFeatureInstall($receiver, ShutdownUrlFeature$renderFeature$lambda_0);
  };
  ShutdownUrlFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShutdownUrlFeature',
    interfaces: [ServerFeature]
  };
  var ShutdownUrlFeature_instance = null;
  function ShutdownUrlFeature_getInstance() {
    if (ShutdownUrlFeature_instance === null) {
      new ShutdownUrlFeature();
    }
    return ShutdownUrlFeature_instance;
  }
  function StaticContentFeature() {
    StaticContentFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_dkfxtw$_0 = Repos_getInstance().ktor;
    this.artifacts_j7f4mc$_0 = listOf_0('io.ktor:ktor-server-host-common:$ktor_version');
    this.id_tesp6s$_0 = 'static-content';
    this.title_ck31a3$_0 = 'Static Content';
    this.description_9pr5b3$_0 = 'Serves static files from defined locations.';
    this.documentation_6cfw4d$_0 = 'https://ktor.io/features/static-content.html';
  }
  Object.defineProperty(StaticContentFeature.prototype, 'repos', {
    get: function () {
      return this.repos_dkfxtw$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_j7f4mc$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'id', {
    get: function () {
      return this.id_tesp6s$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'title', {
    get: function () {
      return this.title_ck31a3$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'description', {
    get: function () {
      return this.description_9pr5b3$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_6cfw4d$_0;
    }
  });
  function StaticContentFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('// Static feature. Try to access `/static/ktor_logo.svg`');
    var $receiver_0 = 'static("/static")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('resources("static")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function StaticContentFeature$renderFeature$lambda_0(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$StaticContentFeature$renderFeature$lambda(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$StaticContentFeature$renderFeature$lambda(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$StaticContentFeature$renderFeature$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$StaticContentFeature$renderFeature$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$StaticContentFeature$renderFeature$lambda.prototype.constructor = Coroutine$StaticContentFeature$renderFeature$lambda;
  Coroutine$StaticContentFeature$renderFeature$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('static/ktor_logo.svg', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  StaticContentFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.content.*');
    addRoute($receiver, StaticContentFeature$renderFeature$lambda);
    $receiver.fileBinary_qk5z91$('resources/static/ktor_logo.svg', void 0, void 0, StaticContentFeature$renderFeature$lambda_0(info));
  };
  StaticContentFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StaticContentFeature',
    interfaces: [ServerFeature]
  };
  var StaticContentFeature_instance = null;
  function StaticContentFeature_getInstance() {
    if (StaticContentFeature_instance === null) {
      new StaticContentFeature();
    }
    return StaticContentFeature_instance;
  }
  function StatusPagesFeature() {
    StatusPagesFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_bvfwxv$_0 = Repos_getInstance().ktor;
    this.artifacts_qjikgt$_0 = listOf_0('io.ktor:ktor-server-host-common:$ktor_version');
    this.id_2viaaz$_0 = 'status-pages';
    this.title_cvstho$_0 = 'Status Pages';
    this.description_rjfq6w$_0 = 'Allow to respond to thrown exceptions.';
    this.documentation_h9g53q$_0 = 'https://ktor.io/features/status-pages.html';
    this.CUSTOM_STATUS_PAGES = this.newSlot_pdl1vj$('CUSTOM_STATUS_PAGES');
  }
  Object.defineProperty(StatusPagesFeature.prototype, 'repos', {
    get: function () {
      return this.repos_bvfwxv$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_qjikgt$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'id', {
    get: function () {
      return this.id_2viaaz$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'title', {
    get: function () {
      return this.title_cvstho$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'description', {
    get: function () {
      return this.description_rjfq6w$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_h9g53q$_0;
    }
  });
  function StatusPagesFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('class AuthenticationException : RuntimeException()');
    $receiver.line_61zpoe$('class AuthorizationException : RuntimeException()');
    return Unit;
  }
  function StatusPagesFeature$renderFeature$lambda$lambda$lambda(this$StatusPagesFeature, this$renderFeature) {
    return function ($receiver) {
      this$renderFeature.block_1s7wi0$($receiver, this$StatusPagesFeature.CUSTOM_STATUS_PAGES);
      return Unit;
    };
  }
  function StatusPagesFeature$renderFeature$lambda_0(this$StatusPagesFeature, this$renderFeature) {
    return function ($receiver) {
      var $receiver_0 = 'install(StatusPages)';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$StatusPagesFeature_0 = this$StatusPagesFeature;
        var this$renderFeature_0 = this$renderFeature;
        var $receiver_1 = 'exception<AuthenticationException>';
        var suffix = ' cause ->';
        var rafter_0 = suffix.length === 0 ? '' : ' ' + suffix;
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('call.respond(HttpStatusCode.Unauthorized)');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        var $receiver_2 = 'exception<AuthorizationException>';
        var suffix_0 = ' cause ->';
        var rafter_1 = suffix_0.length === 0 ? '' : ' ' + suffix_0;
        $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('call.respond(HttpStatusCode.Forbidden)');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        SEPARATOR($receiver, StatusPagesFeature$renderFeature$lambda$lambda$lambda(this$StatusPagesFeature_0, this$renderFeature_0));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  StatusPagesFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addApplicationClasses($receiver, StatusPagesFeature$renderFeature$lambda);
    addRoute($receiver, StatusPagesFeature$renderFeature$lambda_0(this, $receiver));
  };
  StatusPagesFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StatusPagesFeature',
    interfaces: [ServerFeature]
  };
  var StatusPagesFeature_instance = null;
  function StatusPagesFeature_getInstance() {
    if (StatusPagesFeature_instance === null) {
      new StatusPagesFeature();
    }
    return StatusPagesFeature_instance;
  }
  function addCustomStatusPage$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function addCustomStatusPage($receiver, callback) {
    $receiver.appendSeparated_qu2wte$(StatusPagesFeature_getInstance().CUSTOM_STATUS_PAGES, void 0, addCustomStatusPage$lambda(callback));
  }
  function VelocityFeature() {
    VelocityFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.group_kld628$_0 = 'Templating';
    this.repos_plq7am$_0 = Repos_getInstance().ktor;
    this.artifacts_hjogc2$_0 = listOf_0('io.ktor:ktor-velocity:$ktor_version');
    this.id_aq7496$_0 = 'velocity';
    this.title_qm33uf$_0 = 'Velocity';
    this.description_mctxlf$_0 = "Serve HTML content using Apache's Velocity template engine";
    this.documentation_cql7u3$_0 = 'https://ktor.io/features/templates/velocity.html';
  }
  Object.defineProperty(VelocityFeature.prototype, 'group', {
    get: function () {
      return this.group_kld628$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'repos', {
    get: function () {
      return this.repos_plq7am$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_hjogc2$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'id', {
    get: function () {
      return this.id_aq7496$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'title', {
    get: function () {
      return this.title_qm33uf$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'description', {
    get: function () {
      return this.description_mctxlf$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_cql7u3$_0;
    }
  });
  VelocityFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VelocityFeature',
    interfaces: [ServerFeature]
  };
  var VelocityFeature_instance = null;
  function VelocityFeature_getInstance() {
    if (VelocityFeature_instance === null) {
      new VelocityFeature();
    }
    return VelocityFeature_instance;
  }
  function WebsocketsFeature() {
    WebsocketsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_r8z5jx$_0 = Repos_getInstance().ktor;
    this.artifacts_9pl77n$_0 = listOf_0('io.ktor:ktor-websockets:$ktor_version');
    this.id_bjgwfv$_0 = 'ktor-websockets';
    this.title_s9c23q$_0 = 'WebSockets';
    this.description_nbqn42$_0 = 'Adds WebSockets support for bidirectional communication with the client';
    this.documentation_49wqyk$_0 = 'https://ktor.io/features/websockets.html';
  }
  Object.defineProperty(WebsocketsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_r8z5jx$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_9pl77n$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'id', {
    get: function () {
      return this.id_bjgwfv$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'title', {
    get: function () {
      return this.title_s9c23q$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'description', {
    get: function () {
      return this.description_nbqn42$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_49wqyk$_0;
    }
  });
  function WebsocketsFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(io.ktor.websocket.WebSockets)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('pingPeriod = Duration.ofSeconds(15)');
      $receiver.line_61zpoe$('timeout = Duration.ofSeconds(15)');
      $receiver.line_61zpoe$('maxFrameSize = Long.MAX_VALUE');
      $receiver.line_61zpoe$('masking = false');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function WebsocketsFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'webSocket("/myws/echo")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('send(Frame.Text("Hi from server"))');
      var $receiver_1 = 'while (true)';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('val frame = incoming.receive()');
        var $receiver_2 = 'if (frame is Frame.Text)';
        var rafter_1 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('send(Frame.Text("Client said: " + frame.readText()))');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  WebsocketsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.websocket.*');
    addImport($receiver, 'io.ktor.http.cio.websocket.*');
    addImport($receiver, 'java.time.*');
    addFeatureInstall($receiver, WebsocketsFeature$renderFeature$lambda);
    addRoute($receiver, WebsocketsFeature$renderFeature$lambda_0);
  };
  WebsocketsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebsocketsFeature',
    interfaces: [ServerFeature]
  };
  var WebsocketsFeature_instance = null;
  function WebsocketsFeature_getInstance() {
    if (WebsocketsFeature_instance === null) {
      new WebsocketsFeature();
    }
    return WebsocketsFeature_instance;
  }
  function FreeHttpStatusCode(code, description) {
    this.code = code;
    this.description = description;
  }
  FreeHttpStatusCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FreeHttpStatusCode',
    interfaces: []
  };
  FreeHttpStatusCode.prototype.component1 = function () {
    return this.code;
  };
  FreeHttpStatusCode.prototype.component2 = function () {
    return this.description;
  };
  FreeHttpStatusCode.prototype.copy_19mbxw$ = function (code, description) {
    return new FreeHttpStatusCode(code === void 0 ? this.code : code, description === void 0 ? this.description : description);
  };
  FreeHttpStatusCode.prototype.toString = function () {
    return 'FreeHttpStatusCode(code=' + Kotlin.toString(this.code) + (', description=' + Kotlin.toString(this.description)) + ')';
  };
  FreeHttpStatusCode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    return result;
  };
  FreeHttpStatusCode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.description, other.description)))));
  };
  function HttpStatusCode(name, ordinal, code, description) {
    Enum.call(this);
    this.code = code;
    this.description = description;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.free = new FreeHttpStatusCode(this.code, this.description);
  }
  function HttpStatusCode_initFields() {
    HttpStatusCode_initFields = function () {
    };
    HttpStatusCode$Continue_instance = new HttpStatusCode('Continue', 0, 100, 'Continue');
    HttpStatusCode$SwitchingProtocols_instance = new HttpStatusCode('SwitchingProtocols', 1, 101, 'Switching Protocols');
    HttpStatusCode$Processing_instance = new HttpStatusCode('Processing', 2, 102, 'Processing');
    HttpStatusCode$OK_instance = new HttpStatusCode('OK', 3, 200, 'OK');
    HttpStatusCode$Created_instance = new HttpStatusCode('Created', 4, 201, 'Created');
    HttpStatusCode$Accepted_instance = new HttpStatusCode('Accepted', 5, 202, 'Accepted');
    HttpStatusCode$NonAuthoritativeInformation_instance = new HttpStatusCode('NonAuthoritativeInformation', 6, 203, 'Non-Authoritative Information');
    HttpStatusCode$NoContent_instance = new HttpStatusCode('NoContent', 7, 204, 'No Content');
    HttpStatusCode$ResetContent_instance = new HttpStatusCode('ResetContent', 8, 205, 'Reset Content');
    HttpStatusCode$PartialContent_instance = new HttpStatusCode('PartialContent', 9, 206, 'Partial Content');
    HttpStatusCode$MultipleChoices_instance = new HttpStatusCode('MultipleChoices', 10, 300, 'Multiple Choices');
    HttpStatusCode$MovedPermanently_instance = new HttpStatusCode('MovedPermanently', 11, 301, 'Moved Permanently');
    HttpStatusCode$Found_instance = new HttpStatusCode('Found', 12, 302, 'Found');
    HttpStatusCode$SeeOther_instance = new HttpStatusCode('SeeOther', 13, 303, 'See Other');
    HttpStatusCode$NotModified_instance = new HttpStatusCode('NotModified', 14, 304, 'Not Modified');
    HttpStatusCode$UseProxy_instance = new HttpStatusCode('UseProxy', 15, 305, 'Use Proxy');
    HttpStatusCode$SwitchProxy_instance = new HttpStatusCode('SwitchProxy', 16, 306, 'Switch Proxy');
    HttpStatusCode$TemporaryRedirect_instance = new HttpStatusCode('TemporaryRedirect', 17, 307, 'Temporary Redirect');
    HttpStatusCode$PermanentRedirect_instance = new HttpStatusCode('PermanentRedirect', 18, 308, 'Permanent Redirect');
    HttpStatusCode$BadRequest_instance = new HttpStatusCode('BadRequest', 19, 400, 'Bad Request');
    HttpStatusCode$Unauthorized_instance = new HttpStatusCode('Unauthorized', 20, 401, 'Unauthorized');
    HttpStatusCode$PaymentRequired_instance = new HttpStatusCode('PaymentRequired', 21, 402, 'Payment Required');
    HttpStatusCode$Forbidden_instance = new HttpStatusCode('Forbidden', 22, 403, 'Forbidden');
    HttpStatusCode$NotFound_instance = new HttpStatusCode('NotFound', 23, 404, 'Not Found');
    HttpStatusCode$MethodNotAllowed_instance = new HttpStatusCode('MethodNotAllowed', 24, 405, 'Method Not Allowed');
    HttpStatusCode$NotAcceptable_instance = new HttpStatusCode('NotAcceptable', 25, 406, 'Not Acceptable');
    HttpStatusCode$ProxyAuthenticationRequired_instance = new HttpStatusCode('ProxyAuthenticationRequired', 26, 407, 'Proxy Authentication Required');
    HttpStatusCode$RequestTimeout_instance = new HttpStatusCode('RequestTimeout', 27, 408, 'Request Timeout');
    HttpStatusCode$Conflict_instance = new HttpStatusCode('Conflict', 28, 409, 'Conflict');
    HttpStatusCode$Gone_instance = new HttpStatusCode('Gone', 29, 410, 'Gone');
    HttpStatusCode$LengthRequired_instance = new HttpStatusCode('LengthRequired', 30, 411, 'Length Required');
    HttpStatusCode$PreconditionFailed_instance = new HttpStatusCode('PreconditionFailed', 31, 412, 'Precondition Failed');
    HttpStatusCode$PayloadTooLarge_instance = new HttpStatusCode('PayloadTooLarge', 32, 413, 'Payload Too Large');
    HttpStatusCode$RequestURITooLong_instance = new HttpStatusCode('RequestURITooLong', 33, 414, 'Request-URI Too Long');
    HttpStatusCode$UnsupportedMediaType_instance = new HttpStatusCode('UnsupportedMediaType', 34, 415, 'Unsupported Media Type');
    HttpStatusCode$RequestedRangeNotSatisfiable_instance = new HttpStatusCode('RequestedRangeNotSatisfiable', 35, 416, 'Requested Range Not Satisfiable');
    HttpStatusCode$ExceptionFailed_instance = new HttpStatusCode('ExceptionFailed', 36, 417, 'Exception Failed');
    HttpStatusCode$UpgradeRequired_instance = new HttpStatusCode('UpgradeRequired', 37, 426, 'Upgrade Required');
    HttpStatusCode$TooManyRequests_instance = new HttpStatusCode('TooManyRequests', 38, 429, 'Too Many Requests');
    HttpStatusCode$RequestHeaderFieldTooLarge_instance = new HttpStatusCode('RequestHeaderFieldTooLarge', 39, 431, 'Request Header Fields Too Large');
    HttpStatusCode$InternalServerError_instance = new HttpStatusCode('InternalServerError', 40, 500, 'Internal Server Error');
    HttpStatusCode$NotImplemented_instance = new HttpStatusCode('NotImplemented', 41, 501, 'Not Implemented');
    HttpStatusCode$BadGateway_instance = new HttpStatusCode('BadGateway', 42, 502, 'Bad Gateway');
    HttpStatusCode$ServiceUnavailable_instance = new HttpStatusCode('ServiceUnavailable', 43, 503, 'Service Unavailable');
    HttpStatusCode$GatewayTimeout_instance = new HttpStatusCode('GatewayTimeout', 44, 504, 'Gateway Timeout');
    HttpStatusCode$VersionNotSupported_instance = new HttpStatusCode('VersionNotSupported', 45, 505, 'HTTP Version Not Supported');
    HttpStatusCode$VariantAlsoNegotiates_instance = new HttpStatusCode('VariantAlsoNegotiates', 46, 506, 'Variant Also Negotiates');
    HttpStatusCode$Companion_getInstance();
  }
  var HttpStatusCode$Continue_instance;
  function HttpStatusCode$Continue_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Continue_instance;
  }
  var HttpStatusCode$SwitchingProtocols_instance;
  function HttpStatusCode$SwitchingProtocols_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$SwitchingProtocols_instance;
  }
  var HttpStatusCode$Processing_instance;
  function HttpStatusCode$Processing_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Processing_instance;
  }
  var HttpStatusCode$OK_instance;
  function HttpStatusCode$OK_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$OK_instance;
  }
  var HttpStatusCode$Created_instance;
  function HttpStatusCode$Created_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Created_instance;
  }
  var HttpStatusCode$Accepted_instance;
  function HttpStatusCode$Accepted_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Accepted_instance;
  }
  var HttpStatusCode$NonAuthoritativeInformation_instance;
  function HttpStatusCode$NonAuthoritativeInformation_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$NonAuthoritativeInformation_instance;
  }
  var HttpStatusCode$NoContent_instance;
  function HttpStatusCode$NoContent_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$NoContent_instance;
  }
  var HttpStatusCode$ResetContent_instance;
  function HttpStatusCode$ResetContent_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$ResetContent_instance;
  }
  var HttpStatusCode$PartialContent_instance;
  function HttpStatusCode$PartialContent_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$PartialContent_instance;
  }
  var HttpStatusCode$MultipleChoices_instance;
  function HttpStatusCode$MultipleChoices_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$MultipleChoices_instance;
  }
  var HttpStatusCode$MovedPermanently_instance;
  function HttpStatusCode$MovedPermanently_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$MovedPermanently_instance;
  }
  var HttpStatusCode$Found_instance;
  function HttpStatusCode$Found_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Found_instance;
  }
  var HttpStatusCode$SeeOther_instance;
  function HttpStatusCode$SeeOther_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$SeeOther_instance;
  }
  var HttpStatusCode$NotModified_instance;
  function HttpStatusCode$NotModified_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$NotModified_instance;
  }
  var HttpStatusCode$UseProxy_instance;
  function HttpStatusCode$UseProxy_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$UseProxy_instance;
  }
  var HttpStatusCode$SwitchProxy_instance;
  function HttpStatusCode$SwitchProxy_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$SwitchProxy_instance;
  }
  var HttpStatusCode$TemporaryRedirect_instance;
  function HttpStatusCode$TemporaryRedirect_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$TemporaryRedirect_instance;
  }
  var HttpStatusCode$PermanentRedirect_instance;
  function HttpStatusCode$PermanentRedirect_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$PermanentRedirect_instance;
  }
  var HttpStatusCode$BadRequest_instance;
  function HttpStatusCode$BadRequest_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$BadRequest_instance;
  }
  var HttpStatusCode$Unauthorized_instance;
  function HttpStatusCode$Unauthorized_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Unauthorized_instance;
  }
  var HttpStatusCode$PaymentRequired_instance;
  function HttpStatusCode$PaymentRequired_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$PaymentRequired_instance;
  }
  var HttpStatusCode$Forbidden_instance;
  function HttpStatusCode$Forbidden_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Forbidden_instance;
  }
  var HttpStatusCode$NotFound_instance;
  function HttpStatusCode$NotFound_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$NotFound_instance;
  }
  var HttpStatusCode$MethodNotAllowed_instance;
  function HttpStatusCode$MethodNotAllowed_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$MethodNotAllowed_instance;
  }
  var HttpStatusCode$NotAcceptable_instance;
  function HttpStatusCode$NotAcceptable_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$NotAcceptable_instance;
  }
  var HttpStatusCode$ProxyAuthenticationRequired_instance;
  function HttpStatusCode$ProxyAuthenticationRequired_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$ProxyAuthenticationRequired_instance;
  }
  var HttpStatusCode$RequestTimeout_instance;
  function HttpStatusCode$RequestTimeout_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$RequestTimeout_instance;
  }
  var HttpStatusCode$Conflict_instance;
  function HttpStatusCode$Conflict_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Conflict_instance;
  }
  var HttpStatusCode$Gone_instance;
  function HttpStatusCode$Gone_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$Gone_instance;
  }
  var HttpStatusCode$LengthRequired_instance;
  function HttpStatusCode$LengthRequired_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$LengthRequired_instance;
  }
  var HttpStatusCode$PreconditionFailed_instance;
  function HttpStatusCode$PreconditionFailed_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$PreconditionFailed_instance;
  }
  var HttpStatusCode$PayloadTooLarge_instance;
  function HttpStatusCode$PayloadTooLarge_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$PayloadTooLarge_instance;
  }
  var HttpStatusCode$RequestURITooLong_instance;
  function HttpStatusCode$RequestURITooLong_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$RequestURITooLong_instance;
  }
  var HttpStatusCode$UnsupportedMediaType_instance;
  function HttpStatusCode$UnsupportedMediaType_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$UnsupportedMediaType_instance;
  }
  var HttpStatusCode$RequestedRangeNotSatisfiable_instance;
  function HttpStatusCode$RequestedRangeNotSatisfiable_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$RequestedRangeNotSatisfiable_instance;
  }
  var HttpStatusCode$ExceptionFailed_instance;
  function HttpStatusCode$ExceptionFailed_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$ExceptionFailed_instance;
  }
  var HttpStatusCode$UpgradeRequired_instance;
  function HttpStatusCode$UpgradeRequired_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$UpgradeRequired_instance;
  }
  var HttpStatusCode$TooManyRequests_instance;
  function HttpStatusCode$TooManyRequests_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$TooManyRequests_instance;
  }
  var HttpStatusCode$RequestHeaderFieldTooLarge_instance;
  function HttpStatusCode$RequestHeaderFieldTooLarge_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$RequestHeaderFieldTooLarge_instance;
  }
  var HttpStatusCode$InternalServerError_instance;
  function HttpStatusCode$InternalServerError_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$InternalServerError_instance;
  }
  var HttpStatusCode$NotImplemented_instance;
  function HttpStatusCode$NotImplemented_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$NotImplemented_instance;
  }
  var HttpStatusCode$BadGateway_instance;
  function HttpStatusCode$BadGateway_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$BadGateway_instance;
  }
  var HttpStatusCode$ServiceUnavailable_instance;
  function HttpStatusCode$ServiceUnavailable_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$ServiceUnavailable_instance;
  }
  var HttpStatusCode$GatewayTimeout_instance;
  function HttpStatusCode$GatewayTimeout_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$GatewayTimeout_instance;
  }
  var HttpStatusCode$VersionNotSupported_instance;
  function HttpStatusCode$VersionNotSupported_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$VersionNotSupported_instance;
  }
  var HttpStatusCode$VariantAlsoNegotiates_instance;
  function HttpStatusCode$VariantAlsoNegotiates_getInstance() {
    HttpStatusCode_initFields();
    return HttpStatusCode$VariantAlsoNegotiates_instance;
  }
  function HttpStatusCode$Companion() {
    HttpStatusCode$Companion_instance = this;
    var $receiver = HttpStatusCode$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.code, element);
    }
    this.byCode = destination;
  }
  HttpStatusCode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpStatusCode$Companion_instance = null;
  function HttpStatusCode$Companion_getInstance() {
    HttpStatusCode_initFields();
    if (HttpStatusCode$Companion_instance === null) {
      new HttpStatusCode$Companion();
    }
    return HttpStatusCode$Companion_instance;
  }
  HttpStatusCode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpStatusCode',
    interfaces: [Enum]
  };
  function HttpStatusCode$values() {
    return [HttpStatusCode$Continue_getInstance(), HttpStatusCode$SwitchingProtocols_getInstance(), HttpStatusCode$Processing_getInstance(), HttpStatusCode$OK_getInstance(), HttpStatusCode$Created_getInstance(), HttpStatusCode$Accepted_getInstance(), HttpStatusCode$NonAuthoritativeInformation_getInstance(), HttpStatusCode$NoContent_getInstance(), HttpStatusCode$ResetContent_getInstance(), HttpStatusCode$PartialContent_getInstance(), HttpStatusCode$MultipleChoices_getInstance(), HttpStatusCode$MovedPermanently_getInstance(), HttpStatusCode$Found_getInstance(), HttpStatusCode$SeeOther_getInstance(), HttpStatusCode$NotModified_getInstance(), HttpStatusCode$UseProxy_getInstance(), HttpStatusCode$SwitchProxy_getInstance(), HttpStatusCode$TemporaryRedirect_getInstance(), HttpStatusCode$PermanentRedirect_getInstance(), HttpStatusCode$BadRequest_getInstance(), HttpStatusCode$Unauthorized_getInstance(), HttpStatusCode$PaymentRequired_getInstance(), HttpStatusCode$Forbidden_getInstance(), HttpStatusCode$NotFound_getInstance(), HttpStatusCode$MethodNotAllowed_getInstance(), HttpStatusCode$NotAcceptable_getInstance(), HttpStatusCode$ProxyAuthenticationRequired_getInstance(), HttpStatusCode$RequestTimeout_getInstance(), HttpStatusCode$Conflict_getInstance(), HttpStatusCode$Gone_getInstance(), HttpStatusCode$LengthRequired_getInstance(), HttpStatusCode$PreconditionFailed_getInstance(), HttpStatusCode$PayloadTooLarge_getInstance(), HttpStatusCode$RequestURITooLong_getInstance(), HttpStatusCode$UnsupportedMediaType_getInstance(), HttpStatusCode$RequestedRangeNotSatisfiable_getInstance(), HttpStatusCode$ExceptionFailed_getInstance(), HttpStatusCode$UpgradeRequired_getInstance(), HttpStatusCode$TooManyRequests_getInstance(), HttpStatusCode$RequestHeaderFieldTooLarge_getInstance(), HttpStatusCode$InternalServerError_getInstance(), HttpStatusCode$NotImplemented_getInstance(), HttpStatusCode$BadGateway_getInstance(), HttpStatusCode$ServiceUnavailable_getInstance(), HttpStatusCode$GatewayTimeout_getInstance(), HttpStatusCode$VersionNotSupported_getInstance(), HttpStatusCode$VariantAlsoNegotiates_getInstance()];
  }
  HttpStatusCode.values = HttpStatusCode$values;
  function HttpStatusCode$valueOf(name) {
    switch (name) {
      case 'Continue':
        return HttpStatusCode$Continue_getInstance();
      case 'SwitchingProtocols':
        return HttpStatusCode$SwitchingProtocols_getInstance();
      case 'Processing':
        return HttpStatusCode$Processing_getInstance();
      case 'OK':
        return HttpStatusCode$OK_getInstance();
      case 'Created':
        return HttpStatusCode$Created_getInstance();
      case 'Accepted':
        return HttpStatusCode$Accepted_getInstance();
      case 'NonAuthoritativeInformation':
        return HttpStatusCode$NonAuthoritativeInformation_getInstance();
      case 'NoContent':
        return HttpStatusCode$NoContent_getInstance();
      case 'ResetContent':
        return HttpStatusCode$ResetContent_getInstance();
      case 'PartialContent':
        return HttpStatusCode$PartialContent_getInstance();
      case 'MultipleChoices':
        return HttpStatusCode$MultipleChoices_getInstance();
      case 'MovedPermanently':
        return HttpStatusCode$MovedPermanently_getInstance();
      case 'Found':
        return HttpStatusCode$Found_getInstance();
      case 'SeeOther':
        return HttpStatusCode$SeeOther_getInstance();
      case 'NotModified':
        return HttpStatusCode$NotModified_getInstance();
      case 'UseProxy':
        return HttpStatusCode$UseProxy_getInstance();
      case 'SwitchProxy':
        return HttpStatusCode$SwitchProxy_getInstance();
      case 'TemporaryRedirect':
        return HttpStatusCode$TemporaryRedirect_getInstance();
      case 'PermanentRedirect':
        return HttpStatusCode$PermanentRedirect_getInstance();
      case 'BadRequest':
        return HttpStatusCode$BadRequest_getInstance();
      case 'Unauthorized':
        return HttpStatusCode$Unauthorized_getInstance();
      case 'PaymentRequired':
        return HttpStatusCode$PaymentRequired_getInstance();
      case 'Forbidden':
        return HttpStatusCode$Forbidden_getInstance();
      case 'NotFound':
        return HttpStatusCode$NotFound_getInstance();
      case 'MethodNotAllowed':
        return HttpStatusCode$MethodNotAllowed_getInstance();
      case 'NotAcceptable':
        return HttpStatusCode$NotAcceptable_getInstance();
      case 'ProxyAuthenticationRequired':
        return HttpStatusCode$ProxyAuthenticationRequired_getInstance();
      case 'RequestTimeout':
        return HttpStatusCode$RequestTimeout_getInstance();
      case 'Conflict':
        return HttpStatusCode$Conflict_getInstance();
      case 'Gone':
        return HttpStatusCode$Gone_getInstance();
      case 'LengthRequired':
        return HttpStatusCode$LengthRequired_getInstance();
      case 'PreconditionFailed':
        return HttpStatusCode$PreconditionFailed_getInstance();
      case 'PayloadTooLarge':
        return HttpStatusCode$PayloadTooLarge_getInstance();
      case 'RequestURITooLong':
        return HttpStatusCode$RequestURITooLong_getInstance();
      case 'UnsupportedMediaType':
        return HttpStatusCode$UnsupportedMediaType_getInstance();
      case 'RequestedRangeNotSatisfiable':
        return HttpStatusCode$RequestedRangeNotSatisfiable_getInstance();
      case 'ExceptionFailed':
        return HttpStatusCode$ExceptionFailed_getInstance();
      case 'UpgradeRequired':
        return HttpStatusCode$UpgradeRequired_getInstance();
      case 'TooManyRequests':
        return HttpStatusCode$TooManyRequests_getInstance();
      case 'RequestHeaderFieldTooLarge':
        return HttpStatusCode$RequestHeaderFieldTooLarge_getInstance();
      case 'InternalServerError':
        return HttpStatusCode$InternalServerError_getInstance();
      case 'NotImplemented':
        return HttpStatusCode$NotImplemented_getInstance();
      case 'BadGateway':
        return HttpStatusCode$BadGateway_getInstance();
      case 'ServiceUnavailable':
        return HttpStatusCode$ServiceUnavailable_getInstance();
      case 'GatewayTimeout':
        return HttpStatusCode$GatewayTimeout_getInstance();
      case 'VersionNotSupported':
        return HttpStatusCode$VersionNotSupported_getInstance();
      case 'VariantAlsoNegotiates':
        return HttpStatusCode$VariantAlsoNegotiates_getInstance();
      default:throwISE('No enum constant io.ktor.start.http.HttpStatusCode.' + name);
    }
  }
  HttpStatusCode.valueOf_61zpoe$ = HttpStatusCode$valueOf;
  function ApplicationConf() {
    ApplicationConf_instance = this;
    Block.call(this, []);
    this.KTOR = this.newSlot_pdl1vj$('KTOR');
    this.DEPLOYMENT = this.newSlot_pdl1vj$('DEPLOYMENT');
    this.TOP = this.newSlot_pdl1vj$('CONF');
  }
  function ApplicationConf$render$lambda(this$ApplicationConf_0, this$render_0, closure$info_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ApplicationConf$render$lambda(this$ApplicationConf_0, this$render_0, closure$info_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ApplicationConf$render$lambda(this$ApplicationConf_0, this$render_0, closure$info_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ApplicationConf = this$ApplicationConf_0;
    this.local$this$render = this$render_0;
    this.local$closure$info = closure$info_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ApplicationConf$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ApplicationConf$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ApplicationConf$render$lambda.prototype.constructor = Coroutine$ApplicationConf$render$lambda;
  Coroutine$ApplicationConf$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var rafter = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$('ktor'.length === 0 ? '{' + rafter : 'ktor' + ' {' + rafter);
            this.local$$receiver._indent();
            try {
              var this$ApplicationConf = this.local$this$ApplicationConf;
              var this$render = this.local$this$render;
              var closure$info = this.local$closure$info;
              var $receiver = 'deployment';
              var rafter_0 = ''.length === 0 ? '' : ' ' + '';
              this.local$$receiver.line_61zpoe$($receiver.length === 0 ? '{' + rafter_0 : $receiver + ' {' + rafter_0);
              this.local$$receiver._indent();
              try {
                this.local$$receiver.line_61zpoe$('port = 8080');
                this.local$$receiver.line_61zpoe$('port = ${?PORT}');
                this$render.block_1s7wi0$(this.local$$receiver, this$ApplicationConf.DEPLOYMENT);
              }
              finally {
                this.local$$receiver._unindent();
              }
              this.local$$receiver.line_61zpoe$('}' + '');
              var $receiver_0 = 'application';
              var rafter_1 = ''.length === 0 ? '' : ' ' + '';
              this.local$$receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter_1 : $receiver_0 + ' {' + rafter_1);
              this.local$$receiver._indent();
              try {
                this.local$$receiver.line_61zpoe$('modules = [ ' + closure$info.artifactGroup + '.ApplicationKt.module ]');
              }
              finally {
                this.local$$receiver._unindent();
              }
              this.local$$receiver.line_61zpoe$('}' + '');
              this$render.block_1s7wi0$(this.local$$receiver, this$ApplicationConf.KTOR);
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            return this.local$this$render.block_1s7wi0$(this.local$$receiver, this.local$this$ApplicationConf.TOP), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ApplicationConf.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileText_7k8vha$('resources/application.conf', void 0, void 0, ApplicationConf$render$lambda(this, $receiver, info));
  };
  ApplicationConf.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationConf',
    interfaces: [Block]
  };
  var ApplicationConf_instance = null;
  function ApplicationConf_getInstance() {
    if (ApplicationConf_instance === null) {
      new ApplicationConf();
    }
    return ApplicationConf_instance;
  }
  function addHoconDeployment$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function addHoconDeployment($receiver, block) {
    $receiver.appendSeparated_qu2wte$(ApplicationConf_getInstance().DEPLOYMENT, void 0, addHoconDeployment$lambda(block));
  }
  function addHoconKtor$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function addHoconKtor($receiver, block) {
    $receiver.appendSeparated_qu2wte$(ApplicationConf_getInstance().KTOR, void 0, addHoconKtor$lambda(block));
  }
  function addHoconTop$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function addHoconTop($receiver, block) {
    $receiver.appendSeparated_qu2wte$(ApplicationConf_getInstance().TOP, void 0, addHoconTop$lambda(block));
  }
  function ApplicationKt() {
    ApplicationKt_instance = this;
    Block.call(this, [BuildFiles_getInstance(), ApplicationConf_getInstance(), LogBackXml_getInstance(), GitIgnoreFile_getInstance()]);
    this.MODULE_INSTALL = this.newSlot_pdl1vj$('MODULE_INSTALL');
    this.MODULE_POST = this.newSlot_pdl1vj$('MODULE_POST');
    this.APPLICATION_CLASSES = this.newSlot_pdl1vj$('APPLICATION_CLASSES');
    this.EXTENSIONS = this.newSlot_pdl1vj$('EXTENSIONS');
  }
  function ApplicationKt$render$lambda$lambda$lambda(this$render) {
    return function ($receiver) {
      var tmp$;
      tmp$ = get_applicationKtImports(this$render).iterator();
      while (tmp$.hasNext()) {
        var import_0 = tmp$.next();
        $receiver.line_61zpoe$('import ' + import_0);
      }
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda(this$render) {
    return function ($receiver) {
      $receiver.linedeferred_yot30u$(ApplicationKt$render$lambda$lambda$lambda(this$render));
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda_0(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = ' + closure$info.developmentEngineFQ + '.main(args)');
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda_1(this$ApplicationKt, this$render) {
    return function ($receiver) {
      var $receiver_0 = 'fun Application.module()';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$ApplicationKt_0 = this$ApplicationKt;
        var this$render_0 = this$render;
        this$render_0.block_1s7wi0$($receiver, this$ApplicationKt_0.MODULE_INSTALL);
        EMPTY_LINE_ONCE($receiver);
        this$render_0.block_1s7wi0$($receiver, this$ApplicationKt_0.MODULE_POST);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda_2(this$ApplicationKt, this$render) {
    return function ($receiver) {
      this$render.block_1s7wi0$($receiver, this$ApplicationKt.APPLICATION_CLASSES);
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda_3(this$ApplicationKt, this$render) {
    return function ($receiver) {
      this$render.block_1s7wi0$($receiver, this$ApplicationKt.EXTENSIONS);
      return Unit;
    };
  }
  function ApplicationKt$render$lambda(closure$info_0, this$render_0, this$ApplicationKt_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ApplicationKt$render$lambda(closure$info_0, this$render_0, this$ApplicationKt_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ApplicationKt$render$lambda(closure$info_0, this$render_0, this$ApplicationKt_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$render = this$render_0;
    this.local$this$ApplicationKt = this$ApplicationKt_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ApplicationKt$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ApplicationKt$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ApplicationKt$render$lambda.prototype.constructor = Coroutine$ApplicationKt$render$lambda;
  Coroutine$ApplicationKt$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('package ' + this.local$closure$info.artifactGroup);
            SEPARATOR(this.local$$receiver, ApplicationKt$render$lambda$lambda(this.local$this$render));
            SEPARATOR(this.local$$receiver, ApplicationKt$render$lambda$lambda_0(this.local$closure$info));
            SEPARATOR(this.local$$receiver, ApplicationKt$render$lambda$lambda_1(this.local$this$ApplicationKt, this.local$this$render));
            SEPARATOR(this.local$$receiver, ApplicationKt$render$lambda$lambda_2(this.local$this$ApplicationKt, this.local$this$render));
            return SEPARATOR(this.local$$receiver, ApplicationKt$render$lambda$lambda_3(this.local$this$ApplicationKt, this.local$this$render)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ApplicationKt.prototype.render_miqy8c$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.application.*');
    addImport($receiver, 'io.ktor.response.*');
    addImport($receiver, 'io.ktor.request.*');
    $receiver.fileText_7k8vha$('src/application.kt', void 0, void 0, ApplicationKt$render$lambda(info, $receiver, this));
  };
  ApplicationKt.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationKt',
    interfaces: [Block]
  };
  var ApplicationKt_instance = null;
  function ApplicationKt_getInstance() {
    if (ApplicationKt_instance === null) {
      new ApplicationKt();
    }
    return ApplicationKt_instance;
  }
  function applicationKtImports$lambda($receiver) {
    return LinkedHashSet_init();
  }
  var applicationKtImports;
  var applicationKtImports_metadata = new PropertyMetadata('applicationKtImports');
  function get_applicationKtImports($receiver) {
    var getValue_tv2abg$result;
    getValue_tv2abg$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = applicationKtImports.name) != null ? tmp$ : applicationKtImports_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = applicationKtImports.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = applicationKtImports.name) != null ? tmp$_3 : applicationKtImports_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_tv2abg$result = r;
        break getValue_tv2abg$break;
      }
      getValue_tv2abg$result = res;
    }
     while (false);
    return getValue_tv2abg$result;
  }
  function addImport($receiver, import_0) {
    get_applicationKtImports($receiver).add_11rb$(import_0);
  }
  function putImports$lambda$lambda(closure$imports) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$imports.iterator();
      while (tmp$.hasNext()) {
        var import_0 = tmp$.next();
        $receiver.line_61zpoe$('import ' + import_0);
      }
      return Unit;
    };
  }
  function putImports$lambda(closure$imports) {
    return function ($receiver) {
      $receiver.linedeferred_yot30u$(putImports$lambda$lambda(closure$imports));
      return Unit;
    };
  }
  function putImports($receiver, imports) {
    SEPARATOR($receiver, putImports$lambda(imports));
  }
  function addFeatureInstall$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function addFeatureInstall($receiver, callback) {
    $receiver.appendSeparated_qu2wte$(ApplicationKt_getInstance().MODULE_INSTALL, void 0, addFeatureInstall$lambda(callback));
  }
  function addExtensionMethods$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function addExtensionMethods($receiver, callback) {
    $receiver.appendSeparated_qu2wte$(ApplicationKt_getInstance().EXTENSIONS, void 0, addExtensionMethods$lambda(callback));
  }
  function addApplicationClasses$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function addApplicationClasses($receiver, callback) {
    $receiver.appendSeparated_qu2wte$(ApplicationKt_getInstance().APPLICATION_CLASSES, void 0, addApplicationClasses$lambda(callback));
  }
  function ApplicationTestKt() {
    ApplicationTestKt_instance = this;
    Block.call(this, [ApplicationKt_getInstance()]);
    this.TESTS = this.newSlot_pdl1vj$('TESTS');
  }
  function ApplicationTestKt$render$lambda$lambda$lambda(this$render) {
    return function ($receiver) {
      var tmp$;
      tmp$ = plus_1(get_applicationKtImports(this$render), get_applicationTestKtImports(this$render)).iterator();
      while (tmp$.hasNext()) {
        var import_0 = tmp$.next();
        $receiver.line_61zpoe$('import ' + import_0);
      }
      return Unit;
    };
  }
  function ApplicationTestKt$render$lambda$lambda(this$render) {
    return function ($receiver) {
      $receiver.linedeferred_yot30u$(ApplicationTestKt$render$lambda$lambda$lambda(this$render));
      return Unit;
    };
  }
  function ApplicationTestKt$render$lambda$lambda_0(this$ApplicationTestKt, this$render) {
    return function ($receiver) {
      var $receiver_0 = 'class ApplicationTest';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$ApplicationTestKt_0 = this$ApplicationTestKt;
        this$render.block_1s7wi0$($receiver, this$ApplicationTestKt_0.TESTS);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  function ApplicationTestKt$render$lambda(closure$info_0, this$render_0, this$ApplicationTestKt_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ApplicationTestKt$render$lambda(closure$info_0, this$render_0, this$ApplicationTestKt_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ApplicationTestKt$render$lambda(closure$info_0, this$render_0, this$ApplicationTestKt_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$render = this$render_0;
    this.local$this$ApplicationTestKt = this$ApplicationTestKt_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ApplicationTestKt$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ApplicationTestKt$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ApplicationTestKt$render$lambda.prototype.constructor = Coroutine$ApplicationTestKt$render$lambda;
  Coroutine$ApplicationTestKt$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('package ' + this.local$closure$info.artifactGroup);
            SEPARATOR(this.local$$receiver, ApplicationTestKt$render$lambda$lambda(this.local$this$render));
            return SEPARATOR(this.local$$receiver, ApplicationTestKt$render$lambda$lambda_0(this.local$this$ApplicationTestKt, this.local$this$render)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ApplicationTestKt.prototype.render_miqy8c$ = function ($receiver, info) {
    addTestImport($receiver, 'kotlin.test.*');
    $receiver.fileText_7k8vha$('test/ApplicationTest.kt', void 0, void 0, ApplicationTestKt$render$lambda(info, $receiver, this));
  };
  ApplicationTestKt.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationTestKt',
    interfaces: [Block]
  };
  var ApplicationTestKt_instance = null;
  function ApplicationTestKt_getInstance() {
    if (ApplicationTestKt_instance === null) {
      new ApplicationTestKt();
    }
    return ApplicationTestKt_instance;
  }
  function applicationTestKtImports$lambda($receiver) {
    return LinkedHashSet_init();
  }
  var applicationTestKtImports;
  var applicationTestKtImports_metadata = new PropertyMetadata('applicationTestKtImports');
  function get_applicationTestKtImports($receiver) {
    var getValue_tv2abg$result;
    getValue_tv2abg$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = applicationTestKtImports.name) != null ? tmp$ : applicationTestKtImports_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = applicationTestKtImports.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = applicationTestKtImports.name) != null ? tmp$_3 : applicationTestKtImports_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_tv2abg$result = r;
        break getValue_tv2abg$break;
      }
      getValue_tv2abg$result = res;
    }
     while (false);
    return getValue_tv2abg$result;
  }
  function addTestImport($receiver, import_0) {
    get_applicationTestKtImports($receiver).add_11rb$(import_0);
  }
  function addTestMethod$lambda(closure$name, closure$block) {
    return function ($receiver) {
      $receiver.line_61zpoe$('@Test');
      var $receiver_0 = 'fun ' + closure$name + '()';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        closure$block($receiver);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  function addTestMethod($receiver, name, block) {
    $receiver.appendSeparated_qu2wte$(ApplicationTestKt_getInstance().TESTS, void 0, addTestMethod$lambda(name, block));
  }
  function BuildFiles() {
    BuildFiles_instance = this;
    Block.call(this, []);
  }
  BuildFiles.prototype.render_miqy8c$ = function ($receiver, info) {
    switch (info.projectType.name) {
      case 'Gradle':
        BuildFilesGradle_getInstance().render_miqy8c$($receiver, info);
        break;
      case 'Maven':
        BuildFilesMaven_getInstance().render_miqy8c$($receiver, info);
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    addMavenRepository_0($receiver, Repos_getInstance().jcenter);
    addMavenRepository_0($receiver, Repos_getInstance().ktor);
    addCompileDependency($receiver, new MvnArtifact('org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version'));
    addCompileDependency($receiver, new MvnArtifact('org.jetbrains.kotlinx:kotlinx-coroutines-core:$kotlinx_coroutines_version'));
    addCompileDependency($receiver, new MvnArtifact('org.jetbrains.kotlinx:kotlinx-coroutines-io:$kotlinx_coroutines_version'));
    addCompileDependency($receiver, new MvnArtifact('org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:$kotlinx_coroutines_version'));
    addCompileDependency($receiver, new MvnArtifact('io.ktor:ktor-server-' + info.ktorEngine.id + ':' + '$' + 'ktor_version'));
    addCompileDependency($receiver, new MvnArtifact('ch.qos.logback:logback-classic:$logback_version'));
    addTestDependency($receiver, new MvnArtifact('io.ktor:ktor-server-tests:$ktor_version'));
  };
  BuildFiles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BuildFiles',
    interfaces: [Block]
  };
  var BuildFiles_instance = null;
  function BuildFiles_getInstance() {
    if (BuildFiles_instance === null) {
      new BuildFiles();
    }
    return BuildFiles_instance;
  }
  function reposToInclude$lambda($receiver) {
    return LinkedHashSet_init();
  }
  var reposToInclude;
  var reposToInclude_metadata = new PropertyMetadata('reposToInclude');
  function get_reposToInclude($receiver) {
    var getValue_tv2abg$result;
    getValue_tv2abg$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = reposToInclude.name) != null ? tmp$ : reposToInclude_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = reposToInclude.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = reposToInclude.name) != null ? tmp$_3 : reposToInclude_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_tv2abg$result = r;
        break getValue_tv2abg$break;
      }
      getValue_tv2abg$result = res;
    }
     while (false);
    return getValue_tv2abg$result;
  }
  function compileDependencies$lambda($receiver) {
    return LinkedHashSet_init();
  }
  var compileDependencies;
  var compileDependencies_metadata = new PropertyMetadata('compileDependencies');
  function get_compileDependencies($receiver) {
    var getValue_tv2abg$result;
    getValue_tv2abg$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = compileDependencies.name) != null ? tmp$ : compileDependencies_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = compileDependencies.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = compileDependencies.name) != null ? tmp$_3 : compileDependencies_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_tv2abg$result = r;
        break getValue_tv2abg$break;
      }
      getValue_tv2abg$result = res;
    }
     while (false);
    return getValue_tv2abg$result;
  }
  function testDependencies$lambda($receiver) {
    return LinkedHashSet_init();
  }
  var testDependencies;
  var testDependencies_metadata = new PropertyMetadata('testDependencies');
  function get_testDependencies($receiver) {
    var getValue_tv2abg$result;
    getValue_tv2abg$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = testDependencies.name) != null ? tmp$ : testDependencies_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = testDependencies.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = LinkedHashMap_init();
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = testDependencies.name) != null ? tmp$_3 : testDependencies_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_tv2abg$result = r;
        break getValue_tv2abg$break;
      }
      getValue_tv2abg$result = res;
    }
     while (false);
    return getValue_tv2abg$result;
  }
  function addMavenRepository($receiver, repository) {
    get_reposToInclude($receiver).add_11rb$(repository);
  }
  function addMavenRepository_0($receiver, repos) {
    addAll(get_reposToInclude($receiver), repos);
  }
  function addCompileDependency($receiver, dependency) {
    get_compileDependencies($receiver).add_11rb$(dependency);
  }
  function addTestDependency($receiver, dependency) {
    get_testDependencies($receiver).add_11rb$(dependency);
  }
  function BuildFilesGradle() {
    BuildFilesGradle_instance = this;
    Block.call(this, []);
  }
  function BuildFilesGradle$render$lambda$lambda$lambda(this$render) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      println('compileDependencies: ' + get_compileDependencies(this$render));
      tmp$ = get_compileDependencies(this$render).iterator();
      while (tmp$.hasNext()) {
        var dep = tmp$.next();
        $receiver.line_61zpoe$('compile ' + '"' + dep.dependency + '"');
      }
      tmp$_0 = get_testDependencies(this$render).iterator();
      while (tmp$_0.hasNext()) {
        var dep_0 = tmp$_0.next();
        $receiver.line_61zpoe$('testCompile ' + '"' + dep_0.dependency + '"');
      }
      return Unit;
    };
  }
  function BuildFilesGradle$render$lambda(closure$info_0, this$render_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda(closure$info_0, this$render_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda(closure$info_0, this$render_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$render = this$render_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$BuildFilesGradle$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda;
  Coroutine$BuildFilesGradle$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = 'buildscript';
            var rafter = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver.length === 0 ? '{' + rafter : $receiver + ' {' + rafter);
            this.local$$receiver._indent();
            try {
              var closure$info = this.local$closure$info;
              this.local$$receiver.line_61zpoe$("ext.kotlin_version = '1.2.51'");
              this.local$$receiver.line_61zpoe$("ext.ktor_version = '" + closure$info.ktorVersion + "'");
              this.local$$receiver.line_61zpoe$("ext.logback_version = '1.2.1'");
              this.local$$receiver.line_61zpoe$("ext.kotlinx_coroutines_version = '0.23.4'");
              this.local$$receiver.line_61zpoe$('');
              var $receiver_0 = 'repositories';
              var rafter_0 = ''.length === 0 ? '' : ' ' + '';
              this.local$$receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter_0 : $receiver_0 + ' {' + rafter_0);
              this.local$$receiver._indent();
              try {
                this.local$$receiver.line_61zpoe$('jcenter()');
              }
              finally {
                this.local$$receiver._unindent();
              }
              this.local$$receiver.line_61zpoe$('}' + '');
              this.local$$receiver.line_61zpoe$('');
              var $receiver_1 = 'dependencies';
              var rafter_1 = ''.length === 0 ? '' : ' ' + '';
              this.local$$receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_1 : $receiver_1 + ' {' + rafter_1);
              this.local$$receiver._indent();
              try {
                this.local$$receiver.line_61zpoe$('classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"');
              }
              finally {
                this.local$$receiver._unindent();
              }
              this.local$$receiver.line_61zpoe$('}' + '');
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            this.local$$receiver.line_61zpoe$('');
            this.local$$receiver.line_61zpoe$("apply plugin: 'kotlin'");
            this.local$$receiver.line_61zpoe$("apply plugin: 'application'");
            this.local$$receiver.line_61zpoe$('');
            this.local$$receiver.line_61zpoe$("group '" + this.local$closure$info.artifactName + "'");
            this.local$$receiver.line_61zpoe$("version '" + this.local$closure$info.artifactVersion + "'");
            this.local$$receiver.line_61zpoe$('mainClassName = ' + '"' + this.local$closure$info.developmentEngineFQ + '"');
            this.local$$receiver.line_61zpoe$('');
            var $receiver_2 = 'sourceSets';
            var rafter_2 = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_2 : $receiver_2 + ' {' + rafter_2);
            this.local$$receiver._indent();
            try {
              this.local$$receiver.line_61zpoe$("main.kotlin.srcDirs = main.java.srcDirs = ['src']");
              this.local$$receiver.line_61zpoe$("test.kotlin.srcDirs = test.java.srcDirs = ['test']");
              this.local$$receiver.line_61zpoe$("main.resources.srcDirs = ['resources']");
              this.local$$receiver.line_61zpoe$("test.resources.srcDirs = ['testresources']");
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            this.local$$receiver.line_61zpoe$('');
            var $receiver_3 = 'repositories';
            var rafter_3 = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver_3.length === 0 ? '{' + rafter_3 : $receiver_3 + ' {' + rafter_3);
            this.local$$receiver._indent();
            try {
              var tmp$;
              tmp$ = get_reposToInclude(this.local$this$render).iterator();
              while (tmp$.hasNext()) {
                var repo = tmp$.next();
                if (equals(repo, 'jcenter')) {
                  this.local$$receiver.line_61zpoe$('jcenter()');
                }
                 else {
                  this.local$$receiver.line_61zpoe$("maven { url '" + repo + "' }");
                }
              }
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            this.local$$receiver.line_61zpoe$('');
            var $receiver_4 = 'dependencies';
            var rafter_4 = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver_4.length === 0 ? '{' + rafter_4 : $receiver_4 + ' {' + rafter_4);
            this.local$$receiver._indent();
            try {
              this.local$$receiver.linedeferred_yot30u$(BuildFilesGradle$render$lambda$lambda$lambda(this.local$this$render));
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            this.local$$receiver.line_61zpoe$('');
            return this.local$$receiver.line_61zpoe$("kotlin.experimental.coroutines = 'enable'");
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesGradle$render$lambda_0(closure$info_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_0(closure$info_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_0(closure$info_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_0.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_0;
  Coroutine$BuildFilesGradle$render$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$$receiver.line_61zpoe$("rootProject.name = '" + this.local$closure$info.artifactName + "'");
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesGradle$render$lambda_1(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_1(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_1(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_1.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_1;
  Coroutine$BuildFilesGradle$render$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('gradle/gradlew', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesGradle$render$lambda_2(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_2(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_2(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_2.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_2;
  Coroutine$BuildFilesGradle$render$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('gradle/gradlew.bat', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesGradle$render$lambda_3(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_3(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_3(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_3.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_3;
  Coroutine$BuildFilesGradle$render$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('gradle/gradle/wrapper/gradle-wrapper.jar', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesGradle$render$lambda_4(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_4(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_4(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_4.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_4;
  Coroutine$BuildFilesGradle$render$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('gradle/gradle/wrapper/gradle-wrapper.properties', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BuildFilesGradle.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileText_7k8vha$('build.gradle', void 0, void 0, BuildFilesGradle$render$lambda(info, $receiver));
    $receiver.fileText_7k8vha$('settings.gradle', void 0, void 0, BuildFilesGradle$render$lambda_0(info));
    if (info.includeWrapper) {
      $receiver.fileBinary_qk5z91$('gradlew', void 0, toInt('755', 8), BuildFilesGradle$render$lambda_1(info));
      $receiver.fileBinary_qk5z91$('gradlew.bat', void 0, void 0, BuildFilesGradle$render$lambda_2(info));
      $receiver.fileBinary_qk5z91$('gradle/wrapper/gradle-wrapper.jar', void 0, void 0, BuildFilesGradle$render$lambda_3(info));
      $receiver.fileBinary_qk5z91$('gradle/wrapper/gradle-wrapper.properties', void 0, void 0, BuildFilesGradle$render$lambda_4(info));
    }
  };
  BuildFilesGradle.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BuildFilesGradle',
    interfaces: [Block]
  };
  var BuildFilesGradle_instance = null;
  function BuildFilesGradle_getInstance() {
    if (BuildFilesGradle_instance === null) {
      new BuildFilesGradle();
    }
    return BuildFilesGradle_instance;
  }
  function BuildFilesMaven() {
    BuildFilesMaven_instance = this;
    Block.call(this, []);
  }
  function BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda$lambda(closure$index, this$, closure$repoUrl) {
    return function ($receiver) {
      var $receiver_0 = '<repository>';
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = Regex_init('<(\\w+)').find_905azu$($receiver_0)) != null ? tmp$.groupValues : null) != null ? getOrNull(tmp$_0, 1) : null) != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init('Invalid XML tag'.toString());
      }
      var tagName = tmp$_2;
      $receiver.indenter.line_61zpoe$($receiver_0);
      var $this = $receiver.indenter;
      $this._indent();
      try {
        var closure$index_0 = closure$index;
        var this$_0 = this$;
        var closure$repoUrl_0 = closure$repoUrl;
        this$_0.line_61zpoe$('<id>repo' + closure$index_0 + '<\/id>');
        this$_0.line_61zpoe$('<url>' + closure$repoUrl_0 + '<\/url>');
        this$_0.line_61zpoe$('<releases><enabled>true<\/enabled><\/releases>');
        this$_0.line_61zpoe$('<snapshots><enabled>true<\/enabled><\/snapshots>');
      }
      finally {
        $this._unindent();
      }
      $receiver.indenter.line_61zpoe$('<\/' + tagName + '>');
      return Unit;
    };
  }
  function BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda(this$render) {
    return function ($receiver) {
      var index = 0;
      for (var tmp$ = get_reposToInclude(this$render).iterator(); tmp$.hasNext(); ++index) {
        var repo = tmp$.next();
        var tmp$_0;
        if (equals(repo, 'jcenter'))
          tmp$_0 = 'https://jcenter.bintray.com';
        else
          tmp$_0 = repo;
        var repoUrl = tmp$_0;
        xml($receiver, BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda$lambda(index, $receiver, repoUrl));
      }
      return Unit;
    };
  }
  function BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$dep, this$, closure$mvnVersion, closure$test) {
    return function ($receiver) {
      var $receiver_0 = '<dependency>';
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = Regex_init('<(\\w+)').find_905azu$($receiver_0)) != null ? tmp$.groupValues : null) != null ? getOrNull(tmp$_0, 1) : null) != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init('Invalid XML tag'.toString());
      }
      var tagName = tmp$_2;
      $receiver.indenter.line_61zpoe$($receiver_0);
      var $this = $receiver.indenter;
      $this._indent();
      try {
        var closure$dep_0 = closure$dep;
        var this$_0 = this$;
        var closure$mvnVersion_0 = closure$mvnVersion;
        var closure$test_0 = closure$test;
        this$_0.line_61zpoe$('<groupId>' + toString(closure$dep_0.group) + '<\/groupId>');
        this$_0.line_61zpoe$('<artifactId>' + toString(closure$dep_0.name) + '<\/artifactId>');
        this$_0.line_61zpoe$('<version>' + closure$mvnVersion_0 + '<\/version>');
        if (closure$test_0) {
          this$_0.line_61zpoe$('<scope>test<\/scope>');
        }
      }
      finally {
        $this._unindent();
      }
      $receiver.indenter.line_61zpoe$('<\/' + tagName + '>');
      return Unit;
    };
  }
  function BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda_0(this$render) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = listOf([to(get_compileDependencies(this$render), false), to(get_testDependencies(this$render), true)]).iterator();
      while (tmp$.hasNext()) {
        var tmp$_2 = tmp$.next();
        var deps = tmp$_2.component1()
        , test = tmp$_2.component2();
        tmp$_0 = deps.iterator();
        while (tmp$_0.hasNext()) {
          var dep = tmp$_0.next();
          var version = (tmp$_1 = dep.version) != null ? tmp$_1 : '';
          var mvnVersion = startsWith(version, '$') ? '${' + version.substring(1) + '}' : version;
          xml($receiver, BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda$lambda_0(dep, $receiver, mvnVersion, test));
        }
      }
      return Unit;
    };
  }
  function BuildFilesMaven$render$lambda$lambda(this$, closure$info, this$render) {
    return function ($receiver) {
      this$.line_61zpoe$('<?xml version="1.0" encoding="UTF-8"?>');
      var $receiver_0 = '<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">';
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = Regex_init('<(\\w+)').find_905azu$($receiver_0)) != null ? tmp$.groupValues : null) != null ? getOrNull(tmp$_0, 1) : null) != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init('Invalid XML tag'.toString());
      }
      var tagName = tmp$_2;
      $receiver.indenter.line_61zpoe$($receiver_0);
      var $this = $receiver.indenter;
      $this._indent();
      try {
        var this$_0 = this$;
        var closure$info_0 = closure$info;
        var this$render_0 = this$render;
        this$_0.line_61zpoe$('<modelVersion>4.0.0<\/modelVersion>');
        this$_0.line_61zpoe$('<groupId>' + closure$info_0.artifactGroup + '<\/groupId>');
        this$_0.line_61zpoe$('<artifactId>' + closure$info_0.artifactName + '<\/artifactId>');
        this$_0.line_61zpoe$('<version>' + closure$info_0.artifactVersion + '<\/version>');
        this$_0.line_61zpoe$('<name>' + closure$info_0.artifactName + '<\/name>');
        this$_0.line_61zpoe$('<description>' + closure$info_0.artifactName + '<\/description>');
        var $receiver_1 = '<properties>';
        var tmp$_3, tmp$_4, tmp$_5;
        var tmp$_6;
        if ((tmp$_5 = (tmp$_4 = (tmp$_3 = Regex_init('<(\\w+)').find_905azu$($receiver_1)) != null ? tmp$_3.groupValues : null) != null ? getOrNull(tmp$_4, 1) : null) != null)
          tmp$_6 = tmp$_5;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_0 = tmp$_6;
        $receiver.indenter.line_61zpoe$($receiver_1);
        var $this_0 = $receiver.indenter;
        $this_0._indent();
        try {
          this$_0.line_61zpoe$('<kotlin_version>1.2.51<\/kotlin_version>');
          this$_0.line_61zpoe$('<ktor_version>' + closure$info_0.ktorVersion + '<\/ktor_version>');
          this$_0.line_61zpoe$('<kotlinx_coroutines_version>0.23.4<\/kotlinx_coroutines_version>');
          this$_0.line_61zpoe$('<logback_version>1.2.1<\/logback_version>');
          this$_0.line_61zpoe$('<project.build.sourceEncoding>UTF-8<\/project.build.sourceEncoding>');
          this$_0.line_61zpoe$('<kotlin.compiler.incremental>true<\/kotlin.compiler.incremental>');
          this$_0.line_61zpoe$('<main.class>' + closure$info_0.developmentEngineFQ + '<\/main.class>');
        }
        finally {
          $this_0._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_0 + '>');
        var $receiver_2 = '<repositories>';
        var tmp$_7, tmp$_8, tmp$_9;
        var tmp$_10;
        if ((tmp$_9 = (tmp$_8 = (tmp$_7 = Regex_init('<(\\w+)').find_905azu$($receiver_2)) != null ? tmp$_7.groupValues : null) != null ? getOrNull(tmp$_8, 1) : null) != null)
          tmp$_10 = tmp$_9;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_1 = tmp$_10;
        $receiver.indenter.line_61zpoe$($receiver_2);
        var $this_1 = $receiver.indenter;
        $this_1._indent();
        try {
          this$_0.linedeferred_yot30u$(BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda(this$render_0));
        }
        finally {
          $this_1._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_1 + '>');
        var $receiver_3 = '<dependencies>';
        var tmp$_11, tmp$_12, tmp$_13;
        var tmp$_14;
        if ((tmp$_13 = (tmp$_12 = (tmp$_11 = Regex_init('<(\\w+)').find_905azu$($receiver_3)) != null ? tmp$_11.groupValues : null) != null ? getOrNull(tmp$_12, 1) : null) != null)
          tmp$_14 = tmp$_13;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_2 = tmp$_14;
        $receiver.indenter.line_61zpoe$($receiver_3);
        var $this_2 = $receiver.indenter;
        $this_2._indent();
        try {
          this$_0.linedeferred_yot30u$(BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda_0(this$render_0));
        }
        finally {
          $this_2._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_2 + '>');
        var tmp$_15, tmp$_16, tmp$_17;
        var tmp$_18;
        if ((tmp$_17 = (tmp$_16 = (tmp$_15 = Regex_init('<(\\w+)').find_905azu$('<build>')) != null ? tmp$_15.groupValues : null) != null ? getOrNull(tmp$_16, 1) : null) != null)
          tmp$_18 = tmp$_17;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_3 = tmp$_18;
        $receiver.indenter.line_61zpoe$('<build>');
        var $this_3 = $receiver.indenter;
        $this_3._indent();
        try {
          this$_0.line_61zpoe$('<sourceDirectory>${project.basedir}/src<\/sourceDirectory>');
          this$_0.line_61zpoe$('<testSourceDirectory>${project.basedir}/test<\/testSourceDirectory>');
          var $receiver_4 = '<resources>';
          var tmp$_19, tmp$_20, tmp$_21;
          var tmp$_22;
          if ((tmp$_21 = (tmp$_20 = (tmp$_19 = Regex_init('<(\\w+)').find_905azu$($receiver_4)) != null ? tmp$_19.groupValues : null) != null ? getOrNull(tmp$_20, 1) : null) != null)
            tmp$_22 = tmp$_21;
          else {
            throw IllegalStateException_init('Invalid XML tag'.toString());
          }
          var tagName_4 = tmp$_22;
          $receiver.indenter.line_61zpoe$($receiver_4);
          var $this_4 = $receiver.indenter;
          $this_4._indent();
          try {
            var $receiver_5 = '<resource>';
            var tmp$_23, tmp$_24, tmp$_25;
            var tmp$_26;
            if ((tmp$_25 = (tmp$_24 = (tmp$_23 = Regex_init('<(\\w+)').find_905azu$($receiver_5)) != null ? tmp$_23.groupValues : null) != null ? getOrNull(tmp$_24, 1) : null) != null)
              tmp$_26 = tmp$_25;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_5 = tmp$_26;
            $receiver.indenter.line_61zpoe$($receiver_5);
            var $this_5 = $receiver.indenter;
            $this_5._indent();
            try {
              this$_0.line_61zpoe$('<directory>${project.basedir}/resources<\/directory>');
            }
            finally {
              $this_5._unindent();
            }
            $receiver.indenter.line_61zpoe$('<\/' + tagName_5 + '>');
          }
          finally {
            $this_4._unindent();
          }
          $receiver.indenter.line_61zpoe$('<\/' + tagName_4 + '>');
          var $receiver_6 = '<plugins>';
          var tmp$_27, tmp$_28, tmp$_29;
          var tmp$_30;
          if ((tmp$_29 = (tmp$_28 = (tmp$_27 = Regex_init('<(\\w+)').find_905azu$($receiver_6)) != null ? tmp$_27.groupValues : null) != null ? getOrNull(tmp$_28, 1) : null) != null)
            tmp$_30 = tmp$_29;
          else {
            throw IllegalStateException_init('Invalid XML tag'.toString());
          }
          var tagName_6 = tmp$_30;
          $receiver.indenter.line_61zpoe$($receiver_6);
          var $this_6 = $receiver.indenter;
          $this_6._indent();
          try {
            var $receiver_7 = '<plugin>';
            var tmp$_31, tmp$_32, tmp$_33;
            var tmp$_34;
            if ((tmp$_33 = (tmp$_32 = (tmp$_31 = Regex_init('<(\\w+)').find_905azu$($receiver_7)) != null ? tmp$_31.groupValues : null) != null ? getOrNull(tmp$_32, 1) : null) != null)
              tmp$_34 = tmp$_33;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_7 = tmp$_34;
            $receiver.indenter.line_61zpoe$($receiver_7);
            var $this_7 = $receiver.indenter;
            $this_7._indent();
            try {
              this$_0.line_61zpoe$('<groupId>org.apache.maven.plugins<\/groupId>');
              this$_0.line_61zpoe$('<artifactId>maven-surefire-plugin<\/artifactId>');
            }
            finally {
              $this_7._unindent();
            }
            $receiver.indenter.line_61zpoe$('<\/' + tagName_7 + '>');
            var $receiver_8 = '<plugin>';
            var tmp$_35, tmp$_36, tmp$_37;
            var tmp$_38;
            if ((tmp$_37 = (tmp$_36 = (tmp$_35 = Regex_init('<(\\w+)').find_905azu$($receiver_8)) != null ? tmp$_35.groupValues : null) != null ? getOrNull(tmp$_36, 1) : null) != null)
              tmp$_38 = tmp$_37;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_8 = tmp$_38;
            $receiver.indenter.line_61zpoe$($receiver_8);
            var $this_8 = $receiver.indenter;
            $this_8._indent();
            try {
              this$_0.line_61zpoe$('<artifactId>maven-compiler-plugin<\/artifactId>');
              this$_0.line_61zpoe$('<configuration><source>1.8<\/source><target>1.8<\/target><\/configuration>');
            }
            finally {
              $this_8._unindent();
            }
            $receiver.indenter.line_61zpoe$('<\/' + tagName_8 + '>');
            var $receiver_9 = '<plugin>';
            var tmp$_39, tmp$_40, tmp$_41;
            var tmp$_42;
            if ((tmp$_41 = (tmp$_40 = (tmp$_39 = Regex_init('<(\\w+)').find_905azu$($receiver_9)) != null ? tmp$_39.groupValues : null) != null ? getOrNull(tmp$_40, 1) : null) != null)
              tmp$_42 = tmp$_41;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_9 = tmp$_42;
            $receiver.indenter.line_61zpoe$($receiver_9);
            var $this_9 = $receiver.indenter;
            $this_9._indent();
            try {
              this$_0.line_61zpoe$('<artifactId>kotlin-maven-plugin<\/artifactId>');
              this$_0.line_61zpoe$('<groupId>org.jetbrains.kotlin<\/groupId>');
              this$_0.line_61zpoe$('<version>${kotlin_version}<\/version>');
              var $receiver_10 = '<executions>';
              var tmp$_43, tmp$_44, tmp$_45;
              var tmp$_46;
              if ((tmp$_45 = (tmp$_44 = (tmp$_43 = Regex_init('<(\\w+)').find_905azu$($receiver_10)) != null ? tmp$_43.groupValues : null) != null ? getOrNull(tmp$_44, 1) : null) != null)
                tmp$_46 = tmp$_45;
              else {
                throw IllegalStateException_init('Invalid XML tag'.toString());
              }
              var tagName_10 = tmp$_46;
              $receiver.indenter.line_61zpoe$($receiver_10);
              var $this_10 = $receiver.indenter;
              $this_10._indent();
              try {
                var tmp$_47;
                tmp$_47 = listOf([false, true]).iterator();
                while (tmp$_47.hasNext()) {
                  var test = tmp$_47.next();
                  var name = test ? 'test-compile' : 'compile';
                  var $receiver_11 = '<execution>';
                  var tmp$_48, tmp$_49, tmp$_50;
                  var tmp$_51;
                  if ((tmp$_50 = (tmp$_49 = (tmp$_48 = Regex_init('<(\\w+)').find_905azu$($receiver_11)) != null ? tmp$_48.groupValues : null) != null ? getOrNull(tmp$_49, 1) : null) != null)
                    tmp$_51 = tmp$_50;
                  else {
                    throw IllegalStateException_init('Invalid XML tag'.toString());
                  }
                  var tagName_11 = tmp$_51;
                  $receiver.indenter.line_61zpoe$($receiver_11);
                  var $this_11 = $receiver.indenter;
                  $this_11._indent();
                  try {
                    this$_0.line_61zpoe$('<id>' + name + '<\/id>');
                    this$_0.line_61zpoe$('<goals><goal>' + name + '<\/goal><\/goals>');
                    var $receiver_12 = '<configuration>';
                    var tmp$_52, tmp$_53, tmp$_54;
                    var tmp$_55;
                    if ((tmp$_54 = (tmp$_53 = (tmp$_52 = Regex_init('<(\\w+)').find_905azu$($receiver_12)) != null ? tmp$_52.groupValues : null) != null ? getOrNull(tmp$_53, 1) : null) != null)
                      tmp$_55 = tmp$_54;
                    else {
                      throw IllegalStateException_init('Invalid XML tag'.toString());
                    }
                    var tagName_12 = tmp$_55;
                    $receiver.indenter.line_61zpoe$($receiver_12);
                    var $this_12 = $receiver.indenter;
                    $this_12._indent();
                    try {
                      this$_0.line_61zpoe$('<experimentalCoroutines>enable<\/experimentalCoroutines>');
                    }
                    finally {
                      $this_12._unindent();
                    }
                    $receiver.indenter.line_61zpoe$('<\/' + tagName_12 + '>');
                  }
                  finally {
                    $this_11._unindent();
                  }
                  $receiver.indenter.line_61zpoe$('<\/' + tagName_11 + '>');
                }
              }
              finally {
                $this_10._unindent();
              }
              $receiver.indenter.line_61zpoe$('<\/' + tagName_10 + '>');
            }
            finally {
              $this_9._unindent();
            }
            $receiver.indenter.line_61zpoe$('<\/' + tagName_9 + '>');
            var $receiver_13 = '<plugin>';
            var tmp$_56, tmp$_57, tmp$_58;
            var tmp$_59;
            if ((tmp$_58 = (tmp$_57 = (tmp$_56 = Regex_init('<(\\w+)').find_905azu$($receiver_13)) != null ? tmp$_56.groupValues : null) != null ? getOrNull(tmp$_57, 1) : null) != null)
              tmp$_59 = tmp$_58;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_13 = tmp$_59;
            $receiver.indenter.line_61zpoe$($receiver_13);
            var $this_13 = $receiver.indenter;
            $this_13._indent();
            try {
              this$_0.line_61zpoe$('<groupId>org.apache.maven.plugins<\/groupId>');
              this$_0.line_61zpoe$('<artifactId>maven-jar-plugin<\/artifactId>');
              this$_0.line_61zpoe$('<version>2.6<\/version>');
              var $receiver_14 = '<configuration>';
              var tmp$_60, tmp$_61, tmp$_62;
              var tmp$_63;
              if ((tmp$_62 = (tmp$_61 = (tmp$_60 = Regex_init('<(\\w+)').find_905azu$($receiver_14)) != null ? tmp$_60.groupValues : null) != null ? getOrNull(tmp$_61, 1) : null) != null)
                tmp$_63 = tmp$_62;
              else {
                throw IllegalStateException_init('Invalid XML tag'.toString());
              }
              var tagName_14 = tmp$_63;
              $receiver.indenter.line_61zpoe$($receiver_14);
              var $this_14 = $receiver.indenter;
              $this_14._indent();
              try {
                var $receiver_15 = '<archive>';
                var tmp$_64, tmp$_65, tmp$_66;
                var tmp$_67;
                if ((tmp$_66 = (tmp$_65 = (tmp$_64 = Regex_init('<(\\w+)').find_905azu$($receiver_15)) != null ? tmp$_64.groupValues : null) != null ? getOrNull(tmp$_65, 1) : null) != null)
                  tmp$_67 = tmp$_66;
                else {
                  throw IllegalStateException_init('Invalid XML tag'.toString());
                }
                var tagName_15 = tmp$_67;
                $receiver.indenter.line_61zpoe$($receiver_15);
                var $this_15 = $receiver.indenter;
                $this_15._indent();
                try {
                  var $receiver_16 = '<manifest>';
                  var tmp$_68, tmp$_69, tmp$_70;
                  var tmp$_71;
                  if ((tmp$_70 = (tmp$_69 = (tmp$_68 = Regex_init('<(\\w+)').find_905azu$($receiver_16)) != null ? tmp$_68.groupValues : null) != null ? getOrNull(tmp$_69, 1) : null) != null)
                    tmp$_71 = tmp$_70;
                  else {
                    throw IllegalStateException_init('Invalid XML tag'.toString());
                  }
                  var tagName_16 = tmp$_71;
                  $receiver.indenter.line_61zpoe$($receiver_16);
                  var $this_16 = $receiver.indenter;
                  $this_16._indent();
                  try {
                    this$_0.line_61zpoe$('<addClasspath>true<\/addClasspath>');
                    this$_0.line_61zpoe$('<mainClass>${main.class}<\/mainClass>');
                  }
                  finally {
                    $this_16._unindent();
                  }
                  $receiver.indenter.line_61zpoe$('<\/' + tagName_16 + '>');
                }
                finally {
                  $this_15._unindent();
                }
                $receiver.indenter.line_61zpoe$('<\/' + tagName_15 + '>');
              }
              finally {
                $this_14._unindent();
              }
              $receiver.indenter.line_61zpoe$('<\/' + tagName_14 + '>');
            }
            finally {
              $this_13._unindent();
            }
            $receiver.indenter.line_61zpoe$('<\/' + tagName_13 + '>');
            var $receiver_17 = '<plugin>';
            var tmp$_72, tmp$_73, tmp$_74;
            var tmp$_75;
            if ((tmp$_74 = (tmp$_73 = (tmp$_72 = Regex_init('<(\\w+)').find_905azu$($receiver_17)) != null ? tmp$_72.groupValues : null) != null ? getOrNull(tmp$_73, 1) : null) != null)
              tmp$_75 = tmp$_74;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_17 = tmp$_75;
            $receiver.indenter.line_61zpoe$($receiver_17);
            var $this_17 = $receiver.indenter;
            $this_17._indent();
            try {
              this$_0.line_61zpoe$('<groupId>org.apache.maven.plugins<\/groupId>');
              this$_0.line_61zpoe$('<artifactId>maven-assembly-plugin<\/artifactId>');
              this$_0.line_61zpoe$('<version>2.6<\/version>');
              var $receiver_18 = '<executions>';
              var tmp$_76, tmp$_77, tmp$_78;
              var tmp$_79;
              if ((tmp$_78 = (tmp$_77 = (tmp$_76 = Regex_init('<(\\w+)').find_905azu$($receiver_18)) != null ? tmp$_76.groupValues : null) != null ? getOrNull(tmp$_77, 1) : null) != null)
                tmp$_79 = tmp$_78;
              else {
                throw IllegalStateException_init('Invalid XML tag'.toString());
              }
              var tagName_18 = tmp$_79;
              $receiver.indenter.line_61zpoe$($receiver_18);
              var $this_18 = $receiver.indenter;
              $this_18._indent();
              try {
                var $receiver_19 = '<execution>';
                var tmp$_80, tmp$_81, tmp$_82;
                var tmp$_83;
                if ((tmp$_82 = (tmp$_81 = (tmp$_80 = Regex_init('<(\\w+)').find_905azu$($receiver_19)) != null ? tmp$_80.groupValues : null) != null ? getOrNull(tmp$_81, 1) : null) != null)
                  tmp$_83 = tmp$_82;
                else {
                  throw IllegalStateException_init('Invalid XML tag'.toString());
                }
                var tagName_19 = tmp$_83;
                $receiver.indenter.line_61zpoe$($receiver_19);
                var $this_19 = $receiver.indenter;
                $this_19._indent();
                try {
                  this$_0.line_61zpoe$('<id>make-assembly<\/id>');
                  this$_0.line_61zpoe$('<phase>package<\/phase>');
                  this$_0.line_61zpoe$('<goals> <goal>single<\/goal> <\/goals>');
                  var $receiver_20 = '<configuration>';
                  var tmp$_84, tmp$_85, tmp$_86;
                  var tmp$_87;
                  if ((tmp$_86 = (tmp$_85 = (tmp$_84 = Regex_init('<(\\w+)').find_905azu$($receiver_20)) != null ? tmp$_84.groupValues : null) != null ? getOrNull(tmp$_85, 1) : null) != null)
                    tmp$_87 = tmp$_86;
                  else {
                    throw IllegalStateException_init('Invalid XML tag'.toString());
                  }
                  var tagName_20 = tmp$_87;
                  $receiver.indenter.line_61zpoe$($receiver_20);
                  var $this_20 = $receiver.indenter;
                  $this_20._indent();
                  try {
                    var $receiver_21 = '<archive>';
                    var tmp$_88, tmp$_89, tmp$_90;
                    var tmp$_91;
                    if ((tmp$_90 = (tmp$_89 = (tmp$_88 = Regex_init('<(\\w+)').find_905azu$($receiver_21)) != null ? tmp$_88.groupValues : null) != null ? getOrNull(tmp$_89, 1) : null) != null)
                      tmp$_91 = tmp$_90;
                    else {
                      throw IllegalStateException_init('Invalid XML tag'.toString());
                    }
                    var tagName_21 = tmp$_91;
                    $receiver.indenter.line_61zpoe$($receiver_21);
                    var $this_21 = $receiver.indenter;
                    $this_21._indent();
                    try {
                      var $receiver_22 = '<manifest>';
                      var tmp$_92, tmp$_93, tmp$_94;
                      var tmp$_95;
                      if ((tmp$_94 = (tmp$_93 = (tmp$_92 = Regex_init('<(\\w+)').find_905azu$($receiver_22)) != null ? tmp$_92.groupValues : null) != null ? getOrNull(tmp$_93, 1) : null) != null)
                        tmp$_95 = tmp$_94;
                      else {
                        throw IllegalStateException_init('Invalid XML tag'.toString());
                      }
                      var tagName_22 = tmp$_95;
                      $receiver.indenter.line_61zpoe$($receiver_22);
                      var $this_22 = $receiver.indenter;
                      $this_22._indent();
                      try {
                        this$_0.line_61zpoe$('<mainClass>${main.class}<\/mainClass>');
                      }
                      finally {
                        $this_22._unindent();
                      }
                      $receiver.indenter.line_61zpoe$('<\/' + tagName_22 + '>');
                    }
                    finally {
                      $this_21._unindent();
                    }
                    $receiver.indenter.line_61zpoe$('<\/' + tagName_21 + '>');
                    var $receiver_23 = '<descriptorRefs>';
                    var tmp$_96, tmp$_97, tmp$_98;
                    var tmp$_99;
                    if ((tmp$_98 = (tmp$_97 = (tmp$_96 = Regex_init('<(\\w+)').find_905azu$($receiver_23)) != null ? tmp$_96.groupValues : null) != null ? getOrNull(tmp$_97, 1) : null) != null)
                      tmp$_99 = tmp$_98;
                    else {
                      throw IllegalStateException_init('Invalid XML tag'.toString());
                    }
                    var tagName_23 = tmp$_99;
                    $receiver.indenter.line_61zpoe$($receiver_23);
                    var $this_23 = $receiver.indenter;
                    $this_23._indent();
                    try {
                      this$_0.line_61zpoe$('<descriptorRef>jar-with-dependencies<\/descriptorRef>');
                    }
                    finally {
                      $this_23._unindent();
                    }
                    $receiver.indenter.line_61zpoe$('<\/' + tagName_23 + '>');
                  }
                  finally {
                    $this_20._unindent();
                  }
                  $receiver.indenter.line_61zpoe$('<\/' + tagName_20 + '>');
                }
                finally {
                  $this_19._unindent();
                }
                $receiver.indenter.line_61zpoe$('<\/' + tagName_19 + '>');
              }
              finally {
                $this_18._unindent();
              }
              $receiver.indenter.line_61zpoe$('<\/' + tagName_18 + '>');
            }
            finally {
              $this_17._unindent();
            }
            $receiver.indenter.line_61zpoe$('<\/' + tagName_17 + '>');
          }
          finally {
            $this_6._unindent();
          }
          $receiver.indenter.line_61zpoe$('<\/' + tagName_6 + '>');
        }
        finally {
          $this_3._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_3 + '>');
      }
      finally {
        $this._unindent();
      }
      $receiver.indenter.line_61zpoe$('<\/' + tagName + '>');
      return Unit;
    };
  }
  function BuildFilesMaven$render$lambda(closure$info_0, this$render_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda(closure$info_0, this$render_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesMaven$render$lambda(closure$info_0, this$render_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$render = this$render_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$BuildFilesMaven$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesMaven$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesMaven$render$lambda.prototype.constructor = Coroutine$BuildFilesMaven$render$lambda;
  Coroutine$BuildFilesMaven$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return xml(this.local$$receiver, BuildFilesMaven$render$lambda$lambda(this.local$$receiver, this.local$closure$info, this.local$this$render)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesMaven$render$lambda_0(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda_0(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesMaven$render$lambda_0(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesMaven$render$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesMaven$render$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesMaven$render$lambda_0.prototype.constructor = Coroutine$BuildFilesMaven$render$lambda_0;
  Coroutine$BuildFilesMaven$render$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('maven/mvnw', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesMaven$render$lambda_1(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda_1(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesMaven$render$lambda_1(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesMaven$render$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesMaven$render$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesMaven$render$lambda_1.prototype.constructor = Coroutine$BuildFilesMaven$render$lambda_1;
  Coroutine$BuildFilesMaven$render$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('maven/mvnw.cmd', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BuildFilesMaven$render$lambda_2(closure$info_0, closure$file_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda_2(closure$info_0, closure$file_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesMaven$render$lambda_2(closure$info_0, closure$file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$file = closure$file_0;
  }
  Coroutine$BuildFilesMaven$render$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesMaven$render$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesMaven$render$lambda_2.prototype.constructor = Coroutine$BuildFilesMaven$render$lambda_2;
  Coroutine$BuildFilesMaven$render$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('maven/wrapper/' + this.local$closure$file, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BuildFilesMaven.prototype.render_miqy8c$ = function ($receiver, info) {
    var tmp$;
    $receiver.fileText_7k8vha$('pom.xml', void 0, void 0, BuildFilesMaven$render$lambda(info, $receiver));
    if (info.includeWrapper) {
      $receiver.fileBinary_qk5z91$('mvnw', void 0, toInt('755', 8), BuildFilesMaven$render$lambda_0(info));
      $receiver.fileBinary_qk5z91$('mvnw.cmd', void 0, void 0, BuildFilesMaven$render$lambda_1(info));
      tmp$ = listOf(['maven-wrapper.jar', 'maven-wrapper.properties', 'MavenWrapperDownloader.java']).iterator();
      while (tmp$.hasNext()) {
        var file = tmp$.next();
        $receiver.fileBinary_qk5z91$('.mvn/wrapper/' + file, void 0, void 0, BuildFilesMaven$render$lambda_2(info, file));
      }
    }
  };
  BuildFilesMaven.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BuildFilesMaven',
    interfaces: [Block]
  };
  var BuildFilesMaven_instance = null;
  function BuildFilesMaven_getInstance() {
    if (BuildFilesMaven_instance === null) {
      new BuildFilesMaven();
    }
    return BuildFilesMaven_instance;
  }
  function GitIgnoreFile() {
    GitIgnoreFile_instance = this;
    Block.call(this, []);
  }
  function GitIgnoreFile$render$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GitIgnoreFile$render$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$GitIgnoreFile$render$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GitIgnoreFile$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GitIgnoreFile$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GitIgnoreFile$render$lambda.prototype.constructor = Coroutine$GitIgnoreFile$render$lambda;
  Coroutine$GitIgnoreFile$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('/.gradle');
            this.local$$receiver.line_61zpoe$('/.idea');
            this.local$$receiver.line_61zpoe$('/out');
            this.local$$receiver.line_61zpoe$('/build');
            this.local$$receiver.line_61zpoe$('*.iml');
            this.local$$receiver.line_61zpoe$('*.ipr');
            return this.local$$receiver.line_61zpoe$('*.iws');
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GitIgnoreFile.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileText_7k8vha$('.gitignore', void 0, void 0, GitIgnoreFile$render$lambda);
  };
  GitIgnoreFile.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GitIgnoreFile',
    interfaces: [Block]
  };
  var GitIgnoreFile_instance = null;
  function GitIgnoreFile_getInstance() {
    if (GitIgnoreFile_instance === null) {
      new GitIgnoreFile();
    }
    return GitIgnoreFile_instance;
  }
  function LogBackXml() {
    LogBackXml_instance = this;
    Block.call(this, []);
  }
  function LogBackXml$render$lambda$lambda(this$) {
    return function ($receiver) {
      var $receiver_0 = '<configuration>';
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = Regex_init('<(\\w+)').find_905azu$($receiver_0)) != null ? tmp$.groupValues : null) != null ? getOrNull(tmp$_0, 1) : null) != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init('Invalid XML tag'.toString());
      }
      var tagName = tmp$_2;
      $receiver.indenter.line_61zpoe$($receiver_0);
      var $this = $receiver.indenter;
      $this._indent();
      try {
        var this$_0 = this$;
        var $receiver_1 = '<appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">';
        var tmp$_3, tmp$_4, tmp$_5;
        var tmp$_6;
        if ((tmp$_5 = (tmp$_4 = (tmp$_3 = Regex_init('<(\\w+)').find_905azu$($receiver_1)) != null ? tmp$_3.groupValues : null) != null ? getOrNull(tmp$_4, 1) : null) != null)
          tmp$_6 = tmp$_5;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_0 = tmp$_6;
        $receiver.indenter.line_61zpoe$($receiver_1);
        var $this_0 = $receiver.indenter;
        $this_0._indent();
        try {
          var $receiver_2 = '<encoder>';
          var tmp$_7, tmp$_8, tmp$_9;
          var tmp$_10;
          if ((tmp$_9 = (tmp$_8 = (tmp$_7 = Regex_init('<(\\w+)').find_905azu$($receiver_2)) != null ? tmp$_7.groupValues : null) != null ? getOrNull(tmp$_8, 1) : null) != null)
            tmp$_10 = tmp$_9;
          else {
            throw IllegalStateException_init('Invalid XML tag'.toString());
          }
          var tagName_1 = tmp$_10;
          $receiver.indenter.line_61zpoe$($receiver_2);
          var $this_1 = $receiver.indenter;
          $this_1._indent();
          try {
            this$_0.line_61zpoe$('<pattern>%d{YYYY-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n<\/pattern>');
          }
          finally {
            $this_1._unindent();
          }
          $receiver.indenter.line_61zpoe$('<\/' + tagName_1 + '>');
        }
        finally {
          $this_0._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_0 + '>');
        var $receiver_3 = '<root level="trace">';
        var tmp$_11, tmp$_12, tmp$_13;
        var tmp$_14;
        if ((tmp$_13 = (tmp$_12 = (tmp$_11 = Regex_init('<(\\w+)').find_905azu$($receiver_3)) != null ? tmp$_11.groupValues : null) != null ? getOrNull(tmp$_12, 1) : null) != null)
          tmp$_14 = tmp$_13;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_2 = tmp$_14;
        $receiver.indenter.line_61zpoe$($receiver_3);
        var $this_2 = $receiver.indenter;
        $this_2._indent();
        try {
          this$_0.line_61zpoe$('<appender-ref ref="STDOUT"/>');
        }
        finally {
          $this_2._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_2 + '>');
        this$_0.line_61zpoe$('<logger name="org.eclipse.jetty" level="INFO"/>');
        this$_0.line_61zpoe$('<logger name="io.netty" level="INFO"/>');
      }
      finally {
        $this._unindent();
      }
      $receiver.indenter.line_61zpoe$('<\/' + tagName + '>');
      return Unit;
    };
  }
  function LogBackXml$render$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$LogBackXml$render$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$LogBackXml$render$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$LogBackXml$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LogBackXml$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LogBackXml$render$lambda.prototype.constructor = Coroutine$LogBackXml$render$lambda;
  Coroutine$LogBackXml$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return xml(this.local$$receiver, LogBackXml$render$lambda$lambda(this.local$$receiver)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  LogBackXml.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileText_7k8vha$('resources/logback.xml', void 0, void 0, LogBackXml$render$lambda);
  };
  LogBackXml.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LogBackXml',
    interfaces: [Block]
  };
  var LogBackXml_instance = null;
  function LogBackXml_getInstance() {
    if (LogBackXml_instance === null) {
      new LogBackXml();
    }
    return LogBackXml_instance;
  }
  function JsonRule() {
    JsonRule$Companion_getInstance();
  }
  function JsonRule$RuleList() {
    JsonRule.call(this);
  }
  JsonRule$RuleList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleList',
    interfaces: [JsonRule]
  };
  function JsonRule$MinMaxDouble() {
    JsonRule.call(this);
  }
  Object.defineProperty(JsonRule$MinMaxDouble.prototype, 'valueAsInt', {
    get: function () {
      return numberToInt(this.value);
    }
  });
  JsonRule$MinMaxDouble.prototype.toString_xo1ogr$ = function (clazz) {
    if (equals(clazz, PrimitiveClasses$intClass))
      return this.valueAsInt.toString();
    else
      return this.value.toString();
  };
  JsonRule$MinMaxDouble.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinMaxDouble',
    interfaces: [JsonRule]
  };
  function JsonRule$MinMaxInt() {
    JsonRule.call(this);
  }
  JsonRule$MinMaxInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinMaxInt',
    interfaces: [JsonRule]
  };
  function JsonRule$MinInt() {
    JsonRule$MinMaxInt.call(this);
  }
  JsonRule$MinInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinInt',
    interfaces: [JsonRule$MinMaxInt]
  };
  function JsonRule$MaxInt() {
    JsonRule$MinMaxInt.call(this);
  }
  JsonRule$MaxInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxInt',
    interfaces: [JsonRule$MinMaxInt]
  };
  function JsonRule$MinLength(value) {
    JsonRule$MinInt.call(this);
    this.value_sq9swx$_0 = value;
  }
  Object.defineProperty(JsonRule$MinLength.prototype, 'value', {
    get: function () {
      return this.value_sq9swx$_0;
    }
  });
  JsonRule$MinLength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinLength',
    interfaces: [JsonRule$MinInt]
  };
  function JsonRule$MinItems(value) {
    JsonRule$MinInt.call(this);
    this.value_xixsnr$_0 = value;
  }
  Object.defineProperty(JsonRule$MinItems.prototype, 'value', {
    get: function () {
      return this.value_xixsnr$_0;
    }
  });
  JsonRule$MinItems.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinItems',
    interfaces: [JsonRule$MinInt]
  };
  function JsonRule$MinProperties(value) {
    JsonRule$MinInt.call(this);
    this.value_drteoe$_0 = value;
  }
  Object.defineProperty(JsonRule$MinProperties.prototype, 'value', {
    get: function () {
      return this.value_drteoe$_0;
    }
  });
  JsonRule$MinProperties.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MinProperties',
    interfaces: [JsonRule$MinInt]
  };
  function JsonRule$MaxLength(value) {
    JsonRule$MaxInt.call(this);
    this.value_ro8voz$_0 = value;
  }
  Object.defineProperty(JsonRule$MaxLength.prototype, 'value', {
    get: function () {
      return this.value_ro8voz$_0;
    }
  });
  JsonRule$MaxLength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxLength',
    interfaces: [JsonRule$MaxInt]
  };
  function JsonRule$MaxItems(value) {
    JsonRule$MaxInt.call(this);
    this.value_f5t8hx$_0 = value;
  }
  Object.defineProperty(JsonRule$MaxItems.prototype, 'value', {
    get: function () {
      return this.value_f5t8hx$_0;
    }
  });
  JsonRule$MaxItems.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxItems',
    interfaces: [JsonRule$MaxInt]
  };
  function JsonRule$MaxProperties(value) {
    JsonRule$MaxInt.call(this);
    this.value_437540$_0 = value;
  }
  Object.defineProperty(JsonRule$MaxProperties.prototype, 'value', {
    get: function () {
      return this.value_437540$_0;
    }
  });
  JsonRule$MaxProperties.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxProperties',
    interfaces: [JsonRule$MaxInt]
  };
  function JsonRule$Not(rule) {
    JsonRule.call(this);
    this.rule = rule;
  }
  JsonRule$Not.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Not',
    interfaces: [JsonRule]
  };
  function JsonRule$AllOf(rules) {
    JsonRule$RuleList.call(this);
    this.rules_b01crr$_0 = rules;
  }
  Object.defineProperty(JsonRule$AllOf.prototype, 'rules', {
    get: function () {
      return this.rules_b01crr$_0;
    }
  });
  JsonRule$AllOf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AllOf',
    interfaces: [JsonRule$RuleList]
  };
  function JsonRule$AnyOf(rules) {
    JsonRule$RuleList.call(this);
    this.rules_tdhdta$_0 = rules;
  }
  Object.defineProperty(JsonRule$AnyOf.prototype, 'rules', {
    get: function () {
      return this.rules_tdhdta$_0;
    }
  });
  JsonRule$AnyOf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnyOf',
    interfaces: [JsonRule$RuleList]
  };
  function JsonRule$OneOf(rules) {
    JsonRule$RuleList.call(this);
    this.rules_hstq8c$_0 = rules;
  }
  Object.defineProperty(JsonRule$OneOf.prototype, 'rules', {
    get: function () {
      return this.rules_hstq8c$_0;
    }
  });
  JsonRule$OneOf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OneOf',
    interfaces: [JsonRule$RuleList]
  };
  function JsonRule$MultipleOf(value) {
    JsonRule.call(this);
    this.value = value;
  }
  JsonRule$MultipleOf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultipleOf',
    interfaces: [JsonRule]
  };
  function JsonRule$Minimum(value, exclusive) {
    JsonRule$MinMaxDouble.call(this);
    this.value_llot49$_0 = value;
    this.exclusive_ap5hwc$_0 = exclusive;
  }
  Object.defineProperty(JsonRule$Minimum.prototype, 'value', {
    get: function () {
      return this.value_llot49$_0;
    }
  });
  Object.defineProperty(JsonRule$Minimum.prototype, 'exclusive', {
    get: function () {
      return this.exclusive_ap5hwc$_0;
    }
  });
  JsonRule$Minimum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Minimum',
    interfaces: [JsonRule$MinMaxDouble]
  };
  function JsonRule$Maximum(value, exclusive) {
    JsonRule$MinMaxDouble.call(this);
    this.value_aqktg7$_0 = value;
    this.exclusive_vc7jbe$_0 = exclusive;
  }
  Object.defineProperty(JsonRule$Maximum.prototype, 'value', {
    get: function () {
      return this.value_aqktg7$_0;
    }
  });
  Object.defineProperty(JsonRule$Maximum.prototype, 'exclusive', {
    get: function () {
      return this.exclusive_vc7jbe$_0;
    }
  });
  JsonRule$Maximum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Maximum',
    interfaces: [JsonRule$MinMaxDouble]
  };
  function JsonRule$Range(min, max, exclusive) {
    JsonRule.call(this);
    this.min = min;
    this.max = max;
    this.exclusive = exclusive;
  }
  JsonRule$Range.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Range',
    interfaces: [JsonRule]
  };
  function JsonRule$UniqueItems() {
    JsonRule$UniqueItems_instance = this;
    JsonRule.call(this);
  }
  JsonRule$UniqueItems.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UniqueItems',
    interfaces: [JsonRule]
  };
  var JsonRule$UniqueItems_instance = null;
  function JsonRule$UniqueItems_getInstance() {
    if (JsonRule$UniqueItems_instance === null) {
      new JsonRule$UniqueItems();
    }
    return JsonRule$UniqueItems_instance;
  }
  function JsonRule$Required() {
    JsonRule$Required_instance = this;
    JsonRule.call(this);
  }
  JsonRule$Required.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Required',
    interfaces: [JsonRule]
  };
  var JsonRule$Required_instance = null;
  function JsonRule$Required_getInstance() {
    if (JsonRule$Required_instance === null) {
      new JsonRule$Required();
    }
    return JsonRule$Required_instance;
  }
  function JsonRule$Pattern(pattern) {
    JsonRule.call(this);
    this.pattern = pattern;
  }
  JsonRule$Pattern.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pattern',
    interfaces: [JsonRule]
  };
  function JsonRule$Enumerable(items) {
    JsonRule.call(this);
    this.items = items;
  }
  JsonRule$Enumerable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Enumerable',
    interfaces: [JsonRule]
  };
  function JsonRule$Companion() {
    JsonRule$Companion_instance = this;
  }
  JsonRule$Companion.prototype.parseOrNull_s8jyv4$ = function (def) {
    var parsed = this.parse_s8jyv4$(def);
    return Kotlin.isType(parsed, JsonRule$RuleList) && parsed.rules.isEmpty() ? null : parsed;
  };
  function JsonRule$Companion$parse$lambda$lambda(it) {
    return Kotlin.isType(it, JsonRule$Minimum) || Kotlin.isType(it, JsonRule$Maximum);
  }
  JsonRule$Companion.prototype.parse_s8jyv4$ = function (def) {
    var $receiver = package$util.DynamicAccess;
    var tmp$;
    var rules = ArrayList_init();
    tmp$ = $receiver.get_strEntries_mzud1t$(def).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.component1()
      , value = tmp$_0.component2();
      switch (key) {
        case 'not':
          var element = new JsonRule$Not(this.parse_s8jyv4$(value));
          rules.add_11rb$(element);
          break;
        case 'allOf':
          addAll(rules, this.get_ruleList_qmoht$(this.parse_s8jyv4$(value)));
          break;
        case 'anyOf':
          var it = new JsonRule$AnyOf(this.get_ruleList_qmoht$(this.parse_s8jyv4$(value)));
          if (!it.rules.isEmpty()) {
            rules.add_11rb$(it);
          }

          break;
        case 'oneOf':
          var it_0 = new JsonRule$OneOf(this.get_ruleList_qmoht$(this.parse_s8jyv4$(value)));
          if (!it_0.rules.isEmpty()) {
            rules.add_11rb$(it_0);
          }

          break;
        case 'multipleOf':
          var element_0 = new JsonRule$MultipleOf($receiver.get_double_mzud1t$(value));
          rules.add_11rb$(element_0);
          break;
        case 'minimum':
          var element_1 = new JsonRule$Minimum($receiver.get_double_mzud1t$(value), $receiver.get_bool_mzud1t$($receiver.get_s2h60f$(def, 'exclusiveMinimum')));
          rules.add_11rb$(element_1);
          break;
        case 'maximum':
          var element_2 = new JsonRule$Maximum($receiver.get_double_mzud1t$(value), $receiver.get_bool_mzud1t$($receiver.get_s2h60f$(def, 'exclusiveMaximum')));
          rules.add_11rb$(element_2);
          break;
        case 'minLength':
          var element_3 = new JsonRule$MinLength($receiver.get_int_mzud1t$(value));
          rules.add_11rb$(element_3);
          break;
        case 'maxLength':
          var element_4 = new JsonRule$MaxLength($receiver.get_int_mzud1t$(value));
          rules.add_11rb$(element_4);
          break;
        case 'minItems':
          var element_5 = new JsonRule$MinItems($receiver.get_int_mzud1t$(value));
          rules.add_11rb$(element_5);
          break;
        case 'maxItems':
          var element_6 = new JsonRule$MaxItems($receiver.get_int_mzud1t$(value));
          rules.add_11rb$(element_6);
          break;
        case 'minProperties':
          var element_7 = new JsonRule$MinProperties($receiver.get_int_mzud1t$(value));
          rules.add_11rb$(element_7);
          break;
        case 'maxProperties':
          var element_8 = new JsonRule$MaxProperties($receiver.get_int_mzud1t$(value));
          rules.add_11rb$(element_8);
          break;
        case 'required':
          break;
        case 'pattern':
          var element_9 = new JsonRule$Pattern(Regex_init($receiver.get_str_mzud1t$(value)));
          rules.add_11rb$(element_9);
          break;
        case 'uniqueItems':
          if ($receiver.get_bool_mzud1t$(value)) {
            var element_10 = JsonRule$UniqueItems_getInstance();
            rules.add_11rb$(element_10);
          }

          break;
        case 'enum':
          var element_11 = new JsonRule$Enumerable(toSet($receiver.get_list_mzud1t$(value)));
          rules.add_11rb$(element_11);
          break;
        default:break;
      }
    }
    var destination = ArrayList_init();
    var tmp$_1;
    tmp$_1 = rules.iterator();
    while (tmp$_1.hasNext()) {
      var element_12 = tmp$_1.next();
      if (Kotlin.isType(element_12, JsonRule$Minimum))
        destination.add_11rb$(element_12);
    }
    var min = firstOrNull(destination);
    var destination_0 = ArrayList_init();
    var tmp$_2;
    tmp$_2 = rules.iterator();
    while (tmp$_2.hasNext()) {
      var element_13 = tmp$_2.next();
      if (Kotlin.isType(element_13, JsonRule$Maximum))
        destination_0.add_11rb$(element_13);
    }
    var max = firstOrNull(destination_0);
    if (min != null && max != null && !min.exclusive) {
      removeAll(rules, JsonRule$Companion$parse$lambda$lambda);
      var element_14 = new JsonRule$Range(min, max, max.exclusive);
      rules.add_11rb$(element_14);
    }
    return rules.size === 1 ? first(rules) : new JsonRule$AllOf(rules);
  };
  JsonRule$Companion.prototype.get_ruleList_qmoht$ = function ($receiver) {
    return Kotlin.isType($receiver, JsonRule$RuleList) ? $receiver.rules : listOf_0($receiver);
  };
  JsonRule$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonRule$Companion_instance = null;
  function JsonRule$Companion_getInstance() {
    if (JsonRule$Companion_instance === null) {
      new JsonRule$Companion();
    }
    return JsonRule$Companion_instance;
  }
  JsonRule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonRule',
    interfaces: []
  };
  function toKotlin$lambda(closure$clazz) {
    return function (it) {
      return toKotlin(it, closure$clazz);
    };
  }
  function toKotlin$lambda_0(closure$clazz) {
    return function (it) {
      return toKotlin(it, closure$clazz);
    };
  }
  function toKotlin$lambda_1(closure$clazz) {
    return function (it) {
      return toKotlin(it, closure$clazz);
    };
  }
  function toKotlin($receiver, clazz) {
    var tmp$;
    if (Kotlin.isType($receiver, JsonRule$Not))
      tmp$ = '!(' + toKotlin($receiver.rule, clazz) + ')';
    else if (Kotlin.isType($receiver, JsonRule$AllOf))
      tmp$ = joinToString($receiver.rules, ' && ', void 0, void 0, void 0, void 0, toKotlin$lambda(clazz));
    else if (Kotlin.isType($receiver, JsonRule$AnyOf))
      tmp$ = joinToString($receiver.rules, ' || ', void 0, void 0, void 0, void 0, toKotlin$lambda_0(clazz));
    else if (Kotlin.isType($receiver, JsonRule$OneOf))
      tmp$ = joinToString($receiver.rules, ' xor ', void 0, void 0, void 0, void 0, toKotlin$lambda_1(clazz));
    else if (Kotlin.isType($receiver, JsonRule$MultipleOf))
      tmp$ = '(it % ' + $receiver.value + ')';
    else if (Kotlin.isType($receiver, JsonRule$Minimum))
      tmp$ = $receiver.exclusive ? 'it > ' + $receiver.toString_xo1ogr$(clazz) : 'it >= ' + $receiver.toString_xo1ogr$(clazz);
    else if (Kotlin.isType($receiver, JsonRule$Maximum))
      tmp$ = $receiver.exclusive ? 'it < ' + $receiver.toString_xo1ogr$(clazz) : 'it <= ' + $receiver.toString_xo1ogr$(clazz);
    else if (Kotlin.isType($receiver, JsonRule$Range))
      tmp$ = $receiver.exclusive ? 'it in ' + $receiver.min.toString_xo1ogr$(clazz) + ' until ' + $receiver.max.toString_xo1ogr$(clazz) : 'it in ' + $receiver.min.toString_xo1ogr$(clazz) + ' .. ' + $receiver.max.toString_xo1ogr$(clazz);
    else if (Kotlin.isType($receiver, JsonRule$MinInt))
      tmp$ = 'it.size >= ' + $receiver.value;
    else if (Kotlin.isType($receiver, JsonRule$MaxInt))
      tmp$ = 'it.size <= ' + $receiver.value;
    else if (Kotlin.isType($receiver, JsonRule$Pattern))
      tmp$ = 'Regex(' + quote($receiver.pattern.pattern) + ').matches(it)';
    else if (Kotlin.isType($receiver, JsonRule$UniqueItems))
      tmp$ = 'it.distinct().size == it.size';
    else if (Kotlin.isType($receiver, JsonRule$Enumerable))
      tmp$ = 'it in ' + get_kquoteLit($receiver.items);
    else {
      throw IllegalStateException_init(('Unsupported ' + $receiver).toString());
    }
    return tmp$;
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function SwaggerGenerator(model) {
    SwaggerGenerator$Companion_getInstance();
    Block.call(this, copyToArray(SwaggerGenerator$Companion_getInstance().buildDepsFromModel_5tkht2$(model)).slice());
    this.model = model;
  }
  function SwaggerGenerator$Companion() {
    SwaggerGenerator$Companion_instance = this;
  }
  SwaggerGenerator$Companion.prototype.buildDepsFromModel_5tkht2$ = function ($receiver) {
    var model = $receiver;
    var out = LinkedHashSet_init();
    var element = ApplicationKt_getInstance();
    out.add_11rb$(element);
    var element_0 = ApplicationConf_getInstance();
    out.add_11rb$(element_0);
    var element_1 = StatusPagesFeature_getInstance();
    out.add_11rb$(element_1);
    var element_2 = RoutingFeature_getInstance();
    out.add_11rb$(element_2);
    var element_3 = ApacheClientEngine_getInstance();
    out.add_11rb$(element_3);
    var element_4 = JsonJacksonFeature_getInstance();
    out.add_11rb$(element_4);
    if (!model.securityDefinitions.isEmpty()) {
      var element_5 = AuthJwtFeature_getInstance();
      out.add_11rb$(element_5);
      var element_6 = AuthFeature_getInstance();
      out.add_11rb$(element_6);
    }
    return out;
  };
  SwaggerGenerator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwaggerGenerator$Companion_instance = null;
  function SwaggerGenerator$Companion_getInstance() {
    if (SwaggerGenerator$Companion_instance === null) {
      new SwaggerGenerator$Companion();
    }
    return SwaggerGenerator$Companion_instance;
  }
  function SwaggerGenerator$render$lambda(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGenerator$render$lambda(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SwaggerGenerator$render$lambda(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$SwaggerGenerator$render$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGenerator$render$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGenerator$render$lambda.prototype.constructor = Coroutine$SwaggerGenerator$render$lambda;
  Coroutine$SwaggerGenerator$render$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('swagger/swagger-util.kt.txt', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SwaggerGenerator$render$lambda_0($receiver) {
    return Unit;
  }
  function SwaggerGenerator$render$lambda_1($receiver) {
    return Unit;
  }
  function SwaggerGenerator$render$lambda_2($receiver) {
    var $receiver_0 = 'exception<HttpException>';
    var suffix = ' cause ->';
    var rafter = suffix.length === 0 ? '' : ' ' + suffix;
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respond(cause.code, cause.description)');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function SwaggerGenerator$render$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    return Unit;
  }
  function SwaggerGenerator$render$lambda$lambda_1(this$SwaggerGenerator) {
    return function ($receiver) {
      this$SwaggerGenerator.renderInterface_dy46pz$($receiver, this$SwaggerGenerator.model);
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda$lambda_2(this$SwaggerGenerator) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$SwaggerGenerator.model.definitions.values.iterator();
      while (tmp$.hasNext()) {
        var def = tmp$.next();
        $receiver.line_61zpoe$('data class ' + def.name + '(');
        $receiver._indent();
        try {
          var this$SwaggerGenerator_0 = this$SwaggerGenerator;
          var props = def.props.values;
          var index = 0;
          for (var tmp$_0 = props.iterator(); tmp$_0.hasNext(); ++index) {
            var prop = tmp$_0.next();
            var comma = index >= (props.size - 1 | 0) ? '' : ',';
            $receiver.line_61zpoe$('val ' + prop.name + ': ' + this$SwaggerGenerator_0.toKotlin_slggk6$(prop.type) + comma);
          }
        }
        finally {
          $receiver._unindent();
        }
        var $receiver_0 = def.propsList;
        var destination = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element.type.rule != null)
            destination.add_11rb$(element);
        }
        var propsWithRules = destination;
        if (!propsWithRules.isEmpty()) {
          $receiver.line_61zpoe$(') {');
          $receiver._indent();
          try {
            var rafter = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$('init'.length === 0 ? '{' + rafter : 'init' + ' {' + rafter);
            $receiver._indent();
            try {
              var tmp$_2;
              tmp$_2 = propsWithRules.iterator();
              while (tmp$_2.hasNext()) {
                var prop_0 = tmp$_2.next();
                $receiver.line_61zpoe$(prop_0.name + '.verifyParam(' + quote(prop_0.name) + ') { ' + toString(prop_0.toRuleString()) + ' }');
              }
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}');
        }
         else {
          $receiver.line_61zpoe$(')');
        }
      }
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda_3(closure$info_0, this$SwaggerGenerator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGenerator$render$lambda_0(closure$info_0, this$SwaggerGenerator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SwaggerGenerator$render$lambda_0(closure$info_0, this$SwaggerGenerator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$SwaggerGenerator = this$SwaggerGenerator_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGenerator$render$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGenerator$render$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGenerator$render$lambda_0.prototype.constructor = Coroutine$SwaggerGenerator$render$lambda_0;
  Coroutine$SwaggerGenerator$render$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_0);
            SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_1(this.local$this$SwaggerGenerator));
            return SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_2(this.local$this$SwaggerGenerator)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SwaggerGenerator$render$lambda_4($receiver) {
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$('jwt'.length === 0 ? '{' + rafter : 'jwt' + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('secret = "TODO-change-this-supersecret-or-use-SECRET-env"');
      $receiver.line_61zpoe$('secret = ${?SECRET}');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function SwaggerGenerator$render$lambda_5($receiver) {
    var $receiver_0 = 'open class MyJWT(val secret: String)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('private val algorithm = Algorithm.HMAC256(secret)');
      $receiver.line_61zpoe$('val verifier = JWT.require(algorithm).build()');
      $receiver.line_61zpoe$('fun sign(name: String): String = JWT.create().withClaim("name", name).sign(algorithm)');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function SwaggerGenerator$render$lambda_6(closure$registerInstances, closure$registerInstancesDecl, this$SwaggerGenerator) {
    return function ($receiver) {
      var tmp$;
      closure$registerInstances.add_11rb$('myjwt');
      var $receiver_0 = closure$registerInstancesDecl;
      var element = 'val myjwt: MyJWT';
      $receiver_0.add_11rb$(element);
      tmp$ = this$SwaggerGenerator.model.securityDefinitions.values.iterator();
      while (tmp$.hasNext()) {
        var sec = tmp$.next();
        $receiver.line_61zpoe$('// ' + joinToString(split_0(sec.description, ['\n']), '\\n'));
        $receiver.line_61zpoe$('// @TODO: Please, edit the application.conf # jwt.secret property and provide a secure random value for it');
        var $receiver_1 = 'jwt(' + quote(sec.id) + ')';
        var rafter = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter : $receiver_1 + ' {' + rafter);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('authSchemes("Bearer", "Token")');
          $receiver.line_61zpoe$('verifier(myjwt.verifier)');
          var $receiver_2 = 'validate';
          var rafter_0 = ''.length === 0 ? '' : ' ' + '';
          $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_0 : $receiver_2 + ' {' + rafter_0);
          $receiver._indent();
          try {
            $receiver.line_61zpoe$('UserIdPrincipal(it.payload.getClaim("name").asString())');
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}' + '');
          unaryPlus_0($receiver);
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
      }
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda_7($receiver) {
    $receiver.line_61zpoe$('val myjwt = MyJWT(secret = environment.config.property("jwt.secret").getString())');
    return Unit;
  }
  function SwaggerGenerator$render$lambda_8(this$SwaggerGenerator, closure$registerInstances) {
    return function ($receiver) {
      $receiver.line_61zpoe$('registerRoutes(' + this$SwaggerGenerator.model.info.classNameServer + '(' + joinToString(closure$registerInstances, ', ') + '))');
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda$lambda_3(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda$lambda_4($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.http.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    return Unit;
  }
  function SwaggerGenerator$render$lambda$lambda_5(this$SwaggerGenerator, closure$registerInstancesDecl) {
    return function ($receiver) {
      this$SwaggerGenerator.renderBackend_621tog$($receiver, this$SwaggerGenerator.model, closure$registerInstancesDecl);
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda_9(closure$info_0, this$SwaggerGenerator_0, closure$registerInstancesDecl_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGenerator$render$lambda_1(closure$info_0, this$SwaggerGenerator_0, closure$registerInstancesDecl_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SwaggerGenerator$render$lambda_1(closure$info_0, this$SwaggerGenerator_0, closure$registerInstancesDecl_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$SwaggerGenerator = this$SwaggerGenerator_0;
    this.local$closure$registerInstancesDecl = closure$registerInstancesDecl_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGenerator$render$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGenerator$render$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGenerator$render$lambda_1.prototype.constructor = Coroutine$SwaggerGenerator$render$lambda_1;
  Coroutine$SwaggerGenerator$render$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_3(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_4);
            return SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_5(this.local$this$SwaggerGenerator, this.local$closure$registerInstancesDecl)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function SwaggerGenerator$render$lambda$lambda_6(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda$lambda_7($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.http.*');
    $receiver.line_61zpoe$('import io.ktor.client.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    return Unit;
  }
  function SwaggerGenerator$render$lambda$lambda_8(this$SwaggerGenerator) {
    return function ($receiver) {
      this$SwaggerGenerator.renderFrontend_dy46pz$($receiver, this$SwaggerGenerator.model);
      return Unit;
    };
  }
  function SwaggerGenerator$render$lambda_10(closure$info_0, this$SwaggerGenerator_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGenerator$render$lambda_2(closure$info_0, this$SwaggerGenerator_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SwaggerGenerator$render$lambda_2(closure$info_0, this$SwaggerGenerator_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$SwaggerGenerator = this$SwaggerGenerator_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGenerator$render$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGenerator$render$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGenerator$render$lambda_2.prototype.constructor = Coroutine$SwaggerGenerator$render$lambda_2;
  Coroutine$SwaggerGenerator$render$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_6(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_7);
            return SEPARATOR(this.local$$receiver, SwaggerGenerator$render$lambda$lambda_8(this.local$this$SwaggerGenerator)), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SwaggerGenerator.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileBinary_qk5z91$('src/io/ktor/swagger/experimental/swagger-util.kt', void 0, void 0, SwaggerGenerator$render$lambda(info));
    addImport($receiver, 'kotlin.reflect.*');
    addImport($receiver, 'java.util.*');
    addImport($receiver, 'io.ktor.swagger.experimental.*');
    addApplicationClasses($receiver, SwaggerGenerator$render$lambda_0);
    addExtensionMethods($receiver, SwaggerGenerator$render$lambda_1);
    addCustomStatusPage($receiver, SwaggerGenerator$render$lambda_2);
    $receiver.fileText_7k8vha$('src/swagger-api.kt', void 0, void 0, SwaggerGenerator$render$lambda_3(info, this));
    var registerInstances = ArrayList_init();
    var registerInstancesDecl = ArrayList_init();
    if (!this.model.securityDefinitions.isEmpty()) {
      addImport($receiver, 'io.ktor.auth.*');
      addImport($receiver, 'io.ktor.auth.jwt.*');
      addImport($receiver, 'com.auth0.jwt.*');
      addImport($receiver, 'com.auth0.jwt.algorithms.*');
      addHoconTop($receiver, SwaggerGenerator$render$lambda_4);
      addApplicationClasses($receiver, SwaggerGenerator$render$lambda_5);
      addAuthProvider($receiver, SwaggerGenerator$render$lambda_6(registerInstances, registerInstancesDecl, this));
      $receiver.prependSeparated_qu2wte$(ApplicationKt_getInstance().MODULE_INSTALL, void 0, SwaggerGenerator$render$lambda_7);
    }
    addRoute($receiver, SwaggerGenerator$render$lambda_8(this, registerInstances));
    $receiver.fileText_7k8vha$('src/swagger-backend.kt', void 0, void 0, SwaggerGenerator$render$lambda_9(info, this, registerInstancesDecl));
    $receiver.fileText_7k8vha$('src/swagger-frontend.kt', void 0, void 0, SwaggerGenerator$render$lambda_10(info, this));
  };
  function SwaggerGenerator$renderResponse$lambda(closure$response, this$SwaggerGenerator) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = closure$response.schema) != null ? tmp$.type : null;
      this$SwaggerGenerator.toKotlinDefault_xq0hum$($receiver, tmp$_0, null);
      return Unit;
    };
  }
  SwaggerGenerator.prototype.renderResponse_181pkm$ = function ($receiver, response) {
    var code = response.intCode;
    if (code === 200) {
      var rindentLevel = $receiver.indentLevel;
      $receiver.line_61zpoe$('call.respond(' + indentString(rindentLevel + 2 | 0, SwaggerGenerator$renderResponse$lambda(response, this)) + ')');
    }
     else {
      var httpStatus = HttpStatusCode$Companion_getInstance().byCode.get_11rb$(code);
      if (httpStatus != null) {
        $receiver.line_61zpoe$('httpException(HttpStatusCode.' + httpStatus.name + ')');
      }
       else {
        $receiver.line_61zpoe$('httpException(' + code + ', ' + quote(response.description) + ')');
      }
    }
  };
  function SwaggerGenerator$renderInterface$lambda$lambda$lambda(it) {
    return quote(it.name);
  }
  function SwaggerGenerator$renderInterface$lambda$lambda$lambda$lambda(closure$param, this$SwaggerGenerator) {
    return function ($receiver) {
      this$SwaggerGenerator.toKotlinDefault_8na47e$($receiver, closure$param.schema, closure$param.default);
      return Unit;
    };
  }
  function SwaggerGenerator$renderInterface$lambda$lambda(closure$path, closure$paths, this$SwaggerGenerator) {
    return function ($receiver) {
      var tmp$;
      $receiver.line_61zpoe$('/**');
      $receiver.line_61zpoe$(' * ' + closure$path.description);
      $receiver.line_61zpoe$(' * ');
      tmp$ = closure$path.parameters.iterator();
      while (tmp$.hasNext()) {
        var param = tmp$.next();
        $receiver.line_61zpoe$(' * @param ' + param.name + ' ' + param.description);
      }
      if (!closure$path.parameters.isEmpty()) {
        $receiver.line_61zpoe$(' * ');
      }
      $receiver.line_61zpoe$(' * @return ' + closure$path.defaultResponse.description);
      $receiver.line_61zpoe$(' */');
      $receiver.line_61zpoe$('@Path(' + quote(closure$paths.path) + ')');
      $receiver.line_61zpoe$('@Method(' + quote(closure$path.method.toUpperCase()) + ')');
      if (!closure$path.security.isEmpty()) {
        $receiver.line_61zpoe$('@Auth(' + joinToString(closure$path.security, ', ', void 0, void 0, void 0, void 0, SwaggerGenerator$renderInterface$lambda$lambda$lambda) + ')');
      }
      $receiver.line_61zpoe$('suspend fun ' + closure$path.methodName + '(');
      $receiver._indent();
      try {
        var closure$path_0 = closure$path;
        var this$SwaggerGenerator_0 = this$SwaggerGenerator;
        var tmp$_0, tmp$_1;
        tmp$_0 = get_metaIter(closure$path_0.parameters).iterator();
        while (tmp$_0.hasNext()) {
          var tmp$_2 = tmp$_0.next();
          var info = tmp$_2.component1()
          , param_0 = tmp$_2.component2();
          var qpname = quote(param_0.name);
          switch (param_0.inside.name) {
            case 'BODY':
              tmp$_1 = '@Body(' + qpname + ')';
              break;
            case 'HEADER':
              tmp$_1 = '@Header(' + qpname + ')';
              break;
            case 'QUERY':
              tmp$_1 = '@Query(' + qpname + ')';
              break;
            case 'PATH':
              tmp$_1 = '@Path(' + qpname + ')';
              break;
            case 'FORM_DATA':
              tmp$_1 = '@FormData(' + qpname + ')';
              break;
            default:tmp$_1 = Kotlin.noWhenBranchMatched();
              break;
          }
          var inAnnotation = tmp$_1;
          var default_0 = param_0.required ? '' : ' = ' + indentStringHere($receiver, SwaggerGenerator$renderInterface$lambda$lambda$lambda$lambda(param_0, this$SwaggerGenerator_0));
          $receiver.line_61zpoe$(inAnnotation + ' ' + param_0.name + ': ' + this$SwaggerGenerator_0.toKotlin_slggk6$(param_0.schema) + default_0 + get_optComma(info));
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('): ' + this$SwaggerGenerator.toKotlin_61zbhy$(closure$path.responseType));
      return Unit;
    };
  }
  SwaggerGenerator.prototype.renderInterface_dy46pz$ = function ($receiver, model) {
    $receiver.line_61zpoe$('/**');
    $receiver.line_61zpoe$(' * ' + model.info.title);
    $receiver.line_61zpoe$(' * ');
    $receiver.line_61zpoe$(' * ' + model.info.description);
    $receiver.line_61zpoe$(' */');
    var $receiver_0 = 'interface ' + model.info.className + ' : SwaggerBaseApi';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var tmp$, tmp$_0;
      tmp$ = model.paths.values.iterator();
      while (tmp$.hasNext()) {
        var paths = tmp$.next();
        tmp$_0 = paths.methodsList.iterator();
        while (tmp$_0.hasNext()) {
          var path = tmp$_0.next();
          SEPARATOR($receiver, SwaggerGenerator$renderInterface$lambda$lambda(path, paths, this));
        }
      }
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
  };
  function SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda(closure$method) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$method.parameters.iterator();
      while (tmp$.hasNext()) {
        var param = tmp$.next();
        var pschema = param.schema;
        var rule = pschema.rule;
        if (rule != null) {
          $receiver.line_61zpoe$('check(' + toKotlin_1(rule, pschema) + ') { ' + quote('Invalid ' + param.name) + ' }');
        }
      }
      return Unit;
    };
  }
  function SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda$lambda(closure$response, this$SwaggerGenerator) {
    return function ($receiver) {
      this$SwaggerGenerator.renderResponse_181pkm$($receiver, closure$response);
      return Unit;
    };
  }
  function SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda_0(closure$method, this$SwaggerGenerator) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$method.errorResponses.iterator();
      while (tmp$.hasNext()) {
        var response = tmp$.next();
        $receiver.line_61zpoe$('if (false) ' + indentString($receiver.indentLevel, SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda$lambda(response, this$SwaggerGenerator)));
      }
      return Unit;
    };
  }
  function SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda$lambda_0(closure$method, this$SwaggerGenerator) {
    return function ($receiver) {
      this$SwaggerGenerator.toKotlinDefault_xq0hum$($receiver, closure$method.responseType, null);
      return Unit;
    };
  }
  function SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda_1(closure$method, this$SwaggerGenerator) {
    return function ($receiver) {
      if (!equals(closure$method.responseType, SwaggerModel$VoidType_getInstance())) {
        $receiver.line_61zpoe$('return ' + indentString($receiver.indentLevel, SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda$lambda_0(closure$method, this$SwaggerGenerator)));
      }
      return Unit;
    };
  }
  function SwaggerGenerator$renderBackend$lambda$lambda(closure$method, this$SwaggerGenerator) {
    return function ($receiver) {
      $receiver.line_61zpoe$('override suspend fun ' + closure$method.methodName + '(');
      $receiver._indent();
      try {
        var closure$method_0 = closure$method;
        var this$SwaggerGenerator_0 = this$SwaggerGenerator;
        var tmp$;
        tmp$ = get_metaIter(closure$method_0.parameters).iterator();
        while (tmp$.hasNext()) {
          var tmp$_0 = tmp$.next();
          var info = tmp$_0.component1()
          , param = tmp$_0.component2();
          $receiver.line_61zpoe$(param.name + ': ' + this$SwaggerGenerator_0.toKotlin_slggk6$(param.schema) + get_optComma(info));
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('): ' + this$SwaggerGenerator.toKotlin_61zbhy$(closure$method.responseType) + ' {');
      $receiver._indent();
      try {
        var closure$method_1 = closure$method;
        var this$SwaggerGenerator_1 = this$SwaggerGenerator;
        SEPARATOR($receiver, SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda(closure$method_1));
        SEPARATOR($receiver, SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda_0(closure$method_1, this$SwaggerGenerator_1));
        SEPARATOR($receiver, SwaggerGenerator$renderBackend$lambda$lambda$lambda$lambda_1(closure$method_1, this$SwaggerGenerator_1));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}');
      return Unit;
    };
  }
  SwaggerGenerator.prototype.renderBackend_621tog$ = function ($receiver, model, registerInstancesDecl) {
    var $receiver_0 = 'class ' + model.info.classNameServer + '(' + joinToString(registerInstancesDecl, ', ') + ') : SwaggerBaseServer, ' + model.info.className;
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var tmp$, tmp$_0;
      tmp$ = model.paths.values.iterator();
      while (tmp$.hasNext()) {
        var paths = tmp$.next();
        tmp$_0 = paths.methodsList.iterator();
        while (tmp$_0.hasNext()) {
          var method = tmp$_0.next();
          SEPARATOR($receiver, SwaggerGenerator$renderBackend$lambda$lambda(method, this));
        }
      }
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
  };
  function SwaggerGenerator$renderFrontend$lambda(closure$model) {
    return function ($receiver) {
      var $receiver_0 = 'interface ' + closure$model.info.classNameClient + ' : ' + closure$model.info.className;
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('fun setToken(token: String)');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function SwaggerGenerator$renderFrontend$lambda_0(closure$model) {
    return function ($receiver) {
      $receiver.line_61zpoe$('fun ' + closure$model.info.classNameClient + '(endpoint: String, client: HttpClient = HttpClient()): ' + closure$model.info.classNameClient + ' = createClient(client, endpoint)');
      return Unit;
    };
  }
  SwaggerGenerator.prototype.renderFrontend_dy46pz$ = function ($receiver, model) {
    SEPARATOR($receiver, SwaggerGenerator$renderFrontend$lambda(model));
    SEPARATOR($receiver, SwaggerGenerator$renderFrontend$lambda_0(model));
  };
  SwaggerGenerator.prototype.toKotlin_slggk6$ = function ($receiver) {
    return this.toKotlin_61zbhy$($receiver.type);
  };
  SwaggerGenerator.prototype.toKotlin_61zbhy$ = function ($receiver) {
    if (Kotlin.isType($receiver, SwaggerModel$OptionalType))
      return this.toKotlin_slggk6$($receiver.type) + '?';
    else if (Kotlin.isType($receiver, SwaggerModel$StringType))
      return 'String';
    else if (Kotlin.isType($receiver, SwaggerModel$PasswordType))
      return 'String';
    else if (Kotlin.isType($receiver, SwaggerModel$DateType))
      return 'Date';
    else if (Kotlin.isType($receiver, SwaggerModel$DateTimeType))
      return 'Date';
    else if (Kotlin.isType($receiver, SwaggerModel$Int32Type))
      return 'Int';
    else if (Kotlin.isType($receiver, SwaggerModel$DoubleType))
      return 'Double';
    else if (Kotlin.isType($receiver, SwaggerModel$Int64Type))
      return 'Long';
    else if (Kotlin.isType($receiver, SwaggerModel$BoolType))
      return 'Boolean';
    else if (Kotlin.isType($receiver, SwaggerModel$NamedObject))
      return $receiver.name;
    else if (Kotlin.isType($receiver, SwaggerModel$ArrayType))
      return 'List<' + this.toKotlin_slggk6$($receiver.items) + '>';
    else if (Kotlin.isType($receiver, SwaggerModel$ObjType))
      return 'Any/*Unsupported ' + $receiver.fields + '*/';
    else if (Kotlin.isType($receiver, SwaggerModel$VoidType))
      return 'Unit';
    else {
      throw IllegalStateException_init(("Unsupported '" + $receiver + "' class=" + Kotlin.getKClassFromExpression($receiver)).toString());
    }
  };
  SwaggerGenerator.prototype.toKotlinDefault_8na47e$ = function ($receiver, type, default_0) {
    this.toKotlinDefault_xq0hum$($receiver, type != null ? type.type : null, default_0);
  };
  function SwaggerGenerator$toKotlinDefault$lambda$lambda(closure$prop, this$SwaggerGenerator) {
    return function ($receiver) {
      this$SwaggerGenerator.toKotlinDefault_8na47e$($receiver, closure$prop, null);
      return Unit;
    };
  }
  function SwaggerGenerator$toKotlinDefault$lambda$lambda_0(closure$prop, this$SwaggerGenerator) {
    return function ($receiver) {
      this$SwaggerGenerator.toKotlinDefault_8na47e$($receiver, closure$prop, null);
      return Unit;
    };
  }
  SwaggerGenerator.prototype.toKotlinDefault_xq0hum$ = function ($receiver, type, default_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    if (type == null) {
      $receiver.line_61zpoe$('null');
    }
     else if (Kotlin.isType(type, SwaggerModel$OptionalType)) {
      $receiver.line_61zpoe$('null');
    }
     else if (Kotlin.isType(type, SwaggerModel$BaseStringType)) {
      $receiver.line_61zpoe$(quote((tmp$ = default_0 != null ? default_0.toString() : null) != null ? tmp$ : ''));
    }
     else if (Kotlin.isType(type, SwaggerModel$DateType)) {
      $receiver.line_61zpoe$('Date()');
    }
     else if (Kotlin.isType(type, SwaggerModel$DateTimeType)) {
      $receiver.line_61zpoe$('Date()');
    }
     else if (Kotlin.isType(type, SwaggerModel$Int32Type)) {
      $receiver.line_61zpoe$(((tmp$_2 = (tmp$_1 = (tmp$_0 = default_0) == null || Kotlin.isNumber(tmp$_0) ? tmp$_0 : null) != null ? numberToInt(tmp$_1) : null) != null ? tmp$_2 : 0).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$DoubleType)) {
      $receiver.line_61zpoe$(((tmp$_5 = (tmp$_4 = (tmp$_3 = default_0) == null || Kotlin.isNumber(tmp$_3) ? tmp$_3 : null) != null ? numberToDouble(tmp$_4) : null) != null ? tmp$_5 : 0.0).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$Int64Type)) {
      $receiver.line_61zpoe$(((tmp$_8 = (tmp$_7 = (tmp$_6 = default_0) == null || Kotlin.isNumber(tmp$_6) ? tmp$_6 : null) != null ? numberToLong(tmp$_7) : null) != null ? tmp$_8 : L0).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$BoolType)) {
      $receiver.line_61zpoe$(((tmp$_10 = (tmp$_9 = default_0) == null || typeof tmp$_9 === 'boolean' ? tmp$_9 : null) != null ? tmp$_10 : false).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$NamedObject)) {
      var def = type.kind;
      $receiver.line_61zpoe$(type.name + '(');
      $receiver._indent();
      try {
        var tmp$_11;
        var props = toList(def.type.fields.entries);
        tmp$_11 = get_metaIter(props).iterator();
        while (tmp$_11.hasNext()) {
          var tmp$_12 = tmp$_11.next();
          var info = tmp$_12.component1()
          , entry = tmp$_12.component2();
          var key = entry.key;
          var prop = entry.value;
          $receiver.line_61zpoe$(key + ' = ' + indentStringHere($receiver, SwaggerGenerator$toKotlinDefault$lambda$lambda(prop, this)) + get_optComma(info));
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$(')');
    }
     else if (Kotlin.isType(type, SwaggerModel$ArrayType)) {
      $receiver.line_61zpoe$('listOf()');
    }
     else if (Kotlin.isType(type, SwaggerModel$ObjType)) {
      $receiver.line_61zpoe$('mapOf(');
      $receiver._indent();
      try {
        var tmp$_13;
        tmp$_13 = get_metaIter(type.fields.entries).iterator();
        while (tmp$_13.hasNext()) {
          var tmp$_14 = tmp$_13.next();
          var info_0 = tmp$_14.component1()
          , entry_0 = tmp$_14.component2();
          var key_0 = entry_0.key;
          var prop_0 = entry_0.value;
          $receiver.line_61zpoe$(quote(key_0) + ' to ' + indentStringHere($receiver, SwaggerGenerator$toKotlinDefault$lambda$lambda_0(prop_0, this)) + get_optComma(info_0));
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$(')');
    }
     else if (Kotlin.isType(type, SwaggerModel$VoidType)) {
      $receiver.line_61zpoe$('Unit');
    }
     else {
      throw IllegalStateException_init(("Unsupported '" + toString(type) + "'").toString());
    }
  };
  SwaggerGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerGenerator',
    interfaces: [Block]
  };
  function get_optComma($receiver) {
    return $receiver.isLast ? '' : ',';
  }
  function SwaggerModel(filename, info, servers, produces, consumes, securityDefinitions, paths, definitions) {
    SwaggerModel$Companion_getInstance();
    this.filename = filename;
    this.info = info;
    this.servers = servers;
    this.produces = produces;
    this.consumes = consumes;
    this.securityDefinitions = securityDefinitions;
    this.paths = paths;
    this.definitions = definitions;
  }
  function SwaggerModel$Server(url, description, variables) {
    this.url = url;
    this.description = description;
    this.variables = variables;
  }
  SwaggerModel$Server.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Server',
    interfaces: []
  };
  SwaggerModel$Server.prototype.component1 = function () {
    return this.url;
  };
  SwaggerModel$Server.prototype.component2 = function () {
    return this.description;
  };
  SwaggerModel$Server.prototype.component3 = function () {
    return this.variables;
  };
  SwaggerModel$Server.prototype.copy_j3bsb7$ = function (url, description, variables) {
    return new SwaggerModel$Server(url === void 0 ? this.url : url, description === void 0 ? this.description : description, variables === void 0 ? this.variables : variables);
  };
  SwaggerModel$Server.prototype.toString = function () {
    return 'Server(url=' + Kotlin.toString(this.url) + (', description=' + Kotlin.toString(this.description)) + (', variables=' + Kotlin.toString(this.variables)) + ')';
  };
  SwaggerModel$Server.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.variables) | 0;
    return result;
  };
  SwaggerModel$Server.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.url, other.url) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.variables, other.variables)))));
  };
  function SwaggerModel$ServerVariable(name, default_0, description, enum_0) {
    this.name = name;
    this.default = default_0;
    this.description = description;
    this.enum = enum_0;
  }
  SwaggerModel$ServerVariable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ServerVariable',
    interfaces: []
  };
  SwaggerModel$ServerVariable.prototype.component1 = function () {
    return this.name;
  };
  SwaggerModel$ServerVariable.prototype.component2 = function () {
    return this.default;
  };
  SwaggerModel$ServerVariable.prototype.component3 = function () {
    return this.description;
  };
  SwaggerModel$ServerVariable.prototype.component4 = function () {
    return this.enum;
  };
  SwaggerModel$ServerVariable.prototype.copy_l56lqi$ = function (name, default_0, description, enum_0) {
    return new SwaggerModel$ServerVariable(name === void 0 ? this.name : name, default_0 === void 0 ? this.default : default_0, description === void 0 ? this.description : description, enum_0 === void 0 ? this.enum : enum_0);
  };
  SwaggerModel$ServerVariable.prototype.toString = function () {
    return 'ServerVariable(name=' + Kotlin.toString(this.name) + (', default=' + Kotlin.toString(this.default)) + (', description=' + Kotlin.toString(this.description)) + (', enum=' + Kotlin.toString(this.enum)) + ')';
  };
  SwaggerModel$ServerVariable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.default) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.enum) | 0;
    return result;
  };
  SwaggerModel$ServerVariable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.default, other.default) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.enum, other.enum)))));
  };
  function SwaggerModel$InfoGenType(type, rule) {
    this.type = type;
    this.rule = rule;
  }
  SwaggerModel$InfoGenType.prototype.toString = function () {
    return this.rule != null ? this.type.toString() + '(' + toString(this.rule) + ')' : this.type.toString();
  };
  SwaggerModel$InfoGenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InfoGenType',
    interfaces: []
  };
  function SwaggerModel$GenType() {
  }
  SwaggerModel$GenType.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GenType',
    interfaces: []
  };
  function SwaggerModel$BasePrimType() {
  }
  SwaggerModel$BasePrimType.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BasePrimType',
    interfaces: [SwaggerModel$GenType]
  };
  function SwaggerModel$BaseStringType() {
    this.ktype_nqxge$_0 = PrimitiveClasses$stringClass;
  }
  Object.defineProperty(SwaggerModel$BaseStringType.prototype, 'ktype', {
    get: function () {
      return this.ktype_nqxge$_0;
    }
  });
  SwaggerModel$BaseStringType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseStringType',
    interfaces: [SwaggerModel$BasePrimType]
  };
  function SwaggerModel$PasswordType() {
    SwaggerModel$PasswordType_instance = this;
    SwaggerModel$BaseStringType.call(this);
  }
  SwaggerModel$PasswordType.prototype.toString = function () {
    return 'String';
  };
  SwaggerModel$PasswordType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PasswordType',
    interfaces: [SwaggerModel$BaseStringType]
  };
  var SwaggerModel$PasswordType_instance = null;
  function SwaggerModel$PasswordType_getInstance() {
    if (SwaggerModel$PasswordType_instance === null) {
      new SwaggerModel$PasswordType();
    }
    return SwaggerModel$PasswordType_instance;
  }
  function SwaggerModel$Base64Type() {
    SwaggerModel$Base64Type_instance = this;
    SwaggerModel$BaseStringType.call(this);
  }
  SwaggerModel$Base64Type.prototype.toString = function () {
    return 'Base64Type';
  };
  SwaggerModel$Base64Type.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Base64Type',
    interfaces: [SwaggerModel$BaseStringType]
  };
  var SwaggerModel$Base64Type_instance = null;
  function SwaggerModel$Base64Type_getInstance() {
    if (SwaggerModel$Base64Type_instance === null) {
      new SwaggerModel$Base64Type();
    }
    return SwaggerModel$Base64Type_instance;
  }
  function SwaggerModel$BinaryStringType() {
    SwaggerModel$BinaryStringType_instance = this;
    SwaggerModel$BaseStringType.call(this);
  }
  SwaggerModel$BinaryStringType.prototype.toString = function () {
    return 'String';
  };
  SwaggerModel$BinaryStringType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BinaryStringType',
    interfaces: [SwaggerModel$BaseStringType]
  };
  var SwaggerModel$BinaryStringType_instance = null;
  function SwaggerModel$BinaryStringType_getInstance() {
    if (SwaggerModel$BinaryStringType_instance === null) {
      new SwaggerModel$BinaryStringType();
    }
    return SwaggerModel$BinaryStringType_instance;
  }
  function SwaggerModel$StringType() {
    SwaggerModel$StringType_instance = this;
    SwaggerModel$BaseStringType.call(this);
  }
  SwaggerModel$StringType.prototype.toString = function () {
    return 'String';
  };
  SwaggerModel$StringType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringType',
    interfaces: [SwaggerModel$BaseStringType]
  };
  var SwaggerModel$StringType_instance = null;
  function SwaggerModel$StringType_getInstance() {
    if (SwaggerModel$StringType_instance === null) {
      new SwaggerModel$StringType();
    }
    return SwaggerModel$StringType_instance;
  }
  function SwaggerModel$VoidType() {
    SwaggerModel$VoidType_instance = this;
    this.ktype_ym9fww$_0 = getKClass(Object.getPrototypeOf(kotlin.Unit).constructor);
  }
  Object.defineProperty(SwaggerModel$VoidType.prototype, 'ktype', {
    get: function () {
      return this.ktype_ym9fww$_0;
    }
  });
  SwaggerModel$VoidType.prototype.toString = function () {
    return 'Unit';
  };
  SwaggerModel$VoidType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VoidType',
    interfaces: [SwaggerModel$GenType]
  };
  var SwaggerModel$VoidType_instance = null;
  function SwaggerModel$VoidType_getInstance() {
    if (SwaggerModel$VoidType_instance === null) {
      new SwaggerModel$VoidType();
    }
    return SwaggerModel$VoidType_instance;
  }
  function SwaggerModel$IntegerType() {
  }
  SwaggerModel$IntegerType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerType',
    interfaces: [SwaggerModel$BasePrimType]
  };
  SwaggerModel.prototype.validate_ujn5f2$ = defineInlineFunction('output.io.ktor.start.swagger.SwaggerModel.validate_ujn5f2$', wrapFunction(function () {
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
    return function ($receiver, validator) {
      if (!validator($receiver))
        throw IllegalArgumentException_init();
      return $receiver;
    };
  }));
  function SwaggerModel$Int32Type() {
    SwaggerModel$Int32Type_instance = this;
    SwaggerModel$IntegerType.call(this);
    this.ktype_u65igw$_0 = PrimitiveClasses$intClass;
  }
  Object.defineProperty(SwaggerModel$Int32Type.prototype, 'ktype', {
    get: function () {
      return this.ktype_u65igw$_0;
    }
  });
  SwaggerModel$Int32Type.prototype.toString = function () {
    return 'Int';
  };
  SwaggerModel$Int32Type.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Int32Type',
    interfaces: [SwaggerModel$IntegerType]
  };
  var SwaggerModel$Int32Type_instance = null;
  function SwaggerModel$Int32Type_getInstance() {
    if (SwaggerModel$Int32Type_instance === null) {
      new SwaggerModel$Int32Type();
    }
    return SwaggerModel$Int32Type_instance;
  }
  function SwaggerModel$Int64Type() {
    SwaggerModel$Int64Type_instance = this;
    SwaggerModel$IntegerType.call(this);
    this.ktype_jvsykh$_0 = getKClass(Long);
  }
  Object.defineProperty(SwaggerModel$Int64Type.prototype, 'ktype', {
    get: function () {
      return this.ktype_jvsykh$_0;
    }
  });
  SwaggerModel$Int64Type.prototype.toString = function () {
    return 'Long';
  };
  SwaggerModel$Int64Type.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Int64Type',
    interfaces: [SwaggerModel$IntegerType]
  };
  var SwaggerModel$Int64Type_instance = null;
  function SwaggerModel$Int64Type_getInstance() {
    if (SwaggerModel$Int64Type_instance === null) {
      new SwaggerModel$Int64Type();
    }
    return SwaggerModel$Int64Type_instance;
  }
  function SwaggerModel$BoolType() {
    SwaggerModel$BoolType_instance = this;
    this.ktype_l5m4ze$_0 = PrimitiveClasses$booleanClass;
  }
  Object.defineProperty(SwaggerModel$BoolType.prototype, 'ktype', {
    get: function () {
      return this.ktype_l5m4ze$_0;
    }
  });
  SwaggerModel$BoolType.prototype.toString = function () {
    return 'Bool';
  };
  SwaggerModel$BoolType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BoolType',
    interfaces: [SwaggerModel$BasePrimType]
  };
  var SwaggerModel$BoolType_instance = null;
  function SwaggerModel$BoolType_getInstance() {
    if (SwaggerModel$BoolType_instance === null) {
      new SwaggerModel$BoolType();
    }
    return SwaggerModel$BoolType_instance;
  }
  function SwaggerModel$FloatType() {
    SwaggerModel$FloatType_instance = this;
    this.ktype_yvbr9q$_0 = PrimitiveClasses$floatClass;
  }
  Object.defineProperty(SwaggerModel$FloatType.prototype, 'ktype', {
    get: function () {
      return this.ktype_yvbr9q$_0;
    }
  });
  SwaggerModel$FloatType.prototype.toString = function () {
    return 'Float';
  };
  SwaggerModel$FloatType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatType',
    interfaces: [SwaggerModel$BasePrimType]
  };
  var SwaggerModel$FloatType_instance = null;
  function SwaggerModel$FloatType_getInstance() {
    if (SwaggerModel$FloatType_instance === null) {
      new SwaggerModel$FloatType();
    }
    return SwaggerModel$FloatType_instance;
  }
  function SwaggerModel$DoubleType() {
    SwaggerModel$DoubleType_instance = this;
    this.ktype_4u8k7h$_0 = PrimitiveClasses$doubleClass;
  }
  Object.defineProperty(SwaggerModel$DoubleType.prototype, 'ktype', {
    get: function () {
      return this.ktype_4u8k7h$_0;
    }
  });
  SwaggerModel$DoubleType.prototype.toString = function () {
    return 'Double';
  };
  SwaggerModel$DoubleType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleType',
    interfaces: [SwaggerModel$BasePrimType]
  };
  var SwaggerModel$DoubleType_instance = null;
  function SwaggerModel$DoubleType_getInstance() {
    if (SwaggerModel$DoubleType_instance === null) {
      new SwaggerModel$DoubleType();
    }
    return SwaggerModel$DoubleType_instance;
  }
  function SwaggerModel$DateType() {
    SwaggerModel$DateType_instance = this;
    this.ktype_6t2d86$_0 = getKClass(Date);
  }
  Object.defineProperty(SwaggerModel$DateType.prototype, 'ktype', {
    get: function () {
      return this.ktype_6t2d86$_0;
    }
  });
  SwaggerModel$DateType.prototype.toString = function () {
    return 'Date';
  };
  SwaggerModel$DateType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DateType',
    interfaces: [SwaggerModel$BasePrimType]
  };
  var SwaggerModel$DateType_instance = null;
  function SwaggerModel$DateType_getInstance() {
    if (SwaggerModel$DateType_instance === null) {
      new SwaggerModel$DateType();
    }
    return SwaggerModel$DateType_instance;
  }
  function SwaggerModel$DateTimeType() {
    SwaggerModel$DateTimeType_instance = this;
    this.ktype_57jwnr$_0 = getKClass(Date);
  }
  Object.defineProperty(SwaggerModel$DateTimeType.prototype, 'ktype', {
    get: function () {
      return this.ktype_57jwnr$_0;
    }
  });
  SwaggerModel$DateTimeType.prototype.toString = function () {
    return 'DateTime';
  };
  SwaggerModel$DateTimeType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DateTimeType',
    interfaces: [SwaggerModel$BasePrimType]
  };
  var SwaggerModel$DateTimeType_instance = null;
  function SwaggerModel$DateTimeType_getInstance() {
    if (SwaggerModel$DateTimeType_instance === null) {
      new SwaggerModel$DateTimeType();
    }
    return SwaggerModel$DateTimeType_instance;
  }
  function SwaggerModel$NamedObject(path, kind) {
    this.path = path;
    this.kind = kind;
    this.ktype_r8xcpc$_0 = PrimitiveClasses$anyClass;
    this.name = substringAfterLast(this.path, 47);
  }
  Object.defineProperty(SwaggerModel$NamedObject.prototype, 'ktype', {
    get: function () {
      return this.ktype_r8xcpc$_0;
    }
  });
  SwaggerModel$NamedObject.prototype.toString = function () {
    return this.name;
  };
  SwaggerModel$NamedObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedObject',
    interfaces: [SwaggerModel$GenType]
  };
  SwaggerModel$NamedObject.prototype.component1 = function () {
    return this.path;
  };
  SwaggerModel$NamedObject.prototype.component2 = function () {
    return this.kind;
  };
  SwaggerModel$NamedObject.prototype.copy_ikpv5x$ = function (path, kind) {
    return new SwaggerModel$NamedObject(path === void 0 ? this.path : path, kind === void 0 ? this.kind : kind);
  };
  SwaggerModel$NamedObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    return result;
  };
  SwaggerModel$NamedObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.kind, other.kind)))));
  };
  function SwaggerModel$ArrayType(items) {
    this.items = items;
    this.ktype_guyhh$_0 = getKClass(List);
  }
  Object.defineProperty(SwaggerModel$ArrayType.prototype, 'ktype', {
    get: function () {
      return this.ktype_guyhh$_0;
    }
  });
  SwaggerModel$ArrayType.prototype.toString = function () {
    return 'List<' + this.items + '>';
  };
  SwaggerModel$ArrayType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayType',
    interfaces: [SwaggerModel$GenType]
  };
  SwaggerModel$ArrayType.prototype.component1 = function () {
    return this.items;
  };
  SwaggerModel$ArrayType.prototype.copy_d75mr0$ = function (items) {
    return new SwaggerModel$ArrayType(items === void 0 ? this.items : items);
  };
  SwaggerModel$ArrayType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  SwaggerModel$ArrayType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  function SwaggerModel$OptionalType(type) {
    this.type = type;
    this.ktype_jjlloc$_0 = PrimitiveClasses$anyClass;
  }
  Object.defineProperty(SwaggerModel$OptionalType.prototype, 'ktype', {
    get: function () {
      return this.ktype_jjlloc$_0;
    }
  });
  SwaggerModel$OptionalType.prototype.toString = function () {
    return this.type.toString() + '?';
  };
  SwaggerModel$OptionalType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptionalType',
    interfaces: [SwaggerModel$GenType]
  };
  SwaggerModel$OptionalType.prototype.component1 = function () {
    return this.type;
  };
  SwaggerModel$OptionalType.prototype.copy_d75mr0$ = function (type) {
    return new SwaggerModel$OptionalType(type === void 0 ? this.type : type);
  };
  SwaggerModel$OptionalType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  SwaggerModel$OptionalType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.type, other.type))));
  };
  function SwaggerModel$ObjType(namePath, fields) {
    this.namePath = namePath;
    this.fields = fields;
    this.ktype_ksz8jt$_0 = getKClass(Map);
  }
  Object.defineProperty(SwaggerModel$ObjType.prototype, 'ktype', {
    get: function () {
      return this.ktype_ksz8jt$_0;
    }
  });
  SwaggerModel$ObjType.prototype.toString = function () {
    return 'Any/*Unsupported {' + this.fields + '} namePath=' + toString(this.namePath) + '*/';
  };
  SwaggerModel$ObjType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjType',
    interfaces: [SwaggerModel$GenType]
  };
  SwaggerModel$ObjType.prototype.component1 = function () {
    return this.namePath;
  };
  SwaggerModel$ObjType.prototype.component2 = function () {
    return this.fields;
  };
  SwaggerModel$ObjType.prototype.copy_h4st60$ = function (namePath, fields) {
    return new SwaggerModel$ObjType(namePath === void 0 ? this.namePath : namePath, fields === void 0 ? this.fields : fields);
  };
  SwaggerModel$ObjType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namePath) | 0;
    result = result * 31 + Kotlin.hashCode(this.fields) | 0;
    return result;
  };
  SwaggerModel$ObjType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.namePath, other.namePath) && Kotlin.equals(this.fields, other.fields)))));
  };
  function SwaggerModel$Prop(name, type, required) {
    this.name = name;
    this.type = type;
    this.required = required;
    this.rtype = this.required ? this.type : new SwaggerModel$OptionalType(this.type);
  }
  Object.defineProperty(SwaggerModel$Prop.prototype, 'rule', {
    get: function () {
      return this.type.rule;
    }
  });
  SwaggerModel$Prop.prototype.toRuleString = function () {
    var tmp$;
    return (tmp$ = this.rule) != null ? toKotlin_1(tmp$, this.type) : null;
  };
  SwaggerModel$Prop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Prop',
    interfaces: []
  };
  SwaggerModel$Prop.prototype.component1 = function () {
    return this.name;
  };
  SwaggerModel$Prop.prototype.component2 = function () {
    return this.type;
  };
  SwaggerModel$Prop.prototype.component3 = function () {
    return this.required;
  };
  SwaggerModel$Prop.prototype.copy_iuimd$ = function (name, type, required) {
    return new SwaggerModel$Prop(name === void 0 ? this.name : name, type === void 0 ? this.type : type, required === void 0 ? this.required : required);
  };
  SwaggerModel$Prop.prototype.toString = function () {
    return 'Prop(name=' + Kotlin.toString(this.name) + (', type=' + Kotlin.toString(this.type)) + (', required=' + Kotlin.toString(this.required)) + ')';
  };
  SwaggerModel$Prop.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.required) | 0;
    return result;
  };
  SwaggerModel$Prop.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.required, other.required)))));
  };
  function SwaggerModel$TypeDef(name, props) {
    this.name = name;
    this.props = props;
    this.propsList = this.props.values;
  }
  SwaggerModel$TypeDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeDef',
    interfaces: []
  };
  SwaggerModel$TypeDef.prototype.component1 = function () {
    return this.name;
  };
  SwaggerModel$TypeDef.prototype.component2 = function () {
    return this.props;
  };
  SwaggerModel$TypeDef.prototype.copy_lp2q0r$ = function (name, props) {
    return new SwaggerModel$TypeDef(name === void 0 ? this.name : name, props === void 0 ? this.props : props);
  };
  SwaggerModel$TypeDef.prototype.toString = function () {
    return 'TypeDef(name=' + Kotlin.toString(this.name) + (', props=' + Kotlin.toString(this.props)) + ')';
  };
  SwaggerModel$TypeDef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.props) | 0;
    return result;
  };
  SwaggerModel$TypeDef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.props, other.props)))));
  };
  function SwaggerModel$SecurityDefinition(id, description, type, name, inside) {
    this.id = id;
    this.description = description;
    this.type = type;
    this.name = name;
    this.inside = inside;
  }
  SwaggerModel$SecurityDefinition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SecurityDefinition',
    interfaces: []
  };
  function SwaggerModel$Contact(name, url, email) {
    this.name = name;
    this.url = url;
    this.email = email;
  }
  SwaggerModel$Contact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contact',
    interfaces: []
  };
  SwaggerModel$Contact.prototype.component1 = function () {
    return this.name;
  };
  SwaggerModel$Contact.prototype.component2 = function () {
    return this.url;
  };
  SwaggerModel$Contact.prototype.component3 = function () {
    return this.email;
  };
  SwaggerModel$Contact.prototype.copy_6hosri$ = function (name, url, email) {
    return new SwaggerModel$Contact(name === void 0 ? this.name : name, url === void 0 ? this.url : url, email === void 0 ? this.email : email);
  };
  SwaggerModel$Contact.prototype.toString = function () {
    return 'Contact(name=' + Kotlin.toString(this.name) + (', url=' + Kotlin.toString(this.url)) + (', email=' + Kotlin.toString(this.email)) + ')';
  };
  SwaggerModel$Contact.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  SwaggerModel$Contact.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.email, other.email)))));
  };
  function SwaggerModel$License(name, url) {
    this.name = name;
    this.url = url;
  }
  SwaggerModel$License.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'License',
    interfaces: []
  };
  SwaggerModel$License.prototype.component1 = function () {
    return this.name;
  };
  SwaggerModel$License.prototype.component2 = function () {
    return this.url;
  };
  SwaggerModel$License.prototype.copy_puj7f4$ = function (name, url) {
    return new SwaggerModel$License(name === void 0 ? this.name : name, url === void 0 ? this.url : url);
  };
  SwaggerModel$License.prototype.toString = function () {
    return 'License(name=' + Kotlin.toString(this.name) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  SwaggerModel$License.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  SwaggerModel$License.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.url, other.url)))));
  };
  function SwaggerModel$Inside(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SwaggerModel$Inside_initFields() {
    SwaggerModel$Inside_initFields = function () {
    };
    SwaggerModel$Inside$QUERY_instance = new SwaggerModel$Inside('QUERY', 0, 'query');
    SwaggerModel$Inside$HEADER_instance = new SwaggerModel$Inside('HEADER', 1, 'header');
    SwaggerModel$Inside$PATH_instance = new SwaggerModel$Inside('PATH', 2, 'path');
    SwaggerModel$Inside$FORM_DATA_instance = new SwaggerModel$Inside('FORM_DATA', 3, 'formData');
    SwaggerModel$Inside$BODY_instance = new SwaggerModel$Inside('BODY', 4, 'body');
    SwaggerModel$Inside$Companion_getInstance();
  }
  var SwaggerModel$Inside$QUERY_instance;
  function SwaggerModel$Inside$QUERY_getInstance() {
    SwaggerModel$Inside_initFields();
    return SwaggerModel$Inside$QUERY_instance;
  }
  var SwaggerModel$Inside$HEADER_instance;
  function SwaggerModel$Inside$HEADER_getInstance() {
    SwaggerModel$Inside_initFields();
    return SwaggerModel$Inside$HEADER_instance;
  }
  var SwaggerModel$Inside$PATH_instance;
  function SwaggerModel$Inside$PATH_getInstance() {
    SwaggerModel$Inside_initFields();
    return SwaggerModel$Inside$PATH_instance;
  }
  var SwaggerModel$Inside$FORM_DATA_instance;
  function SwaggerModel$Inside$FORM_DATA_getInstance() {
    SwaggerModel$Inside_initFields();
    return SwaggerModel$Inside$FORM_DATA_instance;
  }
  var SwaggerModel$Inside$BODY_instance;
  function SwaggerModel$Inside$BODY_getInstance() {
    SwaggerModel$Inside_initFields();
    return SwaggerModel$Inside$BODY_instance;
  }
  function SwaggerModel$Inside$Companion() {
    SwaggerModel$Inside$Companion_instance = this;
    var $receiver = SwaggerModel$Inside$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
  }
  SwaggerModel$Inside$Companion.prototype.get_61zpoe$ = function (id) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.BY_ID.get_11rb$(id)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Unsupported Parameter.'in'='" + id + "'").toString());
    }
    return tmp$_0;
  };
  SwaggerModel$Inside$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwaggerModel$Inside$Companion_instance = null;
  function SwaggerModel$Inside$Companion_getInstance() {
    SwaggerModel$Inside_initFields();
    if (SwaggerModel$Inside$Companion_instance === null) {
      new SwaggerModel$Inside$Companion();
    }
    return SwaggerModel$Inside$Companion_instance;
  }
  SwaggerModel$Inside.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inside',
    interfaces: [Enum]
  };
  function SwaggerModel$Inside$values() {
    return [SwaggerModel$Inside$QUERY_getInstance(), SwaggerModel$Inside$HEADER_getInstance(), SwaggerModel$Inside$PATH_getInstance(), SwaggerModel$Inside$FORM_DATA_getInstance(), SwaggerModel$Inside$BODY_getInstance()];
  }
  SwaggerModel$Inside.values = SwaggerModel$Inside$values;
  function SwaggerModel$Inside$valueOf(name) {
    switch (name) {
      case 'QUERY':
        return SwaggerModel$Inside$QUERY_getInstance();
      case 'HEADER':
        return SwaggerModel$Inside$HEADER_getInstance();
      case 'PATH':
        return SwaggerModel$Inside$PATH_getInstance();
      case 'FORM_DATA':
        return SwaggerModel$Inside$FORM_DATA_getInstance();
      case 'BODY':
        return SwaggerModel$Inside$BODY_getInstance();
      default:throwISE('No enum constant io.ktor.start.swagger.SwaggerModel.Inside.' + name);
    }
  }
  SwaggerModel$Inside.valueOf_61zpoe$ = SwaggerModel$Inside$valueOf;
  function SwaggerModel$SecurityType(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SwaggerModel$SecurityType_initFields() {
    SwaggerModel$SecurityType_initFields = function () {
    };
    SwaggerModel$SecurityType$API_KEY_instance = new SwaggerModel$SecurityType('API_KEY', 0, 'apiKey');
    SwaggerModel$SecurityType$HTTP_instance = new SwaggerModel$SecurityType('HTTP', 1, 'http');
    SwaggerModel$SecurityType$OAUTH2_instance = new SwaggerModel$SecurityType('OAUTH2', 2, 'oauth2');
    SwaggerModel$SecurityType$OPEN_ID_CONNECT_instance = new SwaggerModel$SecurityType('OPEN_ID_CONNECT', 3, 'openIdConnect');
    SwaggerModel$SecurityType$Companion_getInstance();
  }
  var SwaggerModel$SecurityType$API_KEY_instance;
  function SwaggerModel$SecurityType$API_KEY_getInstance() {
    SwaggerModel$SecurityType_initFields();
    return SwaggerModel$SecurityType$API_KEY_instance;
  }
  var SwaggerModel$SecurityType$HTTP_instance;
  function SwaggerModel$SecurityType$HTTP_getInstance() {
    SwaggerModel$SecurityType_initFields();
    return SwaggerModel$SecurityType$HTTP_instance;
  }
  var SwaggerModel$SecurityType$OAUTH2_instance;
  function SwaggerModel$SecurityType$OAUTH2_getInstance() {
    SwaggerModel$SecurityType_initFields();
    return SwaggerModel$SecurityType$OAUTH2_instance;
  }
  var SwaggerModel$SecurityType$OPEN_ID_CONNECT_instance;
  function SwaggerModel$SecurityType$OPEN_ID_CONNECT_getInstance() {
    SwaggerModel$SecurityType_initFields();
    return SwaggerModel$SecurityType$OPEN_ID_CONNECT_instance;
  }
  function SwaggerModel$SecurityType$Companion() {
    SwaggerModel$SecurityType$Companion_instance = this;
    var $receiver = SwaggerModel$SecurityType$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
  }
  SwaggerModel$SecurityType$Companion.prototype.get_61zpoe$ = function (id) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.BY_ID.get_11rb$(id)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(("Unsupported Security.'type'='" + id + "'").toString());
    }
    return tmp$_0;
  };
  SwaggerModel$SecurityType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwaggerModel$SecurityType$Companion_instance = null;
  function SwaggerModel$SecurityType$Companion_getInstance() {
    SwaggerModel$SecurityType_initFields();
    if (SwaggerModel$SecurityType$Companion_instance === null) {
      new SwaggerModel$SecurityType$Companion();
    }
    return SwaggerModel$SecurityType$Companion_instance;
  }
  SwaggerModel$SecurityType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SecurityType',
    interfaces: [Enum]
  };
  function SwaggerModel$SecurityType$values() {
    return [SwaggerModel$SecurityType$API_KEY_getInstance(), SwaggerModel$SecurityType$HTTP_getInstance(), SwaggerModel$SecurityType$OAUTH2_getInstance(), SwaggerModel$SecurityType$OPEN_ID_CONNECT_getInstance()];
  }
  SwaggerModel$SecurityType.values = SwaggerModel$SecurityType$values;
  function SwaggerModel$SecurityType$valueOf(name) {
    switch (name) {
      case 'API_KEY':
        return SwaggerModel$SecurityType$API_KEY_getInstance();
      case 'HTTP':
        return SwaggerModel$SecurityType$HTTP_getInstance();
      case 'OAUTH2':
        return SwaggerModel$SecurityType$OAUTH2_getInstance();
      case 'OPEN_ID_CONNECT':
        return SwaggerModel$SecurityType$OPEN_ID_CONNECT_getInstance();
      default:throwISE('No enum constant io.ktor.start.swagger.SwaggerModel.SecurityType.' + name);
    }
  }
  SwaggerModel$SecurityType.valueOf_61zpoe$ = SwaggerModel$SecurityType$valueOf;
  function SwaggerModel$Parameter(name, inside, required, description, default_0, schema) {
    this.name = name;
    this.inside = inside;
    this.required = required;
    this.description = description;
    this.default = default_0;
    this.schema = schema;
  }
  SwaggerModel$Parameter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parameter',
    interfaces: []
  };
  SwaggerModel$Parameter.prototype.component1 = function () {
    return this.name;
  };
  SwaggerModel$Parameter.prototype.component2 = function () {
    return this.inside;
  };
  SwaggerModel$Parameter.prototype.component3 = function () {
    return this.required;
  };
  SwaggerModel$Parameter.prototype.component4 = function () {
    return this.description;
  };
  SwaggerModel$Parameter.prototype.component5 = function () {
    return this.default;
  };
  SwaggerModel$Parameter.prototype.component6 = function () {
    return this.schema;
  };
  SwaggerModel$Parameter.prototype.copy_lw7fqy$ = function (name, inside, required, description, default_0, schema) {
    return new SwaggerModel$Parameter(name === void 0 ? this.name : name, inside === void 0 ? this.inside : inside, required === void 0 ? this.required : required, description === void 0 ? this.description : description, default_0 === void 0 ? this.default : default_0, schema === void 0 ? this.schema : schema);
  };
  SwaggerModel$Parameter.prototype.toString = function () {
    return 'Parameter(name=' + Kotlin.toString(this.name) + (', inside=' + Kotlin.toString(this.inside)) + (', required=' + Kotlin.toString(this.required)) + (', description=' + Kotlin.toString(this.description)) + (', default=' + Kotlin.toString(this.default)) + (', schema=' + Kotlin.toString(this.schema)) + ')';
  };
  SwaggerModel$Parameter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.inside) | 0;
    result = result * 31 + Kotlin.hashCode(this.required) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.default) | 0;
    result = result * 31 + Kotlin.hashCode(this.schema) | 0;
    return result;
  };
  SwaggerModel$Parameter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.inside, other.inside) && Kotlin.equals(this.required, other.required) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.default, other.default) && Kotlin.equals(this.schema, other.schema)))));
  };
  function SwaggerModel$Security(name, info) {
    this.name = name;
    this.info = info;
  }
  SwaggerModel$Security.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Security',
    interfaces: []
  };
  SwaggerModel$Security.prototype.component1 = function () {
    return this.name;
  };
  SwaggerModel$Security.prototype.component2 = function () {
    return this.info;
  };
  SwaggerModel$Security.prototype.copy_kwv3np$ = function (name, info) {
    return new SwaggerModel$Security(name === void 0 ? this.name : name, info === void 0 ? this.info : info);
  };
  SwaggerModel$Security.prototype.toString = function () {
    return 'Security(name=' + Kotlin.toString(this.name) + (', info=' + Kotlin.toString(this.info)) + ')';
  };
  SwaggerModel$Security.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    return result;
  };
  SwaggerModel$Security.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.info, other.info)))));
  };
  function SwaggerModel$PathMethodModel(path, method, summary, description, tags, security, operationId, parameters, responses) {
    this.path = path;
    this.method = method;
    this.summary = summary;
    this.description = description;
    this.tags = tags;
    this.security = security;
    this.operationId = operationId;
    this.parameters = parameters;
    this.responses = responses;
    var $receiver = this.responses;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.intCode !== 200)
        destination.add_11rb$(element);
    }
    this.errorResponses = destination;
    var $receiver_0 = this.responses;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.intCode === 200) {
          firstOrNull$result = element_0;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    this.okResponse = firstOrNull$result;
    var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.defaultResponse = (tmp$_1 = this.okResponse) != null ? tmp$_1 : new SwaggerModel$Response('200', 'OK', new SwaggerModel$InfoGenType(SwaggerModel$StringType_getInstance(), null));
    this.responseType = (tmp$_3 = (tmp$_2 = this.defaultResponse.schema) != null ? tmp$_2.type : null) != null ? tmp$_3 : SwaggerModel$VoidType_getInstance();
    this.methodName = ID_getInstance().normalizeMethodName_61zpoe$((tmp$_4 = this.operationId) != null ? tmp$_4 : this.method + '/' + this.path);
  }
  SwaggerModel$PathMethodModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathMethodModel',
    interfaces: []
  };
  SwaggerModel$PathMethodModel.prototype.component1 = function () {
    return this.path;
  };
  SwaggerModel$PathMethodModel.prototype.component2 = function () {
    return this.method;
  };
  SwaggerModel$PathMethodModel.prototype.component3 = function () {
    return this.summary;
  };
  SwaggerModel$PathMethodModel.prototype.component4 = function () {
    return this.description;
  };
  SwaggerModel$PathMethodModel.prototype.component5 = function () {
    return this.tags;
  };
  SwaggerModel$PathMethodModel.prototype.component6 = function () {
    return this.security;
  };
  SwaggerModel$PathMethodModel.prototype.component7 = function () {
    return this.operationId;
  };
  SwaggerModel$PathMethodModel.prototype.component8 = function () {
    return this.parameters;
  };
  SwaggerModel$PathMethodModel.prototype.component9 = function () {
    return this.responses;
  };
  SwaggerModel$PathMethodModel.prototype.copy_z5i89s$ = function (path, method, summary, description, tags, security, operationId, parameters, responses) {
    return new SwaggerModel$PathMethodModel(path === void 0 ? this.path : path, method === void 0 ? this.method : method, summary === void 0 ? this.summary : summary, description === void 0 ? this.description : description, tags === void 0 ? this.tags : tags, security === void 0 ? this.security : security, operationId === void 0 ? this.operationId : operationId, parameters === void 0 ? this.parameters : parameters, responses === void 0 ? this.responses : responses);
  };
  SwaggerModel$PathMethodModel.prototype.toString = function () {
    return 'PathMethodModel(path=' + Kotlin.toString(this.path) + (', method=' + Kotlin.toString(this.method)) + (', summary=' + Kotlin.toString(this.summary)) + (', description=' + Kotlin.toString(this.description)) + (', tags=' + Kotlin.toString(this.tags)) + (', security=' + Kotlin.toString(this.security)) + (', operationId=' + Kotlin.toString(this.operationId)) + (', parameters=' + Kotlin.toString(this.parameters)) + (', responses=' + Kotlin.toString(this.responses)) + ')';
  };
  SwaggerModel$PathMethodModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.method) | 0;
    result = result * 31 + Kotlin.hashCode(this.summary) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.tags) | 0;
    result = result * 31 + Kotlin.hashCode(this.security) | 0;
    result = result * 31 + Kotlin.hashCode(this.operationId) | 0;
    result = result * 31 + Kotlin.hashCode(this.parameters) | 0;
    result = result * 31 + Kotlin.hashCode(this.responses) | 0;
    return result;
  };
  SwaggerModel$PathMethodModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.method, other.method) && Kotlin.equals(this.summary, other.summary) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.tags, other.tags) && Kotlin.equals(this.security, other.security) && Kotlin.equals(this.operationId, other.operationId) && Kotlin.equals(this.parameters, other.parameters) && Kotlin.equals(this.responses, other.responses)))));
  };
  function SwaggerModel$PathModel(path, methods) {
    this.path = path;
    this.methods = methods;
    this.methodsList = this.methods.values;
  }
  SwaggerModel$PathModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathModel',
    interfaces: []
  };
  SwaggerModel$PathModel.prototype.component1 = function () {
    return this.path;
  };
  SwaggerModel$PathModel.prototype.component2 = function () {
    return this.methods;
  };
  SwaggerModel$PathModel.prototype.copy_z7a5vf$ = function (path, methods) {
    return new SwaggerModel$PathModel(path === void 0 ? this.path : path, methods === void 0 ? this.methods : methods);
  };
  SwaggerModel$PathModel.prototype.toString = function () {
    return 'PathModel(path=' + Kotlin.toString(this.path) + (', methods=' + Kotlin.toString(this.methods)) + ')';
  };
  SwaggerModel$PathModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.methods) | 0;
    return result;
  };
  SwaggerModel$PathModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.methods, other.methods)))));
  };
  function SwaggerModel$SwaggerInfo(title, description, termsOfService, version, contact, license) {
    this.title = title;
    this.description = description;
    this.termsOfService = termsOfService;
    this.version = version;
    this.contact = contact;
    this.license = license;
    var tmp$, tmp$_0;
    var $receiver = this.title;
    this.className = (tmp$_0 = (tmp$ = $receiver.length > 0 ? $receiver : null) != null ? ID_getInstance().normalizeClassName_61zpoe$(tmp$) : null) != null ? tmp$_0 : 'SwaggerApi';
    this.classNameServer = this.className + 'Server';
    this.classNameClient = this.className + 'Client';
  }
  SwaggerModel$SwaggerInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerInfo',
    interfaces: []
  };
  SwaggerModel$SwaggerInfo.prototype.component1 = function () {
    return this.title;
  };
  SwaggerModel$SwaggerInfo.prototype.component2 = function () {
    return this.description;
  };
  SwaggerModel$SwaggerInfo.prototype.component3 = function () {
    return this.termsOfService;
  };
  SwaggerModel$SwaggerInfo.prototype.component4 = function () {
    return this.version;
  };
  SwaggerModel$SwaggerInfo.prototype.component5 = function () {
    return this.contact;
  };
  SwaggerModel$SwaggerInfo.prototype.component6 = function () {
    return this.license;
  };
  SwaggerModel$SwaggerInfo.prototype.copy_ij07d7$ = function (title, description, termsOfService, version, contact, license) {
    return new SwaggerModel$SwaggerInfo(title === void 0 ? this.title : title, description === void 0 ? this.description : description, termsOfService === void 0 ? this.termsOfService : termsOfService, version === void 0 ? this.version : version, contact === void 0 ? this.contact : contact, license === void 0 ? this.license : license);
  };
  SwaggerModel$SwaggerInfo.prototype.toString = function () {
    return 'SwaggerInfo(title=' + Kotlin.toString(this.title) + (', description=' + Kotlin.toString(this.description)) + (', termsOfService=' + Kotlin.toString(this.termsOfService)) + (', version=' + Kotlin.toString(this.version)) + (', contact=' + Kotlin.toString(this.contact)) + (', license=' + Kotlin.toString(this.license)) + ')';
  };
  SwaggerModel$SwaggerInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.termsOfService) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.contact) | 0;
    result = result * 31 + Kotlin.hashCode(this.license) | 0;
    return result;
  };
  SwaggerModel$SwaggerInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.termsOfService, other.termsOfService) && Kotlin.equals(this.version, other.version) && Kotlin.equals(this.contact, other.contact) && Kotlin.equals(this.license, other.license)))));
  };
  function SwaggerModel$Response(code, description, schema) {
    this.code = code;
    this.description = description;
    this.schema = schema;
    var tmp$, tmp$_0;
    if (equals(this.code, 'default'))
      tmp$_0 = 200;
    else
      tmp$_0 = (tmp$ = toIntOrNull(this.code)) != null ? tmp$ : -1;
    this.intCode = tmp$_0;
  }
  SwaggerModel$Response.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Response',
    interfaces: []
  };
  SwaggerModel$Response.prototype.component1 = function () {
    return this.code;
  };
  SwaggerModel$Response.prototype.component2 = function () {
    return this.description;
  };
  SwaggerModel$Response.prototype.component3 = function () {
    return this.schema;
  };
  SwaggerModel$Response.prototype.copy_gnagun$ = function (code, description, schema) {
    return new SwaggerModel$Response(code === void 0 ? this.code : code, description === void 0 ? this.description : description, schema === void 0 ? this.schema : schema);
  };
  SwaggerModel$Response.prototype.toString = function () {
    return 'Response(code=' + Kotlin.toString(this.code) + (', description=' + Kotlin.toString(this.description)) + (', schema=' + Kotlin.toString(this.schema)) + ')';
  };
  SwaggerModel$Response.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.schema) | 0;
    return result;
  };
  SwaggerModel$Response.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.schema, other.schema)))));
  };
  function SwaggerModel$Companion() {
    SwaggerModel$Companion_instance = this;
  }
  function SwaggerModel$Companion$Versions() {
    SwaggerModel$Companion$Versions_instance = this;
    this.V2 = new SemVer('2.0');
    this.V3 = new SemVer('3.0.0');
    this.V3_0_1 = new SemVer('3.0.1');
    this.MIN = this.V2;
    this.MAX = this.V3_0_1;
  }
  SwaggerModel$Companion$Versions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Versions',
    interfaces: []
  };
  var SwaggerModel$Companion$Versions_instance = null;
  function SwaggerModel$Companion$Versions_getInstance() {
    if (SwaggerModel$Companion$Versions_instance === null) {
      new SwaggerModel$Companion$Versions();
    }
    return SwaggerModel$Companion$Versions_instance;
  }
  SwaggerModel$Companion.prototype.parseDefinitionElement_mdpa8p$ = function (def, root, namePath) {
    var $receiver = package$util.DynamicAccess;
    var callback$result;
    var tmp$, tmp$_0, tmp$_1;
    var ref = $receiver.get_s2h60f$(def, '$ref');
    if (ref != null) {
      var path = $receiver.get_str_mzud1t$(ref);
      var referee = this.parseDefinitionElement_mdpa8p$(Json_getInstance().followReference_d0xna2$(def, root, path), root, path);
      if (Kotlin.isType(referee.type, SwaggerModel$ObjType)) {
        tmp$_0 = new SwaggerModel$InfoGenType(new SwaggerModel$NamedObject(path, Kotlin.isType(tmp$ = referee, SwaggerModel$InfoGenType) ? tmp$ : throwCCE()), null);
      }
       else
        tmp$_0 = referee;
      return tmp$_0;
    }
     else {
      var type = $receiver.get_s2h60f$(def, 'type');
      var format = $receiver.get_s2h60f$(def, 'format');
      var rule = JsonRule$Companion_getInstance().parseOrNull_s8jyv4$(def);
      switch (type) {
        case 'integer':
          switch ($receiver.get_str_mzud1t$(format)) {
            case 'int32':
            case 'null':
            case '':
              tmp$_1 = SwaggerModel$Int32Type_getInstance();
              break;
            case 'int64':
              tmp$_1 = SwaggerModel$Int64Type_getInstance();
              break;
            default:throw IllegalStateException_init(('Invalid integer type ' + toString(format)).toString());
          }

          break;
        case 'number':
          switch ($receiver.get_str_mzud1t$(format)) {
            case 'float':
              tmp$_1 = SwaggerModel$FloatType_getInstance();
              break;
            case 'double':
            case 'null':
            case '':
              tmp$_1 = SwaggerModel$DoubleType_getInstance();
              break;
            default:throw IllegalStateException_init(('Invalid number type ' + toString(format)).toString());
          }

          break;
        case 'string':
          switch ($receiver.get_str_mzud1t$(format)) {
            case 'string':
            case 'null':
            case '':
              tmp$_1 = SwaggerModel$StringType_getInstance();
              break;
            case 'byte':
              tmp$_1 = SwaggerModel$Base64Type_getInstance();
              break;
            case 'binary':
              tmp$_1 = SwaggerModel$BinaryStringType_getInstance();
              break;
            case 'date':
              tmp$_1 = SwaggerModel$DateType_getInstance();
              break;
            case 'date-time':
              tmp$_1 = SwaggerModel$DateTimeType_getInstance();
              break;
            case 'password':
              tmp$_1 = SwaggerModel$PasswordType_getInstance();
              break;
            default:throw IllegalStateException_init(('Invalid string type ' + toString(format)).toString());
          }

          break;
        case 'boolean':
          tmp$_1 = SwaggerModel$BoolType_getInstance();
          break;
        case 'array':
          var items = $receiver.get_s2h60f$(def, 'items');
          tmp$_1 = new SwaggerModel$ArrayType(this.parseDefinitionElement_mdpa8p$(items, root, null));
          break;
        case 'object':
          var props = $receiver.get_s2h60f$(def, 'properties');
          var $receiver_0 = $receiver.get_strEntries_mzud1t$(props);
          var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
          var tmp$_2;
          tmp$_2 = $receiver_0.iterator();
          while (tmp$_2.hasNext()) {
            var item = tmp$_2.next();
            destination.add_11rb$(to(item.first, this.parseDefinitionElement_mdpa8p$(item.second, root, null)));
          }

          var entries = toMap(destination);
          tmp$_1 = new SwaggerModel$ObjType(namePath, entries);
          break;
        case 'null':
          throw IllegalStateException_init(('null? : ' + toString(def)).toString());
        default:throw IllegalStateException_init(('Other prim ' + toString(type) + ', ' + toString(def)).toString());
      }
      var ptype = tmp$_1;
      callback$result = new SwaggerModel$InfoGenType(ptype, rule);
    }
    return callback$result;
  };
  SwaggerModel$Companion.prototype.parseDefinition_fmz8iu$ = function (name, def, root) {
    var $receiver = package$util.DynamicAccess;
    var type = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'type'));
    if (!equals(type, 'object')) {
      throw IllegalStateException_init(("Only supported 'object' definitions but found '" + type + "'").toString());
    }
    var required = toSet($receiver.get_strList_mzud1t$($receiver.get_s2h60f$(def, 'required')));
    var $receiver_0 = $receiver.get_strEntries_mzud1t$($receiver.get_s2h60f$(def, 'properties'));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var key = item.component1()
      , element = item.component2();
      var pdef = this.parseDefinitionElement_mdpa8p$(element, root, null);
      tmp$_0.call(destination, to(key, new SwaggerModel$Prop($receiver.get_str_mzud1t$(key), pdef, required.contains_11rb$(key))));
    }
    var props = toMap(destination);
    return new SwaggerModel$TypeDef(name, props);
  };
  SwaggerModel$Companion.prototype.parseParameter_oaftn8$ = function (def, root) {
    var $receiver = package$util.DynamicAccess;
    var tmp$, tmp$_0, tmp$_1;
    return new SwaggerModel$Parameter($receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'name')), SwaggerModel$Inside$Companion_getInstance().get_61zpoe$($receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'in'))), (tmp$_0 = (tmp$ = $receiver.get_s2h60f$(def, 'required')) != null ? $receiver.get_bool_mzud1t$(tmp$) : null) != null ? tmp$_0 : false, $receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'description')), $receiver.get_s2h60f$(def, 'default'), this.parseDefinitionElement_mdpa8p$((tmp$_1 = $receiver.get_s2h60f$(def, 'schema')) != null ? tmp$_1 : def, root, null));
  };
  SwaggerModel$Companion.prototype.parseMethodPath_arau7s$ = function (path, method, def, root) {
    var $receiver = package$util.DynamicAccess;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'summary'));
    tmp$_0 = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'description'));
    tmp$_1 = $receiver.get_strList_mzud1t$($receiver.get_s2h60f$(def, 'tags'));
    var $receiver_0 = $receiver.get_list_mzud1t$($receiver.get_s2h60f$(def, 'security'));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_4;
    tmp$_4 = $receiver_0.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      var tmp$_5 = destination.add_11rb$;
      var name = first($receiver.get_strKeys_mzud1t$(item));
      var info = $receiver.get_s2h60f$(item, name);
      tmp$_5.call(destination, new SwaggerModel$Security(name, $receiver.get_strList_mzud1t$(info)));
    }
    tmp$_3 = (tmp$_2 = $receiver.get_s2h60f$(def, 'operationId')) != null ? $receiver.get_str_mzud1t$(tmp$_2) : null;
    var $receiver_1 = $receiver.get_list_mzud1t$($receiver.get_s2h60f$(def, 'parameters'));
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_6;
    tmp$_6 = $receiver_1.iterator();
    while (tmp$_6.hasNext()) {
      var item_0 = tmp$_6.next();
      destination_0.add_11rb$(this.parseParameter_oaftn8$(item_0, root));
    }
    var $receiver_2 = $receiver.get_strEntries_mzud1t$($receiver.get_s2h60f$(def, 'responses'));
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_7;
    tmp$_7 = $receiver_2.iterator();
    while (tmp$_7.hasNext()) {
      var item_1 = tmp$_7.next();
      var tmp$_8 = destination_1.add_11rb$;
      var code = item_1.component1()
      , rdef = item_1.component2();
      var tmp$_9;
      tmp$_8.call(destination_1, new SwaggerModel$Response(code, $receiver.get_str_mzud1t$($receiver.get_s2h60f$(rdef, 'description')), (tmp$_9 = $receiver.get_s2h60f$(rdef, 'schema')) != null ? this.parseDefinitionElement_mdpa8p$(tmp$_9, root, null) : null));
    }
    return new SwaggerModel$PathMethodModel(path, method, tmp$, tmp$_0, tmp$_1, destination, tmp$_3, destination_0, destination_1);
  };
  SwaggerModel$Companion.prototype.parsePath_fmz8iu$ = function (path, def, root) {
    var $receiver = package$util.DynamicAccess.get_strEntries_mzud1t$(def);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var method = item.component1()
      , methodDef = item.component2();
      tmp$_0.call(destination, to(method, this.parseMethodPath_arau7s$(path, method, methodDef, root)));
    }
    return new SwaggerModel$PathModel(path, toMap(destination));
  };
  SwaggerModel$Companion.prototype.parse_hvn9da$ = function (model, filename) {
    if (filename === void 0)
      filename = 'unknown.json';
    var $receiver = package$util.DynamicAccess;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var root = model;
    var version = (tmp$ = $receiver.get_s2h60f$(model, 'swagger')) != null ? tmp$ : $receiver.get_s2h60f$(model, 'openapi');
    var semVer = new SemVer(toString(version));
    if (!rangeTo(SwaggerModel$Companion$Versions_getInstance().MIN, SwaggerModel$Companion$Versions_getInstance().MAX).contains_mef7kx$(semVer))
      throw IllegalArgumentException_init("Not a swagger/openapi: '2.0' or '3.0.0' model");
    var it = $receiver.get_s2h60f$(model, 'info');
    var tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    tmp$_5 = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(it, 'title'));
    tmp$_6 = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(it, 'description'));
    tmp$_7 = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(it, 'termsOfService'));
    var $receiver_0 = $receiver.get_s2h60f$(it, 'contact');
    tmp$_8 = new SwaggerModel$Contact($receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_0, 'name')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_0, 'url')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_0, 'email')));
    var $receiver_1 = $receiver.get_s2h60f$(it, 'license');
    tmp$_9 = new SwaggerModel$License($receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_1, 'name')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_1, 'url')));
    var info = new SwaggerModel$SwaggerInfo(tmp$_5, tmp$_6, tmp$_7, $receiver.get_str_mzud1t$($receiver.get_s2h60f$(it, 'version')), tmp$_8, tmp$_9);
    var servers = ArrayList_init();
    if (semVer.compareTo_11rb$(SwaggerModel$Companion$Versions_getInstance().V3) < 0) {
      var host = (tmp$_1 = (tmp$_0 = $receiver.get_s2h60f$(model, 'host')) != null ? $receiver.get_str_mzud1t$(tmp$_0) : null) != null ? tmp$_1 : '127.0.0.1';
      var basePath = (tmp$_3 = (tmp$_2 = $receiver.get_s2h60f$(model, 'basePath')) != null ? $receiver.get_str_mzud1t$(tmp$_2) : null) != null ? tmp$_3 : '/';
      var schemes = $receiver.get_strList_mzud1t$($receiver.get_s2h60f$(model, 'schemes'));
      var tmp$_10;
      var element = new SwaggerModel$Server('{scheme}://' + host + basePath, info.description, mapOf(to('scheme', new SwaggerModel$ServerVariable('scheme', (tmp$_10 = firstOrNull(schemes)) != null ? tmp$_10 : 'https', '', schemes))));
      servers.add_11rb$(element);
    }
     else {
      tmp$_4 = $receiver.get_list_mzud1t$($receiver.get_s2h60f$(model, 'servers')).iterator();
      while (tmp$_4.hasNext()) {
        var userver = tmp$_4.next();
        var tmp$_11, tmp$_12, tmp$_13, tmp$_14;
        tmp$_11 = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(userver, 'url'));
        tmp$_14 = (tmp$_13 = (tmp$_12 = $receiver.get_s2h60f$(userver, 'description')) != null ? $receiver.get_str_mzud1t$(tmp$_12) : null) != null ? tmp$_13 : 'API';
        var $receiver_2 = $receiver.get_map_mzud1t$($receiver.get_s2h60f$(userver, 'variables'));
        var destination = ArrayList_init_0($receiver_2.size);
        var tmp$_15;
        tmp$_15 = $receiver_2.entries.iterator();
        while (tmp$_15.hasNext()) {
          var item = tmp$_15.next();
          var tmp$_16 = destination.add_11rb$;
          var uname = item.key;
          var uvar = item.value;
          var tmp$_17;
          var name = $receiver.get_str_mzud1t$(uname);
          tmp$_16.call(destination, to(name, new SwaggerModel$ServerVariable(name, $receiver.get_str_mzud1t$($receiver.get_s2h60f$(uvar, 'default')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$(uvar, 'description')), (tmp$_17 = $receiver.get_s2h60f$(uvar, 'enum')) != null ? $receiver.get_strList_mzud1t$(tmp$_17) : null)));
        }
        var element_0 = new SwaggerModel$Server(tmp$_11, tmp$_14, toMap(destination));
        servers.add_11rb$(element_0);
      }
    }
    var $receiver_3 = $receiver.get_list_mzud1t$($receiver.get_s2h60f$(model, 'produces'));
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_18;
    tmp$_18 = $receiver_3.iterator();
    while (tmp$_18.hasNext()) {
      var item_0 = tmp$_18.next();
      destination_0.add_11rb$($receiver.get_str_mzud1t$(item_0));
    }
    var produces = destination_0;
    var $receiver_4 = $receiver.get_list_mzud1t$($receiver.get_s2h60f$(model, 'consumes'));
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_4, 10));
    var tmp$_19;
    tmp$_19 = $receiver_4.iterator();
    while (tmp$_19.hasNext()) {
      var item_1 = tmp$_19.next();
      destination_1.add_11rb$($receiver.get_str_mzud1t$(item_1));
    }
    var consumes = destination_1;
    var $receiver_5 = $receiver.get_strEntries_mzud1t$($receiver.get_s2h60f$(model, 'securityDefinitions'));
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_5, 10));
    var tmp$_20;
    tmp$_20 = $receiver_5.iterator();
    while (tmp$_20.hasNext()) {
      var item_2 = tmp$_20.next();
      var tmp$_21 = destination_2.add_11rb$;
      var kname = item_2.component1()
      , obj = item_2.component2();
      tmp$_21.call(destination_2, to(kname, new SwaggerModel$SecurityDefinition($receiver.get_str_mzud1t$(kname), $receiver.get_str_mzud1t$($receiver.get_s2h60f$(obj, 'description')), SwaggerModel$SecurityType$Companion_getInstance().get_61zpoe$($receiver.get_str_mzud1t$($receiver.get_s2h60f$(obj, 'type'))), $receiver.get_str_mzud1t$($receiver.get_s2h60f$(obj, 'name')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$(obj, 'in')))));
    }
    var securityDefinitions = toMap(destination_2);
    var $receiver_6 = $receiver.get_strEntries_mzud1t$($receiver.get_s2h60f$(model, 'paths'));
    var destination_3 = ArrayList_init_0(collectionSizeOrDefault($receiver_6, 10));
    var tmp$_22;
    tmp$_22 = $receiver_6.iterator();
    while (tmp$_22.hasNext()) {
      var item_3 = tmp$_22.next();
      var tmp$_23 = destination_3.add_11rb$;
      var key = item_3.component1()
      , obj_0 = item_3.component2();
      tmp$_23.call(destination_3, to(key, this.parsePath_fmz8iu$(key, obj_0, root)));
    }
    var paths = toMap(destination_3);
    var $receiver_7 = $receiver.get_strEntries_mzud1t$($receiver.get_s2h60f$(model, 'definitions'));
    var destination_4 = ArrayList_init_0(collectionSizeOrDefault($receiver_7, 10));
    var tmp$_24;
    tmp$_24 = $receiver_7.iterator();
    while (tmp$_24.hasNext()) {
      var item_4 = tmp$_24.next();
      var tmp$_25 = destination_4.add_11rb$;
      var key_0 = item_4.component1()
      , obj_1 = item_4.component2();
      tmp$_25.call(destination_4, to(key_0, this.parseDefinition_fmz8iu$(key_0, obj_1, root)));
    }
    var definitions = toMap(destination_4);
    return new SwaggerModel(filename, info, servers, produces, consumes, securityDefinitions, paths, definitions);
  };
  SwaggerModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SwaggerModel$Companion_instance = null;
  function SwaggerModel$Companion_getInstance() {
    if (SwaggerModel$Companion_instance === null) {
      new SwaggerModel$Companion();
    }
    return SwaggerModel$Companion_instance;
  }
  SwaggerModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerModel',
    interfaces: []
  };
  SwaggerModel.prototype.component1 = function () {
    return this.filename;
  };
  SwaggerModel.prototype.component2 = function () {
    return this.info;
  };
  SwaggerModel.prototype.component3 = function () {
    return this.servers;
  };
  SwaggerModel.prototype.component4 = function () {
    return this.produces;
  };
  SwaggerModel.prototype.component5 = function () {
    return this.consumes;
  };
  SwaggerModel.prototype.component6 = function () {
    return this.securityDefinitions;
  };
  SwaggerModel.prototype.component7 = function () {
    return this.paths;
  };
  SwaggerModel.prototype.component8 = function () {
    return this.definitions;
  };
  SwaggerModel.prototype.copy_rbgpg2$ = function (filename, info, servers, produces, consumes, securityDefinitions, paths, definitions) {
    return new SwaggerModel(filename === void 0 ? this.filename : filename, info === void 0 ? this.info : info, servers === void 0 ? this.servers : servers, produces === void 0 ? this.produces : produces, consumes === void 0 ? this.consumes : consumes, securityDefinitions === void 0 ? this.securityDefinitions : securityDefinitions, paths === void 0 ? this.paths : paths, definitions === void 0 ? this.definitions : definitions);
  };
  SwaggerModel.prototype.toString = function () {
    return 'SwaggerModel(filename=' + Kotlin.toString(this.filename) + (', info=' + Kotlin.toString(this.info)) + (', servers=' + Kotlin.toString(this.servers)) + (', produces=' + Kotlin.toString(this.produces)) + (', consumes=' + Kotlin.toString(this.consumes)) + (', securityDefinitions=' + Kotlin.toString(this.securityDefinitions)) + (', paths=' + Kotlin.toString(this.paths)) + (', definitions=' + Kotlin.toString(this.definitions)) + ')';
  };
  SwaggerModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    result = result * 31 + Kotlin.hashCode(this.servers) | 0;
    result = result * 31 + Kotlin.hashCode(this.produces) | 0;
    result = result * 31 + Kotlin.hashCode(this.consumes) | 0;
    result = result * 31 + Kotlin.hashCode(this.securityDefinitions) | 0;
    result = result * 31 + Kotlin.hashCode(this.paths) | 0;
    result = result * 31 + Kotlin.hashCode(this.definitions) | 0;
    return result;
  };
  SwaggerModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.info, other.info) && Kotlin.equals(this.servers, other.servers) && Kotlin.equals(this.produces, other.produces) && Kotlin.equals(this.consumes, other.consumes) && Kotlin.equals(this.securityDefinitions, other.securityDefinitions) && Kotlin.equals(this.paths, other.paths) && Kotlin.equals(this.definitions, other.definitions)))));
  };
  function toKotlin_0($receiver, type) {
    return toKotlin($receiver, type.ktype);
  }
  function toKotlin_1($receiver, type) {
    return toKotlin_0($receiver, type.type);
  }
  function Dynamic() {
    Dynamic_instance = this;
  }
  Dynamic.prototype.invoke_2fhnx7$ = defineInlineFunction('output.io.ktor.start.util.Dynamic.invoke_2fhnx7$', wrapFunction(function () {
    var util = _.io.ktor.start.util;
    return function (callback) {
      return callback(util.DynamicAccess);
    };
  }));
  Dynamic.prototype.invoke_2rby82$ = defineInlineFunction('output.io.ktor.start.util.Dynamic.invoke_2rby82$', wrapFunction(function () {
    var util = _.io.ktor.start.util;
    return function (value, callback) {
      return callback(util.DynamicAccess, value);
    };
  }));
  Dynamic.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Dynamic',
    interfaces: []
  };
  var Dynamic_instance = null;
  function Dynamic_getInstance() {
    if (Dynamic_instance === null) {
      new Dynamic();
    }
    return Dynamic_instance;
  }
  function DynamicAccess() {
    DynamicAccess_instance = this;
  }
  DynamicAccess.prototype.invoke_2fhnx7$ = defineInlineFunction('output.io.ktor.start.util.DynamicAccess.invoke_2fhnx7$', wrapFunction(function () {
    var util = _.io.ktor.start.util;
    return function (callback) {
      return callback(util.DynamicAccess);
    };
  }));
  DynamicAccess.prototype.get_list_mzud1t$ = function ($receiver) {
    if (Kotlin.isType($receiver, List))
      return $receiver;
    else if (Kotlin.isType($receiver, Iterable))
      return toList($receiver);
    else {
      return emptyList();
    }
  };
  DynamicAccess.prototype.get_keys_mzud1t$ = function ($receiver) {
    if (Kotlin.isType($receiver, Map))
      return toList($receiver.keys);
    else {
      return emptyList();
    }
  };
  DynamicAccess.prototype.get_intKeys_mzud1t$ = function ($receiver) {
    var $receiver_0 = this.get_keys_mzud1t$($receiver);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (typeof element === 'number')
        destination.add_11rb$(element);
    }
    return destination;
  };
  DynamicAccess.prototype.get_strKeys_mzud1t$ = function ($receiver) {
    var $receiver_0 = this.get_keys_mzud1t$($receiver);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.get_str_mzud1t$(item));
    }
    return destination;
  };
  DynamicAccess.prototype.get_strList_mzud1t$ = function ($receiver) {
    var $receiver_0 = this.get_list_mzud1t$($receiver);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.get_str_mzud1t$(item));
    }
    return destination;
  };
  DynamicAccess.prototype.get_entries_mzud1t$ = function ($receiver) {
    var $receiver_0 = this.get_keys_mzud1t$($receiver);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.get_uozw8h$($receiver, item)));
    }
    return destination;
  };
  DynamicAccess.prototype.get_strEntries_mzud1t$ = function ($receiver) {
    var $receiver_0 = this.get_strKeys_mzud1t$($receiver);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.get_s2h60f$($receiver, item)));
    }
    return destination;
  };
  DynamicAccess.prototype.get_map_mzud1t$ = function ($receiver) {
    return toMap(this.get_entries_mzud1t$($receiver));
  };
  DynamicAccess.prototype.get_uozw8h$ = function ($receiver, key) {
    return typeof key === 'number' ? this.get_v36bcf$($receiver, key) : this.get_s2h60f$($receiver, this.get_str_mzud1t$(key));
  };
  DynamicAccess.prototype.get_s2h60f$ = function ($receiver, key) {
    var tmp$;
    if (Kotlin.isType($receiver, Map))
      return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(key);
    else
      return null;
  };
  DynamicAccess.prototype.get_v36bcf$ = function ($receiver, key) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType($receiver, List))
      return $receiver.get_za3lpa$(key);
    else if (Kotlin.isType($receiver, Map))
      return (tmp$_1 = (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(key)) != null ? tmp$_1 : (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).get_11rb$(key.toString());
    else
      return null;
  };
  DynamicAccess.prototype.toBoolOrNull_mzud1t$ = function ($receiver) {
    if (typeof $receiver === 'boolean')
      return $receiver;
    else if (typeof $receiver === 'string')
      return equals($receiver, '1') || equals($receiver, 'true') || equals($receiver, 'on');
    else if (Kotlin.isNumber($receiver))
      return numberToInt($receiver) !== 0;
    else
      return null;
  };
  DynamicAccess.prototype.toIntOrNull_mzud1t$ = function ($receiver) {
    if (Kotlin.isNumber($receiver))
      return numberToInt($receiver);
    else if (typeof $receiver === 'string')
      return toIntOrNull_0($receiver, 10);
    else
      return null;
  };
  DynamicAccess.prototype.toLongOrNull_mzud1t$ = function ($receiver) {
    if (Kotlin.isNumber($receiver))
      return numberToLong($receiver);
    else if (typeof $receiver === 'string')
      return toLongOrNull($receiver, 10);
    else
      return null;
  };
  DynamicAccess.prototype.toDoubleOrNull_mzud1t$ = function ($receiver) {
    if (Kotlin.isNumber($receiver))
      return numberToDouble($receiver);
    else if (typeof $receiver === 'string')
      return toDouble($receiver);
    else
      return null;
  };
  DynamicAccess.prototype.toIntDefault_v36bcf$ = function ($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = 0;
    var tmp$;
    if (Kotlin.isNumber($receiver))
      return numberToInt($receiver);
    else if (typeof $receiver === 'string')
      return (tmp$ = toIntOrNull_0($receiver, 10)) != null ? tmp$ : default_0;
    else
      return default_0;
  };
  DynamicAccess.prototype.toLongDefault_up6xlm$ = function ($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = L0;
    var tmp$;
    if (Kotlin.isNumber($receiver))
      return numberToLong($receiver);
    else if (typeof $receiver === 'string')
      return (tmp$ = toLongOrNull($receiver, 10)) != null ? tmp$ : default_0;
    else
      return default_0;
  };
  DynamicAccess.prototype.toFloatDefault_s75k3i$ = function ($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (Kotlin.isNumber($receiver))
      return numberToDouble($receiver);
    else if (typeof $receiver === 'string') {
      return toDouble($receiver);
    }
     else
      return default_0;
  };
  DynamicAccess.prototype.toDoubleDefault_kw3mun$ = function ($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = 0.0;
    if (Kotlin.isNumber($receiver))
      return numberToDouble($receiver);
    else if (typeof $receiver === 'string')
      return toDouble($receiver);
    else
      return default_0;
  };
  DynamicAccess.prototype.get_str_mzud1t$ = function ($receiver) {
    return toString($receiver);
  };
  DynamicAccess.prototype.get_int_mzud1t$ = function ($receiver) {
    return this.toIntDefault_v36bcf$($receiver);
  };
  DynamicAccess.prototype.get_bool_mzud1t$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.toBoolOrNull_mzud1t$($receiver)) != null ? tmp$ : false;
  };
  DynamicAccess.prototype.get_float_mzud1t$ = function ($receiver) {
    return this.toFloatDefault_s75k3i$($receiver);
  };
  DynamicAccess.prototype.get_double_mzud1t$ = function ($receiver) {
    return this.toDoubleDefault_kw3mun$($receiver);
  };
  DynamicAccess.prototype.get_long_mzud1t$ = function ($receiver) {
    return this.toLongDefault_up6xlm$($receiver);
  };
  DynamicAccess.prototype.get_intArray_mzud1t$ = function ($receiver) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isIntArray(tmp$ = $receiver) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver_0 = this.get_list_mzud1t$($receiver);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(this.get_int_mzud1t$(item));
      }
      tmp$_1 = toIntArray(destination);
    }
    return tmp$_1;
  };
  DynamicAccess.prototype.get_floatArray_mzud1t$ = function ($receiver) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isFloatArray(tmp$ = $receiver) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver_0 = this.get_list_mzud1t$($receiver);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(this.get_float_mzud1t$(item));
      }
      tmp$_1 = toFloatArray(destination);
    }
    return tmp$_1;
  };
  DynamicAccess.prototype.get_doubleArray_mzud1t$ = function ($receiver) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isDoubleArray(tmp$ = $receiver) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver_0 = this.get_list_mzud1t$($receiver);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(this.get_double_mzud1t$(item));
      }
      tmp$_1 = toDoubleArray(destination);
    }
    return tmp$_1;
  };
  DynamicAccess.prototype.get_longArray_mzud1t$ = function ($receiver) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isLongArray(tmp$ = $receiver) ? tmp$ : null) != null)
      tmp$_1 = tmp$_0;
    else {
      var $receiver_0 = this.get_list_mzud1t$($receiver);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(this.get_long_mzud1t$(item));
      }
      tmp$_1 = toLongArray(destination);
    }
    return tmp$_1;
  };
  DynamicAccess.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DynamicAccess',
    interfaces: []
  };
  var DynamicAccess_instance = null;
  function DynamicAccess_getInstance() {
    if (DynamicAccess_instance === null) {
      new DynamicAccess();
    }
    return DynamicAccess_instance;
  }
  function Json() {
    Json_instance = this;
  }
  Json.prototype.invalidJson_61zpoe$ = function (msg) {
    if (msg === void 0)
      msg = 'Invalid JSON';
    throw IllegalStateException_init(msg.toString());
  };
  Json.prototype.parse_61zpoe$ = function (s) {
    return this.decode_zdjs8x$(new StrReader(s));
  };
  Json.prototype.followReference_d0xna2$ = function (current, root, path) {
    var $receiver = package$util.DynamicAccess;
    var tmp$;
    if (!startsWith(path, '#/')) {
      throw IllegalStateException_init('Only supported absolute JSON paths!'.toString());
    }
    var rpath = path.substring(2);
    var node = root;
    tmp$ = split_0(rpath, ['/']).iterator();
    while (tmp$.hasNext()) {
      var part = tmp$.next();
      node = $receiver.get_s2h60f$(node, part);
    }
    return node;
  };
  var StrReader$readWhile$lambda = wrapFunction(function () {
    return function (closure$filter, this$StrReader) {
      return function () {
        var $this = this$StrReader;
        var filter = closure$filter;
        while ($this.hasMore && filter($this.peekChar()))
          $this.readChar();
        return Unit;
      };
    };
  });
  Json.prototype.decode_zdjs8x$ = function ($receiver) {
    var tmp$;
    var ic = unboxChar($receiver.skipSpaces().read());
    switch (ic) {
      case 123:
        var out = LinkedHashMap_init();
        obj: while (true) {
          switch (unboxChar($receiver.skipSpaces().read())) {
            case 125:
              break obj;
            case 44:
              continue obj;
            default:$receiver.unread_za3lpa$();
              break;
          }
          var key = typeof (tmp$ = this.decode_zdjs8x$($receiver)) === 'string' ? tmp$ : throwCCE();
          $receiver.skipSpaces().expect_s8itvh$(58);
          var value = this.decode_zdjs8x$($receiver);
          out.put_xwzc9p$(key, value);
        }

        return out;
      case 91:
        var out_0 = ArrayList_init();
        array: while (true) {
          switch (unboxChar($receiver.skipSpaces().read())) {
            case 93:
              break array;
            case 44:
              continue array;
            default:$receiver.unread_za3lpa$();
              break;
          }
          var item = this.decode_zdjs8x$($receiver);
          out_0.add_11rb$(item);
        }

        return out_0;
      default:if (ic === 45 || ic === 43 || (new CharRange(48, 57)).contains_mef7kx$(ic)) {
          $receiver.unread_za3lpa$();
          var tmp$_0;
          var start = $receiver.pos;
          while (true) {
            var tmp$_1 = $receiver.hasMore;
            if (tmp$_1) {
              var it = $receiver.peekChar();
              tmp$_1 = (new CharRange(48, 57)).contains_mef7kx$(unboxChar(it)) || unboxChar(it) === 46 || unboxChar(it) === 101 || unboxChar(it) === 69 || unboxChar(it) === 45 || unboxChar(it) === 43;
            }
            if (!tmp$_1)
              break;
            $receiver.readChar();
          }
          var end = $receiver.pos;
          var res = (tmp$_0 = end > start ? $receiver.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '';
          return toDouble(res);
        }
         else
          switch (ic) {
            case 116:
            case 102:
            case 110:
              $receiver.unread_za3lpa$();
              if ($receiver.tryRead_61zpoe$('true'))
                return true;
              if ($receiver.tryRead_61zpoe$('false'))
                return false;
              if ($receiver.tryRead_61zpoe$('null'))
                return null;
              this.invalidJson_61zpoe$();
              break;
            case 34:
              $receiver.unread_za3lpa$();
              return readStringLit($receiver);
            default:this.invalidJson_61zpoe$("JSON: Not expected '" + String.fromCharCode(ic) + "'");
              break;
          }

        break;
    }
  };
  Json.prototype.stringify_s8jyv4$ = function (obj) {
    return this.encodeUntyped_s8jyv4$(obj);
  };
  Json.prototype.encodeUntyped_s8jyv4$ = function (obj) {
    var $receiver = StringBuilder_init();
    this.encodeUntyped_dx15ti$(obj, $receiver);
    return $receiver.toString();
  };
  Json.prototype.encodeUntyped_dx15ti$ = function (obj, b) {
    if (obj == null)
      b.append_gw00v9$('null');
    else if (typeof obj === 'boolean')
      b.append_gw00v9$(obj ? 'true' : 'false');
    else if (Kotlin.isType(obj, Map)) {
      b.append_s8itvh$(123);
      var i = 0;
      for (var tmp$ = obj.entries.iterator(); tmp$.hasNext(); ++i) {
        var v = tmp$.next();
        if (i !== 0)
          b.append_s8itvh$(44);
        this.encodeUntyped_dx15ti$(v.key, b);
        b.append_s8itvh$(58);
        this.encodeUntyped_dx15ti$(v.value, b);
      }
      b.append_s8itvh$(125);
    }
     else if (Kotlin.isType(obj, Iterable)) {
      b.append_s8itvh$(91);
      var i_0 = 0;
      for (var tmp$_0 = obj.iterator(); tmp$_0.hasNext(); ++i_0) {
        var v_0 = tmp$_0.next();
        if (i_0 !== 0)
          b.append_s8itvh$(44);
        this.encodeUntyped_dx15ti$(v_0, b);
      }
      b.append_s8itvh$(93);
    }
     else if (Kotlin.isType(obj, Enum))
      this.encodeString_0(obj.name, b);
    else if (typeof obj === 'string')
      this.encodeString_0(obj, b);
    else if (Kotlin.isNumber(obj))
      b.append_gw00v9$(toString(obj));
    else if (Kotlin.isType(obj, CustomJsonSerializer))
      obj.encodeToJson_irqrwq$(b);
    else {
      throw IllegalStateException_init(("JSON: Don't know how to serialize " + toString(obj)).toString());
    }
  };
  Json.prototype.encodePrettyUntyped_hvn9da$ = function (obj, indentChunk) {
    if (indentChunk === void 0)
      indentChunk = '\t';
    var $receiver = new Indenter();
    this.encodePrettyUntyped_m1go5v$(obj, $receiver);
    return $receiver.toString_8kj6y5$(true, indentChunk);
  };
  Json.prototype.encodePrettyUntyped_m1go5v$ = function (obj, b) {
    if (obj == null)
      b.inline_61zpoe$('null');
    else if (typeof obj === 'boolean')
      b.inline_61zpoe$(obj ? 'true' : 'false');
    else if (Kotlin.isType(obj, Map)) {
      b.line_61zpoe$('{');
      b._indent();
      try {
        var entries = obj.entries;
        var i = 0;
        for (var tmp$ = entries.iterator(); tmp$.hasNext(); ++i) {
          var v = tmp$.next();
          if (i !== 0)
            b.line_61zpoe$(',');
          b.inline_61zpoe$(this.encodeString_1('' + toString(v.key)));
          b.inline_61zpoe$(': ');
          this.encodePrettyUntyped_m1go5v$(v.value, b);
          if (i === (entries.size - 1 | 0))
            b.line_61zpoe$('');
        }
      }
      finally {
        b._unindent();
      }
      b.inline_61zpoe$('}');
    }
     else if (Kotlin.isType(obj, Iterable)) {
      b.line_61zpoe$('[');
      b._indent();
      try {
        var entries_0 = toList(obj);
        var i_0 = 0;
        for (var tmp$_0 = entries_0.iterator(); tmp$_0.hasNext(); ++i_0) {
          var v_0 = tmp$_0.next();
          if (i_0 !== 0)
            b.line_61zpoe$(',');
          this.encodePrettyUntyped_m1go5v$(v_0, b);
          if (i_0 === (entries_0.size - 1 | 0))
            b.line_61zpoe$('');
        }
      }
      finally {
        b._unindent();
      }
      b.inline_61zpoe$(']');
    }
     else if (typeof obj === 'string')
      b.inline_61zpoe$(this.encodeString_1(obj));
    else if (Kotlin.isNumber(obj))
      b.inline_61zpoe$(toString(obj));
    else if (Kotlin.isType(obj, CustomJsonSerializer)) {
      var $receiver = StringBuilder_init();
      obj.encodeToJson_irqrwq$($receiver);
      b.inline_61zpoe$($receiver.toString());
    }
     else {
      throw IllegalStateException_init(("JSON: Don't know how to serialize " + toString(obj)).toString());
    }
  };
  Json.prototype.encodeString_1 = function (str) {
    var $receiver = StringBuilder_init();
    this.encodeString_0(str, $receiver);
    return $receiver.toString();
  };
  Json.prototype.encodeString_0 = function (str, b) {
    var tmp$;
    b.append_s8itvh$(34);
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      switch (c) {
        case 92:
          b.append_gw00v9$('\\\\');
          break;
        case 47:
          b.append_gw00v9$('\\/');
          break;
        case 39:
          b.append_gw00v9$("\\'");
          break;
        case 34:
          b.append_gw00v9$('\\"');
          break;
        case 8:
          b.append_gw00v9$('\\b');
          break;
        case 12:
          b.append_gw00v9$('\\f');
          break;
        case 10:
          b.append_gw00v9$('\\n');
          break;
        case 13:
          b.append_gw00v9$('\\r');
          break;
        case 9:
          b.append_gw00v9$('\\t');
          break;
        default:b.append_s8itvh$(c);
          break;
      }
    }
    b.append_s8itvh$(34);
  };
  Json.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Json',
    interfaces: []
  };
  var Json_instance = null;
  function Json_getInstance() {
    if (Json_instance === null) {
      new Json();
    }
    return Json_instance;
  }
  function CustomJsonSerializer() {
  }
  CustomJsonSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CustomJsonSerializer',
    interfaces: []
  };
  function toJsonUntyped($receiver) {
    return Json_getInstance().encodeUntyped_s8jyv4$($receiver);
  }
  function MetaListIterable(items) {
    this.items = items;
  }
  MetaListIterable.prototype.iterator = function () {
    var $receiver = withIndex(this.items);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(new IteratorStepInfo(item.index, this.items.size, item.value), item.value));
    }
    return destination.iterator();
  };
  MetaListIterable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MetaListIterable',
    interfaces: [Iterable]
  };
  function get_metaIter($receiver) {
    return new MetaListIterable(toList($receiver));
  }
  function IteratorStepInfo(index0, length, item) {
    this.index0 = index0;
    this.length = length;
    this.item = item;
  }
  Object.defineProperty(IteratorStepInfo.prototype, 'isFirst', {
    get: function () {
      return this.index0 === 0;
    }
  });
  Object.defineProperty(IteratorStepInfo.prototype, 'isLast', {
    get: function () {
      return this.index0 >= (this.length - 1 | 0);
    }
  });
  IteratorStepInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IteratorStepInfo',
    interfaces: []
  };
  IteratorStepInfo.prototype.component1 = function () {
    return this.index0;
  };
  IteratorStepInfo.prototype.component2 = function () {
    return this.length;
  };
  IteratorStepInfo.prototype.component3 = function () {
    return this.item;
  };
  IteratorStepInfo.prototype.copy_vq7693$ = function (index0, length, item) {
    return new IteratorStepInfo(index0 === void 0 ? this.index0 : index0, length === void 0 ? this.length : length, item === void 0 ? this.item : item);
  };
  IteratorStepInfo.prototype.toString = function () {
    return 'IteratorStepInfo(index0=' + Kotlin.toString(this.index0) + (', length=' + Kotlin.toString(this.length)) + (', item=' + Kotlin.toString(this.item)) + ')';
  };
  IteratorStepInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index0) | 0;
    result = result * 31 + Kotlin.hashCode(this.length) | 0;
    result = result * 31 + Kotlin.hashCode(this.item) | 0;
    return result;
  };
  IteratorStepInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index0, other.index0) && Kotlin.equals(this.length, other.length) && Kotlin.equals(this.item, other.item)))));
  };
  function StrReader(str, file, pos) {
    if (file === void 0)
      file = 'file';
    if (pos === void 0)
      pos = 0;
    this.str = str;
    this.file = file;
    this.pos = pos;
    this.length = this.str.length;
  }
  Object.defineProperty(StrReader.prototype, 'hasMore', {
    get: function () {
      return this.pos < this.str.length;
    }
  });
  StrReader.prototype.slice_o14v8n$ = defineInlineFunction('output.io.ktor.start.util.StrReader.slice_o14v8n$', function (action) {
    var start = this.pos;
    action();
    var end = this.pos;
    return end > start ? this.slice_vux9f0$(start, end) : null;
  });
  StrReader.prototype.slice_vux9f0$ = function (start, end) {
    return this.str.substring(start, end);
  };
  StrReader.prototype.peek_za3lpa$ = function (count) {
    return this.substr_0(this.pos, count);
  };
  StrReader.prototype.peekChar = function () {
    return this.hasMore ? this.str.charCodeAt(this.pos) : 0;
  };
  StrReader.prototype.read_za3lpa$ = function (count) {
    var $receiver = this.peek_za3lpa$(count);
    this.skip_za3lpa$(count);
    return $receiver;
  };
  StrReader.prototype.skipWhile_akknk2$ = defineInlineFunction('output.io.ktor.start.util.StrReader.skipWhile_akknk2$', wrapFunction(function () {
    return function (filter) {
      while (this.hasMore && filter(this.peekChar()))
        this.readChar();
    };
  }));
  StrReader.prototype.readWhile_akknk2$ = defineInlineFunction('output.io.ktor.start.util.StrReader.readWhile_akknk2$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var StrReader$readWhile$lambda = wrapFunction(function () {
      return function (closure$filter, this$StrReader) {
        return function () {
          var $this = this$StrReader;
          var filter = closure$filter;
          while ($this.hasMore && filter($this.peekChar()))
            $this.readChar();
          return Unit;
        };
      };
    });
    return function (filter) {
      var tmp$;
      var start = this.pos;
      while (this.hasMore && filter(this.peekChar()))
        this.readChar();
      var end = this.pos;
      return (tmp$ = end > start ? this.slice_vux9f0$(start, end) : null) != null ? tmp$ : '';
    };
  }));
  StrReader.prototype.unread_za3lpa$ = function (count) {
    if (count === void 0)
      count = 1;
    this.pos = this.pos - count | 0;
    return this;
  };
  StrReader.prototype.readChar = function () {
    var tmp$;
    if (this.hasMore) {
      return toBoxedChar(this.str.charCodeAt((tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$)));
    }
     else
      return toBoxedChar(0);
  };
  StrReader.prototype.read = function () {
    var tmp$;
    if (this.hasMore) {
      return toBoxedChar(this.str.charCodeAt((tmp$ = this.pos, this.pos = tmp$ + 1 | 0, tmp$)));
    }
     else
      return toBoxedChar(0);
  };
  StrReader.prototype.readExpect_61zpoe$ = function (expected) {
    var readed = this.read_za3lpa$(expected.length);
    if (!equals(readed, expected))
      throw IllegalArgumentException_init("Expected '" + expected + "' but found '" + readed + "' at " + this.pos);
    return readed;
  };
  StrReader.prototype.expect_s8itvh$ = function (expected) {
    return this.readExpect_61zpoe$(String.fromCharCode(expected));
  };
  StrReader.prototype.skip_za3lpa$ = function (count) {
    if (count === void 0)
      count = 1;
    this.pos = this.pos + count | 0;
    return this;
  };
  var Math_0 = Math;
  StrReader.prototype.substr_0 = function (pos, length) {
    var tmp$ = this.str;
    var b = this.length;
    var tmp$_0 = Math_0.min(pos, b);
    var a = pos + length | 0;
    var b_0 = this.length;
    var endIndex = Math_0.min(a, b_0);
    return tmp$.substring(tmp$_0, endIndex);
  };
  StrReader.prototype.skipSpaces = function () {
    while (true) {
      var tmp$ = this.hasMore;
      if (tmp$) {
        tmp$ = isWhitespace(unboxChar(this.peekChar()));
      }
      if (!tmp$)
        break;
      this.readChar();
    }
    return this;
  };
  StrReader.prototype.tryRead_61zpoe$ = function (str) {
    if (equals(this.peek_za3lpa$(str.length), str)) {
      this.skip_za3lpa$(str.length);
      return true;
    }
    return false;
  };
  StrReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StrReader',
    interfaces: []
  };
  function readStringLit($receiver, reportErrors) {
    if (reportErrors === void 0)
      reportErrors = true;
    var tmp$;
    var out = StringBuilder_init();
    var quotec = unboxChar($receiver.read());
    switch (quotec) {
      case 34:
      case 39:
        break;
      default:throw IllegalStateException_init('Invalid string literal'.toString());
    }
    var closed = false;
    while ($receiver.hasMore) {
      var c = unboxChar($receiver.read());
      if (c === 92) {
        var cc = unboxChar($receiver.read());
        switch (cc) {
          case 92:
            tmp$ = 92;
            break;
          case 47:
            tmp$ = 47;
            break;
          case 39:
            tmp$ = 39;
            break;
          case 34:
            tmp$ = 34;
            break;
          case 98:
            tmp$ = 8;
            break;
          case 102:
            tmp$ = 12;
            break;
          case 110:
            tmp$ = 10;
            break;
          case 114:
            tmp$ = 13;
            break;
          case 116:
            tmp$ = 9;
            break;
          case 117:
            tmp$ = toChar(toInt($receiver.read_za3lpa$(4), 16));
            break;
          default:tmp$ = unboxChar(Json_getInstance().invalidJson_61zpoe$("Invalid char '" + String.fromCharCode(cc) + "'"));
            break;
        }
        out.append_s8itvh$(tmp$);
      }
       else if (c === quotec) {
        closed = true;
        break;
      }
       else {
        out.append_s8itvh$(c);
      }
    }
    if (!closed && reportErrors) {
      throw RuntimeException_init_0("String literal not closed! '" + $receiver.str + "'");
    }
    return out.toString();
  }
  function generate(subject, blocks, continuation) {
    return generate_0(subject, copyToArray(toList(blocks)).slice(), continuation);
  }
  function generate_0(subject_0, blocks_0, continuation_0, suspended) {
    var instance = new Coroutine$generate(subject_0, blocks_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$generate(subject_0, blocks_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_0 = void 0;
    this.local$out = void 0;
    this.local$file = void 0;
    this.local$subject = subject_0;
    this.local$blocks = blocks_0;
  }
  Coroutine$generate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$generate.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$generate.prototype.constructor = Coroutine$generate;
  Coroutine$generate.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$out = LinkedHashMap_init();
            var bb = new BlockBuilder(this.local$subject);
            for (tmp$ = 0; tmp$ !== this.local$blocks.length; ++tmp$) {
              var block = this.local$blocks[tmp$];
              bb.visit_z5skon$(block);
            }

            this.local$tmp$_0 = bb.files.entries.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var tmp$_0 = this.local$tmp$_0.next();
            this.local$file = tmp$_0.key;
            var gen = tmp$_0.value;
            this.state_0 = 3;
            this.result_0 = gen(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var value = this.result_0;
            this.local$out.put_xwzc9p$(this.local$file, value);
            this.state_0 = 2;
            continue;
          case 4:
            return this.local$out;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function BlockSlot(name, block) {
    this.name = name;
    this.block = block;
  }
  BlockSlot.prototype.toString = function () {
    return 'Slot(' + this.block + '.' + this.name + ')';
  };
  BlockSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockSlot',
    interfaces: []
  };
  function SlotInstance(slot) {
    this.slot = slot;
    this.$delegate_frufmh$_0 = new Extra$Mixin();
    this.blocks = ArrayList_init();
  }
  function SlotInstance$RenderBlock(replace, indenter) {
    this.replace = replace;
    this.indenter = indenter;
  }
  SlotInstance$RenderBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderBlock',
    interfaces: []
  };
  SlotInstance.prototype.render_oryfgh$ = function (indenter) {
    var tmp$;
    var $receiver = this.blocks;
    var lastOrNull$result;
    lastOrNull$break: do {
      var iterator = $receiver.listIterator_za3lpa$($receiver.size);
      while (iterator.hasPrevious()) {
        var element = iterator.previous();
        if (element.replace) {
          lastOrNull$result = element;
          break lastOrNull$break;
        }
      }
      lastOrNull$result = null;
    }
     while (false);
    var only = lastOrNull$result;
    if (only != null) {
      only.indenter(indenter);
    }
     else {
      tmp$ = this.blocks.iterator();
      while (tmp$.hasNext()) {
        var block = tmp$.next();
        block.indenter(indenter);
      }
    }
  };
  SlotInstance.prototype.toString = function () {
    return 'SlotInstance(' + this.slot + ')';
  };
  Object.defineProperty(SlotInstance.prototype, 'extra', {
    get: function () {
      return this.$delegate_frufmh$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_frufmh$_0.extra = tmp$;
    }
  });
  SlotInstance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotInstance',
    interfaces: [Extra]
  };
  function FileResult(name, data, mode, charset) {
    this.name = name;
    this.data = data;
    this.mode = mode;
    this.charset = charset;
    this.string_1nurgm$_0 = lazy(FileResult$string$lambda(this));
  }
  Object.defineProperty(FileResult.prototype, 'string', {
    get: function () {
      return this.string_1nurgm$_0.value;
    }
  });
  FileResult.prototype.toString = function () {
    return 'FileResult(' + this.name + ', ' + (this.charset != null ? this.string : 'binary(' + this.data.length + ')') + ')';
  };
  function FileResult$string$lambda(this$FileResult) {
    return function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      tmp$_1 = (tmp$ = this$FileResult.charset) != null ? toString_1(this$FileResult.data, tmp$) : null;
      return (tmp$_0 = tmp$_1) != null ? tmp$_0 : get_hex(this$FileResult.data);
    };
  }
  FileResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileResult',
    interfaces: []
  };
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  function BlockBuilder(subject) {
    this.subject = subject;
    this.$delegate_ts3nbg$_0 = new Extra$Mixin();
    this.blockInstances = LinkedHashMap_init();
    this.files = LinkedHashMap_init();
    this.currentBlock = null;
    this.visited_7kwj06$_0 = HashSet_init();
  }
  BlockBuilder.prototype.getSlotInstance_aiiv2x$ = function (slot) {
    var tmp$;
    var $receiver = this.blockInstances;
    var tmp$_0;
    var value = $receiver.get_11rb$(slot);
    if (value == null) {
      var answer = new SlotInstance(slot);
      $receiver.put_xwzc9p$(slot, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    return Kotlin.isType(tmp$ = tmp$_0, SlotInstance) ? tmp$ : throwCCE();
  };
  BlockBuilder.prototype._gen_2hbfcb$ = function (slot) {
    if (this.currentBlock == null) {
      throw IllegalStateException_init('currentBlock==null'.toString());
    }
    if (!ensureNotNull(this.currentBlock).blockDeps.contains_11rb$(slot.block) && !equals(slot.block, this.currentBlock)) {
      throw IllegalStateException_init(('To use ' + slot + ', must directly depend on block ' + slot.block).toString());
    }
    return this.getSlotInstance_aiiv2x$(slot);
  };
  BlockBuilder.prototype.replace_hwf8z$ = function (slot, callback) {
    var instance = this._gen_2hbfcb$(slot);
    var $receiver = instance.blocks;
    var element = new SlotInstance$RenderBlock(true, callback);
    $receiver.add_11rb$(element);
  };
  BlockBuilder.prototype.append_qu2wte$ = function (slot, once, callback) {
    if (once === void 0)
      once = false;
    var instance = this._gen_2hbfcb$(slot);
    var $receiver = instance.blocks;
    var element = new SlotInstance$RenderBlock(false, callback);
    $receiver.add_11rb$(element);
  };
  BlockBuilder.prototype.prepend_qu2wte$ = function (slot, once, callback) {
    if (once === void 0)
      once = false;
    var instance = this._gen_2hbfcb$(slot);
    instance.blocks.add_wxm5ur$(0, new SlotInstance$RenderBlock(false, callback));
  };
  function BlockBuilder$appendSeparated$lambda$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function BlockBuilder$appendSeparated$lambda(closure$callback) {
    return function ($receiver) {
      SEPARATOR($receiver, BlockBuilder$appendSeparated$lambda$lambda(closure$callback));
      return Unit;
    };
  }
  BlockBuilder.prototype.appendSeparated_qu2wte$ = function (slot, once, callback) {
    if (once === void 0)
      once = false;
    this.append_qu2wte$(slot, once, BlockBuilder$appendSeparated$lambda(callback));
  };
  function BlockBuilder$prependSeparated$lambda$lambda(closure$callback) {
    return function ($receiver) {
      closure$callback($receiver);
      return Unit;
    };
  }
  function BlockBuilder$prependSeparated$lambda(closure$callback) {
    return function ($receiver) {
      SEPARATOR($receiver, BlockBuilder$prependSeparated$lambda$lambda(closure$callback));
      return Unit;
    };
  }
  BlockBuilder.prototype.prependSeparated_qu2wte$ = function (slot, once, callback) {
    if (once === void 0)
      once = false;
    this.prepend_qu2wte$(slot, once, BlockBuilder$prependSeparated$lambda(callback));
  };
  function BlockBuilder$fileText$lambda(closure$callback_0, this$BlockBuilder_0, closure$charset_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BlockBuilder$fileText$lambda(closure$callback_0, this$BlockBuilder_0, closure$charset_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BlockBuilder$fileText$lambda(closure$callback_0, this$BlockBuilder_0, closure$charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$this$BlockBuilder = this$BlockBuilder_0;
    this.local$closure$charset = closure$charset_0;
    this.local$indenter = void 0;
  }
  Coroutine$BlockBuilder$fileText$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BlockBuilder$fileText$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BlockBuilder$fileText$lambda.prototype.constructor = Coroutine$BlockBuilder$fileText$lambda;
  Coroutine$BlockBuilder$fileText$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$indenter = new Indenter();
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this.local$indenter, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return toByteArray(this.local$this$BlockBuilder.expandTabs_44n53b$_0(this.local$indenter.toString()), this.local$closure$charset);
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BlockBuilder.prototype.fileText_7k8vha$ = function (name, charset, mode, callback) {
    if (charset === void 0)
      charset = UTF8_getInstance();
    if (mode === void 0)
      mode = toInt('644', 8);
    this.fileBinary_qk5z91$(name, charset, mode, BlockBuilder$fileText$lambda(callback, this, charset));
  };
  BlockBuilder.prototype.expandTabs_44n53b$_0 = function ($receiver) {
    return replace($receiver, '\t', '    ');
  };
  function BlockBuilder$fileBinary$lambda(closure$name_0, closure$callback_0, closure$mode_0, closure$charset_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BlockBuilder$fileBinary$lambda(closure$name_0, closure$callback_0, closure$mode_0, closure$charset_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BlockBuilder$fileBinary$lambda(closure$name_0, closure$callback_0, closure$mode_0, closure$charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$name = closure$name_0;
    this.local$closure$callback = closure$callback_0;
    this.local$closure$mode = closure$mode_0;
    this.local$closure$charset = closure$charset_0;
  }
  Coroutine$BlockBuilder$fileBinary$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BlockBuilder$fileBinary$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BlockBuilder$fileBinary$lambda.prototype.constructor = Coroutine$BlockBuilder$fileBinary$lambda;
  Coroutine$BlockBuilder$fileBinary$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            return new FileResult(this.local$closure$name, tmp$, this.local$closure$mode, this.local$closure$charset);
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  BlockBuilder.prototype.fileBinary_qk5z91$ = function (name, charset, mode, callback) {
    if (charset === void 0)
      charset = null;
    if (mode === void 0)
      mode = toInt('644', 8);
    this.files.put_xwzc9p$(name, BlockBuilder$fileBinary$lambda(name, callback, mode, charset));
  };
  function BlockBuilder$block$lambda(closure$instance) {
    return function ($receiver) {
      closure$instance.render_oryfgh$($receiver);
      return Unit;
    };
  }
  function BlockBuilder$block$lambda_0(closure$slot, closure$callback, this$BlockBuilder) {
    return function () {
      this$BlockBuilder.append_qu2wte$(closure$slot, void 0, closure$callback);
      return Unit;
    };
  }
  BlockBuilder.prototype.block_1s7wi0$ = function ($receiver, slot, callback) {
    if (callback === void 0)
      callback = null;
    var instance = this.getSlotInstance_aiiv2x$(slot);
    $receiver.linedeferred_yot30u$(BlockBuilder$block$lambda(instance));
    if (callback != null) {
      this.currentBlock_dxbwye$(slot.block, BlockBuilder$block$lambda_0(slot, callback, this));
    }
  };
  BlockBuilder.prototype.currentBlock_dxbwye$ = function (temporal, callback) {
    var old = this.currentBlock;
    try {
      this.currentBlock = temporal;
      callback();
    }
    finally {
      this.currentBlock = old;
    }
  };
  function BlockBuilder$visit$lambda(closure$block, this$BlockBuilder) {
    return function () {
      var $receiver = closure$block;
      var this$BlockBuilder_0 = this$BlockBuilder;
      var tmp$;
      $receiver.render_miqy8c$(this$BlockBuilder_0, (tmp$ = this$BlockBuilder_0.subject) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  BlockBuilder.prototype.visit_z5skon$ = function (block) {
    var tmp$;
    if (this.visited_7kwj06$_0.contains_11rb$(block))
      return;
    this.visited_7kwj06$_0.add_11rb$(block);
    tmp$ = block.blockDeps.iterator();
    while (tmp$.hasNext()) {
      var parent = tmp$.next();
      this.visit_z5skon$(parent);
    }
    this.currentBlock_dxbwye$(block, BlockBuilder$visit$lambda(block, this));
  };
  Object.defineProperty(BlockBuilder.prototype, 'extra', {
    get: function () {
      return this.$delegate_ts3nbg$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_ts3nbg$_0.extra = tmp$;
    }
  });
  BlockBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockBuilder',
    interfaces: [Extra]
  };
  function Block(blockDeps) {
    this.blockDeps = toSet_0(blockDeps);
  }
  Block.prototype.newSlot_pdl1vj$ = function (name) {
    if (name === void 0)
      name = null;
    return new BlockSlot(name != null ? name : 'unnamed', this);
  };
  Block.prototype.render_miqy8c$ = function ($receiver, info) {
  };
  Block.prototype.getAllDependantBlocks_7onwc9$ = function (out) {
    if (out === void 0)
      out = LinkedHashSet_init();
    var tmp$;
    if (!out.contains_11rb$(this)) {
      out.add_11rb$(this);
      tmp$ = this.blockDeps.iterator();
      while (tmp$.hasNext()) {
        var dep = tmp$.next();
        dep.getAllDependantBlocks_7onwc9$(out);
      }
    }
    return out;
  };
  Block.prototype.toString = function () {
    return 'Block(' + toString(Kotlin.getKClassFromExpression(this).simpleName) + ')';
  };
  Block.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Block',
    interfaces: []
  };
  function ByteArrayOutputStream() {
    this.pos_0 = 0;
    this.data_0 = new Int8Array(1024);
  }
  Object.defineProperty(ByteArrayOutputStream.prototype, 'size', {
    get: function () {
      return this.pos_0;
    }
  });
  ByteArrayOutputStream.prototype.ensure_0 = function (count) {
    if ((this.pos_0 + count | 0) > this.data_0.length) {
      var tmp$ = this.data_0;
      var a = this.pos_0 + count | 0;
      var b = this.data_0.length * 2 | 0;
      this.data_0 = copyOf(tmp$, Math_0.max(a, b));
    }
    return this;
  };
  ByteArrayOutputStream.prototype.byte_0 = wrapFunction(function () {
    return function (v) {
      var tmp$;
      this.data_0[tmp$ = this.pos_0, this.pos_0 = tmp$ + 1 | 0, tmp$] = numberToByte(v);
    };
  });
  ByteArrayOutputStream.prototype.u8_za3lpa$ = function (v) {
    var $receiver = this.ensure_0(1);
    var tmp$;
    $receiver.data_0[tmp$ = $receiver.pos_0, $receiver.pos_0 = tmp$ + 1 | 0, tmp$] = numberToByte(v);
    return $receiver;
  };
  ByteArrayOutputStream.prototype.u16_le_za3lpa$ = function (v) {
    var $receiver = this.ensure_0(2);
    var v_0 = v >> 0;
    var tmp$;
    $receiver.data_0[tmp$ = $receiver.pos_0, $receiver.pos_0 = tmp$ + 1 | 0, tmp$] = numberToByte(v_0);
    var v_1 = v >> 8;
    var tmp$_0;
    $receiver.data_0[tmp$_0 = $receiver.pos_0, $receiver.pos_0 = tmp$_0 + 1 | 0, tmp$_0] = numberToByte(v_1);
    return $receiver;
  };
  ByteArrayOutputStream.prototype.u32_le_za3lpa$ = function (v) {
    var $receiver = this.ensure_0(4);
    var v_0 = v >> 0;
    var tmp$;
    $receiver.data_0[tmp$ = $receiver.pos_0, $receiver.pos_0 = tmp$ + 1 | 0, tmp$] = numberToByte(v_0);
    var v_1 = v >> 8;
    var tmp$_0;
    $receiver.data_0[tmp$_0 = $receiver.pos_0, $receiver.pos_0 = tmp$_0 + 1 | 0, tmp$_0] = numberToByte(v_1);
    var v_2 = v >> 16;
    var tmp$_1;
    $receiver.data_0[tmp$_1 = $receiver.pos_0, $receiver.pos_0 = tmp$_1 + 1 | 0, tmp$_1] = numberToByte(v_2);
    var v_3 = v >> 24;
    var tmp$_2;
    $receiver.data_0[tmp$_2 = $receiver.pos_0, $receiver.pos_0 = tmp$_2 + 1 | 0, tmp$_2] = numberToByte(v_3);
    return $receiver;
  };
  ByteArrayOutputStream.prototype.bytes_fqrh44$ = function (data) {
    var $receiver = this.ensure_0(data.length);
    for (var n = 0; n < data.length; n++) {
      var v = data[n];
      var tmp$;
      $receiver.data_0[tmp$ = $receiver.pos_0, $receiver.pos_0 = tmp$ + 1 | 0, tmp$] = numberToByte(v);
    }
    return $receiver;
  };
  ByteArrayOutputStream.prototype.toByteArray = function () {
    return copyOf(this.data_0, this.pos_0);
  };
  ByteArrayOutputStream.prototype.build_xuyaid$ = defineInlineFunction('output.io.ktor.start.util.ByteArrayOutputStream.build_xuyaid$', function (builder) {
    builder(this);
    return this.toByteArray();
  });
  ByteArrayOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayOutputStream',
    interfaces: []
  };
  var buildByteArray = defineInlineFunction('output.io.ktor.start.util.buildByteArray_xuyaid$', wrapFunction(function () {
    var ByteArrayOutputStream_init = _.io.ktor.start.util.ByteArrayOutputStream;
    return function (builder) {
      var $this = new ByteArrayOutputStream_init();
      builder($this);
      return $this.toByteArray();
    };
  }));
  function Charset() {
  }
  Charset.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Charset',
    interfaces: []
  };
  function UTF8() {
    UTF8_instance = this;
  }
  UTF8.prototype.createByte_0 = function (codePoint, shift) {
    return codePoint >> shift & 63 | 128;
  };
  UTF8.prototype.decode_9w11d2$ = function (out, src, start, end) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var i = start;
    while (i < end) {
      var c = src[tmp$ = i, i = tmp$ + 1 | 0, tmp$] & 255;
      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          out.append_s8itvh$(toChar(c));
          break;
        case 12:
        case 13:
          out.append_s8itvh$(toChar((c & 31) << 6 | src[tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0] & 63));
          break;
        case 14:
          out.append_s8itvh$(toChar((c & 15) << 12 | (src[tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1] & 63) << 6 | src[tmp$_2 = i, i = tmp$_2 + 1 | 0, tmp$_2] & 63));
          break;
        default:throw IllegalStateException_init('Invalid UTF string'.toString());
      }
    }
  };
  UTF8.prototype.encode_srd0ak$ = function (out, src, start, end) {
    for (var n = start; n < end; n++) {
      var codePoint = src.charCodeAt(n) | 0;
      if ((codePoint & -128) === 0) {
        out.u8_za3lpa$(codePoint);
      }
       else {
        if ((codePoint & -2048) === 0)
          out.u8_za3lpa$(codePoint >> 6 & 31 | 192);
        else if ((codePoint & -65536) === 0) {
          out.u8_za3lpa$(codePoint >> 12 & 15 | 224);
          out.u8_za3lpa$(this.createByte_0(codePoint, 6));
        }
         else if ((codePoint & -2097152) === 0) {
          out.u8_za3lpa$(codePoint >> 18 & 7 | 240);
          out.u8_za3lpa$(this.createByte_0(codePoint, 12));
          out.u8_za3lpa$(this.createByte_0(codePoint, 6));
        }
        out.u8_za3lpa$(codePoint & 63 | 128);
      }
    }
  };
  UTF8.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UTF8',
    interfaces: [Charset]
  };
  var UTF8_instance = null;
  function UTF8_getInstance() {
    if (UTF8_instance === null) {
      new UTF8();
    }
    return UTF8_instance;
  }
  function ASCII() {
    ASCII_instance = this;
  }
  ASCII.prototype.decode_9w11d2$ = function (out, src, start, end) {
    for (var n = start; n < end; n++)
      out.append_s8itvh$(toChar(src[n]));
  };
  ASCII.prototype.encode_srd0ak$ = function (out, src, start, end) {
    for (var n = start; n < end; n++)
      out.u8_za3lpa$(src.charCodeAt(n) | 0);
  };
  ASCII.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ASCII',
    interfaces: [Charset]
  };
  var ASCII_instance = null;
  function ASCII_getInstance() {
    if (ASCII_instance === null) {
      new ASCII();
    }
    return ASCII_instance;
  }
  function toString_1($receiver, charset) {
    var $receiver_0 = StringBuilder_init();
    charset.decode_9w11d2$($receiver_0, $receiver, 0, $receiver.length);
    return $receiver_0.toString();
  }
  function toByteArray($receiver, charset) {
    var $this = new ByteArrayOutputStream();
    charset.encode_srd0ak$($this, $receiver, 0, $receiver.length);
    return $this.toByteArray();
  }
  function CRC32() {
    CRC32_instance = this;
    var $receiver = new Int32Array(256);
    var tmp$;
    var POLY = -306674912;
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) {
        if ((c & 1) !== 0) {
          tmp$ = POLY ^ c >>> 1;
        }
         else {
          tmp$ = c >>> 1;
        }
        c = tmp$;
      }
      $receiver[n] = c;
    }
    this.table = $receiver;
  }
  CRC32.prototype.update_3fbn1q$ = function (initial, u) {
    var crc = initial ^ -1;
    for (var i = 0; i < u.length; i++) {
      crc = this.table[(crc ^ u[i]) & 255] ^ crc >>> 8;
    }
    return crc ^ -1;
  };
  CRC32.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CRC32',
    interfaces: []
  };
  var CRC32_instance = null;
  function CRC32_getInstance() {
    if (CRC32_instance === null) {
      new CRC32();
    }
    return CRC32_instance;
  }
  function crc32($receiver) {
    return CRC32_getInstance().update_3fbn1q$(0, $receiver);
  }
  function get_octal($receiver) {
    return toInt($receiver, 8);
  }
  function Extra() {
  }
  function Extra$Mixin(extra) {
    if (extra === void 0)
      extra = null;
    this.extra_7v3q3f$_0 = extra;
  }
  Object.defineProperty(Extra$Mixin.prototype, 'extra', {
    get: function () {
      return this.extra_7v3q3f$_0;
    },
    set: function (extra) {
      this.extra_7v3q3f$_0 = extra;
    }
  });
  Extra$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [Extra]
  };
  function Extra$Property(name, defaultGen) {
    if (name === void 0)
      name = null;
    this.name = name;
    this.defaultGen = defaultGen;
  }
  Extra$Property.prototype.getValue_m0xvcc$ = defineInlineFunction('output.io.ktor.start.util.Extra.Property.getValue_m0xvcc$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var setExtra = _.io.ktor.start.util.setExtra_5kiv3h$;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra(thisRef, (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        return r;
      }
      return res;
    };
  }));
  Extra$Property.prototype.setValue_jwwfbt$ = defineInlineFunction('output.io.ktor.start.util.Extra.Property.setValue_jwwfbt$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var setExtra = _.io.ktor.start.util.setExtra_5kiv3h$;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0;
      setExtra(thisRef, (tmp$ = this.name) != null ? tmp$ : property.callableName, (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
    };
  }));
  Extra$Property.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Property',
    interfaces: []
  };
  function Extra$PropertyThis(name, defaultGen) {
    if (name === void 0)
      name = null;
    this.name = name;
    this.defaultGen = defaultGen;
  }
  Extra$PropertyThis.prototype.getValue_tv2abg$ = defineInlineFunction('output.io.ktor.start.util.Extra.PropertyThis.getValue_tv2abg$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = this.defaultGen(thisRef);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if (thisRef.extra == null)
          thisRef.extra = LinkedHashMap_init();
        tmp$_7 = thisRef.extra;
        tmp$_4 = (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        return r;
      }
      return res;
    };
  }));
  Extra$PropertyThis.prototype.setValue_9wlt1k$ = defineInlineFunction('output.io.ktor.start.util.Extra.PropertyThis.setValue_9wlt1k$', wrapFunction(function () {
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (thisRef.extra == null)
        thisRef.extra = LinkedHashMap_init();
      tmp$_3 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      tmp$_2 = (tmp$_1 = value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
      if (tmp$_3 != null) {
        tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
      }
    };
  }));
  Extra$PropertyThis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyThis',
    interfaces: []
  };
  Extra.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Extra',
    interfaces: []
  };
  function getExtraTyped($receiver, name) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver.extra) != null ? tmp$.get_11rb$(name) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  }
  function getExtra($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.extra) != null ? tmp$.get_11rb$(name) : null;
  }
  function setExtra($receiver, name, value) {
    var tmp$;
    if ($receiver.extra == null)
      $receiver.extra = LinkedHashMap_init();
    if ((tmp$ = $receiver.extra) != null) {
      tmp$.put_xwzc9p$(name, value);
    }
  }
  function Hex() {
    Hex_instance = this;
    this.DIGITS_0 = '0123456789ABCDEF';
    this.DIGITS_UPPER_0 = this.DIGITS_0.toUpperCase();
    this.DIGITS_LOWER_0 = this.DIGITS_0.toLowerCase();
  }
  Hex.prototype.decodeChar_s8itvh$ = function (c) {
    if ((new CharRange(48, 57)).contains_mef7kx$(c))
      return c - 48;
    else if ((new CharRange(97, 102)).contains_mef7kx$(c))
      return c - 97 + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(c))
      return c - 65 + 10 | 0;
    else
      return -1;
  };
  Hex.prototype.encodeCharLower_za3lpa$ = function (v) {
    return toBoxedChar(this.DIGITS_LOWER_0.charCodeAt(v));
  };
  Hex.prototype.encodeCharUpper_za3lpa$ = function (v) {
    return toBoxedChar(this.DIGITS_UPPER_0.charCodeAt(v));
  };
  Hex.prototype.isHexDigit_s8itvh$ = function (c) {
    return this.decodeChar_s8itvh$(c) >= 0;
  };
  Hex.prototype.decode_61zpoe$ = function (str) {
    var tmp$, tmp$_0;
    var out = new Int8Array((str.length + 1 | 0) / 2 | 0);
    var opos = 0;
    var nibbles = 0;
    var value = 0;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var vv = this.decodeChar_s8itvh$(c);
      if (vv >= 0) {
        value = value << 4 | vv;
        nibbles = nibbles + 1 | 0;
      }
      if (nibbles === 2) {
        out[tmp$_0 = opos, opos = tmp$_0 + 1 | 0, tmp$_0] = toByte(value);
        nibbles = 0;
        value = 0;
      }
    }
    return opos !== out.length ? copyOf(out, opos) : out;
  };
  Hex.prototype.encodeLower_fqrh44$ = function (src) {
    return this.encodeBase_0(src, this.DIGITS_LOWER_0);
  };
  Hex.prototype.encodeUpper_fqrh44$ = function (src) {
    return this.encodeBase_0(src, this.DIGITS_UPPER_0);
  };
  Hex.prototype.encodeBase_0 = function (data, digits) {
    if (digits === void 0)
      digits = this.DIGITS_0;
    var out = StringBuilder_init_0(data.length * 2 | 0);
    for (var n = 0; n !== data.length; ++n) {
      var v = data[n] & 255;
      out.append_s8itvh$(digits.charCodeAt(v >>> 4 & 15));
      out.append_s8itvh$(digits.charCodeAt(v >>> 0 & 15));
    }
    return out.toString();
  };
  Hex.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Hex',
    interfaces: []
  };
  var Hex_instance = null;
  function Hex_getInstance() {
    if (Hex_instance === null) {
      new Hex();
    }
    return Hex_instance;
  }
  function get_unhexIgnoreSpaces($receiver) {
    return get_unhexIgnoreSpaces_0(joinToString($receiver, ''));
  }
  function get_unhexIgnoreSpaces_0($receiver) {
    return get_unhex(replace($receiver, ' ', ''));
  }
  function get_unhex($receiver) {
    return Hex_getInstance().decode_61zpoe$($receiver);
  }
  function get_hex($receiver) {
    return Hex_getInstance().encodeLower_fqrh44$($receiver);
  }
  function get_hex_0($receiver) {
    return '0x' + get_shex($receiver);
  }
  function get_shex($receiver) {
    var out = '';
    for (var n = 0; n < 8; n++) {
      var v = $receiver >>> ((7 - n | 0) * 4 | 0) & 15;
      out += String.fromCharCode(unboxChar(Hex_getInstance().encodeCharUpper_za3lpa$(v)));
    }
    return out;
  }
  function ID() {
    ID_instance = this;
  }
  ID.prototype.normalizeMethodName_61zpoe$ = function (str) {
    return decapitalize(this.normalize_61zpoe$(str));
  };
  ID.prototype.normalizeClassName_61zpoe$ = function (str) {
    return capitalize(this.normalize_61zpoe$(str));
  };
  function ID$normalize$lambda(it) {
    return capitalize(it.value);
  }
  ID.prototype.normalize_61zpoe$ = function (str) {
    return joinToString_0(Regex_init('\\w+').findAll_905azu$(str), '', void 0, void 0, void 0, void 0, ID$normalize$lambda);
  };
  ID.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ID',
    interfaces: []
  };
  var ID_instance = null;
  function ID_getInstance() {
    if (ID_instance === null) {
      new ID();
    }
    return ID_instance;
  }
  function Indenter(actions) {
    Indenter$Companion_getInstance();
    if (actions === void 0) {
      actions = ArrayList_init();
    }
    this.actions_8be2vx$ = actions;
    this.indentEmptyLines = true;
    this.out = '';
    this.indentLevel_3b9hgv$_0 = 0;
  }
  function Indenter$INDENTS() {
    Indenter$INDENTS_instance = this;
    this.INDENTS_0 = arrayListOf(['']);
  }
  Indenter$INDENTS.prototype.get_za3lpa$ = function (index) {
    if (index >= this.INDENTS_0.size) {
      var calculate = this.INDENTS_0.size * 10 | 0;
      var indent = this.INDENTS_0.get_za3lpa$(this.INDENTS_0.size - 1 | 0);
      while (calculate >= this.INDENTS_0.size) {
        indent += '\t';
        this.INDENTS_0.add_11rb$(indent);
      }
    }
    return index <= 0 ? '' : this.INDENTS_0.get_za3lpa$(index);
  };
  Indenter$INDENTS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'INDENTS',
    interfaces: []
  };
  var Indenter$INDENTS_instance = null;
  function Indenter$INDENTS_getInstance() {
    if (Indenter$INDENTS_instance === null) {
      new Indenter$INDENTS();
    }
    return Indenter$INDENTS_instance;
  }
  function Indenter$Action() {
  }
  function Indenter$Action$Text() {
  }
  Indenter$Action$Text.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Text',
    interfaces: [Indenter$Action]
  };
  function Indenter$Action$Marker(data) {
    this.data = data;
  }
  Indenter$Action$Marker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Marker',
    interfaces: [Indenter$Action]
  };
  Indenter$Action$Marker.prototype.component1 = function () {
    return this.data;
  };
  Indenter$Action$Marker.prototype.copy_za3rmp$ = function (data) {
    return new Indenter$Action$Marker(data === void 0 ? this.data : data);
  };
  Indenter$Action$Marker.prototype.toString = function () {
    return 'Marker(data=' + Kotlin.toString(this.data) + ')';
  };
  Indenter$Action$Marker.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  Indenter$Action$Marker.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  function Indenter$Action$Inline(str) {
    this.str_hhwjt7$_0 = str;
  }
  Object.defineProperty(Indenter$Action$Inline.prototype, 'str', {
    get: function () {
      return this.str_hhwjt7$_0;
    }
  });
  Indenter$Action$Inline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Inline',
    interfaces: [Indenter$Action$Text]
  };
  Indenter$Action$Inline.prototype.component1 = function () {
    return this.str;
  };
  Indenter$Action$Inline.prototype.copy_61zpoe$ = function (str) {
    return new Indenter$Action$Inline(str === void 0 ? this.str : str);
  };
  Indenter$Action$Inline.prototype.toString = function () {
    return 'Inline(str=' + Kotlin.toString(this.str) + ')';
  };
  Indenter$Action$Inline.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    return result;
  };
  Indenter$Action$Inline.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.str, other.str))));
  };
  function Indenter$Action$Line(str) {
    this.str_fnpwjq$_0 = str;
  }
  Object.defineProperty(Indenter$Action$Line.prototype, 'str', {
    get: function () {
      return this.str_fnpwjq$_0;
    }
  });
  Indenter$Action$Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Indenter$Action$Text]
  };
  Indenter$Action$Line.prototype.component1 = function () {
    return this.str;
  };
  Indenter$Action$Line.prototype.copy_61zpoe$ = function (str) {
    return new Indenter$Action$Line(str === void 0 ? this.str : str);
  };
  Indenter$Action$Line.prototype.toString = function () {
    return 'Line(str=' + Kotlin.toString(this.str) + ')';
  };
  Indenter$Action$Line.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    return result;
  };
  Indenter$Action$Line.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.str, other.str))));
  };
  function Indenter$Action$LineDeferred(callback) {
    this.callback = callback;
  }
  Indenter$Action$LineDeferred.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LineDeferred',
    interfaces: [Indenter$Action]
  };
  Indenter$Action$LineDeferred.prototype.component1 = function () {
    return this.callback;
  };
  Indenter$Action$LineDeferred.prototype.copy_xyzrvr$ = function (callback) {
    return new Indenter$Action$LineDeferred(callback === void 0 ? this.callback : callback);
  };
  Indenter$Action$LineDeferred.prototype.toString = function () {
    return 'LineDeferred(callback=' + Kotlin.toString(this.callback) + ')';
  };
  Indenter$Action$LineDeferred.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.callback) | 0;
    return result;
  };
  Indenter$Action$LineDeferred.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.callback, other.callback))));
  };
  function Indenter$Action$EmptyLineOnce() {
    Indenter$Action$EmptyLineOnce_instance = this;
  }
  Indenter$Action$EmptyLineOnce.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EmptyLineOnce',
    interfaces: [Indenter$Action]
  };
  var Indenter$Action$EmptyLineOnce_instance = null;
  function Indenter$Action$EmptyLineOnce_getInstance() {
    if (Indenter$Action$EmptyLineOnce_instance === null) {
      new Indenter$Action$EmptyLineOnce();
    }
    return Indenter$Action$EmptyLineOnce_instance;
  }
  function Indenter$Action$Indent() {
    Indenter$Action$Indent_instance = this;
  }
  Indenter$Action$Indent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Indent',
    interfaces: [Indenter$Action]
  };
  var Indenter$Action$Indent_instance = null;
  function Indenter$Action$Indent_getInstance() {
    if (Indenter$Action$Indent_instance === null) {
      new Indenter$Action$Indent();
    }
    return Indenter$Action$Indent_instance;
  }
  function Indenter$Action$Unindent() {
    Indenter$Action$Unindent_instance = this;
  }
  Indenter$Action$Unindent.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unindent',
    interfaces: [Indenter$Action]
  };
  var Indenter$Action$Unindent_instance = null;
  function Indenter$Action$Unindent_getInstance() {
    if (Indenter$Action$Unindent_instance === null) {
      new Indenter$Action$Unindent();
    }
    return Indenter$Action$Unindent_instance;
  }
  Indenter$Action.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Action',
    interfaces: []
  };
  function Indenter$Companion() {
    Indenter$Companion_instance = this;
    var indenter = new Indenter();
    this.EMPTY = indenter;
  }
  Indenter$Companion.prototype.genString_yot30u$ = function (init) {
    var indenter = new Indenter();
    init(indenter);
    return indenter.toString();
  };
  Indenter$Companion.prototype.gen_yot30u$ = defineInlineFunction('output.io.ktor.start.util.Indenter.Companion.gen_yot30u$', wrapFunction(function () {
    var Indenter_init = _.io.ktor.start.util.Indenter;
    return function (init) {
      var indenter = new Indenter_init();
      init(indenter);
      return indenter;
    };
  }));
  Indenter$Companion.prototype.single_61zpoe$ = function (str) {
    return new Indenter(arrayListOf([new Indenter$Action$Line(str)]));
  };
  Indenter$Companion.prototype.invoke_yot30u$ = function (init) {
    var indenter = new Indenter();
    init(indenter);
    return indenter;
  };
  Indenter$Companion.prototype.invoke_61zpoe$ = function (str) {
    return this.single_61zpoe$(str);
  };
  Indenter$Companion.prototype.replaceString_mvjluj$ = function (templateString, replacements) {
    var pattern = Regex_init('\\$(\\w+)');
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = pattern.find_905azu$(templateString);
      if (match == null) {
        replace_20wsma$result = templateString.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = templateString.length;
      var sb = StringBuilder_init_0(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$(templateString, lastStart, foundMatch.range.start);
        var tmp$;
        sb.append_gw00v9$((tmp$ = replacements.get_11rb$(foundMatch.groupValues.get_za3lpa$(1))) != null ? tmp$ : '');
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$(templateString, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    return replace_20wsma$result;
  };
  Indenter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Indenter$Companion_instance = null;
  function Indenter$Companion_getInstance() {
    if (Indenter$Companion_instance === null) {
      new Indenter$Companion();
    }
    return Indenter$Companion_instance;
  }
  Indenter.prototype.inline_61zpoe$ = function (str) {
    this.actions_8be2vx$.add_11rb$(new Indenter$Action$Inline(str));
    return this;
  };
  Indenter.prototype.line_oryfgh$ = function (indenter) {
    this.actions_8be2vx$.addAll_brywnq$(indenter.actions_8be2vx$);
    return this;
  };
  Indenter.prototype.line_61zpoe$ = function (str) {
    this.actions_8be2vx$.add_11rb$(new Indenter$Action$Line(str));
    return this;
  };
  Indenter.prototype.line_pdl1vj$ = function (str) {
    if (str != null)
      this.line_61zpoe$(str);
  };
  Indenter.prototype.mark_za3rmp$ = function (data) {
    this.actions_8be2vx$.add_11rb$(new Indenter$Action$Marker(data));
    return this;
  };
  function Indenter$linedeferred$lambda(closure$init) {
    return function () {
      var indenter = new Indenter();
      closure$init(indenter);
      return indenter;
    };
  }
  Indenter.prototype.linedeferred_yot30u$ = function (init) {
    this.actions_8be2vx$.add_11rb$(new Indenter$Action$LineDeferred(Indenter$linedeferred$lambda(init)));
    return this;
  };
  Indenter.prototype.line_a4mwiz$ = defineInlineFunction('output.io.ktor.start.util.Indenter.line_a4mwiz$', function (str, callback) {
    this.line_61zpoe$(str.length === 0 ? '{' : str + ' {');
    this._indent();
    try {
      callback();
    }
    finally {
      this._unindent();
    }
    this;
    this.line_61zpoe$('}');
    return this;
  });
  Indenter.prototype.line_slzebz$ = defineInlineFunction('output.io.ktor.start.util.Indenter.line_slzebz$', function (str, after, after2, callback) {
    if (after === void 0)
      after = '';
    if (after2 === void 0)
      after2 = '';
    var rafter = after.length === 0 ? '' : ' ' + after;
    this.line_61zpoe$(str.length === 0 ? '{' + rafter : str + ' {' + rafter);
    this._indent();
    try {
      callback();
    }
    finally {
      this._unindent();
    }
    this;
    this.line_61zpoe$('}' + after2);
    return this;
  });
  Indenter.prototype.indent_o14v8n$ = defineInlineFunction('output.io.ktor.start.util.Indenter.indent_o14v8n$', function (callback) {
    this._indent();
    try {
      callback();
    }
    finally {
      this._unindent();
    }
    return this;
  });
  Indenter.prototype.indent_n53o35$ = defineInlineFunction('output.io.ktor.start.util.Indenter.indent_n53o35$', function (count, callback) {
    this._indent_za3lpa$(count);
    try {
      callback();
    }
    finally {
      this._unindent_za3lpa$(count);
    }
    return this;
  });
  Object.defineProperty(Indenter.prototype, 'indentLevel', {
    get: function () {
      return this.indentLevel_3b9hgv$_0;
    },
    set: function (indentLevel) {
      this.indentLevel_3b9hgv$_0 = indentLevel;
    }
  });
  Indenter.prototype._indent = function () {
    this._indent_za3lpa$(1);
  };
  Indenter.prototype._unindent = function () {
    this._unindent_za3lpa$(1);
  };
  Indenter.prototype._indent_za3lpa$ = function (count) {
    for (var v = 0; v < count; v++)
      this.actions_8be2vx$.add_11rb$(Indenter$Action$Indent_getInstance());
    this.indentLevel = this.indentLevel + count | 0;
  };
  Indenter.prototype._unindent_za3lpa$ = function (count) {
    for (var v = 0; v < count; v++)
      this.actions_8be2vx$.add_11rb$(Indenter$Action$Unindent_getInstance());
    this.indentLevel = this.indentLevel - count | 0;
  };
  function Indenter$IndenterEvaluator(markHandler, indentEmptyLines, doIndent) {
    this.markHandler = markHandler;
    this.indentEmptyLines = indentEmptyLines;
    this.doIndent = doIndent;
    this.out = StringBuilder_init();
    this.line = 0;
    this.newLine = true;
    this.indentIndex = 0;
    this.allowEmptyLine = false;
  }
  Indenter$IndenterEvaluator.prototype.outAppend_61zpoe$ = function (str) {
    return this.out.append_gw00v9$(str);
  };
  Indenter$IndenterEvaluator.prototype.outAppend_s8itvh$ = function (str) {
    return this.out.append_s8itvh$(str);
  };
  Indenter$IndenterEvaluator.prototype.doLine = function () {
    if (this.doIndent)
      this.outAppend_s8itvh$(10);
    this.line = this.line + 1 | 0;
    this.newLine = true;
  };
  Indenter$IndenterEvaluator.prototype.eval_j0l46$ = function (actions) {
    var tmp$, tmp$_0;
    tmp$ = actions.iterator();
    while (tmp$.hasNext()) {
      var action = tmp$.next();
      if (Kotlin.isType(action, Indenter$Action$Text)) {
        if (this.newLine) {
          var tmp$_1 = !this.indentEmptyLines;
          if (tmp$_1) {
            tmp$_1 = action.str.length === 0;
          }
          if (tmp$_1) {
            this.doLine();
          }
           else {
            if (this.doIndent)
              this.outAppend_61zpoe$(Indenter$INDENTS_getInstance().get_za3lpa$(this.indentIndex));
            else
              this.outAppend_61zpoe$(' ');
          }
        }
        this.outAppend_61zpoe$(action.str);
        if (Kotlin.isType(action, Indenter$Action$Line)) {
          var tmp$_2 = this.line;
          var tmp$_3;
          var count = 0;
          tmp$_3 = iterator(action.str);
          while (tmp$_3.hasNext()) {
            var element = unboxChar(tmp$_3.next());
            if (unboxChar(toBoxedChar(element)) === 10) {
              count = count + 1 | 0;
            }
          }
          this.line = tmp$_2 + count | 0;
          this.doLine();
        }
         else {
          this.newLine = false;
        }
        this.allowEmptyLine = true;
      }
       else if (Kotlin.isType(action, Indenter$Action$LineDeferred))
        this.eval_j0l46$(action.callback().actions_8be2vx$);
      else if (equals(action, Indenter$Action$Indent_getInstance()) || equals(action, Indenter$Action$Unindent_getInstance())) {
        this.allowEmptyLine = false;
        this.indentIndex = this.indentIndex + (equals(action, Indenter$Action$Indent_getInstance()) ? 1 : -1) | 0;
      }
       else if (equals(action, Indenter$Action$EmptyLineOnce_getInstance())) {
        if (this.allowEmptyLine) {
          this.doLine();
          this.allowEmptyLine = false;
        }
      }
       else if (Kotlin.isType(action, Indenter$Action$Marker))
        (tmp$_0 = this.markHandler) != null ? tmp$_0(this.out, this.line, action.data) : null;
    }
  };
  Indenter$IndenterEvaluator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IndenterEvaluator',
    interfaces: []
  };
  Indenter.prototype.toString_l6l5ny$ = function (markHandler, doIndent) {
    var $receiver = new Indenter$IndenterEvaluator(markHandler, this.indentEmptyLines, doIndent);
    $receiver.eval_j0l46$(this.actions_8be2vx$);
    return $receiver.out.toString();
  };
  Indenter.prototype.invoke_44doqu$ = defineInlineFunction('output.io.ktor.start.util.Indenter.invoke_44doqu$', function ($receiver, suffix, callback) {
    if (suffix === void 0)
      suffix = '';
    var rafter = suffix.length === 0 ? '' : ' ' + suffix;
    this.line_61zpoe$($receiver.length === 0 ? '{' + rafter : $receiver + ' {' + rafter);
    this._indent();
    try {
      callback();
    }
    finally {
      this._unindent();
    }
    this;
    this.line_61zpoe$('}' + '');
    return this;
  });
  Indenter.prototype.unaryPlus_pdl1vz$ = defineInlineFunction('output.io.ktor.start.util.Indenter.unaryPlus_pdl1vz$', function ($receiver) {
    return this.line_61zpoe$($receiver);
  });
  Indenter.prototype.xml_79xod4$ = defineInlineFunction('output.io.ktor.start.util.Indenter.xml_79xod4$', wrapFunction(function () {
    var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function ($receiver, callback) {
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = Regex_init('<(\\w+)').find_905azu$($receiver)) != null ? tmp$.groupValues : null) != null ? getOrNull(tmp$_0, 1) : null) != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init('Invalid XML tag'.toString());
      }
      var tagName = tmp$_2;
      this.line_61zpoe$($receiver);
      this._indent();
      try {
        callback();
      }
      finally {
        this._unindent();
      }
      this;
      this.line_61zpoe$('<\/' + tagName + '>');
    };
  }));
  Indenter.prototype.toString_95lvll$ = function (markHandler) {
    return this.toString_l6l5ny$(markHandler, true);
  };
  Indenter.prototype.toString_8kj6y5$ = function (doIndent, indentChunk) {
    if (doIndent === void 0)
      doIndent = true;
    if (indentChunk === void 0)
      indentChunk = '\t';
    var out = this.toString_l6l5ny$(null, doIndent);
    return equals(indentChunk, '\t') ? out : replace(out, '\t', indentChunk);
  };
  Indenter.prototype.toString = function () {
    return this.toString_l6l5ny$(null, true);
  };
  Indenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Indenter',
    interfaces: []
  };
  function unaryPlus($receiver) {
  }
  function unaryPlus_0($receiver) {
    return $receiver;
  }
  function get_SEPARATOR($receiver) {
    EMPTY_LINE_ONCE($receiver);
  }
  function EMPTY_LINE_ONCE($receiver) {
    $receiver.actions_8be2vx$.add_11rb$(Indenter$Action$EmptyLineOnce_getInstance());
  }
  function SEPARATOR($receiver, callback) {
    get_SEPARATOR($receiver);
    callback($receiver);
  }
  function XmlIndenter(indenter) {
    this.indenter = indenter;
  }
  XmlIndenter.prototype.invoke_79xod4$ = defineInlineFunction('output.io.ktor.start.util.XmlIndenter.invoke_79xod4$', wrapFunction(function () {
    var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function ($receiver, callback) {
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = Regex_init('<(\\w+)').find_905azu$($receiver)) != null ? tmp$.groupValues : null) != null ? getOrNull(tmp$_0, 1) : null) != null)
        tmp$_2 = tmp$_1;
      else {
        throw IllegalStateException_init('Invalid XML tag'.toString());
      }
      var tagName = tmp$_2;
      this.indenter.line_61zpoe$($receiver);
      var $this = this.indenter;
      $this._indent();
      try {
        callback();
      }
      finally {
        $this._unindent();
      }
      this.indenter.line_61zpoe$('<\/' + tagName + '>');
    };
  }));
  XmlIndenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'XmlIndenter',
    interfaces: []
  };
  function xml($receiver, callback) {
    callback(new XmlIndenter($receiver));
  }
  function indentStringHere($receiver, callback) {
    return indentString($receiver.indentLevel, callback);
  }
  function indentString$lambda(closure$level, closure$callback) {
    return function ($receiver) {
      var count = closure$level;
      $receiver._indent_za3lpa$(count);
      try {
        closure$callback($receiver);
      }
      finally {
        $receiver._unindent_za3lpa$(count);
      }
      return Unit;
    };
  }
  var trim_0 = Kotlin.kotlin.text.trim_gw00vp$;
  function indentString(level, callback) {
    var $receiver = Indenter$Companion_getInstance().invoke_yot30u$(indentString$lambda(level, callback)).toString();
    var tmp$;
    return trim_0(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
  }
  function MvnArtifact(dependency) {
    this.dependency = dependency;
    this.parts = split_0(this.dependency, [':']);
  }
  Object.defineProperty(MvnArtifact.prototype, 'group', {
    get: function () {
      return getOrNull(this.parts, 0);
    }
  });
  Object.defineProperty(MvnArtifact.prototype, 'name', {
    get: function () {
      return getOrNull(this.parts, 1);
    }
  });
  Object.defineProperty(MvnArtifact.prototype, 'version', {
    get: function () {
      return getOrNull(this.parts, 2);
    }
  });
  MvnArtifact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MvnArtifact',
    interfaces: []
  };
  MvnArtifact.prototype.component1 = function () {
    return this.dependency;
  };
  MvnArtifact.prototype.copy_61zpoe$ = function (dependency) {
    return new MvnArtifact(dependency === void 0 ? this.dependency : dependency);
  };
  MvnArtifact.prototype.toString = function () {
    return 'MvnArtifact(dependency=' + Kotlin.toString(this.dependency) + ')';
  };
  MvnArtifact.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dependency) | 0;
    return result;
  };
  MvnArtifact.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dependency, other.dependency))));
  };
  function escape($receiver) {
    var tmp$;
    var out = StringBuilder_init();
    tmp$ = $receiver.length;
    for (var n = 0; n < tmp$; n++) {
      var c = $receiver.charCodeAt(n);
      switch (c) {
        case 92:
          out.append_gw00v9$('\\\\');
          break;
        case 34:
          out.append_gw00v9$('\\"');
          break;
        case 10:
          out.append_gw00v9$('\\n');
          break;
        case 13:
          out.append_gw00v9$('\\r');
          break;
        case 9:
          out.append_gw00v9$('\\t');
          break;
        default:if (until(32, 127).contains_mef7kx$(c)) {
            out.append_s8itvh$(c);
          }
           else {
            out.append_gw00v9$('\\u' + padStart(toString_0(c | 0, 16), 4, 48));
          }

          break;
      }
    }
    return out.toString();
  }
  function unescape($receiver) {
    var tmp$, tmp$_0;
    var out = StringBuilder_init();
    var n = 0;
    while (n < $receiver.length) {
      var c = $receiver.charCodeAt((tmp$ = n, n = tmp$ + 1 | 0, tmp$));
      if (c === 92) {
        var c2 = $receiver.charCodeAt((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        switch (c2) {
          case 92:
            out.append_s8itvh$(92);
            break;
          case 34:
            out.append_s8itvh$(34);
            break;
          case 110:
            out.append_s8itvh$(10);
            break;
          case 114:
            out.append_s8itvh$(13);
            break;
          case 116:
            out.append_s8itvh$(9);
            break;
          case 117:
            var startIndex = n;
            var endIndex = n + 4 | 0;
            var chars = $receiver.substring(startIndex, endIndex);
            n = n + 4 | 0;
            out.append_s8itvh$(toChar(toInt(chars, 16)));
            break;
          default:out.append_gw00v9$('\\' + String.fromCharCode(c2));
            break;
        }
      }
       else
        out.append_s8itvh$(c);
    }
    return out.toString();
  }
  function quote($receiver) {
    return $receiver != null ? '"' + escape($receiver) + '"' : 'null';
  }
  function isQuoted($receiver) {
    return startsWith_0($receiver, 34) && endsWith_0($receiver, 34);
  }
  function unquote($receiver) {
    if (isQuoted($receiver)) {
      var endIndex = $receiver.length - 1 | 0;
      return unescape($receiver.substring(1, endIndex));
    }
     else {
      return $receiver;
    }
  }
  function get_kquoteLit$lambda(it) {
    return get_kquoteLit(it);
  }
  function get_kquoteLit$lambda_0(it) {
    return get_kquoteLit(it);
  }
  function get_kquoteLit$lambda_1(it) {
    return get_kquoteLit(it.key) + ' to ' + get_kquoteLit(it.value);
  }
  function get_kquoteLit($receiver) {
    var tmp$;
    if ($receiver == null)
      tmp$ = 'null';
    else if (Kotlin.isNumber($receiver))
      tmp$ = toString($receiver);
    else if (typeof $receiver === 'string')
      tmp$ = quote($receiver);
    else if (Kotlin.isType($receiver, Pair))
      tmp$ = get_kquoteLit($receiver.first) + ' to ' + get_kquoteLit($receiver.second);
    else if (Kotlin.isType($receiver, List))
      tmp$ = 'listOf(' + joinToString($receiver, ', ', void 0, void 0, void 0, void 0, get_kquoteLit$lambda) + ')';
    else if (Kotlin.isType($receiver, Set))
      tmp$ = 'setOf(' + joinToString($receiver, ', ', void 0, void 0, void 0, void 0, get_kquoteLit$lambda_0) + ')';
    else if (Kotlin.isType($receiver, Map))
      tmp$ = 'mapOf(' + joinToString($receiver.entries, ', ', void 0, void 0, void 0, void 0, get_kquoteLit$lambda_1) + ')';
    else if (Kotlin.isType($receiver, Regex))
      tmp$ = 'Regex(' + quote($receiver.pattern) + ')';
    else
      tmp$ = '<error>';
    return tmp$;
  }
  function SemVer(version) {
    this.version = version;
    this.parts1_0 = split(this.version, Kotlin.charArrayOf(45), void 0, 2);
    this.parts2_0 = split(first(this.parts1_0), Kotlin.charArrayOf(46));
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    this.major = (tmp$_0 = (tmp$ = getOrNull(this.parts2_0, 0)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0;
    this.minor = (tmp$_2 = (tmp$_1 = getOrNull(this.parts2_0, 1)) != null ? toIntOrNull(tmp$_1) : null) != null ? tmp$_2 : 0;
    this.patch = (tmp$_4 = (tmp$_3 = getOrNull(this.parts2_0, 2)) != null ? toIntOrNull(tmp$_3) : null) != null ? tmp$_4 : 0;
    this.info = (tmp$_5 = getOrNull(this.parts1_0, 1)) != null ? tmp$_5 : '';
  }
  SemVer.prototype.compareTo_11rb$ = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    var $receiver = Kotlin.primitiveCompareTo(this.major, other.major);
    if ((tmp$ = $receiver !== 0 ? $receiver : null) != null)
      tmp$_3 = tmp$;
    else {
      var $receiver_0 = Kotlin.primitiveCompareTo(this.minor, other.minor);
      tmp$_3 = $receiver_0 !== 0 ? $receiver_0 : null;
    }
    var tmp$_4;
    if ((tmp$_0 = tmp$_3) != null)
      tmp$_4 = tmp$_0;
    else {
      var $receiver_1 = Kotlin.primitiveCompareTo(this.patch, other.patch);
      tmp$_4 = $receiver_1 !== 0 ? $receiver_1 : null;
    }
    var tmp$_5;
    if ((tmp$_1 = tmp$_4) != null)
      tmp$_5 = tmp$_1;
    else {
      var $receiver_2 = Kotlin.compareTo(this.info, other.info);
      tmp$_5 = $receiver_2 !== 0 ? $receiver_2 : null;
    }
    return (tmp$_2 = tmp$_5) != null ? tmp$_2 : 0;
  };
  SemVer.prototype.toString = function () {
    return this.version;
  };
  SemVer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SemVer',
    interfaces: [Comparable]
  };
  function ZipBuilder() {
    ZipBuilder$Companion_getInstance();
    this.files = LinkedHashMap_init();
  }
  function ZipBuilder$Companion() {
    ZipBuilder$Companion_instance = this;
    this.S_IFREG = toInt('0100000', 8);
    this.S_IFDIR = toInt('0040000', 8);
    this.DEFAULT_FILE = toInt('644', 8);
    this.DEFAULT_DIR = toInt('755', 8);
  }
  ZipBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ZipBuilder$Companion_instance = null;
  function ZipBuilder$Companion_getInstance() {
    if (ZipBuilder$Companion_instance === null) {
      new ZipBuilder$Companion();
    }
    return ZipBuilder$Companion_instance;
  }
  function ZipBuilder$FileInfo(name, data, date, mode) {
    if (mode === void 0)
      mode = ZipBuilder$Companion_getInstance().DEFAULT_FILE;
    this.name = name;
    this.data = data;
    this.date = date;
    this.mode = mode;
  }
  ZipBuilder$FileInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileInfo',
    interfaces: []
  };
  ZipBuilder.prototype.addParentDir_lqdnne$ = function (name, date, mode) {
    if (date === void 0)
      date = NewDateTime();
    if (mode === void 0)
      mode = ZipBuilder$Companion_getInstance().DEFAULT_DIR | ZipBuilder$Companion_getInstance().S_IFDIR;
    if (equals(name, ''))
      return;
    this.addParentDir_lqdnne$(substringBeforeLast(name, 47, ''), date);
    var dname = name + '/';
    var $receiver = this.files;
    var value = new ZipBuilder$FileInfo(dname, new Int8Array([]), date, mode);
    $receiver.put_xwzc9p$(dname, value);
  };
  ZipBuilder.prototype.add_w0mhwy$ = function (name, data, date, mode) {
    if (date === void 0)
      date = NewDateTime();
    if (mode === void 0)
      mode = ZipBuilder$Companion_getInstance().DEFAULT_FILE;
    this.addParentDir_lqdnne$(substringBeforeLast(name, 47, ''), date);
    var $receiver = this.files;
    var value = new ZipBuilder$FileInfo(name, data, date, mode | ZipBuilder$Companion_getInstance().S_IFREG);
    $receiver.put_xwzc9p$(name, value);
  };
  ZipBuilder.prototype.add_oyaiiq$ = function (name, data, charset, date, mode) {
    if (charset === void 0)
      charset = UTF8_getInstance();
    if (date === void 0)
      date = NewDateTime();
    if (mode === void 0)
      mode = ZipBuilder$Companion_getInstance().DEFAULT_FILE;
    this.add_w0mhwy$(name, toByteArray(data, charset), date, mode);
  };
  function ZipBuilder$toByteArray$CenterEntry(fileNameBytes, crc32, headerOffset, size, date, mode) {
    this.fileNameBytes = fileNameBytes;
    this.crc32 = crc32;
    this.headerOffset = headerOffset;
    this.size = size;
    this.date = date;
    this.mode = mode;
  }
  ZipBuilder$toByteArray$CenterEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CenterEntry',
    interfaces: []
  };
  ZipBuilder.prototype.toByteArray = function () {
    var centerEntries = ArrayList_init();
    var $this = new ByteArrayOutputStream();
    var tmp$, tmp$_0;
    tmp$ = this.files.values.iterator();
    while (tmp$.hasNext()) {
      var file = tmp$.next();
      var headerOffset = $this.size;
      var fileNameBytes = toByteArray(file.name, UTF8_getInstance());
      var fileData = file.data;
      var crc32_0 = crc32(fileData);
      $this.u32_le_za3lpa$(67324752);
      $this.u16_le_za3lpa$(10);
      $this.u16_le_za3lpa$(0);
      $this.u16_le_za3lpa$(0);
      $this.u16_le_za3lpa$(this.toDosTime_0(file.date));
      $this.u16_le_za3lpa$(this.toDosDate_0(file.date));
      $this.u32_le_za3lpa$(crc32_0);
      $this.u32_le_za3lpa$(fileData.length);
      $this.u32_le_za3lpa$(fileData.length);
      $this.u16_le_za3lpa$(fileNameBytes.length);
      $this.u16_le_za3lpa$(0);
      $this.bytes_fqrh44$(fileNameBytes);
      $this.bytes_fqrh44$(fileData);
      var element = new ZipBuilder$toByteArray$CenterEntry(fileNameBytes, crc32_0, headerOffset, fileData.length, file.date, file.mode);
      centerEntries.add_11rb$(element);
    }
    var directoryStart = $this.size;
    var system = 3;
    tmp$_0 = centerEntries.iterator();
    while (tmp$_0.hasNext()) {
      var center = tmp$_0.next();
      $this.u32_le_za3lpa$(33639248);
      $this.u16_le_za3lpa$(63 | system << 8);
      $this.u16_le_za3lpa$(20 | system << 8);
      $this.u16_le_za3lpa$(0);
      $this.u16_le_za3lpa$(0);
      $this.u16_le_za3lpa$(this.toDosTime_0(center.date));
      $this.u16_le_za3lpa$(this.toDosDate_0(center.date));
      $this.u32_le_za3lpa$(center.crc32);
      $this.u32_le_za3lpa$(center.size);
      $this.u32_le_za3lpa$(center.size);
      $this.u16_le_za3lpa$(center.fileNameBytes.length);
      $this.u16_le_za3lpa$(0);
      $this.u16_le_za3lpa$(0);
      $this.u16_le_za3lpa$(0);
      $this.u16_le_za3lpa$(0);
      $this.u32_le_za3lpa$(32800 | (32768 | center.mode) << 16);
      $this.u32_le_za3lpa$(center.headerOffset);
      $this.bytes_fqrh44$(center.fileNameBytes);
    }
    var directoryEnd = $this.size;
    $this.u32_le_za3lpa$(101010256);
    $this.u16_le_za3lpa$(0);
    $this.u16_le_za3lpa$(0);
    $this.u16_le_za3lpa$(centerEntries.size);
    $this.u16_le_za3lpa$(centerEntries.size);
    $this.u32_le_za3lpa$(directoryEnd - directoryStart | 0);
    $this.u32_le_za3lpa$(directoryStart);
    $this.u16_le_za3lpa$(0);
    return $this.toByteArray();
  };
  ZipBuilder.prototype.toDosDate_0 = function ($receiver) {
    return get_date($receiver) | get_month($receiver) + 1 << 5 | get_fullYear($receiver) - 1980 << 9;
  };
  ZipBuilder.prototype.toDosTime_0 = function ($receiver) {
    return get_seconds($receiver) / 2 | 0 | get_minutes($receiver) << 5 | get_hours($receiver) << 11;
  };
  ZipBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZipBuilder',
    interfaces: []
  };
  var buildZip = defineInlineFunction('output.io.ktor.start.util.buildZip_oi1qpb$', wrapFunction(function () {
    var ZipBuilder_init = _.io.ktor.start.util.ZipBuilder;
    return function (generate) {
      var zb = new ZipBuilder_init();
      generate(zb);
      return zb.toByteArray();
    };
  }));
  var package$io = _.io || (_.io = {});
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$start = package$ktor.start || (package$ktor.start = {});
  package$start.jsObject_8bsfpn$ = jsObject;
  package$start.await_t11jrl$ = await_0;
  package$start.fetchFile_61zpoe$ = fetchFile;
  Object.defineProperty(package$start, 'EmptyContinuation', {
    get: function () {
      return EmptyContinuation;
    }
  });
  package$start.launch_g2bo5h$ = launch;
  package$start.jq_61zpoe$ = jq;
  package$start.jq_2rdptt$ = jq_0;
  package$start.jq_b3w3xb$ = jq_1;
  package$start.jqId_61zpoe$ = jqId;
  package$start.on_nsccip$ = on;
  package$start.each_4tgbmb$ = each;
  package$start.change_tue5ot$ = change;
  package$start.keyup_tue5ot$ = keyup;
  package$start.generateBrowserFile_cyqrs4$ = generateBrowserFile;
  $$importsForInline$$.output = _;
  package$start.dialogOpenFile_61zpoe$ = dialogOpenFile;
  package$start.CancelException = CancelException;
  package$start.read_fu744r$ = read;
  Object.defineProperty(package$start, 'windowInputFile', {
    get: function () {
      return windowInputFile;
    },
    set: function (value) {
      windowInputFile = value;
    }
  });
  Object.defineProperty(package$start, 'selectedFiles', {
    get: function () {
      return selectedFiles;
    },
    set: function (value) {
      selectedFiles = value;
    }
  });
  Object.defineProperty(package$start, 'swaggerModels', {
    get: function () {
      return swaggerModels;
    }
  });
  Object.defineProperty(package$start, 'swaggerGenerators', {
    get: function () {
      return swaggerGenerators;
    },
    set: function (value) {
      swaggerGenerators = value;
    }
  });
  package$start.main_kand9s$ = main;
  package$start.updateSwaggerModels = updateSwaggerModels;
  Object.defineProperty(package$start, 'defaultArtifactGroup', {
    get: function () {
      return defaultArtifactGroup;
    }
  });
  Object.defineProperty(package$start, 'defaultArtifactName', {
    get: function () {
      return defaultArtifactName;
    }
  });
  Object.defineProperty(package$start, 'defaultArtifactVersion', {
    get: function () {
      return defaultArtifactVersion;
    }
  });
  Object.defineProperty(package$start, 'defaultKtorVersion', {
    get: function () {
      return defaultKtorVersion;
    }
  });
  Object.defineProperty(package$start, 'defaultKtorEngine', {
    get: function () {
      return defaultKtorEngine;
    }
  });
  Object.defineProperty(package$start, 'artifactGroupId', {
    get: function () {
      return artifactGroupId;
    }
  });
  Object.defineProperty(package$start, 'artifactNameId', {
    get: function () {
      return artifactNameId;
    }
  });
  Object.defineProperty(package$start, 'artifactVersionId', {
    get: function () {
      return artifactVersionId;
    }
  });
  package$start.get_checked_pzor9e$ = get_checked;
  package$start.set_checked_4n8m03$ = set_checked;
  Object.defineProperty(package$start, 'includeWrapper', {
    get: get_includeWrapper,
    set: set_includeWrapper
  });
  package$start.DependencyChecker = DependencyChecker;
  package$start.onHashUpdated_61zpoe$ = onHashUpdated;
  package$start.updateHash = updateHash;
  package$start.updateIndeterminate_qbggrg$ = updateIndeterminate;
  package$start.parseHash_61zpoe$ = parseHash;
  Object.defineProperty(package$start, 'hashParams', {
    get: get_hashParams
  });
  package$start.formUrlDecode_pdl1vz$ = formUrlDecode;
  package$start.formUrlEncode_ye33rp$ = formUrlEncode;
  package$start.formUrlEncode_jgmxsd$ = formUrlEncode_0;
  package$start.addDependencies = addDependencies;
  package$start.addDependenciesKind_vt7u6r$ = addDependenciesKind;
  package$start.build_6taknv$ = build;
  Object.defineProperty(package$start, 'isLocalEnv', {
    get: get_isLocalEnv
  });
  package$start.registerBuildButton = registerBuildButton;
  package$start.handleFiltering = handleFiltering;
  package$start.handleFiltering_61zpoe$ = handleFiltering_0;
  package$start.removeLoading = removeLoading;
  package$start.registerKeyboardUsability = registerKeyboardUsability;
  var package$util = package$start.util || (package$start.util = {});
  package$util.NewDateTime = NewDateTime;
  package$util.NewDateTime_s8cxhz$ = NewDateTime_0;
  package$util.get_time_t5kl13$ = get_time;
  package$util.get_fullYear_t5kl13$ = get_fullYear;
  package$util.get_month_t5kl13$ = get_month;
  package$util.get_date_t5kl13$ = get_date;
  package$util.get_hours_t5kl13$ = get_hours;
  package$util.get_minutes_t5kl13$ = get_minutes;
  package$util.get_seconds_t5kl13$ = get_seconds;
  package$start.BuildInfo = BuildInfo;
  package$start.FileContainer = FileContainer;
  package$start.add_ykoeqs$ = add;
  package$start.ServerFeature = ServerFeature;
  package$start.ClientFeature = ClientFeature;
  package$start.Feature = Feature;
  package$start.FeatureSet = FeatureSet;
  Object.defineProperty(KtorEngine, 'Netty', {
    get: KtorEngine$Netty_getInstance
  });
  Object.defineProperty(KtorEngine, 'Jetty', {
    get: KtorEngine$Jetty_getInstance
  });
  Object.defineProperty(KtorEngine, 'Tomcat', {
    get: KtorEngine$Tomcat_getInstance
  });
  Object.defineProperty(KtorEngine, 'CIO', {
    get: KtorEngine$CIO_getInstance
  });
  Object.defineProperty(KtorEngine, 'Companion', {
    get: KtorEngine$Companion_getInstance
  });
  package$start.KtorEngine = KtorEngine;
  Object.defineProperty(ProjectType, 'Gradle', {
    get: ProjectType$Gradle_getInstance
  });
  Object.defineProperty(ProjectType, 'Maven', {
    get: ProjectType$Maven_getInstance
  });
  Object.defineProperty(ProjectType, 'Companion', {
    get: ProjectType$Companion_getInstance
  });
  package$start.ProjectType = ProjectType;
  Object.defineProperty(package$start, 'Repos', {
    get: Repos_getInstance
  });
  Object.defineProperty(package$start, 'KOTLIN_VERSION', {
    get: function () {
      return KOTLIN_VERSION;
    }
  });
  Object.defineProperty(package$start, 'KOTLINX_COROUTINES_VERSION', {
    get: function () {
      return KOTLINX_COROUTINES_VERSION;
    }
  });
  Object.defineProperty(package$start, 'Versions', {
    get: Versions_getInstance
  });
  var package$features = package$start.features || (package$start.features = {});
  Object.defineProperty(package$features, 'ALL_SERVER_FEATURES', {
    get: get_ALL_SERVER_FEATURES
  });
  Object.defineProperty(package$features, 'ALL_CLIENT_FEATURES', {
    get: get_ALL_CLIENT_FEATURES
  });
  Object.defineProperty(package$features, 'ALL_FEATURES', {
    get: function () {
      return ALL_FEATURES;
    }
  });
  Object.defineProperty(package$features, 'ALL_FEATURES_BY_ID', {
    get: function () {
      return ALL_FEATURES_BY_ID;
    }
  });
  var package$both = package$features.both || (package$features.both = {});
  Object.defineProperty(package$both, 'RawSocketsFeature', {
    get: RawSocketsFeature_getInstance
  });
  Object.defineProperty(package$both, 'RawSocketsTlsFeature', {
    get: RawSocketsTlsFeature_getInstance
  });
  var package$client = package$features.client || (package$features.client = {});
  package$client.ClientEngine = ClientEngine;
  Object.defineProperty(package$client, 'CoreClientEngine', {
    get: CoreClientEngine_getInstance
  });
  package$client.get_clientEngine_v6fwbs$ = get_clientEngine;
  package$client.set_clientEngine_eoz486$ = set_clientEngine;
  Object.defineProperty(package$client, 'ApacheClientEngine', {
    get: ApacheClientEngine_getInstance
  });
  Object.defineProperty(package$client, 'CioClientEngine', {
    get: CioClientEngine_getInstance
  });
  Object.defineProperty(package$client, 'JettyClientEngine', {
    get: JettyClientEngine_getInstance
  });
  Object.defineProperty(package$client, 'MockClientEngine', {
    get: MockClientEngine_getInstance
  });
  Object.defineProperty(package$client, 'AuthBasicClientFeature', {
    get: AuthBasicClientFeature_getInstance
  });
  Object.defineProperty(package$client, 'JsonClientFeature', {
    get: JsonClientFeature_getInstance
  });
  Object.defineProperty(package$client, 'WebSocketClientFeature', {
    get: WebSocketClientFeature_getInstance
  });
  var package$server = package$features.server || (package$features.server = {});
  Object.defineProperty(package$server, 'AuthBasicFeature', {
    get: AuthBasicFeature_getInstance
  });
  Object.defineProperty(package$server, 'AuthDigestFeature', {
    get: AuthDigestFeature_getInstance
  });
  Object.defineProperty(package$server, 'AuthFeature', {
    get: AuthFeature_getInstance
  });
  package$server.addAuthProvider_xi0fd9$ = addAuthProvider;
  Object.defineProperty(package$server, 'AuthJwtFeature', {
    get: AuthJwtFeature_getInstance
  });
  Object.defineProperty(package$server, 'AuthLdapFeature', {
    get: AuthLdapFeature_getInstance
  });
  Object.defineProperty(package$server, 'AuthOauthFeature', {
    get: AuthOauthFeature_getInstance
  });
  Object.defineProperty(package$server, 'AutoHeadResponseFeature', {
    get: AutoHeadResponseFeature_getInstance
  });
  Object.defineProperty(package$server, 'CORSFeature', {
    get: CORSFeature_getInstance
  });
  Object.defineProperty(package$server, 'CachingHeadersFeature', {
    get: CachingHeadersFeature_getInstance
  });
  Object.defineProperty(package$server, 'CallLoggingFeature', {
    get: CallLoggingFeature_getInstance
  });
  Object.defineProperty(package$server, 'CompressionFeature', {
    get: CompressionFeature_getInstance
  });
  Object.defineProperty(package$server, 'ConditionalHeadersFeature', {
    get: ConditionalHeadersFeature_getInstance
  });
  Object.defineProperty(package$server, 'ContentNegotiationFeature', {
    get: ContentNegotiationFeature_getInstance
  });
  Object.defineProperty(package$server, 'CssDslFeature', {
    get: CssDslFeature_getInstance
  });
  Object.defineProperty(package$server, 'DataConversionFeature', {
    get: DataConversionFeature_getInstance
  });
  Object.defineProperty(package$server, 'DefaultHeadersFeature', {
    get: DefaultHeadersFeature_getInstance
  });
  Object.defineProperty(package$server, 'ForwardedHeaderSupportFeature', {
    get: ForwardedHeaderSupportFeature_getInstance
  });
  Object.defineProperty(package$server, 'FreemarkerFeature', {
    get: FreemarkerFeature_getInstance
  });
  Object.defineProperty(package$server, 'HSTSFeature', {
    get: HSTSFeature_getInstance
  });
  Object.defineProperty(package$server, 'HtmlDslFeature', {
    get: HtmlDslFeature_getInstance
  });
  Object.defineProperty(package$server, 'HttpsRedirectFeature', {
    get: HttpsRedirectFeature_getInstance
  });
  Object.defineProperty(package$server, 'JsonGsonFeature', {
    get: JsonGsonFeature_getInstance
  });
  Object.defineProperty(package$server, 'JsonJacksonFeature', {
    get: JsonJacksonFeature_getInstance
  });
  Object.defineProperty(package$server, 'LocationsFeature', {
    get: LocationsFeature_getInstance
  });
  Object.defineProperty(package$server, 'MetricsFeature', {
    get: MetricsFeature_getInstance
  });
  Object.defineProperty(package$server, 'PartialContentFeature', {
    get: PartialContentFeature_getInstance
  });
  Object.defineProperty(package$server, 'RoutingFeature', {
    get: RoutingFeature_getInstance
  });
  package$server.addRoute_xi0fd9$ = addRoute;
  Object.defineProperty(package$server, 'SessionsFeature', {
    get: SessionsFeature_getInstance
  });
  Object.defineProperty(package$server, 'ShutdownUrlFeature', {
    get: ShutdownUrlFeature_getInstance
  });
  Object.defineProperty(package$server, 'StaticContentFeature', {
    get: StaticContentFeature_getInstance
  });
  Object.defineProperty(package$server, 'StatusPagesFeature', {
    get: StatusPagesFeature_getInstance
  });
  package$server.addCustomStatusPage_xi0fd9$ = addCustomStatusPage;
  Object.defineProperty(package$server, 'VelocityFeature', {
    get: VelocityFeature_getInstance
  });
  Object.defineProperty(package$server, 'WebsocketsFeature', {
    get: WebsocketsFeature_getInstance
  });
  var package$http = package$start.http || (package$start.http = {});
  package$http.FreeHttpStatusCode = FreeHttpStatusCode;
  Object.defineProperty(HttpStatusCode, 'Continue', {
    get: HttpStatusCode$Continue_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'SwitchingProtocols', {
    get: HttpStatusCode$SwitchingProtocols_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Processing', {
    get: HttpStatusCode$Processing_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'OK', {
    get: HttpStatusCode$OK_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Created', {
    get: HttpStatusCode$Created_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Accepted', {
    get: HttpStatusCode$Accepted_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'NonAuthoritativeInformation', {
    get: HttpStatusCode$NonAuthoritativeInformation_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'NoContent', {
    get: HttpStatusCode$NoContent_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'ResetContent', {
    get: HttpStatusCode$ResetContent_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'PartialContent', {
    get: HttpStatusCode$PartialContent_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'MultipleChoices', {
    get: HttpStatusCode$MultipleChoices_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'MovedPermanently', {
    get: HttpStatusCode$MovedPermanently_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Found', {
    get: HttpStatusCode$Found_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'SeeOther', {
    get: HttpStatusCode$SeeOther_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'NotModified', {
    get: HttpStatusCode$NotModified_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'UseProxy', {
    get: HttpStatusCode$UseProxy_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'SwitchProxy', {
    get: HttpStatusCode$SwitchProxy_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'TemporaryRedirect', {
    get: HttpStatusCode$TemporaryRedirect_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'PermanentRedirect', {
    get: HttpStatusCode$PermanentRedirect_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'BadRequest', {
    get: HttpStatusCode$BadRequest_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Unauthorized', {
    get: HttpStatusCode$Unauthorized_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'PaymentRequired', {
    get: HttpStatusCode$PaymentRequired_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Forbidden', {
    get: HttpStatusCode$Forbidden_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'NotFound', {
    get: HttpStatusCode$NotFound_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'MethodNotAllowed', {
    get: HttpStatusCode$MethodNotAllowed_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'NotAcceptable', {
    get: HttpStatusCode$NotAcceptable_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'ProxyAuthenticationRequired', {
    get: HttpStatusCode$ProxyAuthenticationRequired_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'RequestTimeout', {
    get: HttpStatusCode$RequestTimeout_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Conflict', {
    get: HttpStatusCode$Conflict_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Gone', {
    get: HttpStatusCode$Gone_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'LengthRequired', {
    get: HttpStatusCode$LengthRequired_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'PreconditionFailed', {
    get: HttpStatusCode$PreconditionFailed_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'PayloadTooLarge', {
    get: HttpStatusCode$PayloadTooLarge_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'RequestURITooLong', {
    get: HttpStatusCode$RequestURITooLong_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'UnsupportedMediaType', {
    get: HttpStatusCode$UnsupportedMediaType_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'RequestedRangeNotSatisfiable', {
    get: HttpStatusCode$RequestedRangeNotSatisfiable_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'ExceptionFailed', {
    get: HttpStatusCode$ExceptionFailed_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'UpgradeRequired', {
    get: HttpStatusCode$UpgradeRequired_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'TooManyRequests', {
    get: HttpStatusCode$TooManyRequests_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'RequestHeaderFieldTooLarge', {
    get: HttpStatusCode$RequestHeaderFieldTooLarge_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'InternalServerError', {
    get: HttpStatusCode$InternalServerError_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'NotImplemented', {
    get: HttpStatusCode$NotImplemented_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'BadGateway', {
    get: HttpStatusCode$BadGateway_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'ServiceUnavailable', {
    get: HttpStatusCode$ServiceUnavailable_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'GatewayTimeout', {
    get: HttpStatusCode$GatewayTimeout_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'VersionNotSupported', {
    get: HttpStatusCode$VersionNotSupported_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'VariantAlsoNegotiates', {
    get: HttpStatusCode$VariantAlsoNegotiates_getInstance
  });
  Object.defineProperty(HttpStatusCode, 'Companion', {
    get: HttpStatusCode$Companion_getInstance
  });
  package$http.HttpStatusCode = HttpStatusCode;
  var package$project = package$start.project || (package$start.project = {});
  Object.defineProperty(package$project, 'ApplicationConf', {
    get: ApplicationConf_getInstance
  });
  package$project.addHoconDeployment_xi0fd9$ = addHoconDeployment;
  package$project.addHoconKtor_xi0fd9$ = addHoconKtor;
  package$project.addHoconTop_xi0fd9$ = addHoconTop;
  Object.defineProperty(package$project, 'ApplicationKt', {
    get: ApplicationKt_getInstance
  });
  package$project.get_applicationKtImports_7bmuz$ = get_applicationKtImports;
  package$project.addImport_zc4wmb$ = addImport;
  package$project.putImports_etuuyt$ = putImports;
  package$project.addFeatureInstall_xi0fd9$ = addFeatureInstall;
  package$project.addExtensionMethods_xi0fd9$ = addExtensionMethods;
  package$project.addApplicationClasses_xi0fd9$ = addApplicationClasses;
  Object.defineProperty(package$project, 'ApplicationTestKt', {
    get: ApplicationTestKt_getInstance
  });
  package$project.get_applicationTestKtImports_7bmuz$ = get_applicationTestKtImports;
  package$project.addTestImport_zc4wmb$ = addTestImport;
  package$project.addTestMethod_k546th$ = addTestMethod;
  Object.defineProperty(package$project, 'BuildFiles', {
    get: BuildFiles_getInstance
  });
  package$project.get_reposToInclude_v6fwbs$ = get_reposToInclude;
  package$project.get_compileDependencies_v6fwbs$ = get_compileDependencies;
  package$project.get_testDependencies_v6fwbs$ = get_testDependencies;
  package$project.addMavenRepository_zc4wmb$ = addMavenRepository;
  package$project.addMavenRepository_t4tb54$ = addMavenRepository_0;
  package$project.addCompileDependency_6b55lg$ = addCompileDependency;
  package$project.addTestDependency_6b55lg$ = addTestDependency;
  Object.defineProperty(package$project, 'BuildFilesGradle', {
    get: BuildFilesGradle_getInstance
  });
  Object.defineProperty(package$project, 'BuildFilesMaven', {
    get: BuildFilesMaven_getInstance
  });
  Object.defineProperty(package$project, 'GitIgnoreFile', {
    get: GitIgnoreFile_getInstance
  });
  Object.defineProperty(package$project, 'LogBackXml', {
    get: LogBackXml_getInstance
  });
  JsonRule.RuleList = JsonRule$RuleList;
  JsonRule.MinMaxDouble = JsonRule$MinMaxDouble;
  JsonRule.MinMaxInt = JsonRule$MinMaxInt;
  JsonRule.MinInt = JsonRule$MinInt;
  JsonRule.MaxInt = JsonRule$MaxInt;
  JsonRule.MinLength = JsonRule$MinLength;
  JsonRule.MinItems = JsonRule$MinItems;
  JsonRule.MinProperties = JsonRule$MinProperties;
  JsonRule.MaxLength = JsonRule$MaxLength;
  JsonRule.MaxItems = JsonRule$MaxItems;
  JsonRule.MaxProperties = JsonRule$MaxProperties;
  JsonRule.Not = JsonRule$Not;
  JsonRule.AllOf = JsonRule$AllOf;
  JsonRule.AnyOf = JsonRule$AnyOf;
  JsonRule.OneOf = JsonRule$OneOf;
  JsonRule.MultipleOf = JsonRule$MultipleOf;
  JsonRule.Minimum = JsonRule$Minimum;
  JsonRule.Maximum = JsonRule$Maximum;
  JsonRule.Range = JsonRule$Range;
  Object.defineProperty(JsonRule, 'UniqueItems', {
    get: JsonRule$UniqueItems_getInstance
  });
  Object.defineProperty(JsonRule, 'Required', {
    get: JsonRule$Required_getInstance
  });
  JsonRule.Pattern = JsonRule$Pattern;
  JsonRule.Enumerable = JsonRule$Enumerable;
  Object.defineProperty(JsonRule, 'Companion', {
    get: JsonRule$Companion_getInstance
  });
  var package$swagger = package$start.swagger || (package$start.swagger = {});
  package$swagger.JsonRule = JsonRule;
  package$swagger.toKotlin_h5xh7q$ = toKotlin;
  Object.defineProperty(SwaggerGenerator, 'Companion', {
    get: SwaggerGenerator$Companion_getInstance
  });
  package$swagger.SwaggerGenerator = SwaggerGenerator;
  package$swagger.get_optComma_cbok15$ = get_optComma;
  SwaggerModel.Server = SwaggerModel$Server;
  SwaggerModel.ServerVariable = SwaggerModel$ServerVariable;
  SwaggerModel.InfoGenType = SwaggerModel$InfoGenType;
  SwaggerModel.GenType = SwaggerModel$GenType;
  SwaggerModel.BasePrimType = SwaggerModel$BasePrimType;
  SwaggerModel.BaseStringType = SwaggerModel$BaseStringType;
  Object.defineProperty(SwaggerModel, 'PasswordType', {
    get: SwaggerModel$PasswordType_getInstance
  });
  Object.defineProperty(SwaggerModel, 'Base64Type', {
    get: SwaggerModel$Base64Type_getInstance
  });
  Object.defineProperty(SwaggerModel, 'BinaryStringType', {
    get: SwaggerModel$BinaryStringType_getInstance
  });
  Object.defineProperty(SwaggerModel, 'StringType', {
    get: SwaggerModel$StringType_getInstance
  });
  Object.defineProperty(SwaggerModel, 'VoidType', {
    get: SwaggerModel$VoidType_getInstance
  });
  SwaggerModel.IntegerType = SwaggerModel$IntegerType;
  Object.defineProperty(SwaggerModel, 'Int32Type', {
    get: SwaggerModel$Int32Type_getInstance
  });
  Object.defineProperty(SwaggerModel, 'Int64Type', {
    get: SwaggerModel$Int64Type_getInstance
  });
  Object.defineProperty(SwaggerModel, 'BoolType', {
    get: SwaggerModel$BoolType_getInstance
  });
  Object.defineProperty(SwaggerModel, 'FloatType', {
    get: SwaggerModel$FloatType_getInstance
  });
  Object.defineProperty(SwaggerModel, 'DoubleType', {
    get: SwaggerModel$DoubleType_getInstance
  });
  Object.defineProperty(SwaggerModel, 'DateType', {
    get: SwaggerModel$DateType_getInstance
  });
  Object.defineProperty(SwaggerModel, 'DateTimeType', {
    get: SwaggerModel$DateTimeType_getInstance
  });
  SwaggerModel.NamedObject = SwaggerModel$NamedObject;
  SwaggerModel.ArrayType = SwaggerModel$ArrayType;
  SwaggerModel.OptionalType = SwaggerModel$OptionalType;
  SwaggerModel.ObjType = SwaggerModel$ObjType;
  SwaggerModel.Prop = SwaggerModel$Prop;
  SwaggerModel.TypeDef = SwaggerModel$TypeDef;
  SwaggerModel.SecurityDefinition = SwaggerModel$SecurityDefinition;
  SwaggerModel.Contact = SwaggerModel$Contact;
  SwaggerModel.License = SwaggerModel$License;
  Object.defineProperty(SwaggerModel$Inside, 'QUERY', {
    get: SwaggerModel$Inside$QUERY_getInstance
  });
  Object.defineProperty(SwaggerModel$Inside, 'HEADER', {
    get: SwaggerModel$Inside$HEADER_getInstance
  });
  Object.defineProperty(SwaggerModel$Inside, 'PATH', {
    get: SwaggerModel$Inside$PATH_getInstance
  });
  Object.defineProperty(SwaggerModel$Inside, 'FORM_DATA', {
    get: SwaggerModel$Inside$FORM_DATA_getInstance
  });
  Object.defineProperty(SwaggerModel$Inside, 'BODY', {
    get: SwaggerModel$Inside$BODY_getInstance
  });
  Object.defineProperty(SwaggerModel$Inside, 'Companion', {
    get: SwaggerModel$Inside$Companion_getInstance
  });
  SwaggerModel.Inside = SwaggerModel$Inside;
  Object.defineProperty(SwaggerModel$SecurityType, 'API_KEY', {
    get: SwaggerModel$SecurityType$API_KEY_getInstance
  });
  Object.defineProperty(SwaggerModel$SecurityType, 'HTTP', {
    get: SwaggerModel$SecurityType$HTTP_getInstance
  });
  Object.defineProperty(SwaggerModel$SecurityType, 'OAUTH2', {
    get: SwaggerModel$SecurityType$OAUTH2_getInstance
  });
  Object.defineProperty(SwaggerModel$SecurityType, 'OPEN_ID_CONNECT', {
    get: SwaggerModel$SecurityType$OPEN_ID_CONNECT_getInstance
  });
  Object.defineProperty(SwaggerModel$SecurityType, 'Companion', {
    get: SwaggerModel$SecurityType$Companion_getInstance
  });
  SwaggerModel.SecurityType = SwaggerModel$SecurityType;
  SwaggerModel.Parameter = SwaggerModel$Parameter;
  SwaggerModel.Security = SwaggerModel$Security;
  SwaggerModel.PathMethodModel = SwaggerModel$PathMethodModel;
  SwaggerModel.PathModel = SwaggerModel$PathModel;
  SwaggerModel.SwaggerInfo = SwaggerModel$SwaggerInfo;
  SwaggerModel.Response = SwaggerModel$Response;
  Object.defineProperty(SwaggerModel$Companion.prototype, 'Versions', {
    get: SwaggerModel$Companion$Versions_getInstance
  });
  Object.defineProperty(SwaggerModel, 'Companion', {
    get: SwaggerModel$Companion_getInstance
  });
  package$swagger.SwaggerModel = SwaggerModel;
  package$swagger.toKotlin_8us2re$ = toKotlin_0;
  package$swagger.toKotlin_d3r508$ = toKotlin_1;
  Object.defineProperty(package$util, 'Dynamic', {
    get: Dynamic_getInstance
  });
  Object.defineProperty(package$util, 'DynamicAccess', {
    get: DynamicAccess_getInstance
  });
  Object.defineProperty(package$util, 'Json', {
    get: Json_getInstance
  });
  package$util.CustomJsonSerializer = CustomJsonSerializer;
  package$util.toJsonUntyped_3huzfx$ = toJsonUntyped;
  package$util.MetaListIterable = MetaListIterable;
  package$util.get_metaIter_4mqhgw$ = get_metaIter;
  package$util.IteratorStepInfo = IteratorStepInfo;
  package$util.StrReader = StrReader;
  package$util.readStringLit_4ve410$ = readStringLit;
  package$util.generate_maf521$ = generate;
  package$util.generate_xte3qv$ = generate_0;
  package$util.BlockSlot = BlockSlot;
  SlotInstance.RenderBlock = SlotInstance$RenderBlock;
  package$util.SlotInstance = SlotInstance;
  package$util.FileResult = FileResult;
  package$util.BlockBuilder = BlockBuilder;
  package$util.Block = Block;
  package$util.ByteArrayOutputStream = ByteArrayOutputStream;
  package$util.buildByteArray_xuyaid$ = buildByteArray;
  package$util.Charset = Charset;
  Object.defineProperty(package$util, 'UTF8', {
    get: UTF8_getInstance
  });
  Object.defineProperty(package$util, 'ASCII', {
    get: ASCII_getInstance
  });
  package$util.toString_ecs3bj$ = toString_1;
  package$util.toByteArray_wtqmxj$ = toByteArray;
  Object.defineProperty(package$util, 'CRC32', {
    get: CRC32_getInstance
  });
  package$util.crc32_964n91$ = crc32;
  package$util.get_octal_pdl1vz$ = get_octal;
  Extra.Mixin = Extra$Mixin;
  package$util.setExtra_5kiv3h$ = setExtra;
  Extra.Property = Extra$Property;
  Extra.PropertyThis = Extra$PropertyThis;
  package$util.Extra = Extra;
  package$util.getExtraTyped_p4ogyo$ = getExtraTyped;
  package$util.getExtra_vj42u1$ = getExtra;
  Object.defineProperty(package$util, 'Hex', {
    get: Hex_getInstance
  });
  package$util.get_unhexIgnoreSpaces_d2950k$ = get_unhexIgnoreSpaces;
  package$util.get_unhexIgnoreSpaces_pdl1vz$ = get_unhexIgnoreSpaces_0;
  package$util.get_unhex_pdl1vz$ = get_unhex;
  package$util.get_hex_964n91$ = get_hex;
  package$util.get_hex_s8ev3n$ = get_hex_0;
  package$util.get_shex_s8ev3n$ = get_shex;
  Object.defineProperty(package$util, 'ID', {
    get: ID_getInstance
  });
  Object.defineProperty(Indenter, 'INDENTS', {
    get: Indenter$INDENTS_getInstance
  });
  Indenter$Action.Text = Indenter$Action$Text;
  Indenter$Action.Marker = Indenter$Action$Marker;
  Indenter$Action.Inline = Indenter$Action$Inline;
  Indenter$Action.Line = Indenter$Action$Line;
  Indenter$Action.LineDeferred = Indenter$Action$LineDeferred;
  Object.defineProperty(Indenter$Action, 'EmptyLineOnce', {
    get: Indenter$Action$EmptyLineOnce_getInstance
  });
  Object.defineProperty(Indenter$Action, 'Indent', {
    get: Indenter$Action$Indent_getInstance
  });
  Object.defineProperty(Indenter$Action, 'Unindent', {
    get: Indenter$Action$Unindent_getInstance
  });
  Indenter.Action = Indenter$Action;
  Object.defineProperty(Indenter, 'Companion', {
    get: Indenter$Companion_getInstance
  });
  Indenter.IndenterEvaluator = Indenter$IndenterEvaluator;
  package$util.Indenter = Indenter;
  package$util.unaryPlus_mours2$ = unaryPlus;
  package$util.unaryPlus_d9lakw$ = unaryPlus_0;
  package$util.get_SEPARATOR_d9lakw$ = get_SEPARATOR;
  package$util.EMPTY_LINE_ONCE_d9lakw$ = EMPTY_LINE_ONCE;
  package$util.SEPARATOR_s3zzuq$ = SEPARATOR;
  package$util.XmlIndenter = XmlIndenter;
  package$util.xml_ldohgd$ = xml;
  package$util.indentStringHere_s3zzuq$ = indentStringHere;
  package$util.indentString_c25ews$ = indentString;
  package$util.MvnArtifact = MvnArtifact;
  package$util.escape_pdl1vz$ = escape;
  package$util.unescape_pdl1vz$ = unescape;
  package$util.quote_5cw0du$ = quote;
  package$util.isQuoted_pdl1vz$ = isQuoted;
  package$util.unquote_pdl1vz$ = unquote;
  package$util.get_kquoteLit_mzud1t$ = get_kquoteLit;
  package$util.SemVer = SemVer;
  Object.defineProperty(ZipBuilder, 'Companion', {
    get: ZipBuilder$Companion_getInstance
  });
  ZipBuilder.FileInfo = ZipBuilder$FileInfo;
  package$util.ZipBuilder = ZipBuilder;
  package$util.buildZip_oi1qpb$ = buildZip;
  EmptyContinuation = new EmptyContinuation$ObjectLiteral();
  windowInputFile = null;
  selectedFiles = [];
  swaggerModels = ArrayList_init();
  swaggerGenerators = emptyList();
  defaultArtifactGroup = 'com.example';
  defaultArtifactName = 'ktor-demo';
  defaultArtifactVersion = '0.0.1-SNAPSHOT';
  defaultKtorVersion = Versions_getInstance().LAST.version;
  defaultKtorEngine = 'netty';
  artifactGroupId = 'artifact-group';
  artifactNameId = 'artifact-name';
  artifactVersionId = 'artifact-version';
  KOTLIN_VERSION = '1.2.51';
  KOTLINX_COROUTINES_VERSION = '0.23.4';
  ALL_SERVER_FEATURES = lazy(ALL_SERVER_FEATURES$lambda);
  ALL_CLIENT_FEATURES = lazy(ALL_CLIENT_FEATURES$lambda);
  ALL_FEATURES = listOf([CoreClientEngine_getInstance(), ApacheClientEngine_getInstance(), CioClientEngine_getInstance(), JettyClientEngine_getInstance(), MockClientEngine_getInstance(), AuthBasicClientFeature_getInstance(), JsonClientFeature_getInstance(), WebSocketClientFeature_getInstance(), HtmlDslFeature_getInstance(), CssDslFeature_getInstance(), FreemarkerFeature_getInstance(), VelocityFeature_getInstance(), StaticContentFeature_getInstance(), AuthBasicFeature_getInstance(), AuthDigestFeature_getInstance(), AuthJwtFeature_getInstance(), AuthLdapFeature_getInstance(), AuthOauthFeature_getInstance(), AuthFeature_getInstance(), JsonGsonFeature_getInstance(), JsonJacksonFeature_getInstance(), LocationsFeature_getInstance(), MetricsFeature_getInstance(), SessionsFeature_getInstance(), CompressionFeature_getInstance(), CachingHeadersFeature_getInstance(), CallLoggingFeature_getInstance(), ConditionalHeadersFeature_getInstance(), CORSFeature_getInstance(), AutoHeadResponseFeature_getInstance(), DataConversionFeature_getInstance(), DefaultHeadersFeature_getInstance(), ForwardedHeaderSupportFeature_getInstance(), HSTSFeature_getInstance(), StatusPagesFeature_getInstance(), RoutingFeature_getInstance(), ContentNegotiationFeature_getInstance(), HttpsRedirectFeature_getInstance(), ShutdownUrlFeature_getInstance(), WebsocketsFeature_getInstance(), RawSocketsFeature_getInstance(), PartialContentFeature_getInstance(), RawSocketsTlsFeature_getInstance()]);
  var $receiver = ALL_FEATURES;
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init_0(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.id, element);
  }
  ALL_FEATURES_BY_ID = destination;
  clientEngine = new Extra$PropertyThis(void 0, clientEngine$lambda);
  applicationKtImports = new Extra$PropertyThis(void 0, applicationKtImports$lambda);
  applicationTestKtImports = new Extra$PropertyThis(void 0, applicationTestKtImports$lambda);
  reposToInclude = new Extra$PropertyThis(void 0, reposToInclude$lambda);
  compileDependencies = new Extra$PropertyThis(void 0, compileDependencies$lambda);
  testDependencies = new Extra$PropertyThis(void 0, testDependencies$lambda);
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}));
