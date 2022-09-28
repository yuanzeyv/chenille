System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, enableES5, enableMapSet, enablePatches, _crd;

  function enableAllPlugins() {
    (_crd && enableES5 === void 0 ? (_reportPossibleCrUseOfenableES({
      error: Error()
    }), enableES5) : enableES5)();
    (_crd && enableMapSet === void 0 ? (_reportPossibleCrUseOfenableMapSet({
      error: Error()
    }), enableMapSet) : enableMapSet)();
    (_crd && enablePatches === void 0 ? (_reportPossibleCrUseOfenablePatches({
      error: Error()
    }), enablePatches) : enablePatches)();
  }

  function _reportPossibleCrUseOfenableES(extras) {
    _reporterNs.report("enableES5", "./es5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfenableMapSet(extras) {
    _reporterNs.report("enableMapSet", "./mapset", _context.meta, extras);
  }

  function _reportPossibleCrUseOfenablePatches(extras) {
    _reporterNs.report("enablePatches", "./patches", _context.meta, extras);
  }

  _export("enableAllPlugins", enableAllPlugins);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      enableES5 = _unresolved_2.enableES5;
    }, function (_unresolved_3) {
      enableMapSet = _unresolved_3.enableMapSet;
    }, function (_unresolved_4) {
      enablePatches = _unresolved_4.enablePatches;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46672tyQPxGU41Un2KzT1x4", "all", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86d15189f02e8cddf32a4dc106e6e63418172495.js.map