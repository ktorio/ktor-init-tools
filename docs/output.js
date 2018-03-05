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
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Throwable = Error;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var equals = Kotlin.equals;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toChar = Kotlin.toChar;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var numberToByte = Kotlin.numberToByte;
  var throwCCE = Kotlin.throwCCE;
  var jq = defineInlineFunction('output.jq_61zpoe$', function (str) {
    return jQuery(str);
  });
  var jq_0 = defineInlineFunction('output.jq_lt8gi4$', function (str) {
    return jQuery(str);
  });
  var on = defineInlineFunction('output.on_nsccip$', function ($receiver, name, event) {
    return $receiver.on(name, event);
  });
  var each = defineInlineFunction('output.each_4tgbmb$', function ($receiver, event) {
    $receiver.each(event);
  });
  var change = defineInlineFunction('output.change_tue5ot$', function ($receiver, event) {
    return $receiver.change(event);
  });
  var DOLLAR;
  function main(args) {
    addDependencies();
    registerBuildButton();
    handleFiltering();
    removeLoading();
  }
  function addDependencies() {
    var tmp$;
    var str = '#dependencies';
    var deps = jQuery(str);
    deps.text('');
    tmp$ = dependencies.iterator();
    while (tmp$.hasNext()) {
      var dependency = tmp$.next();
      var str_0 = "<label for='artifact-" + dependency.id + "' class='artifact' />";
      var tmp$_0 = jQuery(str_0);
      var str_1 = "<div class='title' />";
      var tmp$_1 = jQuery(str_1);
      var str_2 = "<input id='artifact-" + dependency.id + "' type='checkbox' />";
      var tmp$_2 = tmp$_1.append(jQuery(str_2));
      var str_3 = '<span />';
      var tmp$_3 = tmp$_2.append(jQuery(str_3).text(' ' + dependency.title));
      var str_4 = "<span class='artifact-name' />";
      var tmp$_4 = tmp$_0.append(tmp$_3.append(jQuery(str_4).text(' (' + dependency.artifact + ')')));
      var str_5 = "<div class='subtitle' />";
      var tmp$_5 = jQuery(str_5).append(jQuery('<div />').text(dependency.description));
      var $receiver = jQuery('<div />');
      if (dependency.documentation != null) {
        $receiver.append(jQuery('<a />').attr('href', dependency.documentation).attr('target', '_blank').text('Documentation'));
      }
      deps.append(tmp$_4.append(tmp$_5.append($receiver)));
    }
  }
  function registerBuildButton$lambda$lambda$lambda(closure$ktorVersion, closure$developmentEngineFQ, closure$reposToInclude, closure$ktorEngine, closure$dependenciesToInclude) {
    return function ($receiver) {
      var $receiver_0 = 'buildscript';
      $receiver.line_61zpoe$($receiver_0 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var closure$ktorVersion_0 = closure$ktorVersion;
        $receiver.line_61zpoe$("ext.kotlin_version = '1.2.30'");
        $receiver.line_61zpoe$("ext.ktor_version = '" + closure$ktorVersion_0 + "'");
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
      $receiver.line_61zpoe$('mainClassName = ' + '"' + closure$developmentEngineFQ + '"');
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
      var $receiver_1 = 'repositories';
      $receiver.line_61zpoe$($receiver_1 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var tmp$;
        tmp$ = closure$reposToInclude.iterator();
        while (tmp$.hasNext()) {
          var repo = tmp$.next();
          switch (repo) {
            case 'jcenter':
              $receiver.line_61zpoe$('jcenter()');
              break;
            case 'ktor':
              $receiver.line_61zpoe$("maven { url 'https://kotlin.bintray.com/ktor' }");
              break;
            default:$receiver.line_61zpoe$("maven { url '" + repo + "' }");
              break;
          }
        }
      }
      finally {
        $receiver.indentation = $receiver.indentation - 1 | 0;
      }
      $receiver.line_61zpoe$('}');
      $receiver.line_61zpoe$('');
      var $receiver_2 = 'dependencies';
      $receiver.line_61zpoe$($receiver_2 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var closure$ktorEngine_0 = closure$ktorEngine;
        var closure$dependenciesToInclude_0 = closure$dependenciesToInclude;
        var tmp$_0;
        $receiver.line_61zpoe$('compile "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version"');
        $receiver.line_61zpoe$('compile ' + '"' + 'io.ktor:ktor-server-' + closure$ktorEngine_0 + ':' + String.fromCharCode(DOLLAR) + 'ktor_version' + '"');
        $receiver.line_61zpoe$('compile "ch.qos.logback:logback-classic:$logback_version"');
        $receiver.line_61zpoe$('');
        tmp$_0 = closure$dependenciesToInclude_0.iterator();
        while (tmp$_0.hasNext()) {
          var dep = tmp$_0.next();
          $receiver.line_61zpoe$('compile ' + '"' + dep.artifact + '"');
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
      return Unit;
    };
  }
  function registerBuildButton$lambda$lambda$lambda_0(closure$artifactGroup) {
    return function ($receiver) {
      $receiver.line_61zpoe$('ktor' + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var closure$artifactGroup_0 = closure$artifactGroup;
        $receiver.line_61zpoe$('deployment' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('port = 8080');
        }
        finally {
          $receiver.indentation = $receiver.indentation - 1 | 0;
        }
        $receiver.line_61zpoe$('}');
        $receiver.line_61zpoe$('application' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('modules = [ ' + closure$artifactGroup_0 + '.ApplicationKt.main ]');
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
      return Unit;
    };
  }
  function registerBuildButton$lambda$lambda$lambda_1(closure$artifactGroup, closure$dependenciesToInclude, closure$developmentPackage) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$artifactGroup);
      $receiver.line_61zpoe$('');
      $receiver.line_61zpoe$('import io.ktor.application.*');
      $receiver.line_61zpoe$('import io.ktor.response.*');
      $receiver.line_61zpoe$('import io.ktor.routing.*');
      if (closure$dependenciesToInclude.contains_11rb$(Dependencies_getInstance().HTML_DSL)) {
        $receiver.line_61zpoe$('import io.ktor.html.*');
        $receiver.line_61zpoe$('import kotlinx.html.*');
      }
      $receiver.line_61zpoe$('');
      $receiver.line_61zpoe$('fun main(args: Array<String>): Unit = ' + closure$developmentPackage + '.main(args)');
      $receiver.line_61zpoe$('');
      var $receiver_0 = 'fun Application.main()';
      $receiver.line_61zpoe$($receiver_0 + ' {');
      $receiver.indentation = $receiver.indentation + 1 | 0;
      try {
        var closure$dependenciesToInclude_0 = closure$dependenciesToInclude;
        $receiver.line_61zpoe$('routing' + ' {');
        $receiver.indentation = $receiver.indentation + 1 | 0;
        try {
          $receiver.line_61zpoe$('get("/")' + ' {');
          $receiver.indentation = $receiver.indentation + 1 | 0;
          try {
            $receiver.line_61zpoe$('call.respondText("HELLO WORLD!")');
          }
          finally {
            $receiver.indentation = $receiver.indentation - 1 | 0;
          }
          $receiver.line_61zpoe$('}');
          $receiver.line_61zpoe$('');
          if (closure$dependenciesToInclude_0.contains_11rb$(Dependencies_getInstance().HTML_DSL)) {
            $receiver.line_61zpoe$('get("/html")' + ' {');
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
      return Unit;
    };
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function registerBuildButton$lambda$lambda(closure$ktorEngine, closure$projectType, closure$artifactName, closure$ktorVersion, closure$reposToInclude, closure$dependenciesToInclude, closure$artifactGroup) {
    return function ($receiver) {
      var developmentPackage = 'io.ktor.server.' + closure$ktorEngine;
      var developmentEngineFQ = developmentPackage + '.DevelopmentEngine';
      switch (closure$projectType) {
        case 'maven':
          throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported maven for now');
        case 'gradle':
          $receiver.add_wvmfjy$(closure$artifactName + '/build.gradle', indenter(registerBuildButton$lambda$lambda$lambda(closure$ktorVersion, developmentEngineFQ, closure$reposToInclude, closure$ktorEngine, closure$dependenciesToInclude)));
          break;
        default:throw RuntimeException_init('Unknown project type ' + closure$projectType);
      }
      $receiver.add_wvmfjy$(closure$artifactName + '/resources/application.conf', indenter(registerBuildButton$lambda$lambda$lambda_0(closure$artifactGroup)));
      $receiver.add_wvmfjy$(closure$artifactName + '/src/Application.kt', indenter(registerBuildButton$lambda$lambda$lambda_1(closure$artifactGroup, closure$dependenciesToInclude, developmentPackage)));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function registerBuildButton$lambda() {
    var tmp$;
    var str = '#project-type';
    var projectType = jQuery(str).val();
    var str_0 = '#ktor-engine';
    var ktorEngine = jQuery(str_0).val();
    var str_1 = '#ktor-version';
    var ktorVersion = jQuery(str_1).val();
    var str_2 = '#artifact-group';
    var artifactGroup = jQuery(str_2).val();
    var str_3 = '#artifact-name';
    var artifactName = jQuery(str_3).val();
    println('Generating ktor-sample.zip...');
    println('projectType: ' + projectType);
    println('ktorEngine: ' + ktorEngine);
    println('artifactGroup: ' + artifactGroup);
    println('artifactName: ' + artifactName);
    var $receiver = dependencies;
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
    tmp$ = dependencies.iterator();
    while (tmp$.hasNext()) {
      var dependency = tmp$.next();
      var toInclude = dependenciesToInclude.contains_11rb$(dependency);
      println('DEPENDENCY: ' + dependency + ' :: include=' + toInclude);
    }
    var tmp$_1 = listOf(['jcenter', 'ktor']);
    var destination_0 = ArrayList_init(collectionSizeOrDefault(dependenciesToInclude, 10));
    var tmp$_2;
    tmp$_2 = dependenciesToInclude.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination_0.add_11rb$(item.repo);
    }
    var reposToInclude = toSet(plus(tmp$_1, destination_0));
    try {
      download('ktor-sample-' + projectType + '-' + ktorEngine + '-' + artifactGroup + '-' + artifactName + '.zip', buildZip(registerBuildButton$lambda$lambda(ktorEngine, projectType, artifactName, ktorVersion, reposToInclude, dependenciesToInclude, artifactGroup)));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        window.alert("Couldn't generate ZIP. Reason: " + e);
      }
       else
        throw e;
    }
    return Unit;
  }
  function registerBuildButton() {
    var str = '#buildButton';
    jQuery(str).removeAttr('disabled').on('click', registerBuildButton$lambda);
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
  function Dependency(repo, artifact, id, title, description, documentation) {
    if (documentation === void 0)
      documentation = null;
    this.repo = repo;
    this.artifact = artifact;
    this.id = id;
    this.title = title;
    this.description = description;
    this.documentation = documentation;
  }
  Dependency.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dependency',
    interfaces: []
  };
  Dependency.prototype.component1 = function () {
    return this.repo;
  };
  Dependency.prototype.component2 = function () {
    return this.artifact;
  };
  Dependency.prototype.component3 = function () {
    return this.id;
  };
  Dependency.prototype.component4 = function () {
    return this.title;
  };
  Dependency.prototype.component5 = function () {
    return this.description;
  };
  Dependency.prototype.component6 = function () {
    return this.documentation;
  };
  Dependency.prototype.copy_bz2au1$ = function (repo, artifact, id, title, description, documentation) {
    return new Dependency(repo === void 0 ? this.repo : repo, artifact === void 0 ? this.artifact : artifact, id === void 0 ? this.id : id, title === void 0 ? this.title : title, description === void 0 ? this.description : description, documentation === void 0 ? this.documentation : documentation);
  };
  Dependency.prototype.toString = function () {
    return 'Dependency(repo=' + Kotlin.toString(this.repo) + (', artifact=' + Kotlin.toString(this.artifact)) + (', id=' + Kotlin.toString(this.id)) + (', title=' + Kotlin.toString(this.title)) + (', description=' + Kotlin.toString(this.description)) + (', documentation=' + Kotlin.toString(this.documentation)) + ')';
  };
  Dependency.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.repo) | 0;
    result = result * 31 + Kotlin.hashCode(this.artifact) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.documentation) | 0;
    return result;
  };
  Dependency.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.repo, other.repo) && Kotlin.equals(this.artifact, other.artifact) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.documentation, other.documentation)))));
  };
  function Dependencies() {
    Dependencies_instance = this;
    this.HTML_DSL = new Dependency('jcenter', 'io.ktor:ktor-html-builder:$ktor_version', 'html-dsl', 'HTML DSL', 'Generate HTML using Kotlin code');
    this.TPL_FREEMARKER = new Dependency('ktor', 'io.ktor:ktor-freemarker:$ktor_version', 'freemarker', 'Freemarker', 'Serve HTML content using Apache freemarker', 'http://ktor.io/features/freemarker.html');
    this.TPL_VELOCITY = new Dependency('ktor', 'io.ktor:ktor-velocity:$ktor_version', 'velocity', 'Velocity', 'Serve HTML content using Apache velocity');
    this.AUTH = new Dependency('ktor', 'io.ktor:ktor-auth:$ktor_version', 'auth', 'Authentication', 'Handle Basic and Digest HTTP Auth, Form authentication and OAuth 1a and 2', 'http://ktor.io/features/authentication.html');
    this.AUTH_JWT = new Dependency('ktor', 'io.ktor:ktor-auth-jwt:$ktor_version', 'auth-jwt', 'Authentication JWT', 'Handle JWT authentication', 'http://ktor.io/features/authentication.html#jwt');
    this.AUTH_LDAP = new Dependency('ktor', 'io.ktor:ktor-auth-ldap:$ktor_version', 'auth-ldap', 'Authentication LDAP', 'Handle JDAP authentication', 'http://ktor.io/features/authentication.html#ldap');
    this.JSON_GSON = new Dependency('ktor', 'io.ktor:ktor-gson:$ktor_version', 'ktor-gson', 'GSON', 'Handles JSON serialization using GSON library');
    this.JSON_JACKSON = new Dependency('ktor', 'io.ktor:ktor-jackson:$ktor_version', 'ktor-jackson', 'Jackson', 'Handles JSON serialization using Jackson library');
    this.LOCATIONS = new Dependency('ktor', 'io.ktor:ktor-locations:$ktor_version', 'ktor-locations', 'Locations', 'Allows to define route locations in a typed way', 'http://ktor.io/features/locations.html');
    this.METRICS = new Dependency('ktor', 'io.ktor:ktor-metrics:$ktor_version', 'ktor-metrics', 'Metrics', 'Adds supports for monitoring several metrics');
    this.SESSIONS = new Dependency('ktor', 'io.ktor:ktor-sessions:$ktor_version', 'ktor-sessions', 'Sessions', 'Adds supports for sessions: with the payload in the client or the server', 'http://ktor.io/features/sessions.html');
    this.WEBSOCKETS = new Dependency('ktor', 'io.ktor:ktor-websockets:$ktor_version', 'ktor-websockets', 'WebSockets', 'Adds WebSockets support for bidirectional communication with the client');
    this.RAW_SOCKETS = new Dependency('ktor', 'io.ktor:ktor-network:$ktor_version', 'ktor-network', 'Raw Sockets', 'Adds Raw Socket support for listening and connecting to tcp and udp sockets', 'http://ktor.io/servers/raw-sockets.html');
    this.HTTP_CLIENT = new Dependency('ktor', 'io.ktor:ktor-client-apache:$ktor_version', 'ktor-client-apache', 'HTTP Client', 'Adds support for doing HTTP requests', 'http://ktor.io/clients/http-client.html');
  }
  Dependencies.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Dependencies',
    interfaces: []
  };
  var Dependencies_instance = null;
  function Dependencies_getInstance() {
    if (Dependencies_instance === null) {
      new Dependencies();
    }
    return Dependencies_instance;
  }
  var dependencies;
  function Indenter() {
    this.indentation = 0;
    this.lines_0 = ArrayList_init();
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
    var $receiver = this.lines_0;
    var element = Indenter$Indents_getInstance().get_za3lpa$(this.indentation) + str;
    $receiver.add_11rb$(element);
  };
  Indenter.prototype.line_a4mwiz$ = defineInlineFunction('output.Indenter.line_a4mwiz$', function (str, callback) {
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
  Indenter.prototype.invoke_79xod4$ = defineInlineFunction('output.Indenter.invoke_79xod4$', function ($receiver, callback) {
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
  Indenter.prototype.unaryPlus_pdl1vz$ = defineInlineFunction('output.Indenter.unaryPlus_pdl1vz$', function ($receiver) {
    this.line_61zpoe$($receiver);
  });
  Indenter.prototype.indent_o14v8n$ = defineInlineFunction('output.Indenter.indent_o14v8n$', function (callback) {
    this.indentation = this.indentation + 1 | 0;
    try {
      callback();
    }
    finally {
      this.indentation = this.indentation - 1 | 0;
    }
  });
  Indenter.prototype.toString = function () {
    return joinToString(this.lines_0, '\n');
  };
  Indenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Indenter',
    interfaces: []
  };
  function indenter(callback) {
    var $receiver = new Indenter();
    callback($receiver);
    return $receiver.toString();
  }
  function ZipBuilder() {
    this.files = LinkedHashMap_init();
  }
  function ZipBuilder$FileInfo(name, data, date) {
    this.name = name;
    this.data = data;
    this.date = date;
  }
  ZipBuilder$FileInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileInfo',
    interfaces: []
  };
  ZipBuilder.prototype.addParentDir_urj10$ = function (name, date) {
    if (equals(name, ''))
      return;
    this.addParentDir_urj10$(substringBeforeLast(name, 47, ''), date);
    var dname = name + '/';
    var $receiver = this.files;
    var value = new ZipBuilder$FileInfo(dname, new Int8Array([]), date);
    $receiver.put_xwzc9p$(dname, value);
  };
  ZipBuilder.prototype.add_rnye2o$ = function (name, data, date) {
    if (date === void 0)
      date = new Date();
    this.addParentDir_urj10$(substringBeforeLast(name, 47, ''), date);
    var $receiver = this.files;
    var value = new ZipBuilder$FileInfo(name, data, date);
    $receiver.put_xwzc9p$(name, value);
  };
  ZipBuilder.prototype.add_wvmfjy$ = function (name, data, charset, date) {
    if (charset === void 0)
      charset = UTF8_getInstance();
    if (date === void 0)
      date = new Date();
    this.add_rnye2o$(name, toByteArray(data, charset), date);
  };
  function ZipBuilder$toByteArray$CenterEntry(fileNameBytes, crc32, headerOffset, size, date) {
    this.fileNameBytes = fileNameBytes;
    this.crc32 = crc32;
    this.headerOffset = headerOffset;
    this.size = size;
    this.date = date;
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
      var element = new ZipBuilder$toByteArray$CenterEntry(fileNameBytes, crc32_0, headerOffset, fileData.length, file.date);
      centerEntries.add_11rb$(element);
    }
    var directoryStart = $this.size;
    tmp$_0 = centerEntries.iterator();
    while (tmp$_0.hasNext()) {
      var center = tmp$_0.next();
      $this.u32_le_za3lpa$(33639248);
      $this.u16_le_za3lpa$(20);
      $this.u16_le_za3lpa$(10);
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
      $this.u32_le_za3lpa$(0);
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
    return $receiver.getDate() | $receiver.getMonth() + 1 << 5 | $receiver.getFullYear() - 1980 << 9;
  };
  ZipBuilder.prototype.toDosTime_0 = function ($receiver) {
    return $receiver.getSeconds() / 2 | 0 | $receiver.getMinutes() << 5 | $receiver.getHours() << 11;
  };
  ZipBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZipBuilder',
    interfaces: []
  };
  function buildZip(generate) {
    var zb = new ZipBuilder();
    generate(zb);
    return zb.toByteArray();
  }
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
      }
    }
  };
  UTF8.prototype.encode_1sr9yu$ = function (out, src, start, end) {
    for (var n = start; n < end; n++) {
      var codePoint = src.charCodeAt(n) | 0;
      if ((codePoint & ~127) === 0) {
        out.u8_za3lpa$(codePoint);
      }
       else {
        if ((codePoint & ~2047) === 0) {
          out.u8_za3lpa$(codePoint >> 6 & 31 | 192);
        }
         else if ((codePoint & ~65535) === 0) {
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
  ASCII.prototype.encode_1sr9yu$ = function (out, src, start, end) {
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
    charset.encode_1sr9yu$($this, $receiver, 0, $receiver.length);
    return $this.toByteArray();
  }
  function jsObject(pairs) {
    var tmp$;
    var obj = {};
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var key = tmp$_0.get_za3lpa$(0);
      var value = tmp$_0.get_za3lpa$(1);
      obj[key] = value;
    }
    return obj;
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
  ByteArrayOutputStream.prototype.build_8xvj6p$ = defineInlineFunction('output.ByteArrayOutputStream.build_8xvj6p$', function (builder) {
    builder(this);
    return this.toByteArray();
  });
  ByteArrayOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayOutputStream',
    interfaces: []
  };
  var buildByteArray = defineInlineFunction('output.buildByteArray_8xvj6p$', wrapFunction(function () {
    var ByteArrayOutputStream_init = _.ByteArrayOutputStream;
    return function (builder) {
      var $this = new ByteArrayOutputStream_init();
      builder($this);
      return $this.toByteArray();
    };
  }));
  function CRC32() {
    CRC32_instance = this;
    var $receiver = new Int32Array(256);
    var tmp$;
    var POLY = (new Kotlin.Long(-306674912, 0)).toInt();
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
  function download(filename, data, type) {
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
  _.jq_61zpoe$ = jq;
  _.jq_lt8gi4$ = jq_0;
  _.on_nsccip$ = on;
  _.each_4tgbmb$ = each;
  _.change_tue5ot$ = change;
  Object.defineProperty(_, 'DOLLAR', {
    get: function () {
      return DOLLAR;
    }
  });
  _.main_kand9s$ = main;
  $$importsForInline$$.output = _;
  _.addDependencies = addDependencies;
  _.registerBuildButton = registerBuildButton;
  _.handleFiltering = handleFiltering;
  _.removeLoading = removeLoading;
  _.Dependency = Dependency;
  Object.defineProperty(_, 'Dependencies', {
    get: Dependencies_getInstance
  });
  Object.defineProperty(_, 'dependencies', {
    get: function () {
      return dependencies;
    }
  });
  Object.defineProperty(Indenter, 'Indents', {
    get: Indenter$Indents_getInstance
  });
  _.Indenter = Indenter;
  _.indenter_gyo5pe$ = indenter;
  ZipBuilder.FileInfo = ZipBuilder$FileInfo;
  _.ZipBuilder = ZipBuilder;
  _.buildZip_xtijp9$ = buildZip;
  _.Charset = Charset;
  Object.defineProperty(_, 'UTF8', {
    get: UTF8_getInstance
  });
  Object.defineProperty(_, 'ASCII', {
    get: ASCII_getInstance
  });
  _.toString_jcr7nl$ = toString;
  _.toByteArray_234o2j$ = toByteArray;
  _.jsObject_qgjp2i$ = jsObject;
  _.ByteArrayOutputStream = ByteArrayOutputStream;
  _.buildByteArray_8xvj6p$ = buildByteArray;
  Object.defineProperty(_, 'CRC32', {
    get: CRC32_getInstance
  });
  _.crc32_964n91$ = crc32;
  _.download_cyqrs4$ = download;
  DOLLAR = 36;
  var $receiver = Object.values(Dependencies_getInstance());
  var destination = ArrayList_init();
  var tmp$;
  for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
    var element = $receiver[tmp$];
    if (Kotlin.isType(element, Dependency))
      destination.add_11rb$(element);
  }
  dependencies = destination;
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}));

//# sourceMappingURL=output.js.map
