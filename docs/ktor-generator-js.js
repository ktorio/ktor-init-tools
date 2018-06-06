(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-generator-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-generator-js'.");
    }
    root['ktor-generator-js'] = factory(typeof this['ktor-generator-js'] === 'undefined' ? {} : this['ktor-generator-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var numberToByte = Kotlin.numberToByte;
  var wrapFunction = Kotlin.wrapFunction;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var toChar = Kotlin.toChar;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Comparable = Kotlin.kotlin.Comparable;
  var equals = Kotlin.equals;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
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
  function BuildInfo(ktorVersion, developmentPackage, artifactName, artifactGroup, developmentEngineFQ, reposToInclude, dependenciesToInclude, ktorEngine) {
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
    return this.ktorVersion;
  };
  BuildInfo.prototype.component2 = function () {
    return this.developmentPackage;
  };
  BuildInfo.prototype.component3 = function () {
    return this.artifactName;
  };
  BuildInfo.prototype.component4 = function () {
    return this.artifactGroup;
  };
  BuildInfo.prototype.component5 = function () {
    return this.developmentEngineFQ;
  };
  BuildInfo.prototype.component6 = function () {
    return this.reposToInclude;
  };
  BuildInfo.prototype.component7 = function () {
    return this.dependenciesToInclude;
  };
  BuildInfo.prototype.component8 = function () {
    return this.ktorEngine;
  };
  BuildInfo.prototype.copy_qxt8fu$ = function (ktorVersion, developmentPackage, artifactName, artifactGroup, developmentEngineFQ, reposToInclude, dependenciesToInclude, ktorEngine) {
    return new BuildInfo(ktorVersion === void 0 ? this.ktorVersion : ktorVersion, developmentPackage === void 0 ? this.developmentPackage : developmentPackage, artifactName === void 0 ? this.artifactName : artifactName, artifactGroup === void 0 ? this.artifactGroup : artifactGroup, developmentEngineFQ === void 0 ? this.developmentEngineFQ : developmentEngineFQ, reposToInclude === void 0 ? this.reposToInclude : reposToInclude, dependenciesToInclude === void 0 ? this.dependenciesToInclude : dependenciesToInclude, ktorEngine === void 0 ? this.ktorEngine : ktorEngine);
  };
  BuildInfo.prototype.toString = function () {
    return 'BuildInfo(ktorVersion=' + Kotlin.toString(this.ktorVersion) + (', developmentPackage=' + Kotlin.toString(this.developmentPackage)) + (', artifactName=' + Kotlin.toString(this.artifactName)) + (', artifactGroup=' + Kotlin.toString(this.artifactGroup)) + (', developmentEngineFQ=' + Kotlin.toString(this.developmentEngineFQ)) + (', reposToInclude=' + Kotlin.toString(this.reposToInclude)) + (', dependenciesToInclude=' + Kotlin.toString(this.dependenciesToInclude)) + (', ktorEngine=' + Kotlin.toString(this.ktorEngine)) + ')';
  };
  BuildInfo.prototype.hashCode = function () {
    var result = 0;
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
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ktorVersion, other.ktorVersion) && Kotlin.equals(this.developmentPackage, other.developmentPackage) && Kotlin.equals(this.artifactName, other.artifactName) && Kotlin.equals(this.artifactGroup, other.artifactGroup) && Kotlin.equals(this.developmentEngineFQ, other.developmentEngineFQ) && Kotlin.equals(this.reposToInclude, other.reposToInclude) && Kotlin.equals(this.dependenciesToInclude, other.dependenciesToInclude) && Kotlin.equals(this.ktorEngine, other.ktorEngine)))));
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
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
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
    this.documentation_ccfenr$_0 = 'https://ktor.io/features/freemarker.html';
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
  ByteArrayOutputStream.prototype.build_xuyaid$ = defineInlineFunction('ktor-generator-js.io.ktor.start.util.ByteArrayOutputStream.build_xuyaid$', function (builder) {
    builder(this);
    return this.toByteArray();
  });
  ByteArrayOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayOutputStream',
    interfaces: []
  };
  var buildByteArray = defineInlineFunction('ktor-generator-js.io.ktor.start.util.buildByteArray_xuyaid$', wrapFunction(function () {
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
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
  Indenter.prototype.line_a4mwiz$ = defineInlineFunction('ktor-generator-js.io.ktor.start.util.Indenter.line_a4mwiz$', function (str, callback) {
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
  Indenter.prototype.invoke_79xod4$ = defineInlineFunction('ktor-generator-js.io.ktor.start.util.Indenter.invoke_79xod4$', function ($receiver, callback) {
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
  Indenter.prototype.unaryPlus_pdl1vz$ = defineInlineFunction('ktor-generator-js.io.ktor.start.util.Indenter.unaryPlus_pdl1vz$', function ($receiver) {
    this.line_61zpoe$($receiver);
  });
  Indenter.prototype.indent_o14v8n$ = defineInlineFunction('ktor-generator-js.io.ktor.start.util.Indenter.indent_o14v8n$', function (callback) {
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
  var buildZip = defineInlineFunction('ktor-generator-js.io.ktor.start.util.buildZip_oi1qpb$', wrapFunction(function () {
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
  $$importsForInline$$['ktor-generator-js'] = _;
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
  ALL_FEATURES = listOf_0([HtmlDslFeature_getInstance(), CssDslFeature_getInstance(), FreemarkerFeature_getInstance(), VelocityFeature_getInstance(), AuthFeature_getInstance(), AuthJwtFeature_getInstance(), AuthLdapFeature_getInstance(), JsonGsonFeature_getInstance(), JsonJacksonFeature_getInstance(), LocationsFeature_getInstance(), MetricsFeature_getInstance(), SessionsFeature_getInstance(), WebsocketsFeature_getInstance(), HttpClientFeature_getInstance(), RawSocketsFeature_getInstance(), RawSocketsTlsFeature_getInstance()]);
  Kotlin.defineModule('ktor-generator-js', _);
  return _;
}));
