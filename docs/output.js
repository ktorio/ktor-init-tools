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
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var Throwable = Error;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var plus_0 = Kotlin.kotlin.collections.plus_iwxh38$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var equals = Kotlin.equals;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toString = Kotlin.toString;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Any = Object;
  var toSet_0 = Kotlin.kotlin.collections.toSet_us0mfu$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var numberToByte = Kotlin.numberToByte;
  var toChar = Kotlin.toChar;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var unboxChar = Kotlin.unboxChar;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Comparable = Kotlin.kotlin.Comparable;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  Feature.prototype = Object.create(Block.prototype);
  Feature.prototype.constructor = Feature;
  KtorEngine.prototype = Object.create(Enum.prototype);
  KtorEngine.prototype.constructor = KtorEngine;
  ProjectType.prototype = Object.create(Enum.prototype);
  ProjectType.prototype.constructor = ProjectType;
  AuthBasicFeature.prototype = Object.create(Feature.prototype);
  AuthBasicFeature.prototype.constructor = AuthBasicFeature;
  AuthDigestFeature.prototype = Object.create(Feature.prototype);
  AuthDigestFeature.prototype.constructor = AuthDigestFeature;
  AuthFeature.prototype = Object.create(Feature.prototype);
  AuthFeature.prototype.constructor = AuthFeature;
  AuthJwtFeature.prototype = Object.create(Feature.prototype);
  AuthJwtFeature.prototype.constructor = AuthJwtFeature;
  AuthLdapFeature.prototype = Object.create(Feature.prototype);
  AuthLdapFeature.prototype.constructor = AuthLdapFeature;
  AuthOauthFeature.prototype = Object.create(Feature.prototype);
  AuthOauthFeature.prototype.constructor = AuthOauthFeature;
  AutoHeadResponseFeature.prototype = Object.create(Feature.prototype);
  AutoHeadResponseFeature.prototype.constructor = AutoHeadResponseFeature;
  CORSFeature.prototype = Object.create(Feature.prototype);
  CORSFeature.prototype.constructor = CORSFeature;
  CachingHeadersFeature.prototype = Object.create(Feature.prototype);
  CachingHeadersFeature.prototype.constructor = CachingHeadersFeature;
  CallLoggingFeature.prototype = Object.create(Feature.prototype);
  CallLoggingFeature.prototype.constructor = CallLoggingFeature;
  CompressionFeature.prototype = Object.create(Feature.prototype);
  CompressionFeature.prototype.constructor = CompressionFeature;
  ConditionalHeadersFeature.prototype = Object.create(Feature.prototype);
  ConditionalHeadersFeature.prototype.constructor = ConditionalHeadersFeature;
  ContentNegotiationFeature.prototype = Object.create(Feature.prototype);
  ContentNegotiationFeature.prototype.constructor = ContentNegotiationFeature;
  CssDslFeature.prototype = Object.create(Feature.prototype);
  CssDslFeature.prototype.constructor = CssDslFeature;
  DataConversionFeature.prototype = Object.create(Feature.prototype);
  DataConversionFeature.prototype.constructor = DataConversionFeature;
  DefaultHeadersFeature.prototype = Object.create(Feature.prototype);
  DefaultHeadersFeature.prototype.constructor = DefaultHeadersFeature;
  ForwardedHeaderSupportFeature.prototype = Object.create(Feature.prototype);
  ForwardedHeaderSupportFeature.prototype.constructor = ForwardedHeaderSupportFeature;
  FreemarkerFeature.prototype = Object.create(Feature.prototype);
  FreemarkerFeature.prototype.constructor = FreemarkerFeature;
  HSTSFeature.prototype = Object.create(Feature.prototype);
  HSTSFeature.prototype.constructor = HSTSFeature;
  HtmlDslFeature.prototype = Object.create(Feature.prototype);
  HtmlDslFeature.prototype.constructor = HtmlDslFeature;
  HttpClientFeature.prototype = Object.create(Feature.prototype);
  HttpClientFeature.prototype.constructor = HttpClientFeature;
  HttpsRedirectFeature.prototype = Object.create(Feature.prototype);
  HttpsRedirectFeature.prototype.constructor = HttpsRedirectFeature;
  JsonGsonFeature.prototype = Object.create(Feature.prototype);
  JsonGsonFeature.prototype.constructor = JsonGsonFeature;
  JsonJacksonFeature.prototype = Object.create(Feature.prototype);
  JsonJacksonFeature.prototype.constructor = JsonJacksonFeature;
  LocationsFeature.prototype = Object.create(Feature.prototype);
  LocationsFeature.prototype.constructor = LocationsFeature;
  MetricsFeature.prototype = Object.create(Feature.prototype);
  MetricsFeature.prototype.constructor = MetricsFeature;
  PartialContentFeature.prototype = Object.create(Feature.prototype);
  PartialContentFeature.prototype.constructor = PartialContentFeature;
  RawSocketsFeature.prototype = Object.create(Feature.prototype);
  RawSocketsFeature.prototype.constructor = RawSocketsFeature;
  RawSocketsTlsFeature.prototype = Object.create(Feature.prototype);
  RawSocketsTlsFeature.prototype.constructor = RawSocketsTlsFeature;
  RoutingFeature.prototype = Object.create(Feature.prototype);
  RoutingFeature.prototype.constructor = RoutingFeature;
  SessionsFeature.prototype = Object.create(Feature.prototype);
  SessionsFeature.prototype.constructor = SessionsFeature;
  ShutdownUrlFeature.prototype = Object.create(Feature.prototype);
  ShutdownUrlFeature.prototype.constructor = ShutdownUrlFeature;
  StaticContentFeature.prototype = Object.create(Feature.prototype);
  StaticContentFeature.prototype.constructor = StaticContentFeature;
  StatusPagesFeature.prototype = Object.create(Feature.prototype);
  StatusPagesFeature.prototype.constructor = StatusPagesFeature;
  VelocityFeature.prototype = Object.create(Feature.prototype);
  VelocityFeature.prototype.constructor = VelocityFeature;
  WebsocketsFeature.prototype = Object.create(Feature.prototype);
  WebsocketsFeature.prototype.constructor = WebsocketsFeature;
  ApplicationConf.prototype = Object.create(Block.prototype);
  ApplicationConf.prototype.constructor = ApplicationConf;
  ApplicationKt.prototype = Object.create(Block.prototype);
  ApplicationKt.prototype.constructor = ApplicationKt;
  BuildFiles.prototype = Object.create(Block.prototype);
  BuildFiles.prototype.constructor = BuildFiles;
  BuildFilesGradle.prototype = Object.create(Block.prototype);
  BuildFilesGradle.prototype.constructor = BuildFilesGradle;
  BuildFilesMaven.prototype = Object.create(Block.prototype);
  BuildFilesMaven.prototype.constructor = BuildFilesMaven;
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
  var jq_0 = defineInlineFunction('output.io.ktor.start.jq_lt8gi4$', function (str) {
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
  var defaultArtifactGroup;
  var defaultArtifactName;
  var defaultArtifactVersion;
  var defaultKtorVersion;
  var defaultKtorEngine;
  var artifactGroupId;
  var artifactNameId;
  var artifactVersionId;
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
  var Map = Kotlin.kotlin.collections.Map;
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var str = '#include_wrapper';
    jQuery(str).change(main$lambda);
    var str_0 = '#ktor-engine';
    jQuery(str_0).change(main$lambda_0);
    var str_1 = '#ktor-version';
    jQuery(str_1).change(main$lambda_1);
    var str_2 = '#project-type';
    jQuery(str_2).change(main$lambda_2);
    var str_3 = '#artifact-group';
    jQuery(str_3).keyup(main$lambda_3);
    var str_4 = '#artifact-name';
    jQuery(str_4).keyup(main$lambda_4);
    var id = artifactVersionId;
    jQuery('#' + id).keyup(main$lambda_5);
    var str_5 = '#include_wrapper';
    var tmp$_13 = jQuery(str_5);
    var $receiver = get_hashParams();
    var key = 'no_wrapper';
    var tmp$_14;
    tmp$_13.prop('checked', (Kotlin.isType(tmp$_14 = $receiver, Map) ? tmp$_14 : throwCCE()).containsKey_11rb$(key) ? '' : 'checked');
    var str_6 = '#artifact-group';
    jQuery(str_6).val((tmp$_0 = (tmp$ = get_hashParams().get_11rb$('artifact-group')) != null ? firstOrNull(tmp$) : null) != null ? tmp$_0 : 'com.example');
    var str_7 = '#artifact-name';
    jQuery(str_7).val((tmp$_2 = (tmp$_1 = get_hashParams().get_11rb$('artifact-name')) != null ? firstOrNull(tmp$_1) : null) != null ? tmp$_2 : 'ktor-demo');
    var str_8 = '#artifact-version';
    jQuery(str_8).val((tmp$_4 = (tmp$_3 = get_hashParams().get_11rb$(artifactVersionId)) != null ? firstOrNull(tmp$_3) : null) != null ? tmp$_4 : '0.0.1-SNAPSHOT');
    var str_9 = '#ktor-version';
    jQuery(str_9).val((tmp$_6 = (tmp$_5 = get_hashParams().get_11rb$('ktor-version')) != null ? firstOrNull(tmp$_5) : null) != null ? tmp$_6 : defaultKtorVersion);
    var str_10 = '#ktor-engine';
    jQuery(str_10).val((tmp$_8 = (tmp$_7 = get_hashParams().get_11rb$('ktor-engine')) != null ? firstOrNull(tmp$_7) : null) != null ? tmp$_8 : defaultKtorEngine);
    var str_11 = '#ktor-version';
    jQuery(str_11).val((tmp$_10 = (tmp$_9 = get_hashParams().get_11rb$('ktor-version')) != null ? firstOrNull(tmp$_9) : null) != null ? tmp$_10 : defaultKtorVersion);
    var str_12 = '#project-type';
    jQuery(str_12).val((tmp$_12 = (tmp$_11 = get_hashParams().get_11rb$('project-type')) != null ? firstOrNull(tmp$_11) : null) != null ? tmp$_12 : ProjectType$Gradle_getInstance().id);
    addDependencies();
    registerBuildButton();
    handleFiltering();
    removeLoading();
    updateHash();
  }
  function insideIframe$lambda() {
    try {
      return window.self !== window.top;
    }
     catch (e) {
      return true;
    }
  }
  var insideIframe;
  function get_insideIframe() {
    return insideIframe.value;
  }
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
    (tmp$_1 = document.location) != null ? (tmp$_1.hash = formUrlEncode_0(items)) : null;
    try {
      window.top.postMessage(jsObject([to('type', 'updateHash'), to('value', (tmp$_2 = document.location) != null ? tmp$_2.hash : null)]), '*');
    }
     catch (e) {
      console.error(e);
    }
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function hashParams$lambda() {
    try {
      return formUrlDecode(trim(window.location.hash, Kotlin.charArrayOf(35)));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return emptyMap();
      }
       else
        throw e;
    }
  }
  var hashParams;
  function get_hashParams() {
    return hashParams.value;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function formUrlDecode($receiver) {
    var $receiver_0 = split($receiver, Kotlin.charArrayOf(38));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
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
    var destination_1 = ArrayList_init(destination_0.size);
    var tmp$_3;
    tmp$_3 = destination_0.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      var tmp$_4 = destination_1.add_11rb$;
      var tmp$_5 = item_0.key;
      var $receiver_1 = item_0.value;
      var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
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
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
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
  function addDependencies$lambda() {
    updateHash();
    return Unit;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function addDependencies() {
    var tmp$, tmp$_0, tmp$_1;
    var str = '#dependencies';
    var deps = jQuery(str);
    deps.text('');
    var dependencyIds = toSet((tmp$ = get_hashParams().get_11rb$('dependency')) != null ? tmp$ : emptyList());
    tmp$_0 = ALL_FEATURES.iterator();
    while (tmp$_0.hasNext()) {
      var dependency = tmp$_0.next();
      var checkedBool = dependencyIds.contains_11rb$(dependency.id);
      var checked = checkedBool ? 'checked' : '';
      var str_0 = "<label for='artifact-" + dependency.id + "' class='artifact' />";
      var tmp$_2 = jQuery(str_0);
      var str_1 = "<div class='title' />";
      var tmp$_3 = jQuery(str_1);
      var str_2 = "<input id='artifact-" + dependency.id + "' type='checkbox' " + checked + ' />';
      var tmp$_4 = tmp$_3.append(jQuery(str_2));
      var str_3 = '<span />';
      var tmp$_5 = tmp$_4.append(jQuery(str_3).text(' ' + dependency.title));
      var str_4 = "<span class='artifact-name' />";
      var tmp$_6 = tmp$_2.append(tmp$_5.append(jQuery(str_4).text(' (' + joinToString(dependency.artifacts, ', ') + ')')));
      var str_5 = "<div class='subtitle' />";
      var tmp$_7 = jQuery(str_5).append(jQuery('<div />').text(dependency.description));
      var $receiver = jQuery('<div />');
      var tmp$_8;
      if (dependency.documentation != null) {
        $receiver.append(jQuery('<a />').attr('href', (tmp$_8 = dependency.documentation) != null ? tmp$_8 : '').attr('target', '_blank').text('Documentation'));
      }
      deps.append(tmp$_6.append(tmp$_7.append($receiver)));
    }
    tmp$_1 = ALL_FEATURES.iterator();
    while (tmp$_1.hasNext()) {
      var dependency_0 = tmp$_1.next();
      var str_6 = '#artifact-' + dependency_0.id;
      jQuery(str_6).change(addDependencies$lambda);
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

            this.local$info = new BuildInfo(get_includeWrapper(), ProjectType$Companion_getInstance().invoke_61zpoe$(this.local$projectType), new SemVer(ktorVersion), this.local$artifactName, this.local$artifactGroup, artifactVersion, KtorEngine$Companion_getInstance().invoke_61zpoe$(this.local$ktorEngine), build$lambda);
            this.exceptionState_0 = 2;
            this.local$zb = new ZipBuilder();
            var tmp$_1;
            this.state_0 = 1;
            this.result_0 = generate(this.local$info, plus(listOf_0(ApplicationKt_getInstance()), dependenciesToInclude), this);
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
                  console.log(toString_0(result.data, UTF8_getInstance()));
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
    if (setOf(['127.0.0.1', 'localhost']).contains_11rb$(ensureNotNull(document.location).hostname)) {
      var str = '#buildButtonDev';
      jQuery(str).removeAttr('disabled').css('display', 'inline-block').on('click', registerBuildButton$lambda);
    }
    var str_0 = '#buildButton';
    jQuery(str_0).removeAttr('disabled').on('click', registerBuildButton$lambda_0);
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
  function handleFiltering$lambda(closure$dependencyFilter) {
    return function () {
      var filter = closure$dependencyFilter.val().toLowerCase();
      var str = 'label.artifact';
      jQuery(str).each(handleFiltering$lambda$lambda(filter));
      return Unit;
    };
  }
  function handleFiltering() {
    var str = '#dependency-filter';
    var dependencyFilter = jQuery(str);
    dependencyFilter.on('keyup', handleFiltering$lambda(dependencyFilter));
  }
  function removeLoading() {
    var str = '.loading';
    jQuery(str).removeClass('loading').addClass('loaded');
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
  function BuildInfo(includeWrapper, projectType, ktorVersion, artifactName, artifactGroup, artifactVersion, ktorEngine, fetch) {
    this.includeWrapper = includeWrapper;
    this.projectType = projectType;
    this.ktorVersion = ktorVersion;
    this.artifactName = artifactName;
    this.artifactGroup = artifactGroup;
    this.artifactVersion = artifactVersion;
    this.ktorEngine = ktorEngine;
    this.fetch = fetch;
    this.ktorVer = this.ktorVersion;
    this.developmentPackage = 'io.ktor.server.' + this.ktorEngine.id;
    this.developmentEngineFQ = this.developmentPackage + '.DevelopmentEngine';
  }
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
    return this.fetch;
  };
  BuildInfo.prototype.copy_n2juvc$ = function (includeWrapper, projectType, ktorVersion, artifactName, artifactGroup, artifactVersion, ktorEngine, fetch) {
    return new BuildInfo(includeWrapper === void 0 ? this.includeWrapper : includeWrapper, projectType === void 0 ? this.projectType : projectType, ktorVersion === void 0 ? this.ktorVersion : ktorVersion, artifactName === void 0 ? this.artifactName : artifactName, artifactGroup === void 0 ? this.artifactGroup : artifactGroup, artifactVersion === void 0 ? this.artifactVersion : artifactVersion, ktorEngine === void 0 ? this.ktorEngine : ktorEngine, fetch === void 0 ? this.fetch : fetch);
  };
  BuildInfo.prototype.toString = function () {
    return 'BuildInfo(includeWrapper=' + Kotlin.toString(this.includeWrapper) + (', projectType=' + Kotlin.toString(this.projectType)) + (', ktorVersion=' + Kotlin.toString(this.ktorVersion)) + (', artifactName=' + Kotlin.toString(this.artifactName)) + (', artifactGroup=' + Kotlin.toString(this.artifactGroup)) + (', artifactVersion=' + Kotlin.toString(this.artifactVersion)) + (', ktorEngine=' + Kotlin.toString(this.ktorEngine)) + (', fetch=' + Kotlin.toString(this.fetch)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.fetch) | 0;
    return result;
  };
  BuildInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.includeWrapper, other.includeWrapper) && Kotlin.equals(this.projectType, other.projectType) && Kotlin.equals(this.ktorVersion, other.ktorVersion) && Kotlin.equals(this.artifactName, other.artifactName) && Kotlin.equals(this.artifactGroup, other.artifactGroup) && Kotlin.equals(this.artifactVersion, other.artifactVersion) && Kotlin.equals(this.ktorEngine, other.ktorEngine) && Kotlin.equals(this.fetch, other.fetch)))));
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
  function FileFetcher() {
  }
  FileFetcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FileFetcher',
    interfaces: []
  };
  function add($receiver, name, content, charset, mode) {
    if (charset === void 0)
      charset = UTF8_getInstance();
    if (mode === void 0)
      mode = toInt('644', 8);
    $receiver.add_dkzqdg$(name, toByteArray(content, charset), mode);
  }
  function Feature(deps) {
    Block.call(this, deps.slice());
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
  Object.defineProperty(Feature.prototype, 'documentation', {
    get: function () {
      return this.documentation_nx4xfm$_0;
    }
  });
  Feature.prototype.render_miqy8c$ = function ($receiver, info) {
    var tmp$, tmp$_0;
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
    this.renderFeature_gtq0m3$($receiver, info);
  };
  Feature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
  };
  Feature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Feature',
    interfaces: [Block]
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
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
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
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
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
  function Versions() {
    Versions_instance = this;
    this.V092 = new SemVer('0.9.2');
    this.ALL = [this.V092];
    this.LAST = this.V092;
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
  function AuthBasicFeature() {
    AuthBasicFeature_instance = this;
    Feature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.repos_gdc384$_0 = Repos_getInstance().ktor;
    this.artifacts_u3usuk$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_l2z8dw$_0 = 'auth-basic';
    this.title_fcz6ob$_0 = 'Authentication Basic';
    this.description_2o6p01$_0 = 'Handle Basic authentication';
    this.documentation_zez1d9$_0 = 'https://ktor.io/features/authentication/basic.html';
  }
  Object.defineProperty(AuthBasicFeature.prototype, 'repos', {
    get: function () {
      return this.repos_gdc384$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_u3usuk$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'id', {
    get: function () {
      return this.id_l2z8dw$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'title', {
    get: function () {
      return this.title_fcz6ob$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'description', {
    get: function () {
      return this.description_2o6p01$_0;
    }
  });
  Object.defineProperty(AuthBasicFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_zez1d9$_0;
    }
  });
  function AuthBasicFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('basic'.length === 0 ? '{ ' + '' : 'basic' + ' { ' + '');
    $receiver._indent();
    $receiver._unindent();
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  AuthBasicFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addAuthProvider($receiver, AuthBasicFeature$renderFeature$lambda);
  };
  AuthBasicFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthBasicFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.repos_c8nfaw$_0 = Repos_getInstance().ktor;
    this.artifacts_eodlew$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_8m6rlc$_0 = 'auth-digest';
    this.title_b8air3$_0 = 'Authentication Digest';
    this.description_jyeoml$_0 = 'Handle Digest authentication';
    this.documentation_o927hr$_0 = 'https://ktor.io/features/authentication/digest.html';
  }
  Object.defineProperty(AuthDigestFeature.prototype, 'repos', {
    get: function () {
      return this.repos_c8nfaw$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_eodlew$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'id', {
    get: function () {
      return this.id_8m6rlc$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'title', {
    get: function () {
      return this.title_b8air3$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'description', {
    get: function () {
      return this.description_jyeoml$_0;
    }
  });
  Object.defineProperty(AuthDigestFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_o927hr$_0;
    }
  });
  AuthDigestFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthDigestFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_7vahic$_0 = Repos_getInstance().ktor;
    this.artifacts_w3fnd0$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_2oeams$_0 = 'auth';
    this.title_8vne25$_0 = 'Authentication';
    this.description_4ec9yv$_0 = 'Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2';
    this.documentation_awl92t$_0 = 'https://ktor.io/features/authentication.html';
    this.BLOCK = this.newSlot_pdl1vj$('BLOCK');
  }
  Object.defineProperty(AuthFeature.prototype, 'repos', {
    get: function () {
      return this.repos_7vahic$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_w3fnd0$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'id', {
    get: function () {
      return this.id_2oeams$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'title', {
    get: function () {
      return this.title_8vne25$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'description', {
    get: function () {
      return this.description_4ec9yv$_0;
    }
  });
  Object.defineProperty(AuthFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_awl92t$_0;
    }
  });
  function AuthFeature$renderFeature$lambda(closure$info, this$AuthFeature, this$renderFeature) {
    return function ($receiver) {
      if (closure$info.ktorVer.compareTo_11rb$(Versions_getInstance().V092) >= 0) {
        var $receiver_0 = 'install(Authentication)';
        $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
        $receiver._indent();
        try {
          var this$AuthFeature_0 = this$AuthFeature;
          this$renderFeature.block_rsgfsn$($receiver, this$AuthFeature_0.BLOCK);
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
      }
       else {
        var $receiver_1 = 'install(Authentication)';
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{ ' + '' : $receiver_1 + ' { ' + '');
        $receiver._indent();
        try {
          var this$AuthFeature_1 = this$AuthFeature;
          this$renderFeature.block_rsgfsn$($receiver, this$AuthFeature_1.BLOCK);
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
      }
      return Unit;
    };
  }
  AuthFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.auth.*');
    addFeatureInstall($receiver, AuthFeature$renderFeature$lambda(info, this, $receiver));
  };
  AuthFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.repos_3yaw91$_0 = Repos_getInstance().ktor;
    this.artifacts_mpewbp$_0 = listOf_0('io.ktor:ktor-auth-jwt:$ktor_version');
    this.id_96dnzh$_0 = 'auth-jwt';
    this.title_4ynssu$_0 = 'Authentication JWT';
    this.description_6r30ye$_0 = 'Handle JWT authentication';
    this.documentation_31w9g$_0 = 'https://ktor.io/features/authentication/jwt.html';
  }
  Object.defineProperty(AuthJwtFeature.prototype, 'repos', {
    get: function () {
      return this.repos_3yaw91$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_mpewbp$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'id', {
    get: function () {
      return this.id_96dnzh$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'title', {
    get: function () {
      return this.title_4ynssu$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'description', {
    get: function () {
      return this.description_6r30ye$_0;
    }
  });
  Object.defineProperty(AuthJwtFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_31w9g$_0;
    }
  });
  AuthJwtFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthJwtFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.repos_h37k17$_0 = Repos_getInstance().ktor;
    this.artifacts_u8q64r$_0 = listOf_0('io.ktor:ktor-auth-ldap:$ktor_version');
    this.id_t8ep8z$_0 = 'auth-ldap';
    this.title_i3kgl0$_0 = 'Authentication LDAP';
    this.description_9cnttc$_0 = 'Handle JDAP authentication';
    this.documentation_c0ed66$_0 = 'https://ktor.io/features/authentication/ldap.html';
  }
  Object.defineProperty(AuthLdapFeature.prototype, 'repos', {
    get: function () {
      return this.repos_h37k17$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_u8q64r$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'id', {
    get: function () {
      return this.id_t8ep8z$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'title', {
    get: function () {
      return this.title_i3kgl0$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'description', {
    get: function () {
      return this.description_9cnttc$_0;
    }
  });
  Object.defineProperty(AuthLdapFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_c0ed66$_0;
    }
  });
  AuthLdapFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthLdapFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), AuthFeature_getInstance()]);
    this.repos_kohdg5$_0 = Repos_getInstance().ktor;
    this.artifacts_iga75h$_0 = listOf_0('io.ktor:ktor-auth:$ktor_version');
    this.id_mtmshv$_0 = 'auth-oauth';
    this.title_lou9zy$_0 = 'Authentication OAuth';
    this.description_pb06ii$_0 = 'Handle OAuth authentication';
    this.documentation_jqbbpg$_0 = 'https://ktor.io/features/authentication/oauth.html';
  }
  Object.defineProperty(AuthOauthFeature.prototype, 'repos', {
    get: function () {
      return this.repos_kohdg5$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_iga75h$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'id', {
    get: function () {
      return this.id_mtmshv$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'title', {
    get: function () {
      return this.title_lou9zy$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'description', {
    get: function () {
      return this.description_pb06ii$_0;
    }
  });
  Object.defineProperty(AuthOauthFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_jqbbpg$_0;
    }
  });
  AuthOauthFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AuthOauthFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_kkh3f0$_0 = Repos_getInstance().ktor;
    this.artifacts_bu7kwk$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_qppt8$_0 = 'caching-headers';
    this.title_lktzyt$_0 = 'CachingHeaders';
    this.description_x6jbpr$_0 = 'Send the headers Cache-Control and Expires used by clients and proxies to cache requests';
    this.documentation_uh6iib$_0 = 'https://ktor.io/features/caching-headers.html';
  }
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'repos', {
    get: function () {
      return this.repos_kkh3f0$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_bu7kwk$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'id', {
    get: function () {
      return this.id_qppt8$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'title', {
    get: function () {
      return this.title_lktzyt$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'description', {
    get: function () {
      return this.description_x6jbpr$_0;
    }
  });
  Object.defineProperty(AutoHeadResponseFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_uh6iib$_0;
    }
  });
  function AutoHeadResponseFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(CachingHeaders)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('options { outgoingContent ->');
      $receiver._indent();
      try {
        var $receiver_1 = 'when (outgoingContent.contentType?.withoutParameters())';
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{ ' + '' : $receiver_1 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_oe5gzt$_0 = Repos_getInstance().ktor;
    this.artifacts_4k9qv$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_6t1969$_0 = 'cors';
    this.title_peidjm$_0 = 'CORS';
    this.description_f34sy$_0 = 'Enable Cross-Origin Resource Sharing (CORS)';
    this.documentation_mhlcsw$_0 = 'https://ktor.io/features/cors.html';
  }
  Object.defineProperty(CORSFeature.prototype, 'repos', {
    get: function () {
      return this.repos_oe5gzt$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_4k9qv$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'id', {
    get: function () {
      return this.id_6t1969$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'title', {
    get: function () {
      return this.title_peidjm$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'description', {
    get: function () {
      return this.description_f34sy$_0;
    }
  });
  Object.defineProperty(CORSFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_mhlcsw$_0;
    }
  });
  function CORSFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(CORS)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('method(HttpMethod.Options)');
      $receiver.line_61zpoe$('method(HttpMethod.Get)');
      $receiver.line_61zpoe$('method(HttpMethod.Post)');
      $receiver.line_61zpoe$('method(HttpMethod.Put)');
      $receiver.line_61zpoe$('method(HttpMethod.Delete)');
      $receiver.line_61zpoe$('method(HttpMethod.Patch)');
      $receiver.line_61zpoe$('header(HttpHeaders.Authorization)');
      $receiver.line_61zpoe$('allowCredentials = true');
      $receiver.line_61zpoe$('anyHost()');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_uw8ngd$_0 = Repos_getInstance().ktor;
    this.artifacts_txevmr$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_rntdhx$_0 = 'auto-head-response';
    this.title_tvvqwk$_0 = 'AutoHeadResponse';
    this.description_r8mwew$_0 = 'Provide responses to HEAD requests for existing routes that have the GET verb defined';
    this.documentation_d2dgk6$_0 = 'https://ktor.io/features/autoheadresponse.html';
  }
  Object.defineProperty(CachingHeadersFeature.prototype, 'repos', {
    get: function () {
      return this.repos_uw8ngd$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_txevmr$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'id', {
    get: function () {
      return this.id_rntdhx$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'title', {
    get: function () {
      return this.title_tvvqwk$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'description', {
    get: function () {
      return this.description_r8mwew$_0;
    }
  });
  Object.defineProperty(CachingHeadersFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_d2dgk6$_0;
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_i5jjl3$_0 = Repos_getInstance().ktor;
    this.artifacts_moa661$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_f09gfl$_0 = 'call-logging';
    this.title_j5wg4w$_0 = 'CallLogging';
    this.description_4e4v78$_0 = 'Logs client requests';
    this.documentation_5es19u$_0 = 'https://ktor.io/features/call-logging.html';
  }
  Object.defineProperty(CallLoggingFeature.prototype, 'repos', {
    get: function () {
      return this.repos_i5jjl3$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_moa661$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'id', {
    get: function () {
      return this.id_f09gfl$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'title', {
    get: function () {
      return this.title_j5wg4w$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'description', {
    get: function () {
      return this.description_4e4v78$_0;
    }
  });
  Object.defineProperty(CallLoggingFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_5es19u$_0;
    }
  });
  function CallLoggingFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(CallLogging)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_viging$_0 = Repos_getInstance().ktor;
    this.artifacts_dplvt8$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_1vcik4$_0 = 'compression';
    this.title_witf79$_0 = 'Compression';
    this.description_f74yxd$_0 = 'Compress outgoing content using gzip, deflate or custom encoder and thus reduce the size of the response';
    this.documentation_1q1cdp$_0 = 'https://ktor.io/features/compression.html';
  }
  Object.defineProperty(CompressionFeature.prototype, 'repos', {
    get: function () {
      return this.repos_viging$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_dplvt8$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'id', {
    get: function () {
      return this.id_1vcik4$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'title', {
    get: function () {
      return this.title_witf79$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'description', {
    get: function () {
      return this.description_f74yxd$_0;
    }
  });
  Object.defineProperty(CompressionFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_1q1cdp$_0;
    }
  });
  function CompressionFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(Compression)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('gzip'.length === 0 ? '{ ' + '' : 'gzip' + ' { ' + '');
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('priority = 1.0');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      $receiver.line_61zpoe$('deflate'.length === 0 ? '{ ' + '' : 'deflate' + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_ty7nmk$_0 = Repos_getInstance().ktor;
    this.artifacts_wgsw8s$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_9jyzvg$_0 = 'conditional-headers';
    this.title_uykk6d$_0 = 'ConditionalHeaders';
    this.description_2pafjz$_0 = 'Avoids sending content if the client already has the same content using ETag or LastModified';
    this.documentation_evxn25$_0 = 'https://ktor.io/features/conditional-headers.html';
  }
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'repos', {
    get: function () {
      return this.repos_ty7nmk$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_wgsw8s$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'id', {
    get: function () {
      return this.id_9jyzvg$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'title', {
    get: function () {
      return this.title_uykk6d$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'description', {
    get: function () {
      return this.description_2pafjz$_0;
    }
  });
  Object.defineProperty(ConditionalHeadersFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_evxn25$_0;
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_n2l5us$_0 = Repos_getInstance().ktor;
    this.artifacts_bjzgak$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_gizhws$_0 = 'content-negotiation';
    this.title_o2y2el$_0 = 'ContentNegotiation';
    this.description_qp3lmx$_0 = 'Provides automatic content conversion according to Content-Type and Accept headers.';
    this.documentation_w25oc5$_0 = 'https://ktor.io/features/content-negotiation.html';
    this.BLOCK = this.newSlot_pdl1vj$('BLOCK');
  }
  Object.defineProperty(ContentNegotiationFeature.prototype, 'repos', {
    get: function () {
      return this.repos_n2l5us$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_bjzgak$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'id', {
    get: function () {
      return this.id_gizhws$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'title', {
    get: function () {
      return this.title_o2y2el$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'description', {
    get: function () {
      return this.description_qp3lmx$_0;
    }
  });
  Object.defineProperty(ContentNegotiationFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_w25oc5$_0;
    }
  });
  function ContentNegotiationFeature$renderFeature$lambda(this$ContentNegotiationFeature, this$renderFeature) {
    return function ($receiver) {
      var $receiver_0 = 'install(ContentNegotiation)';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
      $receiver._indent();
      try {
        var this$ContentNegotiationFeature_0 = this$ContentNegotiationFeature;
        this$renderFeature.block_rsgfsn$($receiver, this$ContentNegotiationFeature_0.BLOCK);
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_w3vhti$_0 = plus(Repos_getInstance().jcenter, Repos_getInstance().kotlin_js_wrappers);
    this.artifacts_hbxqui$_0 = listOf_0('org.jetbrains:kotlin-css-jvm:1.0.0-pre.31-kotlin-1.2.41');
    this.id_67agn6$_0 = 'css-dsl';
    this.title_x48edb$_0 = 'CSS DSL';
    this.description_fxg5az$_0 = 'Generate CSS using Kotlin code';
    this.documentation_9osmsj$_0 = 'https://github.com/JetBrains/kotlin-wrappers/tree/master/kotlin-css';
  }
  Object.defineProperty(CssDslFeature.prototype, 'repos', {
    get: function () {
      return this.repos_w3vhti$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_hbxqui$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'id', {
    get: function () {
      return this.id_67agn6$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'title', {
    get: function () {
      return this.title_x48edb$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'description', {
    get: function () {
      return this.description_fxg5az$_0;
    }
  });
  Object.defineProperty(CssDslFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_9osmsj$_0;
    }
  });
  function CssDslFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'get("/styles.css")';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
    $receiver._indent();
    try {
      var $receiver_1 = 'call.respondCss';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{ ' + '' : $receiver_1 + ' { ' + '');
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('body'.length === 0 ? '{ ' + '' : 'body' + ' { ' + '');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('backgroundColor = Color.red');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        $receiver.line_61zpoe$('p'.length === 0 ? '{ ' + '' : 'p' + ' { ' + '');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('fontSize = 2.em');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        var $receiver_2 = 'rule("p.myclass")';
        $receiver.line_61zpoe$($receiver_2.length === 0 ? '{ ' + '' : $receiver_2 + ' { ' + '');
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
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
    $receiver._indent();
    try {
      var $receiver_1 = 'style(type = ContentType.Text.CSS.toString())';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{ ' + '' : $receiver_1 + ' { ' + '');
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
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_8tlujo$_0 = Repos_getInstance().ktor;
    this.artifacts_u45w58$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_2onzc4$_0 = 'data-conversion';
    this.title_7t8xzv$_0 = 'DataConversion';
    this.description_aw9oqp$_0 = 'Allows to serialize and deserialize a list of values (used by the Locations feature)';
    this.documentation_g2l1rx$_0 = 'https://ktor.io/features/caching-headers.html';
  }
  Object.defineProperty(DataConversionFeature.prototype, 'repos', {
    get: function () {
      return this.repos_8tlujo$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_u45w58$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'id', {
    get: function () {
      return this.id_2onzc4$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'title', {
    get: function () {
      return this.title_7t8xzv$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'description', {
    get: function () {
      return this.description_aw9oqp$_0;
    }
  });
  Object.defineProperty(DataConversionFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_g2l1rx$_0;
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_919slb$_0 = Repos_getInstance().ktor;
    this.artifacts_6l0msh$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_if58rb$_0 = 'default-headers';
    this.title_80ww1i$_0 = 'DefaultHeaders';
    this.description_fdbkgq$_0 = 'This feature adds a default set of headers to HTTP responses';
    this.documentation_sx3qg8$_0 = 'https://ktor.io/features/default-headers.html';
  }
  Object.defineProperty(DefaultHeadersFeature.prototype, 'repos', {
    get: function () {
      return this.repos_919slb$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_6l0msh$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'id', {
    get: function () {
      return this.id_if58rb$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'title', {
    get: function () {
      return this.title_80ww1i$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'description', {
    get: function () {
      return this.description_fdbkgq$_0;
    }
  });
  Object.defineProperty(DefaultHeadersFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_sx3qg8$_0;
    }
  });
  function DefaultHeadersFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(DefaultHeaders)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_avmc56$_0 = Repos_getInstance().ktor;
    this.artifacts_qtfn4q$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_p6erwi$_0 = 'forwarded-header-support';
    this.title_bvz8oz$_0 = 'ForwardedHeaderSupport';
    this.description_x5iiox$_0 = 'This feature allows you to handle reverse proxy headers to get information about the original request when it\u2019s behind a proxy.';
    this.documentation_d9es7z$_0 = 'https://ktor.io/features/forward-headers.html';
  }
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'repos', {
    get: function () {
      return this.repos_avmc56$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_qtfn4q$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'id', {
    get: function () {
      return this.id_p6erwi$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'title', {
    get: function () {
      return this.title_bvz8oz$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'description', {
    get: function () {
      return this.description_x5iiox$_0;
    }
  });
  Object.defineProperty(ForwardedHeaderSupportFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_d9es7z$_0;
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_csvuzi$_0 = Repos_getInstance().ktor;
    this.artifacts_u4kg8y$_0 = listOf_0('io.ktor:ktor-freemarker:$ktor_version');
    this.id_fl2zti$_0 = 'freemarker';
    this.title_bsiyfp$_0 = 'Freemarker';
    this.description_lowc3r$_0 = "Serve HTML content using Apache's FreeMarker template engine";
    this.documentation_ccfenr$_0 = 'https://ktor.io/features/templates/freemarker.html';
  }
  Object.defineProperty(FreemarkerFeature.prototype, 'repos', {
    get: function () {
      return this.repos_csvuzi$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_u4kg8y$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'id', {
    get: function () {
      return this.id_fl2zti$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'title', {
    get: function () {
      return this.title_bsiyfp$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'description', {
    get: function () {
      return this.description_lowc3r$_0;
    }
  });
  Object.defineProperty(FreemarkerFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_ccfenr$_0;
    }
  });
  function FreemarkerFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('data class IndexData(val items: List<Int>)');
    return Unit;
  }
  function FreemarkerFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(FreeMarker)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_ekzbmu$_0 = Repos_getInstance().ktor;
    this.artifacts_q4ud8a$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_3oa8eq$_0 = 'hsts';
    this.title_flc86n$_0 = 'HSTS';
    this.description_8z16kr$_0 = 'Enable HTTP Strict Transport Security (HSTS)';
    this.documentation_hhoj3n$_0 = 'https://ktor.io/features/hsts.html';
  }
  Object.defineProperty(HSTSFeature.prototype, 'repos', {
    get: function () {
      return this.repos_ekzbmu$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_q4ud8a$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'id', {
    get: function () {
      return this.id_3oa8eq$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'title', {
    get: function () {
      return this.title_flc86n$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'description', {
    get: function () {
      return this.description_8z16kr$_0;
    }
  });
  Object.defineProperty(HSTSFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_hhoj3n$_0;
    }
  });
  function HSTSFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(HSTS)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_jw6vl4$_0 = Repos_getInstance().jcenter;
    this.artifacts_mmn820$_0 = listOf_0('io.ktor:ktor-html-builder:$ktor_version');
    this.id_6osof4$_0 = 'html-dsl';
    this.title_ivtz1b$_0 = 'HTML DSL';
    this.description_vpobnn$_0 = 'Generate HTML using Kotlin code like a pure-core template engine';
    this.documentation_kyhzcv$_0 = 'https://ktor.io/features/templates/html-dsl.html';
  }
  Object.defineProperty(HtmlDslFeature.prototype, 'repos', {
    get: function () {
      return this.repos_jw6vl4$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_mmn820$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'id', {
    get: function () {
      return this.id_6osof4$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'title', {
    get: function () {
      return this.title_ivtz1b$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'description', {
    get: function () {
      return this.description_vpobnn$_0;
    }
  });
  Object.defineProperty(HtmlDslFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_kyhzcv$_0;
    }
  });
  function HtmlDslFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'get("/html-dsl")';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
    $receiver._indent();
    try {
      var $receiver_1 = 'call.respondHtml';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{ ' + '' : $receiver_1 + ' { ' + '');
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('body'.length === 0 ? '{ ' + '' : 'body' + ' { ' + '');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('h1 { +"HTML" }');
          $receiver.line_61zpoe$('ul'.length === 0 ? '{ ' + '' : 'ul' + ' { ' + '');
          $receiver._indent();
          try {
            var $receiver_2 = 'for (n in 1..10)';
            $receiver.line_61zpoe$($receiver_2.length === 0 ? '{ ' + '' : $receiver_2 + ' { ' + '');
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
    interfaces: [Feature]
  };
  var HtmlDslFeature_instance = null;
  function HtmlDslFeature_getInstance() {
    if (HtmlDslFeature_instance === null) {
      new HtmlDslFeature();
    }
    return HtmlDslFeature_instance;
  }
  function HttpClientFeature() {
    HttpClientFeature_instance = this;
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_widcof$_0 = Repos_getInstance().ktor;
    this.artifacts_7ubutr$_0 = listOf_0('io.ktor:ktor-client-apache:$ktor_version');
    this.id_5df4yx$_0 = 'ktor-client-apache';
    this.title_xiq988$_0 = 'HTTP Client';
    this.description_dbmzxo$_0 = 'Adds support for doing HTTP requests';
    this.documentation_6yu7ti$_0 = 'https://ktor.io/clients/http-client.html';
  }
  Object.defineProperty(HttpClientFeature.prototype, 'repos', {
    get: function () {
      return this.repos_widcof$_0;
    }
  });
  Object.defineProperty(HttpClientFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_7ubutr$_0;
    }
  });
  Object.defineProperty(HttpClientFeature.prototype, 'id', {
    get: function () {
      return this.id_5df4yx$_0;
    }
  });
  Object.defineProperty(HttpClientFeature.prototype, 'title', {
    get: function () {
      return this.title_xiq988$_0;
    }
  });
  Object.defineProperty(HttpClientFeature.prototype, 'description', {
    get: function () {
      return this.description_dbmzxo$_0;
    }
  });
  Object.defineProperty(HttpClientFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_6yu7ti$_0;
    }
  });
  HttpClientFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HttpClientFeature',
    interfaces: [Feature]
  };
  var HttpClientFeature_instance = null;
  function HttpClientFeature_getInstance() {
    if (HttpClientFeature_instance === null) {
      new HttpClientFeature();
    }
    return HttpClientFeature_instance;
  }
  function HttpsRedirectFeature() {
    HttpsRedirectFeature_instance = this;
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_gluhnx$_0 = Repos_getInstance().ktor;
    this.artifacts_npr6b7$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_wawpbf$_0 = 'https-redirect';
    this.title_hm7e7q$_0 = 'HttpsRedirect';
    this.description_a9gxgu$_0 = 'All the affected HTTP calls perform a redirect to its HTTPS counterpart before processing the call';
    this.documentation_zfw7sc$_0 = 'https://ktor.io/features/https-redirect.html';
  }
  Object.defineProperty(HttpsRedirectFeature.prototype, 'repos', {
    get: function () {
      return this.repos_gluhnx$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_npr6b7$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'id', {
    get: function () {
      return this.id_wawpbf$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'title', {
    get: function () {
      return this.title_hm7e7q$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'description', {
    get: function () {
      return this.description_a9gxgu$_0;
    }
  });
  Object.defineProperty(HttpsRedirectFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_zfw7sc$_0;
    }
  });
  function HttpsRedirectFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(HttpsRedirect)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), ContentNegotiationFeature_getInstance(), RoutingFeature_getInstance()]);
    this.repos_m451m9$_0 = Repos_getInstance().ktor;
    this.artifacts_vpbenj$_0 = listOf_0('io.ktor:ktor-gson:$ktor_version');
    this.id_whgybt$_0 = 'ktor-gson';
    this.title_l3s52g$_0 = 'GSON';
    this.description_q40g24$_0 = 'Handles JSON serialization using GSON library';
    this.documentation_5wcawm$_0 = 'https://ktor.io/features/content-negotiation/gson.html';
  }
  Object.defineProperty(JsonGsonFeature.prototype, 'repos', {
    get: function () {
      return this.repos_m451m9$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_vpbenj$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'id', {
    get: function () {
      return this.id_whgybt$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'title', {
    get: function () {
      return this.title_l3s52g$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'description', {
    get: function () {
      return this.description_q40g24$_0;
    }
  });
  Object.defineProperty(JsonGsonFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_5wcawm$_0;
    }
  });
  function JsonGsonFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('gson'.length === 0 ? '{ ' + '' : 'gson' + ' { ' + '');
    $receiver._indent();
    $receiver._unindent();
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function JsonGsonFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'get("/json/gson")';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), ContentNegotiationFeature_getInstance(), RoutingFeature_getInstance()]);
    this.repos_6gchw1$_0 = Repos_getInstance().ktor;
    this.artifacts_tziadr$_0 = listOf_0('io.ktor:ktor-jackson:$ktor_version');
    this.id_f6uih$_0 = 'ktor-jackson';
    this.title_7gpefu$_0 = 'Jackson';
    this.description_10c27q$_0 = 'Handles JSON serialization using Jackson library';
    this.documentation_lvygo$_0 = 'https://ktor.io/features/content-negotiation/jackson.html';
  }
  Object.defineProperty(JsonJacksonFeature.prototype, 'repos', {
    get: function () {
      return this.repos_6gchw1$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_tziadr$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'id', {
    get: function () {
      return this.id_f6uih$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'title', {
    get: function () {
      return this.title_7gpefu$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'description', {
    get: function () {
      return this.description_10c27q$_0;
    }
  });
  Object.defineProperty(JsonJacksonFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_lvygo$_0;
    }
  });
  function JsonJacksonFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('jackson'.length === 0 ? '{ ' + '' : 'jackson' + ' { ' + '');
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
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), StatusPagesFeature_getInstance()]);
    this.repos_krkeos$_0 = Repos_getInstance().ktor;
    this.artifacts_3l6utg$_0 = listOf_0('io.ktor:ktor-locations:$ktor_version');
    this.id_3nq5lg$_0 = 'ktor-locations';
    this.title_jr7i4z$_0 = 'Locations';
    this.description_iieyh5$_0 = 'Allows to define route locations in a typed way';
    this.documentation_e2hub9$_0 = 'https://ktor.io/features/locations.html';
  }
  Object.defineProperty(LocationsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_krkeos$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_3l6utg$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'id', {
    get: function () {
      return this.id_3nq5lg$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'title', {
    get: function () {
      return this.title_jr7i4z$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'description', {
    get: function () {
      return this.description_iieyh5$_0;
    }
  });
  Object.defineProperty(LocationsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_e2hub9$_0;
    }
  });
  LocationsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocationsFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_pfso6v$_0 = Repos_getInstance().ktor;
    this.artifacts_p4lqmv$_0 = listOf_0('io.ktor:ktor-metrics:$ktor_version');
    this.id_h3qtcf$_0 = 'ktor-metrics';
    this.title_offrn2$_0 = 'Metrics';
    this.description_i28fde$_0 = 'Adds supports for monitoring several metrics';
    this.documentation_zzcgg$_0 = 'https://ktor.io/features/metrics.html';
  }
  Object.defineProperty(MetricsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_pfso6v$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_p4lqmv$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'id', {
    get: function () {
      return this.id_h3qtcf$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'title', {
    get: function () {
      return this.title_offrn2$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'description', {
    get: function () {
      return this.description_i28fde$_0;
    }
  });
  Object.defineProperty(MetricsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_zzcgg$_0;
    }
  });
  MetricsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MetricsFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_mhgxh0$_0 = Repos_getInstance().ktor;
    this.artifacts_4a672s$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_ln9vy4$_0 = 'partial-content';
    this.title_nhtu0t$_0 = 'PartialContent';
    this.description_oxbc4n$_0 = 'Handles requests with the Range header. ' + 'Generating Accept-Ranges and the Content-Range headers and slicing the served content when required.';
    this.documentation_96tbtn$_0 = 'https://ktor.io/features/partial-content.html';
  }
  Object.defineProperty(PartialContentFeature.prototype, 'repos', {
    get: function () {
      return this.repos_mhgxh0$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_4a672s$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'id', {
    get: function () {
      return this.id_ln9vy4$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'title', {
    get: function () {
      return this.title_nhtu0t$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'description', {
    get: function () {
      return this.description_oxbc4n$_0;
    }
  });
  Object.defineProperty(PartialContentFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_96tbtn$_0;
    }
  });
  function PartialContentFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(PartialContent)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
  };
  var PartialContentFeature_instance = null;
  function PartialContentFeature_getInstance() {
    if (PartialContentFeature_instance === null) {
      new PartialContentFeature();
    }
    return PartialContentFeature_instance;
  }
  function RawSocketsFeature() {
    RawSocketsFeature_instance = this;
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_6u018$_0 = Repos_getInstance().ktor;
    this.artifacts_lv9ej0$_0 = listOf_0('io.ktor:ktor-network:$ktor_version');
    this.id_k9lq70$_0 = 'ktor-network';
    this.title_tiwil$_0 = 'Raw Sockets';
    this.description_b0vn7r$_0 = 'Adds Raw Socket support for listening and connecting to tcp and udp sockets';
    this.documentation_e8j2ez$_0 = 'https://ktor.io/servers/raw-sockets.html';
  }
  Object.defineProperty(RawSocketsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_6u018$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_lv9ej0$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'id', {
    get: function () {
      return this.id_k9lq70$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'title', {
    get: function () {
      return this.title_tiwil$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'description', {
    get: function () {
      return this.description_b0vn7r$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_e8j2ez$_0;
    }
  });
  RawSocketsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RawSocketsFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_9ufirt$_0 = Repos_getInstance().ktor;
    this.artifacts_bme33d$_0 = listOf_0('io.ktor:ktor-network-tls:$ktor_version');
    this.id_lfbjkf$_0 = 'ktor-network-tls';
    this.title_ausfbm$_0 = 'Raw Secure SSL/TLS Sockets';
    this.description_3sv442$_0 = 'Adds Raw Socket support for listening and connecting to tcp and udp sockets with secure sockets';
    this.documentation_5ucdjk$_0 = 'https://ktor.io/servers/raw-sockets.html#secure';
  }
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_9ufirt$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_bme33d$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'id', {
    get: function () {
      return this.id_lfbjkf$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'title', {
    get: function () {
      return this.title_ausfbm$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'description', {
    get: function () {
      return this.description_3sv442$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_5ucdjk$_0;
    }
  });
  RawSocketsTlsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RawSocketsTlsFeature',
    interfaces: [Feature]
  };
  var RawSocketsTlsFeature_instance = null;
  function RawSocketsTlsFeature_getInstance() {
    if (RawSocketsTlsFeature_instance === null) {
      new RawSocketsTlsFeature();
    }
    return RawSocketsTlsFeature_instance;
  }
  function RoutingFeature() {
    RoutingFeature_instance = this;
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_hd5igk$_0 = Repos_getInstance().ktor;
    this.artifacts_jiqbx0$_0 = listOf_0('io.ktor:ktor-server-core:$ktor_version');
    this.id_l5zff8$_0 = 'routing';
    this.title_gcslwr$_0 = 'Routing';
    this.description_rjcp5b$_0 = 'Allows to define structured routes and associated handlers.';
    this.documentation_f0l9u5$_0 = 'https://ktor.io/features/routing.html';
    this.BLOCK = this.newSlot_pdl1vj$('BLOCK');
  }
  Object.defineProperty(RoutingFeature.prototype, 'repos', {
    get: function () {
      return this.repos_hd5igk$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_jiqbx0$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'id', {
    get: function () {
      return this.id_l5zff8$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'title', {
    get: function () {
      return this.title_gcslwr$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'description', {
    get: function () {
      return this.description_rjcp5b$_0;
    }
  });
  Object.defineProperty(RoutingFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_f0l9u5$_0;
    }
  });
  function RoutingFeature$renderFeature$lambda(this$RoutingFeature, this$renderFeature) {
    return function ($receiver) {
      $receiver.line_61zpoe$('routing'.length === 0 ? '{ ' + '' : 'routing' + ' { ' + '');
      $receiver._indent();
      try {
        var this$RoutingFeature_0 = this$RoutingFeature;
        var this$renderFeature_0 = this$renderFeature;
        var $receiver_0 = 'get("/")';
        $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('call.respondText("HELLO WORLD!", contentType = ContentType.Text.Plain)');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        this$renderFeature_0.block_rsgfsn$($receiver, this$RoutingFeature_0.BLOCK);
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_630btl$_0 = Repos_getInstance().ktor;
    this.artifacts_vzw0ft$_0 = listOf_0('io.ktor:ktor-sessions:$ktor_version');
    this.id_g5mcan$_0 = 'ktor-sessions';
    this.title_73d8de$_0 = 'Sessions';
    this.description_s0f43m$_0 = 'Adds supports for sessions: with the payload in the client or the server';
    this.documentation_qlpy80$_0 = 'https://ktor.io/features/sessions.html';
  }
  Object.defineProperty(SessionsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_630btl$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_vzw0ft$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'id', {
    get: function () {
      return this.id_g5mcan$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'title', {
    get: function () {
      return this.title_73d8de$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'description', {
    get: function () {
      return this.description_s0f43m$_0;
    }
  });
  Object.defineProperty(SessionsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_qlpy80$_0;
    }
  });
  SessionsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SessionsFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), ApplicationConf_getInstance()]);
    this.repos_ru14ht$_0 = Repos_getInstance().ktor;
    this.artifacts_jxegkf$_0 = listOf_0('io.ktor:ktor-server-host-common:$ktor_version');
    this.id_hv121z$_0 = 'shutdown-url';
    this.title_qto7y0$_0 = 'Shutdown URL';
    this.description_mniexw$_0 = 'This feature enables a URL that when accessed, shutdowns the server.';
    this.documentation_bridsq$_0 = 'https://ktor.io/features/shutdown-url.html';
  }
  Object.defineProperty(ShutdownUrlFeature.prototype, 'repos', {
    get: function () {
      return this.repos_ru14ht$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_jxegkf$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'id', {
    get: function () {
      return this.id_hv121z$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'title', {
    get: function () {
      return this.title_qto7y0$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'description', {
    get: function () {
      return this.description_mniexw$_0;
    }
  });
  Object.defineProperty(ShutdownUrlFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_bridsq$_0;
    }
  });
  function ShutdownUrlFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('shutdown.url = "/ktor/application/shutdown"');
    return Unit;
  }
  function ShutdownUrlFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(ShutDownUrl.ApplicationCallFeature)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_r7te0h$_0 = Repos_getInstance().ktor;
    this.artifacts_983xwv$_0 = listOf_0('io.ktor:ktor-server-host-common:$ktor_version');
    this.id_cquh7d$_0 = 'static-content';
    this.title_s86aka$_0 = 'Static Content';
    this.description_7aci0a$_0 = 'Serves static files from defined locations.';
    this.documentation_h35puw$_0 = 'https://ktor.io/features/static-content.html';
  }
  Object.defineProperty(StaticContentFeature.prototype, 'repos', {
    get: function () {
      return this.repos_r7te0h$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_983xwv$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'id', {
    get: function () {
      return this.id_cquh7d$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'title', {
    get: function () {
      return this.title_s86aka$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'description', {
    get: function () {
      return this.description_7aci0a$_0;
    }
  });
  Object.defineProperty(StaticContentFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_h35puw$_0;
    }
  });
  function StaticContentFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('// Static feature. Try to access `/static/ktor_logo.svg`');
    var $receiver_0 = 'static("static")';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
    $receiver.fileBinary_7n0jo0$('resources/static/ktor_logo.svg', void 0, void 0, StaticContentFeature$renderFeature$lambda_0(info));
  };
  StaticContentFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StaticContentFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_va4em0$_0 = Repos_getInstance().ktor;
    this.artifacts_tsgcm0$_0 = listOf_0('io.ktor:ktor-server-host-common:$ktor_version');
    this.id_rrlp1c$_0 = 'status-pages';
    this.title_wahb5t$_0 = 'Status Pages';
    this.description_hk4jhf$_0 = 'Allow to respond to thrown exceptions.';
    this.documentation_eu1hsx$_0 = 'https://ktor.io/features/status-pages.html';
  }
  Object.defineProperty(StatusPagesFeature.prototype, 'repos', {
    get: function () {
      return this.repos_va4em0$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_tsgcm0$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'id', {
    get: function () {
      return this.id_rrlp1c$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'title', {
    get: function () {
      return this.title_wahb5t$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'description', {
    get: function () {
      return this.description_hk4jhf$_0;
    }
  });
  Object.defineProperty(StatusPagesFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_eu1hsx$_0;
    }
  });
  function StatusPagesFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('class AuthenticationException : RuntimeException()');
    $receiver.line_61zpoe$('class AuthorizationException : RuntimeException()');
    return Unit;
  }
  function StatusPagesFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(StatusPages)';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
    $receiver._indent();
    try {
      var $receiver_1 = 'exception<AuthenticationException>';
      var suffix = ' cause ->';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{ ' + suffix : $receiver_1 + ' { ' + suffix);
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
      $receiver.line_61zpoe$($receiver_2.length === 0 ? '{ ' + suffix_0 : $receiver_2 + ' { ' + suffix_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('call.respond(HttpStatusCode.Forbidden)');
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
  StatusPagesFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.features.*');
    addApplicationClasses($receiver, StatusPagesFeature$renderFeature$lambda);
    addRoute($receiver, StatusPagesFeature$renderFeature$lambda_0);
  };
  StatusPagesFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StatusPagesFeature',
    interfaces: [Feature]
  };
  var StatusPagesFeature_instance = null;
  function StatusPagesFeature_getInstance() {
    if (StatusPagesFeature_instance === null) {
      new StatusPagesFeature();
    }
    return StatusPagesFeature_instance;
  }
  function VelocityFeature() {
    VelocityFeature_instance = this;
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_pmsk9$_0 = Repos_getInstance().ktor;
    this.artifacts_fuibnd$_0 = listOf_0('io.ktor:ktor-velocity:$ktor_version');
    this.id_jr50fz$_0 = 'velocity';
    this.title_1pzp42$_0 = 'Velocity';
    this.description_84u56m$_0 = "Serve HTML content using Apache's Velocity template engine";
    this.documentation_stry68$_0 = 'https://ktor.io/features/templates/velocity.html';
  }
  Object.defineProperty(VelocityFeature.prototype, 'repos', {
    get: function () {
      return this.repos_pmsk9$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_fuibnd$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'id', {
    get: function () {
      return this.id_jr50fz$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'title', {
    get: function () {
      return this.title_1pzp42$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'description', {
    get: function () {
      return this.description_84u56m$_0;
    }
  });
  Object.defineProperty(VelocityFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_stry68$_0;
    }
  });
  VelocityFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VelocityFeature',
    interfaces: [Feature]
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
    Feature.call(this, [ApplicationKt_getInstance()]);
    this.repos_r46ofs$_0 = Repos_getInstance().ktor;
    this.artifacts_nxkzmg$_0 = listOf_0('io.ktor:ktor-websockets:$ktor_version');
    this.id_jwih4g$_0 = 'ktor-websockets';
    this.title_q3trvz$_0 = 'WebSockets';
    this.description_6508ur$_0 = 'Adds WebSockets support for bidirectional communication with the client';
    this.documentation_l09t2n$_0 = 'https://ktor.io/features/websockets.html';
  }
  Object.defineProperty(WebsocketsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_r46ofs$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_nxkzmg$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'id', {
    get: function () {
      return this.id_jwih4g$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'title', {
    get: function () {
      return this.title_q3trvz$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'description', {
    get: function () {
      return this.description_6508ur$_0;
    }
  });
  Object.defineProperty(WebsocketsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_l09t2n$_0;
    }
  });
  WebsocketsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebsocketsFeature',
    interfaces: [Feature]
  };
  var WebsocketsFeature_instance = null;
  function WebsocketsFeature_getInstance() {
    if (WebsocketsFeature_instance === null) {
      new WebsocketsFeature();
    }
    return WebsocketsFeature_instance;
  }
  var ALL_FEATURES;
  function ApplicationConf() {
    ApplicationConf_instance = this;
    Block.call(this, []);
    this.KTOR = this.newSlot_pdl1vj$('KTOR');
    this.DEPLOYMENT = this.newSlot_pdl1vj$('DEPLOYMENT');
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
            this.local$$receiver.line_61zpoe$('ktor'.length === 0 ? '{ ' + '' : 'ktor' + ' { ' + '');
            this.local$$receiver._indent();
            try {
              var this$ApplicationConf = this.local$this$ApplicationConf;
              var this$render = this.local$this$render;
              var closure$info = this.local$closure$info;
              var $receiver = 'deployment';
              this.local$$receiver.line_61zpoe$($receiver.length === 0 ? '{ ' + '' : $receiver + ' { ' + '');
              this.local$$receiver._indent();
              try {
                this.local$$receiver.line_61zpoe$('port = 8080');
                this.local$$receiver.line_61zpoe$('port = ${?PORT}');
                this$render.block_rsgfsn$(this.local$$receiver, this$ApplicationConf.DEPLOYMENT);
              }
              finally {
                this.local$$receiver._unindent();
              }
              this.local$$receiver.line_61zpoe$('}' + '');
              var $receiver_0 = 'application';
              this.local$$receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
              this.local$$receiver._indent();
              try {
                this.local$$receiver.line_61zpoe$('modules = [ ' + closure$info.artifactGroup + '.ApplicationKt.main ]');
              }
              finally {
                this.local$$receiver._unindent();
              }
              this.local$$receiver.line_61zpoe$('}' + '');
              this$render.block_rsgfsn$(this.local$$receiver, this$ApplicationConf.KTOR);
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            return this.local$$receiver;
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
  function ApplicationKt() {
    ApplicationKt_instance = this;
    Block.call(this, [BuildFiles_getInstance(), ApplicationConf_getInstance()]);
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
      if (closure$info.ktorVer.compareTo_11rb$(Versions_getInstance().V092) >= 0) {
        $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = ' + closure$info.developmentEngineFQ + '.main(args)');
      }
       else {
        $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = ' + closure$info.developmentPackage + '.main(args)');
      }
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda_1(this$ApplicationKt, this$render) {
    return function ($receiver) {
      this$render.block_rsgfsn$($receiver, this$ApplicationKt.APPLICATION_CLASSES);
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda_2(this$ApplicationKt, this$render) {
    return function ($receiver) {
      var $receiver_0 = 'fun Application.main()';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
      $receiver._indent();
      try {
        var this$ApplicationKt_0 = this$ApplicationKt;
        var this$render_0 = this$render;
        this$render_0.block_rsgfsn$($receiver, this$ApplicationKt_0.MODULE_INSTALL);
        EMPTY_LINE_ONCE($receiver);
        this$render_0.block_rsgfsn$($receiver, this$ApplicationKt_0.MODULE_POST);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      return Unit;
    };
  }
  function ApplicationKt$render$lambda$lambda_3(this$ApplicationKt, this$render) {
    return function ($receiver) {
      this$render.block_rsgfsn$($receiver, this$ApplicationKt.EXTENSIONS);
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
      default:throw IllegalStateException_init(('Unsupported build type ' + info.projectType).toString());
    }
    addMavenRepository_0($receiver, Repos_getInstance().jcenter);
    addMavenRepository_0($receiver, Repos_getInstance().ktor);
    addCompileDependency($receiver, new MvnArtifact('org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version'));
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
            this.local$$receiver.line_61zpoe$($receiver.length === 0 ? '{ ' + '' : $receiver + ' { ' + '');
            this.local$$receiver._indent();
            try {
              var closure$info = this.local$closure$info;
              this.local$$receiver.line_61zpoe$("ext.kotlin_version = '1.2.41'");
              this.local$$receiver.line_61zpoe$("ext.ktor_version = '" + closure$info.ktorVersion + "'");
              this.local$$receiver.line_61zpoe$("ext.logback_version = '1.2.1'");
              this.local$$receiver.line_61zpoe$('');
              var $receiver_0 = 'repositories';
              this.local$$receiver.line_61zpoe$($receiver_0.length === 0 ? '{ ' + '' : $receiver_0 + ' { ' + '');
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
              this.local$$receiver.line_61zpoe$($receiver_1.length === 0 ? '{ ' + '' : $receiver_1 + ' { ' + '');
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
            this.local$$receiver.line_61zpoe$($receiver_2.length === 0 ? '{ ' + '' : $receiver_2 + ' { ' + '');
            this.local$$receiver._indent();
            try {
              this.local$$receiver.line_61zpoe$("main.kotlin.srcDirs = ['src']");
              this.local$$receiver.line_61zpoe$("main.resources.srcDirs = ['resources']");
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            this.local$$receiver.line_61zpoe$('');
            var $receiver_3 = 'repositories';
            this.local$$receiver.line_61zpoe$($receiver_3.length === 0 ? '{ ' + '' : $receiver_3 + ' { ' + '');
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
            this.local$$receiver.line_61zpoe$($receiver_4.length === 0 ? '{ ' + '' : $receiver_4 + ' { ' + '');
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
      $receiver.fileBinary_7n0jo0$('gradlew', void 0, toInt('755', 8), BuildFilesGradle$render$lambda_1(info));
      $receiver.fileBinary_7n0jo0$('gradlew.bat', void 0, void 0, BuildFilesGradle$render$lambda_2(info));
      $receiver.fileBinary_7n0jo0$('gradle/wrapper/gradle-wrapper.jar', void 0, void 0, BuildFilesGradle$render$lambda_3(info));
      $receiver.fileBinary_7n0jo0$('gradle/wrapper/gradle-wrapper.properties', void 0, void 0, BuildFilesGradle$render$lambda_4(info));
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
          this$_0.line_61zpoe$('<kotlin_version>1.2.41<\/kotlin_version>');
          this$_0.line_61zpoe$('<ktor_version>' + closure$info_0.ktorVersion + '<\/ktor_version>');
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
      $receiver.fileBinary_7n0jo0$('mvnw', void 0, toInt('755', 8), BuildFilesMaven$render$lambda_0(info));
      $receiver.fileBinary_7n0jo0$('mvnw.cmd', void 0, void 0, BuildFilesMaven$render$lambda_1(info));
      tmp$ = listOf(['maven-wrapper.jar', 'maven-wrapper.properties', 'MavenWrapperDownloader.java']).iterator();
      while (tmp$.hasNext()) {
        var file = tmp$.next();
        $receiver.fileBinary_7n0jo0$('.mvn/wrapper/' + file, void 0, void 0, BuildFilesMaven$render$lambda_2(info, file));
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
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
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
  SlotInstance.prototype.render_oryfgh$ = function (indenter) {
    var tmp$;
    tmp$ = this.blocks.iterator();
    while (tmp$.hasNext()) {
      var block = tmp$.next();
      block(indenter);
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
  function FileResult(name, data, type, mode) {
    this.name = name;
    this.data = data;
    this.type = type;
    this.mode = mode;
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
  BlockBuilder.prototype.append_qu2wte$ = function (slot, once, callback) {
    if (once === void 0)
      once = false;
    if (!ensureNotNull(this.currentBlock).blockDeps.contains_11rb$(slot.block)) {
      throw IllegalStateException_init(('To use ' + slot + ', must directly depend on block ' + slot.block).toString());
    }
    var instance = this.getSlotInstance_aiiv2x$(slot);
    instance.blocks.add_11rb$(callback);
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
  function BlockBuilder$fileText$lambda(closure$callback_0, closure$charset_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BlockBuilder$fileText$lambda(closure$callback_0, closure$charset_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BlockBuilder$fileText$lambda(closure$callback_0, closure$charset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
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
            return toByteArray(this.local$indenter.toString(), this.local$closure$charset);
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
    this.fileBinary_7n0jo0$(name, 'text', mode, BlockBuilder$fileText$lambda(callback, charset));
  };
  function BlockBuilder$fileBinary$lambda(closure$name_0, closure$callback_0, closure$type_0, closure$mode_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BlockBuilder$fileBinary$lambda(closure$name_0, closure$callback_0, closure$type_0, closure$mode_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BlockBuilder$fileBinary$lambda(closure$name_0, closure$callback_0, closure$type_0, closure$mode_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$name = closure$name_0;
    this.local$closure$callback = closure$callback_0;
    this.local$closure$type = closure$type_0;
    this.local$closure$mode = closure$mode_0;
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
            return new FileResult(this.local$closure$name, tmp$, this.local$closure$type, this.local$closure$mode);
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
  BlockBuilder.prototype.fileBinary_7n0jo0$ = function (name, type, mode, callback) {
    if (type === void 0)
      type = 'binary';
    if (mode === void 0)
      mode = toInt('644', 8);
    this.files.put_xwzc9p$(name, BlockBuilder$fileBinary$lambda(name, callback, type, mode));
  };
  function BlockBuilder$block$lambda(closure$instance) {
    return function ($receiver) {
      closure$instance.render_oryfgh$($receiver);
      return Unit;
    };
  }
  BlockBuilder.prototype.block_rsgfsn$ = function ($receiver, slot) {
    var instance = this.getSlotInstance_aiiv2x$(slot);
    $receiver.linedeferred_yot30u$(BlockBuilder$block$lambda(instance));
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
  var Math_0 = Math;
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
  function toString_0($receiver, charset) {
    var $receiver_0 = new StringBuilder();
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
  function Indenter(actions) {
    Indenter$Companion_getInstance();
    if (actions === void 0) {
      actions = ArrayList_init();
    }
    this.actions_8be2vx$ = actions;
    this.indentEmptyLines = true;
    this.out = '';
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
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
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
      var sb = StringBuilder_init(length);
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
    this.line_61zpoe$(str.length === 0 ? '{ ' + after : str + ' { ' + after);
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
  Indenter.prototype._indent = function () {
    this.actions_8be2vx$.add_11rb$(Indenter$Action$Indent_getInstance());
  };
  Indenter.prototype._unindent = function () {
    this.actions_8be2vx$.add_11rb$(Indenter$Action$Unindent_getInstance());
  };
  function Indenter$IndenterEvaluator(markHandler, indentEmptyLines, doIndent) {
    this.markHandler = markHandler;
    this.indentEmptyLines = indentEmptyLines;
    this.doIndent = doIndent;
    this.out = new StringBuilder();
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
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
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
    this.line_61zpoe$($receiver.length === 0 ? '{ ' + suffix : $receiver + ' { ' + suffix);
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
      mode = ZipBuilder$Companion_getInstance().DEFAULT_FILE | ZipBuilder$Companion_getInstance().S_IFDIR;
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
  package$start.jq_lt8gi4$ = jq_0;
  package$start.jqId_61zpoe$ = jqId;
  package$start.on_nsccip$ = on;
  package$start.each_4tgbmb$ = each;
  package$start.change_tue5ot$ = change;
  package$start.keyup_tue5ot$ = keyup;
  package$start.generateBrowserFile_cyqrs4$ = generateBrowserFile;
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
  $$importsForInline$$.output = _;
  package$start.main_kand9s$ = main;
  Object.defineProperty(package$start, 'insideIframe', {
    get: get_insideIframe
  });
  package$start.get_checked_pzor9e$ = get_checked;
  package$start.set_checked_4n8m03$ = set_checked;
  Object.defineProperty(package$start, 'includeWrapper', {
    get: get_includeWrapper,
    set: set_includeWrapper
  });
  package$start.updateHash = updateHash;
  Object.defineProperty(package$start, 'hashParams', {
    get: get_hashParams
  });
  package$start.formUrlDecode_pdl1vz$ = formUrlDecode;
  package$start.formUrlEncode_ye33rp$ = formUrlEncode;
  package$start.formUrlEncode_jgmxsd$ = formUrlEncode_0;
  package$start.addDependencies = addDependencies;
  package$start.build_6taknv$ = build;
  package$start.registerBuildButton = registerBuildButton;
  package$start.handleFiltering = handleFiltering;
  package$start.removeLoading = removeLoading;
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
  package$start.FileFetcher = FileFetcher;
  package$start.add_ykoeqs$ = add;
  package$start.Feature = Feature;
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
  Object.defineProperty(package$start, 'Versions', {
    get: Versions_getInstance
  });
  var package$features = package$start.features || (package$start.features = {});
  Object.defineProperty(package$features, 'AuthBasicFeature', {
    get: AuthBasicFeature_getInstance
  });
  Object.defineProperty(package$features, 'AuthDigestFeature', {
    get: AuthDigestFeature_getInstance
  });
  Object.defineProperty(package$features, 'AuthFeature', {
    get: AuthFeature_getInstance
  });
  package$features.addAuthProvider_xi0fd9$ = addAuthProvider;
  Object.defineProperty(package$features, 'AuthJwtFeature', {
    get: AuthJwtFeature_getInstance
  });
  Object.defineProperty(package$features, 'AuthLdapFeature', {
    get: AuthLdapFeature_getInstance
  });
  Object.defineProperty(package$features, 'AuthOauthFeature', {
    get: AuthOauthFeature_getInstance
  });
  Object.defineProperty(package$features, 'AutoHeadResponseFeature', {
    get: AutoHeadResponseFeature_getInstance
  });
  Object.defineProperty(package$features, 'CORSFeature', {
    get: CORSFeature_getInstance
  });
  Object.defineProperty(package$features, 'CachingHeadersFeature', {
    get: CachingHeadersFeature_getInstance
  });
  Object.defineProperty(package$features, 'CallLoggingFeature', {
    get: CallLoggingFeature_getInstance
  });
  Object.defineProperty(package$features, 'CompressionFeature', {
    get: CompressionFeature_getInstance
  });
  Object.defineProperty(package$features, 'ConditionalHeadersFeature', {
    get: ConditionalHeadersFeature_getInstance
  });
  Object.defineProperty(package$features, 'ContentNegotiationFeature', {
    get: ContentNegotiationFeature_getInstance
  });
  Object.defineProperty(package$features, 'CssDslFeature', {
    get: CssDslFeature_getInstance
  });
  Object.defineProperty(package$features, 'DataConversionFeature', {
    get: DataConversionFeature_getInstance
  });
  Object.defineProperty(package$features, 'DefaultHeadersFeature', {
    get: DefaultHeadersFeature_getInstance
  });
  Object.defineProperty(package$features, 'ForwardedHeaderSupportFeature', {
    get: ForwardedHeaderSupportFeature_getInstance
  });
  Object.defineProperty(package$features, 'FreemarkerFeature', {
    get: FreemarkerFeature_getInstance
  });
  Object.defineProperty(package$features, 'HSTSFeature', {
    get: HSTSFeature_getInstance
  });
  Object.defineProperty(package$features, 'HtmlDslFeature', {
    get: HtmlDslFeature_getInstance
  });
  Object.defineProperty(package$features, 'HttpClientFeature', {
    get: HttpClientFeature_getInstance
  });
  Object.defineProperty(package$features, 'HttpsRedirectFeature', {
    get: HttpsRedirectFeature_getInstance
  });
  Object.defineProperty(package$features, 'JsonGsonFeature', {
    get: JsonGsonFeature_getInstance
  });
  Object.defineProperty(package$features, 'JsonJacksonFeature', {
    get: JsonJacksonFeature_getInstance
  });
  Object.defineProperty(package$features, 'LocationsFeature', {
    get: LocationsFeature_getInstance
  });
  Object.defineProperty(package$features, 'MetricsFeature', {
    get: MetricsFeature_getInstance
  });
  Object.defineProperty(package$features, 'PartialContentFeature', {
    get: PartialContentFeature_getInstance
  });
  Object.defineProperty(package$features, 'RawSocketsFeature', {
    get: RawSocketsFeature_getInstance
  });
  Object.defineProperty(package$features, 'RawSocketsTlsFeature', {
    get: RawSocketsTlsFeature_getInstance
  });
  Object.defineProperty(package$features, 'RoutingFeature', {
    get: RoutingFeature_getInstance
  });
  package$features.addRoute_xi0fd9$ = addRoute;
  Object.defineProperty(package$features, 'SessionsFeature', {
    get: SessionsFeature_getInstance
  });
  Object.defineProperty(package$features, 'ShutdownUrlFeature', {
    get: ShutdownUrlFeature_getInstance
  });
  Object.defineProperty(package$features, 'StaticContentFeature', {
    get: StaticContentFeature_getInstance
  });
  Object.defineProperty(package$features, 'StatusPagesFeature', {
    get: StatusPagesFeature_getInstance
  });
  Object.defineProperty(package$features, 'VelocityFeature', {
    get: VelocityFeature_getInstance
  });
  Object.defineProperty(package$features, 'WebsocketsFeature', {
    get: WebsocketsFeature_getInstance
  });
  Object.defineProperty(package$features, 'ALL_FEATURES', {
    get: function () {
      return ALL_FEATURES;
    }
  });
  var package$project = package$start.project || (package$start.project = {});
  Object.defineProperty(package$project, 'ApplicationConf', {
    get: ApplicationConf_getInstance
  });
  package$project.addHoconDeployment_xi0fd9$ = addHoconDeployment;
  package$project.addHoconKtor_xi0fd9$ = addHoconKtor;
  Object.defineProperty(package$project, 'ApplicationKt', {
    get: ApplicationKt_getInstance
  });
  package$project.addImport_zc4wmb$ = addImport;
  package$project.addFeatureInstall_xi0fd9$ = addFeatureInstall;
  package$project.addExtensionMethods_xi0fd9$ = addExtensionMethods;
  package$project.addApplicationClasses_xi0fd9$ = addApplicationClasses;
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
  package$util.generate_maf521$ = generate;
  package$util.generate_xte3qv$ = generate_0;
  package$util.BlockSlot = BlockSlot;
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
  package$util.toString_ecs3bj$ = toString_0;
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
  package$util.get_SEPARATOR_d9lakw$ = get_SEPARATOR;
  package$util.EMPTY_LINE_ONCE_d9lakw$ = EMPTY_LINE_ONCE;
  package$util.SEPARATOR_s3zzuq$ = SEPARATOR;
  package$util.XmlIndenter = XmlIndenter;
  package$util.xml_ldohgd$ = xml;
  package$util.MvnArtifact = MvnArtifact;
  package$util.SemVer = SemVer;
  Object.defineProperty(ZipBuilder, 'Companion', {
    get: ZipBuilder$Companion_getInstance
  });
  ZipBuilder.FileInfo = ZipBuilder$FileInfo;
  package$util.ZipBuilder = ZipBuilder;
  package$util.buildZip_oi1qpb$ = buildZip;
  EmptyContinuation = new EmptyContinuation$ObjectLiteral();
  defaultArtifactGroup = 'com.example';
  defaultArtifactName = 'ktor-demo';
  defaultArtifactVersion = '0.0.1-SNAPSHOT';
  defaultKtorVersion = Versions_getInstance().LAST.version;
  defaultKtorEngine = 'netty';
  artifactGroupId = 'artifact-group';
  artifactNameId = 'artifact-name';
  artifactVersionId = 'artifact-version';
  insideIframe = lazy(insideIframe$lambda);
  hashParams = lazy(hashParams$lambda);
  KOTLIN_VERSION = '1.2.41';
  ALL_FEATURES = listOf([HtmlDslFeature_getInstance(), CssDslFeature_getInstance(), FreemarkerFeature_getInstance(), VelocityFeature_getInstance(), StaticContentFeature_getInstance(), AuthFeature_getInstance(), AuthBasicFeature_getInstance(), AuthDigestFeature_getInstance(), AuthJwtFeature_getInstance(), AuthLdapFeature_getInstance(), AuthOauthFeature_getInstance(), JsonGsonFeature_getInstance(), JsonJacksonFeature_getInstance(), LocationsFeature_getInstance(), MetricsFeature_getInstance(), SessionsFeature_getInstance(), CompressionFeature_getInstance(), CachingHeadersFeature_getInstance(), CallLoggingFeature_getInstance(), ConditionalHeadersFeature_getInstance(), CORSFeature_getInstance(), AutoHeadResponseFeature_getInstance(), DataConversionFeature_getInstance(), DefaultHeadersFeature_getInstance(), ForwardedHeaderSupportFeature_getInstance(), HSTSFeature_getInstance(), StatusPagesFeature_getInstance(), RoutingFeature_getInstance(), ContentNegotiationFeature_getInstance(), HttpsRedirectFeature_getInstance(), ShutdownUrlFeature_getInstance(), WebsocketsFeature_getInstance(), HttpClientFeature_getInstance(), RawSocketsFeature_getInstance(), PartialContentFeature_getInstance(), RawSocketsTlsFeature_getInstance()]);
  applicationKtImports = new Extra$PropertyThis(void 0, applicationKtImports$lambda);
  reposToInclude = new Extra$PropertyThis(void 0, reposToInclude$lambda);
  compileDependencies = new Extra$PropertyThis(void 0, compileDependencies$lambda);
  testDependencies = new Extra$PropertyThis(void 0, testDependencies$lambda);
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}));
