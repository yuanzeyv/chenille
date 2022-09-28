System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd;

  // Fixes #507: bili doesn't export the types of this file if there is no actual source in it..
  // hopefully it get's tree-shaken away for everyone :)
  function never_used() {}

  function _reportPossibleCrUseOfNothing(extras) {
    _reporterNs.report("Nothing", "../internal", _context.meta, extras);
  }

  _export("never_used", never_used);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f494T70DRHFIPUXhV2DqZY", "types-external", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53dce358748382b5b1bb4d1d8393a5fb05ee27f5.js.map