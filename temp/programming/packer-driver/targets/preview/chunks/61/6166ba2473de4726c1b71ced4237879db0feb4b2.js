System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, isDraftable, processResult, NOTHING, DRAFT_STATE, isDraft, isMap, isSet, markChangedProxy, createProxyProxy, freeze, getPlugin, die, hasProxies, isMinified, enterScope, revokeScope, leaveScope, usePatchesInScope, getCurrentScope, Immer, _crd;

  function createProxy(immer, value, parent) {
    // precondition: createProxy should be guarded by isDraftable, so we know we can safely draft
    var draft = (_crd && isMap === void 0 ? (_reportPossibleCrUseOfisMap({
      error: Error()
    }), isMap) : isMap)(value) ? (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
      error: Error()
    }), getPlugin) : getPlugin)("MapSet").proxyMap_(value, parent) : (_crd && isSet === void 0 ? (_reportPossibleCrUseOfisSet({
      error: Error()
    }), isSet) : isSet)(value) ? (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
      error: Error()
    }), getPlugin) : getPlugin)("MapSet").proxySet_(value, parent) : immer.useProxies_ ? (_crd && createProxyProxy === void 0 ? (_reportPossibleCrUseOfcreateProxyProxy({
      error: Error()
    }), createProxyProxy) : createProxyProxy)(value, parent) : (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
      error: Error()
    }), getPlugin) : getPlugin)("ES5").createES5Proxy_(value, parent);
    var scope = parent ? parent.scope_ : (_crd && getCurrentScope === void 0 ? (_reportPossibleCrUseOfgetCurrentScope({
      error: Error()
    }), getCurrentScope) : getCurrentScope)();
    scope.drafts_.push(draft);
    return draft;
  }

  function markChanged(immer, state) {
    if (immer.useProxies_) {
      (_crd && markChangedProxy === void 0 ? (_reportPossibleCrUseOfmarkChangedProxy({
        error: Error()
      }), markChangedProxy) : markChangedProxy)(state);
    } else {
      (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
        error: Error()
      }), getPlugin) : getPlugin)("ES5").markChangedES5_(state);
    }
  }

  function _reportPossibleCrUseOfIProduceWithPatches(extras) {
    _reporterNs.report("IProduceWithPatches", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProduce(extras) {
    _reporterNs.report("IProduce", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrafted(extras) {
    _reporterNs.report("Drafted", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraftable(extras) {
    _reporterNs.report("isDraftable", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfprocessResult(extras) {
    _reporterNs.report("processResult", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNOTHING(extras) {
    _reporterNs.report("NOTHING", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatch(extras) {
    _reporterNs.report("Patch", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectish(extras) {
    _reporterNs.report("Objectish", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRAFT_STATE(extras) {
    _reporterNs.report("DRAFT_STATE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDraft(extras) {
    _reporterNs.report("Draft", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatchListener(extras) {
    _reporterNs.report("PatchListener", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraft(extras) {
    _reporterNs.report("isDraft", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisMap(extras) {
    _reporterNs.report("isMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisSet(extras) {
    _reporterNs.report("isSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmarkChangedProxy(extras) {
    _reporterNs.report("markChangedProxy", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateProxyProxy(extras) {
    _reporterNs.report("createProxyProxy", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOffreeze(extras) {
    _reporterNs.report("freeze", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetPlugin(extras) {
    _reporterNs.report("getPlugin", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhasProxies(extras) {
    _reporterNs.report("hasProxies", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisMinified(extras) {
    _reporterNs.report("isMinified", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfenterScope(extras) {
    _reporterNs.report("enterScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrevokeScope(extras) {
    _reporterNs.report("revokeScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfleaveScope(extras) {
    _reporterNs.report("leaveScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfusePatchesInScope(extras) {
    _reporterNs.report("usePatchesInScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCurrentScope(extras) {
    _reporterNs.report("getCurrentScope", "../internal", _context.meta, extras);
  }

  _export({
    Immer: void 0,
    createProxy: createProxy,
    markChanged: markChanged
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      isDraftable = _unresolved_2.isDraftable;
      processResult = _unresolved_2.processResult;
      NOTHING = _unresolved_2.NOTHING;
      DRAFT_STATE = _unresolved_2.DRAFT_STATE;
      isDraft = _unresolved_2.isDraft;
      isMap = _unresolved_2.isMap;
      isSet = _unresolved_2.isSet;
      markChangedProxy = _unresolved_2.markChangedProxy;
      createProxyProxy = _unresolved_2.createProxyProxy;
      freeze = _unresolved_2.freeze;
      getPlugin = _unresolved_2.getPlugin;
      die = _unresolved_2.die;
      hasProxies = _unresolved_2.hasProxies;
      isMinified = _unresolved_2.isMinified;
      enterScope = _unresolved_2.enterScope;
      revokeScope = _unresolved_2.revokeScope;
      leaveScope = _unresolved_2.leaveScope;
      usePatchesInScope = _unresolved_2.usePatchesInScope;
      getCurrentScope = _unresolved_2.getCurrentScope;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4d6ce1y7NFBooecn6B/6nzd", "immerClass", undefined);

      _export("Immer", Immer = class Immer {
        constructor(config) {
          this.useProxies_ = _crd && hasProxies === void 0 ? (_reportPossibleCrUseOfhasProxies({
            error: Error()
          }), hasProxies) : hasProxies;
          this.autoFreeze_ = false ? true
          /* istanbul ignore next */
          : !(_crd && isMinified === void 0 ? (_reportPossibleCrUseOfisMinified({
            error: Error()
          }), isMinified) : isMinified);
          if (typeof (config == null ? void 0 : config.useProxies) === "boolean") this.setUseProxies(config.useProxies);
          if (typeof (config == null ? void 0 : config.autoFreeze) === "boolean") this.setAutoFreeze(config.autoFreeze);
          this.produce = this.produce.bind(this);
          this.produceWithPatches = this.produceWithPatches.bind(this);
        }
        /**
         * The `produce` function takes a value and a "recipe function" (whose
         * return value often depends on the base state). The recipe function is
         * free to mutate its first argument however it wants. All mutations are
         * only ever applied to a __copy__ of the base state.
         *
         * Pass only a function to create a "curried producer" which relieves you
         * from passing the recipe function every time.
         *
         * Only plain objects and arrays are made mutable. All other objects are
         * considered uncopyable.
         *
         * Note: This function is __bound__ to its `Immer` instance.
         *
         * @param {any} base - the initial state
         * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
         * @param {Function} patchListener - optional function that will be called with all the patches produced here
         * @returns {any} a new state, or the initial state if nothing was modified
         */


        produce(base, recipe, patchListener) {
          // curried invocation
          if (typeof base === "function" && typeof recipe !== "function") {
            var defaultBase = recipe;
            recipe = base;
            var self = this;
            return function curriedProduce(base) {
              if (base === void 0) {
                base = defaultBase;
              }

              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return self.produce(base, draft => recipe.call(this, draft, ...args)); // prettier-ignore
            };
          }

          if (typeof recipe !== "function") (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
            error: Error()
          }), die) : die)(6);
          if (patchListener !== undefined && typeof patchListener !== "function") (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
            error: Error()
          }), die) : die)(7);
          var result; // Only plain objects, arrays, and "immerable classes" are drafted.

          if ((_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
            error: Error()
          }), isDraftable) : isDraftable)(base)) {
            var scope = (_crd && enterScope === void 0 ? (_reportPossibleCrUseOfenterScope({
              error: Error()
            }), enterScope) : enterScope)(this);
            var proxy = createProxy(this, base, undefined);
            var hasError = true;

            try {
              result = recipe(proxy);
              hasError = false;
            } finally {
              // finally instead of catch + rethrow better preserves original stack
              if (hasError) (_crd && revokeScope === void 0 ? (_reportPossibleCrUseOfrevokeScope({
                error: Error()
              }), revokeScope) : revokeScope)(scope);else (_crd && leaveScope === void 0 ? (_reportPossibleCrUseOfleaveScope({
                error: Error()
              }), leaveScope) : leaveScope)(scope);
            }

            if (typeof Promise !== "undefined" && result instanceof Promise) {
              return result.then(result => {
                (_crd && usePatchesInScope === void 0 ? (_reportPossibleCrUseOfusePatchesInScope({
                  error: Error()
                }), usePatchesInScope) : usePatchesInScope)(scope, patchListener);
                return (_crd && processResult === void 0 ? (_reportPossibleCrUseOfprocessResult({
                  error: Error()
                }), processResult) : processResult)(result, scope);
              }, error => {
                (_crd && revokeScope === void 0 ? (_reportPossibleCrUseOfrevokeScope({
                  error: Error()
                }), revokeScope) : revokeScope)(scope);
                throw error;
              });
            }

            (_crd && usePatchesInScope === void 0 ? (_reportPossibleCrUseOfusePatchesInScope({
              error: Error()
            }), usePatchesInScope) : usePatchesInScope)(scope, patchListener);
            return (_crd && processResult === void 0 ? (_reportPossibleCrUseOfprocessResult({
              error: Error()
            }), processResult) : processResult)(result, scope);
          } else {
            result = recipe(base);
            if (result === (_crd && NOTHING === void 0 ? (_reportPossibleCrUseOfNOTHING({
              error: Error()
            }), NOTHING) : NOTHING)) return undefined;
            if (result === undefined) result = base;
            if (this.autoFreeze_) (_crd && freeze === void 0 ? (_reportPossibleCrUseOffreeze({
              error: Error()
            }), freeze) : freeze)(result, true);
            return result;
          }
        }

        produceWithPatches(arg1, arg2, arg3) {
          var _this = this;

          if (typeof arg1 === "function") {
            return function (state) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }

              return _this.produceWithPatches(state, draft => arg1(draft, ...args));
            };
          }

          var patches, inversePatches;
          var nextState = this.produce(arg1, arg2, (p, ip) => {
            patches = p;
            inversePatches = ip;
          });
          return [nextState, patches, inversePatches];
        }

        createDraft(base) {
          if (!(_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
            error: Error()
          }), isDraftable) : isDraftable)(base)) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
            error: Error()
          }), die) : die)(8);
          var scope = (_crd && enterScope === void 0 ? (_reportPossibleCrUseOfenterScope({
            error: Error()
          }), enterScope) : enterScope)(this);
          var proxy = createProxy(this, base, undefined);
          proxy[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
            error: Error()
          }), DRAFT_STATE) : DRAFT_STATE].isManual_ = true;
          (_crd && leaveScope === void 0 ? (_reportPossibleCrUseOfleaveScope({
            error: Error()
          }), leaveScope) : leaveScope)(scope);
          return proxy;
        }

        finishDraft(draft, patchListener) {
          var state = draft && draft[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
            error: Error()
          }), DRAFT_STATE) : DRAFT_STATE];

          if (false) {
            if (!state || !state.isManual_) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
              error: Error()
            }), die) : die)(9);
            if (state.finalized_) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
              error: Error()
            }), die) : die)(10);
          }

          var {
            scope_: scope
          } = state;
          (_crd && usePatchesInScope === void 0 ? (_reportPossibleCrUseOfusePatchesInScope({
            error: Error()
          }), usePatchesInScope) : usePatchesInScope)(scope, patchListener);
          return (_crd && processResult === void 0 ? (_reportPossibleCrUseOfprocessResult({
            error: Error()
          }), processResult) : processResult)(undefined, scope);
        }
        /**
         * Pass true to automatically freeze all copies created by Immer.
         *
         * By default, auto-freezing is disabled in production.
         */


        setAutoFreeze(value) {
          this.autoFreeze_ = value;
        }
        /**
         * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
         * always faster than using ES5 proxies.
         *
         * By default, feature detection is used, so calling this is rarely necessary.
         */


        setUseProxies(value) {
          if (!(_crd && hasProxies === void 0 ? (_reportPossibleCrUseOfhasProxies({
            error: Error()
          }), hasProxies) : hasProxies)) {
            (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
              error: Error()
            }), die) : die)(20);
          }

          this.useProxies_ = value;
        }

        applyPatches(base, patches) {
          // If a patch replaces the entire state, take that replacement as base
          // before applying patches
          var i;

          for (i = patches.length - 1; i >= 0; i--) {
            var patch = patches[i];

            if (patch.path.length === 0 && patch.op === "replace") {
              base = patch.value;
              break;
            }
          }

          var applyPatchesImpl = (_crd && getPlugin === void 0 ? (_reportPossibleCrUseOfgetPlugin({
            error: Error()
          }), getPlugin) : getPlugin)("Patches").applyPatches_;

          if ((_crd && isDraft === void 0 ? (_reportPossibleCrUseOfisDraft({
            error: Error()
          }), isDraft) : isDraft)(base)) {
            // N.B: never hits if some patch a replacement, patches are never drafts
            return applyPatchesImpl(base, patches);
          } // Otherwise, produce a copy of the base state.


          return this.produce(base, draft => applyPatchesImpl(draft, patches.slice(i + 1)));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6166ba2473de4726c1b71ced4237879db0feb4b2.js.map