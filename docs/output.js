(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-generator'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-generator'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
    }
    if (typeof this['ktor-generator'] === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'ktor-generator' was not found. Please, check whether 'ktor-generator' is loaded prior to 'output'.");
    }
    root.output = factory(typeof output === 'undefined' ? {} : output, kotlin, this['ktor-generator']);
  }
}(this, function (_, Kotlin, $module$ktor_generator) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var coroutines = Kotlin.kotlin.coroutines;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var startCoroutine = Kotlin.kotlin.coroutines.startCoroutine_x18nsh$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var start = $module$ktor_generator.io.ktor.start;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var util = $module$ktor_generator.io.ktor.start.util;
  var toString = $module$ktor_generator.io.ktor.start.util.toString_ecs3bj$;
  var SwaggerModel = $module$ktor_generator.io.ktor.start.swagger.SwaggerModel;
  var Throwable = Error;
  var SwaggerGenerator = $module$ktor_generator.io.ktor.start.swagger.SwaggerGenerator;
  var ensureNotNull = Kotlin.ensureNotNull;
  var features = $module$ktor_generator.io.ktor.start.features;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var ProjectType = $module$ktor_generator.io.ktor.start.ProjectType;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var formUrlEncode = $module$ktor_generator.io.ktor.start.util.formUrlEncode_jgmxsd$;
  var FeatureSet = $module$ktor_generator.io.ktor.start.FeatureSet;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var formUrlDecode = $module$ktor_generator.io.ktor.start.util.formUrlDecode_pdl1vz$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var SemVer = $module$ktor_generator.io.ktor.start.util.SemVer;
  var KtorEngine = $module$ktor_generator.io.ktor.start.KtorEngine;
  var BuildInfo = $module$ktor_generator.io.ktor.start.BuildInfo;
  var project = $module$ktor_generator.io.ktor.start.project;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var generate = $module$ktor_generator.io.ktor.start.util.generate_maf521$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var equals = Kotlin.equals;
  var numberToInt = Kotlin.numberToInt;
  CancelException.prototype = Object.create(RuntimeException.prototype);
  CancelException.prototype.constructor = CancelException;
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
  var Result = Kotlin.kotlin.Result;
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  function await$lambda(this$await) {
    return function (it) {
      this$await.then(getCallableRef('resume', function ($receiver, value) {
        $receiver.resumeWith_tl1gpc$(new Result(value));
        return Unit;
      }.bind(null, it)), getCallableRef('resumeWithException', function ($receiver, exception) {
        $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
        return Unit;
      }.bind(null, it)));
      return Unit;
    };
  }
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
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
            this.result_0 = suspendCoroutine$lambda(await$lambda(this.local$$receiver))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
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
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
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
    this.context_6qs5s0$_0 = coroutines.EmptyCoroutineContext;
  }
  Object.defineProperty(EmptyContinuation$ObjectLiteral.prototype, 'context', {
    get: function () {
      return this.context_6qs5s0$_0;
    }
  });
  EmptyContinuation$ObjectLiteral.prototype.resumeWith_tl1gpc$ = function (result) {
    if (result.isFailure) {
      console.error(result.exceptionOrNull());
    }
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
          closure$continuation.resumeWith_tl1gpc$(new Result(ff));
        }
         else {
          var $receiver = closure$continuation;
          var exception = new CancelException();
          $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
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
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
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
            this.result_0 = suspendCoroutine$lambda_0(dialogOpenFile$lambda)(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
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
      closure$c.resumeWith_tl1gpc$(new Result(tmp$_1));
      return Unit;
    };
  }
  function read$lambda$lambda_0(closure$c) {
    return function (it) {
      var $receiver = closure$c;
      var exception = RuntimeException_init_0('onerror');
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
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
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
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
            this.result_0 = suspendCoroutine$lambda_1(read$lambda(this.local$$receiver))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
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
            if (endsWith(this.local$file.name, '.json') || endsWith(this.local$file.name, '.yaml')) {
              this.state_0 = 3;
              this.result_0 = read(this.local$file, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw IllegalStateException_init('Not a JSON or YAML file'.toString());
            }

          case 3:
            var jsonStr = toString(this.result_0, util.UTF8);
            var model = SwaggerModel.Companion.parseJsonOrYaml_puj7f4$(jsonStr, this.local$file.name);
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
          default:this.state_0 = 10;
            throw new Error('State Machine Unreachable execution');
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
    tmp$ = start.Versions.ALL;
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
    var dep = features.ALL_FEATURES_BY_ID.get_11rb$(depId);
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
  var Map = Kotlin.kotlin.collections.Map;
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
    jQuery(str_6).val((tmp$_12 = (tmp$_11 = params.get_11rb$('project-type')) != null ? firstOrNull(tmp$_11) : null) != null ? tmp$_12 : ProjectType.Gradle.id);
    var dependencies = new DependencyChecker(hash);
    tmp$_13 = features.ALL_FEATURES.iterator();
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
    window.history.pushState(jsObject([]), document.title, ((tmp$_1 = document.location) != null ? tmp$_1.pathname : null) + '#' + formUrlEncode(items));
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
    var $receiver = features.ALL_FEATURES;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var str = '#artifact-' + element.id;
      if (get_checked(jQuery(str)))
        destination.add_11rb$(element);
    }
    var features_0 = new FeatureSet(destination);
    tmp$ = features.ALL_FEATURES.iterator();
    loop_label: while (tmp$.hasNext()) {
      var feature = tmp$.next();
      var str_0 = '#artifact-' + feature.id;
      var selector = jQuery(str_0);
      var tmp$_1 = features_0.all.contains_11rb$(feature);
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
      var indeterminate = features_0.transitive.contains_11rb$(feature);
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
  function addDependencies() {
    addDependenciesKind('server', features.ALL_SERVER_FEATURES);
    addDependenciesKind('client', features.ALL_CLIENT_FEATURES);
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
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
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
  var ZipBuilder_init = $module$ktor_generator.io.ktor.start.util.ZipBuilder;
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
            var $receiver = features.ALL_FEATURES;
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
            tmp$ = features.ALL_FEATURES.iterator();
            while (tmp$.hasNext()) {
              var dependency = tmp$.next();
              var toInclude = dependenciesToInclude.contains_11rb$(dependency);
              println('DEPENDENCY: ' + dependency + ' :: include=' + toInclude);
            }

            this.local$info = new BuildInfo(get_includeWrapper(), ProjectType.Companion.invoke_61zpoe$(this.local$projectType), new SemVer(ktorVersion), this.local$artifactName, this.local$artifactGroup, artifactVersion, KtorEngine.Companion.invoke_61zpoe$(this.local$ktorEngine), void 0, build$lambda);
            this.exceptionState_0 = 2;
            this.local$zb = new ZipBuilder_init();
            var tmp$_1;
            this.state_0 = 1;
            this.result_0 = generate(this.local$info, plus(plus(listOf_0(project.ApplicationKt), dependenciesToInclude), swaggerGenerators), this);
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
                  console.log(toString(result.data, util.UTF8));
                }
                 catch (e_0) {
                  if (Kotlin.isType(e_0, Throwable)) {
                    console.log('<binary file>');
                  }
                   else
                    throw e_0;
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
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
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
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
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
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
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
  package$start.addDependencies = addDependencies;
  package$start.addDependenciesKind_vt7u6r$ = addDependenciesKind;
  $$importsForInline$$['ktor-generator'] = $module$ktor_generator;
  package$start.build_6taknv$ = build;
  Object.defineProperty(package$start, 'isLocalEnv', {
    get: get_isLocalEnv
  });
  package$start.registerBuildButton = registerBuildButton;
  package$start.handleFiltering = handleFiltering;
  package$start.handleFiltering_61zpoe$ = handleFiltering_0;
  package$start.removeLoading = removeLoading;
  package$start.registerKeyboardUsability = registerKeyboardUsability;
  EmptyContinuation = new EmptyContinuation$ObjectLiteral();
  windowInputFile = null;
  selectedFiles = [];
  swaggerModels = ArrayList_init();
  swaggerGenerators = emptyList();
  defaultArtifactGroup = 'com.example';
  defaultArtifactName = 'ktor-demo';
  defaultArtifactVersion = '0.0.1-SNAPSHOT';
  defaultKtorVersion = start.Versions.LAST.version;
  defaultKtorEngine = 'netty';
  artifactGroupId = 'artifact-group';
  artifactNameId = 'artifact-name';
  artifactVersionId = 'artifact-version';
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}));
