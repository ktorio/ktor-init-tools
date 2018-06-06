(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-generator-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-generator-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
    }
    if (typeof this['ktor-generator-js'] === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'ktor-generator-js' was not found. Please, check whether 'ktor-generator-js' is loaded prior to 'output'.");
    }
    root.output = factory(typeof output === 'undefined' ? {} : output, kotlin, this['ktor-generator-js']);
  }
}(this, function (_, Kotlin, $module$ktor_generator_js) {
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
  var throwCCE = Kotlin.throwCCE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var features = $module$ktor_generator_js.io.ktor.start.features;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var Throwable = Error;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var BuildInfo = $module$ktor_generator_js.io.ktor.start.BuildInfo;
  var get_octal = $module$ktor_generator_js.io.ktor.start.util.get_octal_pdl1vz$;
  var util = $module$ktor_generator_js.io.ktor.start.util;
  var toString = $module$ktor_generator_js.io.ktor.start.util.toString_ecs3bj$;
  var toByteArray = $module$ktor_generator_js.io.ktor.start.util.toByteArray_wtqmxj$;
  var indenter = $module$ktor_generator_js.io.ktor.start.util.indenter_yot30u$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var FileContainer = $module$ktor_generator_js.io.ktor.start.FileContainer;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var SemVer = $module$ktor_generator_js.io.ktor.start.util.SemVer;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
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
  var KOTLIN_VERSION;
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
    tmp$ = features.ALL_FEATURES.iterator();
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
    tmp$_0 = features.ALL_FEATURES.iterator();
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
    tmp$_1 = features.ALL_FEATURES.iterator();
    while (tmp$_1.hasNext()) {
      var dependency_0 = tmp$_1.next();
      var str_6 = '#artifact-' + dependency_0.id;
      jQuery(str_6).change(addDependencies$lambda);
    }
  }
  function build$lambda$addFile(closure$dev, this$) {
    return function (name, data, mode, display) {
      if (mode === void 0)
        mode = get_octal('644');
      if (display === void 0)
        display = true;
      if (closure$dev) {
        console.warn('ADD file: ' + name);
        if (display) {
          try {
            console.log(toString(data, util.UTF8));
          }
           catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              console.log('<binary file>');
            }
             else
              throw e;
          }
        }
         else {
          console.log('<ignored>');
        }
      }
      this$.add_w0mhwy$(name, data, void 0, mode);
    };
  }
  function build$lambda$addFile_0(closure$addFile) {
    return function (name, data, charset, mode, display) {
      if (charset === void 0)
        charset = util.UTF8;
      if (mode === void 0)
        mode = get_octal('644');
      if (display === void 0)
        display = true;
      closure$addFile(name, toByteArray(data, charset), mode, true);
    };
  }
  function build$lambda$lambda(closure$info) {
    return function ($receiver) {
      buildPomXml($receiver, closure$info.copy_qxt8fu$());
      return Unit;
    };
  }
  function build$lambda$lambda_0(closure$info) {
    return function ($receiver) {
      buildBuildGradle($receiver, closure$info.copy_qxt8fu$());
      return Unit;
    };
  }
  function build$lambda$lambda_1(closure$info) {
    return function ($receiver) {
      buildApplicationConf($receiver, closure$info.copy_qxt8fu$());
      return Unit;
    };
  }
  function build$lambda$ObjectLiteral(closure$addFile) {
    this.closure$addFile = closure$addFile;
  }
  build$lambda$ObjectLiteral.prototype.add_dkzqdg$$default = function (name, content, mode) {
    this.closure$addFile(name, content, mode);
  };
  build$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [FileContainer]
  };
  function build$lambda$lambda_2(closure$info) {
    return function ($receiver) {
      buildApplicationKt($receiver, closure$info.copy_qxt8fu$());
      return Unit;
    };
  }
  var ZipBuilder_init = $module$ktor_generator_js.io.ktor.start.util.ZipBuilder;
  function build(dev_0, continuation_0, suspended) {
    var instance = new Coroutine$build(dev_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$build(dev_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$projectType = void 0;
    this.local$ktorEngine = void 0;
    this.local$artifactGroup = void 0;
    this.local$artifactName = void 0;
    this.local$zb = void 0;
    this.local$info = void 0;
    this.local$addFile = void 0;
    this.local$addFile_0 = void 0;
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
            var $receiver = features.ALL_FEATURES;
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
            tmp$ = features.ALL_FEATURES.iterator();
            while (tmp$.hasNext()) {
              var dependency = tmp$.next();
              var toInclude = dependenciesToInclude.contains_11rb$(dependency);
              println('DEPENDENCY: ' + dependency + ' :: include=' + toInclude);
            }

            var tmp$_1 = listOf_0(['jcenter', 'ktor']);
            var destination_0 = ArrayList_init();
            var tmp$_2;
            tmp$_2 = dependenciesToInclude.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              var list = element_0.repos;
              addAll(destination_0, list);
            }

            var reposToInclude = toSet(plus(tmp$_1, destination_0));
            this.exceptionState_0 = 7;
            this.local$zb = new ZipBuilder_init();
            var tmp$_3;
            var developmentPackage = 'io.ktor.server.' + this.local$ktorEngine;
            var developmentEngineFQ = developmentPackage + '.DevelopmentEngine';
            this.local$info = new BuildInfo(ktorVersion, developmentPackage, this.local$artifactName, this.local$artifactGroup, developmentEngineFQ, reposToInclude, dependenciesToInclude, this.local$ktorEngine);
            this.local$addFile = build$lambda$addFile(this.local$dev, this.local$zb);
            this.local$addFile_0 = build$lambda$addFile_0(this.local$addFile);
            switch (this.local$projectType) {
              case 'maven':
                this.local$addFile_0(this.local$artifactName + '/pom.xml', indenter(build$lambda$lambda(this.local$info)));
                this.state_0 = 6;
                continue;
              case 'gradle':
                this.local$addFile_0(this.local$artifactName + '/build.gradle', indenter(build$lambda$lambda_0(this.local$info)));
                if (get_includeWrapper()) {
                  this.state_0 = 1;
                  this.result_0 = fetchFile('gradle/gradlew', this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
                 else {
                  this.state_0 = 5;
                  continue;
                }

              default:throw RuntimeException_init('Unknown project type ' + this.local$projectType);
            }

          case 1:
            this.local$addFile(this.local$artifactName + '/gradlew', this.result_0, toInt('755', 8), false);
            this.state_0 = 2;
            this.result_0 = fetchFile('gradle/gradlew.bat', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$addFile(this.local$artifactName + '/gradlew.bat', this.result_0, void 0, false);
            this.state_0 = 3;
            this.result_0 = fetchFile('gradle/gradle/wrapper/gradle-wrapper.jar', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$addFile(this.local$artifactName + '/gradle/wrapper/gradle-wrapper.jar', this.result_0, void 0, false);
            this.state_0 = 4;
            this.result_0 = fetchFile('gradle/gradle/wrapper/gradle-wrapper.properties', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$addFile(this.local$artifactName + '/gradle/wrapper/gradle-wrapper.properties', this.result_0, void 0, false);
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.local$addFile_0(this.local$artifactName + '/resources/application.conf', indenter(build$lambda$lambda_1(this.local$info)));
            tmp$_3 = this.local$info.featuresToInclude.iterator();
            while (tmp$_3.hasNext()) {
              var feat = tmp$_3.next();
              feat.addFiles_553mg9$(this.local$info, new build$lambda$ObjectLiteral(this.local$addFile));
            }

            this.local$addFile_0(this.local$artifactName + '/src/Application.kt', indenter(build$lambda$lambda_2(this.local$info)));
            var zipBytes = this.local$zb.toByteArray();
            if (!this.local$dev) {
              generateBrowserFile('ktor-sample-' + this.local$projectType + '-' + this.local$ktorEngine + '-' + this.local$artifactGroup + '-' + this.local$artifactName + '.zip', zipBytes);
            }

            this.exceptionState_0 = 9;
            this.state_0 = 8;
            continue;
          case 7:
            this.exceptionState_0 = 9;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              console.error(e);
              window.alert("Couldn't generate ZIP. Reason: " + e);
            }
             else
              throw e;
            this.state_0 = 8;
            continue;
          case 8:
            return;
          case 9:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 9) {
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
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function buildPomXml($receiver, info) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported Maven for now');
  }
  var DOLLAR;
  function buildBuildGradle($receiver, info) {
    var $receiver_0 = 'buildscript';
    $receiver.line_61zpoe$($receiver_0 + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var $receiver_1 = "ext.kotlin_version = '1.2.41'";
      $receiver.line_61zpoe$($receiver_1);
      var $receiver_2 = "ext.ktor_version = '" + info.ktorVersion + "'";
      $receiver.line_61zpoe$($receiver_2);
      var $receiver_3 = "ext.logback_version = '1.2.1'";
      $receiver.line_61zpoe$($receiver_3);
      $receiver.line_61zpoe$('');
      var $receiver_4 = 'repositories';
      $receiver.line_61zpoe$($receiver_4 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var $receiver_5 = 'jcenter()';
        $receiver.line_61zpoe$($receiver_5);
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$('');
      var $receiver_6 = 'dependencies';
      $receiver.line_61zpoe$($receiver_6 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var $receiver_7 = 'classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"';
        $receiver.line_61zpoe$($receiver_7);
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
    var $receiver_8 = "apply plugin: 'kotlin'";
    $receiver.line_61zpoe$($receiver_8);
    var $receiver_9 = "apply plugin: 'application'";
    $receiver.line_61zpoe$($receiver_9);
    $receiver.line_61zpoe$('');
    var $receiver_10 = 'mainClassName = ' + '"' + info.developmentEngineFQ + '"';
    $receiver.line_61zpoe$($receiver_10);
    $receiver.line_61zpoe$('');
    var $receiver_11 = 'sourceSets';
    $receiver.line_61zpoe$($receiver_11 + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var $receiver_12 = "main.kotlin.srcDirs = ['src']";
      $receiver.line_61zpoe$($receiver_12);
      var $receiver_13 = "main.resources.srcDirs = ['resources']";
      $receiver.line_61zpoe$($receiver_13);
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('');
    var $receiver_14 = 'repositories';
    $receiver.line_61zpoe$($receiver_14 + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var tmp$;
      tmp$ = info.reposToInclude.iterator();
      while (tmp$.hasNext()) {
        var repo = tmp$.next();
        if (equals(repo, 'jcenter')) {
          var $receiver_15 = 'jcenter()';
          $receiver.line_61zpoe$($receiver_15);
        }
         else {
          var $receiver_16 = "maven { url '" + repo + "' }";
          $receiver.line_61zpoe$($receiver_16);
        }
      }
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('');
    var $receiver_17 = 'dependencies';
    $receiver.line_61zpoe$($receiver_17 + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var tmp$_0;
      var $receiver_18 = 'compile "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version"';
      $receiver.line_61zpoe$($receiver_18);
      var $receiver_19 = 'compile ' + '"' + 'io.ktor:ktor-server-' + info.ktorEngine + ':' + String.fromCharCode(DOLLAR) + 'ktor_version' + '"';
      $receiver.line_61zpoe$($receiver_19);
      var $receiver_20 = 'compile "ch.qos.logback:logback-classic:$logback_version"';
      $receiver.line_61zpoe$($receiver_20);
      $receiver.line_61zpoe$('');
      var $receiver_21 = info.dependenciesToInclude;
      var destination = ArrayList_init();
      var tmp$_1;
      tmp$_1 = $receiver_21.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var list = element.artifacts;
        addAll(destination, list);
      }
      tmp$_0 = distinct(destination).iterator();
      while (tmp$_0.hasNext()) {
        var artifact = tmp$_0.next();
        var $receiver_22 = 'compile ' + '"' + artifact + '"';
        $receiver.line_61zpoe$($receiver_22);
      }
      $receiver.line_61zpoe$('');
      var $receiver_23 = 'testCompile "io.ktor:ktor-server-tests:$ktor_version"';
      $receiver.line_61zpoe$($receiver_23);
    }
    finally {
      $receiver.indentation = $receiver.indentation - 1 | 0;
    }
    $receiver.line_61zpoe$('}');
    $receiver.line_61zpoe$('');
    var $receiver_24 = "kotlin.experimental.coroutines = 'enable'";
    $receiver.line_61zpoe$($receiver_24);
    return info;
  }
  function buildApplicationConf($receiver, info) {
    $receiver.line_61zpoe$('ktor' + ' {');
    $receiver.indentation = $receiver.indentation + 1 | 0;
    try {
      var $receiver_0 = 'deployment';
      $receiver.line_61zpoe$($receiver_0 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var $receiver_1 = 'port = 8080';
        $receiver.line_61zpoe$($receiver_1);
        var $receiver_2 = 'port = ${?PORT}';
        $receiver.line_61zpoe$($receiver_2);
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
      var $receiver_3 = 'application';
      $receiver.line_61zpoe$($receiver_3 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var $receiver_4 = 'modules = [ ' + info.artifactGroup + '.ApplicationKt.main ]';
        $receiver.line_61zpoe$($receiver_4);
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
    var $receiver_0 = 'package ' + info.artifactGroup;
    $receiver.line_61zpoe$($receiver_0);
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
      var $receiver_1 = 'import ' + p + '.*';
      $receiver.line_61zpoe$($receiver_1);
    }
    $receiver.line_61zpoe$('');
    if (info.ktorVer.compareTo_11rb$(Versions_getInstance().V092) >= 0) {
      var $receiver_2 = 'fun main(args: Array<String>): Unit = ' + info.developmentEngineFQ + '.main(args)';
      $receiver.line_61zpoe$($receiver_2);
    }
     else {
      var $receiver_3 = 'fun main(args: Array<String>): Unit = ' + info.developmentPackage + '.main(args)';
      $receiver.line_61zpoe$($receiver_3);
    }
    $receiver.line_61zpoe$('');
    tmp$_1 = info.featuresToInclude.iterator();
    while (tmp$_1.hasNext()) {
      var feat_0 = tmp$_1.next();
      feat_0.classes_j0vqe2$($receiver, info);
    }
    var $receiver_4 = 'fun Application.main()';
    $receiver.line_61zpoe$($receiver_4 + ' {');
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
        var $receiver_5 = 'get("/")';
        $receiver.line_61zpoe$($receiver_5 + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          var $receiver_6 = 'call.respondText("HELLO WORLD!")';
          $receiver.line_61zpoe$($receiver_6);
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
  function Versions() {
    Versions_instance = this;
    this.V092 = new SemVer('0.9.2');
    this.LAST = Versions_getInstance().V092;
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
  Object.defineProperty(package$start, 'KOTLIN_VERSION', {
    get: function () {
      return KOTLIN_VERSION;
    }
  });
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
  $$importsForInline$$.output = _;
  Object.defineProperty(package$start, 'includeWrapper', {
    get: get_includeWrapper,
    set: set_includeWrapper
  });
  package$start.updateHash = updateHash;
  package$start.main_kand9s$ = main;
  Object.defineProperty(package$start, 'hashParams', {
    get: get_hashParams
  });
  package$start.formUrlDecode_pdl1vz$ = formUrlDecode;
  package$start.formUrlEncode_ye33rp$ = formUrlEncode;
  package$start.formUrlEncode_jgmxsd$ = formUrlEncode_0;
  package$start.addDependencies = addDependencies;
  $$importsForInline$$['ktor-generator-js'] = $module$ktor_generator_js;
  package$start.build_6taknv$ = build;
  package$start.registerBuildButton = registerBuildButton;
  package$start.buildPomXml_j0vqe2$ = buildPomXml;
  Object.defineProperty(package$start, 'DOLLAR', {
    get: function () {
      return DOLLAR;
    }
  });
  package$start.buildBuildGradle_j0vqe2$ = buildBuildGradle;
  package$start.buildApplicationConf_j0vqe2$ = buildApplicationConf;
  package$start.buildApplicationKt_j0vqe2$ = buildApplicationKt;
  package$start.handleFiltering = handleFiltering;
  package$start.removeLoading = removeLoading;
  Object.defineProperty(package$start, 'Versions', {
    get: Versions_getInstance
  });
  build$lambda$ObjectLiteral.prototype.add_dkzqdg$ = FileContainer.prototype.add_dkzqdg$;
  EmptyContinuation = new EmptyContinuation$ObjectLiteral();
  KOTLIN_VERSION = '1.2.41';
  defaultArtifactGroup = 'com.example';
  defaultArtifactName = 'ktor-demo';
  defaultKtorVersion = Versions_getInstance().LAST.version;
  defaultKtorEngine = 'netty';
  insideIframe = lazy(insideIframe$lambda);
  hashParams = lazy(hashParams$lambda);
  DOLLAR = 36;
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}));
