(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'ktor-generator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ktor-generator'.");
    }
    root['ktor-generator'] = factory(typeof this['ktor-generator'] === 'undefined' ? {} : this['ktor-generator'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var List = Kotlin.kotlin.collections.List;
  var throwCCE = Kotlin.throwCCE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Pair = Kotlin.kotlin.Pair;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var toByte = Kotlin.toByte;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toString = Kotlin.toString;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var reversed = Kotlin.kotlin.collections.reversed_tmsbgo$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var equals = Kotlin.equals;
  var Any = Object;
  var plus_0 = Kotlin.kotlin.collections.plus_qloxvw$;
  var toChar = Kotlin.toChar;
  var getCallableRef = Kotlin.getCallableRef;
  var unboxChar = Kotlin.unboxChar;
  var Math_0 = Math;
  var primitiveArrayConcat = Kotlin.primitiveArrayConcat;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var plus_1 = Kotlin.kotlin.collections.plus_iwxh38$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var Comparable = Kotlin.kotlin.Comparable;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Unit = Kotlin.kotlin.Unit;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var plus_2 = Kotlin.kotlin.collections.plus_khz7k3$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var numberToInt = Kotlin.numberToInt;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var getKClass = Kotlin.getKClass;
  var kotlin = Kotlin.kotlin;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Long = Kotlin.Long;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$anyClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.anyClass;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var Map = Kotlin.kotlin.collections.Map;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_8xshf9$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var L0 = Kotlin.Long.ZERO;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var toIntOrNull_0 = Kotlin.kotlin.text.toIntOrNull_6ic1pp$;
  var numberToLong = Kotlin.numberToLong;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_6ic1pp$;
  var numberToDouble = Kotlin.numberToDouble;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var toFloatArray = Kotlin.kotlin.collections.toFloatArray_zwy31$;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var toSet_0 = Kotlin.kotlin.collections.toSet_us0mfu$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var numberToByte = Kotlin.numberToByte;
  var decapitalize = Kotlin.kotlin.text.decapitalize_pdl1vz$;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_ui3wc7$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var Set = Kotlin.kotlin.collections.Set;
  var Regex = Kotlin.kotlin.text.Regex;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  Yaml$SingleContext.prototype = Object.create(Yaml$Context.prototype);
  Yaml$SingleContext.prototype.constructor = Yaml$SingleContext;
  Yaml$ScalarContext.prototype = Object.create(Yaml$Context.prototype);
  Yaml$ScalarContext.prototype.constructor = Yaml$ScalarContext;
  Yaml$NodeContext.prototype = Object.create(Yaml$Context.prototype);
  Yaml$NodeContext.prototype.constructor = Yaml$NodeContext;
  Yaml$ListContext.prototype = Object.create(Yaml$Context.prototype);
  Yaml$ListContext.prototype.constructor = Yaml$ListContext;
  Yaml$MapContext.prototype = Object.create(Yaml$Context.prototype);
  Yaml$MapContext.prototype.constructor = Yaml$MapContext;
  Yaml$PairContext.prototype = Object.create(Yaml$Context.prototype);
  Yaml$PairContext.prototype.constructor = Yaml$PairContext;
  Yaml$BeginIgnoreVisitor$visit$ObjectLiteral.prototype = Object.create(Yaml$Context.prototype);
  Yaml$BeginIgnoreVisitor$visit$ObjectLiteral.prototype.constructor = Yaml$BeginIgnoreVisitor$visit$ObjectLiteral;
  YamlSpec.prototype = Object.create(YamlParser.prototype);
  YamlSpec.prototype.constructor = YamlSpec;
  YamlDecoder$Encoding.prototype = Object.create(Enum.prototype);
  YamlDecoder$Encoding.prototype.constructor = YamlDecoder$Encoding;
  YamlDecoder.prototype = Object.create(YamlParser.prototype);
  YamlDecoder.prototype.constructor = YamlDecoder;
  YamlParser$Chomp.prototype = Object.create(Enum.prototype);
  YamlParser$Chomp.prototype.constructor = YamlParser$Chomp;
  YamlParser$Code.prototype = Object.create(Enum.prototype);
  YamlParser$Code.prototype.constructor = YamlParser$Code;
  YamlParser$Context.prototype = Object.create(Enum.prototype);
  YamlParser$Context.prototype.constructor = YamlParser$Context;
  YamlParser$Result$Failed.prototype = Object.create(YamlParser$Result.prototype);
  YamlParser$Result$Failed.prototype.constructor = YamlParser$Result$Failed;
  YamlParser$Result$Completed.prototype = Object.create(YamlParser$Result.prototype);
  YamlParser$Result$Completed.prototype.constructor = YamlParser$Result$Completed;
  YamlParser$Result$More.prototype = Object.create(YamlParser$Result.prototype);
  YamlParser$Result$More.prototype.constructor = YamlParser$Result$More;
  YamlParser$Escapable$Code.prototype = Object.create(YamlParser$Escapable.prototype);
  YamlParser$Escapable$Code.prototype.constructor = YamlParser$Escapable$Code;
  YamlParser$Escapable$Text.prototype = Object.create(YamlParser$Escapable.prototype);
  YamlParser$Escapable$Text.prototype.constructor = YamlParser$Escapable$Text;
  YamlParser$Companion.prototype = Object.create(YamlParser.prototype);
  YamlParser$Companion.prototype.constructor = YamlParser$Companion;
  BuildInfo.prototype = Object.create(BlockBuilder$Config.prototype);
  BuildInfo.prototype.constructor = BuildInfo;
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
  GsonClientFeature.prototype = Object.create(ClientFeature.prototype);
  GsonClientFeature.prototype.constructor = GsonClientFeature;
  LoggingClientFeature.prototype = Object.create(ClientFeature.prototype);
  LoggingClientFeature.prototype.constructor = LoggingClientFeature;
  UserAgentClientFeature.prototype = Object.create(ClientFeature.prototype);
  UserAgentClientFeature.prototype.constructor = UserAgentClientFeature;
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
  MustacheFeature.prototype = Object.create(ServerFeature.prototype);
  MustacheFeature.prototype.constructor = MustacheFeature;
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
  ThymeleafFeature.prototype = Object.create(ServerFeature.prototype);
  ThymeleafFeature.prototype.constructor = ThymeleafFeature;
  VelocityFeature.prototype = Object.create(ServerFeature.prototype);
  VelocityFeature.prototype.constructor = VelocityFeature;
  WebjarsFeature.prototype = Object.create(ServerFeature.prototype);
  WebjarsFeature.prototype.constructor = WebjarsFeature;
  WebsocketsFeature.prototype = Object.create(ServerFeature.prototype);
  WebsocketsFeature.prototype.constructor = WebsocketsFeature;
  RawSocketsFeature.prototype = Object.create(ServerFeature.prototype);
  RawSocketsFeature.prototype.constructor = RawSocketsFeature;
  RawSocketsTlsFeature.prototype = Object.create(ServerFeature.prototype);
  RawSocketsTlsFeature.prototype.constructor = RawSocketsTlsFeature;
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
  JsonRule$RangeLength.prototype = Object.create(JsonRule.prototype);
  JsonRule$RangeLength.prototype.constructor = JsonRule$RangeLength;
  JsonRule$UniqueItems.prototype = Object.create(JsonRule.prototype);
  JsonRule$UniqueItems.prototype.constructor = JsonRule$UniqueItems;
  JsonRule$Required.prototype = Object.create(JsonRule.prototype);
  JsonRule$Required.prototype.constructor = JsonRule$Required;
  JsonRule$Pattern.prototype = Object.create(JsonRule.prototype);
  JsonRule$Pattern.prototype.constructor = JsonRule$Pattern;
  JsonRule$Enumerable.prototype = Object.create(JsonRule.prototype);
  JsonRule$Enumerable.prototype.constructor = JsonRule$Enumerable;
  SwaggerGenerator$Kind.prototype = Object.create(Enum.prototype);
  SwaggerGenerator$Kind.prototype.constructor = SwaggerGenerator$Kind;
  SwaggerGenerator.prototype = Object.create(Block.prototype);
  SwaggerGenerator.prototype.constructor = SwaggerGenerator;
  SwaggerGeneratorInterface.prototype = Object.create(SwaggerGeneratorBase.prototype);
  SwaggerGeneratorInterface.prototype.constructor = SwaggerGeneratorInterface;
  SwaggerGeneratorRaw.prototype = Object.create(SwaggerGeneratorBase.prototype);
  SwaggerGeneratorRaw.prototype.constructor = SwaggerGeneratorRaw;
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
  SwaggerModel$Companion$SwVersion.prototype = Object.create(Enum.prototype);
  SwaggerModel$Companion$SwVersion.prototype.constructor = SwaggerModel$Companion$SwVersion;
  function Yaml() {
    Yaml_instance = this;
  }
  Yaml.prototype.load_61zpoe$ = function (text) {
    return this.load_fqrh44$(toByteArray(text, UTF8_getInstance()));
  };
  Yaml.prototype.load_fqrh44$ = function (bytes) {
    return this.load_0(YamlSpec_getInstance().yaml().tokenize_7x97xx$('load', bytes, false)).get_za3lpa$(0);
  };
  Yaml.prototype.loadAll_61zpoe$ = function (text) {
    return this.loadAll_fqrh44$(toByteArray(text, UTF8_getInstance()));
  };
  Yaml.prototype.loadAll_fqrh44$ = function (bytes) {
    return this.load_0(YamlSpec_getInstance().yaml().tokenize_7x97xx$('load-all', bytes, false));
  };
  Yaml.prototype.load_0 = function (tokens) {
    var tmp$;
    var anchors = HashMap_init();
    var context = new Stack();
    context.push_11rb$(new Yaml$ListContext());
    var tmp$_0;
    tmp$_0 = tokens.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.visitor_0(element.code).visit_2xkidc$(anchors, context, element);
    }
    var result = context.pop().peek();
    if (Kotlin.isType(result, List)) {
      return Kotlin.isType(tmp$ = result, List) ? tmp$ : throwCCE();
    }
    throw IllegalStateException_init('unexpected result: ' + result.toString());
  };
  Yaml.prototype.visitor_0 = function (code) {
    switch (code.name) {
      case 'Text':
        return new Yaml$TextVisitor();
      case 'Meta':
        return new Yaml$TextVisitor();
      case 'LineFeed':
        return new Yaml$EndOfLineVisitor('\n');
      case 'LineFold':
        return new Yaml$EndOfLineVisitor(' ');
      case 'BeginComment':
        return new Yaml$BeginIgnoreVisitor();
      case 'EndComment':
        return new Yaml$EndIgnoreVisitor();
      case 'BeginAnchor':
        return new Yaml$BeginVisitor(new Yaml$SingleContext());
      case 'EndAnchor':
        return new Yaml$EndVisitor();
      case 'BeginAlias':
        return new Yaml$BeginVisitor(new Yaml$SingleContext());
      case 'EndAlias':
        return new Yaml$EndAliasVisitor();
      case 'BeginScalar':
        return new Yaml$BeginVisitor(new Yaml$ScalarContext());
      case 'EndScalar':
        return new Yaml$EndVisitor();
      case 'BeginSequence':
        return new Yaml$BeginVisitor(new Yaml$ListContext());
      case 'EndSequence':
        return new Yaml$EndVisitor();
      case 'BeginMapping':
        return new Yaml$BeginVisitor(new Yaml$MapContext());
      case 'EndMapping':
        return new Yaml$EndVisitor();
      case 'BeginPair':
        return new Yaml$BeginVisitor(new Yaml$PairContext());
      case 'EndPair':
        return new Yaml$EndVisitor();
      case 'BeginNode':
        return new Yaml$BeginVisitor(new Yaml$NodeContext());
      case 'EndNode':
        return new Yaml$EndNodeVisitor();
      case 'BeginDocument':
        return new Yaml$BeginVisitor(new Yaml$SingleContext());
      case 'EndDocument':
        return new Yaml$EndVisitor();
      case 'Error':
        return new Yaml$ErrorVisitor();
      default:return Yaml$SKIP_getInstance();
    }
  };
  function Yaml$Context() {
    this.data_0 = ArrayList_init();
  }
  Yaml$Context.prototype.add_za3rmp$ = function (any) {
    return this.data_0.add_11rb$(any);
  };
  Yaml$Context.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Context',
    interfaces: []
  };
  function Yaml$SingleContext() {
    Yaml$Context.call(this);
  }
  Yaml$SingleContext.prototype.peek = function () {
    return first(this.data_0);
  };
  Yaml$SingleContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleContext',
    interfaces: [Yaml$Context]
  };
  function Yaml$ScalarContext() {
    Yaml$Context.call(this);
  }
  Yaml$ScalarContext.prototype.peek = function () {
    return joinToString(this.data_0, '');
  };
  Yaml$ScalarContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScalarContext',
    interfaces: [Yaml$Context]
  };
  function Yaml$NodeContext() {
    Yaml$Context.call(this);
  }
  Yaml$NodeContext.prototype.peek = function () {
    return this.data_0.size > 1 ? new Pair(first(this.data_0), this.data_0.get_za3lpa$(1)) : new Pair('', first(this.data_0));
  };
  Yaml$NodeContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeContext',
    interfaces: [Yaml$Context]
  };
  function Yaml$ListContext() {
    Yaml$Context.call(this);
  }
  Yaml$ListContext.prototype.peek = function () {
    return this.data_0;
  };
  Yaml$ListContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListContext',
    interfaces: [Yaml$Context]
  };
  function Yaml$MapContext() {
    Yaml$Context.call(this);
  }
  Yaml$MapContext.prototype.peek = function () {
    var $receiver = this.data_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, Pair))
        destination.add_11rb$(element);
    }
    return toMap(destination);
  };
  Yaml$MapContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapContext',
    interfaces: [Yaml$Context]
  };
  function Yaml$PairContext() {
    Yaml$Context.call(this);
  }
  Yaml$PairContext.prototype.peek = function () {
    return new Pair(this.data_0.get_za3lpa$(0), this.data_0.get_za3lpa$(1));
  };
  Yaml$PairContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PairContext',
    interfaces: [Yaml$Context]
  };
  function Yaml$Visitor() {
  }
  Yaml$Visitor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Visitor',
    interfaces: []
  };
  function Yaml$BeginVisitor(context) {
    this.context = context;
  }
  Yaml$BeginVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    contexts.push_11rb$(this.context);
  };
  Yaml$BeginVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BeginVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$BeginIgnoreVisitor() {
  }
  function Yaml$BeginIgnoreVisitor$visit$ObjectLiteral() {
    Yaml$Context.call(this);
  }
  Yaml$BeginIgnoreVisitor$visit$ObjectLiteral.prototype.peek = function () {
    throw UnsupportedOperationException_init();
  };
  Yaml$BeginIgnoreVisitor$visit$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Yaml$Context]
  };
  Yaml$BeginIgnoreVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    contexts.push_11rb$(new Yaml$BeginIgnoreVisitor$visit$ObjectLiteral());
  };
  Yaml$BeginIgnoreVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BeginIgnoreVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$EndIgnoreVisitor() {
  }
  Yaml$EndIgnoreVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    contexts.pop();
  };
  Yaml$EndIgnoreVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndIgnoreVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$EndVisitor() {
  }
  Yaml$EndVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    var top = contexts.pop();
    contexts.peek().add_za3rmp$(top.peek());
  };
  Yaml$EndVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$EndNodeVisitor() {
  }
  Yaml$EndNodeVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    var tmp$;
    var top = Kotlin.isType(tmp$ = contexts.pop().peek(), Pair) ? tmp$ : throwCCE();
    if (top.first.toString().length > 0) {
      anchors.put_xwzc9p$(top.first.toString(), top.second);
    }
    contexts.peek().add_za3rmp$(top.second);
  };
  Yaml$EndNodeVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndNodeVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$EndAliasVisitor() {
  }
  Yaml$EndAliasVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    var top = contexts.pop();
    contexts.peek().add_za3rmp$(ensureNotNull(anchors.get_11rb$(top.peek().toString())));
  };
  Yaml$EndAliasVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndAliasVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$TextVisitor() {
  }
  Yaml$TextVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    contexts.peek().add_za3rmp$(token.text.toString());
  };
  Yaml$TextVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$EndOfLineVisitor(join) {
    this.join = join;
  }
  Yaml$EndOfLineVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    contexts.peek().add_za3rmp$(this.join);
  };
  Yaml$EndOfLineVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndOfLineVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$ErrorVisitor() {
  }
  Yaml$ErrorVisitor.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
    throw IllegalStateException_init(token.text.toString() + ' - Line #' + token.line + ' , Character #' + (token.lineChar + 1 | 0));
  };
  Yaml$ErrorVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ErrorVisitor',
    interfaces: [Yaml$Visitor]
  };
  function Yaml$SKIP() {
    Yaml$SKIP_instance = this;
  }
  Yaml$SKIP.prototype.visit_2xkidc$ = function (anchors, contexts, token) {
  };
  Yaml$SKIP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SKIP',
    interfaces: [Yaml$Visitor]
  };
  var Yaml$SKIP_instance = null;
  function Yaml$SKIP_getInstance() {
    if (Yaml$SKIP_instance === null) {
      new Yaml$SKIP();
    }
    return Yaml$SKIP_instance;
  }
  Yaml.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Yaml',
    interfaces: []
  };
  var Yaml_instance = null;
  function Yaml_getInstance() {
    if (Yaml_instance === null) {
      new Yaml();
    }
    return Yaml_instance;
  }
  function YamlSpec() {
    YamlSpec_instance = this;
    YamlParser.call(this);
    this.c_printable = this.or_h1fl79$(this.or_h1fl79$(this.or_h1fl79$(this.or_thfhbo$(this.or_h1fl79$(this.or_thfhbo$(this.or_thfhbo$(this.of_za3lpa$(9), 10), 13), new IntRange(32, 126)), 133), new IntRange(160, 55295)), new IntRange(57344, 65533)), new IntRange(65536, 1114111));
    this.nb_json = this.or_h1fl79$(this.of_za3lpa$(9), new IntRange(32, 1114111));
    this.c_byte_order_mark = this.bom_za3lpa$(65279);
    this.c_sequence_entry = this.indicator_s8itvh$(45);
    this.c_mapping_key = this.indicator_s8itvh$(63);
    this.c_mapping_value = this.indicator_s8itvh$(58);
    this.c_collect_entry = this.indicator_s8itvh$(44);
    this.c_sequence_start = this.indicator_s8itvh$(91);
    this.c_sequence_end = this.indicator_s8itvh$(93);
    this.c_mapping_start = this.indicator_s8itvh$(123);
    this.c_mapping_end = this.indicator_s8itvh$(125);
    this.c_comment = this.indicator_s8itvh$(35);
    this.c_anchor = this.indicator_s8itvh$(38);
    this.c_alias = this.indicator_s8itvh$(42);
    this.c_tag = this.indicator_s8itvh$(33);
    this.c_literal = this.indicator_s8itvh$(124);
    this.c_folded = this.indicator_s8itvh$(62);
    this.c_single_quote = this.indicator_s8itvh$(39);
    this.c_double_quote = this.indicator_s8itvh$(34);
    this.c_directive = this.indicator_s8itvh$(37);
    this.c_reserved = this.indicator_5msym5$(this.or_ui3wc7$(64, 96));
    this.c_indicator = this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.c_sequence_entry, this.c_mapping_key), this.c_mapping_value), this.c_collect_entry), this.c_sequence_start), this.c_sequence_end), this.c_mapping_start), this.c_mapping_end), this.c_comment), this.c_anchor), this.c_alias), this.c_tag), this.c_literal), this.c_folded), this.c_single_quote), this.c_double_quote), this.c_directive), this.c_reserved);
    this.c_flow_indicator = this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.c_collect_entry, this.c_sequence_start), this.c_sequence_end), this.c_mapping_start), this.c_mapping_end);
    this.b_line_feed = this.of_za3lpa$(10);
    this.b_carriage_return = this.of_za3lpa$(13);
    this.b_char = this.or_yb4yy3$(this.b_line_feed, this.b_carriage_return);
    this.nb_char = this.not_yb4yy3$(this.not_yb4yy3$(this.c_printable, this.b_char), this.c_byte_order_mark);
    this.b_break = this.and_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.and_yb4yy3$(this.b_carriage_return, this.b_line_feed), this.b_carriage_return), this.b_line_feed), this.nextLine());
    this.b_as_line_feed = this.token_qhjjef$(YamlParser$Code$LineFeed_getInstance(), this.b_break);
    this.b_non_content = this.token_qhjjef$(YamlParser$Code$Break_getInstance(), this.b_break);
    this.s_space = this.of_za3lpa$(32);
    this.s_tab = this.of_za3lpa$(9);
    this.s_white = this.or_yb4yy3$(this.s_space, this.s_tab);
    this.ns_char = this.not_yb4yy3$(this.nb_char, this.s_white);
    this.ns_dec_digit = this.of_n8acyv$(new IntRange(48, 57));
    this.ns_hex_digit = this.or_h1fl79$(this.or_h1fl79$(this.ns_dec_digit, new IntRange(65, 70)), new IntRange(97, 102));
    this.ns_ascii_letter = this.or_9omhn3$(new IntRange(65, 90), new IntRange(97, 122));
    this.ns_word_char = this.or_9e8rdb$(this.or_yb4yy3$(this.ns_dec_digit, this.ns_ascii_letter), 45);
    this.ns_uri_char = this.cho_l8gk4$('escape', this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_9e8rdb$(this.or_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_elu61a$(37, 'escape'), this.ns_hex_digit), this.ns_hex_digit), this.ns_word_char), 35), 59), 47), 63), 58), 64), 38), 61), 43), 36), 44), 95), 46), 33), 126), 42), 39), 40), 41), 91), 93));
    this.ns_tag_char = this.not_yb4yy3$(this.not_yb4yy3$(this.ns_uri_char, this.c_tag), this.c_flow_indicator);
    this.c_escape = this.indicator_s8itvh$(92);
    this.ns_esc_null = this.meta_s8itvh$(48);
    this.ns_esc_bell = this.meta_s8itvh$(97);
    this.ns_esc_backspace = this.meta_s8itvh$(98);
    this.ns_esc_horizontal_tab = this.meta_5msym5$(this.or_a5dju6$(116, 9));
    this.ns_esc_line_feed = this.meta_s8itvh$(110);
    this.ns_esc_vertical_tab = this.meta_s8itvh$(118);
    this.ns_esc_form_feed = this.meta_s8itvh$(102);
    this.ns_esc_carriage_return = this.meta_s8itvh$(114);
    this.ns_esc_escape = this.meta_s8itvh$(101);
    this.ns_esc_space = this.meta_za3lpa$(32);
    this.ns_esc_double_quote = this.meta_s8itvh$(34);
    this.ns_esc_slash = this.meta_s8itvh$(47);
    this.ns_esc_backslash = this.meta_s8itvh$(92);
    this.ns_esc_next_line = this.meta_s8itvh$(78);
    this.ns_esc_non_breaking_space = this.meta_s8itvh$(95);
    this.ns_esc_line_separator = this.meta_s8itvh$(76);
    this.ns_esc_paragraph_separator = this.meta_s8itvh$(80);
    this.ns_esc_8_bit = this.and_yb4yy3$(this.cmt_ixf2s$(this.indicator_s8itvh$(120), 'escaped'), this.meta_5msym5$(this.tms_thfhbo$(this.ns_hex_digit, 2)));
    this.ns_esc_16_bit = this.and_yb4yy3$(this.cmt_ixf2s$(this.indicator_s8itvh$(117), 'escaped'), this.meta_5msym5$(this.tms_thfhbo$(this.ns_hex_digit, 4)));
    this.ns_esc_32_bit = this.and_yb4yy3$(this.cmt_ixf2s$(this.indicator_s8itvh$(85), 'escaped'), this.meta_5msym5$(this.tms_thfhbo$(this.ns_hex_digit, 8)));
    this.c_ns_esc_char = this.wrapTokens_u68c0l$(YamlParser$Code$BeginEscape_getInstance(), YamlParser$Code$EndEscape_getInstance(), this.and_yb4yy3$(this.cmt_ixf2s$(this.c_escape, 'escape'), this.cho_l8gk4$('escaped', this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.ns_esc_null, this.ns_esc_bell), this.ns_esc_backspace), this.ns_esc_horizontal_tab), this.ns_esc_line_feed), this.ns_esc_vertical_tab), this.ns_esc_form_feed), this.ns_esc_carriage_return), this.ns_esc_escape), this.ns_esc_space), this.ns_esc_double_quote), this.ns_esc_slash), this.ns_esc_backslash), this.ns_esc_next_line), this.ns_esc_non_breaking_space), this.ns_esc_line_separator), this.ns_esc_paragraph_separator), this.ns_esc_8_bit), this.ns_esc_16_bit), this.ns_esc_32_bit))));
    this.s_separate_in_line = this.or_yb4yy3$(this.token_qhjjef$(YamlParser$Code$White_getInstance(), this.oom_5msym5$(this.s_white)), this.sol());
    this.b_as_space = this.token_qhjjef$(YamlParser$Code$LineFold_getInstance(), this.b_break);
    this.c_nb_comment_text = this.wrapTokens_u68c0l$(YamlParser$Code$BeginComment_getInstance(), YamlParser$Code$EndComment_getInstance(), this.and_yb4yy3$(this.c_comment, this.meta_5msym5$(this.zom_5msym5$(this.nb_char))));
    this.b_comment = this.or_yb4yy3$(this.b_non_content, this.eof());
    this.s_b_comment = this.and_yb4yy3$(this.opt_5msym5$(this.and_yb4yy3$(this.s_separate_in_line, this.opt_5msym5$(this.c_nb_comment_text))), this.b_comment);
    this.l_comment = this.and_yb4yy3$(this.and_yb4yy3$(this.s_separate_in_line, this.opt_5msym5$(this.c_nb_comment_text)), this.b_comment);
    this.s_l_comments = this.and_yb4yy3$(this.or_yb4yy3$(this.s_b_comment, this.sol()), this.zom_5msym5$(this.nonEmpty_5msym5$(this.l_comment)));
    this.l_directive = this.and_yb4yy3$(this.wrapTokens_u68c0l$(YamlParser$Code$BeginDirective_getInstance(), YamlParser$Code$EndDirective_getInstance(), this.and_yb4yy3$(this.cmt_ixf2s$(this.c_directive, 'doc'), this.cho_l8gk4$('directive', this.or_yb4yy3$(this.or_yb4yy3$(this.ns_yaml_directive(), this.ns_tag_directive()), this.ns_reserved_directive())))), this.s_l_comments);
    this.c_ns_anchor_property = this.wrapTokens_u68c0l$(YamlParser$Code$BeginAnchor_getInstance(), YamlParser$Code$EndAnchor_getInstance(), this.and_yb4yy3$(this.c_anchor, this.ns_anchor_name()));
    this.c_ns_alias_node = this.wrapTokens_u68c0l$(YamlParser$Code$BeginAlias_getInstance(), YamlParser$Code$EndAlias_getInstance(), this.and_yb4yy3$(this.cmt_ixf2s$(this.c_alias, 'node'), this.ns_anchor_name()));
    this.e_scalar = this.wrapTokens_u68c0l$(YamlParser$Code$BeginScalar_getInstance(), YamlParser$Code$EndScalar_getInstance(), this.empty());
    this.e_node = this.wrapTokens_u68c0l$(YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), this.e_scalar);
    this.nb_double_char = this.cho_l8gk4$('escape', this.or_yb4yy3$(this.c_ns_esc_char, this.not_yb4yy3$(this.not_yb4yy3$(this.nb_json, this.c_escape), this.c_double_quote)));
    this.ns_double_char = this.not_yb4yy3$(this.nb_double_char, this.s_white);
    this.nb_double_one_line = this.zom_5msym5$(this.nb_double_char);
    this.nb_ns_double_in_line = this.zom_5msym5$(this.and_yb4yy3$(this.zom_5msym5$(this.s_white), this.ns_double_char));
    this.c_quoted_quote = this.wrapTokens_u68c0l$(YamlParser$Code$BeginEscape_getInstance(), YamlParser$Code$EndEscape_getInstance(), this.and_yb4yy3$(this.cmt_ixf2s$(this.c_single_quote, 'escape'), this.meta_s8itvh$(39)));
    this.nb_single_char = this.cho_l8gk4$('escape', this.or_yb4yy3$(this.c_quoted_quote, this.not_yb4yy3$(this.nb_json, this.c_single_quote)));
    this.ns_single_char = this.not_yb4yy3$(this.nb_single_char, this.s_white);
    this.nb_single_one_line = this.zom_5msym5$(this.nb_single_char);
    this.nb_ns_single_in_line = this.zom_5msym5$(this.and_yb4yy3$(this.zom_5msym5$(this.s_white), this.ns_single_char));
    this.ns_plain_safe_out = this.not_yb4yy3$(this.not_yb4yy3$(this.ns_char, this.c_mapping_value), this.c_comment);
    this.ns_plain_safe_in = this.not_yb4yy3$(this.ns_plain_safe_out, this.c_flow_indicator);
    this.detect_inline_indentation = this.peek_5msym5$(this.count_spaces_za3lpa$(0));
    this.l_document_prefix = this.and_yb4yy3$(this.opt_5msym5$(this.c_byte_order_mark), this.zom_5msym5$(this.nonEmpty_5msym5$(this.l_comment)));
    this.c_directives_end = this.token_qhjjef$(YamlParser$Code$DirectivesEnd_getInstance(), this.and_9e8rdb$(this.and_ui3wc7$(45, 45), 45));
    this.c_document_end = this.token_qhjjef$(YamlParser$Code$DocumentEnd_getInstance(), this.and_9e8rdb$(this.and_ui3wc7$(46, 46), 46));
    this.l_document_suffix = this.and_yb4yy3$(this.c_document_end, this.s_l_comments);
    this.l_bare_document = this.forbidding_caskni$(this.cho_l8gk4$('node', this.s_l_block_node_akvb8y$(-1, YamlParser$Context$BlockIn_getInstance())), this.c_forbidden());
    this.l_explicit_document = this.and_yb4yy3$(this.cmt_ixf2s$(this.c_directives_end, 'doc'), this.recovery_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.or_yb4yy3$(this.l_bare_document, this.e_node), this.opt_5msym5$(this.s_l_comments)), this.unparsed_za3lpa$(0)), this.unparsed_za3lpa$(0)));
    this.l_directives_document = this.and_yb4yy3$(this.oom_5msym5$(this.l_directive), this.l_explicit_document);
    this.l_any_document = this.wrapTokens_u68c0l$(YamlParser$Code$BeginDocument_getInstance(), YamlParser$Code$EndDocument_getInstance(), this.cho_l8gk4$('doc', this.recovery_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.l_directives_document, this.l_explicit_document), this.l_bare_document), this.unparsed_za3lpa$(0))));
    this.l_yaml_stream = this.and_yb4yy3$(this.and_yb4yy3$(this.zom_5msym5$(this.nonEmpty_5msym5$(this.l_document_prefix)), this.or_yb4yy3$(this.or_yb4yy3$(this.eof(), this.pla_5msym5$(this.and_yb4yy3$(this.c_document_end, this.or_yb4yy3$(this.or_yb4yy3$(this.b_char, this.s_white), this.eof())))), this.l_any_document)), this.zom_5msym5$(this.nonEmpty_5msym5$(this.cho_l8gk4$('more', this.and_yb4yy3$(this.or_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.oom_5msym5$(this.cmt_ixf2s$(this.l_document_suffix, 'more')), this.zom_5msym5$(this.nonEmpty_5msym5$(this.l_document_prefix))), this.or_yb4yy3$(this.eof(), this.l_any_document)), this.zom_5msym5$(this.nonEmpty_5msym5$(this.l_document_prefix))), this.cho_l8gk4$('doc', this.opt_5msym5$(this.wrapTokens_u68c0l$(YamlParser$Code$BeginDocument_getInstance(), YamlParser$Code$EndDocument_getInstance(), this.l_explicit_document))))))));
  }
  YamlSpec.prototype.yaml = function () {
    return new YamlParser$PatternTokenizer(this.l_yaml_stream);
  };
  YamlSpec.prototype.s_indent_za3lpa$ = function (n) {
    return this.token_qhjjef$(YamlParser$Code$Indent_getInstance(), this.tms_thfhbo$(this.s_space, n));
  };
  YamlSpec.prototype.s_indent_lt_za3lpa$ = function (n) {
    return this.token_qhjjef$(YamlParser$Code$Indent_getInstance(), this.lms_thfhbo$(this.s_space, n));
  };
  YamlSpec.prototype.s_indent_le_za3lpa$ = function (n) {
    return this.token_qhjjef$(YamlParser$Code$Indent_getInstance(), this.lms_thfhbo$(this.s_space, n + 1 | 0));
  };
  YamlSpec.prototype.s_line_prefix_akvb8y$ = function (n, c) {
    switch (c.name) {
      case 'BlockOut':
        return this.s_block_line_prefix_za3lpa$(n);
      case 'BlockIn':
        return this.s_block_line_prefix_za3lpa$(n);
      case 'FlowOut':
        return this.s_flow_line_prefix_za3lpa$(n);
      case 'FlowIn':
        return this.s_flow_line_prefix_za3lpa$(n);
      default:throw IllegalArgumentException_init('invalid context: ' + c);
    }
  };
  YamlSpec.prototype.s_block_line_prefix_za3lpa$ = function (n) {
    return this.s_indent_za3lpa$(n);
  };
  YamlSpec.prototype.s_flow_line_prefix_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.s_indent_za3lpa$(n), this.opt_5msym5$(this.s_separate_in_line));
  };
  YamlSpec.prototype.l_empty_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.or_yb4yy3$(this.s_line_prefix_akvb8y$(n, c), this.s_indent_lt_za3lpa$(n)), this.b_as_line_feed);
  };
  YamlSpec.prototype.b_l_trimmed_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.b_non_content, this.oom_5msym5$(this.l_empty_akvb8y$(n, c)));
  };
  YamlSpec.prototype.b_l_folded_akvb8y$ = function (n, c) {
    return this.or_yb4yy3$(this.b_l_trimmed_akvb8y$(n, c), this.b_as_space);
  };
  YamlSpec.prototype.s_flow_folded_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.opt_5msym5$(this.s_separate_in_line), this.b_l_folded_akvb8y$(n, YamlParser$Context$FlowIn_getInstance())), this.s_flow_line_prefix_za3lpa$(n));
  };
  YamlSpec.prototype.s_separate_akvb8y$ = function (n, c) {
    switch (c.name) {
      case 'BlockOut':
        return this.s_separate_lines_za3lpa$(n);
      case 'BlockIn':
        return this.s_separate_lines_za3lpa$(n);
      case 'FlowOut':
        return this.s_separate_lines_za3lpa$(n);
      case 'FlowIn':
        return this.s_separate_lines_za3lpa$(n);
      case 'BlockKey':
        return this.s_separate_in_line;
      case 'FlowKey':
        return this.s_separate_in_line;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  YamlSpec.prototype.s_separate_lines_za3lpa$ = function (n) {
    return this.or_yb4yy3$(this.and_yb4yy3$(this.s_l_comments, this.s_flow_line_prefix_za3lpa$(n)), this.s_separate_in_line);
  };
  YamlSpec.prototype.ns_reserved_directive = function () {
    return this.and_yb4yy3$(this.ns_directive_name(), this.zom_5msym5$(this.and_yb4yy3$(this.s_separate_in_line, this.ns_directive_parameter())));
  };
  YamlSpec.prototype.ns_directive_name = function () {
    return this.meta_5msym5$(this.oom_5msym5$(this.ns_char));
  };
  YamlSpec.prototype.ns_directive_parameter = function () {
    return this.meta_5msym5$(this.oom_5msym5$(this.ns_char));
  };
  YamlSpec.prototype.ns_yaml_directive = function () {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.meta_5msym5$(this.and_9e8rdb$(this.and_9e8rdb$(this.and_ui3wc7$(89, 65), 77), 76)), 'directive'), this.s_separate_in_line), this.ns_yaml_version());
  };
  YamlSpec.prototype.ns_yaml_version = function () {
    return this.meta_5msym5$(this.and_yb4yy3$(this.and_9e8rdb$(this.oom_5msym5$(this.ns_dec_digit), 46), this.oom_5msym5$(this.ns_dec_digit)));
  };
  YamlSpec.prototype.ns_tag_directive = function () {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.meta_5msym5$(this.and_9e8rdb$(this.and_ui3wc7$(84, 65), 71)), 'directive'), this.s_separate_in_line), this.c_tag_handle()), this.s_separate_in_line), this.ns_tag_prefix());
  };
  YamlSpec.prototype.c_tag_handle = function () {
    return this.or_yb4yy3$(this.or_yb4yy3$(this.c_named_tag_handle(), this.c_secondary_tag_handle()), this.c_primary_tag_handle());
  };
  YamlSpec.prototype.c_primary_tag_handle = function () {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginHandle_getInstance(), YamlParser$Code$EndHandle_getInstance(), this.c_tag);
  };
  YamlSpec.prototype.c_secondary_tag_handle = function () {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginHandle_getInstance(), YamlParser$Code$EndHandle_getInstance(), this.and_yb4yy3$(this.c_tag, this.c_tag));
  };
  YamlSpec.prototype.c_named_tag_handle = function () {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginHandle_getInstance(), YamlParser$Code$EndHandle_getInstance(), this.and_yb4yy3$(this.c_tag, this.meta_5msym5$(this.and_yb4yy3$(this.oom_5msym5$(this.ns_word_char), this.c_tag))));
  };
  YamlSpec.prototype.ns_tag_prefix = function () {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginTag_getInstance(), YamlParser$Code$EndTag_getInstance(), this.or_yb4yy3$(this.c_ns_local_tag_prefix(), this.ns_global_tag_prefix()));
  };
  YamlSpec.prototype.c_ns_local_tag_prefix = function () {
    return this.and_yb4yy3$(this.c_tag, this.meta_5msym5$(this.zom_5msym5$(this.ns_uri_char)));
  };
  YamlSpec.prototype.ns_global_tag_prefix = function () {
    return this.meta_5msym5$(this.and_yb4yy3$(this.ns_tag_char, this.zom_5msym5$(this.ns_uri_char)));
  };
  YamlSpec.prototype.c_ns_properties_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginProperties_getInstance(), YamlParser$Code$EndProperties_getInstance(), this.or_yb4yy3$(this.and_yb4yy3$(this.c_ns_tag_property(), this.opt_5msym5$(this.and_yb4yy3$(this.s_separate_akvb8y$(n, c), this.c_ns_anchor_property))), this.and_yb4yy3$(this.c_ns_anchor_property, this.opt_5msym5$(this.and_yb4yy3$(this.s_separate_akvb8y$(n, c), this.c_ns_tag_property())))));
  };
  YamlSpec.prototype.c_ns_tag_property = function () {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginTag_getInstance(), YamlParser$Code$EndTag_getInstance(), this.or_yb4yy3$(this.or_yb4yy3$(this.c_verbatim_tag(), this.c_ns_shorthand_tag()), this.c_non_specific_tag()));
  };
  YamlSpec.prototype.c_verbatim_tag = function () {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.c_tag, this.indicator_s8itvh$(60)), this.meta_5msym5$(this.oom_5msym5$(this.ns_uri_char))), this.indicator_s8itvh$(62));
  };
  YamlSpec.prototype.c_ns_shorthand_tag = function () {
    return this.and_yb4yy3$(this.c_tag_handle(), this.meta_5msym5$(this.oom_5msym5$(this.ns_tag_char)));
  };
  YamlSpec.prototype.c_non_specific_tag = function () {
    return this.c_tag;
  };
  YamlSpec.prototype.ns_anchor_char = function () {
    return this.not_yb4yy3$(this.ns_char, this.c_flow_indicator);
  };
  YamlSpec.prototype.ns_anchor_name = function () {
    return this.meta_5msym5$(this.oom_5msym5$(this.ns_anchor_char()));
  };
  YamlSpec.prototype.c_double_quoted_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginScalar_getInstance(), YamlParser$Code$EndScalar_getInstance(), this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.c_double_quote, 'node'), this.text_5msym5$(this.nb_double_text_akvb8y$(n, c))), this.c_double_quote));
  };
  YamlSpec.prototype.nb_double_text_akvb8y$ = function (n, c) {
    switch (c.name) {
      case 'FlowOut':
        return this.nb_double_multi_line_za3lpa$(n);
      case 'FlowIn':
        return this.nb_double_multi_line_za3lpa$(n);
      case 'BlockKey':
        return this.nb_double_one_line;
      case 'FlowKey':
        return this.nb_double_one_line;
      default:throw IllegalArgumentException_init('unexpected');
    }
  };
  YamlSpec.prototype.s_double_escaped_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.zom_5msym5$(this.s_white), this.wrapTokens_u68c0l$(YamlParser$Code$BeginEscape_getInstance(), YamlParser$Code$EndEscape_getInstance(), this.and_yb4yy3$(this.cmt_ixf2s$(this.c_escape, 'escape'), this.b_non_content))), this.zom_5msym5$(this.l_empty_akvb8y$(n, YamlParser$Context$FlowIn_getInstance()))), this.s_flow_line_prefix_za3lpa$(n));
  };
  YamlSpec.prototype.s_double_break_za3lpa$ = function (n) {
    return this.cho_l8gk4$('escape', this.or_yb4yy3$(this.s_double_escaped_za3lpa$(n), this.s_flow_folded_za3lpa$(n)));
  };
  function YamlSpec$s_double_next_line$lambda(closure$n, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.s_double_next_line_za3lpa$(closure$n)(state);
    };
  }
  YamlSpec.prototype.s_double_next_line_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.s_double_break_za3lpa$(n), this.opt_5msym5$(this.and_yb4yy3$(this.and_yb4yy3$(this.ns_double_char, this.nb_ns_double_in_line), this.or_yb4yy3$(YamlSpec$s_double_next_line$lambda(n, this), this.zom_5msym5$(this.s_white)))));
  };
  YamlSpec.prototype.nb_double_multi_line_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.nb_ns_double_in_line, this.or_yb4yy3$(this.s_double_next_line_za3lpa$(n), this.zom_5msym5$(this.s_white)));
  };
  YamlSpec.prototype.c_single_quoted_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginScalar_getInstance(), YamlParser$Code$EndScalar_getInstance(), this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.c_single_quote, 'node'), this.text_5msym5$(this.nb_single_text_akvb8y$(n, c))), this.c_single_quote));
  };
  YamlSpec.prototype.nb_single_text_akvb8y$ = function (n, c) {
    switch (c.name) {
      case 'FlowOut':
        return this.nb_single_multi_line_za3lpa$(n);
      case 'FlowIn':
        return this.nb_single_multi_line_za3lpa$(n);
      case 'BlockKey':
        return this.nb_single_one_line;
      case 'FlowKey':
        return this.nb_single_one_line;
      default:throw IllegalArgumentException_init('unexpected');
    }
  };
  function YamlSpec$s_single_next_line$lambda(closure$n, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.s_single_next_line_za3lpa$(closure$n)(state);
    };
  }
  YamlSpec.prototype.s_single_next_line_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.s_flow_folded_za3lpa$(n), this.opt_5msym5$(this.and_yb4yy3$(this.and_yb4yy3$(this.ns_single_char, this.nb_ns_single_in_line), this.or_yb4yy3$(YamlSpec$s_single_next_line$lambda(n, this), this.zom_5msym5$(this.s_white)))));
  };
  YamlSpec.prototype.nb_single_multi_line_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.nb_ns_single_in_line, this.or_yb4yy3$(this.s_single_next_line_za3lpa$(n), this.zom_5msym5$(this.s_white)));
  };
  YamlSpec.prototype.ns_plain_first_stezpg$ = function (c) {
    return this.or_yb4yy3$(this.not_yb4yy3$(this.ns_char, this.c_indicator), this.and_yb4yy3$(this.or_9e8rdb$(this.or_ui3wc7$(63, 58), 45), this.pla_5msym5$(this.ns_char)));
  };
  YamlSpec.prototype.ns_plain_safe_stezpg$ = function (c) {
    switch (c.name) {
      case 'FlowOut':
        return this.ns_plain_safe_out;
      case 'FlowIn':
        return this.ns_plain_safe_in;
      case 'BlockKey':
        return this.ns_plain_safe_out;
      case 'FlowKey':
        return this.ns_plain_safe_in;
      default:throw IllegalArgumentException_init('unexpected');
    }
  };
  YamlSpec.prototype.ns_plain_char_stezpg$ = function (c) {
    return this.or_yb4yy3$(this.or_yb4yy3$(this.ns_plain_safe_stezpg$(c), this.and_9e8rdb$(this.plb_5msym5$(this.ns_char), 35)), this.and_j3igz5$(58, this.pla_5msym5$(this.ns_char)));
  };
  YamlSpec.prototype.ns_plain_akvb8y$ = function (n, c) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = YamlParser$Code$BeginScalar_getInstance();
    tmp$_0 = YamlParser$Code$EndScalar_getInstance();
    switch (c.name) {
      case 'FlowOut':
        tmp$_1 = this.ns_plain_multi_line_akvb8y$(n, c);
        break;
      case 'FlowIn':
        tmp$_1 = this.ns_plain_multi_line_akvb8y$(n, c);
        break;
      case 'BlockKey':
        tmp$_1 = this.ns_plain_one_line_stezpg$(c);
        break;
      case 'FlowKey':
        tmp$_1 = this.ns_plain_one_line_stezpg$(c);
        break;
      default:throw IllegalArgumentException_init('unexpected');
    }
    return this.wrapTokens_u68c0l$(tmp$, tmp$_0, this.text_5msym5$(tmp$_1));
  };
  YamlSpec.prototype.nb_ns_plain_in_line_stezpg$ = function (c) {
    return this.zom_5msym5$(this.and_yb4yy3$(this.zom_5msym5$(this.s_white), this.ns_plain_char_stezpg$(c)));
  };
  YamlSpec.prototype.ns_plain_one_line_stezpg$ = function (c) {
    return this.and_yb4yy3$(this.cmt_ixf2s$(this.ns_plain_first_stezpg$(c), 'node'), this.nb_ns_plain_in_line_stezpg$(c));
  };
  YamlSpec.prototype.s_ns_plain_next_line_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.s_flow_folded_za3lpa$(n), this.ns_plain_char_stezpg$(c)), this.nb_ns_plain_in_line_stezpg$(c));
  };
  YamlSpec.prototype.ns_plain_multi_line_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.ns_plain_one_line_stezpg$(c), this.zom_5msym5$(this.s_ns_plain_next_line_akvb8y$(n, c)));
  };
  YamlSpec.prototype.in_flow_stezpg$ = function (c) {
    switch (c.name) {
      case 'FlowOut':
        return YamlParser$Context$FlowIn_getInstance();
      case 'FlowIn':
        return YamlParser$Context$FlowIn_getInstance();
      case 'BlockKey':
        return YamlParser$Context$FlowKey_getInstance();
      case 'FlowKey':
        return YamlParser$Context$FlowKey_getInstance();
      default:throw IllegalArgumentException_init('unexpected');
    }
  };
  YamlSpec.prototype.c_flow_sequence_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginSequence_getInstance(), YamlParser$Code$EndSequence_getInstance(), this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.c_sequence_start, 'node'), this.opt_5msym5$(this.s_separate_akvb8y$(n, c))), this.opt_5msym5$(this.ns_s_flow_seq_entries_akvb8y$(n, this.in_flow_stezpg$(c)))), this.c_sequence_end));
  };
  function YamlSpec$ns_s_flow_seq_entries$lambda(closure$n, closure$c, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.ns_s_flow_seq_entries_akvb8y$(closure$n, closure$c)(state);
    };
  }
  YamlSpec.prototype.ns_s_flow_seq_entries_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.ns_flow_seq_entry_akvb8y$(n, c), this.opt_5msym5$(this.s_separate_akvb8y$(n, c))), this.opt_5msym5$(this.and_yb4yy3$(this.and_yb4yy3$(this.c_collect_entry, this.opt_5msym5$(this.s_separate_akvb8y$(n, c))), this.opt_5msym5$(YamlSpec$ns_s_flow_seq_entries$lambda(n, c, this)))));
  };
  YamlSpec.prototype.ns_flow_seq_entry_akvb8y$ = function (n, c) {
    return this.cho_l8gk4$('pair', this.or_yb4yy3$(this.ns_flow_pair_akvb8y$(n, c), this.cho_l8gk4$('node', this.ns_flow_node_akvb8y$(n, c))));
  };
  YamlSpec.prototype.c_flow_mapping_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginMapping_getInstance(), YamlParser$Code$EndMapping_getInstance(), this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.c_mapping_start, 'node'), this.opt_5msym5$(this.s_separate_akvb8y$(n, c))), this.opt_5msym5$(this.ns_s_flow_map_entries_akvb8y$(n, this.in_flow_stezpg$(c)))), this.c_mapping_end));
  };
  function YamlSpec$ns_s_flow_map_entries$lambda(closure$n, closure$c, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.ns_s_flow_map_entries_akvb8y$(closure$n, closure$c)(state);
    };
  }
  YamlSpec.prototype.ns_s_flow_map_entries_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.ns_flow_map_entry_akvb8y$(n, c), this.opt_5msym5$(this.s_separate_akvb8y$(n, c))), this.opt_5msym5$(this.and_yb4yy3$(this.and_yb4yy3$(this.c_collect_entry, this.opt_5msym5$(this.s_separate_akvb8y$(n, c))), this.opt_5msym5$(YamlSpec$ns_s_flow_map_entries$lambda(n, c, this)))));
  };
  YamlSpec.prototype.ns_flow_map_entry_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginPair_getInstance(), YamlParser$Code$EndPair_getInstance(), this.cho_l8gk4$('key', this.or_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.c_mapping_key, 'key'), this.s_separate_akvb8y$(n, c)), this.ns_flow_map_explicit_entry_akvb8y$(n, c)), this.ns_flow_map_implicit_entry_akvb8y$(n, c))));
  };
  YamlSpec.prototype.ns_flow_map_explicit_entry_akvb8y$ = function (n, c) {
    return this.or_yb4yy3$(this.ns_flow_map_implicit_entry_akvb8y$(n, c), this.and_yb4yy3$(this.e_node, this.e_node));
  };
  YamlSpec.prototype.ns_flow_map_implicit_entry_akvb8y$ = function (n, c) {
    return this.cho_l8gk4$('pair', this.or_yb4yy3$(this.or_yb4yy3$(this.ns_flow_map_yaml_key_entry_akvb8y$(n, c), this.c_ns_flow_map_empty_key_entry_akvb8y$(n, c)), this.c_ns_flow_map_json_key_entry_akvb8y$(n, c)));
  };
  YamlSpec.prototype.ns_flow_map_yaml_key_entry_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.cmt_ixf2s$(this.cho_l8gk4$('node', this.ns_flow_yaml_node_akvb8y$(n, c)), 'pair'), this.or_yb4yy3$(this.and_yb4yy3$(this.opt_5msym5$(this.s_separate_akvb8y$(n, c)), this.c_ns_flow_map_separate_value_akvb8y$(n, c)), this.e_node));
  };
  YamlSpec.prototype.c_ns_flow_map_empty_key_entry_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.e_node, this.c_ns_flow_map_separate_value_akvb8y$(n, c));
  };
  YamlSpec.prototype.c_ns_flow_map_separate_value_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.c_mapping_value, this.cmt_ixf2s$(this.nla_5msym5$(this.ns_char), 'pair')), this.or_yb4yy3$(this.and_yb4yy3$(this.s_separate_akvb8y$(n, c), this.ns_flow_node_akvb8y$(n, c)), this.e_node));
  };
  YamlSpec.prototype.c_ns_flow_map_json_key_entry_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.cmt_ixf2s$(this.cho_l8gk4$('node', this.c_flow_json_node_akvb8y$(n, c)), 'pair'), this.or_yb4yy3$(this.and_yb4yy3$(this.opt_5msym5$(this.s_separate_akvb8y$(n, c)), this.c_ns_flow_map_adjacent_value_akvb8y$(n, c)), this.e_node));
  };
  YamlSpec.prototype.c_ns_flow_map_adjacent_value_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.cmt_ixf2s$(this.c_mapping_value, 'pair'), this.or_yb4yy3$(this.and_yb4yy3$(this.opt_5msym5$(this.s_separate_akvb8y$(n, c)), this.ns_flow_node_akvb8y$(n, c)), this.e_node));
  };
  YamlSpec.prototype.ns_flow_pair_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginMapping_getInstance(), YamlParser$Code$EndMapping_getInstance(), this.wrapTokens_u68c0l$(YamlParser$Code$BeginPair_getInstance(), YamlParser$Code$EndPair_getInstance(), this.or_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$(this.c_mapping_key, 'pair'), this.s_separate_akvb8y$(n, c)), this.ns_flow_map_explicit_entry_akvb8y$(n, c)), this.ns_flow_pair_entry_akvb8y$(n, c))));
  };
  YamlSpec.prototype.ns_flow_pair_entry_akvb8y$ = function (n, c) {
    return this.or_yb4yy3$(this.or_yb4yy3$(this.ns_flow_pair_yaml_key_entry_akvb8y$(n, c), this.c_ns_flow_map_empty_key_entry_akvb8y$(n, c)), this.c_ns_flow_pair_json_key_entry_akvb8y$(n, c));
  };
  YamlSpec.prototype.ns_flow_pair_yaml_key_entry_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.ns_s_implicit_yaml_key_stezpg$(YamlParser$Context$FlowKey_getInstance()), this.c_ns_flow_map_separate_value_akvb8y$(n, c));
  };
  YamlSpec.prototype.c_ns_flow_pair_json_key_entry_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.c_s_implicit_json_key_stezpg$(YamlParser$Context$FlowKey_getInstance()), this.c_ns_flow_map_adjacent_value_akvb8y$(n, c));
  };
  YamlSpec.prototype.ns_s_implicit_yaml_key_stezpg$ = function (c) {
    return this.limitedTo_nf7wzz$(this.and_yb4yy3$(this.cho_l8gk4$('node', this.ns_flow_yaml_node_akvb8y$(-1, c)), this.opt_5msym5$(this.s_separate_in_line)), 1024);
  };
  YamlSpec.prototype.c_s_implicit_json_key_stezpg$ = function (c) {
    return this.limitedTo_nf7wzz$(this.and_yb4yy3$(this.cho_l8gk4$('node', this.c_flow_json_node_akvb8y$(-1, c)), this.opt_5msym5$(this.s_separate_in_line)), 1024);
  };
  YamlSpec.prototype.ns_flow_yaml_content_akvb8y$ = function (n, c) {
    return this.ns_plain_akvb8y$(n, c);
  };
  function YamlSpec$c_flow_json_content$lambda(closure$n, closure$c, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.c_flow_sequence_akvb8y$(closure$n, closure$c)(state);
    };
  }
  YamlSpec.prototype.c_flow_json_content_akvb8y$ = function (n, c) {
    return this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(YamlSpec$c_flow_json_content$lambda(n, c, this), this.c_flow_mapping_akvb8y$(n, c)), this.c_single_quoted_akvb8y$(n, c)), this.c_double_quoted_akvb8y$(n, c));
  };
  function YamlSpec$ns_flow_content$lambda(closure$n, closure$c, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.c_flow_json_content_akvb8y$(closure$n, closure$c)(state);
    };
  }
  YamlSpec.prototype.ns_flow_content_akvb8y$ = function (n, c) {
    return this.or_yb4yy3$(this.ns_flow_yaml_content_akvb8y$(n, c), YamlSpec$ns_flow_content$lambda(n, c, this));
  };
  YamlSpec.prototype.ns_flow_yaml_node_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), this.or_yb4yy3$(this.or_yb4yy3$(this.c_ns_alias_node, this.ns_flow_yaml_content_akvb8y$(n, c)), this.and_yb4yy3$(this.c_ns_properties_akvb8y$(n, c), this.or_yb4yy3$(this.and_yb4yy3$(this.s_separate_akvb8y$(n, c), this.ns_flow_yaml_content_akvb8y$(n, c)), this.e_scalar))));
  };
  function YamlSpec$c_flow_json_node$lambda(closure$n, closure$c, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.c_flow_json_content_akvb8y$(closure$n, closure$c)(state);
    };
  }
  YamlSpec.prototype.c_flow_json_node_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), this.and_yb4yy3$(this.opt_5msym5$(this.and_yb4yy3$(this.c_ns_properties_akvb8y$(n, c), this.s_separate_akvb8y$(n, c))), YamlSpec$c_flow_json_node$lambda(n, c, this)));
  };
  YamlSpec.prototype.ns_flow_node_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), this.or_yb4yy3$(this.or_yb4yy3$(this.c_ns_alias_node, this.ns_flow_content_akvb8y$(n, c)), this.and_yb4yy3$(this.c_ns_properties_akvb8y$(n, c), this.or_yb4yy3$(this.and_yb4yy3$(this.s_separate_akvb8y$(n, c), this.ns_flow_content_akvb8y$(n, c)), this.e_scalar))));
  };
  YamlSpec.prototype.c_b_block_header_za3lpa$ = function (n) {
    return this.cho_l8gk4$('header', this.and_yb4yy3$(this.or_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.snd_lg169v$(this.snd_lg169v$(this.c_indentation_indicator_za3lpa$(n), 'm', this.c_chomping_indicator()), 't', this.omt_ixf2s$(this.or_yb4yy3$(this.s_white, this.b_char), 'header')), this.s_b_comment), this.peekResult_puj7f4$('m', 't')), this.snd_lg169v$(this.snd_lg169v$(this.c_chomping_indicator(), 't', this.c_indentation_indicator_za3lpa$(n)), 'm', this.s_b_comment)), this.peekResult_puj7f4$('m', 't')));
  };
  YamlSpec.prototype.c_indentation_indicator_za3lpa$ = function (n) {
    return this.or_yb4yy3$(this.and_yb4yy3$(this.indicator_5msym5$(this.not_9e8rdb$(this.ns_dec_digit, 48)), this.asInt()), this.detect_scalar_indentation_za3lpa$(n));
  };
  YamlSpec.prototype.detect_scalar_indentation_za3lpa$ = function (n) {
    return this.peek_5msym5$(this.and_yb4yy3$(this.and_yb4yy3$(this.zom_5msym5$(this.nb_char), this.opt_5msym5$(this.and_yb4yy3$(this.b_non_content, this.zom_5msym5$(this.l_empty_akvb8y$(n, YamlParser$Context$BlockIn_getInstance()))))), this.count_spaces_za3lpa$(-n | 0)));
  };
  function YamlSpec$count_spaces$lambda(closure$n, this$YamlSpec) {
    return function (state) {
      return this$YamlSpec.count_spaces_za3lpa$(closure$n + 1 | 0)(state);
    };
  }
  YamlSpec.prototype.count_spaces_za3lpa$ = function (n) {
    return this.or_yb4yy3$(this.and_yb4yy3$(this.s_space, YamlSpec$count_spaces$lambda(n, this)), this.result_za3lpa$(Math_0.max(1, n)));
  };
  YamlSpec.prototype.c_chomping_indicator = function () {
    return this.or_yb4yy3$(this.or_yb4yy3$(this.and_yb4yy3$(this.indicator_s8itvh$(45), this.result_ba5ra6$(YamlParser$Chomp$Strip_getInstance())), this.and_yb4yy3$(this.indicator_s8itvh$(43), this.result_ba5ra6$(YamlParser$Chomp$Keep_getInstance()))), this.result_ba5ra6$(YamlParser$Chomp$Clip_getInstance()));
  };
  YamlSpec.prototype.end_block_scalar_ba5ra6$ = function (t) {
    switch (t.name) {
      case 'Strip':
        return this.emptyToken_kzhhfs$(YamlParser$Code$EndScalar_getInstance());
      case 'Clip':
        return this.emptyToken_kzhhfs$(YamlParser$Code$EndScalar_getInstance());
      case 'Keep':
        return this.empty();
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  YamlSpec.prototype.b_chomped_last_ba5ra6$ = function (t) {
    switch (t.name) {
      case 'Strip':
        return this.and_yb4yy3$(this.emptyToken_kzhhfs$(YamlParser$Code$EndScalar_getInstance()), this.b_non_content);
      case 'Clip':
        return this.and_yb4yy3$(this.b_as_line_feed, this.emptyToken_kzhhfs$(YamlParser$Code$EndScalar_getInstance()));
      case 'Keep':
        return this.b_as_line_feed;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  YamlSpec.prototype.l_chomped_empty_oh9uqc$ = function (n, t) {
    switch (t.name) {
      case 'Strip':
        return this.l_strip_empty_za3lpa$(n);
      case 'Clip':
        return this.l_strip_empty_za3lpa$(n);
      case 'Keep':
        return this.l_keep_empty_za3lpa$(n);
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  YamlSpec.prototype.l_strip_empty_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.zom_5msym5$(this.and_yb4yy3$(this.s_indent_le_za3lpa$(n), this.b_non_content)), this.opt_5msym5$(this.l_trail_comments_za3lpa$(n)));
  };
  YamlSpec.prototype.l_keep_empty_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.zom_5msym5$(this.l_empty_akvb8y$(n, YamlParser$Context$BlockIn_getInstance())), this.emptyToken_kzhhfs$(YamlParser$Code$EndScalar_getInstance())), this.opt_5msym5$(this.l_trail_comments_za3lpa$(n)));
  };
  YamlSpec.prototype.l_trail_comments_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.s_indent_lt_za3lpa$(n), this.c_nb_comment_text), this.b_comment), this.zom_5msym5$(this.nonEmpty_5msym5$(this.l_comment)));
  };
  function YamlSpec$c_l_literal$lambda(closure$n, this$YamlSpec) {
    return function (state) {
      var tmp$, tmp$_0;
      var m = typeof (tmp$ = state.yields.get_11rb$('m')) === 'number' ? tmp$ : throwCCE();
      var t = Kotlin.isType(tmp$_0 = state.yields.get_11rb$('t'), YamlParser$Chomp) ? tmp$_0 : throwCCE();
      return this$YamlSpec.l_literal_content_oh9uqc$(closure$n + m | 0, t)(state);
    };
  }
  YamlSpec.prototype.c_l_literal_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.emptyToken_kzhhfs$(YamlParser$Code$BeginScalar_getInstance()), this.cmt_ixf2s$(this.c_literal, 'node')), this.prefixErrorWith_caskni$(this.c_b_block_header_za3lpa$(n), this.emptyToken_kzhhfs$(YamlParser$Code$EndScalar_getInstance()))), this.text_5msym5$(YamlSpec$c_l_literal$lambda(n, this)));
  };
  YamlSpec.prototype.l_nb_literal_text_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.zom_5msym5$(this.l_empty_akvb8y$(n, YamlParser$Context$BlockIn_getInstance())), this.s_indent_za3lpa$(n)), this.oom_5msym5$(this.nb_char));
  };
  YamlSpec.prototype.b_nb_literal_next_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.b_as_line_feed, this.l_nb_literal_text_za3lpa$(n));
  };
  YamlSpec.prototype.l_literal_content_oh9uqc$ = function (n, t) {
    return this.and_yb4yy3$(this.or_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.l_nb_literal_text_za3lpa$(n), this.zom_5msym5$(this.b_nb_literal_next_za3lpa$(n))), this.b_chomped_last_ba5ra6$(t)), this.end_block_scalar_ba5ra6$(t)), this.l_chomped_empty_oh9uqc$(n, t));
  };
  function YamlSpec$c_l_folded$lambda(closure$n, this$YamlSpec) {
    return function (state) {
      var tmp$, tmp$_0;
      var m = typeof (tmp$ = state.yields.get_11rb$('m')) === 'number' ? tmp$ : throwCCE();
      var t = Kotlin.isType(tmp$_0 = state.yields.get_11rb$('t'), YamlParser$Chomp) ? tmp$_0 : throwCCE();
      return this$YamlSpec.l_folded_content_oh9uqc$(closure$n + m | 0, t)(state);
    };
  }
  YamlSpec.prototype.c_l_folded_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.emptyToken_kzhhfs$(YamlParser$Code$BeginScalar_getInstance()), this.cmt_ixf2s$(this.c_folded, 'node')), this.prefixErrorWith_caskni$(this.c_b_block_header_za3lpa$(n), this.emptyToken_kzhhfs$(YamlParser$Code$EndScalar_getInstance()))), this.text_5msym5$(YamlSpec$c_l_folded$lambda(n, this)));
  };
  YamlSpec.prototype.s_nb_folded_text_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.s_indent_za3lpa$(n), this.cmt_ixf2s$(this.ns_char, 'fold')), this.zom_5msym5$(this.nb_char));
  };
  YamlSpec.prototype.l_nb_folded_lines_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.s_nb_folded_text_za3lpa$(n), this.zom_5msym5$(this.and_yb4yy3$(this.b_l_folded_akvb8y$(n, YamlParser$Context$BlockIn_getInstance()), this.s_nb_folded_text_za3lpa$(n))));
  };
  YamlSpec.prototype.s_nb_spaced_text_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.s_indent_za3lpa$(n), this.cmt_ixf2s$(this.s_white, 'fold')), this.zom_5msym5$(this.nb_char));
  };
  YamlSpec.prototype.b_l_spaced_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.b_as_line_feed, this.zom_5msym5$(this.l_empty_akvb8y$(n, YamlParser$Context$BlockIn_getInstance())));
  };
  YamlSpec.prototype.l_nb_spaced_lines_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.s_nb_spaced_text_za3lpa$(n), this.zom_5msym5$(this.and_yb4yy3$(this.b_l_spaced_za3lpa$(n), this.s_nb_spaced_text_za3lpa$(n))));
  };
  YamlSpec.prototype.l_nb_same_lines_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.zom_5msym5$(this.l_empty_akvb8y$(n, YamlParser$Context$BlockIn_getInstance())), this.cho_l8gk4$('fold', this.or_yb4yy3$(this.l_nb_folded_lines_za3lpa$(n), this.l_nb_spaced_lines_za3lpa$(n))));
  };
  YamlSpec.prototype.l_nb_diff_lines_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.l_nb_same_lines_za3lpa$(n), this.zom_5msym5$(this.and_yb4yy3$(this.b_as_line_feed, this.l_nb_same_lines_za3lpa$(n))));
  };
  YamlSpec.prototype.l_folded_content_oh9uqc$ = function (n, t) {
    return this.and_yb4yy3$(this.or_yb4yy3$(this.and_yb4yy3$(this.l_nb_diff_lines_za3lpa$(n), this.b_chomped_last_ba5ra6$(t)), this.end_block_scalar_ba5ra6$(t)), this.l_chomped_empty_oh9uqc$(n, t));
  };
  YamlSpec.prototype.detect_collection_indentation_za3lpa$ = function (n) {
    return this.peek_5msym5$(this.and_yb4yy3$(this.zom_5msym5$(this.nonEmpty_5msym5$(this.l_comment)), this.count_spaces_za3lpa$(-n | 0)));
  };
  function YamlSpec$l_block_sequence$lambda(closure$n, this$YamlSpec) {
    return function (state) {
      var tmp$;
      var m = typeof (tmp$ = state.yields.get_11rb$('m')) === 'number' ? tmp$ : throwCCE();
      return this$YamlSpec.oom_5msym5$(this$YamlSpec.and_yb4yy3$(this$YamlSpec.s_indent_za3lpa$(closure$n + m | 0), this$YamlSpec.c_l_block_seq_entry_za3lpa$(closure$n + m | 0)))(state);
    };
  }
  YamlSpec.prototype.l_block_sequence_za3lpa$ = function (n) {
    return this.snd_lg169v$(this.detect_collection_indentation_za3lpa$(n), 'm', this.wrapTokens_u68c0l$(YamlParser$Code$BeginSequence_getInstance(), YamlParser$Code$EndSequence_getInstance(), YamlSpec$l_block_sequence$lambda(n, this)));
  };
  YamlSpec.prototype.c_l_block_seq_entry_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.c_sequence_entry, this.cmt_ixf2s$(this.nla_5msym5$(this.ns_char), 'node')), this.s_l_block_indented_akvb8y$(n, YamlParser$Context$BlockIn_getInstance()));
  };
  function YamlSpec$s_l_block_indented$lambda(this$YamlSpec, closure$n) {
    return function (state) {
      var tmp$;
      var m = typeof (tmp$ = state.yields.get_11rb$('m')) === 'number' ? tmp$ : throwCCE();
      return this$YamlSpec.and_yb4yy3$(this$YamlSpec.s_indent_za3lpa$(m), this$YamlSpec.or_yb4yy3$(this$YamlSpec.ns_l_in_line_sequence_za3lpa$(closure$n + 1 + m | 0), this$YamlSpec.ns_l_in_line_mapping_za3lpa$(closure$n + 1 + m | 0)))(state);
    };
  }
  YamlSpec.prototype.s_l_block_indented_akvb8y$ = function (n, c) {
    return this.snd_lg169v$(this.detect_inline_indentation, 'm', this.recovery_yb4yy3$(this.cho_l8gk4$('node', this.and_yb4yy3$(this.and_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(YamlSpec$s_l_block_indented$lambda(this, n), this.s_l_block_node_akvb8y$(n, c)), this.e_node), this.opt_5msym5$(this.s_l_comments)), this.unparsed_za3lpa$(n + 1 | 0))), this.unparsed_za3lpa$(n + 1 | 0)));
  };
  YamlSpec.prototype.ns_l_in_line_sequence_za3lpa$ = function (n) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), this.wrapTokens_u68c0l$(YamlParser$Code$BeginSequence_getInstance(), YamlParser$Code$EndSequence_getInstance(), this.and_yb4yy3$(this.c_l_block_seq_entry_za3lpa$(n), this.zom_5msym5$(this.and_yb4yy3$(this.s_indent_za3lpa$(n), this.c_l_block_seq_entry_za3lpa$(n))))));
  };
  function YamlSpec$l_block_mapping$lambda(closure$n, this$YamlSpec) {
    return function (state) {
      var tmp$;
      var m = typeof (tmp$ = state.yields.get_11rb$('m')) === 'number' ? tmp$ : throwCCE();
      return this$YamlSpec.oom_5msym5$(this$YamlSpec.and_yb4yy3$(this$YamlSpec.s_indent_za3lpa$(closure$n + m | 0), this$YamlSpec.ns_l_block_map_entry_za3lpa$(closure$n + m | 0)))(state);
    };
  }
  YamlSpec.prototype.l_block_mapping_za3lpa$ = function (n) {
    return this.snd_lg169v$(this.detect_collection_indentation_za3lpa$(n), 'm', this.wrapTokens_u68c0l$(YamlParser$Code$BeginMapping_getInstance(), YamlParser$Code$EndMapping_getInstance(), YamlSpec$l_block_mapping$lambda(n, this)));
  };
  YamlSpec.prototype.ns_l_block_map_entry_za3lpa$ = function (n) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginPair_getInstance(), YamlParser$Code$EndPair_getInstance(), this.or_yb4yy3$(this.c_l_block_map_explicit_entry_za3lpa$(n), this.ns_l_block_map_implicit_entry_za3lpa$(n)));
  };
  YamlSpec.prototype.c_l_block_map_explicit_entry_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.c_l_block_map_explicit_key_za3lpa$(n), this.or_yb4yy3$(this.l_block_map_explicit_value_za3lpa$(n), this.e_node));
  };
  YamlSpec.prototype.c_l_block_map_explicit_key_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.cmt_ixf2s$(this.c_mapping_key, 'node'), this.s_l_block_indented_akvb8y$(n, YamlParser$Context$BlockOut_getInstance()));
  };
  YamlSpec.prototype.l_block_map_explicit_value_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.s_indent_za3lpa$(n), this.c_mapping_value), this.s_l_block_indented_akvb8y$(n, YamlParser$Context$BlockOut_getInstance()));
  };
  YamlSpec.prototype.ns_l_block_map_implicit_entry_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.or_yb4yy3$(this.ns_s_block_map_implicit_key(), this.e_node), this.c_l_block_map_implicit_value_za3lpa$(n));
  };
  YamlSpec.prototype.ns_s_block_map_implicit_key = function () {
    return this.or_yb4yy3$(this.c_s_implicit_json_key_stezpg$(YamlParser$Context$BlockKey_getInstance()), this.ns_s_implicit_yaml_key_stezpg$(YamlParser$Context$BlockKey_getInstance()));
  };
  YamlSpec.prototype.c_l_block_map_implicit_value_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.cmt_ixf2s$(this.c_mapping_value, 'node'), this.recovery_yb4yy3$(this.and_yb4yy3$(this.and_yb4yy3$(this.or_yb4yy3$(this.s_l_block_node_akvb8y$(n, YamlParser$Context$BlockOut_getInstance()), this.e_node), this.opt_5msym5$(this.s_l_comments)), this.unparsed_za3lpa$(n + 1 | 0)), this.unparsed_za3lpa$(n + 1 | 0)));
  };
  YamlSpec.prototype.ns_l_in_line_mapping_za3lpa$ = function (n) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), this.wrapTokens_u68c0l$(YamlParser$Code$BeginMapping_getInstance(), YamlParser$Code$EndMapping_getInstance(), this.and_yb4yy3$(this.ns_l_block_map_entry_za3lpa$(n), this.zom_5msym5$(this.and_yb4yy3$(this.s_indent_za3lpa$(n), this.ns_l_block_map_entry_za3lpa$(n))))));
  };
  YamlSpec.prototype.unparsed_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.or_yb4yy3$(this.sol(), this.unparsed_text()), this.unparsed_break()), this.zom_5msym5$(this.nonEmpty_5msym5$(this.and_yb4yy3$(this.unparsed_indent_za3lpa$(n), this.and_yb4yy3$(this.unparsed_text(), this.unparsed_break())))));
  };
  YamlSpec.prototype.unparsed_indent_za3lpa$ = function (n) {
    return this.token_qhjjef$(YamlParser$Code$Unparsed_getInstance(), this.tms_thfhbo$(this.s_space, n));
  };
  YamlSpec.prototype.unparsed_text = function () {
    return this.token_qhjjef$(YamlParser$Code$Unparsed_getInstance(), this.upto_5msym5$(this.or_yb4yy3$(this.or_yb4yy3$(this.eof(), this.c_forbidden()), this.b_break)));
  };
  YamlSpec.prototype.unparsed_break = function () {
    return this.or_yb4yy3$(this.or_yb4yy3$(this.or_yb4yy3$(this.eof(), this.peek_5msym5$(this.c_forbidden())), this.token_qhjjef$(YamlParser$Code$Unparsed_getInstance(), this.b_break)), this.empty());
  };
  YamlSpec.prototype.s_l_block_node_akvb8y$ = function (n, c) {
    return this.or_yb4yy3$(this.s_l_block_in_block_akvb8y$(n, c), this.s_l_flow_in_block_za3lpa$(n));
  };
  YamlSpec.prototype.s_l_flow_in_block_za3lpa$ = function (n) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.s_separate_akvb8y$(n + 1 | 0, YamlParser$Context$FlowOut_getInstance()), this.ns_flow_node_akvb8y$(n + 1 | 0, YamlParser$Context$FlowOut_getInstance())), this.s_l_comments);
  };
  YamlSpec.prototype.s_l_block_in_block_akvb8y$ = function (n, c) {
    return this.wrapTokens_u68c0l$(YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), this.or_yb4yy3$(this.s_l_block_scalar_akvb8y$(n, c), this.s_l_block_collection_akvb8y$(n, c)));
  };
  YamlSpec.prototype.s_l_block_scalar_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.s_separate_akvb8y$(n + 1 | 0, c), this.opt_5msym5$(this.and_yb4yy3$(this.c_ns_properties_akvb8y$(n + 1 | 0, c), this.s_separate_akvb8y$(n + 1 | 0, c)))), this.or_yb4yy3$(this.c_l_literal_za3lpa$(n), this.c_l_folded_za3lpa$(n)));
  };
  YamlSpec.prototype.s_l_block_collection_akvb8y$ = function (n, c) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.opt_5msym5$(this.and_yb4yy3$(this.s_separate_akvb8y$(n + 1 | 0, c), this.and_yb4yy3$(this.c_ns_properties_akvb8y$(n + 1 | 0, c), this.pla_5msym5$(this.s_l_comments)))), this.s_l_comments), this.or_yb4yy3$(this.l_block_sequence_za3lpa$(this.seq_spaces_akvb8y$(n, c)), this.l_block_mapping_za3lpa$(n)));
  };
  YamlSpec.prototype.seq_spaces_akvb8y$ = function (n, c) {
    switch (c.name) {
      case 'BlockOut':
        return n - 1 | 0;
      case 'BlockIn':
        return n;
      default:throw IllegalArgumentException_init('unexpected');
    }
  };
  YamlSpec.prototype.c_forbidden = function () {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.sol(), this.or_yb4yy3$(this.c_directives_end, this.c_document_end)), this.or_yb4yy3$(this.or_yb4yy3$(this.b_char, this.s_white), this.eof()));
  };
  YamlSpec.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlSpec',
    interfaces: [YamlParser]
  };
  var YamlSpec_instance = null;
  function YamlSpec_getInstance() {
    if (YamlSpec_instance === null) {
      new YamlSpec();
    }
    return YamlSpec_instance;
  }
  function YamlDecoder() {
    YamlDecoder_instance = this;
    YamlParser.call(this);
  }
  function YamlDecoder$Decoder() {
  }
  YamlDecoder$Decoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Decoder',
    interfaces: []
  };
  function YamlDecoder$UniChar(offset, code) {
    this.offset = offset;
    this.code = code;
  }
  YamlDecoder$UniChar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniChar',
    interfaces: []
  };
  YamlDecoder$UniChar.prototype.component1 = function () {
    return this.offset;
  };
  YamlDecoder$UniChar.prototype.component2 = function () {
    return this.code;
  };
  YamlDecoder$UniChar.prototype.copy_vux9f0$ = function (offset, code) {
    return new YamlDecoder$UniChar(offset === void 0 ? this.offset : offset, code === void 0 ? this.code : code);
  };
  YamlDecoder$UniChar.prototype.toString = function () {
    return 'UniChar(offset=' + Kotlin.toString(this.offset) + (', code=' + Kotlin.toString(this.code)) + ')';
  };
  YamlDecoder$UniChar.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  YamlDecoder$UniChar.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.code, other.code)))));
  };
  function YamlDecoder$UTF32Decoder(combine) {
    YamlDecoder$UTF32Decoder$Companion_getInstance();
    this.combine = combine;
  }
  function YamlDecoder$UTF32Decoder$Companion() {
    YamlDecoder$UTF32Decoder$Companion_instance = this;
  }
  function YamlDecoder$UTF32Decoder$Companion$be$lambda(first, second, third, fourth) {
    return fourth + (256 * (third + (256 * (second + (256 * first | 0) | 0) | 0) | 0) | 0) | 0;
  }
  YamlDecoder$UTF32Decoder$Companion.prototype.be = function () {
    return new YamlDecoder$UTF32Decoder(YamlDecoder$UTF32Decoder$Companion$be$lambda);
  };
  function YamlDecoder$UTF32Decoder$Companion$le$lambda(first, second, third, fourth) {
    return first + (256 * (second + (256 * (third + (256 * fourth | 0) | 0) | 0) | 0) | 0) | 0;
  }
  YamlDecoder$UTF32Decoder$Companion.prototype.le = function () {
    return new YamlDecoder$UTF32Decoder(YamlDecoder$UTF32Decoder$Companion$le$lambda);
  };
  YamlDecoder$UTF32Decoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlDecoder$UTF32Decoder$Companion_instance = null;
  function YamlDecoder$UTF32Decoder$Companion_getInstance() {
    if (YamlDecoder$UTF32Decoder$Companion_instance === null) {
      new YamlDecoder$UTF32Decoder$Companion();
    }
    return YamlDecoder$UTF32Decoder$Companion_instance;
  }
  YamlDecoder$UTF32Decoder.prototype.decode_ir89t6$ = function (bytes, offset) {
    if (YamlDecoder_getInstance().hasFewerThan_0(offset, 4, bytes)) {
      throw IllegalArgumentException_init('UTF-32 input contains invalid number of bytes');
    }
    var first = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset]);
    var second = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset + 1 | 0]);
    var third = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset + 2 | 0]);
    var fourth = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset + 3 | 0]);
    return new YamlDecoder$UniChar(offset + 4 | 0, this.combine(first, second, third, fourth));
  };
  YamlDecoder$UTF32Decoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UTF32Decoder',
    interfaces: [YamlDecoder$Decoder]
  };
  function YamlDecoder$UTF16Decoder(combine) {
    YamlDecoder$UTF16Decoder$Companion_getInstance();
    this.combine = combine;
    this.surrogateOffset_0 = -56613888;
  }
  function YamlDecoder$UTF16Decoder$Companion() {
    YamlDecoder$UTF16Decoder$Companion_instance = this;
  }
  function YamlDecoder$UTF16Decoder$Companion$be$lambda(first, second) {
    return second + (first * 256 | 0) | 0;
  }
  YamlDecoder$UTF16Decoder$Companion.prototype.be = function () {
    return new YamlDecoder$UTF16Decoder(YamlDecoder$UTF16Decoder$Companion$be$lambda);
  };
  function YamlDecoder$UTF16Decoder$Companion$le$lambda(first, second) {
    return first + (second * 256 | 0) | 0;
  }
  YamlDecoder$UTF16Decoder$Companion.prototype.le = function () {
    return new YamlDecoder$UTF16Decoder(YamlDecoder$UTF16Decoder$Companion$le$lambda);
  };
  YamlDecoder$UTF16Decoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlDecoder$UTF16Decoder$Companion_instance = null;
  function YamlDecoder$UTF16Decoder$Companion_getInstance() {
    if (YamlDecoder$UTF16Decoder$Companion_instance === null) {
      new YamlDecoder$UTF16Decoder$Companion();
    }
    return YamlDecoder$UTF16Decoder$Companion_instance;
  }
  YamlDecoder$UTF16Decoder.prototype.decode_ir89t6$ = function (bytes, offset) {
    var tmp$;
    var head = this.undo_0(bytes, offset);
    var tmp$_0;
    tmp$_0 = head.code;
    if (55296 <= tmp$_0 && tmp$_0 <= 56319)
      tmp$ = this.combineLead_0(head, bytes, head.offset);
    else {
      var tmp$_1;
      tmp$_1 = head.code;
      if (56320 <= tmp$_1 && tmp$_1 <= 57343)
        throw IllegalArgumentException_init('UTF-16 contains trail surrogate without lead surrogate');
      else
        tmp$ = head;
    }
    return tmp$;
  };
  YamlDecoder$UTF16Decoder.prototype.undo_0 = function (bytes, offset) {
    if (YamlDecoder_getInstance().hasFewerThan_0(offset, 2, bytes)) {
      throw IllegalArgumentException_init('UTF-16 input contains odd number of bytes');
    }
    var first = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset]);
    var second = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset + 1 | 0]);
    return new YamlDecoder$UniChar(offset + 2 | 0, this.combine(first, second));
  };
  YamlDecoder$UTF16Decoder.prototype.combineSurrogates_0 = function (lead, trail) {
    return (lead * 1024 | 0) + trail + this.surrogateOffset_0 | 0;
  };
  YamlDecoder$UTF16Decoder.prototype.combineLead_0 = function (lead, bytes, offset) {
    var tmp$;
    if (YamlDecoder_getInstance().hasFewerThan_0(offset, 2, bytes)) {
      throw IllegalArgumentException_init('UTF-16 contains lead surrogate as final character');
    }
    var tail = this.undo_0(bytes, offset);
    var tailChar = tail.code;
    tmp$ = tail.code;
    if (56320 <= tmp$ && tmp$ <= 57343) {
      return new YamlDecoder$UniChar(tail.offset, this.combineSurrogates_0(lead.code, tailChar));
    }
    throw IllegalArgumentException_init('UTF-16 contains lead surrogate without trail surrogate');
  };
  YamlDecoder$UTF16Decoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UTF16Decoder',
    interfaces: [YamlDecoder$Decoder]
  };
  function YamlDecoder$UTF8Decoder() {
  }
  YamlDecoder$UTF8Decoder.prototype.decode_ir89t6$ = function (bytes, offset) {
    var tmp$;
    if (YamlDecoder_getInstance().hasFewerThan_0(offset, 1, bytes)) {
      throw IllegalArgumentException_init('UTF-8 input contains invalid number of bytes');
    }
    var first = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset]);
    if (first < 128)
      tmp$ = new YamlDecoder$UniChar(offset + 1 | 0, first);
    else if (first < 192)
      throw IllegalArgumentException_init('UTF-8 input contains invalid first byte');
    else if (first < 224)
      tmp$ = this.decodeTwoUTF8_0(first, offset + 1 | 0, bytes);
    else if (first < 240)
      tmp$ = this.decodeThreeUTF8_0(first, offset + 1 | 0, bytes);
    else if (first < 248)
      tmp$ = this.decodeFourUTF8_0(first, offset + 1 | 0, bytes);
    else
      throw IllegalArgumentException_init('UTF-8 input contains invalid first byte');
    return tmp$;
  };
  YamlDecoder$UTF8Decoder.prototype.decodeTwoUTF8_0 = function (first, offset, bytes) {
    var tmp$;
    if (YamlDecoder_getInstance().hasFewerThan_0(offset, 1, bytes)) {
      throw IllegalArgumentException_init('UTF-8 double byte char is missing second byte at eof');
    }
    var second = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset]);
    if (second < 128 || 191 < second)
      throw IllegalArgumentException_init('UTF-8 triple byte char has invalid second byte');
    else
      tmp$ = new YamlDecoder$UniChar(offset + 1 | 0, this.combineTwoUTF8_0(first, second));
    return tmp$;
  };
  YamlDecoder$UTF8Decoder.prototype.combineTwoUTF8_0 = function (first, second) {
    return ((first - 192 | 0) * 64 | 0) + (second - 128) | 0;
  };
  YamlDecoder$UTF8Decoder.prototype.decodeThreeUTF8_0 = function (first, offset, bytes) {
    var tmp$;
    if (YamlDecoder_getInstance().hasFewerThan_0(offset, 2, bytes)) {
      throw IllegalArgumentException_init('UTF-8 triple byte char is missing bytes at eof');
    }
    var second = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset]);
    var third = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset + 1 | 0]);
    if (second < 128 || 191 < second)
      throw IllegalArgumentException_init('UTF-8 triple byte char has invalid second byte');
    else if (third < 128 || 191 < third)
      throw IllegalArgumentException_init('UTF-8 triple byte char has invalid third byte');
    else
      tmp$ = new YamlDecoder$UniChar(offset + 2 | 0, this.combineThreeUTF8_0(first, second, third));
    return tmp$;
  };
  YamlDecoder$UTF8Decoder.prototype.combineThreeUTF8_0 = function (first, second, third) {
    return ((first - 224 | 0) * 4096 | 0) + ((second - 128 | 0) * 64 | 0) + (third - 128) | 0;
  };
  YamlDecoder$UTF8Decoder.prototype.decodeFourUTF8_0 = function (first, offset, bytes) {
    var tmp$;
    if (YamlDecoder_getInstance().hasFewerThan_0(offset, 3, bytes)) {
      throw IllegalArgumentException_init('UTF-8 quad byte char is missing bytes at eof');
    }
    var second = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset]);
    var third = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset + 1 | 0]);
    var fourth = YamlDecoder_getInstance().toUnsignedInt_0(bytes[offset + 2 | 0]);
    if (second < 128 || 191 < second)
      throw IllegalArgumentException_init('UTF-8 quad byte char has invalid second byte');
    else if (third < 128 || 191 < third)
      throw IllegalArgumentException_init('UTF-8 quad byte char has invalid third byte');
    else if (fourth < 128 || 191 < fourth)
      throw IllegalArgumentException_init('UTF-8 quad byte char has invalid fourth byte');
    else
      tmp$ = new YamlDecoder$UniChar(offset + 3 | 0, this.combineFourUTF8_0(first, second, third, fourth));
    return tmp$;
  };
  YamlDecoder$UTF8Decoder.prototype.combineFourUTF8_0 = function (first, second, third, fourth) {
    return ((first - 240 | 0) * 262144 | 0) + ((second - 128 | 0) * 4096 | 0) + ((third - 128 | 0) * 64 | 0) + (fourth - 128) | 0;
  };
  YamlDecoder$UTF8Decoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UTF8Decoder',
    interfaces: [YamlDecoder$Decoder]
  };
  YamlDecoder.prototype.hasFewerThan_0 = function (offset, n, bytes) {
    return (bytes.length - offset | 0) < n;
  };
  YamlDecoder.prototype.toUnsignedInt_0 = function ($receiver) {
    return $receiver & 255;
  };
  function YamlDecoder$Encoding(name, ordinal, text) {
    Enum.call(this);
    this.text_td05r4$_0 = text;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlDecoder$Encoding_initFields() {
    YamlDecoder$Encoding_initFields = function () {
    };
    YamlDecoder$Encoding$UTF8_instance = new YamlDecoder$Encoding('UTF8', 0, 'UTF-8');
    YamlDecoder$Encoding$UTF16LE_instance = new YamlDecoder$Encoding('UTF16LE', 1, 'UTF-16LE');
    YamlDecoder$Encoding$UTF16BE_instance = new YamlDecoder$Encoding('UTF16BE', 2, 'UTF-16BE');
    YamlDecoder$Encoding$UTF32LE_instance = new YamlDecoder$Encoding('UTF32LE', 3, 'UTF-32LE');
    YamlDecoder$Encoding$UTF32BE_instance = new YamlDecoder$Encoding('UTF32BE', 4, 'UTF-32BE');
  }
  var YamlDecoder$Encoding$UTF8_instance;
  function YamlDecoder$Encoding$UTF8_getInstance() {
    YamlDecoder$Encoding_initFields();
    return YamlDecoder$Encoding$UTF8_instance;
  }
  var YamlDecoder$Encoding$UTF16LE_instance;
  function YamlDecoder$Encoding$UTF16LE_getInstance() {
    YamlDecoder$Encoding_initFields();
    return YamlDecoder$Encoding$UTF16LE_instance;
  }
  var YamlDecoder$Encoding$UTF16BE_instance;
  function YamlDecoder$Encoding$UTF16BE_getInstance() {
    YamlDecoder$Encoding_initFields();
    return YamlDecoder$Encoding$UTF16BE_instance;
  }
  var YamlDecoder$Encoding$UTF32LE_instance;
  function YamlDecoder$Encoding$UTF32LE_getInstance() {
    YamlDecoder$Encoding_initFields();
    return YamlDecoder$Encoding$UTF32LE_instance;
  }
  var YamlDecoder$Encoding$UTF32BE_instance;
  function YamlDecoder$Encoding$UTF32BE_getInstance() {
    YamlDecoder$Encoding_initFields();
    return YamlDecoder$Encoding$UTF32BE_instance;
  }
  YamlDecoder$Encoding.prototype.toString = function () {
    return this.text_td05r4$_0;
  };
  YamlDecoder$Encoding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Encoding',
    interfaces: [Enum]
  };
  function YamlDecoder$Encoding$values() {
    return [YamlDecoder$Encoding$UTF8_getInstance(), YamlDecoder$Encoding$UTF16LE_getInstance(), YamlDecoder$Encoding$UTF16BE_getInstance(), YamlDecoder$Encoding$UTF32LE_getInstance(), YamlDecoder$Encoding$UTF32BE_getInstance()];
  }
  YamlDecoder$Encoding.values = YamlDecoder$Encoding$values;
  function YamlDecoder$Encoding$valueOf(name) {
    switch (name) {
      case 'UTF8':
        return YamlDecoder$Encoding$UTF8_getInstance();
      case 'UTF16LE':
        return YamlDecoder$Encoding$UTF16LE_getInstance();
      case 'UTF16BE':
        return YamlDecoder$Encoding$UTF16BE_getInstance();
      case 'UTF32LE':
        return YamlDecoder$Encoding$UTF32LE_getInstance();
      case 'UTF32BE':
        return YamlDecoder$Encoding$UTF32BE_getInstance();
      default:throwISE('No enum constant io.dahgan.YamlDecoder.Encoding.' + name);
    }
  }
  YamlDecoder$Encoding.valueOf_61zpoe$ = YamlDecoder$Encoding$valueOf;
  function YamlDecoder$Stream() {
    YamlDecoder$Stream$Companion_getInstance();
  }
  function YamlDecoder$Stream$Companion() {
    YamlDecoder$Stream$Companion_instance = this;
  }
  YamlDecoder$Stream$Companion.prototype.of_fqrh44$ = function (input) {
    return new YamlDecoder$ByteStream(input);
  };
  YamlDecoder$Stream$Companion.prototype.empty = function () {
    return new YamlDecoder$ByteStream(new Int8Array([]));
  };
  YamlDecoder$Stream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlDecoder$Stream$Companion_instance = null;
  function YamlDecoder$Stream$Companion_getInstance() {
    if (YamlDecoder$Stream$Companion_instance === null) {
      new YamlDecoder$Stream$Companion();
    }
    return YamlDecoder$Stream$Companion_instance;
  }
  YamlDecoder$Stream.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Stream',
    interfaces: []
  };
  function YamlDecoder$ByteStream(input, offset) {
    YamlDecoder$ByteStream$Companion_getInstance();
    if (offset === void 0)
      offset = 0;
    this.input_0 = input;
    this.offset_0 = offset;
    this.encoding_361bwv$_0 = lazy(YamlDecoder$ByteStream$encoding$lambda(this));
    this.head_63a6ci$_0 = lazy(YamlDecoder$ByteStream$head$lambda(this));
  }
  function YamlDecoder$ByteStream$Companion() {
    YamlDecoder$ByteStream$Companion_instance = this;
    this.X00_0 = toByte(0);
    this.XFE_0 = toByte(254);
    this.XFF_0 = toByte(255);
    this.XEF_0 = toByte(239);
    this.XBB_0 = toByte(187);
    this.XBF_0 = toByte(191);
    this.decoders_0 = mapOf([to(YamlDecoder$Encoding$UTF8_getInstance(), new YamlDecoder$UTF8Decoder()), to(YamlDecoder$Encoding$UTF16LE_getInstance(), YamlDecoder$UTF16Decoder$Companion_getInstance().le()), to(YamlDecoder$Encoding$UTF16BE_getInstance(), YamlDecoder$UTF16Decoder$Companion_getInstance().be()), to(YamlDecoder$Encoding$UTF32LE_getInstance(), YamlDecoder$UTF32Decoder$Companion_getInstance().le()), to(YamlDecoder$Encoding$UTF32BE_getInstance(), YamlDecoder$UTF32Decoder$Companion_getInstance().be())]);
  }
  YamlDecoder$ByteStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlDecoder$ByteStream$Companion_instance = null;
  function YamlDecoder$ByteStream$Companion_getInstance() {
    if (YamlDecoder$ByteStream$Companion_instance === null) {
      new YamlDecoder$ByteStream$Companion();
    }
    return YamlDecoder$ByteStream$Companion_instance;
  }
  Object.defineProperty(YamlDecoder$ByteStream.prototype, 'encoding_0', {
    get: function () {
      return this.encoding_361bwv$_0.value;
    }
  });
  Object.defineProperty(YamlDecoder$ByteStream.prototype, 'head_0', {
    get: function () {
      return this.head_63a6ci$_0.value;
    }
  });
  YamlDecoder$ByteStream.prototype.encoding = function () {
    return this.encoding_0;
  };
  YamlDecoder$ByteStream.prototype.head = function () {
    return this.head_0;
  };
  YamlDecoder$ByteStream.prototype.tail = function () {
    return new YamlDecoder$ByteStream(this.input_0, this.head_0.offset);
  };
  YamlDecoder$ByteStream.prototype.isEmpty = function () {
    return this.input_0.length <= this.offset_0;
  };
  YamlDecoder$ByteStream.prototype.isNotEmpty = function () {
    return !this.isEmpty();
  };
  YamlDecoder$ByteStream.prototype.push_l6z0d4$ = function (head) {
    return new YamlDecoder$PushedStream(head, this);
  };
  YamlDecoder$ByteStream.prototype.codes = function () {
    var destination = ArrayList_init();
    var current = this;
    while (current.isNotEmpty()) {
      destination.add_11rb$(current.head_0.code);
      current = current.tail();
    }
    return toIntArray(destination);
  };
  function YamlDecoder$ByteStream$encoding$lambda(this$ByteStream) {
    return function () {
      if (this$ByteStream.input_0.length >= 4 && this$ByteStream.input_0[0] === YamlDecoder$ByteStream$Companion_getInstance().X00_0 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().X00_0 && this$ByteStream.input_0[2] === YamlDecoder$ByteStream$Companion_getInstance().XFE_0 && this$ByteStream.input_0[3] === YamlDecoder$ByteStream$Companion_getInstance().XFF_0)
        return YamlDecoder$Encoding$UTF32BE_getInstance();
      else if (this$ByteStream.input_0.length >= 4 && this$ByteStream.input_0[0] === YamlDecoder$ByteStream$Companion_getInstance().X00_0 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().X00_0 && this$ByteStream.input_0[2] === YamlDecoder$ByteStream$Companion_getInstance().X00_0)
        return YamlDecoder$Encoding$UTF32BE_getInstance();
      else if (this$ByteStream.input_0.length >= 4 && this$ByteStream.input_0[0] === YamlDecoder$ByteStream$Companion_getInstance().XFF_0 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().XFE_0 && this$ByteStream.input_0[2] === YamlDecoder$ByteStream$Companion_getInstance().X00_0 && this$ByteStream.input_0[3] === YamlDecoder$ByteStream$Companion_getInstance().X00_0)
        return YamlDecoder$Encoding$UTF32LE_getInstance();
      else if (this$ByteStream.input_0.length >= 4 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().X00_0 && this$ByteStream.input_0[2] === YamlDecoder$ByteStream$Companion_getInstance().X00_0 && this$ByteStream.input_0[3] === YamlDecoder$ByteStream$Companion_getInstance().X00_0)
        return YamlDecoder$Encoding$UTF32LE_getInstance();
      else if (this$ByteStream.input_0.length >= 2 && this$ByteStream.input_0[0] === YamlDecoder$ByteStream$Companion_getInstance().XFE_0 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().XFF_0)
        return YamlDecoder$Encoding$UTF16BE_getInstance();
      else if (this$ByteStream.input_0.length >= 1 && this$ByteStream.input_0[0] === YamlDecoder$ByteStream$Companion_getInstance().X00_0)
        return YamlDecoder$Encoding$UTF16BE_getInstance();
      else if (this$ByteStream.input_0.length >= 2 && this$ByteStream.input_0[0] === YamlDecoder$ByteStream$Companion_getInstance().XFF_0 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().XFE_0)
        return YamlDecoder$Encoding$UTF16LE_getInstance();
      else if (this$ByteStream.input_0.length >= 2 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().X00_0)
        return YamlDecoder$Encoding$UTF16LE_getInstance();
      else if (this$ByteStream.input_0.length >= 4 && this$ByteStream.input_0[0] === YamlDecoder$ByteStream$Companion_getInstance().XEF_0 && this$ByteStream.input_0[1] === YamlDecoder$ByteStream$Companion_getInstance().XBB_0 && this$ByteStream.input_0[2] === YamlDecoder$ByteStream$Companion_getInstance().XBF_0)
        return YamlDecoder$Encoding$UTF8_getInstance();
      else
        return YamlDecoder$Encoding$UTF8_getInstance();
    };
  }
  function YamlDecoder$ByteStream$head$lambda(this$ByteStream) {
    return function () {
      return ensureNotNull(YamlDecoder$ByteStream$Companion_getInstance().decoders_0.get_11rb$(this$ByteStream.encoding_0)).decode_ir89t6$(this$ByteStream.input_0, this$ByteStream.offset_0);
    };
  }
  YamlDecoder$ByteStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteStream',
    interfaces: [YamlDecoder$Stream]
  };
  function YamlDecoder$PushedStream(head, tail) {
    this.head_0 = head;
    this.tail_0 = tail;
  }
  YamlDecoder$PushedStream.prototype.encoding = function () {
    return this.tail_0.encoding();
  };
  YamlDecoder$PushedStream.prototype.head = function () {
    return this.head_0;
  };
  YamlDecoder$PushedStream.prototype.tail = function () {
    return this.tail_0;
  };
  YamlDecoder$PushedStream.prototype.isEmpty = function () {
    return false;
  };
  YamlDecoder$PushedStream.prototype.isNotEmpty = function () {
    return true;
  };
  YamlDecoder$PushedStream.prototype.push_l6z0d4$ = function (head) {
    return new YamlDecoder$PushedStream(head, this);
  };
  YamlDecoder$PushedStream.prototype.codes = function () {
    return Kotlin.primitiveArrayConcat(new Int32Array([this.head_0.code]), this.tail_0.codes());
  };
  YamlDecoder$PushedStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PushedStream',
    interfaces: [YamlDecoder$Stream]
  };
  YamlDecoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YamlDecoder',
    interfaces: [YamlParser]
  };
  var YamlDecoder_instance = null;
  function YamlDecoder_getInstance() {
    if (YamlDecoder_instance === null) {
      new YamlDecoder();
    }
    return YamlDecoder_instance;
  }
  function YamlParser() {
    YamlParser$Companion_getInstance();
  }
  function YamlParser$Chomp(name, ordinal, text) {
    Enum.call(this);
    this.text = text;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlParser$Chomp_initFields() {
    YamlParser$Chomp_initFields = function () {
    };
    YamlParser$Chomp$Strip_instance = new YamlParser$Chomp('Strip', 0, 'strip');
    YamlParser$Chomp$Clip_instance = new YamlParser$Chomp('Clip', 1, 'clip');
    YamlParser$Chomp$Keep_instance = new YamlParser$Chomp('Keep', 2, 'keep');
    YamlParser$Chomp$Companion_getInstance();
  }
  var YamlParser$Chomp$Strip_instance;
  function YamlParser$Chomp$Strip_getInstance() {
    YamlParser$Chomp_initFields();
    return YamlParser$Chomp$Strip_instance;
  }
  var YamlParser$Chomp$Clip_instance;
  function YamlParser$Chomp$Clip_getInstance() {
    YamlParser$Chomp_initFields();
    return YamlParser$Chomp$Clip_instance;
  }
  var YamlParser$Chomp$Keep_instance;
  function YamlParser$Chomp$Keep_getInstance() {
    YamlParser$Chomp_initFields();
    return YamlParser$Chomp$Keep_instance;
  }
  YamlParser$Chomp.prototype.toString = function () {
    return this.text;
  };
  function YamlParser$Chomp$Companion() {
    YamlParser$Chomp$Companion_instance = this;
  }
  YamlParser$Chomp$Companion.prototype.from_61zpoe$ = function (word) {
    switch (word) {
      case 'strip':
        return YamlParser$Chomp$Strip_getInstance();
      case 'clip':
        return YamlParser$Chomp$Clip_getInstance();
      case 'keep':
        return YamlParser$Chomp$Keep_getInstance();
      default:throw IllegalArgumentException_init('unknown chomp: ' + word);
    }
  };
  YamlParser$Chomp$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlParser$Chomp$Companion_instance = null;
  function YamlParser$Chomp$Companion_getInstance() {
    YamlParser$Chomp_initFields();
    if (YamlParser$Chomp$Companion_instance === null) {
      new YamlParser$Chomp$Companion();
    }
    return YamlParser$Chomp$Companion_instance;
  }
  YamlParser$Chomp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chomp',
    interfaces: [Enum]
  };
  function YamlParser$Chomp$values() {
    return [YamlParser$Chomp$Strip_getInstance(), YamlParser$Chomp$Clip_getInstance(), YamlParser$Chomp$Keep_getInstance()];
  }
  YamlParser$Chomp.values = YamlParser$Chomp$values;
  function YamlParser$Chomp$valueOf(name) {
    switch (name) {
      case 'Strip':
        return YamlParser$Chomp$Strip_getInstance();
      case 'Clip':
        return YamlParser$Chomp$Clip_getInstance();
      case 'Keep':
        return YamlParser$Chomp$Keep_getInstance();
      default:throwISE('No enum constant io.dahgan.YamlParser.Chomp.' + name);
    }
  }
  YamlParser$Chomp.valueOf_61zpoe$ = YamlParser$Chomp$valueOf;
  function YamlParser$Code(name, ordinal, code) {
    Enum.call(this);
    this.code = code;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlParser$Code_initFields() {
    YamlParser$Code_initFields = function () {
    };
    YamlParser$Code$Bom_instance = new YamlParser$Code('Bom', 0, 'U');
    YamlParser$Code$Text_instance = new YamlParser$Code('Text', 1, 'T');
    YamlParser$Code$Meta_instance = new YamlParser$Code('Meta', 2, 't');
    YamlParser$Code$Break_instance = new YamlParser$Code('Break', 3, 'b');
    YamlParser$Code$LineFeed_instance = new YamlParser$Code('LineFeed', 4, 'L');
    YamlParser$Code$LineFold_instance = new YamlParser$Code('LineFold', 5, 'l');
    YamlParser$Code$Indicator_instance = new YamlParser$Code('Indicator', 6, 'I');
    YamlParser$Code$White_instance = new YamlParser$Code('White', 7, 'w');
    YamlParser$Code$Indent_instance = new YamlParser$Code('Indent', 8, 'i');
    YamlParser$Code$DirectivesEnd_instance = new YamlParser$Code('DirectivesEnd', 9, 'K');
    YamlParser$Code$DocumentEnd_instance = new YamlParser$Code('DocumentEnd', 10, 'k');
    YamlParser$Code$BeginEscape_instance = new YamlParser$Code('BeginEscape', 11, 'E');
    YamlParser$Code$EndEscape_instance = new YamlParser$Code('EndEscape', 12, 'e');
    YamlParser$Code$BeginComment_instance = new YamlParser$Code('BeginComment', 13, 'C');
    YamlParser$Code$EndComment_instance = new YamlParser$Code('EndComment', 14, 'c');
    YamlParser$Code$BeginDirective_instance = new YamlParser$Code('BeginDirective', 15, 'D');
    YamlParser$Code$EndDirective_instance = new YamlParser$Code('EndDirective', 16, 'd');
    YamlParser$Code$BeginTag_instance = new YamlParser$Code('BeginTag', 17, 'G');
    YamlParser$Code$EndTag_instance = new YamlParser$Code('EndTag', 18, 'g');
    YamlParser$Code$BeginHandle_instance = new YamlParser$Code('BeginHandle', 19, 'H');
    YamlParser$Code$EndHandle_instance = new YamlParser$Code('EndHandle', 20, 'h');
    YamlParser$Code$BeginAnchor_instance = new YamlParser$Code('BeginAnchor', 21, 'A');
    YamlParser$Code$EndAnchor_instance = new YamlParser$Code('EndAnchor', 22, 'a');
    YamlParser$Code$BeginProperties_instance = new YamlParser$Code('BeginProperties', 23, 'P');
    YamlParser$Code$EndProperties_instance = new YamlParser$Code('EndProperties', 24, 'p');
    YamlParser$Code$BeginAlias_instance = new YamlParser$Code('BeginAlias', 25, 'R');
    YamlParser$Code$EndAlias_instance = new YamlParser$Code('EndAlias', 26, 'r');
    YamlParser$Code$BeginScalar_instance = new YamlParser$Code('BeginScalar', 27, 'S');
    YamlParser$Code$EndScalar_instance = new YamlParser$Code('EndScalar', 28, 's');
    YamlParser$Code$BeginSequence_instance = new YamlParser$Code('BeginSequence', 29, 'Q');
    YamlParser$Code$EndSequence_instance = new YamlParser$Code('EndSequence', 30, 'q');
    YamlParser$Code$BeginMapping_instance = new YamlParser$Code('BeginMapping', 31, 'M');
    YamlParser$Code$EndMapping_instance = new YamlParser$Code('EndMapping', 32, 'm');
    YamlParser$Code$BeginPair_instance = new YamlParser$Code('BeginPair', 33, 'X');
    YamlParser$Code$EndPair_instance = new YamlParser$Code('EndPair', 34, 'x');
    YamlParser$Code$BeginNode_instance = new YamlParser$Code('BeginNode', 35, 'N');
    YamlParser$Code$EndNode_instance = new YamlParser$Code('EndNode', 36, 'n');
    YamlParser$Code$BeginDocument_instance = new YamlParser$Code('BeginDocument', 37, 'O');
    YamlParser$Code$EndDocument_instance = new YamlParser$Code('EndDocument', 38, 'o');
    YamlParser$Code$BeginStream_instance = new YamlParser$Code('BeginStream', 39, '');
    YamlParser$Code$EndStream_instance = new YamlParser$Code('EndStream', 40, '');
    YamlParser$Code$Error_instance = new YamlParser$Code('Error', 41, '!');
    YamlParser$Code$Unparsed_instance = new YamlParser$Code('Unparsed', 42, '-');
    YamlParser$Code$Detected_instance = new YamlParser$Code('Detected', 43, '$');
  }
  var YamlParser$Code$Bom_instance;
  function YamlParser$Code$Bom_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Bom_instance;
  }
  var YamlParser$Code$Text_instance;
  function YamlParser$Code$Text_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Text_instance;
  }
  var YamlParser$Code$Meta_instance;
  function YamlParser$Code$Meta_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Meta_instance;
  }
  var YamlParser$Code$Break_instance;
  function YamlParser$Code$Break_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Break_instance;
  }
  var YamlParser$Code$LineFeed_instance;
  function YamlParser$Code$LineFeed_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$LineFeed_instance;
  }
  var YamlParser$Code$LineFold_instance;
  function YamlParser$Code$LineFold_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$LineFold_instance;
  }
  var YamlParser$Code$Indicator_instance;
  function YamlParser$Code$Indicator_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Indicator_instance;
  }
  var YamlParser$Code$White_instance;
  function YamlParser$Code$White_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$White_instance;
  }
  var YamlParser$Code$Indent_instance;
  function YamlParser$Code$Indent_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Indent_instance;
  }
  var YamlParser$Code$DirectivesEnd_instance;
  function YamlParser$Code$DirectivesEnd_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$DirectivesEnd_instance;
  }
  var YamlParser$Code$DocumentEnd_instance;
  function YamlParser$Code$DocumentEnd_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$DocumentEnd_instance;
  }
  var YamlParser$Code$BeginEscape_instance;
  function YamlParser$Code$BeginEscape_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginEscape_instance;
  }
  var YamlParser$Code$EndEscape_instance;
  function YamlParser$Code$EndEscape_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndEscape_instance;
  }
  var YamlParser$Code$BeginComment_instance;
  function YamlParser$Code$BeginComment_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginComment_instance;
  }
  var YamlParser$Code$EndComment_instance;
  function YamlParser$Code$EndComment_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndComment_instance;
  }
  var YamlParser$Code$BeginDirective_instance;
  function YamlParser$Code$BeginDirective_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginDirective_instance;
  }
  var YamlParser$Code$EndDirective_instance;
  function YamlParser$Code$EndDirective_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndDirective_instance;
  }
  var YamlParser$Code$BeginTag_instance;
  function YamlParser$Code$BeginTag_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginTag_instance;
  }
  var YamlParser$Code$EndTag_instance;
  function YamlParser$Code$EndTag_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndTag_instance;
  }
  var YamlParser$Code$BeginHandle_instance;
  function YamlParser$Code$BeginHandle_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginHandle_instance;
  }
  var YamlParser$Code$EndHandle_instance;
  function YamlParser$Code$EndHandle_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndHandle_instance;
  }
  var YamlParser$Code$BeginAnchor_instance;
  function YamlParser$Code$BeginAnchor_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginAnchor_instance;
  }
  var YamlParser$Code$EndAnchor_instance;
  function YamlParser$Code$EndAnchor_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndAnchor_instance;
  }
  var YamlParser$Code$BeginProperties_instance;
  function YamlParser$Code$BeginProperties_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginProperties_instance;
  }
  var YamlParser$Code$EndProperties_instance;
  function YamlParser$Code$EndProperties_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndProperties_instance;
  }
  var YamlParser$Code$BeginAlias_instance;
  function YamlParser$Code$BeginAlias_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginAlias_instance;
  }
  var YamlParser$Code$EndAlias_instance;
  function YamlParser$Code$EndAlias_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndAlias_instance;
  }
  var YamlParser$Code$BeginScalar_instance;
  function YamlParser$Code$BeginScalar_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginScalar_instance;
  }
  var YamlParser$Code$EndScalar_instance;
  function YamlParser$Code$EndScalar_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndScalar_instance;
  }
  var YamlParser$Code$BeginSequence_instance;
  function YamlParser$Code$BeginSequence_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginSequence_instance;
  }
  var YamlParser$Code$EndSequence_instance;
  function YamlParser$Code$EndSequence_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndSequence_instance;
  }
  var YamlParser$Code$BeginMapping_instance;
  function YamlParser$Code$BeginMapping_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginMapping_instance;
  }
  var YamlParser$Code$EndMapping_instance;
  function YamlParser$Code$EndMapping_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndMapping_instance;
  }
  var YamlParser$Code$BeginPair_instance;
  function YamlParser$Code$BeginPair_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginPair_instance;
  }
  var YamlParser$Code$EndPair_instance;
  function YamlParser$Code$EndPair_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndPair_instance;
  }
  var YamlParser$Code$BeginNode_instance;
  function YamlParser$Code$BeginNode_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginNode_instance;
  }
  var YamlParser$Code$EndNode_instance;
  function YamlParser$Code$EndNode_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndNode_instance;
  }
  var YamlParser$Code$BeginDocument_instance;
  function YamlParser$Code$BeginDocument_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginDocument_instance;
  }
  var YamlParser$Code$EndDocument_instance;
  function YamlParser$Code$EndDocument_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndDocument_instance;
  }
  var YamlParser$Code$BeginStream_instance;
  function YamlParser$Code$BeginStream_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$BeginStream_instance;
  }
  var YamlParser$Code$EndStream_instance;
  function YamlParser$Code$EndStream_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$EndStream_instance;
  }
  var YamlParser$Code$Error_instance;
  function YamlParser$Code$Error_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Error_instance;
  }
  var YamlParser$Code$Unparsed_instance;
  function YamlParser$Code$Unparsed_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Unparsed_instance;
  }
  var YamlParser$Code$Detected_instance;
  function YamlParser$Code$Detected_getInstance() {
    YamlParser$Code_initFields();
    return YamlParser$Code$Detected_instance;
  }
  YamlParser$Code.prototype.toString = function () {
    return this.code;
  };
  YamlParser$Code.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Code',
    interfaces: [Enum]
  };
  function YamlParser$Code$values() {
    return [YamlParser$Code$Bom_getInstance(), YamlParser$Code$Text_getInstance(), YamlParser$Code$Meta_getInstance(), YamlParser$Code$Break_getInstance(), YamlParser$Code$LineFeed_getInstance(), YamlParser$Code$LineFold_getInstance(), YamlParser$Code$Indicator_getInstance(), YamlParser$Code$White_getInstance(), YamlParser$Code$Indent_getInstance(), YamlParser$Code$DirectivesEnd_getInstance(), YamlParser$Code$DocumentEnd_getInstance(), YamlParser$Code$BeginEscape_getInstance(), YamlParser$Code$EndEscape_getInstance(), YamlParser$Code$BeginComment_getInstance(), YamlParser$Code$EndComment_getInstance(), YamlParser$Code$BeginDirective_getInstance(), YamlParser$Code$EndDirective_getInstance(), YamlParser$Code$BeginTag_getInstance(), YamlParser$Code$EndTag_getInstance(), YamlParser$Code$BeginHandle_getInstance(), YamlParser$Code$EndHandle_getInstance(), YamlParser$Code$BeginAnchor_getInstance(), YamlParser$Code$EndAnchor_getInstance(), YamlParser$Code$BeginProperties_getInstance(), YamlParser$Code$EndProperties_getInstance(), YamlParser$Code$BeginAlias_getInstance(), YamlParser$Code$EndAlias_getInstance(), YamlParser$Code$BeginScalar_getInstance(), YamlParser$Code$EndScalar_getInstance(), YamlParser$Code$BeginSequence_getInstance(), YamlParser$Code$EndSequence_getInstance(), YamlParser$Code$BeginMapping_getInstance(), YamlParser$Code$EndMapping_getInstance(), YamlParser$Code$BeginPair_getInstance(), YamlParser$Code$EndPair_getInstance(), YamlParser$Code$BeginNode_getInstance(), YamlParser$Code$EndNode_getInstance(), YamlParser$Code$BeginDocument_getInstance(), YamlParser$Code$EndDocument_getInstance(), YamlParser$Code$BeginStream_getInstance(), YamlParser$Code$EndStream_getInstance(), YamlParser$Code$Error_getInstance(), YamlParser$Code$Unparsed_getInstance(), YamlParser$Code$Detected_getInstance()];
  }
  YamlParser$Code.values = YamlParser$Code$values;
  function YamlParser$Code$valueOf(name) {
    switch (name) {
      case 'Bom':
        return YamlParser$Code$Bom_getInstance();
      case 'Text':
        return YamlParser$Code$Text_getInstance();
      case 'Meta':
        return YamlParser$Code$Meta_getInstance();
      case 'Break':
        return YamlParser$Code$Break_getInstance();
      case 'LineFeed':
        return YamlParser$Code$LineFeed_getInstance();
      case 'LineFold':
        return YamlParser$Code$LineFold_getInstance();
      case 'Indicator':
        return YamlParser$Code$Indicator_getInstance();
      case 'White':
        return YamlParser$Code$White_getInstance();
      case 'Indent':
        return YamlParser$Code$Indent_getInstance();
      case 'DirectivesEnd':
        return YamlParser$Code$DirectivesEnd_getInstance();
      case 'DocumentEnd':
        return YamlParser$Code$DocumentEnd_getInstance();
      case 'BeginEscape':
        return YamlParser$Code$BeginEscape_getInstance();
      case 'EndEscape':
        return YamlParser$Code$EndEscape_getInstance();
      case 'BeginComment':
        return YamlParser$Code$BeginComment_getInstance();
      case 'EndComment':
        return YamlParser$Code$EndComment_getInstance();
      case 'BeginDirective':
        return YamlParser$Code$BeginDirective_getInstance();
      case 'EndDirective':
        return YamlParser$Code$EndDirective_getInstance();
      case 'BeginTag':
        return YamlParser$Code$BeginTag_getInstance();
      case 'EndTag':
        return YamlParser$Code$EndTag_getInstance();
      case 'BeginHandle':
        return YamlParser$Code$BeginHandle_getInstance();
      case 'EndHandle':
        return YamlParser$Code$EndHandle_getInstance();
      case 'BeginAnchor':
        return YamlParser$Code$BeginAnchor_getInstance();
      case 'EndAnchor':
        return YamlParser$Code$EndAnchor_getInstance();
      case 'BeginProperties':
        return YamlParser$Code$BeginProperties_getInstance();
      case 'EndProperties':
        return YamlParser$Code$EndProperties_getInstance();
      case 'BeginAlias':
        return YamlParser$Code$BeginAlias_getInstance();
      case 'EndAlias':
        return YamlParser$Code$EndAlias_getInstance();
      case 'BeginScalar':
        return YamlParser$Code$BeginScalar_getInstance();
      case 'EndScalar':
        return YamlParser$Code$EndScalar_getInstance();
      case 'BeginSequence':
        return YamlParser$Code$BeginSequence_getInstance();
      case 'EndSequence':
        return YamlParser$Code$EndSequence_getInstance();
      case 'BeginMapping':
        return YamlParser$Code$BeginMapping_getInstance();
      case 'EndMapping':
        return YamlParser$Code$EndMapping_getInstance();
      case 'BeginPair':
        return YamlParser$Code$BeginPair_getInstance();
      case 'EndPair':
        return YamlParser$Code$EndPair_getInstance();
      case 'BeginNode':
        return YamlParser$Code$BeginNode_getInstance();
      case 'EndNode':
        return YamlParser$Code$EndNode_getInstance();
      case 'BeginDocument':
        return YamlParser$Code$BeginDocument_getInstance();
      case 'EndDocument':
        return YamlParser$Code$EndDocument_getInstance();
      case 'BeginStream':
        return YamlParser$Code$BeginStream_getInstance();
      case 'EndStream':
        return YamlParser$Code$EndStream_getInstance();
      case 'Error':
        return YamlParser$Code$Error_getInstance();
      case 'Unparsed':
        return YamlParser$Code$Unparsed_getInstance();
      case 'Detected':
        return YamlParser$Code$Detected_getInstance();
      default:throwISE('No enum constant io.dahgan.YamlParser.Code.' + name);
    }
  }
  YamlParser$Code.valueOf_61zpoe$ = YamlParser$Code$valueOf;
  function YamlParser$Context(name, ordinal, text) {
    Enum.call(this);
    this.text = text;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function YamlParser$Context_initFields() {
    YamlParser$Context_initFields = function () {
    };
    YamlParser$Context$BlockOut_instance = new YamlParser$Context('BlockOut', 0, 'block-out');
    YamlParser$Context$BlockIn_instance = new YamlParser$Context('BlockIn', 1, 'block-in');
    YamlParser$Context$FlowOut_instance = new YamlParser$Context('FlowOut', 2, 'flow-out');
    YamlParser$Context$FlowIn_instance = new YamlParser$Context('FlowIn', 3, 'flow-in');
    YamlParser$Context$BlockKey_instance = new YamlParser$Context('BlockKey', 4, 'block-key');
    YamlParser$Context$FlowKey_instance = new YamlParser$Context('FlowKey', 5, 'flow-key');
    YamlParser$Context$Companion_getInstance();
  }
  var YamlParser$Context$BlockOut_instance;
  function YamlParser$Context$BlockOut_getInstance() {
    YamlParser$Context_initFields();
    return YamlParser$Context$BlockOut_instance;
  }
  var YamlParser$Context$BlockIn_instance;
  function YamlParser$Context$BlockIn_getInstance() {
    YamlParser$Context_initFields();
    return YamlParser$Context$BlockIn_instance;
  }
  var YamlParser$Context$FlowOut_instance;
  function YamlParser$Context$FlowOut_getInstance() {
    YamlParser$Context_initFields();
    return YamlParser$Context$FlowOut_instance;
  }
  var YamlParser$Context$FlowIn_instance;
  function YamlParser$Context$FlowIn_getInstance() {
    YamlParser$Context_initFields();
    return YamlParser$Context$FlowIn_instance;
  }
  var YamlParser$Context$BlockKey_instance;
  function YamlParser$Context$BlockKey_getInstance() {
    YamlParser$Context_initFields();
    return YamlParser$Context$BlockKey_instance;
  }
  var YamlParser$Context$FlowKey_instance;
  function YamlParser$Context$FlowKey_getInstance() {
    YamlParser$Context_initFields();
    return YamlParser$Context$FlowKey_instance;
  }
  YamlParser$Context.prototype.toString = function () {
    return this.text;
  };
  function YamlParser$Context$Companion() {
    YamlParser$Context$Companion_instance = this;
  }
  YamlParser$Context$Companion.prototype.from_61zpoe$ = function (word) {
    switch (word) {
      case 'block_out':
        return YamlParser$Context$BlockOut_getInstance();
      case 'block_in':
        return YamlParser$Context$BlockIn_getInstance();
      case 'flow_out':
        return YamlParser$Context$FlowOut_getInstance();
      case 'flow_in':
        return YamlParser$Context$FlowIn_getInstance();
      case 'block_key':
        return YamlParser$Context$BlockKey_getInstance();
      case 'flow_key':
        return YamlParser$Context$FlowKey_getInstance();
      default:throw IllegalArgumentException_init('unknown context: ' + word);
    }
  };
  YamlParser$Context$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlParser$Context$Companion_instance = null;
  function YamlParser$Context$Companion_getInstance() {
    YamlParser$Context_initFields();
    if (YamlParser$Context$Companion_instance === null) {
      new YamlParser$Context$Companion();
    }
    return YamlParser$Context$Companion_instance;
  }
  YamlParser$Context.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Context',
    interfaces: [Enum]
  };
  function YamlParser$Context$values() {
    return [YamlParser$Context$BlockOut_getInstance(), YamlParser$Context$BlockIn_getInstance(), YamlParser$Context$FlowOut_getInstance(), YamlParser$Context$FlowIn_getInstance(), YamlParser$Context$BlockKey_getInstance(), YamlParser$Context$FlowKey_getInstance()];
  }
  YamlParser$Context.values = YamlParser$Context$values;
  function YamlParser$Context$valueOf(name) {
    switch (name) {
      case 'BlockOut':
        return YamlParser$Context$BlockOut_getInstance();
      case 'BlockIn':
        return YamlParser$Context$BlockIn_getInstance();
      case 'FlowOut':
        return YamlParser$Context$FlowOut_getInstance();
      case 'FlowIn':
        return YamlParser$Context$FlowIn_getInstance();
      case 'BlockKey':
        return YamlParser$Context$BlockKey_getInstance();
      case 'FlowKey':
        return YamlParser$Context$FlowKey_getInstance();
      default:throwISE('No enum constant io.dahgan.YamlParser.Context.' + name);
    }
  }
  YamlParser$Context.valueOf_61zpoe$ = YamlParser$Context$valueOf;
  function YamlParser$Reply(result, tokens, commit, state) {
    this.result = result;
    this.tokens = tokens;
    this.commit = commit;
    this.state = state;
  }
  YamlParser$Reply.prototype.toString = function () {
    return 'Result: ' + this.result + ' , Tokens: ' + YamlParser$Companion_getInstance().showTokens_y7gcgt$(this.tokens) + ', Commit: ' + toString(this.commit) + ', State: {' + this.state + '}';
  };
  YamlParser$Reply.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reply',
    interfaces: []
  };
  YamlParser$Reply.prototype.component1 = function () {
    return this.result;
  };
  YamlParser$Reply.prototype.component2 = function () {
    return this.tokens;
  };
  YamlParser$Reply.prototype.component3 = function () {
    return this.commit;
  };
  YamlParser$Reply.prototype.component4 = function () {
    return this.state;
  };
  YamlParser$Reply.prototype.copy_9frbqe$ = function (result, tokens, commit, state) {
    return new YamlParser$Reply(result === void 0 ? this.result : result, tokens === void 0 ? this.tokens : tokens, commit === void 0 ? this.commit : commit, state === void 0 ? this.state : state);
  };
  YamlParser$Reply.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.tokens) | 0;
    result = result * 31 + Kotlin.hashCode(this.commit) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  YamlParser$Reply.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.tokens, other.tokens) && Kotlin.equals(this.commit, other.commit) && Kotlin.equals(this.state, other.state)))));
  };
  function YamlParser$Result(parser, completed, hasMore) {
    this.parser = parser;
    this.completed = completed;
    this.hasMore = hasMore;
  }
  function YamlParser$Result$Failed(message) {
    YamlParser$Result.call(this, null, false, false);
    this.message = message;
  }
  YamlParser$Result$Failed.prototype.toString = function () {
    return 'Failed ' + this.message.toString();
  };
  YamlParser$Result$Failed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Failed',
    interfaces: [YamlParser$Result]
  };
  function YamlParser$Result$Completed(result) {
    YamlParser$Result.call(this, null, true, false);
    this.result = result;
  }
  YamlParser$Result$Completed.prototype.toString = function () {
    return 'Result ' + this.result.toString();
  };
  YamlParser$Result$Completed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Completed',
    interfaces: [YamlParser$Result]
  };
  function YamlParser$Result$More(result) {
    YamlParser$Result.call(this, result, true, true);
    this.result = result;
  }
  YamlParser$Result$More.prototype.toString = function () {
    return 'More';
  };
  YamlParser$Result$More.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'More',
    interfaces: [YamlParser$Result]
  };
  YamlParser$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  function YamlParser$State(name, input, decision, limit, forbidden, isPeek, isSol, chars, charsByteOffset, charsCharOffset, charsLine, charsLineChar, byteOffset, charOffset, line, lineChar, code, last, yields) {
    this.name = name;
    this.input = input;
    this.decision = decision;
    this.limit = limit;
    this.forbidden = forbidden;
    this.isPeek = isPeek;
    this.isSol = isSol;
    this.chars = chars;
    this.charsByteOffset = charsByteOffset;
    this.charsCharOffset = charsCharOffset;
    this.charsLine = charsLine;
    this.charsLineChar = charsLineChar;
    this.byteOffset = byteOffset;
    this.charOffset = charOffset;
    this.line = line;
    this.lineChar = lineChar;
    this.code = code;
    this.last = last;
    this.yields = yields;
  }
  YamlParser$State.prototype.toString = function () {
    return this.name;
  };
  YamlParser$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  YamlParser$State.prototype.component1 = function () {
    return this.name;
  };
  YamlParser$State.prototype.component2 = function () {
    return this.input;
  };
  YamlParser$State.prototype.component3 = function () {
    return this.decision;
  };
  YamlParser$State.prototype.component4 = function () {
    return this.limit;
  };
  YamlParser$State.prototype.component5 = function () {
    return this.forbidden;
  };
  YamlParser$State.prototype.component6 = function () {
    return this.isPeek;
  };
  YamlParser$State.prototype.component7 = function () {
    return this.isSol;
  };
  YamlParser$State.prototype.component8 = function () {
    return this.chars;
  };
  YamlParser$State.prototype.component9 = function () {
    return this.charsByteOffset;
  };
  YamlParser$State.prototype.component10 = function () {
    return this.charsCharOffset;
  };
  YamlParser$State.prototype.component11 = function () {
    return this.charsLine;
  };
  YamlParser$State.prototype.component12 = function () {
    return this.charsLineChar;
  };
  YamlParser$State.prototype.component13 = function () {
    return this.byteOffset;
  };
  YamlParser$State.prototype.component14 = function () {
    return this.charOffset;
  };
  YamlParser$State.prototype.component15 = function () {
    return this.line;
  };
  YamlParser$State.prototype.component16 = function () {
    return this.lineChar;
  };
  YamlParser$State.prototype.component17 = function () {
    return this.code;
  };
  YamlParser$State.prototype.component18 = function () {
    return this.last;
  };
  YamlParser$State.prototype.component19 = function () {
    return this.yields;
  };
  YamlParser$State.prototype.copy_18y9ea$ = function (name, input, decision, limit, forbidden, isPeek, isSol, chars, charsByteOffset, charsCharOffset, charsLine, charsLineChar, byteOffset, charOffset, line, lineChar, code, last, yields) {
    return new YamlParser$State(name === void 0 ? this.name : name, input === void 0 ? this.input : input, decision === void 0 ? this.decision : decision, limit === void 0 ? this.limit : limit, forbidden === void 0 ? this.forbidden : forbidden, isPeek === void 0 ? this.isPeek : isPeek, isSol === void 0 ? this.isSol : isSol, chars === void 0 ? this.chars : chars, charsByteOffset === void 0 ? this.charsByteOffset : charsByteOffset, charsCharOffset === void 0 ? this.charsCharOffset : charsCharOffset, charsLine === void 0 ? this.charsLine : charsLine, charsLineChar === void 0 ? this.charsLineChar : charsLineChar, byteOffset === void 0 ? this.byteOffset : byteOffset, charOffset === void 0 ? this.charOffset : charOffset, line === void 0 ? this.line : line, lineChar === void 0 ? this.lineChar : lineChar, code === void 0 ? this.code : code, last === void 0 ? this.last : last, yields === void 0 ? this.yields : yields);
  };
  YamlParser$State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.input) | 0;
    result = result * 31 + Kotlin.hashCode(this.decision) | 0;
    result = result * 31 + Kotlin.hashCode(this.limit) | 0;
    result = result * 31 + Kotlin.hashCode(this.forbidden) | 0;
    result = result * 31 + Kotlin.hashCode(this.isPeek) | 0;
    result = result * 31 + Kotlin.hashCode(this.isSol) | 0;
    result = result * 31 + Kotlin.hashCode(this.chars) | 0;
    result = result * 31 + Kotlin.hashCode(this.charsByteOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.charsCharOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.charsLine) | 0;
    result = result * 31 + Kotlin.hashCode(this.charsLineChar) | 0;
    result = result * 31 + Kotlin.hashCode(this.byteOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.charOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.line) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineChar) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.last) | 0;
    result = result * 31 + Kotlin.hashCode(this.yields) | 0;
    return result;
  };
  YamlParser$State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.input, other.input) && Kotlin.equals(this.decision, other.decision) && Kotlin.equals(this.limit, other.limit) && Kotlin.equals(this.forbidden, other.forbidden) && Kotlin.equals(this.isPeek, other.isPeek) && Kotlin.equals(this.isSol, other.isSol) && Kotlin.equals(this.chars, other.chars) && Kotlin.equals(this.charsByteOffset, other.charsByteOffset) && Kotlin.equals(this.charsCharOffset, other.charsCharOffset) && Kotlin.equals(this.charsLine, other.charsLine) && Kotlin.equals(this.charsLineChar, other.charsLineChar) && Kotlin.equals(this.byteOffset, other.byteOffset) && Kotlin.equals(this.charOffset, other.charOffset) && Kotlin.equals(this.line, other.line) && Kotlin.equals(this.lineChar, other.lineChar) && Kotlin.equals(this.code, other.code) && Kotlin.equals(this.last, other.last) && Kotlin.equals(this.yields, other.yields)))));
  };
  YamlParser.prototype.or_yb4yy3$ = function ($receiver, other) {
    return this.decide_caskni$($receiver, other);
  };
  YamlParser.prototype.or_9e8rdb$ = function ($receiver, other) {
    return this.decide_caskni$($receiver, this.of_s8itvh$(other));
  };
  YamlParser.prototype.or_thfhbo$ = function ($receiver, other) {
    return this.decide_caskni$($receiver, this.of_za3lpa$(other));
  };
  YamlParser.prototype.or_h1fl79$ = function ($receiver, other) {
    return this.decide_caskni$($receiver, this.of_n8acyv$(other));
  };
  function YamlParser$and$lambda(this$and, closure$other, this$YamlParser) {
    return function (state) {
      return this$YamlParser.and_bindParser_lrper$_0(this$and, closure$other)(state);
    };
  }
  YamlParser.prototype.and_yb4yy3$ = function ($receiver, other) {
    return YamlParser$and$lambda($receiver, other, this);
  };
  function YamlParser$and_bindParser$lambda(closure$left, closure$right, this$YamlParser) {
    return function (state) {
      var tmp$;
      var reply = closure$left(state);
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        return reply.copy_9frbqe$(new YamlParser$Result$Failed(reply.result.message));
      else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        return reply.copy_9frbqe$(new YamlParser$Result$More(closure$right));
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        return reply.copy_9frbqe$(new YamlParser$Result$More(this$YamlParser.and_bindParser_lrper$_0(reply.result.result, closure$right)));
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  YamlParser.prototype.and_bindParser_lrper$_0 = function (left, right) {
    return YamlParser$and_bindParser$lambda(left, right, this);
  };
  YamlParser.prototype.and_9e8rdb$ = function ($receiver, other) {
    return this.and_yb4yy3$($receiver, this.of_s8itvh$(other));
  };
  function YamlParser$snd$lambda$clone(closure$name) {
    return function (current, result) {
      var map = HashMap_init_0(current);
      var key = closure$name;
      map.put_xwzc9p$(key, result);
      return map;
    };
  }
  function YamlParser$snd$lambda$bindParser$lambda(closure$left, closure$right, closure$clone, closure$bindParser) {
    return function (state) {
      var tmp$;
      var reply = closure$left(state);
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        return reply.copy_9frbqe$(new YamlParser$Result$Failed(reply.result.message));
      else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        return reply.copy_9frbqe$(new YamlParser$Result$More(closure$right), void 0, void 0, reply.state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, closure$clone(state.yields, reply.result.result)));
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        return reply.copy_9frbqe$(new YamlParser$Result$More(closure$bindParser(reply.result.result, closure$right)));
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  function YamlParser$snd$lambda$bindParser(closure$clone) {
    return function closure$bindParser(left, right) {
      return YamlParser$snd$lambda$bindParser$lambda(left, right, closure$clone, closure$bindParser);
    };
  }
  function YamlParser$snd$lambda(closure$name, this$snd, closure$other) {
    return function (state) {
      var clone = YamlParser$snd$lambda$clone(closure$name);
      var bindParser = YamlParser$snd$lambda$bindParser(clone);
      return bindParser(this$snd, closure$other)(state);
    };
  }
  YamlParser.prototype.snd_lg169v$ = function ($receiver, name, other) {
    return YamlParser$snd$lambda(name, $receiver, other);
  };
  YamlParser.prototype.not_yb4yy3$ = function ($receiver, rejected) {
    return this.and_yb4yy3$(this.reject_k2c4mo$(rejected, null), $receiver);
  };
  YamlParser.prototype.not_9e8rdb$ = function ($receiver, rejected) {
    return this.and_yb4yy3$(this.reject_k2c4mo$(this.of_s8itvh$(rejected), null), $receiver);
  };
  YamlParser.prototype.cmt_ixf2s$ = function ($receiver, decision) {
    return this.and_yb4yy3$($receiver, this.commit_61zpoe$(decision));
  };
  YamlParser.prototype.omt_ixf2s$ = function ($receiver, decision) {
    return this.and_yb4yy3$(this.peek_5msym5$($receiver), this.commit_61zpoe$(decision));
  };
  YamlParser.prototype.tms_thfhbo$ = function ($receiver, n) {
    return n <= 0 ? this.empty() : this.and_yb4yy3$($receiver, this.tms_thfhbo$($receiver, n - 1 | 0));
  };
  YamlParser.prototype.lms_thfhbo$ = function ($receiver, n) {
    if (n < 1)
      return this.fail_za3rmp$('Fewer than 0 repetitions');
    else if (n === 1)
      return this.reject_k2c4mo$($receiver, null);
    else
      return this.cho_l8gk4$('<x', this.or_yb4yy3$(this.and_yb4yy3$(this.cmt_ixf2s$($receiver, '<x'), this.lms_thfhbo$($receiver, n - 1 | 0)), this.empty()));
  };
  function YamlParser$recovery$lambda$lambda(this$YamlParser) {
    return function (state) {
      return this$YamlParser.finishToken()(state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, YamlParser$Code$Unparsed_getInstance()));
    };
  }
  function YamlParser$recovery$lambda(this$YamlParser, this$recovery, closure$recover) {
    return function (state) {
      var tmp$;
      var unparsed = YamlParser$recovery$lambda$lambda(this$YamlParser);
      var reply = this$recovery(state);
      if (state.isPeek)
        return reply;
      else {
        tmp$ = reply.result;
        if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
          return reply;
        else if (Kotlin.isType(tmp$, YamlParser$Result$More))
          return reply.copy_9frbqe$(new YamlParser$Result$More(this$YamlParser.recovery_yb4yy3$(reply.result.result, closure$recover)));
        else if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
          return reply.copy_9frbqe$(new YamlParser$Result$More(this$YamlParser.and_yb4yy3$(this$YamlParser.and_yb4yy3$(this$YamlParser.fake_p82x9p$(YamlParser$Code$Error_getInstance(), reply.result.message), unparsed), closure$recover)));
        else
          return Kotlin.noWhenBranchMatched();
      }
    };
  }
  YamlParser.prototype.recovery_yb4yy3$ = function ($receiver, recover) {
    return YamlParser$recovery$lambda(this, $receiver, recover);
  };
  function YamlParser$of$lambda(closure$char) {
    return function (it) {
      return it === (closure$char | 0);
    };
  }
  YamlParser.prototype.of_s8itvh$ = function (char) {
    return this.nextIf_8xwv17$(YamlParser$of$lambda(char));
  };
  function YamlParser$of$lambda_0(closure$code) {
    return function (it) {
      return it === closure$code;
    };
  }
  YamlParser.prototype.of_za3lpa$ = function (code) {
    return this.nextIf_8xwv17$(YamlParser$of$lambda_0(code));
  };
  function YamlParser$of$lambda_1(closure$range) {
    return function (it) {
      return closure$range.start <= it && it <= closure$range.endInclusive;
    };
  }
  YamlParser.prototype.of_n8acyv$ = function (range) {
    return this.nextIf_8xwv17$(YamlParser$of$lambda_1(range));
  };
  YamlParser.prototype.or_9omhn3$ = function ($receiver, other) {
    return this.or_yb4yy3$(this.of_n8acyv$($receiver), this.of_n8acyv$(other));
  };
  YamlParser.prototype.or_ui3wc7$ = function ($receiver, other) {
    return this.or_yb4yy3$(this.of_s8itvh$($receiver), this.of_s8itvh$(other));
  };
  YamlParser.prototype.or_a5dju6$ = function ($receiver, other) {
    return this.or_yb4yy3$(this.of_s8itvh$($receiver), this.of_za3lpa$(other));
  };
  YamlParser.prototype.and_ui3wc7$ = function ($receiver, other) {
    return this.and_yb4yy3$(this.of_s8itvh$($receiver), this.of_s8itvh$(other));
  };
  YamlParser.prototype.and_j3igz5$ = function ($receiver, other) {
    return this.and_yb4yy3$(this.of_s8itvh$($receiver), other);
  };
  YamlParser.prototype.returnReply_qu6q1x$ = function (state, result) {
    return new YamlParser$Reply(new YamlParser$Result$Completed(result), emptyList(), null, state);
  };
  YamlParser.prototype.failReply_qu6q1x$ = function (state, message) {
    return new YamlParser$Reply(new YamlParser$Result$Failed(message), emptyList(), null, state);
  };
  YamlParser.prototype.unexpectedReply_b15o62$ = function (state) {
    return state.input.isEmpty() ? this.failReply_qu6q1x$(state, 'Unexpected end of input') : this.failReply_qu6q1x$(state, "Unexpected '" + YamlParser$Companion_getInstance().escape_za3lpa$(state.input.head().code) + "'");
  };
  function YamlParser$fail$lambda(closure$message, this$YamlParser) {
    return function (state) {
      return this$YamlParser.failReply_qu6q1x$(state, closure$message);
    };
  }
  YamlParser.prototype.fail_za3rmp$ = function (message) {
    return YamlParser$fail$lambda(message, this);
  };
  function YamlParser$nonEmpty$lambda$nonEmptyParser$lambda(closure$parser, closure$offset, this$YamlParser, closure$nonEmptyParser) {
    return function (state) {
      var tmp$;
      var reply = closure$parser(state);
      var newSate = reply.state;
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        return reply;
      else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        return newSate.charOffset > closure$offset ? reply : this$YamlParser.failReply_qu6q1x$(newSate, 'Matched empty pattern');
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        return reply.copy_9frbqe$(new YamlParser$Result$More(closure$nonEmptyParser(closure$offset, reply.result.result)));
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  function YamlParser$nonEmpty$lambda$nonEmptyParser(this$YamlParser) {
    return function closure$nonEmptyParser(offset, parser) {
      return YamlParser$nonEmpty$lambda$nonEmptyParser$lambda(parser, offset, this$YamlParser, closure$nonEmptyParser);
    };
  }
  function YamlParser$nonEmpty$lambda(this$YamlParser, closure$parser) {
    return function (state) {
      var nonEmptyParser = YamlParser$nonEmpty$lambda$nonEmptyParser(this$YamlParser);
      return nonEmptyParser(state.charOffset, closure$parser)(state);
    };
  }
  YamlParser.prototype.nonEmpty_5msym5$ = function (parser) {
    return YamlParser$nonEmpty$lambda(this, parser);
  };
  function YamlParser$empty$lambda(this$YamlParser) {
    return function (state) {
      return this$YamlParser.returnReply_qu6q1x$(state, '');
    };
  }
  YamlParser.prototype.empty = function () {
    return YamlParser$empty$lambda(this);
  };
  function YamlParser$eof$lambda(this$YamlParser) {
    return function (state) {
      return state.input.isEmpty() ? this$YamlParser.returnReply_qu6q1x$(state, '') : this$YamlParser.unexpectedReply_b15o62$(state);
    };
  }
  YamlParser.prototype.eof = function () {
    return YamlParser$eof$lambda(this);
  };
  function YamlParser$sol$lambda(this$YamlParser) {
    return function (state) {
      return state.isSol ? this$YamlParser.returnReply_qu6q1x$(state, '') : this$YamlParser.failReply_qu6q1x$(state, 'Expected start of line');
    };
  }
  YamlParser.prototype.sol = function () {
    return YamlParser$sol$lambda(this);
  };
  YamlParser.prototype.tokenReply_bpy8yc$ = function (state, token) {
    return new YamlParser$Reply(new YamlParser$Result$Completed(''), listOf(token), null, state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Int32Array([]), -1, -1, -1, -1));
  };
  function YamlParser$finishToken$lambda(this$YamlParser) {
    return function (state) {
      var newState = state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, new Int32Array(0), -1, -1, -1, -1);
      if (state.isPeek)
        return this$YamlParser.returnReply_qu6q1x$(newState, '');
      else {
        if (state.chars.length === 0)
          return this$YamlParser.returnReply_qu6q1x$(newState, '');
        else
          return this$YamlParser.tokenReply_bpy8yc$(newState, new YamlParser$Token(state.charsByteOffset, state.charsCharOffset, state.charsLine, state.charsLineChar, state.code, YamlParser$Escapable$Companion_getInstance().of_q5rwfd$(toIntArray(reversed(state.chars)))));
      }
    };
  }
  YamlParser.prototype.finishToken = function () {
    return YamlParser$finishToken$lambda(this);
  };
  function YamlParser$token$lambda(state, code) {
    return state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, ensureNotNull(code));
  }
  YamlParser.prototype.token_qhjjef$ = function (code, parser) {
    return this.and_yb4yy3$(this.finishToken(), this.with_7p1sv1$(YamlParser$token$lambda, getPropertyCallableRef('code', 1, function ($receiver) {
      return $receiver.code;
    }), code, this.and_yb4yy3$(parser, this.finishToken())));
  };
  function YamlParser$fake$lambda(this$YamlParser, closure$code, closure$text) {
    return function (state) {
      if (state.isPeek) {
        return this$YamlParser.returnReply_qu6q1x$(state, '');
      }
       else {
        return this$YamlParser.tokenReply_bpy8yc$(state, new YamlParser$Token(state.charsByteOffset === -1 ? state.byteOffset : state.charsByteOffset, state.charsCharOffset === -1 ? state.charOffset : state.charsCharOffset, state.charsLine === -1 ? state.line : state.charsLine, state.charsLineChar === -1 ? state.lineChar : state.charsLineChar, closure$code, YamlParser$Escapable$Companion_getInstance().of_61zpoe$(closure$text.toString())));
      }
    };
  }
  YamlParser.prototype.fake_p82x9p$ = function (code, text) {
    return YamlParser$fake$lambda(this, code, text);
  };
  YamlParser.prototype.meta_5msym5$ = function (parser) {
    return this.token_qhjjef$(YamlParser$Code$Meta_getInstance(), parser);
  };
  YamlParser.prototype.meta_s8itvh$ = function (char) {
    return this.token_qhjjef$(YamlParser$Code$Meta_getInstance(), this.of_s8itvh$(char));
  };
  YamlParser.prototype.meta_za3lpa$ = function (code) {
    return this.token_qhjjef$(YamlParser$Code$Meta_getInstance(), this.of_za3lpa$(code));
  };
  YamlParser.prototype.indicator_5msym5$ = function (parser) {
    return this.token_qhjjef$(YamlParser$Code$Indicator_getInstance(), parser);
  };
  YamlParser.prototype.indicator_s8itvh$ = function (char) {
    return this.token_qhjjef$(YamlParser$Code$Indicator_getInstance(), this.of_s8itvh$(char));
  };
  YamlParser.prototype.text_5msym5$ = function (parser) {
    return this.token_qhjjef$(YamlParser$Code$Text_getInstance(), parser);
  };
  function YamlParser$emptyToken$lambda(this$YamlParser, closure$code) {
    return function (state) {
      return state.isPeek ? this$YamlParser.returnReply_qu6q1x$(state, '') : this$YamlParser.tokenReply_bpy8yc$(state, new YamlParser$Token(state.byteOffset, state.charOffset, state.line, state.lineChar, closure$code, YamlParser$Escapable$Companion_getInstance().of_61zpoe$('')));
    };
  }
  YamlParser.prototype.emptyToken_kzhhfs$ = function (code) {
    return this.and_yb4yy3$(this.finishToken(), YamlParser$emptyToken$lambda(this, code));
  };
  YamlParser.prototype.wrapTokens_u68c0l$ = function (beginCode, endCode, parser) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.emptyToken_kzhhfs$(beginCode), this.prefixErrorWith_caskni$(parser, this.emptyToken_kzhhfs$(endCode))), this.emptyToken_kzhhfs$(endCode));
  };
  function YamlParser$prefixErrorWith$lambda(closure$parser, closure$prefix, this$YamlParser) {
    return function (state) {
      var tmp$;
      var reply = closure$parser(state);
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        return reply;
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        return reply.copy_9frbqe$(new YamlParser$Result$More(this$YamlParser.prefixErrorWith_caskni$(reply.result.result, closure$prefix)));
      else if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        return reply.copy_9frbqe$(new YamlParser$Result$More(this$YamlParser.and_yb4yy3$(closure$prefix, this$YamlParser.fail_za3rmp$(reply.result.message))));
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  YamlParser.prototype.prefixErrorWith_caskni$ = function (parser, prefix) {
    return YamlParser$prefixErrorWith$lambda(parser, prefix, this);
  };
  YamlParser.prototype.opt_5msym5$ = function (parser) {
    return this.or_yb4yy3$(this.and_yb4yy3$(parser, this.empty()), this.empty());
  };
  function YamlParser$zom$zomParser$lambda(closure$zomParser) {
    return function (state) {
      return closure$zomParser()(state);
    };
  }
  function YamlParser$zom$zomParser(closure$parser, this$YamlParser) {
    return function closure$zomParser() {
      return this$YamlParser.or_yb4yy3$(this$YamlParser.and_yb4yy3$(this$YamlParser.cmt_ixf2s$(closure$parser, '*'), YamlParser$zom$zomParser$lambda(closure$zomParser)), this$YamlParser.empty());
    };
  }
  YamlParser.prototype.zom_5msym5$ = function (parser) {
    var zomParser = YamlParser$zom$zomParser(parser, this);
    return this.cho_l8gk4$('*', zomParser());
  };
  YamlParser.prototype.oom_5msym5$ = function (parser) {
    return this.and_yb4yy3$(parser, this.zom_5msym5$(parser));
  };
  function YamlParser$decide$lambda$decideParser$lambda(closure$left, closure$tokens, closure$right, closure$point, closure$decideParser) {
    return function (state) {
      var tmp$;
      var reply = closure$left(state);
      var newTokens = plus(closure$tokens, reply.tokens);
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        return new YamlParser$Reply(new YamlParser$Result$More(closure$right), emptyList(), null, closure$point);
      else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        return reply.copy_9frbqe$(void 0, newTokens);
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        if (reply.commit != null) {
          return reply.copy_9frbqe$(new YamlParser$Result$More(reply.result.result), newTokens);
        }
         else
          return closure$decideParser(closure$point, newTokens, reply.result.result, closure$right)(reply.state);
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  function YamlParser$decide$lambda$decideParser(point, tokens, left, right) {
    return YamlParser$decide$lambda$decideParser$lambda(left, tokens, right, point, YamlParser$decide$lambda$decideParser);
  }
  function YamlParser$decide$lambda(closure$left, closure$right) {
    return function (state) {
      var decideParser = YamlParser$decide$lambda$decideParser;
      return decideParser(state, emptyList(), closure$left, closure$right)(state);
    };
  }
  YamlParser.prototype.decide_caskni$ = function (left, right) {
    return YamlParser$decide$lambda(left, right);
  };
  function YamlParser$choice$lambda$choiceParser$lambda(closure$parser, closure$makingDecision, closure$parentDecision, closure$choiceParser) {
    return function (state) {
      var tmp$, tmp$_0;
      var reply = closure$parser(state);
      tmp$ = reply.commit;
      if (tmp$ == null)
        tmp$_0 = null;
      else if (equals(tmp$, closure$makingDecision))
        tmp$_0 = null;
      else
        tmp$_0 = reply.commit;
      var commit = tmp$_0;
      if (Kotlin.isType(reply.result, YamlParser$Result$More)) {
        return reply.copy_9frbqe$(new YamlParser$Result$More(closure$choiceParser(closure$parentDecision, closure$makingDecision, reply.result.result)), void 0, commit);
      }
       else
        return reply.copy_9frbqe$(void 0, void 0, commit, reply.state.copy_18y9ea$(void 0, void 0, closure$parentDecision));
    };
  }
  function YamlParser$choice$lambda$choiceParser(parentDecision, makingDecision, parser) {
    return YamlParser$choice$lambda$choiceParser$lambda(parser, makingDecision, parentDecision, YamlParser$choice$lambda$choiceParser);
  }
  function YamlParser$choice$lambda(closure$decision, closure$parser) {
    return function (state) {
      var choiceParser = YamlParser$choice$lambda$choiceParser;
      return choiceParser(state.decision, closure$decision, closure$parser)(state.copy_18y9ea$(void 0, void 0, closure$decision));
    };
  }
  YamlParser.prototype.choice_mlkuup$ = function (decision, parser) {
    return YamlParser$choice$lambda(decision, parser);
  };
  function YamlParser$prev$lambda$prevParser(this$YamlParser) {
    return function closure$prevParser(point, parser, state) {
      var tmp$, tmp$_0;
      var reply = parser(state);
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        tmp$_0 = this$YamlParser.failReply_qu6q1x$(point, reply.result.message);
      else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        tmp$_0 = this$YamlParser.returnReply_qu6q1x$(point, reply.result.result);
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        tmp$_0 = closure$prevParser(point, reply.result.result, reply.state);
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      return tmp$_0;
    };
  }
  function YamlParser$prev$lambda(this$YamlParser, closure$parser) {
    return function (state) {
      var tmp$;
      var prevParser = YamlParser$prev$lambda$prevParser(this$YamlParser);
      tmp$ = state.copy_18y9ea$(void 0, state.input.push_l6z0d4$(new YamlDecoder$UniChar(-1, state.last)), void 0, void 0, void 0, true);
      return prevParser(state, closure$parser, tmp$);
    };
  }
  YamlParser.prototype.prev_5msym5$ = function (parser) {
    return YamlParser$prev$lambda(this, parser);
  };
  function YamlParser$peek$lambda$peekParser(this$YamlParser) {
    return function closure$peekParser(point, parser, state) {
      var tmp$, tmp$_0;
      var reply = parser(state);
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        tmp$_0 = this$YamlParser.failReply_qu6q1x$(point, reply.result.message);
      else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        tmp$_0 = this$YamlParser.returnReply_qu6q1x$(point, reply.result.result);
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        tmp$_0 = closure$peekParser(point, reply.result.result, reply.state);
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      return tmp$_0;
    };
  }
  function YamlParser$peek$lambda(this$YamlParser, closure$parser) {
    return function (state) {
      var peekParser = YamlParser$peek$lambda$peekParser(this$YamlParser);
      return peekParser(state, closure$parser, state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, true));
    };
  }
  YamlParser.prototype.peek_5msym5$ = function (parser) {
    return YamlParser$peek$lambda(this, parser);
  };
  function YamlParser$reject$rejectParser(this$YamlParser) {
    return function closure$rejectParser(point, name, parser, state) {
      var tmp$, tmp$_0;
      var reply = parser(state);
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
        tmp$_0 = this$YamlParser.returnReply_qu6q1x$(point, '');
      else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        tmp$_0 = name == null ? this$YamlParser.unexpectedReply_b15o62$(point) : this$YamlParser.failReply_qu6q1x$(point, 'Unexpected ' + toString(name));
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        tmp$_0 = closure$rejectParser(point, name, reply.result.result, reply.state);
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      return tmp$_0;
    };
  }
  function YamlParser$reject$lambda(closure$name, closure$parser, closure$rejectParser) {
    return function (state) {
      return closure$rejectParser(state, closure$name, closure$parser, state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, true));
    };
  }
  YamlParser.prototype.reject_k2c4mo$ = function (parser, name) {
    var rejectParser = YamlParser$reject$rejectParser(this);
    return YamlParser$reject$lambda(name, parser, rejectParser);
  };
  function YamlParser$upto$lambda(it) {
    return true;
  }
  YamlParser.prototype.upto_5msym5$ = function (parser) {
    return this.zom_5msym5$(this.and_yb4yy3$(this.nla_5msym5$(parser), this.nextIf_8xwv17$(YamlParser$upto$lambda)));
  };
  function YamlParser$commit$lambda(closure$decision) {
    return function (state) {
      return new YamlParser$Reply(new YamlParser$Result$Completed(''), emptyList(), closure$decision, state);
    };
  }
  YamlParser.prototype.commit_61zpoe$ = function (decision) {
    return YamlParser$commit$lambda(decision);
  };
  function YamlParser$nextLine$lambda(this$YamlParser) {
    return function (state) {
      return this$YamlParser.returnReply_qu6q1x$(state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, void 0, true, void 0, void 0, void 0, void 0, void 0, void 0, void 0, state.line + 1 | 0, 0), '');
    };
  }
  YamlParser.prototype.nextLine = function () {
    return YamlParser$nextLine$lambda(this);
  };
  function YamlParser$with$lambda$withParser$lambda(closure$parser, closure$parentValue, closure$withParser, closure$set) {
    return function (state) {
      var reply = closure$parser(state);
      if (Kotlin.isType(reply.result, YamlParser$Result$More))
        return reply.copy_9frbqe$(new YamlParser$Result$More(closure$withParser(closure$parentValue, reply.result.result)));
      else
        return reply.copy_9frbqe$(void 0, void 0, void 0, closure$set(reply.state, closure$parentValue));
    };
  }
  function YamlParser$with$lambda$withParser(closure$set) {
    return function closure$withParser(parentValue, parser) {
      return YamlParser$with$lambda$withParser$lambda(parser, parentValue, closure$withParser, closure$set);
    };
  }
  function YamlParser$with$lambda(closure$set, closure$get, closure$parser, closure$value) {
    return function (state) {
      var withParser = YamlParser$with$lambda$withParser(closure$set);
      return withParser(closure$get(state), closure$parser)(closure$set(state, closure$value));
    };
  }
  YamlParser.prototype.with_7p1sv1$ = function (set, get, value, parser) {
    return YamlParser$with$lambda(set, get, parser, value);
  };
  function YamlParser$forbidding$lambda(state, forbidden) {
    return state.copy_18y9ea$(void 0, void 0, void 0, void 0, forbidden);
  }
  YamlParser.prototype.forbidding_caskni$ = function (parser, forbidden) {
    return this.with_7p1sv1$(YamlParser$forbidding$lambda, getPropertyCallableRef('forbidden', 1, function ($receiver) {
      return $receiver.forbidden;
    }), this.and_yb4yy3$(forbidden, this.empty()), parser);
  };
  function YamlParser$limitedTo$lambda(state, limit) {
    return state.copy_18y9ea$(void 0, void 0, void 0, ensureNotNull(limit));
  }
  YamlParser.prototype.limitedTo_nf7wzz$ = function (parser, limit) {
    return this.with_7p1sv1$(YamlParser$limitedTo$lambda, getPropertyCallableRef('limit', 1, function ($receiver) {
      return $receiver.limit;
    }), limit, parser);
  };
  function YamlParser$nextIf$consumeNextIf(closure$test, this$YamlParser) {
    return function (state) {
      var tmp$;
      if (!state.input.isEmpty() && closure$test(state.input.head().code)) {
        var char = state.input.head().code;
        var chars = state.isPeek ? new Int32Array(0) : primitiveArrayConcat(new Int32Array([char]), state.chars);
        var byteOffset = state.isPeek ? -1 : state.chars.length === 0 ? state.byteOffset : state.charsByteOffset;
        var charOffset = state.isPeek ? -1 : state.chars.length === 0 ? state.charOffset : state.charsCharOffset;
        var line = state.isPeek ? -1 : state.chars.length === 0 ? state.line : state.charsLine;
        var lineChar = state.isPeek ? -1 : state.chars.length === 0 ? state.lineChar : state.charsLineChar;
        var isSol = char === 65279 ? state.isSol : false;
        var newState = state.copy_18y9ea$(void 0, state.input.tail(), void 0, void 0, void 0, void 0, isSol, chars, byteOffset, charOffset, line, lineChar, state.input.head().offset, state.charOffset + 1 | 0, void 0, state.lineChar + 1 | 0, void 0, char);
        tmp$ = this$YamlParser.returnReply_qu6q1x$(newState, '');
      }
       else {
        tmp$ = this$YamlParser.unexpectedReply_b15o62$(state);
      }
      return tmp$;
    };
  }
  function YamlParser$nextIf$limitedNextIf(closure$consumeNextIf, this$YamlParser) {
    return function (state) {
      switch (state.limit) {
        case -1:
          return closure$consumeNextIf(state);
        case 0:
          return this$YamlParser.failReply_qu6q1x$(state, 'Lookahead limit reached');
        default:return closure$consumeNextIf(state.copy_18y9ea$(void 0, void 0, void 0, state.limit - 1 | 0));
      }
    };
  }
  function YamlParser$nextIf$lambda(closure$limitedNextIf, this$YamlParser) {
    return function (state) {
      var tmp$;
      if (state.forbidden == null)
        return closure$limitedNextIf(state);
      else {
        var newParser = this$YamlParser.reject_k2c4mo$(state.forbidden, 'forbidden pattern');
        var reply = newParser(state.copy_18y9ea$(void 0, void 0, void 0, void 0, null));
        tmp$ = reply.result;
        if (Kotlin.isType(tmp$, YamlParser$Result$Failed))
          return reply;
        else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
          return closure$limitedNextIf(state);
        else
          throw IllegalStateException_init('ME: unexpected');
      }
    };
  }
  YamlParser.prototype.nextIf_8xwv17$ = function (test) {
    var consumeNextIf = YamlParser$nextIf$consumeNextIf(test, this);
    var limitedNextIf = YamlParser$nextIf$limitedNextIf(consumeNextIf, this);
    return YamlParser$nextIf$lambda(limitedNextIf, this);
  };
  function YamlParser$bom$lambda(closure$code, this$YamlParser) {
    return function (state) {
      return this$YamlParser.and_yb4yy3$(this$YamlParser.of_za3lpa$(closure$code), this$YamlParser.fake_p82x9p$(YamlParser$Code$Bom_getInstance(), state.input.encoding().toString().substring(1)))(state);
    };
  }
  YamlParser.prototype.bom_za3lpa$ = function (code) {
    return YamlParser$bom$lambda(code, this);
  };
  function YamlParser$asInt$lambda(this$YamlParser) {
    return function (state) {
      return this$YamlParser.returnReply_qu6q1x$(state, state.last - 48 | 0);
    };
  }
  YamlParser.prototype.asInt = function () {
    return YamlParser$asInt$lambda(this);
  };
  function YamlParser$peekResult$lambda(closure$result, this$YamlParser) {
    return function (state) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = state.yields.get_11rb$(closure$result), Any) ? tmp$ : throwCCE();
      return this$YamlParser.returnReply_qu6q1x$(state, tmp$_0);
    };
  }
  YamlParser.prototype.peekResult_61zpoe$ = function (result) {
    return YamlParser$peekResult$lambda(result, this);
  };
  function YamlParser$peekResult$lambda_0(closure$first, closure$second, this$YamlParser) {
    return function (state) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = state.copy_18y9ea$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, state.yields);
      tmp$_2 = '(' + (Kotlin.isType(tmp$_0 = state.yields.get_11rb$(closure$first), Any) ? tmp$_0 : throwCCE()).toString() + ',' + (Kotlin.isType(tmp$_1 = state.yields.get_11rb$(closure$second), Any) ? tmp$_1 : throwCCE()).toString() + ')';
      return this$YamlParser.returnReply_qu6q1x$(tmp$, tmp$_2);
    };
  }
  YamlParser.prototype.peekResult_puj7f4$ = function (first, second) {
    return YamlParser$peekResult$lambda_0(first, second, this);
  };
  function YamlParser$result$lambda(closure$result, this$YamlParser) {
    return function (state) {
      return this$YamlParser.returnReply_qu6q1x$(state, closure$result);
    };
  }
  YamlParser.prototype.result_za3lpa$ = function (result) {
    return YamlParser$result$lambda(result, this);
  };
  function YamlParser$result$lambda_0(closure$result, this$YamlParser) {
    return function (state) {
      return this$YamlParser.returnReply_qu6q1x$(state, closure$result);
    };
  }
  YamlParser.prototype.result_ba5ra6$ = function (result) {
    return YamlParser$result$lambda_0(result, this);
  };
  YamlParser.prototype.cho_l8gk4$ = function ($receiver, parser) {
    return this.choice_mlkuup$($receiver, parser);
  };
  YamlParser.prototype.cmt_elu61a$ = function ($receiver, decision) {
    return this.and_yb4yy3$(this.of_s8itvh$($receiver), this.commit_61zpoe$(decision));
  };
  YamlParser.prototype.plb_5msym5$ = function (lookbehind) {
    return this.prev_5msym5$(lookbehind);
  };
  YamlParser.prototype.pla_5msym5$ = function (lookahead) {
    return this.peek_5msym5$(lookahead);
  };
  YamlParser.prototype.nla_5msym5$ = function (lookahead) {
    return this.reject_k2c4mo$(lookahead, null);
  };
  function YamlParser$Token(byteOffset, charOffset, line, lineChar, code, text) {
    this.byteOffset = byteOffset;
    this.charOffset = charOffset;
    this.line = line;
    this.lineChar = lineChar;
    this.code = code;
    this.text = text;
  }
  YamlParser$Token.prototype.toString = function () {
    return '# B: ' + this.byteOffset + ', C: ' + this.charOffset + ', L: ' + this.line + ', c: ' + this.lineChar + '\n' + this.code + this.text + '\n';
  };
  YamlParser$Token.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  YamlParser$Token.prototype.component1 = function () {
    return this.byteOffset;
  };
  YamlParser$Token.prototype.component2 = function () {
    return this.charOffset;
  };
  YamlParser$Token.prototype.component3 = function () {
    return this.line;
  };
  YamlParser$Token.prototype.component4 = function () {
    return this.lineChar;
  };
  YamlParser$Token.prototype.component5 = function () {
    return this.code;
  };
  YamlParser$Token.prototype.component6 = function () {
    return this.text;
  };
  YamlParser$Token.prototype.copy_52pvax$ = function (byteOffset, charOffset, line, lineChar, code, text) {
    return new YamlParser$Token(byteOffset === void 0 ? this.byteOffset : byteOffset, charOffset === void 0 ? this.charOffset : charOffset, line === void 0 ? this.line : line, lineChar === void 0 ? this.lineChar : lineChar, code === void 0 ? this.code : code, text === void 0 ? this.text : text);
  };
  YamlParser$Token.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.byteOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.charOffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.line) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineChar) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  YamlParser$Token.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.byteOffset, other.byteOffset) && Kotlin.equals(this.charOffset, other.charOffset) && Kotlin.equals(this.line, other.line) && Kotlin.equals(this.lineChar, other.lineChar) && Kotlin.equals(this.code, other.code) && Kotlin.equals(this.text, other.text)))));
  };
  function YamlParser$Escapable() {
    YamlParser$Escapable$Companion_getInstance();
  }
  function YamlParser$Escapable$Companion() {
    YamlParser$Escapable$Companion_instance = this;
  }
  YamlParser$Escapable$Companion.prototype.of_q5rwfd$ = function (text) {
    return new YamlParser$Escapable$Code(text);
  };
  YamlParser$Escapable$Companion.prototype.of_61zpoe$ = function (text) {
    return new YamlParser$Escapable$Text(text);
  };
  YamlParser$Escapable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var YamlParser$Escapable$Companion_instance = null;
  function YamlParser$Escapable$Companion_getInstance() {
    if (YamlParser$Escapable$Companion_instance === null) {
      new YamlParser$Escapable$Companion();
    }
    return YamlParser$Escapable$Companion_instance;
  }
  function YamlParser$Escapable$Code(codes) {
    YamlParser$Escapable.call(this);
    this.codes = codes;
  }
  YamlParser$Escapable$Code.prototype.toString = function () {
    return YamlParser$Companion_getInstance().escape_xwgkrb$(this.codes, '');
  };
  YamlParser$Escapable$Code.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Code',
    interfaces: [YamlParser$Escapable]
  };
  function YamlParser$Escapable$Text(text) {
    YamlParser$Escapable.call(this);
    this.text = text;
  }
  YamlParser$Escapable$Text.prototype.toString = function () {
    return this.text;
  };
  YamlParser$Escapable$Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [YamlParser$Escapable]
  };
  YamlParser$Escapable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Escapable',
    interfaces: []
  };
  function YamlParser$Tokenizer() {
  }
  YamlParser$Tokenizer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Tokenizer',
    interfaces: []
  };
  function YamlParser$PatternTokenizer(pattern) {
    this.pattern = pattern;
  }
  YamlParser$PatternTokenizer.prototype.tokenize_7x97xx$ = function (name, input, withFollowing) {
    return this.patternParser_0(withFollowing, YamlParser$Companion_getInstance().wrap_0(this.pattern), YamlParser$Companion_getInstance().initialState_0(name, input));
  };
  YamlParser$PatternTokenizer.prototype.patternParser_0 = function (withFollowing, _parser, _state) {
    var tmp$;
    var out = ArrayList_init();
    var parser = _parser;
    var state = _state;
    loop: while (true) {
      var reply = parser(state);
      var tokens = YamlParser$Companion_getInstance().commitBugs_0(reply);
      var rState = reply.state;
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed)) {
        var tmp$_0, tmp$_1;
        tmp$_1 = typeof (tmp$_0 = reply.result.message) === 'string' ? tmp$_0 : throwCCE();
        addAll(out, YamlParser$Companion_getInstance().errorTokens_0(tokens, rState, tmp$_1, withFollowing));
        break loop;
      }
       else if (Kotlin.isType(tmp$, YamlParser$Result$Completed)) {
        addAll(out, tokens);
        break loop;
      }
       else if (Kotlin.isType(tmp$, YamlParser$Result$More)) {
        addAll(out, tokens);
        parser = reply.result.result;
        state = rState;
        continue loop;
      }
       else
        Kotlin.noWhenBranchMatched();
    }
    return out;
  };
  YamlParser$PatternTokenizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PatternTokenizer',
    interfaces: [YamlParser$Tokenizer]
  };
  function YamlParser$ParserTokenizer(what, parser) {
    this.what = what;
    this.parser = parser;
  }
  function YamlParser$ParserTokenizer$tokenize$parserParser(closure$withFollowing, this$ParserTokenizer) {
    return function closure$parserParser(parser, state) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var reply = parser(state);
      var tokens = YamlParser$Companion_getInstance().commitBugs_0(reply);
      var rState = reply.state;
      tmp$ = reply.result;
      if (Kotlin.isType(tmp$, YamlParser$Result$Failed)) {
        tmp$_1 = typeof (tmp$_0 = reply.result.message) === 'string' ? tmp$_0 : throwCCE();
        tmp$_2 = YamlParser$Companion_getInstance().errorTokens_0(tokens, rState, tmp$_1, closure$withFollowing);
      }
       else if (Kotlin.isType(tmp$, YamlParser$Result$Completed))
        tmp$_2 = plus_0(tokens, new YamlParser$Token(rState.byteOffset, rState.charOffset, rState.line, rState.lineChar, YamlParser$Code$Detected_getInstance(), YamlParser$Escapable$Companion_getInstance().of_61zpoe$(this$ParserTokenizer.what + '=' + reply.result.result.toString())));
      else if (Kotlin.isType(tmp$, YamlParser$Result$More))
        tmp$_2 = plus(tokens, closure$parserParser(reply.result.result, rState));
      else
        tmp$_2 = Kotlin.noWhenBranchMatched();
      return tmp$_2;
    };
  }
  YamlParser$ParserTokenizer.prototype.tokenize_7x97xx$ = function (name, input, withFollowing) {
    var parserParser = YamlParser$ParserTokenizer$tokenize$parserParser(withFollowing, this);
    return parserParser(YamlParser$Companion_getInstance().wrap_0(this.parser), YamlParser$Companion_getInstance().initialState_0(name, input));
  };
  YamlParser$ParserTokenizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserTokenizer',
    interfaces: [YamlParser$Tokenizer]
  };
  function YamlParser$Companion() {
    YamlParser$Companion_instance = this;
    YamlParser.call(this);
  }
  YamlParser$Companion.prototype.escape_za3lpa$ = function (code) {
    if (32 <= code && code !== 92 && code <= 126)
      return String.fromCharCode(toChar(code));
    else if (code <= 255)
      return '\\' + 'x' + this.toHex_vux9f0$(2, code);
    else if (256 <= code && code <= 65535)
      return '\\' + 'u' + this.toHex_vux9f0$(4, code);
    else
      return '\\' + 'U' + this.toHex_vux9f0$(8, code);
  };
  YamlParser$Companion.prototype.escape_xwgkrb$ = function (text, separator) {
    if (separator === void 0)
      separator = ', ';
    var transform = getCallableRef('escape', function ($receiver, code) {
      return $receiver.escape_za3lpa$(code);
    }.bind(null, YamlParser$Companion_getInstance()));
    var destination = ArrayList_init_0(text.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== text.length; ++tmp$) {
      var item = text[tmp$];
      destination.add_11rb$(transform(item));
    }
    return joinToString(destination, separator);
  };
  YamlParser$Companion.prototype.toHex_vux9f0$ = function (digits, n) {
    return digits === 1 ? String.fromCharCode(unboxChar(this.intToDigit_za3lpa$(n))) : this.toHex_vux9f0$(digits - 1 | 0, n / 16 | 0) + String.fromCharCode(unboxChar(this.intToDigit_za3lpa$(n % 16)));
  };
  YamlParser$Companion.prototype.intToDigit_za3lpa$ = function (n) {
    return n < 10 ? toChar(48 + n | 0) : toChar(87 + n | 0);
  };
  YamlParser$Companion.prototype.showTokens_y7gcgt$ = function (tokens) {
    var tmp$;
    var accumulator = '';
    tmp$ = tokens.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = accumulator + element.toString();
    }
    return accumulator;
  };
  YamlParser$Companion.prototype.initialState_0 = function (name, input) {
    return new YamlParser$State(name, YamlDecoder$Stream$Companion_getInstance().of_fqrh44$(input), '', -1, null, false, true, new Int32Array([]), -1, -1, -1, -1, 0, 0, 1, 0, YamlParser$Code$Unparsed_getInstance(), 32, HashMap_init());
  };
  YamlParser$Companion.prototype.commitBugs_0 = function (reply) {
    var tokens = reply.tokens;
    var state = reply.state;
    return reply.commit == null ? tokens : plus_0(tokens, new YamlParser$Token(state.byteOffset, state.charOffset, state.line, state.lineChar, YamlParser$Code$Error_getInstance(), YamlParser$Escapable$Companion_getInstance().of_61zpoe$("Commit to '" + toString(reply.commit) + "' was made outside it")));
  };
  YamlParser$Companion.prototype.wrap_0 = function (parser) {
    return this.and_yb4yy3$(this.and_yb4yy3$(this.snd_lg169v$(parser, 'result', this.finishToken()), this.eof()), this.peekResult_61zpoe$('result'));
  };
  YamlParser$Companion.prototype.errorTokens_0 = function (tokens, state, message, flag) {
    var newTokens = plus_0(tokens, new YamlParser$Token(state.byteOffset, state.charOffset, state.line, state.lineChar, YamlParser$Code$Error_getInstance(), YamlParser$Escapable$Companion_getInstance().of_61zpoe$(message)));
    return flag && state.input.isNotEmpty() ? plus_0(newTokens, new YamlParser$Token(state.byteOffset, state.charOffset, state.line, state.lineChar, YamlParser$Code$Unparsed_getInstance(), YamlParser$Escapable$Companion_getInstance().of_q5rwfd$(state.input.codes()))) : newTokens;
  };
  YamlParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [YamlParser]
  };
  var YamlParser$Companion_instance = null;
  function YamlParser$Companion_getInstance() {
    if (YamlParser$Companion_instance === null) {
      new YamlParser$Companion();
    }
    return YamlParser$Companion_instance;
  }
  YamlParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'YamlParser',
    interfaces: []
  };
  function BuildInfo(includeWrapper, projectType, ktorVersion, artifactName, artifactGroup, artifactVersion, ktorEngine, generateFeatureSample, swaggerGenKind, fetch) {
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
    if (swaggerGenKind === void 0)
      swaggerGenKind = SwaggerGenerator$Kind$RAW_getInstance();
    if (fetch === void 0)
      fetch = BuildInfo_init$lambda;
    BlockBuilder$Config.call(this);
    this.includeWrapper = includeWrapper;
    this.projectType = projectType;
    this.ktorVersion = ktorVersion;
    this.artifactName = artifactName;
    this.artifactGroup = artifactGroup;
    this.artifactVersion = artifactVersion;
    this.ktorEngine = ktorEngine;
    this.generateFeatureSample = generateFeatureSample;
    this.swaggerGenKind = swaggerGenKind;
    this.fetch = fetch;
    this.is100OrGreater = this.ktorVersion.semVersion.compareTo_11rb$(new SemVer('1.0.0')) >= 0;
    this.developmentPackage = 'io.ktor.server.' + this.ktorEngine.id;
    var tmp$;
    if (this.is100OrGreater)
      tmp$ = this.developmentPackage + '.EngineMain';
    else
      tmp$ = this.developmentPackage + '.DevelopmentEngine';
    this.developmentEngineFQ = tmp$;
  }
  Object.defineProperty(BuildInfo.prototype, 'kotlinVersion', {
    get: function () {
      return this.ktorVersion.semKotlinVersion;
    }
  });
  BuildInfo.prototype.transform_66iv3j$ = function (data, charset) {
    var tmp$;
    if (charset == null)
      return data;
    var content = toString_1(data, charset);
    if (this.is100OrGreater) {
      tmp$ = replace(replace(replace(content, 'kotlin.coroutines.experimental.', 'kotlin.coroutines.'), 'kotlinx.coroutines.experimental.', 'kotlinx.coroutines.'), '// kotlinx.coroutines-1.0.0: // ', '');
    }
     else {
      tmp$ = content;
    }
    return toByteArray(tmp$, charset);
  };
  function Coroutine$BuildInfo_init$lambda(it_0, continuation_0) {
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
  function BuildInfo_init$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$BuildInfo_init$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  BuildInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildInfo',
    interfaces: [BlockBuilder$Config]
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
    return this.swaggerGenKind;
  };
  BuildInfo.prototype.component10 = function () {
    return this.fetch;
  };
  BuildInfo.prototype.copy_nrtplq$ = function (includeWrapper, projectType, ktorVersion, artifactName, artifactGroup, artifactVersion, ktorEngine, generateFeatureSample, swaggerGenKind, fetch) {
    return new BuildInfo(includeWrapper === void 0 ? this.includeWrapper : includeWrapper, projectType === void 0 ? this.projectType : projectType, ktorVersion === void 0 ? this.ktorVersion : ktorVersion, artifactName === void 0 ? this.artifactName : artifactName, artifactGroup === void 0 ? this.artifactGroup : artifactGroup, artifactVersion === void 0 ? this.artifactVersion : artifactVersion, ktorEngine === void 0 ? this.ktorEngine : ktorEngine, generateFeatureSample === void 0 ? this.generateFeatureSample : generateFeatureSample, swaggerGenKind === void 0 ? this.swaggerGenKind : swaggerGenKind, fetch === void 0 ? this.fetch : fetch);
  };
  BuildInfo.prototype.toString = function () {
    return 'BuildInfo(includeWrapper=' + Kotlin.toString(this.includeWrapper) + (', projectType=' + Kotlin.toString(this.projectType)) + (', ktorVersion=' + Kotlin.toString(this.ktorVersion)) + (', artifactName=' + Kotlin.toString(this.artifactName)) + (', artifactGroup=' + Kotlin.toString(this.artifactGroup)) + (', artifactVersion=' + Kotlin.toString(this.artifactVersion)) + (', ktorEngine=' + Kotlin.toString(this.ktorEngine)) + (', generateFeatureSample=' + Kotlin.toString(this.generateFeatureSample)) + (', swaggerGenKind=' + Kotlin.toString(this.swaggerGenKind)) + (', fetch=' + Kotlin.toString(this.fetch)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.swaggerGenKind) | 0;
    result = result * 31 + Kotlin.hashCode(this.fetch) | 0;
    return result;
  };
  BuildInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.includeWrapper, other.includeWrapper) && Kotlin.equals(this.projectType, other.projectType) && Kotlin.equals(this.ktorVersion, other.ktorVersion) && Kotlin.equals(this.artifactName, other.artifactName) && Kotlin.equals(this.artifactGroup, other.artifactGroup) && Kotlin.equals(this.artifactVersion, other.artifactVersion) && Kotlin.equals(this.ktorEngine, other.ktorEngine) && Kotlin.equals(this.generateFeatureSample, other.generateFeatureSample) && Kotlin.equals(this.swaggerGenKind, other.swaggerGenKind) && Kotlin.equals(this.fetch, other.fetch)))));
  };
  function FileContainer() {
  }
  FileContainer.prototype.add_ei5ywl$ = function (name, content, mode, callback$default) {
    if (mode === void 0)
      mode = FileMode_init('644');
    callback$default ? callback$default(name, content, mode) : this.add_ei5ywl$$default(name, content, mode);
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
      mode = FileMode_init('644');
    $receiver.add_ei5ywl$(name, toByteArray(content, charset), mode);
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
    this.since_4l64le$_0 = null;
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
  Object.defineProperty(Feature.prototype, 'since', {
    get: function () {
      return this.since_4l64le$_0;
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
    tmp$_1 = this.testArtifacts.iterator();
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
      return listOf('io.ktor:' + this$Feature.id + ':' + '$' + 'ktor_version');
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
  function KtorEngine$Companion() {
    KtorEngine$Companion_instance = this;
    var $receiver = KtorEngine$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
    var $receiver_0 = KtorEngine$values();
    var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
    var destination_0 = LinkedHashMap_init(capacity_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      destination_0.put_xwzc9p$(element_0.name, element_0);
    }
    this.BY_NAME = destination_0;
    this.BY = plus_1(this.BY_ID, this.BY_NAME);
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
    ProjectType$GradleKotlinDsl_instance = new ProjectType('GradleKotlinDsl', 1, 'gradle-kotlin-dsl');
    ProjectType$Maven_instance = new ProjectType('Maven', 2, 'maven');
    ProjectType$Companion_getInstance();
  }
  var ProjectType$Gradle_instance;
  function ProjectType$Gradle_getInstance() {
    ProjectType_initFields();
    return ProjectType$Gradle_instance;
  }
  var ProjectType$GradleKotlinDsl_instance;
  function ProjectType$GradleKotlinDsl_getInstance() {
    ProjectType_initFields();
    return ProjectType$GradleKotlinDsl_instance;
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
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
    var $receiver_0 = ProjectType$values();
    var capacity_0 = coerceAtLeast(mapCapacity($receiver_0.length), 16);
    var destination_0 = LinkedHashMap_init(capacity_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var element_0 = $receiver_0[tmp$_0];
      destination_0.put_xwzc9p$(element_0.name, element_0);
    }
    this.BY_NAME = destination_0;
    this.BY = plus_1(this.BY_ID, this.BY_NAME);
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
    return [ProjectType$Gradle_getInstance(), ProjectType$GradleKotlinDsl_getInstance(), ProjectType$Maven_getInstance()];
  }
  ProjectType.values = ProjectType$values;
  function ProjectType$valueOf(name) {
    switch (name) {
      case 'Gradle':
        return ProjectType$Gradle_getInstance();
      case 'GradleKotlinDsl':
        return ProjectType$GradleKotlinDsl_getInstance();
      case 'Maven':
        return ProjectType$Maven_getInstance();
      default:throwISE('No enum constant io.ktor.start.ProjectType.' + name);
    }
  }
  ProjectType.valueOf_61zpoe$ = ProjectType$valueOf;
  function Repos() {
    Repos_instance = this;
    this.local = listOf('local');
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
  function Versions() {
    Versions_instance = this;
    this.V094 = new KtorVersion('0.9.4', '1.2.61');
    this.V095 = new KtorVersion('0.9.5', '1.2.70');
    this.V100 = new KtorVersion('1.0.0', '1.3.10');
    this.V101 = new KtorVersion('1.0.1', '1.3.10');
    this.V111 = new KtorVersion('1.1.1', '1.3.11');
    this.V112 = new KtorVersion('1.1.2', '1.3.20');
    this.V113 = new KtorVersion('1.1.3', '1.3.21');
    this.V114 = new KtorVersion('1.1.4', '1.3.30');
    this.V115 = new KtorVersion('1.1.5', '1.3.30');
    this.V120 = new KtorVersion('1.2.0', '1.3.31');
    this.V121 = new KtorVersion('1.2.1', '1.3.31');
    this.V122 = new KtorVersion('1.2.2', '1.3.40');
    this.V123 = new KtorVersion('1.2.3', '1.3.41');
    this.V124 = new KtorVersion('1.2.4', '1.3.50');
    this.V126 = new KtorVersion('1.2.6', '1.3.60');
    this.V130b1 = new KtorVersion('1.3.0-beta-1', '1.3.50');
    this.ALL = [this.V101, this.V115, this.V126, this.V130b1];
    this.LAST = this.V126;
    this.LAST_EAP = this.V130b1;
    var $receiver = this.ALL;
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var pair = to(element.version, element);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    this.VMAP_0 = destination;
  }
  Versions.prototype.fromString_61zpoe$ = function (version) {
    return this.VMAP_0.get_11rb$(version);
  };
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
  function KtorVersion(version, kotlinVersion, extraRepos) {
    if (extraRepos === void 0) {
      extraRepos = emptyList();
    }
    this.version = version;
    this.kotlinVersion = kotlinVersion;
    this.extraRepos = extraRepos;
    this.semVersion = new SemVer(this.version);
    this.semKotlinVersion = new SemVer(this.kotlinVersion);
  }
  KtorVersion.prototype.compareTo_11rb$ = function (other) {
    return this.semVersion.compareTo_11rb$(other.semVersion);
  };
  KtorVersion.prototype.toString = function () {
    return this.semVersion.toString();
  };
  KtorVersion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KtorVersion',
    interfaces: [Comparable]
  };
  KtorVersion.prototype.component1 = function () {
    return this.version;
  };
  KtorVersion.prototype.component2 = function () {
    return this.kotlinVersion;
  };
  KtorVersion.prototype.component3 = function () {
    return this.extraRepos;
  };
  KtorVersion.prototype.copy_bg8n2v$ = function (version, kotlinVersion, extraRepos) {
    return new KtorVersion(version === void 0 ? this.version : version, kotlinVersion === void 0 ? this.kotlinVersion : kotlinVersion, extraRepos === void 0 ? this.extraRepos : extraRepos);
  };
  KtorVersion.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.kotlinVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.extraRepos) | 0;
    return result;
  };
  KtorVersion.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.kotlinVersion, other.kotlinVersion) && Kotlin.equals(this.extraRepos, other.extraRepos)))));
  };
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
    this.artifacts_nebgnx$_0 = lazy(CoreClientEngine$artifacts$lambda);
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
  Object.defineProperty(CoreClientEngine.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_nebgnx$_0.value;
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
  function CoreClientEngine$artifacts$lambda() {
    return listOf_0(['io.ktor:ktor-client-core:$ktor_version', 'io.ktor:ktor-client-core-jvm:$ktor_version']);
  }
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
          $receiver.extra = LinkedHashMap_init_0();
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
      $receiver.extra = LinkedHashMap_init_0();
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
    ClientEngine.call(this, [CoreClientEngine_getInstance(), ApplicationTestKt_getInstance()]);
    this.id_541874$_0 = 'ktor-client-mock';
    this.title_28v3i9$_0 = 'Mock HttpClient Engine';
    this.description_w4am8t$_0 = 'Engine for using in tests to simulate HTTP responses programmatically.';
    this.documentation_6p2g81$_0 = 'https://ktor.io/clients/http-client.html#mock';
    this.artifacts_50995k$_0 = emptyList();
    this.testArtifacts_o0ceoa$_0 = listOf_0(['io.ktor:ktor-client-mock:$ktor_version', 'io.ktor:ktor-client-mock-jvm:$ktor_version']);
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
  function MockClientEngine$renderFeature$lambda(closure$info) {
    return function ($receiver) {
      var $receiver_0 = 'runBlocking';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$info_0 = closure$info;
        if (closure$info_0.ktorVersion.compareTo_11rb$(Versions_getInstance().V120) >= 0) {
          $receiver.line_61zpoe$('val client = HttpClient(MockEngine) {');
          $receiver._indent();
          try {
            var rafter_0 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$('engine'.length === 0 ? '{' + rafter_0 : 'engine' + ' {' + rafter_0);
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('addHandler { request -> ');
              $receiver._indent();
              try {
                var $receiver_1 = 'when (request.url.fullPath)';
                var rafter_1 = ''.length === 0 ? '' : ' ' + '';
                $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_1 : $receiver_1 + ' {' + rafter_1);
                $receiver._indent();
                try {
                  $receiver.line_61zpoe$('"/" -> respond(');
                  $receiver._indent();
                  try {
                    $receiver.line_61zpoe$('ByteReadChannel(byteArrayOf(1, 2, 3)),');
                    $receiver.line_61zpoe$('headers = headersOf("X-MyHeader", "MyValue")');
                  }
                  finally {
                    $receiver._unindent();
                  }
                  $receiver.line_61zpoe$(')');
                  $receiver.line_61zpoe$('else -> respond("Not Found ${request.url.encodedPath}", HttpStatusCode.NotFound)');
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
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
            $receiver.line_61zpoe$('expectSuccess = false');
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}');
        }
         else if (closure$info_0.ktorVersion.compareTo_11rb$(Versions_getInstance().V100) >= 0) {
          $receiver.line_61zpoe$('val client = HttpClient(MockEngine {');
          $receiver._indent();
          try {
            var $receiver_2 = 'if (url.encodedPath == "/")';
            var rafter_2 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_2 : $receiver_2 + ' {' + rafter_2);
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('MockHttpResponse(call, HttpStatusCode.OK, ByteReadChannel(byteArrayOf(1, 2, 3)), headersOf("X-MyHeader", "MyValue"))');
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
            var tmp$, tmp$_0;
            var tmp$_1;
            if ((tmp$_0 = Kotlin.isType(tmp$ = lastOrNull($receiver.actions), Indenter$Action$Line) ? tmp$ : null) != null)
              tmp$_1 = tmp$_0;
            else {
              throw IllegalStateException_init('Expected a line'.toString());
            }
            var lastAction = tmp$_1;
            if (!equals(lastAction.str, '}')) {
              throw IllegalStateException_init("Expected a '}'".toString());
            }
            $receiver.actions.removeAt_za3lpa$($receiver.actions.size - 1 | 0);
            var str = '} ' + 'else';
            $receiver.line_61zpoe$(str.length === 0 ? '{' : str + ' {');
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('responseError(HttpStatusCode.NotFound, "Not Found ${url.encodedPath}")');
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}');
          }
          finally {
            $receiver._unindent();
          }
          var rafter_3 = ''.length === 0 ? '' : ' ' + '';
          $receiver.line_61zpoe$('})'.length === 0 ? '{' + rafter_3 : '})' + ' {' + rafter_3);
          $receiver._indent();
          try {
            $receiver.line_61zpoe$('expectSuccess = false');
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('}' + '');
          unaryPlus_0($receiver);
        }
         else {
          $receiver.line_61zpoe$('val client = HttpClient(MockEngine { call ->');
          $receiver._indent();
          try {
            var $receiver_3 = 'if (url.encodedPath == "/")';
            var rafter_4 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$($receiver_3.length === 0 ? '{' + rafter_4 : $receiver_3 + ' {' + rafter_4);
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('MockHttpResponse(call, HttpStatusCode.OK, ByteReadChannel(byteArrayOf(1, 2, 3)), headersOf("X-MyHeader", "MyValue"))');
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
            var tmp$_2, tmp$_3;
            var tmp$_4;
            if ((tmp$_3 = Kotlin.isType(tmp$_2 = lastOrNull($receiver.actions), Indenter$Action$Line) ? tmp$_2 : null) != null)
              tmp$_4 = tmp$_3;
            else {
              throw IllegalStateException_init('Expected a line'.toString());
            }
            var lastAction_0 = tmp$_4;
            if (!equals(lastAction_0.str, '}')) {
              throw IllegalStateException_init("Expected a '}'".toString());
            }
            $receiver.actions.removeAt_za3lpa$($receiver.actions.size - 1 | 0);
            var str_0 = '} ' + 'else';
            $receiver.line_61zpoe$(str_0.length === 0 ? '{' : str_0 + ' {');
            $receiver._indent();
            try {
              $receiver.line_61zpoe$('MockHttpResponse(call, HttpStatusCode.NotFound, ByteReadChannel("Not Found ${url.encodedPath}"))');
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}');
          }
          finally {
            $receiver._unindent();
          }
          $receiver.line_61zpoe$('})');
        }
        $receiver.line_61zpoe$('assertEquals(byteArrayOf(1, 2, 3).toList(), client.get<ByteArray>("/").toList())');
        $receiver.line_61zpoe$('assertEquals("MyValue", client.call("/").response.headers["X-MyHeader"])');
        $receiver.line_61zpoe$('assertEquals("Not Found other/path", client.get<String>("/other/path"))');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  MockClientEngine.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addTestImport($receiver, 'io.ktor.client.engine.mock.*');
    addTestImport($receiver, 'kotlinx.coroutines.experimental.*');
    addTestImport($receiver, 'io.ktor.http.*');
    addTestImport($receiver, 'kotlinx.coroutines.experimental.io.*');
    addTestImport($receiver, 'io.ktor.client.request.*');
    addTestImport($receiver, 'io.ktor.client.call.*');
    addTestMethod($receiver, 'testClientMock', MockClientEngine$renderFeature$lambda(info));
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
    this.documentation_o7l9db$_0 = 'https://ktor.io/clients/http-client/features/auth.html';
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
    addImport($receiver, 'io.ktor.client.features.auth.basic.*');
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
  function GsonClientFeature() {
    GsonClientFeature_instance = this;
    ClientFeature.call(this, [CoreClientEngine_getInstance(), ApplicationKt_getInstance()]);
    this.id_uzzko7$_0 = 'ktor-client-json-jvm';
    this.title_x2y7i0$_0 = 'Json serialization for HttpClient';
    this.description_n1lz4s$_0 = 'Supports JSON serialization for the Http Client';
    this.documentation_ua468q$_0 = 'https://ktor.io/clients/http-client/features/json-feature.html';
    this.repos_y3b41t$_0 = plus(Kotlin.callGetter(this, ClientFeature.prototype, 'repos'), listOf('https://kotlin.bintray.com/kotlinx'));
    this.artifacts_swhujl$_0 = listOf_0(['io.ktor:ktor-client-json-jvm:$ktor_version', 'io.ktor:ktor-client-gson:$ktor_version']);
  }
  Object.defineProperty(GsonClientFeature.prototype, 'id', {
    get: function () {
      return this.id_uzzko7$_0;
    }
  });
  Object.defineProperty(GsonClientFeature.prototype, 'title', {
    get: function () {
      return this.title_x2y7i0$_0;
    }
  });
  Object.defineProperty(GsonClientFeature.prototype, 'description', {
    get: function () {
      return this.description_n1lz4s$_0;
    }
  });
  Object.defineProperty(GsonClientFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_ua468q$_0;
    }
  });
  Object.defineProperty(GsonClientFeature.prototype, 'repos', {
    get: function () {
      return this.repos_y3b41t$_0;
    }
  });
  Object.defineProperty(GsonClientFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_swhujl$_0;
    }
  });
  function GsonClientFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('data class JsonSampleClass(val hello: String)');
    return Unit;
  }
  function GsonClientFeature$renderFeature$lambda_0($receiver) {
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
  function GsonClientFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'runBlocking';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('// Sample for making a HTTP Client request');
      $receiver.line_61zpoe$('/*');
      var $receiver_1 = 'val message = client.post<JsonSampleClass>';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('url("http://127.0.0.1:8080/path/to/endpoint")');
        $receiver.line_61zpoe$('contentType(ContentType.Application.Json)');
        $receiver.line_61zpoe$('body = JsonSampleClass(hello = "world")');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      $receiver.line_61zpoe$('*/');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  GsonClientFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.features.json.*');
    addImport($receiver, 'io.ktor.client.request.*');
    addImport($receiver, 'kotlinx.coroutines.experimental.*');
    addApplicationClasses($receiver, GsonClientFeature$renderFeature$lambda);
    $receiver.append_qu2wte$(CoreClientEngine_getInstance().CLIENT_FEATURES, void 0, GsonClientFeature$renderFeature$lambda_0);
    $receiver.append_qu2wte$(CoreClientEngine_getInstance().CLIENT_USAGE, void 0, GsonClientFeature$renderFeature$lambda_1);
  };
  GsonClientFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GsonClientFeature',
    interfaces: [ClientFeature]
  };
  var GsonClientFeature_instance = null;
  function GsonClientFeature_getInstance() {
    if (GsonClientFeature_instance === null) {
      new GsonClientFeature();
    }
    return GsonClientFeature_instance;
  }
  function LoggingClientFeature() {
    LoggingClientFeature_instance = this;
    ClientFeature.call(this, [CoreClientEngine_getInstance()]);
    this.id_3ggcs5$_0 = 'ktor-client-logging';
    this.title_3q9ec$_0 = 'Logging feature';
    this.description_o0n9vc$_0 = 'Logging feature for debugging client calls';
    this.documentation_svsyiy$_0 = 'https://ktor.io/clients/http-client/features/logging.html';
    this.since_kvwdy$_0 = Versions_getInstance().V101;
    this.artifacts_w0af7h$_0 = listOf('io.ktor:ktor-client-logging-jvm:$ktor_version');
  }
  Object.defineProperty(LoggingClientFeature.prototype, 'id', {
    get: function () {
      return this.id_3ggcs5$_0;
    }
  });
  Object.defineProperty(LoggingClientFeature.prototype, 'title', {
    get: function () {
      return this.title_3q9ec$_0;
    }
  });
  Object.defineProperty(LoggingClientFeature.prototype, 'description', {
    get: function () {
      return this.description_o0n9vc$_0;
    }
  });
  Object.defineProperty(LoggingClientFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_svsyiy$_0;
    }
  });
  Object.defineProperty(LoggingClientFeature.prototype, 'since', {
    get: function () {
      return this.since_kvwdy$_0;
    }
  });
  Object.defineProperty(LoggingClientFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_w0af7h$_0;
    }
  });
  function LoggingClientFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(Logging)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('level = LogLevel.HEADERS');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  LoggingClientFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.features.logging.*');
    $receiver.append_qu2wte$(CoreClientEngine_getInstance().CLIENT_FEATURES, void 0, LoggingClientFeature$renderFeature$lambda);
  };
  LoggingClientFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LoggingClientFeature',
    interfaces: [ClientFeature]
  };
  var LoggingClientFeature_instance = null;
  function LoggingClientFeature_getInstance() {
    if (LoggingClientFeature_instance === null) {
      new LoggingClientFeature();
    }
    return LoggingClientFeature_instance;
  }
  function UserAgentClientFeature() {
    UserAgentClientFeature_instance = this;
    ClientFeature.call(this, [CoreClientEngine_getInstance()]);
    this.id_xgqe86$_0 = 'ktor-client-user-agent';
    this.title_q3kvll$_0 = 'User agent feature';
    this.description_97kgf7$_0 = 'User agent header support feature';
    this.documentation_2qivbv$_0 = 'https://ktor.io/clients/http-client/features/user-agent.html';
    this.since_qkqil7$_0 = Versions_getInstance().V101;
  }
  Object.defineProperty(UserAgentClientFeature.prototype, 'id', {
    get: function () {
      return this.id_xgqe86$_0;
    }
  });
  Object.defineProperty(UserAgentClientFeature.prototype, 'title', {
    get: function () {
      return this.title_q3kvll$_0;
    }
  });
  Object.defineProperty(UserAgentClientFeature.prototype, 'description', {
    get: function () {
      return this.description_97kgf7$_0;
    }
  });
  Object.defineProperty(UserAgentClientFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_2qivbv$_0;
    }
  });
  Object.defineProperty(UserAgentClientFeature.prototype, 'since', {
    get: function () {
      return this.since_qkqil7$_0;
    }
  });
  Object.defineProperty(UserAgentClientFeature.prototype, 'artifacts', {
    get: function () {
      return emptyList();
    }
  });
  function UserAgentClientFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('BrowserUserAgent() // install default browser-like user-agent');
    $receiver.line_61zpoe$('// install(UserAgent) { agent = "some user agent" }');
    return Unit;
  }
  UserAgentClientFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.features.UserAgent');
    addImport($receiver, 'io.ktor.client.features.BrowserUserAgent');
    $receiver.append_qu2wte$(CoreClientEngine_getInstance().CLIENT_FEATURES, void 0, UserAgentClientFeature$renderFeature$lambda);
  };
  UserAgentClientFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UserAgentClientFeature',
    interfaces: [ClientFeature]
  };
  var UserAgentClientFeature_instance = null;
  function UserAgentClientFeature_getInstance() {
    if (UserAgentClientFeature_instance === null) {
      new UserAgentClientFeature();
    }
    return UserAgentClientFeature_instance;
  }
  function WebSocketClientFeature() {
    WebSocketClientFeature_instance = this;
    ClientFeature.call(this, [CoreClientEngine_getInstance(), CioClientEngine_getInstance(), WebsocketsFeature_getInstance()]);
    this.id_vy1rrn$_0 = 'ktor-client-websocket';
    this.title_k9eaoc$_0 = 'WebSockets HttpClient support';
    this.description_91aqeo$_0 = 'HttpClient feature to establish bidirectional communication using WebSockets';
    this.documentation_77pdg2$_0 = 'https://ktor.io/clients/http-client/features/websockets.html';
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
  function WebSocketClientFeature$renderFeature$lambda(this$renderFeature_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WebSocketClientFeature$renderFeature$lambda(this$renderFeature_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  WebSocketClientFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.client.*');
    addImport($receiver, 'io.ktor.client.features.websocket.*');
    addImport($receiver, 'io.ktor.client.features.websocket.WebSockets');
    addImport($receiver, 'io.ktor.http.*');
    addImport($receiver, 'io.ktor.http.cio.websocket.*');
    addImport($receiver, 'io.ktor.http.cio.websocket.Frame');
    addImport($receiver, 'kotlinx.coroutines.experimental.*');
    addImport($receiver, 'kotlinx.coroutines.experimental.channels.*');
    $receiver.fileText_6jjb1r$('src/WsClientApp.kt', void 0, void 0, WebSocketClientFeature$renderFeature$lambda($receiver));
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
    this.artifacts_aoeizt$_0 = listOf('io.ktor:ktor-auth:$ktor_version');
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
    this.artifacts_swddtp$_0 = listOf('io.ktor:ktor-auth:$ktor_version');
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
      $receiver.line_61zpoe$('userNameRealmPasswordDigestProvider = { userName, realm ->');
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('usersInMyRealmToHA1[userName]');
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
    this.artifacts_e1kzvr$_0 = listOf('io.ktor:ktor-auth:$ktor_version');
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
    this.artifacts_3aqenk$_0 = listOf('io.ktor:ktor-auth-jwt:$ktor_version');
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
    this.artifacts_35gluo$_0 = listOf('io.ktor:ktor-auth-ldap:$ktor_version');
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
    this.artifacts_mbz4ow$_0 = listOf('io.ktor:ktor-auth:$ktor_version');
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
    this.artifacts_g2pl8f$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
          $receiver.line_61zpoe$('ContentType.Text.CSS -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60), expires = null as? GMTDate?)');
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
    addImport($receiver, 'io.ktor.http.*');
    addImport($receiver, 'io.ktor.http.content.*');
    addImport($receiver, 'io.ktor.util.date.*');
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
    this.artifacts_orj4zi$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_4n8blk$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_7z519q$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_ser0pj$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_abh87l$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_xpb4br$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_xzvytx$_0 = listOf('org.jetbrains:kotlin-css-jvm:1.0.0-pre.31-kotlin-1.2.41');
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
    this.artifacts_4tzc41$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
    this.id_m3ch09$_0 = 'data-conversion';
    this.title_6equey$_0 = 'DataConversion';
    this.description_6nroeu$_0 = 'Allows to serialize and deserialize a list of values (used by the Locations feature)';
    this.documentation_wt7c60$_0 = 'https://ktor.io/servers/features/data-conversion.html';
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
    this.artifacts_ip5x8q$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_rf2yhd$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    $receiver.line_61zpoe$('install(XForwardedHeaderSupport) // WARNING: for security, do not include this if not behind a reverse proxy');
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
    this.artifacts_qojtbd$_0 = listOf('io.ktor:ktor-freemarker:$ktor_version');
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
  function FreemarkerFeature$renderFeature$lambda_2(closure$info_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FreemarkerFeature$renderFeature$lambda(closure$info_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  FreemarkerFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'freemarker.cache.*');
    addImport($receiver, 'io.ktor.freemarker.*');
    addApplicationClasses($receiver, FreemarkerFeature$renderFeature$lambda);
    addFeatureInstall($receiver, FreemarkerFeature$renderFeature$lambda_0);
    addRoute($receiver, FreemarkerFeature$renderFeature$lambda_1);
    $receiver.fileText_6jjb1r$('resources/templates/index.ftl', void 0, void 0, FreemarkerFeature$renderFeature$lambda_2(info));
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
    this.artifacts_18qyhx$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    this.artifacts_szsc8z$_0 = listOf('io.ktor:ktor-html-builder:$ktor_version');
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
    this.artifacts_xp2d0o$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    $receiver.line_61zpoe$('// https://ktor.io/servers/features/https-redirect.html#testing');
    var $receiver_0 = 'if (!testing)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'install(HttpsRedirect)';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
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
      unaryPlus_0($receiver);
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
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
    this.artifacts_1ovdbw$_0 = listOf('io.ktor:ktor-gson:$ktor_version');
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
    this.artifacts_fad5hg$_0 = listOf('io.ktor:ktor-jackson:$ktor_version');
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
    this.artifacts_xu1ky7$_0 = listOf('io.ktor:ktor-locations:$ktor_version');
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
  function LocationsFeature$renderFeature$lambda$lambda$lambda$lambda($receiver) {
    $receiver.line_61zpoe$('@Location("/edit")');
    $receiver.line_61zpoe$('data class Edit(val type: Type)');
    return Unit;
  }
  function LocationsFeature$renderFeature$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('@Location("/list/{page}")');
    $receiver.line_61zpoe$('data class List(val type: Type, val page: Int)');
    return Unit;
  }
  function LocationsFeature$renderFeature$lambda$lambda_0($receiver) {
    var $receiver_0 = '@Location("/type/{name}") data class Type(val name: String)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      SEPARATOR($receiver, LocationsFeature$renderFeature$lambda$lambda$lambda$lambda);
      SEPARATOR($receiver, LocationsFeature$renderFeature$lambda$lambda$lambda$lambda_0);
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
    this.artifacts_qhtto4$_0 = listOf('io.ktor:ktor-metrics:$ktor_version');
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
  function MustacheFeature() {
    MustacheFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.group_mtr8jp$_0 = 'Templating';
    this.repos_hte7bb$_0 = Repos_getInstance().ktor;
    this.artifacts_1a6me1$_0 = listOf('io.ktor:ktor-mustache:$ktor_version');
    this.id_2vek9r$_0 = 'mustache';
    this.title_gt1ari$_0 = 'Mustache';
    this.description_4nno66$_0 = 'Serve HTML content using Mustache template engine';
    this.documentation_poae5c$_0 = 'https://ktor.io/features/templates/mustache.html';
  }
  Object.defineProperty(MustacheFeature.prototype, 'group', {
    get: function () {
      return this.group_mtr8jp$_0;
    }
  });
  Object.defineProperty(MustacheFeature.prototype, 'repos', {
    get: function () {
      return this.repos_hte7bb$_0;
    }
  });
  Object.defineProperty(MustacheFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_1a6me1$_0;
    }
  });
  Object.defineProperty(MustacheFeature.prototype, 'id', {
    get: function () {
      return this.id_2vek9r$_0;
    }
  });
  Object.defineProperty(MustacheFeature.prototype, 'title', {
    get: function () {
      return this.title_gt1ari$_0;
    }
  });
  Object.defineProperty(MustacheFeature.prototype, 'description', {
    get: function () {
      return this.description_4nno66$_0;
    }
  });
  Object.defineProperty(MustacheFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_poae5c$_0;
    }
  });
  function MustacheFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('data class MustacheUser(val id: Int, val name: String)');
    return Unit;
  }
  function MustacheFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(Mustache)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('mustacheFactory = DefaultMustacheFactory("templates/mustache")');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function MustacheFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'get("/html-mustache")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respond(MustacheContent("index.hbs", mapOf("user" to MustacheUser(1, "user1"))))');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function Coroutine$MustacheFeature$renderFeature$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$MustacheFeature$renderFeature$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MustacheFeature$renderFeature$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MustacheFeature$renderFeature$lambda.prototype.constructor = Coroutine$MustacheFeature$renderFeature$lambda;
  Coroutine$MustacheFeature$renderFeature$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('<html>');
            this.local$$receiver.line_61zpoe$('<body>');
            this.local$$receiver.line_61zpoe$('<p>Hello, {{user.name}}<\/p>');
            this.local$$receiver.line_61zpoe$('<\/body>');
            return this.local$$receiver.line_61zpoe$('<\/html>');
          case 1:
            throw this.exception_0;
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
  function MustacheFeature$renderFeature$lambda_2($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$MustacheFeature$renderFeature$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  MustacheFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'com.github.mustachejava.DefaultMustacheFactory');
    addImport($receiver, 'io.ktor.mustache.Mustache');
    addImport($receiver, 'io.ktor.mustache.MustacheContent');
    addApplicationClasses($receiver, MustacheFeature$renderFeature$lambda);
    addFeatureInstall($receiver, MustacheFeature$renderFeature$lambda_0);
    addRoute($receiver, MustacheFeature$renderFeature$lambda_1);
    $receiver.fileText_6jjb1r$('resources/templates/mustache/index.hbs', void 0, void 0, MustacheFeature$renderFeature$lambda_2);
  };
  MustacheFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MustacheFeature',
    interfaces: [ServerFeature]
  };
  var MustacheFeature_instance = null;
  function MustacheFeature_getInstance() {
    if (MustacheFeature_instance === null) {
      new MustacheFeature();
    }
    return MustacheFeature_instance;
  }
  function PartialContentFeature() {
    PartialContentFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.repos_ybnc3b$_0 = Repos_getInstance().ktor;
    this.artifacts_l00cyf$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
    ServerFeature.call(this, [ApplicationKt_getInstance(), ApplicationTestKt_getInstance()]);
    this.repos_pq7355$_0 = Repos_getInstance().ktor;
    this.artifacts_w3p8dz$_0 = listOf('io.ktor:ktor-server-core:$ktor_version');
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
  function RoutingFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'withTestApplication({ module(testing = true) })';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'handleRequest(HttpMethod.Get, "/").apply';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('assertEquals(HttpStatusCode.OK, response.status())');
        $receiver.line_61zpoe$('assertEquals("HELLO WORLD!", response.content)');
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
  RoutingFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.routing.*');
    addImport($receiver, 'io.ktor.http.*');
    $receiver.appendSeparated_qu2wte$(ApplicationKt_getInstance().MODULE_POST, void 0, RoutingFeature$renderFeature$lambda(this, $receiver));
    addTestMethod($receiver, 'testRoot', RoutingFeature$renderFeature$lambda_0);
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
    this.artifacts_1earjm$_0 = listOf('io.ktor:ktor-server-sessions:$ktor_version');
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
    this.artifacts_ymjlgq$_0 = listOf('io.ktor:ktor-server-host-common:$ktor_version');
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
    this.artifacts_j7f4mc$_0 = listOf('io.ktor:ktor-server-host-common:$ktor_version');
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
  function StaticContentFeature$renderFeature$lambda_0(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$StaticContentFeature$renderFeature$lambda(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  StaticContentFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.content.*');
    addImport($receiver, 'io.ktor.http.content.*');
    addRoute($receiver, StaticContentFeature$renderFeature$lambda);
    $receiver.fileBinary_z1oxai$('resources/static/ktor_logo.svg', void 0, void 0, StaticContentFeature$renderFeature$lambda_0(info));
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
    this.artifacts_qjikgt$_0 = listOf('io.ktor:ktor-server-host-common:$ktor_version');
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
        $receiver.line_61zpoe$('exception<AuthenticationException> { cause ->');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('call.respond(HttpStatusCode.Unauthorized)');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}');
        $receiver.line_61zpoe$('exception<AuthorizationException> { cause ->');
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('call.respond(HttpStatusCode.Forbidden)');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}');
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
  function ThymeleafFeature() {
    ThymeleafFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.group_bqi77y$_0 = 'Templating';
    this.repos_gqv8gc$_0 = Repos_getInstance().ktor;
    this.artifacts_5o1qj8$_0 = listOf('io.ktor:ktor-thymeleaf:$ktor_version');
    this.id_6al82c$_0 = 'thymeleaf';
    this.title_hr8505$_0 = 'Thymeleaf';
    this.description_1r3u9d$_0 = 'Serve HTML content using Thymeleaf template engine';
    this.documentation_4yb2gj$_0 = 'https://ktor.io/features/templates/thymeleaf.html';
  }
  Object.defineProperty(ThymeleafFeature.prototype, 'group', {
    get: function () {
      return this.group_bqi77y$_0;
    }
  });
  Object.defineProperty(ThymeleafFeature.prototype, 'repos', {
    get: function () {
      return this.repos_gqv8gc$_0;
    }
  });
  Object.defineProperty(ThymeleafFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_5o1qj8$_0;
    }
  });
  Object.defineProperty(ThymeleafFeature.prototype, 'id', {
    get: function () {
      return this.id_6al82c$_0;
    }
  });
  Object.defineProperty(ThymeleafFeature.prototype, 'title', {
    get: function () {
      return this.title_hr8505$_0;
    }
  });
  Object.defineProperty(ThymeleafFeature.prototype, 'description', {
    get: function () {
      return this.description_1r3u9d$_0;
    }
  });
  Object.defineProperty(ThymeleafFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_4yb2gj$_0;
    }
  });
  function ThymeleafFeature$renderFeature$lambda($receiver) {
    $receiver.line_61zpoe$('data class ThymeleafUser(val id: Int, val name: String)');
    return Unit;
  }
  function ThymeleafFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'install(Thymeleaf)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('setTemplateResolver(ClassLoaderTemplateResolver().apply {');
      $receiver._indent();
      try {
        $receiver.line_61zpoe$('prefix = "templates/thymeleaf/"');
        $receiver.line_61zpoe$('suffix = ".html"');
        $receiver.line_61zpoe$('characterEncoding = "utf-8"');
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('})');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function ThymeleafFeature$renderFeature$lambda_1($receiver) {
    var $receiver_0 = 'get("/html-thymeleaf")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respond(ThymeleafContent("index", mapOf("user" to ThymeleafUser(1, "user1"))))');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    return Unit;
  }
  function Coroutine$ThymeleafFeature$renderFeature$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ThymeleafFeature$renderFeature$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ThymeleafFeature$renderFeature$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ThymeleafFeature$renderFeature$lambda.prototype.constructor = Coroutine$ThymeleafFeature$renderFeature$lambda;
  Coroutine$ThymeleafFeature$renderFeature$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver.line_61zpoe$('<!DOCTYPE html >');
            this.local$$receiver.line_61zpoe$('<html xmlns:th="http://www.thymeleaf.org">');
            this.local$$receiver.line_61zpoe$('<head>');
            this.local$$receiver.line_61zpoe$('<meta charset="UTF-8">');
            this.local$$receiver.line_61zpoe$('<title>Title<\/title>');
            this.local$$receiver.line_61zpoe$('<\/head>');
            this.local$$receiver.line_61zpoe$('<body>');
            this.local$$receiver.line_61zpoe$('<span th:text="${user.name}"><\/span>');
            this.local$$receiver.line_61zpoe$('<\/body>');
            return this.local$$receiver.line_61zpoe$('<\/html>');
          case 1:
            throw this.exception_0;
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
  function ThymeleafFeature$renderFeature$lambda_2($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$ThymeleafFeature$renderFeature$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  ThymeleafFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.thymeleaf.Thymeleaf');
    addImport($receiver, 'io.ktor.thymeleaf.ThymeleafContent');
    addImport($receiver, 'org.thymeleaf.templateresolver.ClassLoaderTemplateResolver');
    addApplicationClasses($receiver, ThymeleafFeature$renderFeature$lambda);
    addFeatureInstall($receiver, ThymeleafFeature$renderFeature$lambda_0);
    addRoute($receiver, ThymeleafFeature$renderFeature$lambda_1);
    $receiver.fileText_6jjb1r$('resources/templates/thymeleaf/index.html', void 0, void 0, ThymeleafFeature$renderFeature$lambda_2);
  };
  ThymeleafFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ThymeleafFeature',
    interfaces: [ServerFeature]
  };
  var ThymeleafFeature_instance = null;
  function ThymeleafFeature_getInstance() {
    if (ThymeleafFeature_instance === null) {
      new ThymeleafFeature();
    }
    return ThymeleafFeature_instance;
  }
  function VelocityFeature() {
    VelocityFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.group_kld628$_0 = 'Templating';
    this.repos_plq7am$_0 = Repos_getInstance().ktor;
    this.artifacts_hjogc2$_0 = listOf('io.ktor:ktor-velocity:$ktor_version');
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
  function WebjarsFeature() {
    WebjarsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.since_89f4g4$_0 = Versions_getInstance().V094;
    this.repos_7q7uvx$_0 = Repos_getInstance().ktor;
    this.artifacts_kxa9a5$_0 = listOf_0(['io.ktor:ktor-webjars:$ktor_version', 'org.webjars:jquery:3.2.1']);
    this.id_tyoyrf$_0 = 'webjars';
    this.title_8qkrfq$_0 = 'Webjars';
    this.description_dw8u2m$_0 = 'Allows you to package your assets such as javascript libraries and css as part of your uber-jar.';
    this.documentation_p4t5ms$_0 = 'https://ktor.io/features/webjars.html';
  }
  Object.defineProperty(WebjarsFeature.prototype, 'since', {
    get: function () {
      return this.since_89f4g4$_0;
    }
  });
  Object.defineProperty(WebjarsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_7q7uvx$_0;
    }
  });
  Object.defineProperty(WebjarsFeature.prototype, 'artifacts', {
    get: function () {
      return this.artifacts_kxa9a5$_0;
    }
  });
  Object.defineProperty(WebjarsFeature.prototype, 'id', {
    get: function () {
      return this.id_tyoyrf$_0;
    }
  });
  Object.defineProperty(WebjarsFeature.prototype, 'title', {
    get: function () {
      return this.title_8qkrfq$_0;
    }
  });
  Object.defineProperty(WebjarsFeature.prototype, 'description', {
    get: function () {
      return this.description_dw8u2m$_0;
    }
  });
  Object.defineProperty(WebjarsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_p4t5ms$_0;
    }
  });
  function WebjarsFeature$renderFeature$lambda($receiver) {
    var $receiver_0 = 'install(Webjars)';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('path = "/webjars" //defaults to /webjars');
      $receiver.line_61zpoe$('zone = ZoneId.systemDefault() //defaults to ZoneId.systemDefault()');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  function WebjarsFeature$renderFeature$lambda_0($receiver) {
    var $receiver_0 = 'get("/webjars")';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      $receiver.line_61zpoe$('call.respondText("<script src=\'/webjars/jquery/jquery.js\'><\/script>", ContentType.Text.Html)');
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
    return Unit;
  }
  WebjarsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.webjars.*');
    addImport($receiver, 'java.time.*');
    addFeatureInstall($receiver, WebjarsFeature$renderFeature$lambda);
    addRoute($receiver, WebjarsFeature$renderFeature$lambda_0);
  };
  WebjarsFeature.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WebjarsFeature',
    interfaces: [ServerFeature]
  };
  var WebjarsFeature_instance = null;
  function WebjarsFeature_getInstance() {
    if (WebjarsFeature_instance === null) {
      new WebjarsFeature();
    }
    return WebjarsFeature_instance;
  }
  function WebsocketsFeature() {
    WebsocketsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance(), RoutingFeature_getInstance()]);
    this.repos_r8z5jx$_0 = Repos_getInstance().ktor;
    this.artifacts_9pl77n$_0 = listOf('io.ktor:ktor-websockets:$ktor_version');
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
  function RawSocketsFeature() {
    RawSocketsFeature_instance = this;
    ServerFeature.call(this, [ApplicationKt_getInstance()]);
    this.group_k51yn8$_0 = 'Sockets';
    this.repos_p5ezvm$_0 = Repos_getInstance().ktor;
    this.id_k6sgt2$_0 = 'ktor-network';
    this.title_q5rwff$_0 = 'Raw Sockets';
    this.description_9huigp$_0 = 'Adds Raw Socket support for listening and connecting to tcp and udp sockets';
    this.documentation_8dm8tz$_0 = 'https://ktor.io/servers/raw-sockets.html';
    this.SERVER_SOCKET = this.newSlot_pdl1vj$('SERVER_SOCKET');
    this.CLIENT_SOCKET = this.newSlot_pdl1vj$('CLIENT_SOCKET');
  }
  Object.defineProperty(RawSocketsFeature.prototype, 'group', {
    get: function () {
      return this.group_k51yn8$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_p5ezvm$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'id', {
    get: function () {
      return this.id_k6sgt2$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'title', {
    get: function () {
      return this.title_q5rwff$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'description', {
    get: function () {
      return this.description_9huigp$_0;
    }
  });
  Object.defineProperty(RawSocketsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_8dm8tz$_0;
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
                var text = 'catch (e: Throwable)';
                var tmp$, tmp$_0;
                var tmp$_1;
                if ((tmp$_0 = Kotlin.isType(tmp$ = lastOrNull($receiver.actions), Indenter$Action$Line) ? tmp$ : null) != null)
                  tmp$_1 = tmp$_0;
                else {
                  throw IllegalStateException_init('Expected a line'.toString());
                }
                var lastAction = tmp$_1;
                if (!equals(lastAction.str, '}')) {
                  throw IllegalStateException_init("Expected a '}'".toString());
                }
                $receiver.actions.removeAt_za3lpa$($receiver.actions.size - 1 | 0);
                var str = '} ' + text;
                $receiver.line_61zpoe$(str.length === 0 ? '{' : str + ' {');
                $receiver._indent();
                try {
                  $receiver.line_61zpoe$('socket.close()');
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
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$info) {
    return function ($receiver) {
      var sequence = closure$info.is100OrGreater ? 'sequence' : 'buildSequence';
      var $receiver_0 = 'private fun Scanner.lines() = ' + sequence;
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
    };
  }
  function RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda_0(this$RawSocketsFeature, this$renderFeature, closure$info) {
    return function ($receiver) {
      var $receiver_0 = 'object Client';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var this$RawSocketsFeature_0 = this$RawSocketsFeature;
        var this$renderFeature_0 = this$renderFeature;
        var closure$info_0 = closure$info;
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
        SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$info_0));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function RawSocketsFeature$renderFeature$lambda$lambda(this$RawSocketsFeature, this$renderFeature, closure$info) {
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
        var closure$info_0 = closure$info;
        $receiver.line_61zpoe$('val selectorManager = ActorSelectorManager(Dispatchers.IO)');
        $receiver.line_61zpoe$('val DefaultPort = 9002');
        SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda(this$RawSocketsFeature_0, this$renderFeature_0));
        SEPARATOR($receiver, RawSocketsFeature$renderFeature$lambda$lambda$lambda$lambda_0(this$RawSocketsFeature_0, this$renderFeature_0, closure$info_0));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
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
            return SEPARATOR(this.local$$receiver, RawSocketsFeature$renderFeature$lambda$lambda(this.local$this$RawSocketsFeature, this.local$this$renderFeature, this.local$closure$info)), Unit;
          case 1:
            throw this.exception_0;
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
  function RawSocketsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, this$RawSocketsFeature_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RawSocketsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, this$RawSocketsFeature_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RawSocketsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'java.io.*');
    addImport($receiver, 'java.util.*');
    addImport($receiver, 'io.ktor.network.selector.*');
    addImport($receiver, 'io.ktor.network.sockets.*');
    addImport($receiver, 'io.ktor.network.util.*');
    addImport($receiver, 'kotlin.coroutines.experimental.*');
    addImport($receiver, 'kotlinx.coroutines.experimental.*');
    addImport($receiver, 'kotlinx.coroutines.experimental.io.*');
    $receiver.fileText_6jjb1r$('src/EchoApp.kt', void 0, void 0, RawSocketsFeature$renderFeature$lambda(info, $receiver, this));
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
    this.group_ipjgd$_0 = 'Sockets';
    this.repos_5j2kor$_0 = Repos_getInstance().ktor;
    this.id_o9jihv$_0 = 'ktor-network-tls';
    this.title_6jfh8k$_0 = 'Raw Secure SSL/TLS Sockets';
    this.description_5foqxs$_0 = 'Adds Raw Socket support for listening and connecting to tcp and udp sockets with secure sockets';
    this.documentation_7f7cim$_0 = 'https://ktor.io/servers/raw-sockets.html#secure';
  }
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'group', {
    get: function () {
      return this.group_ipjgd$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'repos', {
    get: function () {
      return this.repos_5j2kor$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'id', {
    get: function () {
      return this.id_o9jihv$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'title', {
    get: function () {
      return this.title_6jfh8k$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'description', {
    get: function () {
      return this.description_5foqxs$_0;
    }
  });
  Object.defineProperty(RawSocketsTlsFeature.prototype, 'documentation', {
    get: function () {
      return this.documentation_7f7cim$_0;
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
          $receiver.line_61zpoe$('val selectorManager = ActorSelectorManager(Dispatchers.IO)');
          $receiver.line_61zpoe$('val socket = aSocket(selectorManager).tcp().connect("www.google.com", port = 443).tls(coroutineContext = coroutineContext)');
          $receiver.line_61zpoe$('val write = socket.openWriteChannel()');
          $receiver.line_61zpoe$('val EOL = "\\r\\n"');
          $receiver.line_61zpoe$('write.writeStringUtf8("GET / HTTP/1.1${EOL}Host: www.google.com${EOL}Connection: close${EOL}${EOL}")');
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
  function RawSocketsTlsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$RawSocketsTlsFeature$renderFeature$lambda(closure$info_0, this$renderFeature_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RawSocketsTlsFeature.prototype.renderFeature_gtq0m3$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.network.tls.*');
    addImport($receiver, 'kotlinx.coroutines.*');
    if (info.ktorVersion.compareTo_11rb$(Versions_getInstance().V130b1) >= 0) {
      addImport($receiver, 'io.ktor.utils.io.*');
    }
     else {
      addImport($receiver, 'kotlinx.io.core.*');
    }
    $receiver.fileText_6jjb1r$('src/TlsRawSocket.kt', void 0, void 0, RawSocketsTlsFeature$renderFeature$lambda(info, $receiver));
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
    var destination = LinkedHashMap_init(capacity);
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
  function ApplicationConf$render$lambda(this$ApplicationConf_0, this$render_0, closure$info_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ApplicationConf$render$lambda(this$ApplicationConf_0, this$render_0, closure$info_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ApplicationConf.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileText_6jjb1r$('resources/application.conf', void 0, void 0, ApplicationConf$render$lambda(this, $receiver, info));
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
    this.ApplicationKtFile = 'src/Application.kt';
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
      $receiver.line_61zpoe$('@Suppress("unused") // Referenced in application.conf');
      $receiver.line_61zpoe$('@kotlin.jvm.JvmOverloads');
      var $receiver_0 = 'fun Application.module(testing: Boolean = false)';
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
      unaryPlus_0($receiver);
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
  function ApplicationKt$render$lambda(closure$info_0, this$render_0, this$ApplicationKt_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ApplicationKt$render$lambda(closure$info_0, this$render_0, this$ApplicationKt_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ApplicationKt.prototype.render_miqy8c$ = function ($receiver, info) {
    addImport($receiver, 'io.ktor.application.*');
    addImport($receiver, 'io.ktor.response.*');
    addImport($receiver, 'io.ktor.request.*');
    $receiver.fileText_6jjb1r$(this.ApplicationKtFile, void 0, void 0, ApplicationKt$render$lambda(info, $receiver, this));
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
          $receiver.extra = LinkedHashMap_init_0();
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
      tmp$ = plus_2(get_applicationKtImports(this$render), get_applicationTestKtImports(this$render)).iterator();
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
  function ApplicationTestKt$render$lambda(closure$info_0, this$render_0, this$ApplicationTestKt_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ApplicationTestKt$render$lambda(closure$info_0, this$render_0, this$ApplicationTestKt_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ApplicationTestKt.prototype.render_miqy8c$ = function ($receiver, info) {
    addTestImport($receiver, 'kotlin.test.*');
    addTestImport($receiver, 'io.ktor.server.testing.*');
    $receiver.fileText_6jjb1r$('test/ApplicationTest.kt', void 0, void 0, ApplicationTestKt$render$lambda(info, $receiver, this));
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
          $receiver.extra = LinkedHashMap_init_0();
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
        (new BuildFilesGradle(false)).render_miqy8c$($receiver, info);
        break;
      case 'GradleKotlinDsl':
        (new BuildFilesGradle(true)).render_miqy8c$($receiver, info);
        break;
      case 'Maven':
        BuildFilesMaven_getInstance().render_miqy8c$($receiver, info);
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    addMavenRepository_0($receiver, Repos_getInstance().local);
    addMavenRepository_0($receiver, Repos_getInstance().jcenter);
    if (info.ktorVersion.compareTo_11rb$(Versions_getInstance().V100) < 0) {
      addMavenRepository_0($receiver, Repos_getInstance().ktor);
    }
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
  function getAllReposToInclude($receiver, info) {
    return plus_2(get_reposToInclude($receiver), toSet(info.ktorVersion.extraRepos));
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
          $receiver.extra = LinkedHashMap_init_0();
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
          $receiver.extra = LinkedHashMap_init_0();
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
          $receiver.extra = LinkedHashMap_init_0();
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
  function BuildFilesGradle(kotlin) {
    Block.call(this, []);
    this.kotlin = kotlin;
  }
  function Coroutine$BuildFilesGradle$render$lambda(closure$properties_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$properties = closure$properties_0;
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
            var tmp$;
            tmp$ = this.local$closure$properties.entries.iterator();
            while (tmp$.hasNext()) {
              var tmp$_0 = tmp$.next();
              var key = tmp$_0.key;
              var value = tmp$_0.value;
              this.local$$receiver.line_61zpoe$(key + '=' + value);
            }

            return Unit;
          case 1:
            throw this.exception_0;
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
  function BuildFilesGradle$render$lambda(closure$properties_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda(closure$properties_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function BuildFilesGradle$render$lambda$lambda$lambda(this$render) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      println('compileDependencies: ' + get_compileDependencies(this$render));
      tmp$ = get_compileDependencies(this$render).iterator();
      while (tmp$.hasNext()) {
        var dep = tmp$.next();
        $receiver.line_61zpoe$('compile(' + '"' + dep.dependency + '"' + ')');
      }
      tmp$_0 = minus(get_testDependencies(this$render), get_compileDependencies(this$render)).iterator();
      while (tmp$_0.hasNext()) {
        var dep_0 = tmp$_0.next();
        $receiver.line_61zpoe$('testCompile(' + '"' + dep_0.dependency + '"' + ')');
      }
      return Unit;
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_0(closure$properties_0, closure$info_0, this$render_0, this$BuildFilesGradle_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$properties = closure$properties_0;
    this.local$closure$info = closure$info_0;
    this.local$this$render = this$render_0;
    this.local$this$BuildFilesGradle = this$BuildFilesGradle_0;
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
            var tmp$;
            this.local$$receiver.line_61zpoe$('import org.jetbrains.kotlin.gradle.dsl.Coroutines');
            this.local$$receiver.line_61zpoe$('import org.jetbrains.kotlin.gradle.tasks.KotlinCompile');
            this.local$$receiver.line_61zpoe$('');
            tmp$ = this.local$closure$properties.keys.iterator();
            while (tmp$.hasNext()) {
              var key = tmp$.next();
              if (contains(key, 46))
                continue;
              this.local$$receiver.line_61zpoe$('val ' + key + ': String by project');
            }

            this.local$$receiver.line_61zpoe$('');
            var rafter = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$('plugins'.length === 0 ? '{' + rafter : 'plugins' + ' {' + rafter);
            this.local$$receiver._indent();
            try {
              var closure$info = this.local$closure$info;
              this.local$$receiver.line_61zpoe$('application');
              this.local$$receiver.line_61zpoe$('kotlin(' + '"' + 'jvm' + '"' + ') version ' + '"' + closure$info.kotlinVersion + '"');
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            unaryPlus_0(this.local$$receiver);
            this.local$$receiver.line_61zpoe$('');
            this.local$$receiver.line_61zpoe$('group = ' + '"' + this.local$closure$info.artifactGroup + '"');
            this.local$$receiver.line_61zpoe$('version = ' + '"' + this.local$closure$info.artifactVersion + '"');
            this.local$$receiver.line_61zpoe$('');
            var $receiver = 'application';
            var rafter_0 = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver.length === 0 ? '{' + rafter_0 : $receiver + ' {' + rafter_0);
            this.local$$receiver._indent();
            try {
              this.local$$receiver.line_61zpoe$('mainClassName = ' + '"' + this.local$closure$info.developmentEngineFQ + '"');
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            unaryPlus_0(this.local$$receiver);
            this.local$$receiver.line_61zpoe$('');
            var $receiver_0 = 'repositories';
            var rafter_1 = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter_1 : $receiver_0 + ' {' + rafter_1);
            this.local$$receiver._indent();
            try {
              var closure$info_0 = this.local$closure$info;
              var this$render = this.local$this$render;
              var this$BuildFilesGradle = this.local$this$BuildFilesGradle;
              var tmp$_0;
              tmp$_0 = getAllReposToInclude(this$render, closure$info_0).iterator();
              while (tmp$_0.hasNext()) {
                var repo = tmp$_0.next();
                this.local$$receiver.line_61zpoe$(this$BuildFilesGradle.genMavenRepoKotlin_0(repo));
              }
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            unaryPlus_0(this.local$$receiver);
            this.local$$receiver.line_61zpoe$('');
            var $receiver_1 = 'dependencies';
            var rafter_2 = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_2 : $receiver_1 + ' {' + rafter_2);
            this.local$$receiver._indent();
            try {
              this.local$$receiver.linedeferred_yot30u$(BuildFilesGradle$render$lambda$lambda$lambda(this.local$this$render));
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            unaryPlus_0(this.local$$receiver);
            this.local$$receiver.line_61zpoe$('');
            this.local$$receiver.line_61zpoe$('kotlin.sourceSets["main"].kotlin.srcDirs("src")');
            this.local$$receiver.line_61zpoe$('kotlin.sourceSets["test"].kotlin.srcDirs("test")');
            this.local$$receiver.line_61zpoe$('');
            this.local$$receiver.line_61zpoe$('sourceSets["main"].resources.srcDirs("resources")');
            return this.local$$receiver.line_61zpoe$('sourceSets["test"].resources.srcDirs("testresources")');
          case 1:
            throw this.exception_0;
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
  function BuildFilesGradle$render$lambda_0(closure$properties_0, closure$info_0, this$render_0, this$BuildFilesGradle_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_0(closure$properties_0, closure$info_0, this$render_0, this$BuildFilesGradle_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_1(closure$info_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$$receiver = $receiver_0;
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
            return this.local$$receiver.line_61zpoe$('rootProject.name = ' + '"' + this.local$closure$info.artifactName + '"');
          case 1:
            throw this.exception_0;
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
  function BuildFilesGradle$render$lambda_1(closure$info_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_1(closure$info_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function BuildFilesGradle$render$lambda$lambda$lambda_0(this$render) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      println('compileDependencies: ' + get_compileDependencies(this$render));
      tmp$ = get_compileDependencies(this$render).iterator();
      while (tmp$.hasNext()) {
        var dep = tmp$.next();
        $receiver.line_61zpoe$('compile ' + '"' + dep.dependency + '"');
      }
      tmp$_0 = minus(get_testDependencies(this$render), get_compileDependencies(this$render)).iterator();
      while (tmp$_0.hasNext()) {
        var dep_0 = tmp$_0.next();
        $receiver.line_61zpoe$('testCompile ' + '"' + dep_0.dependency + '"');
      }
      return Unit;
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_2(closure$info_0, this$BuildFilesGradle_0, this$render_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$this$BuildFilesGradle = this$BuildFilesGradle_0;
    this.local$this$render = this$render_0;
    this.local$$receiver = $receiver_0;
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
            var $receiver = 'buildscript';
            var rafter = ''.length === 0 ? '' : ' ' + '';
            this.local$$receiver.line_61zpoe$($receiver.length === 0 ? '{' + rafter : $receiver + ' {' + rafter);
            this.local$$receiver._indent();
            try {
              var closure$info = this.local$closure$info;
              var this$BuildFilesGradle = this.local$this$BuildFilesGradle;
              var $receiver_0 = 'repositories';
              var rafter_0 = ''.length === 0 ? '' : ' ' + '';
              this.local$$receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter_0 : $receiver_0 + ' {' + rafter_0);
              this.local$$receiver._indent();
              try {
                var tmp$;
                tmp$ = plus_2(setOf('jcenter'), toSet(closure$info.ktorVersion.extraRepos)).iterator();
                while (tmp$.hasNext()) {
                  var repo = tmp$.next();
                  this.local$$receiver.line_61zpoe$(this$BuildFilesGradle.genMavenRepoGroovy_0(repo));
                }
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
            this.local$$receiver.line_61zpoe$("group '" + this.local$closure$info.artifactGroup + "'");
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
              var closure$info_0 = this.local$closure$info;
              var this$render = this.local$this$render;
              var this$BuildFilesGradle_0 = this.local$this$BuildFilesGradle;
              var tmp$_0;
              tmp$_0 = getAllReposToInclude(this$render, closure$info_0).iterator();
              while (tmp$_0.hasNext()) {
                var repo_0 = tmp$_0.next();
                this.local$$receiver.line_61zpoe$(this$BuildFilesGradle_0.genMavenRepoGroovy_0(repo_0));
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
              this.local$$receiver.linedeferred_yot30u$(BuildFilesGradle$render$lambda$lambda$lambda_0(this.local$this$render));
            }
            finally {
              this.local$$receiver._unindent();
            }

            this.local$$receiver.line_61zpoe$('}' + '');
            return this.local$$receiver;
          case 1:
            throw this.exception_0;
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
  function BuildFilesGradle$render$lambda_2(closure$info_0, this$BuildFilesGradle_0, this$render_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_2(closure$info_0, this$BuildFilesGradle_0, this$render_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_3(closure$info_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$$receiver = $receiver_0;
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
            return this.local$$receiver.line_61zpoe$('rootProject.name = ' + '"' + this.local$closure$info.artifactName + '"');
          case 1:
            throw this.exception_0;
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
  function BuildFilesGradle$render$lambda_3(closure$info_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_3(closure$info_0, $receiver_0, this, continuation_0);
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
            this.result_0 = this.local$closure$info.fetch('gradle/gradlew', this);
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
  function BuildFilesGradle$render$lambda_4(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_4(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_5(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_5.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_5.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_5;
  Coroutine$BuildFilesGradle$render$lambda_5.prototype.doResume = function () {
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
  function BuildFilesGradle$render$lambda_5(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_5(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_6(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_6.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_6.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_6.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_6;
  Coroutine$BuildFilesGradle$render$lambda_6.prototype.doResume = function () {
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
  function BuildFilesGradle$render$lambda_6(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_6(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BuildFilesGradle$render$lambda_7(this$BuildFilesGradle_0, closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BuildFilesGradle = this$BuildFilesGradle_0;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$BuildFilesGradle$render$lambda_7.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BuildFilesGradle$render$lambda_7.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BuildFilesGradle$render$lambda_7.prototype.constructor = Coroutine$BuildFilesGradle$render$lambda_7;
  Coroutine$BuildFilesGradle$render$lambda_7.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$this$BuildFilesGradle.kotlin) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$info.fetch('gradle/gradle/wrapper/gradle-wrapper.properties.kotlin-dsl', this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$closure$info.fetch('gradle/gradle/wrapper/gradle-wrapper.properties', this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return this.result_0;
          case 4:
            return;
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
  function BuildFilesGradle$render$lambda_7(this$BuildFilesGradle_0, closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesGradle$render$lambda_7(this$BuildFilesGradle_0, closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BuildFilesGradle.prototype.render_miqy8c$ = function ($receiver, info) {
    var properties = Properties_getInstance().getProperties_jbwadm$(info);
    $receiver.fileText_6jjb1r$('gradle.properties', void 0, void 0, BuildFilesGradle$render$lambda(properties));
    if (this.kotlin) {
      $receiver.fileText_6jjb1r$('build.gradle.kts', void 0, void 0, BuildFilesGradle$render$lambda_0(properties, info, $receiver, this));
      $receiver.fileText_6jjb1r$('settings.gradle.kts', void 0, void 0, BuildFilesGradle$render$lambda_1(info));
    }
     else {
      $receiver.fileText_6jjb1r$('build.gradle', void 0, void 0, BuildFilesGradle$render$lambda_2(info, this, $receiver));
      $receiver.fileText_6jjb1r$('settings.gradle', void 0, void 0, BuildFilesGradle$render$lambda_3(info));
    }
    if (info.includeWrapper) {
      $receiver.fileBinary_z1oxai$('gradlew', void 0, FileMode_init('755'), BuildFilesGradle$render$lambda_4(info));
      $receiver.fileBinary_z1oxai$('gradlew.bat', void 0, void 0, BuildFilesGradle$render$lambda_5(info));
      $receiver.fileBinary_z1oxai$('gradle/wrapper/gradle-wrapper.jar', void 0, void 0, BuildFilesGradle$render$lambda_6(info));
      $receiver.fileBinary_z1oxai$('gradle/wrapper/gradle-wrapper.properties', void 0, void 0, BuildFilesGradle$render$lambda_7(this, info));
    }
  };
  BuildFilesGradle.prototype.genMavenRepoKotlin_0 = function (repo) {
    switch (repo) {
      case 'local':
        return 'mavenLocal()';
      case 'jcenter':
        return 'jcenter()';
      default:return 'maven { url = uri(' + '"' + repo + '"' + ') }';
    }
  };
  BuildFilesGradle.prototype.genMavenRepoGroovy_0 = function (repo) {
    switch (repo) {
      case 'local':
        return 'mavenLocal()';
      case 'jcenter':
        return 'jcenter()';
      default:return "maven { url '" + repo + "' }";
    }
  };
  BuildFilesGradle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildFilesGradle',
    interfaces: [Block]
  };
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
  function BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda(closure$info, this$render) {
    return function ($receiver) {
      var tmp$;
      tmp$ = getAllReposToInclude(this$render, closure$info);
      var index = 0;
      repos: for (var tmp$_0 = tmp$.iterator(); tmp$_0.hasNext(); ++index) {
        var repo = tmp$_0.next();
        var tmp$_1;
        switch (repo) {
          case 'local':
            continue repos;
          case 'jcenter':
            tmp$_1 = 'https://jcenter.bintray.com';
            break;
          default:tmp$_1 = repo;
            break;
        }
        var repoUrl = tmp$_1;
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
      tmp$ = listOf_0([to(get_compileDependencies(this$render), false), to(get_testDependencies(this$render), true)]).iterator();
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
          var tmp$_7;
          tmp$_7 = Properties_getInstance().getProperties_jbwadm$(closure$info_0).entries.iterator();
          while (tmp$_7.hasNext()) {
            var tmp$_8 = tmp$_7.next();
            var key = tmp$_8.key;
            var value = tmp$_8.value;
            this$_0.line_61zpoe$('<' + key + '>' + value + '<\/' + key + '>');
          }
          this$_0.line_61zpoe$('<project.build.sourceEncoding>UTF-8<\/project.build.sourceEncoding>');
          this$_0.line_61zpoe$('<kotlin.compiler.incremental>true<\/kotlin.compiler.incremental>');
          this$_0.line_61zpoe$('<main.class>' + closure$info_0.developmentEngineFQ + '<\/main.class>');
        }
        finally {
          $this_0._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_0 + '>');
        var $receiver_2 = '<repositories>';
        var tmp$_9, tmp$_10, tmp$_11;
        var tmp$_12;
        if ((tmp$_11 = (tmp$_10 = (tmp$_9 = Regex_init('<(\\w+)').find_905azu$($receiver_2)) != null ? tmp$_9.groupValues : null) != null ? getOrNull(tmp$_10, 1) : null) != null)
          tmp$_12 = tmp$_11;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_1 = tmp$_12;
        $receiver.indenter.line_61zpoe$($receiver_2);
        var $this_1 = $receiver.indenter;
        $this_1._indent();
        try {
          this$_0.linedeferred_yot30u$(BuildFilesMaven$render$lambda$lambda$lambda$lambda$lambda(closure$info_0, this$render_0));
        }
        finally {
          $this_1._unindent();
        }
        $receiver.indenter.line_61zpoe$('<\/' + tagName_1 + '>');
        var $receiver_3 = '<dependencies>';
        var tmp$_13, tmp$_14, tmp$_15;
        var tmp$_16;
        if ((tmp$_15 = (tmp$_14 = (tmp$_13 = Regex_init('<(\\w+)').find_905azu$($receiver_3)) != null ? tmp$_13.groupValues : null) != null ? getOrNull(tmp$_14, 1) : null) != null)
          tmp$_16 = tmp$_15;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_2 = tmp$_16;
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
        var tmp$_17, tmp$_18, tmp$_19;
        var tmp$_20;
        if ((tmp$_19 = (tmp$_18 = (tmp$_17 = Regex_init('<(\\w+)').find_905azu$('<build>')) != null ? tmp$_17.groupValues : null) != null ? getOrNull(tmp$_18, 1) : null) != null)
          tmp$_20 = tmp$_19;
        else {
          throw IllegalStateException_init('Invalid XML tag'.toString());
        }
        var tagName_3 = tmp$_20;
        $receiver.indenter.line_61zpoe$('<build>');
        var $this_3 = $receiver.indenter;
        $this_3._indent();
        try {
          this$_0.line_61zpoe$('<sourceDirectory>${project.basedir}/src<\/sourceDirectory>');
          this$_0.line_61zpoe$('<testSourceDirectory>${project.basedir}/test<\/testSourceDirectory>');
          var $receiver_4 = '<resources>';
          var tmp$_21, tmp$_22, tmp$_23;
          var tmp$_24;
          if ((tmp$_23 = (tmp$_22 = (tmp$_21 = Regex_init('<(\\w+)').find_905azu$($receiver_4)) != null ? tmp$_21.groupValues : null) != null ? getOrNull(tmp$_22, 1) : null) != null)
            tmp$_24 = tmp$_23;
          else {
            throw IllegalStateException_init('Invalid XML tag'.toString());
          }
          var tagName_4 = tmp$_24;
          $receiver.indenter.line_61zpoe$($receiver_4);
          var $this_4 = $receiver.indenter;
          $this_4._indent();
          try {
            var $receiver_5 = '<resource>';
            var tmp$_25, tmp$_26, tmp$_27;
            var tmp$_28;
            if ((tmp$_27 = (tmp$_26 = (tmp$_25 = Regex_init('<(\\w+)').find_905azu$($receiver_5)) != null ? tmp$_25.groupValues : null) != null ? getOrNull(tmp$_26, 1) : null) != null)
              tmp$_28 = tmp$_27;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_5 = tmp$_28;
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
          var tmp$_29, tmp$_30, tmp$_31;
          var tmp$_32;
          if ((tmp$_31 = (tmp$_30 = (tmp$_29 = Regex_init('<(\\w+)').find_905azu$($receiver_6)) != null ? tmp$_29.groupValues : null) != null ? getOrNull(tmp$_30, 1) : null) != null)
            tmp$_32 = tmp$_31;
          else {
            throw IllegalStateException_init('Invalid XML tag'.toString());
          }
          var tagName_6 = tmp$_32;
          $receiver.indenter.line_61zpoe$($receiver_6);
          var $this_6 = $receiver.indenter;
          $this_6._indent();
          try {
            var $receiver_7 = '<plugin>';
            var tmp$_33, tmp$_34, tmp$_35;
            var tmp$_36;
            if ((tmp$_35 = (tmp$_34 = (tmp$_33 = Regex_init('<(\\w+)').find_905azu$($receiver_7)) != null ? tmp$_33.groupValues : null) != null ? getOrNull(tmp$_34, 1) : null) != null)
              tmp$_36 = tmp$_35;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_7 = tmp$_36;
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
            var tmp$_37, tmp$_38, tmp$_39;
            var tmp$_40;
            if ((tmp$_39 = (tmp$_38 = (tmp$_37 = Regex_init('<(\\w+)').find_905azu$($receiver_8)) != null ? tmp$_37.groupValues : null) != null ? getOrNull(tmp$_38, 1) : null) != null)
              tmp$_40 = tmp$_39;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_8 = tmp$_40;
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
            var tmp$_41, tmp$_42, tmp$_43;
            var tmp$_44;
            if ((tmp$_43 = (tmp$_42 = (tmp$_41 = Regex_init('<(\\w+)').find_905azu$($receiver_9)) != null ? tmp$_41.groupValues : null) != null ? getOrNull(tmp$_42, 1) : null) != null)
              tmp$_44 = tmp$_43;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_9 = tmp$_44;
            $receiver.indenter.line_61zpoe$($receiver_9);
            var $this_9 = $receiver.indenter;
            $this_9._indent();
            try {
              this$_0.line_61zpoe$('<artifactId>kotlin-maven-plugin<\/artifactId>');
              this$_0.line_61zpoe$('<groupId>org.jetbrains.kotlin<\/groupId>');
              this$_0.line_61zpoe$('<version>${kotlin_version}<\/version>');
              var $receiver_10 = '<executions>';
              var tmp$_45, tmp$_46, tmp$_47;
              var tmp$_48;
              if ((tmp$_47 = (tmp$_46 = (tmp$_45 = Regex_init('<(\\w+)').find_905azu$($receiver_10)) != null ? tmp$_45.groupValues : null) != null ? getOrNull(tmp$_46, 1) : null) != null)
                tmp$_48 = tmp$_47;
              else {
                throw IllegalStateException_init('Invalid XML tag'.toString());
              }
              var tagName_10 = tmp$_48;
              $receiver.indenter.line_61zpoe$($receiver_10);
              var $this_10 = $receiver.indenter;
              $this_10._indent();
              try {
                var tmp$_49;
                tmp$_49 = listOf_0([false, true]).iterator();
                while (tmp$_49.hasNext()) {
                  var test = tmp$_49.next();
                  var name = test ? 'test-compile' : 'compile';
                  var $receiver_11 = '<execution>';
                  var tmp$_50, tmp$_51, tmp$_52;
                  var tmp$_53;
                  if ((tmp$_52 = (tmp$_51 = (tmp$_50 = Regex_init('<(\\w+)').find_905azu$($receiver_11)) != null ? tmp$_50.groupValues : null) != null ? getOrNull(tmp$_51, 1) : null) != null)
                    tmp$_53 = tmp$_52;
                  else {
                    throw IllegalStateException_init('Invalid XML tag'.toString());
                  }
                  var tagName_11 = tmp$_53;
                  $receiver.indenter.line_61zpoe$($receiver_11);
                  var $this_11 = $receiver.indenter;
                  $this_11._indent();
                  try {
                    this$_0.line_61zpoe$('<id>' + name + '<\/id>');
                    this$_0.line_61zpoe$('<goals><goal>' + name + '<\/goal><\/goals>');
                    var $receiver_12 = '<configuration>';
                    var tmp$_54, tmp$_55, tmp$_56;
                    var tmp$_57;
                    if ((tmp$_56 = (tmp$_55 = (tmp$_54 = Regex_init('<(\\w+)').find_905azu$($receiver_12)) != null ? tmp$_54.groupValues : null) != null ? getOrNull(tmp$_55, 1) : null) != null)
                      tmp$_57 = tmp$_56;
                    else {
                      throw IllegalStateException_init('Invalid XML tag'.toString());
                    }
                    var tagName_12 = tmp$_57;
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
            var tmp$_58, tmp$_59, tmp$_60;
            var tmp$_61;
            if ((tmp$_60 = (tmp$_59 = (tmp$_58 = Regex_init('<(\\w+)').find_905azu$($receiver_13)) != null ? tmp$_58.groupValues : null) != null ? getOrNull(tmp$_59, 1) : null) != null)
              tmp$_61 = tmp$_60;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_13 = tmp$_61;
            $receiver.indenter.line_61zpoe$($receiver_13);
            var $this_13 = $receiver.indenter;
            $this_13._indent();
            try {
              this$_0.line_61zpoe$('<groupId>org.apache.maven.plugins<\/groupId>');
              this$_0.line_61zpoe$('<artifactId>maven-jar-plugin<\/artifactId>');
              this$_0.line_61zpoe$('<version>2.6<\/version>');
              var $receiver_14 = '<configuration>';
              var tmp$_62, tmp$_63, tmp$_64;
              var tmp$_65;
              if ((tmp$_64 = (tmp$_63 = (tmp$_62 = Regex_init('<(\\w+)').find_905azu$($receiver_14)) != null ? tmp$_62.groupValues : null) != null ? getOrNull(tmp$_63, 1) : null) != null)
                tmp$_65 = tmp$_64;
              else {
                throw IllegalStateException_init('Invalid XML tag'.toString());
              }
              var tagName_14 = tmp$_65;
              $receiver.indenter.line_61zpoe$($receiver_14);
              var $this_14 = $receiver.indenter;
              $this_14._indent();
              try {
                var $receiver_15 = '<archive>';
                var tmp$_66, tmp$_67, tmp$_68;
                var tmp$_69;
                if ((tmp$_68 = (tmp$_67 = (tmp$_66 = Regex_init('<(\\w+)').find_905azu$($receiver_15)) != null ? tmp$_66.groupValues : null) != null ? getOrNull(tmp$_67, 1) : null) != null)
                  tmp$_69 = tmp$_68;
                else {
                  throw IllegalStateException_init('Invalid XML tag'.toString());
                }
                var tagName_15 = tmp$_69;
                $receiver.indenter.line_61zpoe$($receiver_15);
                var $this_15 = $receiver.indenter;
                $this_15._indent();
                try {
                  var $receiver_16 = '<manifest>';
                  var tmp$_70, tmp$_71, tmp$_72;
                  var tmp$_73;
                  if ((tmp$_72 = (tmp$_71 = (tmp$_70 = Regex_init('<(\\w+)').find_905azu$($receiver_16)) != null ? tmp$_70.groupValues : null) != null ? getOrNull(tmp$_71, 1) : null) != null)
                    tmp$_73 = tmp$_72;
                  else {
                    throw IllegalStateException_init('Invalid XML tag'.toString());
                  }
                  var tagName_16 = tmp$_73;
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
            var tmp$_74, tmp$_75, tmp$_76;
            var tmp$_77;
            if ((tmp$_76 = (tmp$_75 = (tmp$_74 = Regex_init('<(\\w+)').find_905azu$($receiver_17)) != null ? tmp$_74.groupValues : null) != null ? getOrNull(tmp$_75, 1) : null) != null)
              tmp$_77 = tmp$_76;
            else {
              throw IllegalStateException_init('Invalid XML tag'.toString());
            }
            var tagName_17 = tmp$_77;
            $receiver.indenter.line_61zpoe$($receiver_17);
            var $this_17 = $receiver.indenter;
            $this_17._indent();
            try {
              this$_0.line_61zpoe$('<groupId>org.apache.maven.plugins<\/groupId>');
              this$_0.line_61zpoe$('<artifactId>maven-assembly-plugin<\/artifactId>');
              this$_0.line_61zpoe$('<version>2.6<\/version>');
              var $receiver_18 = '<executions>';
              var tmp$_78, tmp$_79, tmp$_80;
              var tmp$_81;
              if ((tmp$_80 = (tmp$_79 = (tmp$_78 = Regex_init('<(\\w+)').find_905azu$($receiver_18)) != null ? tmp$_78.groupValues : null) != null ? getOrNull(tmp$_79, 1) : null) != null)
                tmp$_81 = tmp$_80;
              else {
                throw IllegalStateException_init('Invalid XML tag'.toString());
              }
              var tagName_18 = tmp$_81;
              $receiver.indenter.line_61zpoe$($receiver_18);
              var $this_18 = $receiver.indenter;
              $this_18._indent();
              try {
                var $receiver_19 = '<execution>';
                var tmp$_82, tmp$_83, tmp$_84;
                var tmp$_85;
                if ((tmp$_84 = (tmp$_83 = (tmp$_82 = Regex_init('<(\\w+)').find_905azu$($receiver_19)) != null ? tmp$_82.groupValues : null) != null ? getOrNull(tmp$_83, 1) : null) != null)
                  tmp$_85 = tmp$_84;
                else {
                  throw IllegalStateException_init('Invalid XML tag'.toString());
                }
                var tagName_19 = tmp$_85;
                $receiver.indenter.line_61zpoe$($receiver_19);
                var $this_19 = $receiver.indenter;
                $this_19._indent();
                try {
                  this$_0.line_61zpoe$('<id>make-assembly<\/id>');
                  this$_0.line_61zpoe$('<phase>package<\/phase>');
                  this$_0.line_61zpoe$('<goals> <goal>single<\/goal> <\/goals>');
                  var $receiver_20 = '<configuration>';
                  var tmp$_86, tmp$_87, tmp$_88;
                  var tmp$_89;
                  if ((tmp$_88 = (tmp$_87 = (tmp$_86 = Regex_init('<(\\w+)').find_905azu$($receiver_20)) != null ? tmp$_86.groupValues : null) != null ? getOrNull(tmp$_87, 1) : null) != null)
                    tmp$_89 = tmp$_88;
                  else {
                    throw IllegalStateException_init('Invalid XML tag'.toString());
                  }
                  var tagName_20 = tmp$_89;
                  $receiver.indenter.line_61zpoe$($receiver_20);
                  var $this_20 = $receiver.indenter;
                  $this_20._indent();
                  try {
                    var $receiver_21 = '<archive>';
                    var tmp$_90, tmp$_91, tmp$_92;
                    var tmp$_93;
                    if ((tmp$_92 = (tmp$_91 = (tmp$_90 = Regex_init('<(\\w+)').find_905azu$($receiver_21)) != null ? tmp$_90.groupValues : null) != null ? getOrNull(tmp$_91, 1) : null) != null)
                      tmp$_93 = tmp$_92;
                    else {
                      throw IllegalStateException_init('Invalid XML tag'.toString());
                    }
                    var tagName_21 = tmp$_93;
                    $receiver.indenter.line_61zpoe$($receiver_21);
                    var $this_21 = $receiver.indenter;
                    $this_21._indent();
                    try {
                      var $receiver_22 = '<manifest>';
                      var tmp$_94, tmp$_95, tmp$_96;
                      var tmp$_97;
                      if ((tmp$_96 = (tmp$_95 = (tmp$_94 = Regex_init('<(\\w+)').find_905azu$($receiver_22)) != null ? tmp$_94.groupValues : null) != null ? getOrNull(tmp$_95, 1) : null) != null)
                        tmp$_97 = tmp$_96;
                      else {
                        throw IllegalStateException_init('Invalid XML tag'.toString());
                      }
                      var tagName_22 = tmp$_97;
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
                    var tmp$_98, tmp$_99, tmp$_100;
                    var tmp$_101;
                    if ((tmp$_100 = (tmp$_99 = (tmp$_98 = Regex_init('<(\\w+)').find_905azu$($receiver_23)) != null ? tmp$_98.groupValues : null) != null ? getOrNull(tmp$_99, 1) : null) != null)
                      tmp$_101 = tmp$_100;
                    else {
                      throw IllegalStateException_init('Invalid XML tag'.toString());
                    }
                    var tagName_23 = tmp$_101;
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
  function BuildFilesMaven$render$lambda(closure$info_0, this$render_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda(closure$info_0, this$render_0, $receiver_0, this, continuation_0);
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
  function BuildFilesMaven$render$lambda_0(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda_0(closure$info_0, continuation_0);
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
  function BuildFilesMaven$render$lambda_1(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda_1(closure$info_0, continuation_0);
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
  function BuildFilesMaven$render$lambda_2(closure$info_0, closure$file_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BuildFilesMaven$render$lambda_2(closure$info_0, closure$file_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BuildFilesMaven.prototype.render_miqy8c$ = function ($receiver, info) {
    var tmp$;
    $receiver.fileText_6jjb1r$('pom.xml', void 0, void 0, BuildFilesMaven$render$lambda(info, $receiver));
    if (info.includeWrapper) {
      $receiver.fileBinary_z1oxai$('mvnw', void 0, FileMode_init('755'), BuildFilesMaven$render$lambda_0(info));
      $receiver.fileBinary_z1oxai$('mvnw.cmd', void 0, void 0, BuildFilesMaven$render$lambda_1(info));
      tmp$ = listOf_0(['maven-wrapper.jar', 'maven-wrapper.properties', 'MavenWrapperDownloader.java']).iterator();
      while (tmp$.hasNext()) {
        var file = tmp$.next();
        $receiver.fileBinary_z1oxai$('.mvn/wrapper/' + file, void 0, void 0, BuildFilesMaven$render$lambda_2(info, file));
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
  function GitIgnoreFile$render$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GitIgnoreFile$render$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  GitIgnoreFile.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileText_6jjb1r$('.gitignore', void 0, void 0, GitIgnoreFile$render$lambda);
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
  function LogBackXml$render$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$LogBackXml$render$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  LogBackXml.prototype.render_miqy8c$ = function ($receiver, info) {
    $receiver.fileText_6jjb1r$('resources/logback.xml', void 0, void 0, LogBackXml$render$lambda);
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
  function Properties() {
    Properties_instance = this;
  }
  Properties.prototype.getProperties_jbwadm$ = function (info) {
    var $receiver = HashMap_init();
    var key = 'kotlin.code.style';
    var value = 'official';
    $receiver.put_xwzc9p$(key, value);
    var key_0 = 'kotlin_version';
    var value_0 = info.kotlinVersion.toString();
    $receiver.put_xwzc9p$(key_0, value_0);
    var key_1 = 'ktor_version';
    var value_1 = info.ktorVersion.toString();
    $receiver.put_xwzc9p$(key_1, value_1);
    var key_2 = 'logback_version';
    $receiver.put_xwzc9p$(key_2, '1.2.1');
    return $receiver;
  };
  Properties.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Properties',
    interfaces: []
  };
  var Properties_instance = null;
  function Properties_getInstance() {
    if (Properties_instance === null) {
      new Properties();
    }
    return Properties_instance;
  }
  function ContentType(str) {
    ContentType$Companion_getInstance();
    this.str = str;
  }
  function ContentType$Companion() {
    ContentType$Companion_instance = this;
    this.ApplicationJson = new ContentType('application/json');
    this.ApplicationXWwwFormUrlencoded = new ContentType('application/x-www-form-urlencoded');
  }
  ContentType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ContentType$Companion_instance = null;
  function ContentType$Companion_getInstance() {
    if (ContentType$Companion_instance === null) {
      new ContentType$Companion();
    }
    return ContentType$Companion_instance;
  }
  ContentType.prototype.toString = function () {
    return this.str;
  };
  ContentType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContentType',
    interfaces: []
  };
  ContentType.prototype.component1 = function () {
    return this.str;
  };
  ContentType.prototype.copy_61zpoe$ = function (str) {
    return new ContentType(str === void 0 ? this.str : str);
  };
  ContentType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    return result;
  };
  ContentType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.str, other.str))));
  };
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
  function JsonRule$MinMaxLength() {
  }
  JsonRule$MinMaxLength.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MinMaxLength',
    interfaces: []
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
    interfaces: [JsonRule$MinMaxLength, JsonRule$MinInt]
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
    interfaces: [JsonRule$MinMaxLength, JsonRule$MaxInt]
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
  function JsonRule$RangeLength(min, max) {
    JsonRule.call(this);
    this.min = min;
    this.max = max;
  }
  JsonRule$RangeLength.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeLength',
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
  function JsonRule$Companion$parse$lambda$lambda$lambda(it) {
    return Kotlin.isType(it, JsonRule$Minimum) || Kotlin.isType(it, JsonRule$Maximum);
  }
  function JsonRule$Companion$parse$lambda$lambda$lambda_0(it) {
    return Kotlin.isType(it, JsonRule$MinLength) || Kotlin.isType(it, JsonRule$MaxLength);
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
      removeAll(rules, JsonRule$Companion$parse$lambda$lambda$lambda);
      var element_14 = new JsonRule$Range(min, max, max.exclusive);
      rules.add_11rb$(element_14);
    }
    var destination_1 = ArrayList_init();
    var tmp$_3;
    tmp$_3 = rules.iterator();
    while (tmp$_3.hasNext()) {
      var element_15 = tmp$_3.next();
      if (Kotlin.isType(element_15, JsonRule$MinLength))
        destination_1.add_11rb$(element_15);
    }
    var min_0 = firstOrNull(destination_1);
    var destination_2 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = rules.iterator();
    while (tmp$_4.hasNext()) {
      var element_16 = tmp$_4.next();
      if (Kotlin.isType(element_16, JsonRule$MaxLength))
        destination_2.add_11rb$(element_16);
    }
    var max_0 = firstOrNull(destination_2);
    if (min_0 != null && max_0 != null) {
      removeAll(rules, JsonRule$Companion$parse$lambda$lambda$lambda_0);
      var element_17 = new JsonRule$RangeLength(min_0, max_0);
      rules.add_11rb$(element_17);
    }
    return rules.size === 1 ? first(rules) : new JsonRule$AllOf(rules);
  };
  JsonRule$Companion.prototype.get_ruleList_qmoht$ = function ($receiver) {
    return Kotlin.isType($receiver, JsonRule$RuleList) ? $receiver.rules : listOf($receiver);
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
  function get_propKt($receiver) {
    return Kotlin.isType($receiver, JsonRule$MinMaxLength) ? 'length' : 'size';
  }
  function toKotlin$lambda(closure$param, closure$clazz) {
    return function (it) {
      return toKotlin(it, closure$param, closure$clazz);
    };
  }
  function toKotlin$lambda_0(closure$param, closure$clazz) {
    return function (it) {
      return toKotlin(it, closure$param, closure$clazz);
    };
  }
  function toKotlin$lambda_1(closure$param, closure$clazz) {
    return function (it) {
      return toKotlin(it, closure$param, closure$clazz);
    };
  }
  function toKotlin($receiver, param, clazz) {
    var tmp$;
    if (Kotlin.isType($receiver, JsonRule$Not))
      tmp$ = '!(' + toKotlin($receiver.rule, param, clazz) + ')';
    else if (Kotlin.isType($receiver, JsonRule$AllOf))
      tmp$ = joinToString($receiver.rules, ' && ', void 0, void 0, void 0, void 0, toKotlin$lambda(param, clazz));
    else if (Kotlin.isType($receiver, JsonRule$AnyOf))
      tmp$ = joinToString($receiver.rules, ' || ', void 0, void 0, void 0, void 0, toKotlin$lambda_0(param, clazz));
    else if (Kotlin.isType($receiver, JsonRule$OneOf))
      tmp$ = joinToString($receiver.rules, ' xor ', void 0, void 0, void 0, void 0, toKotlin$lambda_1(param, clazz));
    else if (Kotlin.isType($receiver, JsonRule$MultipleOf))
      tmp$ = '(' + param + ' % ' + $receiver.value + ')';
    else if (Kotlin.isType($receiver, JsonRule$Minimum))
      tmp$ = $receiver.exclusive ? param + ' > ' + $receiver.toString_xo1ogr$(clazz) : param + ' >= ' + $receiver.toString_xo1ogr$(clazz);
    else if (Kotlin.isType($receiver, JsonRule$Maximum))
      tmp$ = $receiver.exclusive ? param + ' < ' + $receiver.toString_xo1ogr$(clazz) : param + ' <= ' + $receiver.toString_xo1ogr$(clazz);
    else if (Kotlin.isType($receiver, JsonRule$Range))
      tmp$ = $receiver.exclusive ? param + ' in ' + $receiver.min.toString_xo1ogr$(clazz) + ' until ' + $receiver.max.toString_xo1ogr$(clazz) : param + ' in ' + $receiver.min.toString_xo1ogr$(clazz) + ' .. ' + $receiver.max.toString_xo1ogr$(clazz);
    else if (Kotlin.isType($receiver, JsonRule$RangeLength))
      tmp$ = param + '.length in ' + $receiver.min.value + '..' + $receiver.max.value;
    else if (Kotlin.isType($receiver, JsonRule$MinInt))
      tmp$ = param + '.' + get_propKt($receiver) + ' >= ' + $receiver.value;
    else if (Kotlin.isType($receiver, JsonRule$MaxInt))
      tmp$ = param + '.' + get_propKt($receiver) + ' <= ' + $receiver.value;
    else if (Kotlin.isType($receiver, JsonRule$Pattern))
      tmp$ = 'Regex(' + quote($receiver.pattern.pattern) + ').matches(' + param + ')';
    else if (Kotlin.isType($receiver, JsonRule$UniqueItems))
      tmp$ = param + '.distinct().size == ' + param + '.size';
    else if (Kotlin.isType($receiver, JsonRule$Enumerable))
      tmp$ = param + ' in ' + get_kquoteLit($receiver.items);
    else {
      throw IllegalStateException_init(('Unsupported ' + $receiver).toString());
    }
    return tmp$;
  }
  function SwaggerGenerator(model, generationKind) {
    Block.call(this, copyToArray(buildDepsFromModel(model)).slice());
    this.model = model;
    this.generationKind = generationKind;
  }
  function SwaggerGenerator$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SwaggerGenerator$Kind_initFields() {
    SwaggerGenerator$Kind_initFields = function () {
    };
    SwaggerGenerator$Kind$INTERFACE_instance = new SwaggerGenerator$Kind('INTERFACE', 0);
    SwaggerGenerator$Kind$RAW_instance = new SwaggerGenerator$Kind('RAW', 1);
  }
  var SwaggerGenerator$Kind$INTERFACE_instance;
  function SwaggerGenerator$Kind$INTERFACE_getInstance() {
    SwaggerGenerator$Kind_initFields();
    return SwaggerGenerator$Kind$INTERFACE_instance;
  }
  var SwaggerGenerator$Kind$RAW_instance;
  function SwaggerGenerator$Kind$RAW_getInstance() {
    SwaggerGenerator$Kind_initFields();
    return SwaggerGenerator$Kind$RAW_instance;
  }
  SwaggerGenerator$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function SwaggerGenerator$Kind$values() {
    return [SwaggerGenerator$Kind$INTERFACE_getInstance(), SwaggerGenerator$Kind$RAW_getInstance()];
  }
  SwaggerGenerator$Kind.values = SwaggerGenerator$Kind$values;
  function SwaggerGenerator$Kind$valueOf(name) {
    switch (name) {
      case 'INTERFACE':
        return SwaggerGenerator$Kind$INTERFACE_getInstance();
      case 'RAW':
        return SwaggerGenerator$Kind$RAW_getInstance();
      default:throwISE('No enum constant io.ktor.start.swagger.SwaggerGenerator.Kind.' + name);
    }
  }
  SwaggerGenerator$Kind.valueOf_61zpoe$ = SwaggerGenerator$Kind$valueOf;
  function SwaggerGenerator$render$lambda($receiver) {
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
  SwaggerGenerator.prototype.render_miqy8c$ = function ($receiver, info) {
    addImport($receiver, 'kotlin.reflect.*');
    addImport($receiver, 'java.util.*');
    addCustomStatusPage($receiver, SwaggerGenerator$render$lambda);
    var $receiver_0 = ArrayList_init();
    if (!this.model.securityDefinitions.isEmpty()) {
      $receiver_0.addAll_brywnq$(SwaggerGeneratorCommon_getInstance().generateJwt_no171g$($receiver, this.model));
    }
    var arguments_0 = new SwaggerArguments($receiver_0);
    switch (this.generationKind.name) {
      case 'RAW':
        var $receiver_1 = SwaggerGeneratorRaw_getInstance();
        $receiver_1.registerRoutes_pro3mw$($receiver, info, this.model, arguments_0);
        $receiver_1.fileSwaggerDtos_s1stdk$($receiver, 'src/' + this.model.info.className + '.kt', info, this.model);
        $receiver_1.fileSwaggerBackendHandler_v94t6u$($receiver, 'src/' + this.model.info.classNameServer + '.kt', info, this.model, arguments_0);
        $receiver_1.fileSwaggerFrontendHandler_s1stdk$($receiver, 'src/' + this.model.info.classNameClient + '.kt', info, this.model);
        break;
      case 'INTERFACE':
        var $receiver_2 = SwaggerGeneratorInterface_getInstance();
        $receiver_2.registerRoutes_pro3mw$($receiver, info, this.model, arguments_0);
        $receiver_2.fileSwaggerCommonInterface_s1stdk$($receiver, 'src/' + this.model.info.className + '.kt', info, this.model);
        $receiver_2.fileSwaggerBackendHandler_v94t6u$($receiver, 'src/' + this.model.info.classNameServer + '.kt', info, this.model, arguments_0);
        $receiver_2.fileSwaggerFrontendHandler_s1stdk$($receiver, 'src/' + this.model.info.classNameClient + '.kt', info, this.model);
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    var $receiver_3 = SwaggerGeneratorCommon_getInstance();
    $receiver_3.fileSwaggerBackendTests_s1stdk$($receiver, 'test/' + this.model.info.classNameServerTest + '.kt', info, this.model);
    $receiver_3.filesHttpApi_5bpr50$($receiver, 'api.http', 'http-client.env.json', endsWith(this.model.filename, '.json') ? 'api.json' : 'api.yaml', info, this.model);
  };
  SwaggerGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerGenerator',
    interfaces: [Block]
  };
  function SwaggerGeneratorBase() {
  }
  function Coroutine$SwaggerGeneratorBase$addSwaggerUtils$lambda(closure$info_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
  }
  Coroutine$SwaggerGeneratorBase$addSwaggerUtils$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorBase$addSwaggerUtils$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorBase$addSwaggerUtils$lambda.prototype.constructor = Coroutine$SwaggerGeneratorBase$addSwaggerUtils$lambda;
  Coroutine$SwaggerGeneratorBase$addSwaggerUtils$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$info.fetch('swagger/SwaggerUtils.kt.txt', this);
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
  function SwaggerGeneratorBase$addSwaggerUtils$lambda(closure$info_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorBase$addSwaggerUtils$lambda(closure$info_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorBase.prototype.addSwaggerUtils_gtq0m3$ = function ($receiver, info) {
    $receiver.fileBinary_z1oxai$('src/io/ktor/swagger/experimental/SwaggerUtils.kt', UTF8_getInstance(), void 0, SwaggerGeneratorBase$addSwaggerUtils$lambda(info));
  };
  SwaggerGeneratorBase.prototype.doc_lz4qb0$ = function ($receiver, title, description, params, retval) {
    if (description === void 0)
      description = '';
    if (params === void 0) {
      params = emptyMap();
    }
    if (retval === void 0)
      retval = null;
    var $receiver_0 = ArrayList_init();
    var tmp$;
    $receiver_0.add_11rb$(stripLineBreaks(title));
    $receiver_0.add_11rb$('');
    $receiver_0.addAll_brywnq$(lines(description));
    $receiver_0.add_11rb$('');
    tmp$ = params.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var name = tmp$_0.key;
      var value = tmp$_0.value;
      $receiver_0.add_11rb$('@param ' + stripLineBreaks(name) + ' ' + stripLineBreaks(toString(value)));
    }
    $receiver_0.add_11rb$('');
    if (retval != null) {
      $receiver_0.add_11rb$('@return ' + stripLineBreaks(retval));
    }
    this.doc_5doh9f$($receiver, $receiver_0);
  };
  SwaggerGeneratorBase.prototype.doc_5doh9f$ = function ($receiver, lines) {
    var tmp$;
    var tmp$_0;
    var yielding = false;
    var list = ArrayList_init();
    tmp$_0 = lines.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      if (yielding)
        list.add_11rb$(item);
      else {
        if (!(item == null || isBlank(item))) {
          list.add_11rb$(item);
          yielding = true;
        }
      }
    }
    var dropLastWhile$result;
    dropLastWhile$break: do {
      if (!list.isEmpty()) {
        var iterator = list.listIterator_za3lpa$(list.size);
        while (iterator.hasPrevious()) {
          var it = iterator.previous();
          if (!(it == null || isBlank(it))) {
            dropLastWhile$result = take(list, iterator.nextIndex() + 1 | 0);
            break dropLastWhile$break;
          }
        }
      }
      dropLastWhile$result = emptyList();
    }
     while (false);
    var strippedLines = this.dropDoubleEmpty_d2950k$(dropLastWhile$result);
    $receiver.line_61zpoe$('/**');
    tmp$ = strippedLines.iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      $receiver.line_61zpoe$(' * ' + line);
    }
    $receiver.line_61zpoe$(' */');
  };
  SwaggerGeneratorBase.prototype.dropDoubleEmpty_d2950k$ = function ($receiver) {
    var $receiver_0 = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.size;
    for (var n = 0; n < tmp$; n++) {
      var prev = getOrNull($receiver, n - 1 | 0);
      var current = getOrNull($receiver, n);
      var tmp$_0 = !(prev == null || isBlank(prev));
      if (!tmp$_0) {
        tmp$_0 = !(current == null || isBlank(current));
      }
      if (tmp$_0) {
        $receiver_0.add_11rb$(ensureNotNull(current));
      }
    }
    return $receiver_0;
  };
  function SwaggerGeneratorBase$swaggerDtos$lambda(closure$def) {
    return function ($receiver) {
      var classKeywords = !closure$def.props.isEmpty() ? 'data class' : 'class';
      if (closure$def.synthetic) {
        $receiver.line_61zpoe$('// Synthetic class name');
      }
      $receiver.line_61zpoe$(classKeywords + ' ' + closure$def.name + '(');
      $receiver._indent();
      try {
        var props = closure$def.props.values;
        var index = 0;
        for (var tmp$ = props.iterator(); tmp$.hasNext(); ++index) {
          var prop = tmp$.next();
          var comma = index >= (props.size - 1 | 0) ? '' : ',';
          $receiver.line_61zpoe$('val ' + prop.name + ': ' + toKotlinType(prop.type) + comma);
        }
      }
      finally {
        $receiver._unindent();
      }
      var $receiver_0 = closure$def.propsList;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
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
            var tmp$_1;
            tmp$_1 = propsWithRules.iterator();
            while (tmp$_1.hasNext()) {
              var prop_0 = tmp$_1.next();
              $receiver.line_61zpoe$(prop_0.name + '.verifyParam(' + quote(prop_0.name) + ') { ' + toString(prop_0.toRuleString_61zpoe$('it')) + ' }');
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
      return Unit;
    };
  }
  SwaggerGeneratorBase.prototype.swaggerDtos_rocn3j$ = function ($receiver, info, model) {
    var tmp$;
    tmp$ = model.definitions.values.iterator();
    while (tmp$.hasNext()) {
      var def = tmp$.next();
      SEPARATOR($receiver, SwaggerGeneratorBase$swaggerDtos$lambda(def));
    }
  };
  function SwaggerGeneratorBase$routeBodyCheckParameters$lambda(closure$method) {
    return function ($receiver) {
      var tmp$;
      var reqBody = firstOrNull(closure$method.requestBody);
      if (reqBody != null) {
        $receiver.line_61zpoe$('val body = call().receive<' + toKotlinType(reqBody.schema) + '>()');
      }
      tmp$ = closure$method.parameters.iterator();
      while (tmp$.hasNext()) {
        var param = tmp$.next();
        var pschema = param.schema;
        var rule = pschema.rule;
        if (rule != null) {
          $receiver.line_61zpoe$('checkRequest(' + toKotlin_1(rule, param.name, pschema) + ') { ' + quote('Invalid ' + param.name) + ' }');
        }
      }
      return Unit;
    };
  }
  function SwaggerGeneratorBase$routeBodyCheckParameters$lambda$lambda(closure$response) {
    return function ($receiver) {
      SwaggerGeneratorInterface_getInstance().renderResponse_181pkm$($receiver, closure$response);
      return Unit;
    };
  }
  function SwaggerGeneratorBase$routeBodyCheckParameters$lambda_0(closure$method) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$method.errorResponses.iterator();
      while (tmp$.hasNext()) {
        var response = tmp$.next();
        $receiver.line_61zpoe$('if (false) ' + indentString($receiver.indentLevel, SwaggerGeneratorBase$routeBodyCheckParameters$lambda$lambda(response)));
      }
      return Unit;
    };
  }
  function SwaggerGeneratorBase$routeBodyCheckParameters$lambda_1(closure$method, closure$retval) {
    return function ($receiver) {
      if (!equals(closure$method.responseType, SwaggerModel$VoidType_getInstance())) {
        var loginRoute = tryGetCompatibleLoginRoute(closure$method);
        var untyped = toDefaultUntyped(closure$method.responseType);
        if ((loginRoute != null ? loginRoute.username : null) != null) {
          $receiver.line_61zpoe$('val username = ' + loginRoute.username.fullPath);
          $receiver.line_61zpoe$('// @TODO: Your username/password validation here');
          if (loginRoute.password != null) {
            $receiver.line_61zpoe$('val password = ' + loginRoute.password.fullPath);
            $receiver.line_61zpoe$('if (username != password) httpException(HttpStatusCode.Unauthorized, "username != password")');
          }
          $receiver.line_61zpoe$('val token = myjwt.sign(username)');
          package$util.DynamicAccess.set_7kor20$(untyped, loginRoute.tokenPath, new SwaggerModel$Identifier('token'));
        }
        closure$retval.v = untyped;
      }
      return Unit;
    };
  }
  SwaggerGeneratorBase.prototype.routeBodyCheckParameters_i064du$ = function ($receiver, method) {
    var retval = {v: null};
    SEPARATOR($receiver, SwaggerGeneratorBase$routeBodyCheckParameters$lambda(method));
    SEPARATOR($receiver, SwaggerGeneratorBase$routeBodyCheckParameters$lambda_0(method));
    SEPARATOR($receiver, SwaggerGeneratorBase$routeBodyCheckParameters$lambda_1(method, retval));
    return retval.v;
  };
  SwaggerGeneratorBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerGeneratorBase',
    interfaces: []
  };
  function SwaggerGeneratorCommon() {
    SwaggerGeneratorCommon_instance = this;
  }
  function SwaggerGeneratorCommon$generateJwt$lambda$lambda($receiver) {
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
  function SwaggerGeneratorCommon$generateJwt$lambda$lambda_0($receiver) {
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
  function SwaggerGeneratorCommon$generateJwt$lambda$lambda_1(closure$model) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$model.securityDefinitions.values.iterator();
      while (tmp$.hasNext()) {
        var sec = tmp$.next();
        $receiver.line_61zpoe$('// ---------------');
        $receiver.line_61zpoe$('// @TODO: Please, edit the application.conf # jwt.secret property and provide a secure random value for it');
        $receiver.line_61zpoe$('// ---------------');
        tmp$_0 = lines(sec.description).iterator();
        while (tmp$_0.hasNext()) {
          var descLine = tmp$_0.next();
          $receiver.line_61zpoe$('// ' + descLine);
        }
        var $receiver_0 = 'jwt(' + quote(sec.id) + ')';
        var rafter = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('authSchemes("Bearer", "Token")');
          $receiver.line_61zpoe$('verifier(myjwt.verifier)');
          var $receiver_1 = 'validate';
          var rafter_0 = ''.length === 0 ? '' : ' ' + '';
          $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
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
  function SwaggerGeneratorCommon$generateJwt$lambda$lambda_2($receiver) {
    $receiver.line_61zpoe$('val myjwt = MyJWT(secret = environment.config.property("jwt.secret").getString())');
    return Unit;
  }
  SwaggerGeneratorCommon.prototype.generateJwt_no171g$ = function ($receiver, model) {
    var $receiver_0 = ArrayList_init();
    addImport($receiver, 'io.ktor.auth.*');
    addImport($receiver, 'io.ktor.auth.jwt.*');
    addImport($receiver, 'com.auth0.jwt.*');
    addImport($receiver, 'com.auth0.jwt.algorithms.*');
    addHoconTop($receiver, SwaggerGeneratorCommon$generateJwt$lambda$lambda);
    addApplicationClasses($receiver, SwaggerGeneratorCommon$generateJwt$lambda$lambda_0);
    $receiver_0.add_11rb$(new SwaggerArgument('val myjwt: MyJWT', 'myjwt'));
    addAuthProvider($receiver, SwaggerGeneratorCommon$generateJwt$lambda$lambda_1(model));
    $receiver.prependSeparated_qu2wte$(ApplicationKt_getInstance().MODULE_INSTALL, void 0, SwaggerGeneratorCommon$generateJwt$lambda$lambda_2);
    return $receiver_0;
  };
  function SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.config.*');
    $receiver.line_61zpoe$('import io.ktor.http.*');
    $receiver.line_61zpoe$('import io.ktor.request.*');
    $receiver.line_61zpoe$('import io.ktor.server.testing.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    $receiver.line_61zpoe$('import kotlin.test.*');
    return Unit;
  }
  function SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda$lambda$lambda(closure$model, closure$method) {
    return function ($receiver) {
      $receiver.line_61zpoe$('/**');
      $receiver.line_61zpoe$(' * @see ' + closure$model.info.classNameServer + '.' + closure$method.methodName);
      $receiver.line_61zpoe$(' */');
      $receiver.line_61zpoe$('@Test');
      var $receiver_0 = 'fun test' + capitalize(closure$method.methodName) + '()';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$method_0 = closure$method;
        var $receiver_1 = 'withTestApplication';
        var rafter_0 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('// @TODO: Adjust path as required');
          $receiver.line_61zpoe$('handleRequest(HttpMethod.' + capitalize(closure$method_0.method.toLowerCase()) + ', ' + '"' + closure$method_0.path + '"' + ') {');
          switch (closure$method_0.method.toUpperCase()) {
            case 'POST':
            case 'PUT':
              $receiver._indent();
              try {
                $receiver.line_61zpoe$('// @TODO: Your body here');
                $receiver.line_61zpoe$('setBodyJson(mapOf<String, Any?>())');
              }
              finally {
                $receiver._unindent();
              }

              break;
          }
          $receiver.line_61zpoe$('}.apply {');
          $receiver._indent();
          try {
            $receiver.line_61zpoe$('// @TODO: Your test here');
            $receiver.line_61zpoe$('assertEquals(HttpStatusCode.OK, response.status())');
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
  function SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = 'fun <R> withTestApplication(test: TestApplicationEngine.() -> R): R';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      var $receiver_1 = 'return withApplication(createTestEnvironment())';
      var rafter_0 = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter_0 : $receiver_1 + ' {' + rafter_0);
      $receiver._indent();
      try {
        var $receiver_2 = '(environment.config as MapApplicationConfig).apply';
        var rafter_1 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_2.length === 0 ? '{' + rafter_1 : $receiver_2 + ' {' + rafter_1);
        $receiver._indent();
        try {
          $receiver.line_61zpoe$('put("jwt.secret", "TODO-change-this-supersecret-or-use-SECRET-env")');
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
        $receiver.line_61zpoe$('application.module()');
        $receiver.line_61zpoe$('test()');
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
  function SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.line_61zpoe$('fun TestApplicationRequest.setBodyJson(value: Any?) = setBody(Json.stringify(value))');
    return Unit;
  }
  function SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda_1(closure$model) {
    return function ($receiver) {
      var $receiver_0 = 'class SwaggerRoutesTest';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$model_0 = closure$model;
        var tmp$, tmp$_0;
        tmp$ = closure$model_0.routes.values.iterator();
        while (tmp$.hasNext()) {
          var path = tmp$.next();
          tmp$_0 = path.methods.values.iterator();
          while (tmp$_0.hasNext()) {
            var method = tmp$_0.next();
            SEPARATOR($receiver, SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda$lambda$lambda(closure$model_0, method));
          }
        }
        SEPARATOR($receiver, SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda$lambda$lambda_0);
        SEPARATOR($receiver, SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda$lambda$lambda_1);
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function Coroutine$SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda(closure$info_0, closure$model_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$model = closure$model_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda.prototype.constructor = Coroutine$SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda;
  Coroutine$SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda_0);
            return SEPARATOR(this.local$$receiver, SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda$lambda_1(this.local$closure$model)), Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda(closure$info_0, closure$model_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda(closure$info_0, closure$model_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorCommon.prototype.fileSwaggerBackendTests_s1stdk$ = function ($receiver, fileName, info, model) {
    $receiver.fileText_6jjb1r$(fileName, void 0, void 0, SwaggerGeneratorCommon$fileSwaggerBackendTests$lambda(info, model));
  };
  function Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda(closure$model_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$model = closure$model_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda.prototype.constructor = Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda;
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$$receiver.line_61zpoe$(this.local$closure$model.source);
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorCommon$filesHttpApi$lambda(closure$model_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda(closure$model_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function SwaggerGeneratorCommon$filesHttpApi$lambda$lambda$lambda(it) {
    return it.groupValues.get_za3lpa$(1);
  }
  function Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_0(closure$model_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$model = closure$model_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_0.prototype.constructor = Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_0;
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$closure$model.routes.values;
            var destination = ArrayList_init();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              var list = element.methodsList;
              addAll(destination, list);
            }

            var destination_0 = ArrayList_init();
            var tmp$_0;
            tmp$_0 = destination.iterator();
            while (tmp$_0.hasNext()) {
              var element_0 = tmp$_0.next();
              var list_0 = toList(map(Regex_init('\\{(\\w+)\\}').findAll_905azu$(element_0.path), SwaggerGeneratorCommon$filesHttpApi$lambda$lambda$lambda));
              addAll(destination_0, list_0);
            }

            var paramsInUrls = toSet(destination_0);
            var tmp$_1 = Json_getInstance();
            var tmp$_2 = mapOf_0(to('host', 'http://127.0.0.1:8080'));
            var destination_1 = ArrayList_init_0(collectionSizeOrDefault(paramsInUrls, 10));
            var tmp$_3;
            tmp$_3 = paramsInUrls.iterator();
            while (tmp$_3.hasNext()) {
              var item = tmp$_3.next();
              destination_1.add_11rb$(to('param_' + item, item));
            }

            return this.local$$receiver.line_61zpoe$(tmp$_1.encodePrettyUntyped_hvn9da$(mapOf_0(to('localhost', plus_1(tmp$_2, toMap(destination_1)))), '    '));
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorCommon$filesHttpApi$lambda_0(closure$model_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_0(closure$model_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function SwaggerGeneratorCommon$filesHttpApi$lambda$lambda(it) {
    return it.name + '=' + toKotlinDefault(it.schema.type, it.default, false);
  }
  function Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_1(closure$model_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$model = closure$model_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_1.prototype.constructor = Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_1;
  Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            this.local$$receiver.line_61zpoe$('# ' + stripLineBreaks(this.local$closure$model.info.title));
            tmp$ = lines(this.local$closure$model.info.description).iterator();
            while (tmp$.hasNext()) {
              var descLine = tmp$.next();
              this.local$$receiver.line_61zpoe$('# ' + descLine);
            }

            this.local$$receiver.line_61zpoe$('');
            tmp$_0 = this.local$closure$model.routes.values.iterator();
            while (tmp$_0.hasNext()) {
              var path = tmp$_0.next();
              tmp$_1 = path.methodsList.iterator();
              while (tmp$_1.hasNext()) {
                var method = tmp$_1.next();
                var httpMethod = method.method.toUpperCase();
                this.local$$receiver.line_61zpoe$('###');
                this.local$$receiver.line_61zpoe$('');
                tmp$_2 = lines(method.summaryDescription).iterator();
                while (tmp$_2.hasNext()) {
                  var descLine_0 = tmp$_2.next();
                  this.local$$receiver.line_61zpoe$('# ' + descLine_0);
                }
                var $receiver = path.path;
                var regex = Regex_init('\\{(\\w+)\\}');
                var replace_20wsma$result;
                replace_20wsma$break: do {
                  var match = regex.find_905azu$($receiver);
                  if (match == null) {
                    replace_20wsma$result = $receiver.toString();
                    break replace_20wsma$break;
                  }
                  var lastStart = 0;
                  var length = $receiver.length;
                  var sb = StringBuilder_init(length);
                  do {
                    var foundMatch = ensureNotNull(match);
                    sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
                    sb.append_gw00v9$('{{param_' + foundMatch.groupValues.get_za3lpa$(1) + '}}');
                    lastStart = foundMatch.range.endInclusive + 1 | 0;
                    match = foundMatch.next();
                  }
                   while (lastStart < length && match != null);
                  if (lastStart < length) {
                    sb.append_ezbsdh$($receiver, lastStart, length);
                  }
                  replace_20wsma$result = sb.toString();
                }
                 while (false);
                var escapedPath = replace_20wsma$result;
                var $receiver_0 = method.parametersQuery;
                var destination = ArrayList_init();
                var tmp$_4;
                tmp$_4 = $receiver_0.iterator();
                while (tmp$_4.hasNext()) {
                  var element = tmp$_4.next();
                  if (element.default != null)
                    destination.add_11rb$(element);
                }
                var queryString = joinToString(destination, '&', void 0, void 0, void 0, void 0, SwaggerGeneratorCommon$filesHttpApi$lambda$lambda);
                var rqueryString = queryString.length > 0 ? '?' + queryString : '';
                this.local$$receiver.line_61zpoe$(httpMethod + ' {{host}}' + escapedPath + rqueryString);
                var $receiver_1 = method.securityDefinitions_mq44pj$(this.local$closure$model);
                var destination_0 = ArrayList_init();
                var tmp$_5;
                tmp$_5 = $receiver_1.iterator();
                while (tmp$_5.hasNext()) {
                  var element_0 = tmp$_5.next();
                  var tmp$_6, tmp$_7;
                  if (equals((tmp$_6 = element_0.second) != null ? tmp$_6.inside : null, 'header') && equals((tmp$_7 = element_0.second) != null ? tmp$_7.type : null, SwaggerModel$SecurityType$API_KEY_getInstance()))
                    destination_0.add_11rb$(element_0);
                }
                tmp$_3 = destination_0.iterator();
                while (tmp$_3.hasNext()) {
                  var tmp$_8 = tmp$_3.next();
                  var sec = tmp$_8.component1()
                  , secdef = tmp$_8.component2();
                  this.local$$receiver.line_61zpoe$(ensureNotNull(secdef).name + ': Bearer {{ auth_token }}');
                }
                if (equals(httpMethod, 'POST') || equals(httpMethod, 'PUT')) {
                  var requestBody = firstOrNull(method.requestBodyMerged);
                  if (requestBody != null) {
                    var postBody = toDefaultUntyped(requestBody.schema.type);
                    var contentType = requestBody.contentType;
                    this.local$$receiver.line_61zpoe$('Content-Type: ' + contentType);
                    this.local$$receiver.line_61zpoe$('');
                    if (equals(contentType, ContentType$Companion_getInstance().ApplicationJson)) {
                      this.local$$receiver.line_61zpoe$(Json_getInstance().encodePrettyUntyped_hvn9da$(postBody));
                    }
                     else if (equals(contentType, ContentType$Companion_getInstance().ApplicationXWwwFormUrlencoded)) {
                      var $receiver_2 = package$util.DynamicAccess;
                      var $receiver_3 = $receiver_2.get_strEntries_mzud1t$(postBody);
                      var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
                      var tmp$_9;
                      tmp$_9 = $receiver_3.iterator();
                      while (tmp$_9.hasNext()) {
                        var item = tmp$_9.next();
                        destination_1.add_11rb$(to(item.first, $receiver_2.get_str_mzud1t$(item.second)));
                      }
                      this.local$$receiver.line_61zpoe$(formUrlEncode(destination_1));
                    }
                     else {
                      this.local$$receiver.line_61zpoe$('# Unsupported contentType=' + contentType);
                    }
                  }
                }
                this.local$$receiver.line_61zpoe$('');
                var loginRoute = tryGetCompatibleLoginRoute(method);
                if (loginRoute != null) {
                  var tokenPath = loginRoute.tokenPath;
                  var responsePath = 'response.body.' + joinToString(tokenPath, '.');
                  this.local$$receiver.line_61zpoe$('> {%');
                  this.local$$receiver.line_61zpoe$('client.assert(typeof ' + responsePath + ' !== ' + '"' + 'undefined' + '"' + ', ' + '"' + 'No token returned' + '"' + ');');
                  this.local$$receiver.line_61zpoe$('client.global.set(' + '"' + 'auth_token' + '"' + ', ' + responsePath + ');');
                  this.local$$receiver.line_61zpoe$('%}');
                  this.local$$receiver.line_61zpoe$('');
                }
              }
            }

            return Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorCommon$filesHttpApi$lambda_1(closure$model_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorCommon$filesHttpApi$lambda_1(closure$model_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorCommon.prototype.filesHttpApi_5bpr50$ = function ($receiver, apiFileName, envJsonFileName, modelSourceFileName, info, model) {
    $receiver.fileText_6jjb1r$(modelSourceFileName, void 0, void 0, SwaggerGeneratorCommon$filesHttpApi$lambda(model));
    $receiver.fileText_6jjb1r$(envJsonFileName, void 0, void 0, SwaggerGeneratorCommon$filesHttpApi$lambda_0(model));
    $receiver.fileText_6jjb1r$(apiFileName, void 0, void 0, SwaggerGeneratorCommon$filesHttpApi$lambda_1(model));
  };
  SwaggerGeneratorCommon.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SwaggerGeneratorCommon',
    interfaces: []
  };
  var SwaggerGeneratorCommon_instance = null;
  function SwaggerGeneratorCommon_getInstance() {
    if (SwaggerGeneratorCommon_instance === null) {
      new SwaggerGeneratorCommon();
    }
    return SwaggerGeneratorCommon_instance;
  }
  function SwaggerGeneratorInterface() {
    SwaggerGeneratorInterface_instance = this;
    SwaggerGeneratorBase.call(this);
  }
  function SwaggerGeneratorInterface$registerRoutes$lambda(closure$model, closure$arguments) {
    return function ($receiver) {
      $receiver.line_61zpoe$('registerRoutes(' + closure$model.info.classNameServer + '(' + closure$arguments.instances + '))');
      return Unit;
    };
  }
  SwaggerGeneratorInterface.prototype.registerRoutes_pro3mw$ = function ($receiver, info, model, arguments_0) {
    addImport($receiver, 'io.ktor.swagger.experimental.*');
    this.addSwaggerUtils_gtq0m3$($receiver, info);
    addRoute($receiver, SwaggerGeneratorInterface$registerRoutes$lambda(model, arguments_0));
  };
  function SwaggerGeneratorInterface$renderResponse$lambda(closure$response) {
    return function ($receiver) {
      var tmp$;
      toKotlinDefault_1($receiver, (tmp$ = closure$response.schema) != null ? tmp$.type : null, null, true);
      return Unit;
    };
  }
  SwaggerGeneratorInterface.prototype.renderResponse_181pkm$ = function ($receiver, response) {
    var code = response.intCode;
    if (code === 200) {
      var rindentLevel = $receiver.indentLevel;
      $receiver.line_61zpoe$('call.respond(' + indentString(rindentLevel + 2 | 0, SwaggerGeneratorInterface$renderResponse$lambda(response)) + ')');
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
  function SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    return Unit;
  }
  function SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda$lambda$lambda$lambda(it) {
    return quote(it.name);
  }
  function SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda$lambda$lambda$lambda$lambda(closure$param) {
    return function ($receiver) {
      toKotlinDefault_0($receiver, closure$param.schema, closure$param.default, true);
      return Unit;
    };
  }
  function SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda$lambda$lambda(closure$method, this$SwaggerGeneratorInterface, closure$route) {
    return function ($receiver) {
      var tmp$ = this$SwaggerGeneratorInterface;
      var tmp$_0 = closure$method.summaryDescription;
      var $receiver_0 = closure$method.parameters;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
      var destination = LinkedHashMap_init(capacity);
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var pair = to(element.name, element.description);
        destination.put_xwzc9p$(pair.first, pair.second);
      }
      tmp$.doc_lz4qb0$($receiver, '', tmp$_0, destination, closure$method.defaultResponse.description);
      $receiver.line_61zpoe$('@Path(' + quote(closure$route.path) + ')');
      $receiver.line_61zpoe$('@Method(' + quote(closure$method.method.toUpperCase()) + ')');
      if (!closure$method.security.isEmpty()) {
        $receiver.line_61zpoe$('@Auth(' + joinToString(closure$method.security, ', ', void 0, void 0, void 0, void 0, SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda$lambda$lambda$lambda) + ')');
      }
      $receiver.line_61zpoe$('suspend fun ' + closure$method.methodName + '(');
      $receiver._indent();
      try {
        var tmp$_2, tmp$_3;
        tmp$_2 = get_metaIter(closure$method.parameters).iterator();
        while (tmp$_2.hasNext()) {
          var tmp$_4 = tmp$_2.next();
          var pinfo = tmp$_4.component1()
          , param = tmp$_4.component2();
          var qpname = quote(param.name);
          switch (param.inside.name) {
            case 'BODY':
              tmp$_3 = '@Body(' + qpname + ')';
              break;
            case 'HEADER':
              tmp$_3 = '@Header(' + qpname + ')';
              break;
            case 'QUERY':
              tmp$_3 = '@Query(' + qpname + ')';
              break;
            case 'PATH':
              tmp$_3 = '@Path(' + qpname + ')';
              break;
            case 'FORM_DATA':
              tmp$_3 = '@FormData(' + qpname + ')';
              break;
            default:tmp$_3 = Kotlin.noWhenBranchMatched();
              break;
          }
          var inAnnotation = tmp$_3;
          var default_0 = param.required ? '' : ' = ' + indentStringHere($receiver, SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda$lambda$lambda$lambda$lambda(param));
          $receiver.line_61zpoe$(inAnnotation + ' ' + param.name + ': ' + toKotlinType(param.schema) + default_0 + get_optComma(pinfo));
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('): ' + toKotlinType_0(closure$method.responseType));
      return Unit;
    };
  }
  function SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda_1(closure$model, this$SwaggerGeneratorInterface, closure$info) {
    return function ($receiver) {
      this$SwaggerGeneratorInterface.doc_lz4qb0$($receiver, closure$model.info.title, closure$model.info.description);
      var $receiver_0 = 'interface ' + closure$model.info.className + ' : SwaggerBaseApi';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$model_0 = closure$model;
        var this$SwaggerGeneratorInterface_0 = this$SwaggerGeneratorInterface;
        var tmp$, tmp$_0;
        tmp$ = closure$model_0.routes.values.iterator();
        while (tmp$.hasNext()) {
          var route = tmp$.next();
          tmp$_0 = route.methodsList.iterator();
          while (tmp$_0.hasNext()) {
            var method = tmp$_0.next();
            SEPARATOR($receiver, SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda$lambda$lambda(method, this$SwaggerGeneratorInterface_0, route));
          }
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      this$SwaggerGeneratorInterface.swaggerDtos_rocn3j$($receiver, closure$info, closure$model);
      return Unit;
    };
  }
  function Coroutine$SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorInterface_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$model = closure$model_0;
    this.local$this$SwaggerGeneratorInterface = this$SwaggerGeneratorInterface_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda.prototype.constructor = Coroutine$SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda;
  Coroutine$SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda_0);
            return SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda$lambda_1(this.local$closure$model, this.local$this$SwaggerGeneratorInterface, this.local$closure$info)), Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorInterface_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorInterface_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorInterface.prototype.fileSwaggerCommonInterface_s1stdk$ = function ($receiver, fileName, info, model) {
    $receiver.fileText_6jjb1r$(fileName, void 0, void 0, SwaggerGeneratorInterface$fileSwaggerCommonInterface$lambda(info, model, this));
  };
  function SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.http.*');
    $receiver.line_61zpoe$('import io.ktor.request.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    return Unit;
  }
  function SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda$lambda$lambda(closure$method, closure$untyped) {
    return function ($receiver) {
      toKotlinDefault_1($receiver, closure$method.responseType, closure$untyped, true);
      return Unit;
    };
  }
  function SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda(closure$method, this$SwaggerGeneratorInterface) {
    return function ($receiver) {
      $receiver.line_61zpoe$('// ' + stripLineBreaks(closure$method.method).toUpperCase() + ' ' + stripLineBreaks(closure$method.path));
      $receiver.line_61zpoe$('override suspend fun ' + closure$method.methodName + '(');
      $receiver._indent();
      try {
        var tmp$;
        tmp$ = get_metaIter(closure$method.parameters).iterator();
        while (tmp$.hasNext()) {
          var tmp$_0 = tmp$.next();
          var info = tmp$_0.component1()
          , param = tmp$_0.component2();
          $receiver.line_61zpoe$(param.name + ': ' + toKotlinType(param.schema) + get_optComma(info));
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('): ' + toKotlinType_0(closure$method.responseType) + ' {');
      $receiver._indent();
      try {
        var closure$method_0 = closure$method;
        var untyped = this$SwaggerGeneratorInterface.routeBodyCheckParameters_i064du$($receiver, closure$method_0);
        $receiver.line_61zpoe$('return ' + indentString($receiver.indentLevel, SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda$lambda$lambda(closure$method_0, untyped)));
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}');
      return Unit;
    };
  }
  function SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda_1(closure$model, closure$arguments, this$SwaggerGeneratorInterface) {
    return function ($receiver) {
      var $receiver_0 = 'class ' + closure$model.info.classNameServer + '(' + closure$arguments.decls + ') : SwaggerBaseServer, ' + closure$model.info.className;
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$model_0 = closure$model;
        var this$SwaggerGeneratorInterface_0 = this$SwaggerGeneratorInterface;
        var tmp$, tmp$_0;
        tmp$ = closure$model_0.routes.values.iterator();
        while (tmp$.hasNext()) {
          var paths = tmp$.next();
          tmp$_0 = paths.methodsList.iterator();
          while (tmp$_0.hasNext()) {
            var method = tmp$_0.next();
            SEPARATOR($receiver, SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda(method, this$SwaggerGeneratorInterface_0));
          }
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function Coroutine$SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda(closure$info_0, closure$model_0, closure$arguments_0, this$SwaggerGeneratorInterface_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$model = closure$model_0;
    this.local$closure$arguments = closure$arguments_0;
    this.local$this$SwaggerGeneratorInterface = this$SwaggerGeneratorInterface_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda.prototype.constructor = Coroutine$SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda;
  Coroutine$SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda_0);
            return SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda$lambda_1(this.local$closure$model, this.local$closure$arguments, this.local$this$SwaggerGeneratorInterface)), Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda(closure$info_0, closure$model_0, closure$arguments_0, this$SwaggerGeneratorInterface_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda(closure$info_0, closure$model_0, closure$arguments_0, this$SwaggerGeneratorInterface_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorInterface.prototype.fileSwaggerBackendHandler_v94t6u$ = function ($receiver, fileName, info, model, arguments_0) {
    $receiver.fileText_6jjb1r$(fileName, void 0, void 0, SwaggerGeneratorInterface$fileSwaggerBackendHandler$lambda(info, model, arguments_0, this));
  };
  function SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.http.*');
    $receiver.line_61zpoe$('import io.ktor.client.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    return Unit;
  }
  function SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda_1(closure$model) {
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
  function SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda_2(closure$model) {
    return function ($receiver) {
      $receiver.line_61zpoe$('fun ' + closure$model.info.classNameClient + '(endpoint: String, client: HttpClient = HttpClient()): ' + closure$model.info.classNameClient + ' = createClient(client, endpoint)');
      return Unit;
    };
  }
  function Coroutine$SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda(closure$info_0, closure$model_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$model = closure$model_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda.prototype.constructor = Coroutine$SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda;
  Coroutine$SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda_0);
            SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda_1(this.local$closure$model));
            return SEPARATOR(this.local$$receiver, SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda$lambda_2(this.local$closure$model)), Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda(closure$info_0, closure$model_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda(closure$info_0, closure$model_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorInterface.prototype.fileSwaggerFrontendHandler_s1stdk$ = function ($receiver, fileName, info, model) {
    $receiver.fileText_6jjb1r$(fileName, void 0, void 0, SwaggerGeneratorInterface$fileSwaggerFrontendHandler$lambda(info, model));
  };
  SwaggerGeneratorInterface.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SwaggerGeneratorInterface',
    interfaces: [SwaggerGeneratorBase]
  };
  var SwaggerGeneratorInterface_instance = null;
  function SwaggerGeneratorInterface_getInstance() {
    if (SwaggerGeneratorInterface_instance === null) {
      new SwaggerGeneratorInterface();
    }
    return SwaggerGeneratorInterface_instance;
  }
  function SwaggerGeneratorRaw() {
    SwaggerGeneratorRaw_instance = this;
    SwaggerGeneratorBase.call(this);
  }
  function SwaggerGeneratorRaw$registerRoutes$lambda(closure$model, closure$arguments) {
    return function ($receiver) {
      var $receiver_0 = closure$model.info.classNameServer + '(' + closure$arguments.instances + ').apply';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var tmp$;
        tmp$ = closure$model.tags.iterator();
        while (tmp$.hasNext()) {
          var tag = tmp$.next();
          $receiver.line_61zpoe$(tag.registerMethodName + '()');
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  SwaggerGeneratorRaw.prototype.registerRoutes_pro3mw$ = function ($receiver, info, model, arguments_0) {
    addImport($receiver, 'io.ktor.swagger.experimental.*');
    this.addSwaggerUtils_gtq0m3$($receiver, info);
    addRoute($receiver, SwaggerGeneratorRaw$registerRoutes$lambda(model, arguments_0));
  };
  function SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import io.ktor.application.*');
    $receiver.line_61zpoe$('import io.ktor.response.*');
    $receiver.line_61zpoe$('import io.ktor.routing.*');
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    $receiver.line_61zpoe$('import io.ktor.auth.*');
    $receiver.line_61zpoe$('import io.ktor.http.*');
    return Unit;
  }
  function SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return quote(it.name);
  }
  function SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda$lambda$lambda(closure$method, closure$route, this$SwaggerGeneratorRaw) {
    return function ($receiver) {
      if (!closure$method.security.isEmpty()) {
        var $receiver_0 = 'authenticate(' + joinToString(closure$method.security, ', ', void 0, void 0, void 0, void 0, SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda$lambda$lambda$lambda) + ')';
        var rafter = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
        $receiver._indent();
        try {
          var closure$method_0 = closure$method;
          var closure$route_0 = closure$route;
          this$SwaggerGeneratorRaw.route_t0lu6b$($receiver, closure$method_0, closure$route_0);
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$('}' + '');
        unaryPlus_0($receiver);
      }
       else {
        this$SwaggerGeneratorRaw.route_t0lu6b$($receiver, closure$method, closure$route);
      }
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda(closure$tag, this$SwaggerGeneratorRaw, closure$model, closure$processedMethods) {
    return function ($receiver) {
      this$SwaggerGeneratorRaw.doc_lz4qb0$($receiver, closure$tag.tag);
      var $receiver_0 = 'fun Routing.' + closure$tag.registerMethodName + '()';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$model_0 = closure$model;
        var closure$tag_0 = closure$tag;
        var closure$processedMethods_0 = closure$processedMethods;
        var this$SwaggerGeneratorRaw_0 = this$SwaggerGeneratorRaw;
        var tmp$, tmp$_0;
        tmp$ = closure$model_0.routes.values.iterator();
        while (tmp$.hasNext()) {
          var route = tmp$.next();
          tmp$_0 = route.methodsList.iterator();
          while (tmp$_0.hasNext()) {
            var method = tmp$_0.next();
            if (!method.processedTags.contains_11rb$(closure$tag_0))
              continue;
            if (closure$processedMethods_0.contains_11rb$(method))
              continue;
            closure$processedMethods_0.add_11rb$(method);
            SEPARATOR($receiver, SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda$lambda$lambda(method, route, this$SwaggerGeneratorRaw_0));
          }
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda_1(closure$model, this$SwaggerGeneratorRaw, closure$arguments) {
    return function ($receiver) {
      this$SwaggerGeneratorRaw.doc_lz4qb0$($receiver, closure$model.info.title, closure$model.info.description);
      var $receiver_0 = 'class ' + closure$model.info.classNameServer + '(' + closure$arguments.decls + ')';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$model_0 = closure$model;
        var this$SwaggerGeneratorRaw_0 = this$SwaggerGeneratorRaw;
        var tmp$;
        var processedMethods = HashSet_init();
        tmp$ = closure$model_0.tags.iterator();
        while (tmp$.hasNext()) {
          var tag = tmp$.next();
          SEPARATOR($receiver, SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda$lambda$lambda(tag, this$SwaggerGeneratorRaw_0, closure$model_0, processedMethods));
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function Coroutine$SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0, closure$arguments_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$model = closure$model_0;
    this.local$this$SwaggerGeneratorRaw = this$SwaggerGeneratorRaw_0;
    this.local$closure$arguments = closure$arguments_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda.prototype.constructor = Coroutine$SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda;
  Coroutine$SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda_0);
            return SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda$lambda_1(this.local$closure$model, this.local$this$SwaggerGeneratorRaw, this.local$closure$arguments)), Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0, closure$arguments_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0, closure$arguments_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorRaw.prototype.fileSwaggerBackendHandler_v94t6u$ = function ($receiver, fileName, info, model, arguments_0) {
    $receiver.fileText_6jjb1r$(fileName, void 0, void 0, SwaggerGeneratorRaw$fileSwaggerBackendHandler$lambda(info, model, this, arguments_0));
  };
  function SwaggerGeneratorRaw$route$lambda$lambda$lambda(closure$param) {
    return function ($receiver) {
      toKotlinDefault_0($receiver, closure$param.schema, closure$param.default, true);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$route$lambda$lambda(closure$method) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$ = get_metaIter(closure$method.parameters).iterator();
      while (tmp$.hasNext()) {
        var tmp$_2 = tmp$.next();
        var pinfo = tmp$_2.component1()
        , param = tmp$_2.component2();
        var pname = param.name;
        var qpname = quote(pname);
        var ptype = toKotlinType(param.schema);
        switch (param.inside.name) {
          case 'BODY':
            tmp$_0 = 'call.getBodyParam<' + ptype + '>(' + qpname + ')';
            break;
          case 'HEADER':
            tmp$_0 = 'call.getHeader<' + ptype + '>(' + qpname + ')';
            break;
          case 'QUERY':
            tmp$_0 = 'call.getQuery<' + ptype + '>(' + qpname + ')';
            break;
          case 'PATH':
            tmp$_0 = 'call.getPath<' + ptype + '>(' + qpname + ')';
            break;
          case 'FORM_DATA':
            tmp$_0 = 'call.getFormData<' + ptype + '>(' + qpname + ')';
            break;
          default:tmp$_0 = Kotlin.noWhenBranchMatched();
            break;
        }
        var inAnnotation = tmp$_0;
        if (param.required) {
          tmp$_1 = '';
        }
         else {
          tmp$_1 = '{ ' + indentStringHere($receiver, SwaggerGeneratorRaw$route$lambda$lambda$lambda(param)) + ' }';
        }
        var default_0 = tmp$_1;
        $receiver.line_61zpoe$('val ' + param.name + ' = ' + inAnnotation + ' ' + default_0);
      }
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$route$lambda$lambda$lambda_0(closure$method, closure$untyped) {
    return function ($receiver) {
      toKotlinDefault_1($receiver, closure$method.responseType, closure$untyped, true);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$route$lambda$lambda_0(closure$method, this$SwaggerGeneratorRaw) {
    return function ($receiver) {
      var untyped = this$SwaggerGeneratorRaw.routeBodyCheckParameters_i064du$($receiver, closure$method);
      $receiver.line_61zpoe$('call.respond(' + indentString($receiver.indentLevel, SwaggerGeneratorRaw$route$lambda$lambda$lambda_0(closure$method, untyped)) + ')');
      return Unit;
    };
  }
  SwaggerGeneratorRaw.prototype.route_t0lu6b$ = function ($receiver, method, route) {
    var $receiver_0 = method.method + '(' + quote(route.path) + ')';
    var rafter = ''.length === 0 ? '' : ' ' + '';
    $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
    $receiver._indent();
    try {
      SEPARATOR($receiver, SwaggerGeneratorRaw$route$lambda$lambda(method));
      SEPARATOR($receiver, SwaggerGeneratorRaw$route$lambda$lambda_0(method, this));
    }
    finally {
      $receiver._unindent();
    }
    $receiver.line_61zpoe$('}' + '');
    unaryPlus_0($receiver);
  };
  function SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import io.ktor.client.*');
    $receiver.line_61zpoe$('import io.ktor.client.request.*');
    return Unit;
  }
  function SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda$lambda$lambda$lambda$lambda(closure$param) {
    return function ($receiver) {
      toKotlinDefault_0($receiver, closure$param.schema, closure$param.default, true);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda$lambda$lambda(closure$method, this$SwaggerGeneratorRaw, closure$responseType) {
    return function ($receiver) {
      var tmp$ = this$SwaggerGeneratorRaw;
      var tmp$_0 = closure$method.summaryDescription;
      var $receiver_0 = closure$method.parameters;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_0, 10)), 16);
      var destination = LinkedHashMap_init(capacity);
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var pair = to(element.name, element.description);
        destination.put_xwzc9p$(pair.first, pair.second);
      }
      tmp$.doc_lz4qb0$($receiver, '', tmp$_0, destination, closure$method.defaultResponse.description);
      $receiver.line_61zpoe$('suspend fun ' + closure$method.methodName + '(');
      $receiver._indent();
      try {
        var tmp$_2;
        tmp$_2 = get_metaIter(closure$method.parameters).iterator();
        while (tmp$_2.hasNext()) {
          var tmp$_3 = tmp$_2.next();
          var pinfo = tmp$_3.component1()
          , param = tmp$_3.component2();
          var qpname = quote(param.name);
          var default_0 = param.required ? '' : ' = ' + indentStringHere($receiver, SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda$lambda$lambda$lambda$lambda(param));
          $receiver.line_61zpoe$(param.name + ': ' + toKotlinType(param.schema) + default_0 + get_optComma(pinfo) + ' // ' + param.inside);
        }
      }
      finally {
        $receiver._unindent();
      }
      var $receiver_1 = '): ' + closure$responseType;
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_1.length === 0 ? '{' + rafter : $receiver_1 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$method_0 = closure$method;
        var closure$responseType_0 = closure$responseType;
        var $receiver_2 = closure$method_0.path;
        var regex = Regex_init('\\{(\\w+)\\}');
        var replace_20wsma$result;
        replace_20wsma$break: do {
          var match = regex.find_905azu$($receiver_2);
          if (match == null) {
            replace_20wsma$result = $receiver_2.toString();
            break replace_20wsma$break;
          }
          var lastStart = 0;
          var length = $receiver_2.length;
          var sb = StringBuilder_init(length);
          do {
            var foundMatch = ensureNotNull(match);
            sb.append_ezbsdh$($receiver_2, lastStart, foundMatch.range.start);
            sb.append_gw00v9$('$' + foundMatch.groupValues.get_za3lpa$(1));
            lastStart = foundMatch.range.endInclusive + 1 | 0;
            match = foundMatch.next();
          }
           while (lastStart < length && match != null);
          if (lastStart < length) {
            sb.append_ezbsdh$($receiver_2, lastStart, length);
          }
          replace_20wsma$result = sb.toString();
        }
         while (false);
        var replacedPath = replace_20wsma$result;
        var $receiver_3 = 'return client.' + closure$method_0.method + '<' + closure$responseType_0 + '>(' + '"' + '$' + 'endpoint' + replacedPath + '"' + ')';
        var rafter_0 = ''.length === 0 ? '' : ' ' + '';
        $receiver.line_61zpoe$($receiver_3.length === 0 ? '{' + rafter_0 : $receiver_3 + ' {' + rafter_0);
        $receiver._indent();
        try {
          if (!closure$method_0.parametersQuery.isEmpty()) {
            var $receiver_4 = 'this.url';
            var rafter_1 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$($receiver_4.length === 0 ? '{' + rafter_1 : $receiver_4 + ' {' + rafter_1);
            $receiver._indent();
            try {
              var $receiver_5 = 'this.parameters.apply';
              var rafter_2 = ''.length === 0 ? '' : ' ' + '';
              $receiver.line_61zpoe$($receiver_5.length === 0 ? '{' + rafter_2 : $receiver_5 + ' {' + rafter_2);
              $receiver._indent();
              try {
                var tmp$_4;
                tmp$_4 = closure$method_0.parametersQuery.iterator();
                while (tmp$_4.hasNext()) {
                  var param_0 = tmp$_4.next();
                  $receiver.line_61zpoe$('this.append(' + quote(param_0.name) + ', ' + '"' + '$' + param_0.name + '"' + ')');
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
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
          }
          if (!closure$method_0.parametersBody.isEmpty()) {
            var $receiver_6 = 'this.body = mutableMapOf<String, Any?>().apply';
            var rafter_3 = ''.length === 0 ? '' : ' ' + '';
            $receiver.line_61zpoe$($receiver_6.length === 0 ? '{' + rafter_3 : $receiver_6 + ' {' + rafter_3);
            $receiver._indent();
            try {
              var tmp$_5;
              tmp$_5 = closure$method_0.parametersBody.iterator();
              while (tmp$_5.hasNext()) {
                var param_1 = tmp$_5.next();
                $receiver.line_61zpoe$('this[' + quote(param_1.name) + '] = ' + param_1.name);
              }
            }
            finally {
              $receiver._unindent();
            }
            $receiver.line_61zpoe$('}' + '');
            unaryPlus_0($receiver);
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
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda_1(closure$model, this$SwaggerGeneratorRaw) {
    return function ($receiver) {
      this$SwaggerGeneratorRaw.doc_lz4qb0$($receiver, closure$model.info.title + ' Client', closure$model.info.description);
      var $receiver_0 = 'open class ' + closure$model.info.classNameClient + '(val endpoint: String, val client: HttpClient = HttpClient())';
      var rafter = ''.length === 0 ? '' : ' ' + '';
      $receiver.line_61zpoe$($receiver_0.length === 0 ? '{' + rafter : $receiver_0 + ' {' + rafter);
      $receiver._indent();
      try {
        var closure$model_0 = closure$model;
        var this$SwaggerGeneratorRaw_0 = this$SwaggerGeneratorRaw;
        var tmp$, tmp$_0;
        tmp$ = closure$model_0.routes.values.iterator();
        while (tmp$.hasNext()) {
          var route = tmp$.next();
          tmp$_0 = route.methodsList.iterator();
          while (tmp$_0.hasNext()) {
            var method = tmp$_0.next();
            var responseType = toKotlinType_0(method.responseType);
            SEPARATOR($receiver, SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda$lambda$lambda(method, this$SwaggerGeneratorRaw_0, responseType));
          }
        }
      }
      finally {
        $receiver._unindent();
      }
      $receiver.line_61zpoe$('}' + '');
      unaryPlus_0($receiver);
      return Unit;
    };
  }
  function Coroutine$SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$model = closure$model_0;
    this.local$this$SwaggerGeneratorRaw = this$SwaggerGeneratorRaw_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda.prototype.constructor = Coroutine$SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda;
  Coroutine$SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda_0);
            return SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda$lambda_1(this.local$closure$model, this.local$this$SwaggerGeneratorRaw)), Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorRaw.prototype.fileSwaggerFrontendHandler_s1stdk$ = function ($receiver, fileName, info, model) {
    $receiver.fileText_6jjb1r$(fileName, void 0, void 0, SwaggerGeneratorRaw$fileSwaggerFrontendHandler$lambda(info, model, this));
  };
  function SwaggerGeneratorRaw$fileSwaggerDtos$lambda$lambda(closure$info) {
    return function ($receiver) {
      $receiver.line_61zpoe$('package ' + closure$info.artifactGroup);
      return Unit;
    };
  }
  function SwaggerGeneratorRaw$fileSwaggerDtos$lambda$lambda_0($receiver) {
    $receiver.line_61zpoe$('import java.util.*');
    $receiver.line_61zpoe$('import io.ktor.http.*');
    $receiver.line_61zpoe$('import io.ktor.request.*');
    $receiver.line_61zpoe$('import io.ktor.swagger.experimental.*');
    return Unit;
  }
  function SwaggerGeneratorRaw$fileSwaggerDtos$lambda$lambda_1(closure$info, closure$model, this$SwaggerGeneratorRaw) {
    return function ($receiver) {
      this$SwaggerGeneratorRaw.swaggerDtos_rocn3j$($receiver, closure$info, closure$model);
      return Unit;
    };
  }
  function Coroutine$SwaggerGeneratorRaw$fileSwaggerDtos$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$info = closure$info_0;
    this.local$closure$model = closure$model_0;
    this.local$this$SwaggerGeneratorRaw = this$SwaggerGeneratorRaw_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SwaggerGeneratorRaw$fileSwaggerDtos$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwaggerGeneratorRaw$fileSwaggerDtos$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwaggerGeneratorRaw$fileSwaggerDtos$lambda.prototype.constructor = Coroutine$SwaggerGeneratorRaw$fileSwaggerDtos$lambda;
  Coroutine$SwaggerGeneratorRaw$fileSwaggerDtos$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerDtos$lambda$lambda(this.local$closure$info));
            SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerDtos$lambda$lambda_0);
            return SEPARATOR(this.local$$receiver, SwaggerGeneratorRaw$fileSwaggerDtos$lambda$lambda_1(this.local$closure$info, this.local$closure$model, this.local$this$SwaggerGeneratorRaw)), Unit;
          case 1:
            throw this.exception_0;
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
  function SwaggerGeneratorRaw$fileSwaggerDtos$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SwaggerGeneratorRaw$fileSwaggerDtos$lambda(closure$info_0, closure$model_0, this$SwaggerGeneratorRaw_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  SwaggerGeneratorRaw.prototype.fileSwaggerDtos_s1stdk$ = function ($receiver, fileName, info, model) {
    $receiver.fileText_6jjb1r$(fileName, void 0, void 0, SwaggerGeneratorRaw$fileSwaggerDtos$lambda(info, model, this));
  };
  SwaggerGeneratorRaw.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SwaggerGeneratorRaw',
    interfaces: [SwaggerGeneratorBase]
  };
  var SwaggerGeneratorRaw_instance = null;
  function SwaggerGeneratorRaw_getInstance() {
    if (SwaggerGeneratorRaw_instance === null) {
      new SwaggerGeneratorRaw();
    }
    return SwaggerGeneratorRaw_instance;
  }
  function SwaggerModel(filename, untyped, source, info, servers, produces, consumes, securityDefinitions, routes) {
    SwaggerModel$Companion_getInstance();
    this.filename = filename;
    this.untyped = untyped;
    this.source = source;
    this.info = info;
    this.servers = servers;
    this.produces = produces;
    this.consumes = consumes;
    this.securityDefinitions = securityDefinitions;
    this.routes = routes;
    this.routesList = this.routes.values;
    this.definitions = constructDefinitions(this);
    var $receiver = this.routesList;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element.methodsList;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var list_0 = element_0.processedTags;
      addAll(destination_0, list_0);
    }
    this.tags = distinct(destination_0);
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
  function SwaggerModel$InfoGenType(type, rule, default_0) {
    this.type = type;
    this.rule = rule;
    this.default = default_0;
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
  function SwaggerModel$Identifier(id) {
    this.id = id;
  }
  SwaggerModel$Identifier.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Identifier',
    interfaces: []
  };
  SwaggerModel$Identifier.prototype.component1 = function () {
    return this.id;
  };
  SwaggerModel$Identifier.prototype.copy_61zpoe$ = function (id) {
    return new SwaggerModel$Identifier(id === void 0 ? this.id : id);
  };
  SwaggerModel$Identifier.prototype.toString = function () {
    return 'Identifier(id=' + Kotlin.toString(this.id) + ')';
  };
  SwaggerModel$Identifier.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  SwaggerModel$Identifier.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
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
  SwaggerModel.prototype.validate_ujn5f2$ = defineInlineFunction('ktor-generator.io.ktor.start.swagger.SwaggerModel.validate_ujn5f2$', wrapFunction(function () {
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
  function SwaggerModel$MapLikeGenType() {
  }
  SwaggerModel$MapLikeGenType.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MapLikeGenType',
    interfaces: [SwaggerModel$GenType]
  };
  function SwaggerModel$NamedObject(path, kind) {
    this.path = path;
    this.kind = kind;
    this.ktype_r8xcpc$_0 = PrimitiveClasses$anyClass;
    this.name = substringAfterLast(this.path, 47);
    this.fields_fk2cii$_0 = this.kind.type.fields;
  }
  Object.defineProperty(SwaggerModel$NamedObject.prototype, 'ktype', {
    get: function () {
      return this.ktype_r8xcpc$_0;
    }
  });
  SwaggerModel$NamedObject.prototype.toString = function () {
    return this.name;
  };
  Object.defineProperty(SwaggerModel$NamedObject.prototype, 'fields', {
    get: function () {
      return this.fields_fk2cii$_0;
    }
  });
  SwaggerModel$NamedObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedObject',
    interfaces: [SwaggerModel$MapLikeGenType]
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
  function SwaggerModel$ObjType(namePath, guessPath, propList) {
    this.namePath = namePath;
    this.guessPath = guessPath;
    this.propList = propList;
    var $receiver = this.propList;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      destination.put_xwzc9p$(element.name, element);
    }
    this.props = destination;
    var $receiver_0 = this.propList;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(to(item.name, item.type));
    }
    this.fields_djrhwh$_0 = toMap(destination_0);
    this.ktype_ksz8jt$_0 = getKClass(Map);
    this.guessName = ID_getInstance().normalizeClassName_mhpeer$(!this.guessPath.isEmpty() ? this.guessPath : listOf('Unknown'));
  }
  Object.defineProperty(SwaggerModel$ObjType.prototype, 'fields', {
    get: function () {
      return this.fields_djrhwh$_0;
    }
  });
  Object.defineProperty(SwaggerModel$ObjType.prototype, 'ktype', {
    get: function () {
      return this.ktype_ksz8jt$_0;
    }
  });
  SwaggerModel$ObjType.prototype.toString = function () {
    return 'Any/*Unsupported {' + this.fields + '} namePath=' + toString(this.namePath) + ', guessName=' + this.guessName + ', guessPath=' + this.guessPath + '*/';
  };
  SwaggerModel$ObjType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjType',
    interfaces: [SwaggerModel$MapLikeGenType]
  };
  SwaggerModel$ObjType.prototype.component1 = function () {
    return this.namePath;
  };
  SwaggerModel$ObjType.prototype.component2 = function () {
    return this.guessPath;
  };
  SwaggerModel$ObjType.prototype.component3 = function () {
    return this.propList;
  };
  SwaggerModel$ObjType.prototype.copy_ratv2z$ = function (namePath, guessPath, propList) {
    return new SwaggerModel$ObjType(namePath === void 0 ? this.namePath : namePath, guessPath === void 0 ? this.guessPath : guessPath, propList === void 0 ? this.propList : propList);
  };
  SwaggerModel$ObjType.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namePath) | 0;
    result = result * 31 + Kotlin.hashCode(this.guessPath) | 0;
    result = result * 31 + Kotlin.hashCode(this.propList) | 0;
    return result;
  };
  SwaggerModel$ObjType.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.namePath, other.namePath) && Kotlin.equals(this.guessPath, other.guessPath) && Kotlin.equals(this.propList, other.propList)))));
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
  SwaggerModel$Prop.prototype.toRuleString_61zpoe$ = function (param) {
    if (param === void 0)
      param = this.name;
    var tmp$;
    return (tmp$ = this.rule) != null ? toKotlin_1(tmp$, param, this.type) : null;
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
    var destination = LinkedHashMap_init(capacity);
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
    var destination = LinkedHashMap_init(capacity);
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
  function SwaggerModel$ProcessedTag(tag) {
    this.tag = tag;
    this.id = ID_getInstance().normalizeMethodName_61zpoe$(this.tag);
    this.registerMethodName = ID_getInstance().normalizeMethodName_61zpoe$('register' + capitalize(this.tag));
  }
  SwaggerModel$ProcessedTag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcessedTag',
    interfaces: []
  };
  SwaggerModel$ProcessedTag.prototype.component1 = function () {
    return this.tag;
  };
  SwaggerModel$ProcessedTag.prototype.copy_61zpoe$ = function (tag) {
    return new SwaggerModel$ProcessedTag(tag === void 0 ? this.tag : tag);
  };
  SwaggerModel$ProcessedTag.prototype.toString = function () {
    return 'ProcessedTag(tag=' + Kotlin.toString(this.tag) + ')';
  };
  SwaggerModel$ProcessedTag.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tag) | 0;
    return result;
  };
  SwaggerModel$ProcessedTag.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.tag, other.tag))));
  };
  function SwaggerModel$PathMethodModel(path, method, summary, description, tags, security, operationId, parameters, responses, requestBody) {
    this.path = path;
    this.method = method;
    this.summary = summary;
    this.description = description;
    this.tags = tags;
    this.security = security;
    this.operationId = operationId;
    this.parameters = parameters;
    this.responses = responses;
    this.requestBody = requestBody;
    var $receiver = this.tags;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new SwaggerModel$ProcessedTag(item));
    }
    this.processedTags = destination;
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var $receiver_0 = this.summary + '\n\n' + toString((tmp$_0 = this.description) != null ? tmp$_0 : '');
    var tmp$_5;
    this.summaryDescription = trim(Kotlin.isCharSequence(tmp$_5 = $receiver_0) ? tmp$_5 : throwCCE()).toString();
    var $receiver_1 = this.parameters;
    var destination_0 = ArrayList_init();
    var tmp$_6;
    tmp$_6 = $receiver_1.iterator();
    while (tmp$_6.hasNext()) {
      var element = tmp$_6.next();
      if (element.inside === SwaggerModel$Inside$QUERY_getInstance())
        destination_0.add_11rb$(element);
    }
    this.parametersQuery = destination_0;
    var $receiver_2 = this.parameters;
    var destination_1 = ArrayList_init();
    var tmp$_7;
    tmp$_7 = $receiver_2.iterator();
    while (tmp$_7.hasNext()) {
      var element_0 = tmp$_7.next();
      if (element_0.inside === SwaggerModel$Inside$BODY_getInstance())
        destination_1.add_11rb$(element_0);
    }
    this.parametersBody = destination_1;
    var $receiver_3 = this.parameters;
    var destination_2 = ArrayList_init();
    var tmp$_8;
    tmp$_8 = $receiver_3.iterator();
    while (tmp$_8.hasNext()) {
      var element_1 = tmp$_8.next();
      if (element_1.inside === SwaggerModel$Inside$FORM_DATA_getInstance())
        destination_2.add_11rb$(element_1);
    }
    this.parametersFormData = destination_2;
    var $receiver_4 = this.parameters;
    var destination_3 = ArrayList_init();
    var tmp$_9;
    tmp$_9 = $receiver_4.iterator();
    while (tmp$_9.hasNext()) {
      var element_2 = tmp$_9.next();
      if (element_2.inside === SwaggerModel$Inside$PATH_getInstance())
        destination_3.add_11rb$(element_2);
    }
    this.parametersPath = destination_3;
    var $receiver_5 = this.parameters;
    var destination_4 = ArrayList_init();
    var tmp$_10;
    tmp$_10 = $receiver_5.iterator();
    while (tmp$_10.hasNext()) {
      var element_3 = tmp$_10.next();
      if (element_3.inside === SwaggerModel$Inside$HEADER_getInstance())
        destination_4.add_11rb$(element_3);
    }
    this.parametersHeader = destination_4;
    var tmp$_11;
    if (!this.parametersBody.isEmpty()) {
      var tmp$_12 = ContentType$Companion_getInstance().ApplicationJson;
      var tmp$_13 = emptyList();
      var $receiver_6 = this.parametersBody;
      var destination_5 = ArrayList_init_0(collectionSizeOrDefault($receiver_6, 10));
      var tmp$_14;
      tmp$_14 = $receiver_6.iterator();
      while (tmp$_14.hasNext()) {
        var item_0 = tmp$_14.next();
        destination_5.add_11rb$(new SwaggerModel$Prop(item_0.name, item_0.schema, true));
      }
      tmp$_11 = listOf(new SwaggerModel$TypeWithContentType(tmp$_12, new SwaggerModel$InfoGenType(new SwaggerModel$ObjType(null, tmp$_13, destination_5), null, null)));
    }
     else {
      tmp$_11 = emptyList();
    }
    this.requestBodyOld = tmp$_11;
    this.requestBodyMerged = plus(this.requestBodyOld, this.requestBody);
    var $receiver_7 = this.responses;
    var destination_6 = ArrayList_init();
    var tmp$_15;
    tmp$_15 = $receiver_7.iterator();
    while (tmp$_15.hasNext()) {
      var element_4 = tmp$_15.next();
      if (element_4.intCode !== 200)
        destination_6.add_11rb$(element_4);
    }
    this.errorResponses = destination_6;
    var $receiver_8 = this.responses;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_16;
      tmp$_16 = $receiver_8.iterator();
      while (tmp$_16.hasNext()) {
        var element_5 = tmp$_16.next();
        if (element_5.intCode === 200) {
          firstOrNull$result = element_5;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    this.okResponse = firstOrNull$result;
    this.defaultResponse = (tmp$_1 = this.okResponse) != null ? tmp$_1 : new SwaggerModel$Response('200', 'OK', listOf(new SwaggerModel$TypeWithContentType(ContentType$Companion_getInstance().ApplicationJson, new SwaggerModel$InfoGenType(SwaggerModel$StringType_getInstance(), null, null))));
    this.responseType = (tmp$_3 = (tmp$_2 = this.defaultResponse.schema) != null ? tmp$_2.type : null) != null ? tmp$_3 : SwaggerModel$VoidType_getInstance();
    this.methodName = ID_getInstance().normalizeMethodName_61zpoe$((tmp$_4 = this.operationId) != null ? tmp$_4 : this.method + '/' + this.path);
  }
  SwaggerModel$PathMethodModel.prototype.securityDefinitions_mq44pj$ = function (model) {
    var $receiver = this.security;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, model.securityDefinitions.get_11rb$(item.name)));
    }
    return destination;
  };
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
  SwaggerModel$PathMethodModel.prototype.component10 = function () {
    return this.requestBody;
  };
  SwaggerModel$PathMethodModel.prototype.copy_baqe4y$ = function (path, method, summary, description, tags, security, operationId, parameters, responses, requestBody) {
    return new SwaggerModel$PathMethodModel(path === void 0 ? this.path : path, method === void 0 ? this.method : method, summary === void 0 ? this.summary : summary, description === void 0 ? this.description : description, tags === void 0 ? this.tags : tags, security === void 0 ? this.security : security, operationId === void 0 ? this.operationId : operationId, parameters === void 0 ? this.parameters : parameters, responses === void 0 ? this.responses : responses, requestBody === void 0 ? this.requestBody : requestBody);
  };
  SwaggerModel$PathMethodModel.prototype.toString = function () {
    return 'PathMethodModel(path=' + Kotlin.toString(this.path) + (', method=' + Kotlin.toString(this.method)) + (', summary=' + Kotlin.toString(this.summary)) + (', description=' + Kotlin.toString(this.description)) + (', tags=' + Kotlin.toString(this.tags)) + (', security=' + Kotlin.toString(this.security)) + (', operationId=' + Kotlin.toString(this.operationId)) + (', parameters=' + Kotlin.toString(this.parameters)) + (', responses=' + Kotlin.toString(this.responses)) + (', requestBody=' + Kotlin.toString(this.requestBody)) + ')';
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
    result = result * 31 + Kotlin.hashCode(this.requestBody) | 0;
    return result;
  };
  SwaggerModel$PathMethodModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.method, other.method) && Kotlin.equals(this.summary, other.summary) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.tags, other.tags) && Kotlin.equals(this.security, other.security) && Kotlin.equals(this.operationId, other.operationId) && Kotlin.equals(this.parameters, other.parameters) && Kotlin.equals(this.responses, other.responses) && Kotlin.equals(this.requestBody, other.requestBody)))));
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
    this.classNameServerTest = this.classNameServer + 'Test';
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
  function SwaggerModel$Response(code, description, kinds) {
    this.code = code;
    this.description = description;
    this.kinds = kinds;
    var tmp$, tmp$_0, tmp$_1;
    this.schema = (tmp$ = firstOrNull(this.kinds)) != null ? tmp$.schema : null;
    if (equals(this.code, 'default'))
      tmp$_1 = 200;
    else
      tmp$_1 = (tmp$_0 = toIntOrNull(this.code)) != null ? tmp$_0 : -1;
    this.intCode = tmp$_1;
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
    return this.kinds;
  };
  SwaggerModel$Response.prototype.copy_bjmnon$ = function (code, description, kinds) {
    return new SwaggerModel$Response(code === void 0 ? this.code : code, description === void 0 ? this.description : description, kinds === void 0 ? this.kinds : kinds);
  };
  SwaggerModel$Response.prototype.toString = function () {
    return 'Response(code=' + Kotlin.toString(this.code) + (', description=' + Kotlin.toString(this.description)) + (', kinds=' + Kotlin.toString(this.kinds)) + ')';
  };
  SwaggerModel$Response.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.kinds) | 0;
    return result;
  };
  SwaggerModel$Response.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.code, other.code) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.kinds, other.kinds)))));
  };
  function SwaggerModel$TypeWithContentType(contentType, schema) {
    this.contentType = contentType;
    this.schema = schema;
  }
  SwaggerModel$TypeWithContentType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeWithContentType',
    interfaces: []
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
  SwaggerModel$Companion.prototype.parseDefinitionElement_7govvk$ = function (def, root, namePath, guessPath) {
    var $receiver = package$util.DynamicAccess;
    var callback$result;
    var tmp$, tmp$_0, tmp$_1;
    var ref = $receiver.get_s2h60f$(def, '$ref');
    if (ref != null) {
      var path = $receiver.get_str_mzud1t$(ref);
      var referee = this.parseDefinitionElement_7govvk$(Json_getInstance().followReference_d0xna2$(def, root, path), root, path, listOf(path));
      if (Kotlin.isType(referee.type, SwaggerModel$ObjType)) {
        tmp$_0 = new SwaggerModel$InfoGenType(new SwaggerModel$NamedObject(path, Kotlin.isType(tmp$ = referee, SwaggerModel$InfoGenType) ? tmp$ : throwCCE()), null, null);
      }
       else {
        tmp$_0 = referee;
      }
      return tmp$_0;
    }
     else {
      var type = $receiver.get_s2h60f$(def, 'type');
      var format = $receiver.get_s2h60f$(def, 'format');
      var default_0 = $receiver.get_s2h60f$(def, 'default');
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
            default:tmp$_1 = SwaggerModel$Int32Type_getInstance();
              break;
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
            default:tmp$_1 = SwaggerModel$DoubleType_getInstance();
              break;
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
            default:tmp$_1 = SwaggerModel$StringType_getInstance();
              break;
          }

          break;
        case 'boolean':
          tmp$_1 = SwaggerModel$BoolType_getInstance();
          break;
        case 'array':
          var items = $receiver.get_s2h60f$(def, 'items');
          tmp$_1 = new SwaggerModel$ArrayType(this.parseDefinitionElement_7govvk$(items, root, null, plus(guessPath, listOf('elements'))));
          break;
        default:if (type == null || equals(type, 'object')) {
            var props = $receiver.get_s2h60f$(def, 'properties');
            var required = toSet($receiver.get_strList_mzud1t$($receiver.get_s2h60f$(def, 'required')));
            var $receiver_0 = $receiver.get_strEntries_mzud1t$(props);
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_2;
            tmp$_2 = $receiver_0.iterator();
            while (tmp$_2.hasNext()) {
              var item = tmp$_2.next();
              destination.add_11rb$(new SwaggerModel$Prop(item.first, this.parseDefinitionElement_7govvk$(item.second, root, null, plus_0(guessPath, item.first)), required.contains_11rb$(item.first)));
            }
            var entries = destination;
            tmp$_1 = new SwaggerModel$ObjType(namePath, guessPath, entries);
          }
           else if (equals(type, 'null')) {
            throw IllegalStateException_init(('null? : ' + toString(def)).toString());
          }
           else {
            throw IllegalStateException_init(('Other prim ' + toString(type) + ', ' + toString(def)).toString());
          }

          break;
      }
      var ptype = tmp$_1;
      callback$result = new SwaggerModel$InfoGenType(ptype, rule, default_0);
    }
    return callback$result;
  };
  SwaggerModel$Companion.prototype.parseParameter_oaftn8$ = function (def, root) {
    var $receiver = package$util.DynamicAccess;
    var tmp$, tmp$_0, tmp$_1;
    var paramName = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'name'));
    return new SwaggerModel$Parameter(paramName, SwaggerModel$Inside$Companion_getInstance().get_61zpoe$($receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'in'))), (tmp$_0 = (tmp$ = $receiver.get_s2h60f$(def, 'required')) != null ? $receiver.get_bool_mzud1t$(tmp$) : null) != null ? tmp$_0 : false, $receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'description')), $receiver.get_s2h60f$(def, 'default'), this.parseDefinitionElement_7govvk$((tmp$_1 = $receiver.get_s2h60f$(def, 'schema')) != null ? tmp$_1 : def, root, null, listOf_0(['param', paramName])));
  };
  SwaggerModel$Companion.prototype.parseMethodPath_7vswvu$ = function (path, method, def, root, version) {
    var $receiver = package$util.DynamicAccess;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var operationId = (tmp$ = $receiver.get_s2h60f$(def, 'operationId')) != null ? $receiver.get_str_mzud1t$(tmp$) : null;
    tmp$_0 = $receiver.get_str_mzud1t$($receiver.get_s2h60f$(def, 'summary'));
    tmp$_2 = (tmp$_1 = $receiver.get_s2h60f$(def, 'description')) != null ? $receiver.get_str_mzud1t$(tmp$_1) : null;
    tmp$_3 = $receiver.get_strList_mzud1t$($receiver.get_s2h60f$(def, 'tags'));
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
      tmp$_8.call(destination_1, new SwaggerModel$Response(code, $receiver.get_str_mzud1t$($receiver.get_s2h60f$(rdef, 'description')), this.parseTypeWithContentTypes_0(rdef, root, version, listOf('responses'))));
    }
    return new SwaggerModel$PathMethodModel(path, method, tmp$_0, tmp$_2, tmp$_3, destination, operationId, destination_0, destination_1, this.parseTypeWithContentTypes_0($receiver.get_s2h60f$(def, 'requestBody'), root, version, listOf_0([operationId != null ? operationId : method + '/' + path, 'ReqBody'])));
  };
  SwaggerModel$Companion.prototype.parseTypeWithContentTypes_0 = function (rdef, root, version, guessPath) {
    var tmp$, tmp$_0, tmp$_1;
    var kinds = ArrayList_init();
    switch (this.get_v_n4mt33$(version).name) {
      case 'V2':
        var schema = (tmp$ = DynamicAccess_getInstance().get_s2h60f$(rdef, 'schema')) != null ? this.parseDefinitionElement_7govvk$(tmp$, root, null, guessPath) : null;
        if (schema != null) {
          var element = new SwaggerModel$TypeWithContentType(ContentType$Companion_getInstance().ApplicationJson, schema);
          kinds.add_11rb$(element);
        }

        break;
      case 'V3':
        var content = DynamicAccess_getInstance().get_s2h60f$(rdef, 'content');
        tmp$_0 = DynamicAccess_getInstance().get_entries_mzud1t$(content).iterator();
        while (tmp$_0.hasNext()) {
          var fcontent = tmp$_0.next();
          var contentType = (tmp$_1 = fcontent.first) != null ? DynamicAccess_getInstance().get_str_mzud1t$(tmp$_1) : null;
          var contentInfo = fcontent.second;
          var schema_0 = DynamicAccess_getInstance().get_s2h60f$(contentInfo, 'schema');
          var fschema = schema_0 != null ? this.parseDefinitionElement_7govvk$(schema_0, root, null, guessPath) : null;
          if (contentType != null && fschema != null) {
            var element_0 = new SwaggerModel$TypeWithContentType(new ContentType(contentType), fschema);
            kinds.add_11rb$(element_0);
          }
        }

        break;
    }
    return kinds;
  };
  function SwaggerModel$Companion$SwVersion(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SwaggerModel$Companion$SwVersion_initFields() {
    SwaggerModel$Companion$SwVersion_initFields = function () {
    };
    SwaggerModel$Companion$SwVersion$V2_instance = new SwaggerModel$Companion$SwVersion('V2', 0);
    SwaggerModel$Companion$SwVersion$V3_instance = new SwaggerModel$Companion$SwVersion('V3', 1);
  }
  var SwaggerModel$Companion$SwVersion$V2_instance;
  function SwaggerModel$Companion$SwVersion$V2_getInstance() {
    SwaggerModel$Companion$SwVersion_initFields();
    return SwaggerModel$Companion$SwVersion$V2_instance;
  }
  var SwaggerModel$Companion$SwVersion$V3_instance;
  function SwaggerModel$Companion$SwVersion$V3_getInstance() {
    SwaggerModel$Companion$SwVersion_initFields();
    return SwaggerModel$Companion$SwVersion$V3_instance;
  }
  SwaggerModel$Companion$SwVersion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwVersion',
    interfaces: [Enum]
  };
  function SwaggerModel$Companion$SwVersion$values() {
    return [SwaggerModel$Companion$SwVersion$V2_getInstance(), SwaggerModel$Companion$SwVersion$V3_getInstance()];
  }
  SwaggerModel$Companion$SwVersion.values = SwaggerModel$Companion$SwVersion$values;
  function SwaggerModel$Companion$SwVersion$valueOf(name) {
    switch (name) {
      case 'V2':
        return SwaggerModel$Companion$SwVersion$V2_getInstance();
      case 'V3':
        return SwaggerModel$Companion$SwVersion$V3_getInstance();
      default:throwISE('No enum constant io.ktor.start.swagger.SwaggerModel.Companion.SwVersion.' + name);
    }
  }
  SwaggerModel$Companion$SwVersion.valueOf_61zpoe$ = SwaggerModel$Companion$SwVersion$valueOf;
  SwaggerModel$Companion.prototype.parsePath_7x15lk$ = function (path, def, root, version) {
    var $receiver = package$util.DynamicAccess.get_strEntries_mzud1t$(def);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var method = item.component1()
      , methodDef = item.component2();
      tmp$_0.call(destination, to(method, this.parseMethodPath_7vswvu$(path, method, methodDef, root, version)));
    }
    return new SwaggerModel$PathModel(path, toMap(destination));
  };
  SwaggerModel$Companion.prototype.parseJsonOrYaml_puj7f4$ = function (source, filename) {
    var tmp$;
    var trimmedSource = trim(Kotlin.isCharSequence(tmp$ = source) ? tmp$ : throwCCE()).toString();
    return startsWith(trimmedSource, '{') ? this.parseJson_puj7f4$(source, filename) : this.parseYaml_puj7f4$(source, filename);
  };
  SwaggerModel$Companion.prototype.parseJson_puj7f4$ = function (source, filename) {
    if (filename === void 0)
      filename = 'unknown.json';
    return this.parse_1mu92c$(Json_getInstance().parse_61zpoe$(source), source, filename);
  };
  SwaggerModel$Companion.prototype.parseYaml_puj7f4$ = function (source, filename) {
    if (filename === void 0)
      filename = 'unknown.yaml';
    return this.parse_1mu92c$(Yaml_getInstance().load_61zpoe$(source), source, filename);
  };
  SwaggerModel$Companion.prototype.get_v_n4mt33$ = function ($receiver) {
    if (this.is20_n4mt33$($receiver))
      return SwaggerModel$Companion$SwVersion$V2_getInstance();
    else if (this.is30_n4mt33$($receiver))
      return SwaggerModel$Companion$SwVersion$V3_getInstance();
    else {
      throw IllegalStateException_init('Unsupported version'.toString());
    }
  };
  SwaggerModel$Companion.prototype.is20_n4mt33$ = function ($receiver) {
    return $receiver.compareTo_11rb$(SwaggerModel$Companion$Versions_getInstance().V3) < 0;
  };
  SwaggerModel$Companion.prototype.is30_n4mt33$ = function ($receiver) {
    return $receiver.compareTo_11rb$(SwaggerModel$Companion$Versions_getInstance().V3) >= 0;
  };
  SwaggerModel$Companion.prototype.parse_1mu92c$ = function (model, source, filename) {
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
    switch (this.get_v_n4mt33$(semVer).name) {
      case 'V2':
        var host = (tmp$_1 = (tmp$_0 = $receiver.get_s2h60f$(model, 'host')) != null ? $receiver.get_str_mzud1t$(tmp$_0) : null) != null ? tmp$_1 : '127.0.0.1';
        var basePath = (tmp$_3 = (tmp$_2 = $receiver.get_s2h60f$(model, 'basePath')) != null ? $receiver.get_str_mzud1t$(tmp$_2) : null) != null ? tmp$_3 : '/';
        var schemes = $receiver.get_strList_mzud1t$($receiver.get_s2h60f$(model, 'schemes'));
        var tmp$_10;
        var element = new SwaggerModel$Server('{scheme}://' + host + basePath, info.description, mapOf_0(to('scheme', new SwaggerModel$ServerVariable('scheme', (tmp$_10 = firstOrNull(schemes)) != null ? tmp$_10 : 'https', '', schemes))));
        servers.add_11rb$(element);
        break;
      case 'V3':
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

        break;
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
      tmp$_23.call(destination_3, to(key, this.parsePath_7x15lk$(key, obj_0, root, semVer)));
    }
    var paths = toMap(destination_3);
    return new SwaggerModel(filename, model, source, info, servers, produces, consumes, securityDefinitions, paths);
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
  function SwaggerModel$ReferenceFinder(model) {
    this.model = model;
    this.out = LinkedHashSet_init();
    this.unnameds = LinkedHashSet_init();
    this.explored = LinkedHashSet_init();
  }
  function SwaggerModel$ReferenceFinder$Result(out, unfilteredUnnameds) {
    this.out = out;
    var $receiver = this.out;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.kind.type);
    }
    this.outObjs = toSet(destination);
    var destination_0 = ArrayList_init();
    var tmp$_0;
    tmp$_0 = unfilteredUnnameds.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!this.outObjs.contains_11rb$(element))
        destination_0.add_11rb$(element);
    }
    this.unnamed = destination_0;
  }
  SwaggerModel$ReferenceFinder$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  SwaggerModel$ReferenceFinder.prototype.find = function () {
    var tmp$;
    tmp$ = this.model.routes.values.iterator();
    while (tmp$.hasNext()) {
      var path = tmp$.next();
      this.find_qmvl8w$(path);
    }
    return new SwaggerModel$ReferenceFinder$Result(this.out, this.unnameds);
  };
  SwaggerModel$ReferenceFinder.prototype.find_qmvl8w$ = function ($receiver) {
    var tmp$;
    tmp$ = $receiver.methodsList.iterator();
    while (tmp$.hasNext()) {
      var method = tmp$.next();
      this.find_k01abz$(method);
    }
  };
  SwaggerModel$ReferenceFinder.prototype.find_k01abz$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.responses.iterator();
    while (tmp$.hasNext()) {
      var response = tmp$.next();
      this.find_3u8vbr$(response);
    }
    tmp$_0 = $receiver.parameters.iterator();
    while (tmp$_0.hasNext()) {
      var param = tmp$_0.next();
      this.find_tyg8d1$(param);
    }
    tmp$_1 = $receiver.requestBody.iterator();
    while (tmp$_1.hasNext()) {
      var rb = tmp$_1.next();
      this.find_t2wi81$(rb);
    }
  };
  SwaggerModel$ReferenceFinder.prototype.find_mqoc4k$ = function ($receiver) {
    this.find_61zbhy$($receiver.type);
  };
  SwaggerModel$ReferenceFinder.prototype.find_t2wi81$ = function ($receiver) {
    this.find_mqoc4k$($receiver.schema);
  };
  SwaggerModel$ReferenceFinder.prototype.find_jb2i9l$ = function ($receiver) {
    this.find_mqoc4k$($receiver.type);
  };
  SwaggerModel$ReferenceFinder.prototype.find_tyg8d1$ = function ($receiver) {
    this.find_mqoc4k$($receiver.schema);
  };
  SwaggerModel$ReferenceFinder.prototype.find_3u8vbr$ = function ($receiver) {
    var tmp$;
    (tmp$ = $receiver.schema) != null ? (this.find_mqoc4k$(tmp$), Unit) : null;
  };
  SwaggerModel$ReferenceFinder.prototype.find_61zbhy$ = function ($receiver) {
    var tmp$;
    if (this.explored.contains_11rb$($receiver))
      return;
    this.explored.add_11rb$($receiver);
    if (Kotlin.isType($receiver, SwaggerModel$NamedObject)) {
      this.out.add_11rb$($receiver);
      this.find_mqoc4k$($receiver.kind);
    }
     else if (Kotlin.isType($receiver, SwaggerModel$MapLikeGenType)) {
      tmp$ = $receiver.fields.entries.iterator();
      while (tmp$.hasNext()) {
        var field = tmp$.next();
        this.find_mqoc4k$(field.value);
      }
      if (Kotlin.isType($receiver, SwaggerModel$ObjType)) {
        this.unnameds.add_11rb$($receiver);
      }
    }
     else if (Kotlin.isType($receiver, SwaggerModel$ArrayType))
      this.find_mqoc4k$($receiver.items);
  };
  SwaggerModel$ReferenceFinder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReferenceFinder',
    interfaces: []
  };
  function SwaggerModel$TypeDef(name, props, synthetic) {
    this.name = name;
    this.props = props;
    this.synthetic = synthetic;
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
  SwaggerModel$TypeDef.prototype.component3 = function () {
    return this.synthetic;
  };
  SwaggerModel$TypeDef.prototype.copy_ngsr70$ = function (name, props, synthetic) {
    return new SwaggerModel$TypeDef(name === void 0 ? this.name : name, props === void 0 ? this.props : props, synthetic === void 0 ? this.synthetic : synthetic);
  };
  SwaggerModel$TypeDef.prototype.toString = function () {
    return 'TypeDef(name=' + Kotlin.toString(this.name) + (', props=' + Kotlin.toString(this.props)) + (', synthetic=' + Kotlin.toString(this.synthetic)) + ')';
  };
  SwaggerModel$TypeDef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.props) | 0;
    result = result * 31 + Kotlin.hashCode(this.synthetic) | 0;
    return result;
  };
  SwaggerModel$TypeDef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.props, other.props) && Kotlin.equals(this.synthetic, other.synthetic)))));
  };
  SwaggerModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerModel',
    interfaces: []
  };
  SwaggerModel.prototype.component1 = function () {
    return this.filename;
  };
  SwaggerModel.prototype.component2 = function () {
    return this.untyped;
  };
  SwaggerModel.prototype.component3 = function () {
    return this.source;
  };
  SwaggerModel.prototype.component4 = function () {
    return this.info;
  };
  SwaggerModel.prototype.component5 = function () {
    return this.servers;
  };
  SwaggerModel.prototype.component6 = function () {
    return this.produces;
  };
  SwaggerModel.prototype.component7 = function () {
    return this.consumes;
  };
  SwaggerModel.prototype.component8 = function () {
    return this.securityDefinitions;
  };
  SwaggerModel.prototype.component9 = function () {
    return this.routes;
  };
  SwaggerModel.prototype.copy_n2zcwv$ = function (filename, untyped, source, info, servers, produces, consumes, securityDefinitions, routes) {
    return new SwaggerModel(filename === void 0 ? this.filename : filename, untyped === void 0 ? this.untyped : untyped, source === void 0 ? this.source : source, info === void 0 ? this.info : info, servers === void 0 ? this.servers : servers, produces === void 0 ? this.produces : produces, consumes === void 0 ? this.consumes : consumes, securityDefinitions === void 0 ? this.securityDefinitions : securityDefinitions, routes === void 0 ? this.routes : routes);
  };
  SwaggerModel.prototype.toString = function () {
    return 'SwaggerModel(filename=' + Kotlin.toString(this.filename) + (', untyped=' + Kotlin.toString(this.untyped)) + (', source=' + Kotlin.toString(this.source)) + (', info=' + Kotlin.toString(this.info)) + (', servers=' + Kotlin.toString(this.servers)) + (', produces=' + Kotlin.toString(this.produces)) + (', consumes=' + Kotlin.toString(this.consumes)) + (', securityDefinitions=' + Kotlin.toString(this.securityDefinitions)) + (', routes=' + Kotlin.toString(this.routes)) + ')';
  };
  SwaggerModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.untyped) | 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    result = result * 31 + Kotlin.hashCode(this.servers) | 0;
    result = result * 31 + Kotlin.hashCode(this.produces) | 0;
    result = result * 31 + Kotlin.hashCode(this.consumes) | 0;
    result = result * 31 + Kotlin.hashCode(this.securityDefinitions) | 0;
    result = result * 31 + Kotlin.hashCode(this.routes) | 0;
    return result;
  };
  SwaggerModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.untyped, other.untyped) && Kotlin.equals(this.source, other.source) && Kotlin.equals(this.info, other.info) && Kotlin.equals(this.servers, other.servers) && Kotlin.equals(this.produces, other.produces) && Kotlin.equals(this.consumes, other.consumes) && Kotlin.equals(this.securityDefinitions, other.securityDefinitions) && Kotlin.equals(this.routes, other.routes)))));
  };
  function constructDefinitions($receiver) {
    var res = (new SwaggerModel$ReferenceFinder($receiver)).find();
    var $receiver_0 = res.out;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new SwaggerModel$TypeDef(item.name, item.kind.type.props, false));
    }
    var $receiver_1 = filterNotNull(destination);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_1, 10)), 16);
    var destination_0 = LinkedHashMap_init(capacity);
    var tmp$_0;
    tmp$_0 = $receiver_1.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      destination_0.put_xwzc9p$(element.name, element);
    }
    var namedDefs = destination_0;
    var $receiver_2 = res.unnamed;
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_1;
    tmp$_1 = $receiver_2.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_1.add_11rb$;
      var $receiver_3 = item_0.fields;
      var destination_2 = ArrayList_init_0($receiver_3.size);
      var tmp$_3;
      tmp$_3 = $receiver_3.entries.iterator();
      while (tmp$_3.hasNext()) {
        var item_1 = tmp$_3.next();
        var tmp$_4 = destination_2.add_11rb$;
        var name = item_1.key;
        var type = item_1.value;
        tmp$_4.call(destination_2, to(name, new SwaggerModel$Prop(name, type, true)));
      }
      var props = toMap(destination_2);
      tmp$_2.call(destination_1, new SwaggerModel$TypeDef(item_0.guessName, props, true));
    }
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(destination_1, 10)), 16);
    var destination_3 = LinkedHashMap_init(capacity_0);
    var tmp$_5;
    tmp$_5 = destination_1.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      destination_3.put_xwzc9p$(element_0.name, element_0);
    }
    var unnamedDefs = destination_3;
    return plus_1(namedDefs, unnamedDefs);
  }
  function toKotlin_0($receiver, param, type) {
    return toKotlin($receiver, param, type.ktype);
  }
  function toKotlin_1($receiver, param, type) {
    return toKotlin_0($receiver, param, type.type);
  }
  function toDefaultUntyped($receiver, path, default_0) {
    if (path === void 0) {
      path = emptyList();
    }
    if (default_0 === void 0)
      default_0 = null;
    var tmp$, tmp$_0;
    if ($receiver == null)
      tmp$_0 = null;
    else if (Kotlin.isType($receiver, SwaggerModel$OptionalType))
      tmp$_0 = null;
    else if (Kotlin.isType($receiver, SwaggerModel$BaseStringType))
      tmp$_0 = (tmp$ = default_0 != null ? DynamicAccess_getInstance().get_str_mzud1t$(default_0) : null) != null ? tmp$ : joinToString(path, '.');
    else if (Kotlin.isType($receiver, SwaggerModel$DateType))
      tmp$_0 = '';
    else if (Kotlin.isType($receiver, SwaggerModel$DateTimeType))
      tmp$_0 = '';
    else if (Kotlin.isType($receiver, SwaggerModel$Int32Type)) {
      var tmp$_1;
      tmp$_0 = (tmp$_1 = package$util.DynamicAccess.get_tryInt_mzud1t$(default_0)) != null ? tmp$_1 : 0;
    }
     else if (Kotlin.isType($receiver, SwaggerModel$DoubleType)) {
      var tmp$_2;
      tmp$_0 = (tmp$_2 = package$util.DynamicAccess.get_tryDouble_mzud1t$(default_0)) != null ? tmp$_2 : 0.0;
    }
     else if (Kotlin.isType($receiver, SwaggerModel$Int64Type)) {
      var tmp$_3;
      tmp$_0 = (tmp$_3 = package$util.DynamicAccess.get_tryLong_mzud1t$(default_0)) != null ? tmp$_3 : L0;
    }
     else if (Kotlin.isType($receiver, SwaggerModel$BoolType)) {
      var tmp$_4;
      tmp$_0 = (tmp$_4 = package$util.DynamicAccess.get_tryBool_mzud1t$(default_0)) != null ? tmp$_4 : false;
    }
     else if (Kotlin.isType($receiver, SwaggerModel$ArrayType)) {
      tmp$_0 = toMutableList(emptyList());
    }
     else if (Kotlin.isType($receiver, SwaggerModel$MapLikeGenType)) {
      var $receiver_0 = $receiver.fields;
      var destination = ArrayList_init_0($receiver_0.size);
      var tmp$_5;
      tmp$_5 = $receiver_0.entries.iterator();
      while (tmp$_5.hasNext()) {
        var item = tmp$_5.next();
        destination.add_11rb$(to(item.key, toDefaultUntyped(item.value.type, plus_0(path, item.key), item.value.default)));
      }
      tmp$_0 = toMutableMap(toMap(destination));
    }
     else if (Kotlin.isType($receiver, SwaggerModel$VoidType))
      tmp$_0 = Unit;
    else {
      throw IllegalStateException_init(("Unsupported '" + toString($receiver) + "'").toString());
    }
    return tmp$_0;
  }
  function SwaggerArguments(arguments_0) {
    this.arguments = arguments_0;
  }
  function SwaggerArguments$get_SwaggerArguments$instances$lambda(it) {
    return it.instance;
  }
  Object.defineProperty(SwaggerArguments.prototype, 'instances', {
    get: function () {
      return joinToString(this.arguments, ', ', void 0, void 0, void 0, void 0, SwaggerArguments$get_SwaggerArguments$instances$lambda);
    }
  });
  function SwaggerArguments$get_SwaggerArguments$decls$lambda(it) {
    return it.decl;
  }
  Object.defineProperty(SwaggerArguments.prototype, 'decls', {
    get: function () {
      return joinToString(this.arguments, ', ', void 0, void 0, void 0, void 0, SwaggerArguments$get_SwaggerArguments$decls$lambda);
    }
  });
  SwaggerArguments.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerArguments',
    interfaces: []
  };
  SwaggerArguments.prototype.component1 = function () {
    return this.arguments;
  };
  SwaggerArguments.prototype.copy_470e1g$ = function (arguments_0) {
    return new SwaggerArguments(arguments_0 === void 0 ? this.arguments : arguments_0);
  };
  SwaggerArguments.prototype.toString = function () {
    return 'SwaggerArguments(arguments=' + Kotlin.toString(this.arguments) + ')';
  };
  SwaggerArguments.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.arguments) | 0;
    return result;
  };
  SwaggerArguments.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.arguments, other.arguments))));
  };
  function SwaggerArgument(decl, instance) {
    this.decl = decl;
    this.instance = instance;
  }
  SwaggerArgument.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwaggerArgument',
    interfaces: []
  };
  SwaggerArgument.prototype.component1 = function () {
    return this.decl;
  };
  SwaggerArgument.prototype.component2 = function () {
    return this.instance;
  };
  SwaggerArgument.prototype.copy_puj7f4$ = function (decl, instance) {
    return new SwaggerArgument(decl === void 0 ? this.decl : decl, instance === void 0 ? this.instance : instance);
  };
  SwaggerArgument.prototype.toString = function () {
    return 'SwaggerArgument(decl=' + Kotlin.toString(this.decl) + (', instance=' + Kotlin.toString(this.instance)) + ')';
  };
  SwaggerArgument.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.decl) | 0;
    result = result * 31 + Kotlin.hashCode(this.instance) | 0;
    return result;
  };
  SwaggerArgument.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.decl, other.decl) && Kotlin.equals(this.instance, other.instance)))));
  };
  function toKotlinType($receiver) {
    return toKotlinType_0($receiver.type);
  }
  function toKotlinType_0($receiver) {
    if (Kotlin.isType($receiver, SwaggerModel$OptionalType))
      return toKotlinType($receiver.type) + '?';
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
      return 'List<' + toKotlinType($receiver.items) + '>';
    else if (Kotlin.isType($receiver, SwaggerModel$ObjType))
      return $receiver.guessName;
    else if (Kotlin.isType($receiver, SwaggerModel$VoidType))
      return 'Unit';
    else {
      throw IllegalStateException_init(("Unsupported '" + $receiver + "' class=" + Kotlin.getKClassFromExpression($receiver)).toString());
    }
  }
  function toKotlinDefault$lambda(this$toKotlinDefault, closure$default, closure$typed) {
    return function ($receiver) {
      toKotlinDefault_1($receiver, this$toKotlinDefault, closure$default, closure$typed);
      return Unit;
    };
  }
  function toKotlinDefault($receiver, default_0, typed, indentation) {
    if (indentation === void 0)
      indentation = 0;
    return indentString(indentation, toKotlinDefault$lambda($receiver, default_0, typed));
  }
  function toKotlinDefault_0($receiver, type, default_0, typed) {
    toKotlinDefault_1($receiver, type != null ? type.type : null, default_0, typed);
  }
  function toKotlinDefault$lambda$lambda$lambda(closure$prop, closure$rdefault, closure$typed) {
    return function ($receiver) {
      toKotlinDefault_0($receiver, closure$prop, closure$rdefault, closure$typed);
      return Unit;
    };
  }
  function toKotlinDefault$lambda$lambda$lambda_0(closure$prop, closure$rdefault, closure$typed) {
    return function ($receiver) {
      toKotlinDefault_0($receiver, closure$prop, closure$rdefault, closure$typed);
      return Unit;
    };
  }
  function toKotlinDefault_1($receiver, type, default_0, typed) {
    var $receiver_0 = package$util.DynamicAccess;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (type == null) {
      $receiver.line_61zpoe$('null');
    }
     else if (Kotlin.isType(type, SwaggerModel$OptionalType)) {
      $receiver.line_61zpoe$('null');
    }
     else if (Kotlin.isType(type, SwaggerModel$BaseStringType)) {
      Kotlin.isType(default_0, SwaggerModel$Identifier) ? $receiver.line_61zpoe$(default_0.id) : $receiver.line_61zpoe$(quote((tmp$ = default_0 != null ? default_0.toString() : null) != null ? tmp$ : ''));
    }
     else if (Kotlin.isType(type, SwaggerModel$DateType)) {
      $receiver.line_61zpoe$('Date()');
    }
     else if (Kotlin.isType(type, SwaggerModel$DateTimeType)) {
      $receiver.line_61zpoe$('Date()');
    }
     else if (Kotlin.isType(type, SwaggerModel$Int32Type)) {
      $receiver.line_61zpoe$(((tmp$_0 = $receiver_0.get_tryInt_mzud1t$(default_0)) != null ? tmp$_0 : 0).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$DoubleType)) {
      $receiver.line_61zpoe$(((tmp$_1 = $receiver_0.get_tryDouble_mzud1t$(default_0)) != null ? tmp$_1 : 0.0).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$Int64Type)) {
      $receiver.line_61zpoe$(((tmp$_2 = $receiver_0.get_tryLong_mzud1t$(default_0)) != null ? tmp$_2 : L0).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$BoolType)) {
      $receiver.line_61zpoe$(((tmp$_3 = $receiver_0.get_tryBool_mzud1t$(default_0)) != null ? tmp$_3 : false).toString());
    }
     else if (Kotlin.isType(type, SwaggerModel$ArrayType)) {
      $receiver.line_61zpoe$('listOf()');
    }
     else if (Kotlin.isType(type, SwaggerModel$MapLikeGenType))
      if (typed && Kotlin.isType(type, SwaggerModel$NamedObject)) {
        var def = type;
        $receiver.line_61zpoe$(type.name + '(');
        $receiver._indent();
        try {
          var tmp$_4;
          var props = toList_0(def.fields.entries);
          tmp$_4 = get_metaIter(props).iterator();
          while (tmp$_4.hasNext()) {
            var tmp$_5 = tmp$_4.next();
            var info = tmp$_5.component1()
            , entry = tmp$_5.component2();
            var key = entry.key;
            var prop = entry.value;
            var rdefault = Kotlin.isType(default_0, Map) ? $receiver_0.get_s2h60f$(default_0, key) : null;
            $receiver.line_61zpoe$(key + ' = ' + indentStringHere($receiver, toKotlinDefault$lambda$lambda$lambda(prop, rdefault, typed)) + get_optComma(info));
          }
        }
        finally {
          $receiver._unindent();
        }
        $receiver.line_61zpoe$(')');
      }
       else {
        $receiver.line_61zpoe$('mapOf(');
        $receiver._indent();
        try {
          var tmp$_6;
          tmp$_6 = get_metaIter(type.fields.entries).iterator();
          while (tmp$_6.hasNext()) {
            var tmp$_7 = tmp$_6.next();
            var info_0 = tmp$_7.component1()
            , entry_0 = tmp$_7.component2();
            var key_0 = entry_0.key;
            var prop_0 = entry_0.value;
            var rdefault_0 = Kotlin.isType(default_0, Map) ? $receiver_0.get_s2h60f$(default_0, key_0) : null;
            $receiver.line_61zpoe$(quote(key_0) + ' to ' + indentStringHere($receiver, toKotlinDefault$lambda$lambda$lambda_0(prop_0, rdefault_0, typed)) + get_optComma(info_0));
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
  }
  function findField($receiver, name, path, matchType) {
    if (path === void 0) {
      path = emptyList();
    }
    if (matchType === void 0)
      matchType = null;
    return findField_0($receiver.type, name, path, matchType);
  }
  function findField_0($receiver, name, path, matchType) {
    if (path === void 0) {
      path = emptyList();
    }
    if (matchType === void 0)
      matchType = null;
    var tmp$;
    if (Kotlin.isType($receiver, SwaggerModel$MapLikeGenType)) {
      tmp$ = $receiver.fields.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_0 = tmp$.next();
        var fname = tmp$_0.key;
        var field = tmp$_0.value;
        var fpath = plus_0(path, fname);
        if (equals(fname, name) && (matchType == null || matchType.isInstance_s8jyv4$(field.type)))
          return fpath;
        var res = findField_0(field.type, name, fpath);
        if (res != null)
          return res;
      }
    }
    return null;
  }
  function findField_1($receiver, names, matchType) {
    if (matchType === void 0)
      matchType = null;
    var tmp$, tmp$_0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var param = tmp$.next();
      for (tmp$_0 = 0; tmp$_0 !== names.length; ++tmp$_0) {
        var name = names[tmp$_0];
        var path = findField(param.schema, name, void 0, matchType);
        if (path != null) {
          return new FieldInParamRef(param, path);
        }
      }
    }
    return null;
  }
  function CompatibleLoginRoute(methodModel, tokenPath, username, password) {
    this.methodModel = methodModel;
    this.tokenPath = tokenPath;
    this.username = username;
    this.password = password;
  }
  CompatibleLoginRoute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompatibleLoginRoute',
    interfaces: []
  };
  function FieldInParamRef(param, path) {
    this.param = param;
    this.path = path;
    this.fullPathParts = plus(listOf(this.param.name), this.path);
    this.fullPath = joinToString(this.fullPathParts, '.');
  }
  FieldInParamRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FieldInParamRef',
    interfaces: []
  };
  FieldInParamRef.prototype.component1 = function () {
    return this.param;
  };
  FieldInParamRef.prototype.component2 = function () {
    return this.path;
  };
  FieldInParamRef.prototype.copy_mv6b9n$ = function (param, path) {
    return new FieldInParamRef(param === void 0 ? this.param : param, path === void 0 ? this.path : path);
  };
  FieldInParamRef.prototype.toString = function () {
    return 'FieldInParamRef(param=' + Kotlin.toString(this.param) + (', path=' + Kotlin.toString(this.path)) + ')';
  };
  FieldInParamRef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.param) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    return result;
  };
  FieldInParamRef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.param, other.param) && Kotlin.equals(this.path, other.path)))));
  };
  function tryGetCompatibleLoginRoute($receiver) {
    var method = $receiver;
    var path = $receiver.path;
    if (endsWith(path, '/login')) {
      var tokenPath = findField_0(method.responseType, 'token');
      if (tokenPath != null) {
        var username = findField_1($receiver.parameters, ['username', 'name', 'email', 'user'], getKClass(SwaggerModel$BaseStringType));
        var password = findField_1($receiver.parameters, ['password', 'pass'], getKClass(SwaggerModel$BaseStringType));
        return new CompatibleLoginRoute(method, tokenPath, username, password);
      }
    }
    return null;
  }
  function buildDepsFromModel($receiver) {
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
    var element_5 = AuthFeature_getInstance();
    out.add_11rb$(element_5);
    if (!model.securityDefinitions.isEmpty()) {
      var element_6 = AuthJwtFeature_getInstance();
      out.add_11rb$(element_6);
    }
    return out;
  }
  function Dynamic() {
    Dynamic_instance = this;
  }
  Dynamic.prototype.invoke_2fhnx7$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Dynamic.invoke_2fhnx7$', wrapFunction(function () {
    var util = _.io.ktor.start.util;
    return function (callback) {
      return callback(util.DynamicAccess);
    };
  }));
  Dynamic.prototype.invoke_2rby82$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Dynamic.invoke_2rby82$', wrapFunction(function () {
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
  DynamicAccess.prototype.invoke_2fhnx7$ = defineInlineFunction('ktor-generator.io.ktor.start.util.DynamicAccess.invoke_2fhnx7$', wrapFunction(function () {
    var util = _.io.ktor.start.util;
    return function (callback) {
      return callback(util.DynamicAccess);
    };
  }));
  DynamicAccess.prototype.get_list_mzud1t$ = function ($receiver) {
    if (Kotlin.isType($receiver, List))
      return $receiver;
    else if (Kotlin.isType($receiver, Iterable))
      return toList_0($receiver);
    else {
      return emptyList();
    }
  };
  DynamicAccess.prototype.get_keys_mzud1t$ = function ($receiver) {
    if (Kotlin.isType($receiver, Map))
      return toList_0($receiver.keys);
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
    return typeof key === 'number' ? this.get_v36bcf$($receiver, key) : Kotlin.isType(key, List) ? this.get_ijrmxw$($receiver, this.get_strList_mzud1t$(key)) : this.get_s2h60f$($receiver, this.get_str_mzud1t$(key));
  };
  DynamicAccess.prototype.get_ijrmxw$ = function ($receiver, keys) {
    var tmp$;
    var obj = $receiver;
    tmp$ = keys.iterator();
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      obj = this.get_s2h60f$(obj, key);
    }
    return obj;
  };
  DynamicAccess.prototype.set_7kor20$ = function ($receiver, keys, value) {
    var basePath = dropLast(keys, 1);
    var container = this.get_ijrmxw$($receiver, basePath);
    this.set_badpoj$(container, last(keys), value);
  };
  DynamicAccess.prototype.set_badpoj$ = function ($receiver, key, value) {
    var tmp$;
    if (Kotlin.isType($receiver, MutableMap))
      (Kotlin.isType(tmp$ = $receiver, MutableMap) ? tmp$ : throwCCE()).put_xwzc9p$(key, value);
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
  DynamicAccess.prototype.get_tryNumber_mzud1t$ = function ($receiver) {
    if ($receiver == null)
      return null;
    else if (Kotlin.isNumber($receiver))
      return $receiver;
    else
      return this.toDoubleOrNull_mzud1t$(toString($receiver));
  };
  DynamicAccess.prototype.get_tryInt_mzud1t$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.get_tryNumber_mzud1t$($receiver)) != null ? numberToInt(tmp$) : null;
  };
  DynamicAccess.prototype.get_tryDouble_mzud1t$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.get_tryNumber_mzud1t$($receiver)) != null ? numberToDouble(tmp$) : null;
  };
  DynamicAccess.prototype.get_tryLong_mzud1t$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.get_tryNumber_mzud1t$($receiver)) != null ? numberToLong(tmp$) : null;
  };
  DynamicAccess.prototype.get_tryBool_mzud1t$ = function ($receiver) {
    if (typeof $receiver === 'boolean')
      return $receiver;
    else if (typeof $receiver === 'string')
      return !(equals($receiver, '') || equals($receiver, 'false') || equals($receiver, '0'));
    else
      return this.get_tryInt_mzud1t$($receiver);
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
  function FileMode(mode) {
    this.mode = mode;
  }
  FileMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FileMode',
    interfaces: []
  };
  function FileMode_init(octalMode, $this) {
    $this = $this || Object.create(FileMode.prototype);
    FileMode.call($this, toInt(octalMode, 8));
    return $this;
  }
  FileMode.prototype.component1 = function () {
    return this.mode;
  };
  FileMode.prototype.copy_za3lpa$ = function (mode) {
    return new FileMode(mode === void 0 ? this.mode : mode);
  };
  FileMode.prototype.toString = function () {
    return 'FileMode(mode=' + Kotlin.toString(this.mode) + ')';
  };
  FileMode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    return result;
  };
  FileMode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.mode, other.mode))));
  };
  function encodeURIComponent($receiver) {
    var $receiver_0 = StringBuilder_init_0();
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var v = unboxChar(tmp$.next());
      switch (v) {
        case 38:
        case 32:
        case 61:
        case 47:
          $receiver_0.append_s8itvh$(37);
          $receiver_0.append_gw00v9$(padStart(toString_0(v | 0, 16), 2, 48));
          break;
        default:$receiver_0.append_s8itvh$(v);
          break;
      }
    }
    return $receiver_0.toString();
  }
  function formUrlDecode($receiver) {
    var $receiver_0 = split($receiver, Kotlin.charArrayOf(38));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
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
    var destination_0 = LinkedHashMap_init_0();
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
    if (it.second.length > 0)
      return encodeURIComponent(it.first) + '=' + encodeURIComponent(it.second);
    else
      return encodeURIComponent(it.first);
  }
  function formUrlEncode($receiver) {
    return joinToString($receiver, '&', void 0, void 0, void 0, void 0, formUrlEncode$lambda);
  }
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
  Json.prototype.decode_zdjs8x$ = function ($receiver) {
    var tmp$;
    var ic = unboxChar($receiver.skipSpaces().read());
    switch (ic) {
      case 123:
        var out = LinkedHashMap_init_0();
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
    var $receiver = StringBuilder_init_0();
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
      var entries = obj.entries;
      if (entries.isEmpty()) {
        b.inline_61zpoe$('{}');
      }
       else {
        b.line_61zpoe$('{');
        b._indent();
        try {
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
    }
     else if (Kotlin.isType(obj, Iterable)) {
      var entries_0 = toList_0(obj);
      if (entries_0.isEmpty()) {
        b.inline_61zpoe$('[]');
      }
       else {
        b.line_61zpoe$('[');
        b._indent();
        try {
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
    }
     else if (typeof obj === 'string')
      b.inline_61zpoe$(this.encodeString_1(obj));
    else if (Kotlin.isNumber(obj))
      b.inline_61zpoe$(toString(obj));
    else if (Kotlin.isType(obj, CustomJsonSerializer)) {
      var $receiver = StringBuilder_init_0();
      obj.encodeToJson_irqrwq$($receiver);
      b.inline_61zpoe$($receiver.toString());
    }
     else {
      throw IllegalStateException_init(("JSON: Don't know how to serialize " + toString(obj)).toString());
    }
  };
  Json.prototype.encodeString_1 = function (str) {
    var $receiver = StringBuilder_init_0();
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
    return new MetaListIterable(toList_0($receiver));
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
  function get_optComma($receiver) {
    return $receiver.isLast ? '' : ',';
  }
  function Stack() {
    this.items_0 = ArrayList_init();
  }
  Object.defineProperty(Stack.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Stack.prototype.pop = function () {
    return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
  };
  Stack.prototype.peek = function () {
    return this.items_0.get_za3lpa$(this.items_0.size - 1 | 0);
  };
  Stack.prototype.push_11rb$ = function (value) {
    return this.items_0.add_11rb$(value);
  };
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: []
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
  StrReader.prototype.slice_o14v8n$ = defineInlineFunction('ktor-generator.io.ktor.start.util.StrReader.slice_o14v8n$', function (action) {
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
  StrReader.prototype.skipWhile_akknk2$ = defineInlineFunction('ktor-generator.io.ktor.start.util.StrReader.skipWhile_akknk2$', function (filter) {
    while (this.hasMore && filter(this.peekChar()))
      this.readChar();
  });
  StrReader.prototype.readWhile_akknk2$ = defineInlineFunction('ktor-generator.io.ktor.start.util.StrReader.readWhile_akknk2$', wrapFunction(function () {
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
    var out = StringBuilder_init_0();
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
      throw RuntimeException_init("String literal not closed! '" + $receiver.str + "'");
    }
    return out.toString();
  }
  function generate(subject, blocks, config, continuation) {
    if (config === void 0)
      config = null;
    return generate_0(subject, copyToArray(toList_0(blocks)).slice(), config, continuation);
  }
  function Coroutine$generate(subject_0, blocks_0, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_2 = void 0;
    this.local$out = void 0;
    this.local$file = void 0;
    this.local$subject = subject_0;
    this.local$blocks = blocks_0;
    this.local$config = config_0;
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
            if (this.local$config === void 0)
              this.local$config = null;
            var tmp$, tmp$_0, tmp$_1;
            this.local$out = LinkedHashMap_init_0();
            var bb = new BlockBuilder(this.local$subject, (tmp$_0 = this.local$config != null ? this.local$config : Kotlin.isType(tmp$ = this.local$subject, BlockBuilder$Config) ? tmp$ : null) != null ? tmp$_0 : new BlockBuilder$Config());
            for (tmp$_1 = 0; tmp$_1 !== this.local$blocks.length; ++tmp$_1) {
              var block = this.local$blocks[tmp$_1];
              bb.visit_z5skon$(block);
            }

            this.local$tmp$_2 = bb.files.entries.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$_2.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var tmp$_2 = this.local$tmp$_2.next();
            this.local$file = tmp$_2.key;
            var gen = tmp$_2.value;
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
  function generate_0(subject_0, blocks_0, config_0, continuation_0, suspended) {
    var instance = new Coroutine$generate(subject_0, blocks_0, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
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
  function BlockBuilder(subject, config) {
    this.subject = subject;
    this.config = config;
    this.$delegate_ts3nbg$_0 = new Extra$Mixin();
    this.blockInstances = LinkedHashMap_init_0();
    this.files = LinkedHashMap_init_0();
    this.currentBlock = null;
    this.visited_7kwj06$_0 = HashSet_init();
  }
  function BlockBuilder$Config() {
  }
  BlockBuilder$Config.prototype.transform_66iv3j$ = function (data, charset) {
    return data;
  };
  BlockBuilder$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
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
  function BlockBuilder$fileText$lambda(closure$callback_0, this$BlockBuilder_0, closure$charset_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BlockBuilder$fileText$lambda(closure$callback_0, this$BlockBuilder_0, closure$charset_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BlockBuilder.prototype.fileText_6jjb1r$ = function (name, charset, mode, callback) {
    if (charset === void 0)
      charset = UTF8_getInstance();
    if (mode === void 0)
      mode = FileMode_init('644');
    this.fileBinary_z1oxai$(name, charset, mode, BlockBuilder$fileText$lambda(callback, this, charset));
  };
  BlockBuilder.prototype.expandTabs_44n53b$_0 = function ($receiver) {
    return replace($receiver, '\t', '    ');
  };
  function Coroutine$BlockBuilder$fileBinary$lambda(closure$name_0, this$BlockBuilder_0, closure$callback_0, closure$charset_0, closure$mode_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$name = closure$name_0;
    this.local$this$BlockBuilder = this$BlockBuilder_0;
    this.local$closure$callback = closure$callback_0;
    this.local$closure$charset = closure$charset_0;
    this.local$closure$mode = closure$mode_0;
    this.local$tmp$ = void 0;
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
            this.local$tmp$ = this.local$this$BlockBuilder.config;
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.local$tmp$.transform_66iv3j$(this.result_0, this.local$closure$charset);
            return new FileResult(this.local$closure$name, tmp$, this.local$closure$mode, this.local$closure$charset);
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
  function BlockBuilder$fileBinary$lambda(closure$name_0, this$BlockBuilder_0, closure$callback_0, closure$charset_0, closure$mode_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BlockBuilder$fileBinary$lambda(closure$name_0, this$BlockBuilder_0, closure$callback_0, closure$charset_0, closure$mode_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BlockBuilder.prototype.fileBinary_z1oxai$ = function (name, charset, mode, callback) {
    if (charset === void 0)
      charset = null;
    if (mode === void 0)
      mode = FileMode_init('644');
    this.files.put_xwzc9p$(name, BlockBuilder$fileBinary$lambda(name, this, callback, charset, mode));
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
  ByteArrayOutputStream.prototype.byte_0 = function (v) {
    var tmp$;
    this.data_0[tmp$ = this.pos_0, this.pos_0 = tmp$ + 1 | 0, tmp$] = numberToByte(v);
  };
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
  ByteArrayOutputStream.prototype.build_xuyaid$ = defineInlineFunction('ktor-generator.io.ktor.start.util.ByteArrayOutputStream.build_xuyaid$', function (builder) {
    builder(this);
    return this.toByteArray();
  });
  ByteArrayOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayOutputStream',
    interfaces: []
  };
  var buildByteArray = defineInlineFunction('ktor-generator.io.ktor.start.util.buildByteArray_xuyaid$', wrapFunction(function () {
    var ByteArrayOutputStream_init = _.io.ktor.start.util.ByteArrayOutputStream;
    return function (builder) {
      var $this = new ByteArrayOutputStream_init();
      builder($this);
      return $this.toByteArray();
    };
  }));
  var buildList = defineInlineFunction('ktor-generator.io.ktor.start.util.buildList_spr6vj$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function (callback) {
      var $receiver = ArrayList_init();
      callback($receiver);
      return $receiver;
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
    var $receiver_0 = StringBuilder_init_0();
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
  Extra$Property.prototype.getValue_m0xvcc$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Extra.Property.getValue_m0xvcc$', wrapFunction(function () {
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
  Extra$Property.prototype.setValue_jwwfbt$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Extra.Property.setValue_jwwfbt$', wrapFunction(function () {
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
  Extra$PropertyThis.prototype.getValue_tv2abg$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Extra.PropertyThis.getValue_tv2abg$', wrapFunction(function () {
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
  Extra$PropertyThis.prototype.setValue_9wlt1k$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Extra.PropertyThis.setValue_9wlt1k$', wrapFunction(function () {
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
      $receiver.extra = LinkedHashMap_init_0();
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
    var out = StringBuilder_init(data.length * 2 | 0);
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
  ID.prototype.normalizeMethodName_mhpeer$ = function (str) {
    return this.normalizeMethodName_61zpoe$(joinToString(str, '/'));
  };
  ID.prototype.normalizeClassName_mhpeer$ = function (str) {
    return this.normalizeClassName_61zpoe$(joinToString(str, '/'));
  };
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
    this.actions = actions;
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
  Indenter$Companion.prototype.gen_yot30u$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.Companion.gen_yot30u$', wrapFunction(function () {
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
    this.actions.add_11rb$(new Indenter$Action$Inline(str));
    return this;
  };
  Indenter.prototype.line_oryfgh$ = function (indenter) {
    this.actions.addAll_brywnq$(indenter.actions);
    return this;
  };
  Indenter.prototype.line_61zpoe$ = function (str) {
    this.actions.add_11rb$(new Indenter$Action$Line(str));
    return this;
  };
  Indenter.prototype.line_pdl1vj$ = function (str) {
    if (str != null)
      this.line_61zpoe$(str);
  };
  Indenter.prototype.mark_za3rmp$ = function (data) {
    this.actions.add_11rb$(new Indenter$Action$Marker(data));
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
    this.actions.add_11rb$(new Indenter$Action$LineDeferred(Indenter$linedeferred$lambda(init)));
    return this;
  };
  Indenter.prototype.line_a4mwiz$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.line_a4mwiz$', function (str, callback) {
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
  Indenter.prototype.line_slzebz$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.line_slzebz$', function (str, afterOpen, afterClose, callback) {
    if (afterOpen === void 0)
      afterOpen = '';
    if (afterClose === void 0)
      afterClose = '';
    var rafter = afterOpen.length === 0 ? '' : ' ' + afterOpen;
    this.line_61zpoe$(str.length === 0 ? '{' + rafter : str + ' {' + rafter);
    this._indent();
    try {
      callback();
    }
    finally {
      this._unindent();
    }
    this;
    this.line_61zpoe$('}' + afterClose);
    return this;
  });
  Indenter.prototype.lineNoOpen_a4mwiz$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.lineNoOpen_a4mwiz$', function (str, callback) {
    this.line_61zpoe$(str);
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
  Indenter.prototype.indent_o14v8n$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.indent_o14v8n$', function (callback) {
    this._indent();
    try {
      callback();
    }
    finally {
      this._unindent();
    }
    return this;
  });
  Indenter.prototype.indent_n53o35$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.indent_n53o35$', function (count, callback) {
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
      this.actions.add_11rb$(Indenter$Action$Indent_getInstance());
    this.indentLevel = this.indentLevel + count | 0;
  };
  Indenter.prototype._unindent_za3lpa$ = function (count) {
    for (var v = 0; v < count; v++)
      this.actions.add_11rb$(Indenter$Action$Unindent_getInstance());
    this.indentLevel = this.indentLevel - count | 0;
  };
  function Indenter$IndenterEvaluator(markHandler, indentEmptyLines, doIndent) {
    this.markHandler = markHandler;
    this.indentEmptyLines = indentEmptyLines;
    this.doIndent = doIndent;
    this.out = StringBuilder_init_0();
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
            if (unboxChar(toBoxedChar(element)) === 10)
              count = count + 1 | 0;
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
        this.eval_j0l46$(action.callback().actions);
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
    $receiver.eval_j0l46$(this.actions);
    return $receiver.out.toString();
  };
  Indenter.prototype.appending_a4mwiz$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.appending_a4mwiz$', wrapFunction(function () {
    var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
    var Indenter$Action$Line = _.io.ktor.start.util.Indenter.Action.Line;
    var equals = Kotlin.equals;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (text, callback) {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = Kotlin.isType(tmp$ = lastOrNull(this.actions), Indenter$Action$Line) ? tmp$ : null) != null)
        tmp$_1 = tmp$_0;
      else {
        throw IllegalStateException_init('Expected a line'.toString());
      }
      var lastAction = tmp$_1;
      if (!equals(lastAction.str, '}')) {
        throw IllegalStateException_init("Expected a '}'".toString());
      }
      this.actions.removeAt_za3lpa$(this.actions.size - 1 | 0);
      var str = '} ' + text;
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
      this;
    };
  }));
  Indenter.prototype.invoke_44doqu$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.invoke_44doqu$', function ($receiver, suffix, callback) {
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
  Indenter.prototype.unaryPlus_pdl1vz$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.unaryPlus_pdl1vz$', function ($receiver) {
    return this.line_61zpoe$($receiver);
  });
  Indenter.prototype.xml_79xod4$ = defineInlineFunction('ktor-generator.io.ktor.start.util.Indenter.xml_79xod4$', wrapFunction(function () {
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
    $receiver.actions.add_11rb$(Indenter$Action$EmptyLineOnce_getInstance());
  }
  function SEPARATOR($receiver, callback) {
    get_SEPARATOR($receiver);
    callback($receiver);
  }
  function XmlIndenter(indenter) {
    this.indenter = indenter;
  }
  XmlIndenter.prototype.invoke_79xod4$ = defineInlineFunction('ktor-generator.io.ktor.start.util.XmlIndenter.invoke_79xod4$', wrapFunction(function () {
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
  function indentString(level, callback) {
    var $receiver = Indenter$Companion_getInstance().invoke_yot30u$(indentString$lambda(level, callback)).toString();
    var tmp$;
    return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
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
  function stripLineBreaks($receiver) {
    return joinToString(split($receiver, Kotlin.charArrayOf(10)), ' ');
  }
  function escape($receiver) {
    var tmp$;
    var out = StringBuilder_init_0();
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
    var out = StringBuilder_init_0();
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
    this.files = LinkedHashMap_init_0();
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
  var buildZip = defineInlineFunction('ktor-generator.io.ktor.start.util.buildZip_oi1qpb$', wrapFunction(function () {
    var ZipBuilder_init = _.io.ktor.start.util.ZipBuilder;
    return function (generate) {
      var zb = new ZipBuilder_init();
      generate(zb);
      return zb.toByteArray();
    };
  }));
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
  var package$io = _.io || (_.io = {});
  var package$dahgan = package$io.dahgan || (package$io.dahgan = {});
  Object.defineProperty(package$dahgan, 'Yaml', {
    get: Yaml_getInstance
  });
  Object.defineProperty(package$dahgan, 'YamlSpec', {
    get: YamlSpec_getInstance
  });
  YamlDecoder.prototype.Decoder = YamlDecoder$Decoder;
  YamlDecoder.prototype.UniChar = YamlDecoder$UniChar;
  Object.defineProperty(YamlDecoder$UTF32Decoder, 'Companion', {
    get: YamlDecoder$UTF32Decoder$Companion_getInstance
  });
  YamlDecoder.prototype.UTF32Decoder = YamlDecoder$UTF32Decoder;
  Object.defineProperty(YamlDecoder$UTF16Decoder, 'Companion', {
    get: YamlDecoder$UTF16Decoder$Companion_getInstance
  });
  YamlDecoder.prototype.UTF16Decoder = YamlDecoder$UTF16Decoder;
  YamlDecoder.prototype.UTF8Decoder = YamlDecoder$UTF8Decoder;
  Object.defineProperty(YamlDecoder$Encoding, 'UTF8', {
    get: YamlDecoder$Encoding$UTF8_getInstance
  });
  Object.defineProperty(YamlDecoder$Encoding, 'UTF16LE', {
    get: YamlDecoder$Encoding$UTF16LE_getInstance
  });
  Object.defineProperty(YamlDecoder$Encoding, 'UTF16BE', {
    get: YamlDecoder$Encoding$UTF16BE_getInstance
  });
  Object.defineProperty(YamlDecoder$Encoding, 'UTF32LE', {
    get: YamlDecoder$Encoding$UTF32LE_getInstance
  });
  Object.defineProperty(YamlDecoder$Encoding, 'UTF32BE', {
    get: YamlDecoder$Encoding$UTF32BE_getInstance
  });
  YamlDecoder.prototype.Encoding = YamlDecoder$Encoding;
  Object.defineProperty(YamlDecoder$Stream, 'Companion', {
    get: YamlDecoder$Stream$Companion_getInstance
  });
  YamlDecoder.prototype.Stream = YamlDecoder$Stream;
  Object.defineProperty(YamlDecoder$ByteStream, 'Companion', {
    get: YamlDecoder$ByteStream$Companion_getInstance
  });
  YamlDecoder.prototype.ByteStream = YamlDecoder$ByteStream;
  YamlDecoder.prototype.PushedStream = YamlDecoder$PushedStream;
  Object.defineProperty(package$dahgan, 'YamlDecoder', {
    get: YamlDecoder_getInstance
  });
  Object.defineProperty(YamlParser$Chomp, 'Strip', {
    get: YamlParser$Chomp$Strip_getInstance
  });
  Object.defineProperty(YamlParser$Chomp, 'Clip', {
    get: YamlParser$Chomp$Clip_getInstance
  });
  Object.defineProperty(YamlParser$Chomp, 'Keep', {
    get: YamlParser$Chomp$Keep_getInstance
  });
  Object.defineProperty(YamlParser$Chomp, 'Companion', {
    get: YamlParser$Chomp$Companion_getInstance
  });
  YamlParser.Chomp = YamlParser$Chomp;
  Object.defineProperty(YamlParser$Code, 'Bom', {
    get: YamlParser$Code$Bom_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Text', {
    get: YamlParser$Code$Text_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Meta', {
    get: YamlParser$Code$Meta_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Break', {
    get: YamlParser$Code$Break_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'LineFeed', {
    get: YamlParser$Code$LineFeed_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'LineFold', {
    get: YamlParser$Code$LineFold_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Indicator', {
    get: YamlParser$Code$Indicator_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'White', {
    get: YamlParser$Code$White_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Indent', {
    get: YamlParser$Code$Indent_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'DirectivesEnd', {
    get: YamlParser$Code$DirectivesEnd_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'DocumentEnd', {
    get: YamlParser$Code$DocumentEnd_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginEscape', {
    get: YamlParser$Code$BeginEscape_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndEscape', {
    get: YamlParser$Code$EndEscape_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginComment', {
    get: YamlParser$Code$BeginComment_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndComment', {
    get: YamlParser$Code$EndComment_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginDirective', {
    get: YamlParser$Code$BeginDirective_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndDirective', {
    get: YamlParser$Code$EndDirective_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginTag', {
    get: YamlParser$Code$BeginTag_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndTag', {
    get: YamlParser$Code$EndTag_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginHandle', {
    get: YamlParser$Code$BeginHandle_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndHandle', {
    get: YamlParser$Code$EndHandle_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginAnchor', {
    get: YamlParser$Code$BeginAnchor_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndAnchor', {
    get: YamlParser$Code$EndAnchor_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginProperties', {
    get: YamlParser$Code$BeginProperties_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndProperties', {
    get: YamlParser$Code$EndProperties_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginAlias', {
    get: YamlParser$Code$BeginAlias_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndAlias', {
    get: YamlParser$Code$EndAlias_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginScalar', {
    get: YamlParser$Code$BeginScalar_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndScalar', {
    get: YamlParser$Code$EndScalar_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginSequence', {
    get: YamlParser$Code$BeginSequence_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndSequence', {
    get: YamlParser$Code$EndSequence_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginMapping', {
    get: YamlParser$Code$BeginMapping_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndMapping', {
    get: YamlParser$Code$EndMapping_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginPair', {
    get: YamlParser$Code$BeginPair_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndPair', {
    get: YamlParser$Code$EndPair_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginNode', {
    get: YamlParser$Code$BeginNode_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndNode', {
    get: YamlParser$Code$EndNode_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginDocument', {
    get: YamlParser$Code$BeginDocument_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndDocument', {
    get: YamlParser$Code$EndDocument_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'BeginStream', {
    get: YamlParser$Code$BeginStream_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'EndStream', {
    get: YamlParser$Code$EndStream_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Error', {
    get: YamlParser$Code$Error_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Unparsed', {
    get: YamlParser$Code$Unparsed_getInstance
  });
  Object.defineProperty(YamlParser$Code, 'Detected', {
    get: YamlParser$Code$Detected_getInstance
  });
  YamlParser.Code = YamlParser$Code;
  Object.defineProperty(YamlParser$Context, 'BlockOut', {
    get: YamlParser$Context$BlockOut_getInstance
  });
  Object.defineProperty(YamlParser$Context, 'BlockIn', {
    get: YamlParser$Context$BlockIn_getInstance
  });
  Object.defineProperty(YamlParser$Context, 'FlowOut', {
    get: YamlParser$Context$FlowOut_getInstance
  });
  Object.defineProperty(YamlParser$Context, 'FlowIn', {
    get: YamlParser$Context$FlowIn_getInstance
  });
  Object.defineProperty(YamlParser$Context, 'BlockKey', {
    get: YamlParser$Context$BlockKey_getInstance
  });
  Object.defineProperty(YamlParser$Context, 'FlowKey', {
    get: YamlParser$Context$FlowKey_getInstance
  });
  Object.defineProperty(YamlParser$Context, 'Companion', {
    get: YamlParser$Context$Companion_getInstance
  });
  YamlParser.Context = YamlParser$Context;
  YamlParser.Reply = YamlParser$Reply;
  YamlParser$Result.Failed = YamlParser$Result$Failed;
  YamlParser$Result.Completed = YamlParser$Result$Completed;
  YamlParser$Result.More = YamlParser$Result$More;
  YamlParser.Result = YamlParser$Result;
  YamlParser.State = YamlParser$State;
  YamlParser.Token = YamlParser$Token;
  Object.defineProperty(YamlParser$Escapable, 'Companion', {
    get: YamlParser$Escapable$Companion_getInstance
  });
  YamlParser$Escapable.Code = YamlParser$Escapable$Code;
  YamlParser$Escapable.Text = YamlParser$Escapable$Text;
  YamlParser.Escapable = YamlParser$Escapable;
  YamlParser.Tokenizer = YamlParser$Tokenizer;
  YamlParser.PatternTokenizer = YamlParser$PatternTokenizer;
  YamlParser.ParserTokenizer = YamlParser$ParserTokenizer;
  Object.defineProperty(YamlParser, 'Companion', {
    get: YamlParser$Companion_getInstance
  });
  package$dahgan.YamlParser = YamlParser;
  var package$ktor = package$io.ktor || (package$io.ktor = {});
  var package$start = package$ktor.start || (package$ktor.start = {});
  package$start.BuildInfo = BuildInfo;
  package$start.FileContainer = FileContainer;
  package$start.add_z3whw5$ = add;
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
  Object.defineProperty(ProjectType, 'GradleKotlinDsl', {
    get: ProjectType$GradleKotlinDsl_getInstance
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
  Object.defineProperty(package$start, 'Versions', {
    get: Versions_getInstance
  });
  package$start.KtorVersion = KtorVersion;
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
  var package$client = package$features.client || (package$features.client = {});
  package$client.ClientEngine = ClientEngine;
  $$importsForInline$$['ktor-generator'] = _;
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
  Object.defineProperty(package$client, 'GsonClientFeature', {
    get: GsonClientFeature_getInstance
  });
  Object.defineProperty(package$client, 'LoggingClientFeature', {
    get: LoggingClientFeature_getInstance
  });
  Object.defineProperty(package$client, 'UserAgentClientFeature', {
    get: UserAgentClientFeature_getInstance
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
  Object.defineProperty(package$server, 'MustacheFeature', {
    get: MustacheFeature_getInstance
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
  Object.defineProperty(package$server, 'ThymeleafFeature', {
    get: ThymeleafFeature_getInstance
  });
  Object.defineProperty(package$server, 'VelocityFeature', {
    get: VelocityFeature_getInstance
  });
  Object.defineProperty(package$server, 'WebjarsFeature', {
    get: WebjarsFeature_getInstance
  });
  Object.defineProperty(package$server, 'WebsocketsFeature', {
    get: WebsocketsFeature_getInstance
  });
  var package$sockets = package$features.sockets || (package$features.sockets = {});
  Object.defineProperty(package$sockets, 'RawSocketsFeature', {
    get: RawSocketsFeature_getInstance
  });
  Object.defineProperty(package$sockets, 'RawSocketsTlsFeature', {
    get: RawSocketsTlsFeature_getInstance
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
  package$project.getAllReposToInclude_ark8iq$ = getAllReposToInclude;
  package$project.get_reposToInclude_v6fwbs$ = get_reposToInclude;
  package$project.get_compileDependencies_v6fwbs$ = get_compileDependencies;
  package$project.get_testDependencies_v6fwbs$ = get_testDependencies;
  package$project.addMavenRepository_zc4wmb$ = addMavenRepository;
  package$project.addMavenRepository_t4tb54$ = addMavenRepository_0;
  package$project.addCompileDependency_6b55lg$ = addCompileDependency;
  package$project.addTestDependency_6b55lg$ = addTestDependency;
  package$project.BuildFilesGradle = BuildFilesGradle;
  Object.defineProperty(package$project, 'BuildFilesMaven', {
    get: BuildFilesMaven_getInstance
  });
  Object.defineProperty(package$project, 'GitIgnoreFile', {
    get: GitIgnoreFile_getInstance
  });
  Object.defineProperty(package$project, 'LogBackXml', {
    get: LogBackXml_getInstance
  });
  Object.defineProperty(package$project, 'Properties', {
    get: Properties_getInstance
  });
  Object.defineProperty(ContentType, 'Companion', {
    get: ContentType$Companion_getInstance
  });
  var package$swagger = package$start.swagger || (package$start.swagger = {});
  package$swagger.ContentType = ContentType;
  JsonRule.RuleList = JsonRule$RuleList;
  JsonRule.MinMaxDouble = JsonRule$MinMaxDouble;
  JsonRule.MinMaxInt = JsonRule$MinMaxInt;
  JsonRule.MinInt = JsonRule$MinInt;
  JsonRule.MaxInt = JsonRule$MaxInt;
  JsonRule.MinMaxLength = JsonRule$MinMaxLength;
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
  JsonRule.RangeLength = JsonRule$RangeLength;
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
  package$swagger.JsonRule = JsonRule;
  package$swagger.get_propKt_qqpnji$ = get_propKt;
  package$swagger.toKotlin_fcw6hg$ = toKotlin;
  Object.defineProperty(SwaggerGenerator$Kind, 'INTERFACE', {
    get: SwaggerGenerator$Kind$INTERFACE_getInstance
  });
  Object.defineProperty(SwaggerGenerator$Kind, 'RAW', {
    get: SwaggerGenerator$Kind$RAW_getInstance
  });
  SwaggerGenerator.Kind = SwaggerGenerator$Kind;
  package$swagger.SwaggerGenerator = SwaggerGenerator;
  package$swagger.SwaggerGeneratorBase = SwaggerGeneratorBase;
  Object.defineProperty(package$swagger, 'SwaggerGeneratorCommon', {
    get: SwaggerGeneratorCommon_getInstance
  });
  Object.defineProperty(package$swagger, 'SwaggerGeneratorInterface', {
    get: SwaggerGeneratorInterface_getInstance
  });
  Object.defineProperty(package$swagger, 'SwaggerGeneratorRaw', {
    get: SwaggerGeneratorRaw_getInstance
  });
  SwaggerModel.Server = SwaggerModel$Server;
  SwaggerModel.ServerVariable = SwaggerModel$ServerVariable;
  SwaggerModel.InfoGenType = SwaggerModel$InfoGenType;
  SwaggerModel.GenType = SwaggerModel$GenType;
  SwaggerModel.BasePrimType = SwaggerModel$BasePrimType;
  SwaggerModel.BaseStringType = SwaggerModel$BaseStringType;
  SwaggerModel.Identifier = SwaggerModel$Identifier;
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
  SwaggerModel.ArrayType = SwaggerModel$ArrayType;
  SwaggerModel.OptionalType = SwaggerModel$OptionalType;
  SwaggerModel.MapLikeGenType = SwaggerModel$MapLikeGenType;
  SwaggerModel.NamedObject = SwaggerModel$NamedObject;
  SwaggerModel.ObjType = SwaggerModel$ObjType;
  SwaggerModel.Prop = SwaggerModel$Prop;
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
  SwaggerModel.ProcessedTag = SwaggerModel$ProcessedTag;
  SwaggerModel.PathMethodModel = SwaggerModel$PathMethodModel;
  SwaggerModel.PathModel = SwaggerModel$PathModel;
  SwaggerModel.SwaggerInfo = SwaggerModel$SwaggerInfo;
  SwaggerModel.Response = SwaggerModel$Response;
  SwaggerModel.TypeWithContentType = SwaggerModel$TypeWithContentType;
  Object.defineProperty(SwaggerModel$Companion.prototype, 'Versions', {
    get: SwaggerModel$Companion$Versions_getInstance
  });
  Object.defineProperty(SwaggerModel$Companion$SwVersion, 'V2', {
    get: SwaggerModel$Companion$SwVersion$V2_getInstance
  });
  Object.defineProperty(SwaggerModel$Companion$SwVersion, 'V3', {
    get: SwaggerModel$Companion$SwVersion$V3_getInstance
  });
  SwaggerModel$Companion.prototype.SwVersion = SwaggerModel$Companion$SwVersion;
  Object.defineProperty(SwaggerModel, 'Companion', {
    get: SwaggerModel$Companion_getInstance
  });
  SwaggerModel$ReferenceFinder.Result = SwaggerModel$ReferenceFinder$Result;
  SwaggerModel.ReferenceFinder = SwaggerModel$ReferenceFinder;
  SwaggerModel.TypeDef = SwaggerModel$TypeDef;
  package$swagger.SwaggerModel = SwaggerModel;
  package$swagger.constructDefinitions_5tkht2$ = constructDefinitions;
  package$swagger.toKotlin_1hnt3g$ = toKotlin_0;
  package$swagger.toKotlin_bnccq2$ = toKotlin_1;
  package$swagger.toDefaultUntyped_rwoh4e$ = toDefaultUntyped;
  package$swagger.SwaggerArguments = SwaggerArguments;
  package$swagger.SwaggerArgument = SwaggerArgument;
  package$swagger.toKotlinType_slggk6$ = toKotlinType;
  package$swagger.toKotlinType_61zbhy$ = toKotlinType_0;
  package$swagger.toKotlinDefault_rsshv6$ = toKotlinDefault;
  package$swagger.toKotlinDefault_bp1lbx$ = toKotlinDefault_0;
  package$swagger.toKotlinDefault_tv209j$ = toKotlinDefault_1;
  package$swagger.findField_uswiir$ = findField;
  package$swagger.findField_maqzn5$ = findField_0;
  package$swagger.findField_9maf73$ = findField_1;
  package$swagger.CompatibleLoginRoute = CompatibleLoginRoute;
  package$swagger.FieldInParamRef = FieldInParamRef;
  package$swagger.tryGetCompatibleLoginRoute_k01abz$ = tryGetCompatibleLoginRoute;
  package$swagger.buildDepsFromModel_5tkht2$ = buildDepsFromModel;
  var package$util = package$start.util || (package$start.util = {});
  Object.defineProperty(package$util, 'Dynamic', {
    get: Dynamic_getInstance
  });
  Object.defineProperty(package$util, 'DynamicAccess', {
    get: DynamicAccess_getInstance
  });
  package$util.FileMode_init_61zpoe$ = FileMode_init;
  package$util.FileMode = FileMode;
  package$util.encodeURIComponent_pdl1vz$ = encodeURIComponent;
  package$util.formUrlDecode_pdl1vz$ = formUrlDecode;
  package$util.formUrlEncode_ye33rp$ = formUrlEncode;
  package$util.formUrlEncode_jgmxsd$ = formUrlEncode_0;
  Object.defineProperty(package$util, 'Json', {
    get: Json_getInstance
  });
  package$util.CustomJsonSerializer = CustomJsonSerializer;
  package$util.toJsonUntyped_3huzfx$ = toJsonUntyped;
  package$util.MetaListIterable = MetaListIterable;
  package$util.get_metaIter_4mqhgw$ = get_metaIter;
  package$util.IteratorStepInfo = IteratorStepInfo;
  package$util.get_optComma_cbok15$ = get_optComma;
  package$util.Stack = Stack;
  package$util.StrReader = StrReader;
  package$util.readStringLit_4ve410$ = readStringLit;
  package$util.generate_59e3u8$ = generate;
  package$util.generate_etscoe$ = generate_0;
  package$util.BlockSlot = BlockSlot;
  SlotInstance.RenderBlock = SlotInstance$RenderBlock;
  package$util.SlotInstance = SlotInstance;
  package$util.FileResult = FileResult;
  BlockBuilder.Config = BlockBuilder$Config;
  package$util.BlockBuilder = BlockBuilder;
  package$util.Block = Block;
  package$util.ByteArrayOutputStream = ByteArrayOutputStream;
  package$util.buildByteArray_xuyaid$ = buildByteArray;
  package$util.buildList_spr6vj$ = buildList;
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
  package$util.stripLineBreaks_pdl1vz$ = stripLineBreaks;
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
  package$util.NewDateTime = NewDateTime;
  package$util.NewDateTime_s8cxhz$ = NewDateTime_0;
  package$util.get_time_t5kl13$ = get_time;
  package$util.get_fullYear_t5kl13$ = get_fullYear;
  package$util.get_month_t5kl13$ = get_month;
  package$util.get_date_t5kl13$ = get_date;
  package$util.get_hours_t5kl13$ = get_hours;
  package$util.get_minutes_t5kl13$ = get_minutes;
  package$util.get_seconds_t5kl13$ = get_seconds;
  ALL_SERVER_FEATURES = lazy(ALL_SERVER_FEATURES$lambda);
  ALL_CLIENT_FEATURES = lazy(ALL_CLIENT_FEATURES$lambda);
  ALL_FEATURES = listOf_0([CoreClientEngine_getInstance(), ApacheClientEngine_getInstance(), CioClientEngine_getInstance(), JettyClientEngine_getInstance(), MockClientEngine_getInstance(), AuthBasicClientFeature_getInstance(), GsonClientFeature_getInstance(), WebSocketClientFeature_getInstance(), LoggingClientFeature_getInstance(), UserAgentClientFeature_getInstance(), HtmlDslFeature_getInstance(), CssDslFeature_getInstance(), FreemarkerFeature_getInstance(), VelocityFeature_getInstance(), MustacheFeature_getInstance(), ThymeleafFeature_getInstance(), StaticContentFeature_getInstance(), AuthBasicFeature_getInstance(), AuthDigestFeature_getInstance(), AuthJwtFeature_getInstance(), AuthLdapFeature_getInstance(), AuthOauthFeature_getInstance(), AuthFeature_getInstance(), JsonGsonFeature_getInstance(), JsonJacksonFeature_getInstance(), LocationsFeature_getInstance(), MetricsFeature_getInstance(), SessionsFeature_getInstance(), CompressionFeature_getInstance(), CachingHeadersFeature_getInstance(), CallLoggingFeature_getInstance(), ConditionalHeadersFeature_getInstance(), CORSFeature_getInstance(), AutoHeadResponseFeature_getInstance(), DataConversionFeature_getInstance(), DefaultHeadersFeature_getInstance(), ForwardedHeaderSupportFeature_getInstance(), HSTSFeature_getInstance(), StatusPagesFeature_getInstance(), RoutingFeature_getInstance(), WebjarsFeature_getInstance(), ContentNegotiationFeature_getInstance(), HttpsRedirectFeature_getInstance(), ShutdownUrlFeature_getInstance(), WebsocketsFeature_getInstance(), RawSocketsFeature_getInstance(), PartialContentFeature_getInstance(), RawSocketsTlsFeature_getInstance()]);
  var $receiver = ALL_FEATURES;
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init(capacity);
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
  Kotlin.defineModule('ktor-generator', _);
  return _;
}));

//# sourceMappingURL=ktor-generator.js.map
