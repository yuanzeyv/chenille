System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, each, has, isDraft, isDraftable, shallowCopy, latest, DRAFT_STATE, is, loadPlugin, createProxy, ProxyTypeES5Array, ProxyTypeES5Object, getCurrentScope, die, _crd;

  function enableES5() {
    function willFinalizeES5_(scope, result, isReplaced) {
      scope.drafts_.forEach(draft => {
        ;
        draft[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE].finalizing_ = true;
      });

      if (!isReplaced) {
        if (scope.patches_) {
          markChangesRecursively(scope.drafts_[0]);
        } // This is faster when we don't care about which attributes changed.


        markChangesSweep(scope.drafts_);
      } // When a child draft is returned, look for changes.
      else if ((_crd && isDraft === void 0 ? (_reportPossibleCrUseOfisDraft({
        error: Error()
      }), isDraft) : isDraft)(result) && result[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE].scope_ === scope) {
        markChangesSweep(scope.drafts_);
      }
    }

    function createES5Proxy_(base, parent) {
      const isArray = Array.isArray(base);
      const draft = clonePotentialDraft(base);
      (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
        error: Error()
      }), each) : each)(draft, prop => {
        proxyProperty(draft, prop, isArray || isEnumerable(base, prop));
      });
      const state = {
        type_: isArray ? _crd && ProxyTypeES5Array === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Array({
          error: Error()
        }), ProxyTypeES5Array) : ProxyTypeES5Array : ProxyTypeES5Object,
        scope_: parent ? parent.scope_ : (_crd && getCurrentScope === void 0 ? (_reportPossibleCrUseOfgetCurrentScope({
          error: Error()
        }), getCurrentScope) : getCurrentScope)(),
        modified_: false,
        finalizing_: false,
        finalized_: false,
        assigned_: {},
        parent_: parent,
        base_: base,
        draft_: draft,
        copy_: null,
        revoked_: false,
        isManual_: false
      };
      Object.defineProperty(draft, _crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE, {
        value: state,
        // enumerable: false <- the default
        writable: true
      });
      return draft;
    } // Access a property without creating an Immer draft.


    function peek(draft, prop) {
      const state = draft[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE];

      if (state && !state.finalizing_) {
        state.finalizing_ = true;
        const value = draft[prop];
        state.finalizing_ = false;
        return value;
      }

      return draft[prop];
    }

    function get(state, prop) {
      assertUnrevoked(state);
      const value = peek((_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
        error: Error()
      }), latest) : latest)(state), prop);
      if (state.finalizing_) return value; // Create a draft if the value is unmodified.

      if (value === peek(state.base_, prop) && (_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
        error: Error()
      }), isDraftable) : isDraftable)(value)) {
        prepareCopy(state); // @ts-ignore

        return state.copy_[prop] = (_crd && createProxy === void 0 ? (_reportPossibleCrUseOfcreateProxy({
          error: Error()
        }), createProxy) : createProxy)(state.scope_.immer_, value, state);
      }

      return value;
    }

    function set(state, prop, value) {
      assertUnrevoked(state);
      state.assigned_[prop] = true;

      if (!state.modified_) {
        if ((_crd && is === void 0 ? (_reportPossibleCrUseOfis({
          error: Error()
        }), is) : is)(value, peek((_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
          error: Error()
        }), latest) : latest)(state), prop))) return;
        markChangedES5_(state);
        prepareCopy(state);
      } // @ts-ignore


      state.copy_[prop] = value;
    }

    function markChangedES5_(state) {
      if (!state.modified_) {
        state.modified_ = true;
        if (state.parent_) markChangedES5_(state.parent_);
      }
    }

    function prepareCopy(state) {
      if (!state.copy_) state.copy_ = clonePotentialDraft(state.base_);
    }

    function clonePotentialDraft(base) {
      const state = base && base[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE];

      if (state) {
        state.finalizing_ = true;
        const draft = (_crd && shallowCopy === void 0 ? (_reportPossibleCrUseOfshallowCopy({
          error: Error()
        }), shallowCopy) : shallowCopy)(state.draft_, true);
        state.finalizing_ = false;
        return draft;
      }

      return (_crd && shallowCopy === void 0 ? (_reportPossibleCrUseOfshallowCopy({
        error: Error()
      }), shallowCopy) : shallowCopy)(base);
    } // property descriptors are recycled to make sure we don't create a get and set closure per property,
    // but share them all instead


    const descriptors = {};

    function proxyProperty(draft, prop, enumerable) {
      let desc = descriptors[prop];

      if (desc) {
        desc.enumerable = enumerable;
      } else {
        descriptors[prop] = desc = {
          // configurable: true,
          enumerable,

          get() {
            return get(this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
              error: Error()
            }), DRAFT_STATE) : DRAFT_STATE], prop);
          },

          set(value) {
            set(this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
              error: Error()
            }), DRAFT_STATE) : DRAFT_STATE], prop, value);
          }

        };
      }

      Object.defineProperty(draft, prop, desc);
    } // This looks expensive, but only proxies are visited, and only objects without known changes are scanned.


    function markChangesSweep(drafts) {
      // The natural order of drafts in the `scope` array is based on when they
      // were accessed. By processing drafts in reverse natural order, we have a
      // better chance of processing leaf nodes first. When a leaf node is known to
      // have changed, we can avoid any traversal of its ancestor nodes.
      for (let i = drafts.length - 1; i >= 0; i--) {
        const state = drafts[i][_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];

        if (!state.modified_) {
          switch (state.type_) {
            case _crd && ProxyTypeES5Array === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Array({
              error: Error()
            }), ProxyTypeES5Array) : ProxyTypeES5Array:
              if (hasArrayChanges(state)) markChangedES5_(state);
              break;

            case _crd && ProxyTypeES5Object === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Object({
              error: Error()
            }), ProxyTypeES5Object) : ProxyTypeES5Object:
              if (hasObjectChanges(state)) markChangedES5_(state);
              break;
          }
        }
      }
    }

    function markChangesRecursively(object) {
      if (!object || typeof object !== "object") return;
      const state = object[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE];
      if (!state) return;
      const {
        base_,
        draft_,
        assigned_,
        type_
      } = state;

      if (type_ === (_crd && ProxyTypeES5Object === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Object({
        error: Error()
      }), ProxyTypeES5Object) : ProxyTypeES5Object)) {
        // Look for added keys.
        // TODO: looks quite duplicate to hasObjectChanges,
        // probably there is a faster way to detect changes, as sweep + recurse seems to do some
        // unnecessary work.
        // also: probably we can store the information we detect here, to speed up tree finalization!
        (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
          error: Error()
        }), each) : each)(draft_, key => {
          if (key === (_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
            error: Error()
          }), DRAFT_STATE) : DRAFT_STATE)) return; // The `undefined` check is a fast path for pre-existing keys.

          if (base_[key] === undefined && !(_crd && has === void 0 ? (_reportPossibleCrUseOfhas({
            error: Error()
          }), has) : has)(base_, key)) {
            assigned_[key] = true;
            markChangedES5_(state);
          } else if (!assigned_[key]) {
            // Only untouched properties trigger recursion.
            markChangesRecursively(draft_[key]);
          }
        }); // Look for removed keys.

        (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
          error: Error()
        }), each) : each)(base_, key => {
          // The `undefined` check is a fast path for pre-existing keys.
          if (draft_[key] === undefined && !(_crd && has === void 0 ? (_reportPossibleCrUseOfhas({
            error: Error()
          }), has) : has)(draft_, key)) {
            assigned_[key] = false;
            markChangedES5_(state);
          }
        });
      } else if (type_ === (_crd && ProxyTypeES5Array === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Array({
        error: Error()
      }), ProxyTypeES5Array) : ProxyTypeES5Array)) {
        if (hasArrayChanges(state)) {
          markChangedES5_(state);
          assigned_.length = true;
        }

        if (draft_.length < base_.length) {
          for (let i = draft_.length; i < base_.length; i++) assigned_[i] = false;
        } else {
          for (let i = base_.length; i < draft_.length; i++) assigned_[i] = true;
        } // Minimum count is enough, the other parts has been processed.


        const min = Math.min(draft_.length, base_.length);

        for (let i = 0; i < min; i++) {
          // Only untouched indices trigger recursion.
          if (assigned_[i] === undefined) markChangesRecursively(draft_[i]);
        }
      }
    }

    function hasObjectChanges(state) {
      const {
        base_,
        draft_
      } = state; // Search for added keys and changed keys. Start at the back, because
      // non-numeric keys are ordered by time of definition on the object.

      const keys = Object.keys(draft_);

      for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        const baseValue = base_[key]; // The `undefined` check is a fast path for pre-existing keys.

        if (baseValue === undefined && !(_crd && has === void 0 ? (_reportPossibleCrUseOfhas({
          error: Error()
        }), has) : has)(base_, key)) {
          return true;
        } // Once a base key is deleted, future changes go undetected, because its
        // descriptor is erased. This branch detects any missed changes.
        else {
          const value = draft_[key];
          const state = value && value[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
            error: Error()
          }), DRAFT_STATE) : DRAFT_STATE];

          if (state ? state.base_ !== baseValue : !(_crd && is === void 0 ? (_reportPossibleCrUseOfis({
            error: Error()
          }), is) : is)(value, baseValue)) {
            return true;
          }
        }
      } // At this point, no keys were added or changed.
      // Compare key count to determine if keys were deleted.


      return keys.length !== Object.keys(base_).length;
    }

    function hasArrayChanges(state) {
      const {
        draft_
      } = state;
      if (draft_.length !== state.base_.length) return true; // See #116
      // If we first shorten the length, our array interceptors will be removed.
      // If after that new items are added, result in the same original length,
      // those last items will have no intercepting property.
      // So if there is no own descriptor on the last position, we know that items were removed and added
      // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
      // the last one

      const descriptor = Object.getOwnPropertyDescriptor(draft_, draft_.length - 1); // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)

      if (descriptor && !descriptor.get) return true; // For all other cases, we don't have to compare, as they would have been picked up by the index setters

      return false;
    }
    /*#__PURE__*/


    function isEnumerable(base, prop) {
      const desc = Object.getOwnPropertyDescriptor(base, prop);
      return desc && desc.enumerable ? true : false;
    }

    function assertUnrevoked(state) {
      if (state.revoked_) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
        error: Error()
      }), die) : die)(3, JSON.stringify((_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
        error: Error()
      }), latest) : latest)(state)));
    }

    (_crd && loadPlugin === void 0 ? (_reportPossibleCrUseOfloadPlugin({
      error: Error()
    }), loadPlugin) : loadPlugin)("ES5", {
      createES5Proxy_,
      markChangedES5_,
      willFinalizeES5_
    });
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrafted(extras) {
    _reporterNs.report("Drafted", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectish(extras) {
    _reporterNs.report("Objectish", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfES5ArrayState(extras) {
    _reporterNs.report("ES5ArrayState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfES5ObjectState(extras) {
    _reporterNs.report("ES5ObjectState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeach(extras) {
    _reporterNs.report("each", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhas(extras) {
    _reporterNs.report("has", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraft(extras) {
    _reporterNs.report("isDraft", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraftable(extras) {
    _reporterNs.report("isDraftable", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshallowCopy(extras) {
    _reporterNs.report("shallowCopy", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOflatest(extras) {
    _reporterNs.report("latest", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRAFT_STATE(extras) {
    _reporterNs.report("DRAFT_STATE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfis(extras) {
    _reporterNs.report("is", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadPlugin(extras) {
    _reporterNs.report("loadPlugin", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerScope(extras) {
    _reporterNs.report("ImmerScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateProxy(extras) {
    _reporterNs.report("createProxy", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeES5Array(extras) {
    _reporterNs.report("ProxyTypeES5Array", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeES5Object(extras) {
    _reporterNs.report("ProxyTypeES5Object", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnyObject(extras) {
    _reporterNs.report("AnyObject", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCurrentScope(extras) {
    _reporterNs.report("getCurrentScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../internal", _context.meta, extras);
  }

  _export("enableES5", enableES5);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      each = _unresolved_2.each;
      has = _unresolved_2.has;
      isDraft = _unresolved_2.isDraft;
      isDraftable = _unresolved_2.isDraftable;
      shallowCopy = _unresolved_2.shallowCopy;
      latest = _unresolved_2.latest;
      DRAFT_STATE = _unresolved_2.DRAFT_STATE;
      is = _unresolved_2.is;
      loadPlugin = _unresolved_2.loadPlugin;
      createProxy = _unresolved_2.createProxy;
      ProxyTypeES5Array = _unresolved_2.ProxyTypeES5Array;
      ProxyTypeES5Object = _unresolved_2.ProxyTypeES5Object;
      getCurrentScope = _unresolved_2.getCurrentScope;
      die = _unresolved_2.die;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99b17aR3h5CUbM8t/GiSDYv", "es5", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=852c64639019c24ee5b872e9a056757fb9cc193d.js.map