(function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Annotation = Kotlin.kotlin.Annotation;
  Experimental$Level.prototype = Object.create(Enum.prototype);
  Experimental$Level.prototype.constructor = Experimental$Level;
  Experimental$Impact.prototype = Object.create(Enum.prototype);
  Experimental$Impact.prototype.constructor = Experimental$Impact;
  function Experimental(level, changesMayBreak) {
    if (level === void 0)
      level = Experimental$Level$ERROR_getInstance();
    if (changesMayBreak === void 0)
      changesMayBreak = Experimental$Impact;
    this.level = level;
    this.changesMayBreak = changesMayBreak;
  }
  function Experimental$Level(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Experimental$Level_initFields() {
    Experimental$Level_initFields = function () {
    };
    Experimental$Level$WARNING_instance = new Experimental$Level('WARNING', 0);
    Experimental$Level$ERROR_instance = new Experimental$Level('ERROR', 1);
  }
  var Experimental$Level$WARNING_instance;
  function Experimental$Level$WARNING_getInstance() {
    Experimental$Level_initFields();
    return Experimental$Level$WARNING_instance;
  }
  var Experimental$Level$ERROR_instance;
  function Experimental$Level$ERROR_getInstance() {
    Experimental$Level_initFields();
    return Experimental$Level$ERROR_instance;
  }
  Experimental$Level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Level',
    interfaces: [Enum]
  };
  function Experimental$Level$values() {
    return [Experimental$Level$WARNING_getInstance(), Experimental$Level$ERROR_getInstance()];
  }
  Experimental$Level.values = Experimental$Level$values;
  function Experimental$Level$valueOf(name) {
    switch (name) {
      case 'WARNING':
        return Experimental$Level$WARNING_getInstance();
      case 'ERROR':
        return Experimental$Level$ERROR_getInstance();
      default:throwISE('No enum constant kotlin.Experimental.Level.' + name);
    }
  }
  Experimental$Level.valueOf_61zpoe$ = Experimental$Level$valueOf;
  function Experimental$Impact(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Experimental$Impact_initFields() {
    Experimental$Impact_initFields = function () {
    };
    Experimental$Impact$COMPILATION_instance = new Experimental$Impact('COMPILATION', 0);
    Experimental$Impact$LINKAGE_instance = new Experimental$Impact('LINKAGE', 1);
    Experimental$Impact$RUNTIME_instance = new Experimental$Impact('RUNTIME', 2);
  }
  var Experimental$Impact$COMPILATION_instance;
  function Experimental$Impact$COMPILATION_getInstance() {
    Experimental$Impact_initFields();
    return Experimental$Impact$COMPILATION_instance;
  }
  var Experimental$Impact$LINKAGE_instance;
  function Experimental$Impact$LINKAGE_getInstance() {
    Experimental$Impact_initFields();
    return Experimental$Impact$LINKAGE_instance;
  }
  var Experimental$Impact$RUNTIME_instance;
  function Experimental$Impact$RUNTIME_getInstance() {
    Experimental$Impact_initFields();
    return Experimental$Impact$RUNTIME_instance;
  }
  Experimental$Impact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Impact',
    interfaces: [Enum]
  };
  function Experimental$Impact$values() {
    return [Experimental$Impact$COMPILATION_getInstance(), Experimental$Impact$LINKAGE_getInstance(), Experimental$Impact$RUNTIME_getInstance()];
  }
  Experimental$Impact.values = Experimental$Impact$values;
  function Experimental$Impact$valueOf(name) {
    switch (name) {
      case 'COMPILATION':
        return Experimental$Impact$COMPILATION_getInstance();
      case 'LINKAGE':
        return Experimental$Impact$LINKAGE_getInstance();
      case 'RUNTIME':
        return Experimental$Impact$RUNTIME_getInstance();
      default:throwISE('No enum constant kotlin.Experimental.Impact.' + name);
    }
  }
  Experimental$Impact.valueOf_61zpoe$ = Experimental$Impact$valueOf;
  Experimental.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Experimental',
    interfaces: [Annotation]
  };
  function UseExperimental(markerClass) {
    this.markerClass = markerClass;
  }
  UseExperimental.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UseExperimental',
    interfaces: [Annotation]
  };
  Object.defineProperty(Experimental$Level, 'WARNING', {
    get: Experimental$Level$WARNING_getInstance
  });
  Object.defineProperty(Experimental$Level, 'ERROR', {
    get: Experimental$Level$ERROR_getInstance
  });
  Experimental.Level = Experimental$Level;
  Object.defineProperty(Experimental$Impact, 'COMPILATION', {
    get: Experimental$Impact$COMPILATION_getInstance
  });
  Object.defineProperty(Experimental$Impact, 'LINKAGE', {
    get: Experimental$Impact$LINKAGE_getInstance
  });
  Object.defineProperty(Experimental$Impact, 'RUNTIME', {
    get: Experimental$Impact$RUNTIME_getInstance
  });
  Experimental.Impact = Experimental$Impact;
  var package$kotlin = _.kotlin || (_.kotlin = {});
  package$kotlin.Experimental = Experimental;
  package$kotlin.UseExperimental = UseExperimental;
  Kotlin.defineModule('kotlin-experimental', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=kotlin-experimental.js.map
