System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Nothing, _crd, hasSymbol, hasMap, hasSet, hasProxies, isMinified, NOTHING, DRAFTABLE, DRAFT_STATE, iteratorSymbol;

  /* istanbul ignore next */
  function mini() {}

  _export("Nothing", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5d22aNcalRJnaUDI/pwwAjf", "env", undefined);

      // Should be no imports here!
      // Some things that should be evaluated before all else...
      // We only want to know if non-polyfilled symbols are available
      hasSymbol = typeof Symbol !== "undefined" && typeof Symbol("x") === "symbol";

      _export("hasMap", hasMap = typeof Map !== "undefined");

      _export("hasSet", hasSet = typeof Set !== "undefined");

      _export("hasProxies", hasProxies = typeof Proxy !== "undefined" && typeof Proxy.revocable !== "undefined" && typeof Reflect !== "undefined");

      _export("isMinified", isMinified = mini.name !== "mini");
      /**
       * The sentinel value returned by producers to replace the draft with undefined.
       */


      _export("NOTHING", NOTHING = hasSymbol ? Symbol("immer-nothing") : {
        ["immer-nothing"]: true
      });
      /**
       * To let Immer treat your class instances as plain immutable objects
       * (albeit with a custom prototype), you must define either an instance property
       * or a static property on each of your custom classes.
       *
       * Otherwise, your class instance will never be drafted, which means it won't be
       * safe to mutate in a produce callback.
       */


      _export("DRAFTABLE", DRAFTABLE = hasSymbol ? Symbol("immer-draftable") : "__$immer_draftable");

      _export("DRAFT_STATE", DRAFT_STATE = hasSymbol ? Symbol("immer-state") : "__$immer_state"); // Even a polyfilled Symbol might provide Symbol.iterator


      _export("iteratorSymbol", iteratorSymbol = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator");
      /** Use a class type for `nothing` so its type is unique */


      _export("Nothing", Nothing = class Nothing {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b9fcc12b68cc0548b8cbcec5c42398c600e57bd.js.map