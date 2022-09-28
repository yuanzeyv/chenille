System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRAFT_STATE, ProxyTypeProxyObject, ProxyTypeProxyArray, getPlugin, die, _crd, currentScope;

  function getCurrentScope() {
    if (__DEV__ && !currentScope) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
      error: Error()
    }), die) : die)(0);
    return currentScope;
  }

  function createScope(parent_, immer_) {
    return {
      drafts_: [],
      parent_,
      immer_,
      // Whenever the modified draft contains a draft from another scope, we
      // need to prevent auto-freezing so the unowned draft can be finalized.
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }

  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
        error: Error()
      }), getPlugin) : getPlugin)("Patches"); // assert we have the plugin

      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }

  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft); // @ts-ignore

    scope.drafts_ = null;
  }

  function leaveScope(scope) {
    if (scope === currentScope) {
      currentScope = scope.parent_;
    }
  }

  function enterScope(immer) {
    return currentScope = createScope(currentScope, immer);
  }

  function revokeDraft(draft) {
    const state = draft[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
      error: Error()
    }), DRAFT_STATE) : DRAFT_STATE];
    if (state.type_ === (_crd && ProxyTypeProxyObject === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyObject({
      error: Error()
    }), ProxyTypeProxyObject) : ProxyTypeProxyObject) || state.type_ === (_crd && ProxyTypeProxyArray === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyArray({
      error: Error()
    }), ProxyTypeProxyArray) : ProxyTypeProxyArray)) state.revoke_();else state.revoked_ = true;
  }

  function _reportPossibleCrUseOfPatch(extras) {
    _reporterNs.report("Patch", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatchListener(extras) {
    _reporterNs.report("PatchListener", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrafted(extras) {
    _reporterNs.report("Drafted", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmer(extras) {
    _reporterNs.report("Immer", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRAFT_STATE(extras) {
    _reporterNs.report("DRAFT_STATE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeProxyObject(extras) {
    _reporterNs.report("ProxyTypeProxyObject", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeProxyArray(extras) {
    _reporterNs.report("ProxyTypeProxyArray", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPlugin(extras) {
    _reporterNs.report("getPlugin", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../utils/errors", _context.meta, extras);
  }

  _export({
    getCurrentScope: getCurrentScope,
    usePatchesInScope: usePatchesInScope,
    revokeScope: revokeScope,
    leaveScope: leaveScope,
    enterScope: enterScope
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DRAFT_STATE = _unresolved_2.DRAFT_STATE;
      ProxyTypeProxyObject = _unresolved_2.ProxyTypeProxyObject;
      ProxyTypeProxyArray = _unresolved_2.ProxyTypeProxyArray;
      getPlugin = _unresolved_2.getPlugin;
    }, function (_unresolved_3) {
      die = _unresolved_3.die;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "908d5DIPRFPH6OEau3NiAMo", "scope", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07ea4bb638f26e9cee71da2d6bc08b2ad73ae1e6.js.map