System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRAFT_STATE, isDraftable, NOTHING, each, has, freeze, shallowCopy, isDraft, set, is, get, ProxyTypeES5Object, ProxyTypeES5Array, ProxyTypeSet, getPlugin, die, revokeScope, isFrozen, _crd;

  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== undefined && result !== baseDraft;
    if (!scope.immer_.useProxies_) (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
      error: Error()
    }), getPlugin) : getPlugin)("ES5").willFinalizeES5_(scope, result, isReplaced);

    if (isReplaced) {
      if (baseDraft[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE].modified_) {
        (_crd && revokeScope === void 0 ? (_reportPossibleCrUseOfrevokeScope({
          error: Error()
        }), revokeScope) : revokeScope)(scope);
        (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
          error: Error()
        }), die) : die)(4);
      }

      if ((_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
        error: Error()
      }), isDraftable) : isDraftable)(result)) {
        // Finalize the result in case it contains (or is) a subset of the draft.
        result = finalize(scope, result);
        if (!scope.parent_) maybeFreeze(scope, result);
      }

      if (scope.patches_) {
        (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
          error: Error()
        }), getPlugin) : getPlugin)("Patches").generateReplacementPatches_(baseDraft[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE], result, scope.patches_, scope.inversePatches_);
      }
    } else {
      // Finalize the base draft.
      result = finalize(scope, baseDraft, []);
    }

    (_crd && revokeScope === void 0 ? (_reportPossibleCrUseOfrevokeScope({
      error: Error()
    }), revokeScope) : revokeScope)(scope);

    if (scope.patches_) {
      scope.patchListener_(scope.patches_, scope.inversePatches_);
    }

    return result !== (_crd && NOTHING === void 0 ? (_reportPossibleCrUseOfNOTHING({
      error: Error()
    }), NOTHING) : NOTHING) ? result : undefined;
  }

  function finalize(rootScope, value, path) {
    // Don't recurse in tho recursive data structures
    if ((_crd && isFrozen === void 0 ? (_reportPossibleCrUseOfisFrozen({
      error: Error()
    }), isFrozen) : isFrozen)(value)) return value;
    const state = value[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
      error: Error()
    }), DRAFT_STATE) : DRAFT_STATE]; // A plain object, might need freezing, might contain drafts

    if (!state) {
      (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
        error: Error()
      }), each) : each)(value, (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path), true // See #590, don't recurse into non-enumarable of non drafted objects
      );
      return value;
    } // Never finalize drafts owned by another scope.


    if (state.scope_ !== rootScope) return value; // Unmodified draft, return the (frozen) original

    if (!state.modified_) {
      maybeFreeze(rootScope, state.base_, true);
      return state.base_;
    } // Not finalized yet, let's do that now


    if (!state.finalized_) {
      state.finalized_ = true;
      state.scope_.unfinalizedDrafts_--;
      const result = // For ES5, create a good copy from the draft first, with added keys and without deleted keys.
      state.type_ === (_crd && ProxyTypeES5Object === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Object({
        error: Error()
      }), ProxyTypeES5Object) : ProxyTypeES5Object) || state.type_ === (_crd && ProxyTypeES5Array === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Array({
        error: Error()
      }), ProxyTypeES5Array) : ProxyTypeES5Array) ? state.copy_ = (_crd && shallowCopy === void 0 ? (_reportPossibleCrUseOfshallowCopy({
        error: Error()
      }), shallowCopy) : shallowCopy)(state.draft_, true) : state.copy_; // finalize all children of the copy

      (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
        error: Error()
      }), each) : each)(result, (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path)); // everything inside is frozen, we can freeze here

      maybeFreeze(rootScope, result, false); // first time finalizing, let's create those patches

      if (path && rootScope.patches_) {
        (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
          error: Error()
        }), getPlugin) : getPlugin)("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
      }
    }

    return state.copy_;
  }

  function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath) {
    if (__DEV__ && childValue === targetObject) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
      error: Error()
    }), die) : die)(5);

    if ((_crd && isDraft === void 0 ? (_reportPossibleCrUseOfisDraft({
      error: Error()
    }), isDraft) : isDraft)(childValue)) {
      const path = rootPath && parentState && parentState.type_ !== (_crd && ProxyTypeSet === void 0 ? (_reportPossibleCrUseOfProxyTypeSet({
        error: Error()
      }), ProxyTypeSet) : ProxyTypeSet) && // Set objects are atomic since they have no keys.
      !(_crd && has === void 0 ? (_reportPossibleCrUseOfhas({
        error: Error()
      }), has) : has)(parentState.assigned_, prop) // Skip deep patches for assigned keys.
      ? rootPath.concat(prop) : undefined; // Drafts owned by `scope` are finalized here.

      const res = finalize(rootScope, childValue, path);
      (_crd && set === void 0 ? (_reportPossibleCrUseOfset({
        error: Error()
      }), set) : set)(targetObject, prop, res); // Drafts from another scope must prevented to be frozen
      // if we got a draft back from finalize, we're in a nested produce and shouldn't freeze

      if ((_crd && isDraft === void 0 ? (_reportPossibleCrUseOfisDraft({
        error: Error()
      }), isDraft) : isDraft)(res)) {
        rootScope.canAutoFreeze_ = false;
      } else return;
    } // Unchanged draft properties are ignored.


    if (parentState && (_crd && is === void 0 ? (_reportPossibleCrUseOfis({
      error: Error()
    }), is) : is)(childValue, (_crd && get === void 0 ? (_reportPossibleCrUseOfget({
      error: Error()
    }), get) : get)(parentState.base_, prop))) {
      return;
    } // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.


    if ((_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
      error: Error()
    }), isDraftable) : isDraftable)(childValue)) {
      if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        // optimization: if an object is not a draft, and we don't have to
        // deepfreeze everything, and we are sure that no drafts are left in the remaining object
        // cause we saw and finalized all drafts already; we can stop visiting the rest of the tree.
        // This benefits especially adding large data tree's without further processing.
        // See add-data.js perf test
        return;
      }

      finalize(rootScope, childValue); // immer deep freezes plain objects, so if there is no parent state, we freeze as well

      if (!parentState || !parentState.scope_.parent_) maybeFreeze(rootScope, childValue);
    }
  }

  function maybeFreeze(scope, value, deep = false) {
    if (scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
      (_crd && freeze === void 0 ? (_reportPossibleCrUseOffreeze({
        error: Error()
      }), freeze) : freeze)(value, deep);
    }
  }

  function _reportPossibleCrUseOfImmerScope(extras) {
    _reporterNs.report("ImmerScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRAFT_STATE(extras) {
    _reporterNs.report("DRAFT_STATE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraftable(extras) {
    _reporterNs.report("isDraftable", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNOTHING(extras) {
    _reporterNs.report("NOTHING", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatchPath(extras) {
    _reporterNs.report("PatchPath", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeach(extras) {
    _reporterNs.report("each", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhas(extras) {
    _reporterNs.report("has", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOffreeze(extras) {
    _reporterNs.report("freeze", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshallowCopy(extras) {
    _reporterNs.report("shallowCopy", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraft(extras) {
    _reporterNs.report("isDraft", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSetState(extras) {
    _reporterNs.report("SetState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfset(extras) {
    _reporterNs.report("set", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfis(extras) {
    _reporterNs.report("is", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfget(extras) {
    _reporterNs.report("get", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeES5Object(extras) {
    _reporterNs.report("ProxyTypeES5Object", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeES5Array(extras) {
    _reporterNs.report("ProxyTypeES5Array", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeSet(extras) {
    _reporterNs.report("ProxyTypeSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPlugin(extras) {
    _reporterNs.report("getPlugin", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrevokeScope(extras) {
    _reporterNs.report("revokeScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisFrozen(extras) {
    _reporterNs.report("isFrozen", "../internal", _context.meta, extras);
  }

  _export("processResult", processResult);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DRAFT_STATE = _unresolved_2.DRAFT_STATE;
      isDraftable = _unresolved_2.isDraftable;
      NOTHING = _unresolved_2.NOTHING;
      each = _unresolved_2.each;
      has = _unresolved_2.has;
      freeze = _unresolved_2.freeze;
      shallowCopy = _unresolved_2.shallowCopy;
      isDraft = _unresolved_2.isDraft;
      set = _unresolved_2.set;
      is = _unresolved_2.is;
      get = _unresolved_2.get;
      ProxyTypeES5Object = _unresolved_2.ProxyTypeES5Object;
      ProxyTypeES5Array = _unresolved_2.ProxyTypeES5Array;
      ProxyTypeSet = _unresolved_2.ProxyTypeSet;
      getPlugin = _unresolved_2.getPlugin;
      die = _unresolved_2.die;
      revokeScope = _unresolved_2.revokeScope;
      isFrozen = _unresolved_2.isFrozen;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40c97xj7R5CvK2CJvNr1PUp", "finalize", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=27ffda22d5deba7df520d90a613b9e27ad2636df.js.map