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
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var Throwable = Error;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
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
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var equals = Kotlin.equals;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var numberToByte = Kotlin.numberToByte;
  var toChar = Kotlin.toChar;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Comparable = Kotlin.kotlin.Comparable;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  AuthFeature.prototype = Object.create(Feature.prototype);
  AuthFeature.prototype.constructor = AuthFeature;
  AuthJwtFeature.prototype = Object.create(Feature.prototype);
  AuthJwtFeature.prototype.constructor = AuthJwtFeature;
  AuthLdapFeature.prototype = Object.create(Feature.prototype);
  AuthLdapFeature.prototype.constructor = AuthLdapFeature;
  CssDslFeature.prototype = Object.create(Feature.prototype);
  CssDslFeature.prototype.constructor = CssDslFeature;
  FreemarkerFeature.prototype = Object.create(Feature.prototype);
  FreemarkerFeature.prototype.constructor = FreemarkerFeature;
  HtmlDslFeature.prototype = Object.create(Feature.prototype);
  HtmlDslFeature.prototype.constructor = HtmlDslFeature;
  HttpClientFeature.prototype = Object.create(Feature.prototype);
  HttpClientFeature.prototype.constructor = HttpClientFeature;
  JsonGsonFeature.prototype = Object.create(Feature.prototype);
  JsonGsonFeature.prototype.constructor = JsonGsonFeature;
  JsonJacksonFeature.prototype = Object.create(Feature.prototype);
  JsonJacksonFeature.prototype.constructor = JsonJacksonFeature;
  LocationsFeature.prototype = Object.create(Feature.prototype);
  LocationsFeature.prototype.constructor = LocationsFeature;
  MetricsFeature.prototype = Object.create(Feature.prototype);
  MetricsFeature.prototype.constructor = MetricsFeature;
  RawSocketsFeature.prototype = Object.create(Feature.prototype);
  RawSocketsFeature.prototype.constructor = RawSocketsFeature;
  RawSocketsTlsFeature.prototype = Object.create(Feature.prototype);
  RawSocketsTlsFeature.prototype.constructor = RawSocketsTlsFeature;
  SessionsFeature.prototype = Object.create(Feature.prototype);
  SessionsFeature.prototype.constructor = SessionsFeature;
  VelocityFeature.prototype = Object.create(Feature.prototype);
  VelocityFeature.prototype.constructor = VelocityFeature;
  WebsocketsFeature.prototype = Object.create(Feature.prototype);
  WebsocketsFeature.prototype.constructor = WebsocketsFeature;
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
  function main$lambda_6() {
    updateHash();
    return Unit;
  }
  var Map = Kotlin.kotlin.collections.Map;
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var str = '#include_wrapper';
    jQuery(str).change(main$lambda);
    var str_0 = '#ktor-engine';
    jQuery(str_0).change(main$lambda_0);
    var str_1 = '#ktor-version';
    jQuery(str_1).change(main$lambda_1);
    var str_2 = '#project-type';
    jQuery(str_2).change(main$lambda_2);
    var str_3 = '#artifact-group';
    jQuery(str_3).change(main$lambda_3);
    var str_4 = '#artifact-name';
    jQuery(str_4).change(main$lambda_4);
    var str_5 = '#artifact-group';
    jQuery(str_5).keyup(main$lambda_5);
    var str_6 = '#artifact-name';
    jQuery(str_6).keyup(main$lambda_6);
    var str_7 = '#include_wrapper';
    var tmp$_9 = jQuery(str_7);
    var $receiver = get_hashParams();
    var key = 'no_wrapper';
    var tmp$_10;
    tmp$_9.prop('checked', (Kotlin.isType(tmp$_10 = $receiver, Map) ? tmp$_10 : throwCCE()).containsKey_11rb$(key) ? '' : 'checked');
    var str_8 = '#artifact-group';
    jQuery(str_8).val((tmp$_0 = (tmp$ = get_hashParams().get_11rb$('artifact-group')) != null ? firstOrNull(tmp$) : null) != null ? tmp$_0 : 'com.example');
    var str_9 = '#artifact-name';
    jQuery(str_9).val((tmp$_2 = (tmp$_1 = get_hashParams().get_11rb$('artifact-name')) != null ? firstOrNull(tmp$_1) : null) != null ? tmp$_2 : 'ktor-demo');
    var str_10 = '#ktor-version';
    jQuery(str_10).val((tmp$_4 = (tmp$_3 = get_hashParams().get_11rb$('ktor-version')) != null ? firstOrNull(tmp$_3) : null) != null ? tmp$_4 : defaultKtorVersion);
    var str_11 = '#ktor-engine';
    jQuery(str_11).val((tmp$_6 = (tmp$_5 = get_hashParams().get_11rb$('ktor-engine')) != null ? firstOrNull(tmp$_5) : null) != null ? tmp$_6 : defaultKtorEngine);
    var str_12 = '#ktor-version';
    jQuery(str_12).val((tmp$_8 = (tmp$_7 = get_hashParams().get_11rb$('ktor-version')) != null ? firstOrNull(tmp$_7) : null) != null ? tmp$_8 : defaultKtorVersion);
    addDependencies();
    registerBuildButton();
    handleFiltering();
    removeLoading();
    updateHash();
  }
  var defaultArtifactGroup;
  var defaultArtifactName;
  var defaultKtorVersion;
  var defaultKtorEngine;
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
    var tmp$, tmp$_0, tmp$_1;
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
    var str_3 = '#artifact-group';
    var artifactGroup = jQuery(str_3).val();
    if (artifactGroup != defaultArtifactGroup) {
      var key_4 = 'artifact-group';
      var value_3 = arrayListOf([artifactGroup]);
      items.put_xwzc9p$(key_4, value_3);
    }
    var str_4 = '#artifact-name';
    var artifactName = jQuery(str_4).val();
    if (artifactName != defaultArtifactName) {
      var key_5 = 'artifact-name';
      var value_4 = arrayListOf([artifactName]);
      items.put_xwzc9p$(key_5, value_4);
    }
    (tmp$_0 = document.location) != null ? (tmp$_0.hash = formUrlEncode_0(items)) : null;
    try {
      window.top.postMessage(jsObject([to('type', 'updateHash'), to('value', (tmp$_1 = document.location) != null ? tmp$_1.hash : null)]), '*');
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
      var tmp$_1 = plus(split(item, Kotlin.charArrayOf(61), void 0, 2), listOf(''));
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
  function build$lambda$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$build$lambda$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$build$lambda$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$build$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$build$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$build$lambda$lambda.prototype.constructor = Coroutine$build$lambda$lambda;
  Coroutine$build$lambda$lambda.prototype.doResume = function () {
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
  function build$lambda$ObjectLiteral(closure$dev, this$) {
    this.closure$dev = closure$dev;
    this.this$ = this$;
  }
  build$lambda$ObjectLiteral.prototype.add_dkzqdg$$default = function (name, content, mode) {
    if (this.closure$dev) {
      console.warn('ADD file: ' + name);
      try {
        console.log(toString(content, UTF8_getInstance()));
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          console.log('<binary file>');
        }
         else
          throw e;
      }
    }
    this.this$.add_w0mhwy$(name, content, void 0, mode);
  };
  build$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FileContainer]
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
            var str_2 = '#artifact-group';
            this.local$artifactGroup = jQuery(str_2).val();
            var str_3 = '#artifact-name';
            this.local$artifactName = jQuery(str_3).val();
            println('Generating ktor-sample.zip...');
            println('projectType: ' + this.local$projectType);
            println('ktorEngine: ' + this.local$ktorEngine);
            println('artifactGroup: ' + this.local$artifactGroup);
            println('artifactName: ' + this.local$artifactName);
            var $receiver = ALL_FEATURES;
            var destination = ArrayList_init();
            var tmp$_0;
            tmp$_0 = $receiver.iterator();
            while (tmp$_0.hasNext()) {
              var element = tmp$_0.next();
              var str_4 = '#artifact-' + element.id;
              if (jQuery(str_4).prop('checked'))
                destination.add_11rb$(element);
            }

            var dependenciesToInclude = toSet(destination);
            tmp$ = ALL_FEATURES.iterator();
            while (tmp$.hasNext()) {
              var dependency = tmp$.next();
              var toInclude = dependenciesToInclude.contains_11rb$(dependency);
              println('DEPENDENCY: ' + dependency + ' :: include=' + toInclude);
            }

            var tmp$_1 = plus(listOf('jcenter'), Repos_getInstance().ktor);
            var destination_0 = ArrayList_init();
            var tmp$_2;
            tmp$_2 = dependenciesToInclude.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              var list = element_0.repos;
              addAll(destination_0, list);
            }

            var reposToInclude = toSet(plus(tmp$_1, destination_0));
            var developmentPackage = 'io.ktor.server.' + this.local$ktorEngine;
            var developmentEngineFQ = developmentPackage + '.DevelopmentEngine';
            var info = new BuildInfo(get_includeWrapper(), this.local$projectType, ktorVersion, developmentPackage, this.local$artifactName, this.local$artifactGroup, developmentEngineFQ, reposToInclude, dependenciesToInclude, this.local$ktorEngine);
            this.exceptionState_0 = 2;
            this.local$zb = new ZipBuilder();
            this.state_0 = 1;
            this.result_0 = KtorProjectGenerator_getInstance().generate_p20w4r$(info, build$lambda$lambda, new build$lambda$ObjectLiteral(this.local$dev, this.local$zb), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
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
  function BuildInfo(includeWrapper, projectType, ktorVersion, developmentPackage, artifactName, artifactGroup, developmentEngineFQ, reposToInclude, dependenciesToInclude, ktorEngine) {
    this.includeWrapper = includeWrapper;
    this.projectType = projectType;
    this.ktorVersion = ktorVersion;
    this.developmentPackage = developmentPackage;
    this.artifactName = artifactName;
    this.artifactGroup = artifactGroup;
    this.developmentEngineFQ = developmentEngineFQ;
    this.reposToInclude = reposToInclude;
    this.dependenciesToInclude = dependenciesToInclude;
    this.ktorEngine = ktorEngine;
    this.featuresToInclude = this.dependenciesToInclude;
    this.ktorVer = new SemVer(this.ktorVersion);
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
    return this.developmentPackage;
  };
  BuildInfo.prototype.component5 = function () {
    return this.artifactName;
  };
  BuildInfo.prototype.component6 = function () {
    return this.artifactGroup;
  };
  BuildInfo.prototype.component7 = function () {
    return this.developmentEngineFQ;
  };
  BuildInfo.prototype.component8 = function () {
    return this.reposToInclude;
  };
  BuildInfo.prototype.component9 = function () {
    return this.dependenciesToInclude;
  };
  BuildInfo.prototype.component10 = function () {
    return this.ktorEngine;
  };
  BuildInfo.prototype.copy_s590xl$ = function (includeWrapper, projectType, ktorVersion, developmentPackage, artifactName, artifactGroup, developmentEngineFQ, reposToInclude, dependenciesToInclude, ktorEngine) {
    return new BuildInfo(includeWrapper === void 0 ? this.includeWrapper : includeWrapper, projectType === void 0 ? this.projectType : projectType, ktorVersion === void 0 ? this.ktorVersion : ktorVersion, developmentPackage === void 0 ? this.developmentPackage : developmentPackage, artifactName === void 0 ? this.artifactName : artifactName, artifactGroup === void 0 ? this.artifactGroup : artifactGroup, developmentEngineFQ === void 0 ? this.developmentEngineFQ : developmentEngineFQ, reposToInclude === void 0 ? this.reposToInclude : reposToInclude, dependenciesToInclude === void 0 ? this.dependenciesToInclude : dependenciesToInclude, ktorEngine === void 0 ? this.ktorEngine : ktorEngine);
  };
  BuildInfo.prototype.toString = function () {
    return 'BuildInfo(includeWrapper=' + Kotlin.toString(this.includeWrapper) + (', projectType=' + Kotlin.toString(this.projectType)) + (', ktorVersion=' + Kotlin.toString(this.ktorVersion)) + (', developmentPackage=' + Kotlin.toString(this.developmentPackage)) + (', artifactName=' + Kotlin.toString(this.artifactName)) + (', artifactGroup=' + Kotlin.toString(this.artifactGroup)) + (', developmentEngineFQ=' + Kotlin.toString(this.developmentEngineFQ)) + (', reposToInclude=' + Kotlin.toString(this.reposToInclude)) + (', dependenciesToInclude=' + Kotlin.toString(this.dependenciesToInclude)) + (', ktorEngine=' + Kotlin.toString(this.ktorEngine)) + ')';
  };
  BuildInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.includeWrapper) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectType) | 0;
    result = result * 31 + Kotlin.hashCode(this.ktorVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.developmentPackage) | 0;
    result = result * 31 + Kotlin.hashCode(this.artifactName) | 0;
    result = result * 31 + Kotlin.hashCode(this.artifactGroup) | 0;
    result = result * 31 + Kotlin.hashCode(this.developmentEngineFQ) | 0;
    result = result * 31 + Kotlin.hashCode(this.reposToInclude) | 0;
    result = result * 31 + Kotlin.hashCode(this.dependenciesToInclude) | 0;
    result = result * 31 + Kotlin.hashCode(this.ktorEngine) | 0;
    return result;
  };
  BuildInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.includeWrapper, other.includeWrapper) && Kotlin.equals(this.projectType, other.projectType) && Kotlin.equals(this.ktorVersion, other.ktorVersion) && Kotlin.equals(this.developmentPackage, other.developmentPackage) && Kotlin.equals(this.artifactName, other.artifactName) && Kotlin.equals(this.artifactGroup, other.artifactGroup) && Kotlin.equals(this.developmentEngineFQ, other.developmentEngineFQ) && Kotlin.equals(this.reposToInclude, other.reposToInclude) && Kotlin.equals(this.dependenciesToInclude, other.dependenciesToInclude) && Kotlin.equals(this.ktorEngine, other.ktorEngine)))));
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
  function Feature() {
    this.documentation_nx4xfm$_0 = null;
  }
  Object.defineProperty(Feature.prototype, 'documentation', {
    get: function () {
      return this.documentation_nx4xfm$_0;
    }
  });
  Feature.prototype.imports_jbwadm$ = function (info) {
    return emptyList();
  };
  Feature.prototype.classes_j0vqe2$ = function ($receiver, info) {
  };
  Feature.prototype.installFeature_j0vqe2$ = function ($receiver, info) {
  };
  Feature.prototype.routing_j0vqe2$ = function ($receiver, info) {
  };
  Feature.prototype.extensions_j0vqe2$ = function ($receiver, info) {
  };
  Feature.prototype.addFiles_553mg9$ = function (info, files) {
  };
  Feature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Feature',
    interfaces: []
  };
  function Repos() {
    Repos_instance = this;
    this.jcenter = listOf('jcenter');
    this.ktor = listOf('https://kotlin.bintray.com/ktor');
    this.kotlin_js_wrappers = listOf('https://kotlin.bintray.com/kotlin-js-wrappers');
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
  function AuthFeature() {
    AuthFeature_instance = this;
    Feature.call(this);
    this.repos_7vahic$_0 = Repos_getInstance().ktor;
    this.artifacts_w3fnd0$_0 = listOf('io.ktor:ktor-auth:$ktor_version');
    this.id_2oeams$_0 = 'auth';
    this.title_8vne25$_0 = 'Authentication';
    this.description_4ec9yv$_0 = 'Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2';
    this.documentation_awl92t$_0 = 'https://ktor.io/features/authentication.html';
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
  function AuthJwtFeature() {
    AuthJwtFeature_instance = this;
    Feature.call(this);
    this.repos_3yaw91$_0 = Repos_getInstance().ktor;
    this.artifacts_mpewbp$_0 = listOf('io.ktor:ktor-auth-jwt:$ktor_version');
    this.id_96dnzh$_0 = 'auth-jwt';
    this.title_4ynssu$_0 = 'Authentication JWT';
    this.description_6r30ye$_0 = 'Handle JWT authentication';
    this.documentation_31w9g$_0 = 'https://ktor.io/features/authentication.html#jwt';
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
    Feature.call(this);
    this.repos_h37k17$_0 = Repos_getInstance().ktor;
    this.artifacts_u8q64r$_0 = listOf('io.ktor:ktor-auth-ldap:$ktor_version');
    this.id_t8ep8z$_0 = 'auth-ldap';
    this.title_i3kgl0$_0 = 'Authentication LDAP';
    this.description_9cnttc$_0 = 'Handle JDAP authentication';
    this.documentation_c0ed66$_0 = 'https://ktor.io/features/authentication.html#ldap';
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
  function CssDslFeature() {
    CssDslFeature_instance = this;
    Feature.call(this);
    this.repos_w3vhti$_0 = plus(Repos_getInstance().jcenter, Repos_getInstance().kotlin_js_wrappers);
    this.artifacts_hbxqui$_0 = listOf('org.jetbrains:kotlin-css-jvm:1.0.0-pre.31-kotlin-1.2.41');
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
  CssDslFeature.prototype.imports_jbwadm$ = function (info) {
    return listOf_0(['kotlinx.html', 'kotlinx.css']);
  };
  CssDslFeature.prototype.routing_j0vqe2$ = function ($receiver, info) {
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('get("/styles.css")' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('call.respondCss' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('body' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('backgroundColor = Color.red');
        }
        finally {
          $receiver.indentation = $receiver.indentation - 1 | 0;
        }
        $receiver.line_61zpoe$('}');
        $receiver.line_61zpoe$('p' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('fontSize = 2.em');
        }
        finally {
          $receiver.indentation = $receiver.indentation - 1 | 0;
        }
        $receiver.line_61zpoe$('}');
        $receiver.line_61zpoe$('rule("p.myclass")' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('color = Color.blue');
        }
        finally {
          $receiver.indentation = $receiver.indentation - 1 | 0;
        }
        $receiver.line_61zpoe$('}');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
  };
  CssDslFeature.prototype.extensions_j0vqe2$ = function ($receiver, info) {
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('fun FlowOrMetaDataContent.styleCss(builder: CSSBuilder.() -> Unit)' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('style(type = ContentType.Text.CSS.toString())' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('+CSSBuilder().apply(builder).toString()');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('fun CommonAttributeGroupFacade.style(builder: CSSBuilder.() -> Unit)' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('this.style = CSSBuilder().apply(builder).toString().trim()');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('suspend inline fun ApplicationCall.respondCss(builder: CSSBuilder.() -> Unit)' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('this.respondText(CSSBuilder().apply(builder).toString(), ContentType.Text.CSS)');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
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
  function FreemarkerFeature() {
    FreemarkerFeature_instance = this;
    Feature.call(this);
    this.repos_csvuzi$_0 = Repos_getInstance().ktor;
    this.artifacts_u4kg8y$_0 = listOf('io.ktor:ktor-freemarker:$ktor_version');
    this.id_fl2zti$_0 = 'freemarker';
    this.title_bsiyfp$_0 = 'Freemarker';
    this.description_lowc3r$_0 = 'Serve HTML content using Apache freemarker';
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
  FreemarkerFeature.prototype.imports_jbwadm$ = function (info) {
    return listOf_0(['freemarker.cache', 'io.ktor.freemarker']);
  };
  FreemarkerFeature.prototype.classes_j0vqe2$ = function ($receiver, info) {
    $receiver.line_61zpoe$('data class IndexData(val items: List<Int>)');
  };
  FreemarkerFeature.prototype.installFeature_j0vqe2$ = function ($receiver, info) {
    $receiver.line_61zpoe$('install(FreeMarker)' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('templateLoader = ClassTemplateLoader(this::class.java.classLoader, "templates")');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
  };
  FreemarkerFeature.prototype.routing_j0vqe2$ = function ($receiver, info) {
    $receiver.line_61zpoe$('get("/html-freemarker")' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('call.respond(FreeMarkerContent("index.ftl", mapOf("data" to IndexData(listOf(1, 2, 3))), ""))');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
  };
  FreemarkerFeature.prototype.extensions_j0vqe2$ = function ($receiver, info) {
  };
  function FreemarkerFeature$addFiles$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('<#-- @ftlvariable name=' + '"' + 'data' + '"' + ' type=' + '"' + closure$info.artifactGroup + '.IndexData' + '"' + ' -->');
      $receiver.line_61zpoe$('<html>');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('<body>');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('<ul>');
          $receiver.line_61zpoe$('<#list data.items as item>');
          $receiver.indentation = $receiver.indentation + 1 | 0;
          try {
            $receiver.line_61zpoe$('<li>${item}<\/li>');
          }
          finally {
            $receiver.indentation = $receiver.indentation - 1 | 0;
          }
          $receiver.line_61zpoe$('<\/#list>');
          $receiver.line_61zpoe$('<\/ul>');
        }
        finally {
          $receiver.indentation = $receiver.indentation - 1 | 0;
        }
        $receiver.line_61zpoe$('<\/body>');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('<\/html>');
      return Unit;
    };
  }
  FreemarkerFeature.prototype.addFiles_553mg9$ = function (info, files) {
    add(files, info.artifactName + '/resources/templates/index.ftl', indenter(FreemarkerFeature$addFiles$lambda(info)));
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
  function HtmlDslFeature() {
    HtmlDslFeature_instance = this;
    Feature.call(this);
    this.repos_jw6vl4$_0 = Repos_getInstance().jcenter;
    this.artifacts_mmn820$_0 = listOf('io.ktor:ktor-html-builder:$ktor_version');
    this.id_6osof4$_0 = 'html-dsl';
    this.title_ivtz1b$_0 = 'HTML DSL';
    this.description_vpobnn$_0 = 'Generate HTML using Kotlin code';
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
  HtmlDslFeature.prototype.imports_jbwadm$ = function (info) {
    return listOf_0(['io.ktor.html', 'kotlinx.html']);
  };
  HtmlDslFeature.prototype.routing_j0vqe2$ = function ($receiver, info) {
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('get("/html-dsl")' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('call.respondHtml' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('body' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('h1 { +"HTML" }');
        }
        finally {
          $receiver.indentation = $receiver.indentation - 1 | 0;
        }
        $receiver.line_61zpoe$('}');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
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
    Feature.call(this);
    this.repos_widcof$_0 = Repos_getInstance().ktor;
    this.artifacts_7ubutr$_0 = listOf('io.ktor:ktor-client-apache:$ktor_version');
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
  function JsonGsonFeature() {
    JsonGsonFeature_instance = this;
    Feature.call(this);
    this.repos_m451m9$_0 = Repos_getInstance().ktor;
    this.artifacts_vpbenj$_0 = listOf('io.ktor:ktor-gson:$ktor_version');
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
    Feature.call(this);
    this.repos_6gchw1$_0 = Repos_getInstance().ktor;
    this.artifacts_tziadr$_0 = listOf('io.ktor:ktor-jackson:$ktor_version');
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
    Feature.call(this);
    this.repos_krkeos$_0 = Repos_getInstance().ktor;
    this.artifacts_3l6utg$_0 = listOf('io.ktor:ktor-locations:$ktor_version');
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
    Feature.call(this);
    this.repos_pfso6v$_0 = Repos_getInstance().ktor;
    this.artifacts_p4lqmv$_0 = listOf('io.ktor:ktor-metrics:$ktor_version');
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
  function RawSocketsFeature() {
    RawSocketsFeature_instance = this;
    Feature.call(this);
    this.repos_6u018$_0 = Repos_getInstance().ktor;
    this.artifacts_lv9ej0$_0 = listOf('io.ktor:ktor-network:$ktor_version');
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
    Feature.call(this);
    this.repos_9ufirt$_0 = Repos_getInstance().ktor;
    this.artifacts_bme33d$_0 = listOf('io.ktor:ktor-network-tls:$ktor_version');
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
  function SessionsFeature() {
    SessionsFeature_instance = this;
    Feature.call(this);
    this.repos_630btl$_0 = Repos_getInstance().ktor;
    this.artifacts_vzw0ft$_0 = listOf('io.ktor:ktor-sessions:$ktor_version');
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
  function VelocityFeature() {
    VelocityFeature_instance = this;
    Feature.call(this);
    this.repos_pmsk9$_0 = Repos_getInstance().ktor;
    this.artifacts_fuibnd$_0 = listOf('io.ktor:ktor-velocity:$ktor_version');
    this.id_jr50fz$_0 = 'velocity';
    this.title_1pzp42$_0 = 'Velocity';
    this.description_84u56m$_0 = 'Serve HTML content using Apache velocity';
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
    Feature.call(this);
    this.repos_r46ofs$_0 = Repos_getInstance().ktor;
    this.artifacts_nxkzmg$_0 = listOf('io.ktor:ktor-websockets:$ktor_version');
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
  function KtorProjectGenerator() {
    KtorProjectGenerator_instance = this;
  }
  function KtorProjectGenerator$generate$lambda$lambda(closure$info) {
    return function ($receiver) {
      buildPomXml($receiver, closure$info.copy_s590xl$());
      return Unit;
    };
  }
  function KtorProjectGenerator$generate$lambda$lambda_0(closure$info) {
    return function ($receiver) {
      buildBuildGradle($receiver, closure$info.copy_s590xl$());
      return Unit;
    };
  }
  function KtorProjectGenerator$generate$lambda$lambda_1(closure$info) {
    return function ($receiver) {
      buildApplicationConf($receiver, closure$info.copy_s590xl$());
      return Unit;
    };
  }
  function KtorProjectGenerator$generate$lambda$ObjectLiteral(closure$files) {
    this.closure$files = closure$files;
  }
  KtorProjectGenerator$generate$lambda$ObjectLiteral.prototype.add_dkzqdg$$default = function (name, content, mode) {
    this.closure$files.add_dkzqdg$(name, content, mode);
  };
  KtorProjectGenerator$generate$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FileContainer]
  };
  function KtorProjectGenerator$generate$lambda$lambda_2(closure$info) {
    return function ($receiver) {
      buildApplicationKt($receiver, closure$info.copy_s590xl$());
      return Unit;
    };
  }
  KtorProjectGenerator.prototype.generate_p20w4r$ = function (info_0, fetchFile_0, files_0, continuation_0, suspended) {
    var instance = new Coroutine$generate_p20w4r$(this, info_0, fetchFile_0, files_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$generate_p20w4r$($this, info_0, fetchFile_0, files_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$info = info_0;
    this.local$fetchFile = fetchFile_0;
    this.local$files = files_0;
  }
  Coroutine$generate_p20w4r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$generate_p20w4r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$generate_p20w4r$.prototype.constructor = Coroutine$generate_p20w4r$;
  Coroutine$generate_p20w4r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            switch (this.local$info.projectType) {
              case 'maven':
                add(this.local$files, this.local$info.artifactName + '/pom.xml', indenter(KtorProjectGenerator$generate$lambda$lambda(this.local$info)));
                this.state_0 = 7;
                continue;
              case 'gradle':
                add(this.local$files, this.local$info.artifactName + '/build.gradle', indenter(KtorProjectGenerator$generate$lambda$lambda_0(this.local$info)));
                if (this.local$info.includeWrapper) {
                  this.local$tmp$ = this.local$info.artifactName + '/gradlew';
                  this.state_0 = 2;
                  this.result_0 = this.local$fetchFile('gradle/gradlew', this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  this.state_0 = 6;
                  continue;
                }

              default:throw RuntimeException_init('Unknown project type ' + this.local$info.projectType);
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$files.add_dkzqdg$(this.local$tmp$, this.result_0, toInt('755', 8));
            this.local$tmp$_0 = this.local$info.artifactName + '/gradlew.bat';
            this.state_0 = 3;
            this.result_0 = this.local$fetchFile('gradle/gradlew.bat', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$files.add_dkzqdg$(this.local$tmp$_0, this.result_0);
            this.local$tmp$_1 = this.local$info.artifactName + '/gradle/wrapper/gradle-wrapper.jar';
            this.state_0 = 4;
            this.result_0 = this.local$fetchFile('gradle/gradle/wrapper/gradle-wrapper.jar', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$files.add_dkzqdg$(this.local$tmp$_1, this.result_0);
            this.local$tmp$_2 = this.local$info.artifactName + '/gradle/wrapper/gradle-wrapper.properties';
            this.state_0 = 5;
            this.result_0 = this.local$fetchFile('gradle/gradle/wrapper/gradle-wrapper.properties', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$files.add_dkzqdg$(this.local$tmp$_2, this.result_0);
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            add(this.local$files, this.local$info.artifactName + '/resources/application.conf', indenter(KtorProjectGenerator$generate$lambda$lambda_1(this.local$info)));
            tmp$ = this.local$info.featuresToInclude.iterator();
            while (tmp$.hasNext()) {
              var feat = tmp$.next();
              feat.addFiles_553mg9$(this.local$info, new KtorProjectGenerator$generate$lambda$ObjectLiteral(this.local$files));
            }

            add(this.local$files, this.local$info.artifactName + '/src/Application.kt', indenter(KtorProjectGenerator$generate$lambda$lambda_2(this.local$info)));
            return this.local$info;
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
  KtorProjectGenerator.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KtorProjectGenerator',
    interfaces: []
  };
  var KtorProjectGenerator_instance = null;
  function KtorProjectGenerator_getInstance() {
    if (KtorProjectGenerator_instance === null) {
      new KtorProjectGenerator();
    }
    return KtorProjectGenerator_instance;
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function buildPomXml($receiver, info) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported Maven for now');
  }
  var DOLLAR;
  function buildBuildGradle($receiver, info) {
    $receiver.line_61zpoe$('buildscript' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$("ext.kotlin_version = '1.2.41'");
      $receiver.line_61zpoe$("ext.ktor_version = '" + info.ktorVersion + "'");
      $receiver.line_61zpoe$("ext.logback_version = '1.2.1'");
      $receiver.line_61zpoe$('');
      $receiver.line_61zpoe$('repositories' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('jcenter()');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$('');
      $receiver.line_61zpoe$('dependencies' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$("apply plugin: 'kotlin'");
    $receiver.line_61zpoe$("apply plugin: 'application'");
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('mainClassName = ' + '"' + info.developmentEngineFQ + '"');
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('sourceSets' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$("main.kotlin.srcDirs = ['src']");
      $receiver.line_61zpoe$("main.resources.srcDirs = ['resources']");
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('repositories' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var tmp$;
      tmp$ = info.reposToInclude.iterator();
      while (tmp$.hasNext()) {
        var repo = tmp$.next();
        if (equals(repo, 'jcenter')) {
          $receiver.line_61zpoe$('jcenter()');
        }
         else {
          $receiver.line_61zpoe$("maven { url '" + repo + "' }");
        }
      }
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$('dependencies' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var tmp$_0;
      $receiver.line_61zpoe$('compile "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version"');
      $receiver.line_61zpoe$('compile ' + '"' + 'io.ktor:ktor-server-' + info.ktorEngine + ':' + String.fromCharCode(DOLLAR) + 'ktor_version' + '"');
      $receiver.line_61zpoe$('compile "ch.qos.logback:logback-classic:$logback_version"');
      $receiver.line_61zpoe$('');
      var $receiver_0 = info.dependenciesToInclude;
      var destination = ArrayList_init();
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var list = element.artifacts;
        addAll(destination, list);
      }
      tmp$_0 = distinct(destination).iterator();
      while (tmp$_0.hasNext()) {
        var artifact = tmp$_0.next();
        $receiver.line_61zpoe$('compile ' + '"' + artifact + '"');
      }
      $receiver.line_61zpoe$('');
      $receiver.line_61zpoe$('testCompile "io.ktor:ktor-server-tests:$ktor_version"');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('');
    $receiver.line_61zpoe$("kotlin.experimental.coroutines = 'enable'");
    return info;
  }
  function buildApplicationConf($receiver, info) {
    $receiver.line_61zpoe$('ktor' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      $receiver.line_61zpoe$('deployment' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('port = 8080');
        $receiver.line_61zpoe$('port = ${?PORT}');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$('application' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        $receiver.line_61zpoe$('modules = [ ' + info.artifactGroup + '.ApplicationKt.main ]');
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    return info;
  }
  function buildApplicationKt($receiver, info) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var packages = LinkedHashSet_init();
    $receiver.line_61zpoe$('package ' + info.artifactGroup);
    $receiver.line_61zpoe$('');
    var element = 'io.ktor.application';
    packages.add_11rb$(element);
    var element_0 = 'io.ktor.response';
    packages.add_11rb$(element_0);
    var element_1 = 'io.ktor.routing';
    packages.add_11rb$(element_1);
    var element_2 = 'io.ktor.http';
    packages.add_11rb$(element_2);
    tmp$ = info.featuresToInclude.iterator();
    while (tmp$.hasNext()) {
      var feat = tmp$.next();
      addAll(packages, feat.imports_jbwadm$(info));
    }
    tmp$_0 = packages.iterator();
    while (tmp$_0.hasNext()) {
      var p = tmp$_0.next();
      $receiver.line_61zpoe$('import ' + p + '.*');
    }
    $receiver.line_61zpoe$('');
    if (info.ktorVer.compareTo_11rb$(Versions_getInstance().V092) >= 0) {
      $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = ' + info.developmentEngineFQ + '.main(args)');
    }
     else {
      $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = ' + info.developmentPackage + '.main(args)');
    }
    $receiver.line_61zpoe$('');
    tmp$_1 = info.featuresToInclude.iterator();
    while (tmp$_1.hasNext()) {
      var feat_0 = tmp$_1.next();
      feat_0.classes_j0vqe2$($receiver, info);
    }
    $receiver.line_61zpoe$('fun Application.main()' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var tmp$_3;
      tmp$_3 = info.featuresToInclude.iterator();
      while (tmp$_3.hasNext()) {
        var feat_1 = tmp$_3.next();
        feat_1.installFeature_j0vqe2$($receiver, info);
      }
      $receiver.line_61zpoe$('routing' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var tmp$_4;
        $receiver.line_61zpoe$('get("/")' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('call.respondText("HELLO WORLD!")');
        }
        finally {
          $receiver.indentation = $receiver.indentation - 1 | 0;
        }
        $receiver.line_61zpoe$('}');
        tmp$_4 = info.featuresToInclude.iterator();
        while (tmp$_4.hasNext()) {
          var feat_2 = tmp$_4.next();
          feat_2.routing_j0vqe2$($receiver, info);
        }
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    tmp$_2 = info.featuresToInclude.iterator();
    while (tmp$_2.hasNext()) {
      var feat_3 = tmp$_2.next();
      feat_3.extensions_j0vqe2$($receiver, info);
    }
    return info;
  }
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
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
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
  function toString($receiver, charset) {
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
  function BaseIndenter() {
  }
  BaseIndenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseIndenter',
    interfaces: []
  };
  function Indenter() {
    this.indentation = 0;
    this.lines_97gspi$_0 = ArrayList_init();
  }
  function Indenter$Indents() {
    Indenter$Indents_instance = this;
    this.indents = ArrayList_init();
  }
  Indenter$Indents.prototype.get_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    while (this.indents.size <= index) {
      this.indents.add_11rb$((tmp$_0 = (tmp$ = lastOrNull(this.indents)) != null ? tmp$ + '    ' : null) != null ? tmp$_0 : '');
    }
    return this.indents.get_za3lpa$(index);
  };
  Indenter$Indents.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Indents',
    interfaces: []
  };
  var Indenter$Indents_instance = null;
  function Indenter$Indents_getInstance() {
    if (Indenter$Indents_instance === null) {
      new Indenter$Indents();
    }
    return Indenter$Indents_instance;
  }
  Indenter.prototype.line_61zpoe$ = function (str) {
    var $receiver = this.lines_97gspi$_0;
    var element = Indenter$Indents_getInstance().get_za3lpa$(this.indentation) + str;
    $receiver.add_11rb$(element);
  };
  Indenter.prototype.line_a4mwiz$ = defineInlineFunction('output.io.ktor.start.util.Indenter.line_a4mwiz$', function (str, callback) {
    this.line_61zpoe$(str + ' {');
    this.indentation = this.indentation + 1 | 0;
    try {
      callback();
    }
    finally {
      this.indentation = this.indentation - 1 | 0;
    }
    this.line_61zpoe$('}');
  });
  Indenter.prototype.invoke_79xod4$ = defineInlineFunction('output.io.ktor.start.util.Indenter.invoke_79xod4$', function ($receiver, callback) {
    this.line_61zpoe$($receiver + ' {');
    this.indentation = this.indentation + 1 | 0;
    try {
      callback();
    }
    finally {
      this.indentation = this.indentation - 1 | 0;
    }
    this.line_61zpoe$('}');
  });
  Indenter.prototype.unaryPlus_pdl1vz$ = defineInlineFunction('output.io.ktor.start.util.Indenter.unaryPlus_pdl1vz$', function ($receiver) {
    this.line_61zpoe$($receiver);
  });
  Indenter.prototype.indent_o14v8n$ = defineInlineFunction('output.io.ktor.start.util.Indenter.indent_o14v8n$', function (callback) {
    this.indentation = this.indentation + 1 | 0;
    try {
      callback();
    }
    finally {
      this.indentation = this.indentation - 1 | 0;
    }
  });
  Indenter.prototype.toString = function () {
    return joinToString(this.lines_97gspi$_0, '\n');
  };
  Indenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Indenter',
    interfaces: [BaseIndenter]
  };
  function indenter(callback) {
    var $receiver = new Indenter();
    callback($receiver);
    return $receiver.toString();
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
  package$start.on_nsccip$ = on;
  package$start.each_4tgbmb$ = each;
  package$start.change_tue5ot$ = change;
  package$start.keyup_tue5ot$ = keyup;
  package$start.generateBrowserFile_cyqrs4$ = generateBrowserFile;
  $$importsForInline$$.output = _;
  package$start.main_kand9s$ = main;
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
  package$start.add_ykoeqs$ = add;
  package$start.Feature = Feature;
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
  Object.defineProperty(package$features, 'AuthFeature', {
    get: AuthFeature_getInstance
  });
  Object.defineProperty(package$features, 'AuthJwtFeature', {
    get: AuthJwtFeature_getInstance
  });
  Object.defineProperty(package$features, 'AuthLdapFeature', {
    get: AuthLdapFeature_getInstance
  });
  Object.defineProperty(package$features, 'CssDslFeature', {
    get: CssDslFeature_getInstance
  });
  Object.defineProperty(package$features, 'FreemarkerFeature', {
    get: FreemarkerFeature_getInstance
  });
  Object.defineProperty(package$features, 'HtmlDslFeature', {
    get: HtmlDslFeature_getInstance
  });
  Object.defineProperty(package$features, 'HttpClientFeature', {
    get: HttpClientFeature_getInstance
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
  Object.defineProperty(package$features, 'RawSocketsFeature', {
    get: RawSocketsFeature_getInstance
  });
  Object.defineProperty(package$features, 'RawSocketsTlsFeature', {
    get: RawSocketsTlsFeature_getInstance
  });
  Object.defineProperty(package$features, 'SessionsFeature', {
    get: SessionsFeature_getInstance
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
  var package$generate = package$start.generate || (package$start.generate = {});
  Object.defineProperty(package$generate, 'KtorProjectGenerator', {
    get: KtorProjectGenerator_getInstance
  });
  package$generate.buildPomXml_j0vqe2$ = buildPomXml;
  Object.defineProperty(package$generate, 'DOLLAR', {
    get: function () {
      return DOLLAR;
    }
  });
  package$generate.buildBuildGradle_j0vqe2$ = buildBuildGradle;
  package$generate.buildApplicationConf_j0vqe2$ = buildApplicationConf;
  package$generate.buildApplicationKt_j0vqe2$ = buildApplicationKt;
  package$util.ByteArrayOutputStream = ByteArrayOutputStream;
  package$util.buildByteArray_xuyaid$ = buildByteArray;
  package$util.Charset = Charset;
  Object.defineProperty(package$util, 'UTF8', {
    get: UTF8_getInstance
  });
  Object.defineProperty(package$util, 'ASCII', {
    get: ASCII_getInstance
  });
  package$util.toString_ecs3bj$ = toString;
  package$util.toByteArray_wtqmxj$ = toByteArray;
  Object.defineProperty(package$util, 'CRC32', {
    get: CRC32_getInstance
  });
  package$util.crc32_964n91$ = crc32;
  package$util.get_octal_pdl1vz$ = get_octal;
  package$util.BaseIndenter = BaseIndenter;
  Object.defineProperty(Indenter, 'Indents', {
    get: Indenter$Indents_getInstance
  });
  package$util.Indenter = Indenter;
  package$util.indenter_yot30u$ = indenter;
  package$util.SemVer = SemVer;
  Object.defineProperty(ZipBuilder, 'Companion', {
    get: ZipBuilder$Companion_getInstance
  });
  ZipBuilder.FileInfo = ZipBuilder$FileInfo;
  package$util.ZipBuilder = ZipBuilder;
  package$util.buildZip_oi1qpb$ = buildZip;
  build$lambda$ObjectLiteral.prototype.add_dkzqdg$ = FileContainer.prototype.add_dkzqdg$;
  KtorProjectGenerator$generate$lambda$ObjectLiteral.prototype.add_dkzqdg$ = FileContainer.prototype.add_dkzqdg$;
  EmptyContinuation = new EmptyContinuation$ObjectLiteral();
  defaultArtifactGroup = 'com.example';
  defaultArtifactName = 'ktor-demo';
  defaultKtorVersion = Versions_getInstance().LAST.version;
  defaultKtorEngine = 'netty';
  insideIframe = lazy(insideIframe$lambda);
  hashParams = lazy(hashParams$lambda);
  KOTLIN_VERSION = '1.2.41';
  ALL_FEATURES = listOf_0([HtmlDslFeature_getInstance(), CssDslFeature_getInstance(), FreemarkerFeature_getInstance(), VelocityFeature_getInstance(), AuthFeature_getInstance(), AuthJwtFeature_getInstance(), AuthLdapFeature_getInstance(), JsonGsonFeature_getInstance(), JsonJacksonFeature_getInstance(), LocationsFeature_getInstance(), MetricsFeature_getInstance(), SessionsFeature_getInstance(), WebsocketsFeature_getInstance(), HttpClientFeature_getInstance(), RawSocketsFeature_getInstance(), RawSocketsTlsFeature_getInstance()]);
  DOLLAR = 36;
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}));
