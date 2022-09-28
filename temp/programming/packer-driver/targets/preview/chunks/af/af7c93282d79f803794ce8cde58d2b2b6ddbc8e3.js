"use strict";

System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, each, has, is, isDraftable, shallowCopy, latest, getCurrentScope, DRAFT_STATE, die, createProxy, ProxyTypeProxyObject, ProxyTypeProxyArray, _crd, objectTraps, arrayTraps;

  /**
   * Returns a new draft of the `base` object.
   *
   * The second argument is the parent draft-state (used internally).
   */
  function createProxyProxy(base, parent) {
    var isArray = Array.isArray(base);
    var state = {
      type_: isArray ? _crd && ProxyTypeProxyArray === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyArray({
        error: Error()
      }), ProxyTypeProxyArray) : ProxyTypeProxyArray : ProxyTypeProxyObject,
      // Track which produce call this is associated with.
      scope_: parent ? parent.scope_ : (_crd && getCurrentScope === void 0 ? (_reportPossibleCrUseOfgetCurrentScope({
        error: Error()
      }), getCurrentScope) : getCurrentScope)(),
      // True for both shallow and deep changes.
      modified_: false,
      // Used during finalization.
      finalized_: false,
      // Track which properties have been assigned (true) or deleted (false).
      assigned_: {},
      // The parent draft state.
      parent_: parent,
      // The base state.
      base_: base,
      // The base proxy.
      draft_: null,
      // set below
      // Any property proxies.
      drafts_: {},
      // The base copy with any updated values.
      copy_: null,
      // Called by the `produce` function.
      revoke_: null,
      isManual_: false
    }; // the traps must target something, a bit like the 'real' base.
    // but also, we need to be able to determine from the target what the relevant state is
    // (to avoid creating traps per instance to capture the state in closure,
    // and to avoid creating weird hidden properties as well)
    // So the trick is to use 'state' as the actual 'target'! (and make sure we intercept everything)
    // Note that in the case of an array, we put the state in an array to have better Reflect defaults ootb

    var target = state;
    var traps = objectTraps;

    if (isArray) {
      target = [state];
      traps = arrayTraps;
    }

    var {
      revoke,
      proxy
    } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
  }
  /**
   * Object drafts
   */


  /**
   * Map drafts
   */
  // Access a property without creating an Immer draft.
  function peek(draft, prop) {
    var state = draft[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
      error: Error()
    }), DRAFT_STATE) : DRAFT_STATE];
    var desc = Reflect.getOwnPropertyDescriptor(state ? (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
      error: Error()
    }), latest) : latest)(state) : draft, prop);
    return desc && desc.value;
  }

  function markChangedProxy(state) {
    if (!state.modified_) {
      state.modified_ = true;

      if (state.type_ === (_crd && ProxyTypeProxyObject === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyObject({
        error: Error()
      }), ProxyTypeProxyObject) : ProxyTypeProxyObject) || state.type_ === (_crd && ProxyTypeProxyArray === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyArray({
        error: Error()
      }), ProxyTypeProxyArray) : ProxyTypeProxyArray)) {
        var copy = state.copy_ = (_crd && shallowCopy === void 0 ? (_reportPossibleCrUseOfshallowCopy({
          error: Error()
        }), shallowCopy) : shallowCopy)(state.base_);
        (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
          error: Error()
        }), each) : each)(state.drafts_, (key, value) => {
          // @ts-ignore
          copy[key] = value;
        });
        state.drafts_ = undefined;
      }

      if (state.parent_) {
        markChangedProxy(state.parent_);
      }
    }
  }

  function prepareCopy(state) {
    if (!state.copy_) {
      state.copy_ = (_crd && shallowCopy === void 0 ? (_reportPossibleCrUseOfshallowCopy({
        error: Error()
      }), shallowCopy) : shallowCopy)(state.base_);
    }
  }

  function _reportPossibleCrUseOfeach(extras) {
    _reporterNs.report("each", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhas(extras) {
    _reporterNs.report("has", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfis(extras) {
    _reporterNs.report("is", "../internal", _context.meta, extras);
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

  function _reportPossibleCrUseOfImmerBaseState(extras) {
    _reporterNs.report("ImmerBaseState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrafted(extras) {
    _reporterNs.report("Drafted", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnyObject(extras) {
    _reporterNs.report("AnyObject", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnyArray(extras) {
    _reporterNs.report("AnyArray", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectish(extras) {
    _reporterNs.report("Objectish", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCurrentScope(extras) {
    _reporterNs.report("getCurrentScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRAFT_STATE(extras) {
    _reporterNs.report("DRAFT_STATE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateProxy(extras) {
    _reporterNs.report("createProxy", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeProxyObject(extras) {
    _reporterNs.report("ProxyTypeProxyObject", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeProxyArray(extras) {
    _reporterNs.report("ProxyTypeProxyArray", "../internal", _context.meta, extras);
  }

  _export({
    createProxyProxy: createProxyProxy,
    markChangedProxy: markChangedProxy
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      each = _unresolved_2.each;
      has = _unresolved_2.has;
      is = _unresolved_2.is;
      isDraftable = _unresolved_2.isDraftable;
      shallowCopy = _unresolved_2.shallowCopy;
      latest = _unresolved_2.latest;
      getCurrentScope = _unresolved_2.getCurrentScope;
      DRAFT_STATE = _unresolved_2.DRAFT_STATE;
      die = _unresolved_2.die;
      createProxy = _unresolved_2.createProxy;
      ProxyTypeProxyObject = _unresolved_2.ProxyTypeProxyObject;
      ProxyTypeProxyArray = _unresolved_2.ProxyTypeProxyArray;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ca21pBTYhFuKdXomZH9ThB", "proxy", undefined);

      objectTraps = {
        get(state, prop) {
          if (prop === (_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
            error: Error()
          }), DRAFT_STATE) : DRAFT_STATE)) return state;
          var {
            drafts_: drafts
          } = state; // Check for existing draft in unmodified state.

          if (!state.modified_ && (_crd && has === void 0 ? (_reportPossibleCrUseOfhas({
            error: Error()
          }), has) : has)(drafts, prop)) {
            return drafts[prop];
          }

          var value = (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
            error: Error()
          }), latest) : latest)(state)[prop];

          if (state.finalized_ || !(_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
            error: Error()
          }), isDraftable) : isDraftable)(value)) {
            return value;
          } // Check for existing draft in modified state.


          if (state.modified_) {
            // Assigned values are never drafted. This catches any drafts we created, too.
            if (value !== peek(state.base_, prop)) return value; // Store drafts on the copy (when one exists).
            // @ts-ignore

            drafts = state.copy_;
          }

          return drafts[prop] = (_crd && createProxy === void 0 ? (_reportPossibleCrUseOfcreateProxy({
            error: Error()
          }), createProxy) : createProxy)(state.scope_.immer_, value, state);
        },

        has(state, prop) {
          return prop in (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
            error: Error()
          }), latest) : latest)(state);
        },

        ownKeys(state) {
          return Reflect.ownKeys((_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
            error: Error()
          }), latest) : latest)(state));
        },

        set(state, prop, value) {
          if (!state.modified_) {
            var baseValue = peek(state.base_, prop); // Optimize based on value's truthiness. Truthy values are guaranteed to
            // never be undefined, so we can avoid the `in` operator. Lastly, truthy
            // values may be drafts, but falsy values are never drafts.

            var isUnchanged = value ? (_crd && is === void 0 ? (_reportPossibleCrUseOfis({
              error: Error()
            }), is) : is)(baseValue, value) || value === state.drafts_[prop] : (_crd && is === void 0 ? (_reportPossibleCrUseOfis({
              error: Error()
            }), is) : is)(baseValue, value) && prop in state.base_;
            if (isUnchanged) return true;
            prepareCopy(state);
            markChangedProxy(state);
          }

          state.assigned_[prop] = true; // @ts-ignore

          state.copy_[prop] = value;
          return true;
        },

        deleteProperty(state, prop) {
          // The `undefined` check is a fast path for pre-existing keys.
          if (peek(state.base_, prop) !== undefined || prop in state.base_) {
            state.assigned_[prop] = false;
            prepareCopy(state);
            markChangedProxy(state);
          } else if (state.assigned_[prop]) {
            // if an originally not assigned property was deleted
            delete state.assigned_[prop];
          } // @ts-ignore


          if (state.copy_) delete state.copy_[prop];
          return true;
        },

        // Note: We never coerce `desc.value` into an Immer draft, because we can't make
        // the same guarantee in ES5 mode.
        getOwnPropertyDescriptor(state, prop) {
          var owner = (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
            error: Error()
          }), latest) : latest)(state);
          var desc = Reflect.getOwnPropertyDescriptor(owner, prop);

          if (desc) {
            desc.writable = true;
            desc.configurable = state.type_ !== (_crd && ProxyTypeProxyArray === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyArray({
              error: Error()
            }), ProxyTypeProxyArray) : ProxyTypeProxyArray) || prop !== "length";
          }

          return desc;
        },

        defineProperty() {
          (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
            error: Error()
          }), die) : die)(11);
        },

        getPrototypeOf(state) {
          return Object.getPrototypeOf(state.base_);
        },

        setPrototypeOf() {
          (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
            error: Error()
          }), die) : die)(12);
        }

      };
      /**
       * Array drafts
       */

      arrayTraps = {};
      (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
        error: Error()
      }), each) : each)(objectTraps, (key, fn) => {
        // @ts-ignore
        arrayTraps[key] = function () {
          arguments[0] = arguments[0][0];
          return fn.apply(this, arguments);
        };
      });

      arrayTraps.deleteProperty = function (state, prop) {
        if (__DEV__ && isNaN(parseInt(prop))) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
          error: Error()
        }), die) : die)(13);
        return objectTraps.deleteProperty.call(this, state[0], prop);
      };

      arrayTraps.set = function (state, prop, value) {
        if (__DEV__ && prop !== "length" && isNaN(parseInt(prop))) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
          error: Error()
        }), die) : die)(14);
        return objectTraps.set.call(this, state[0], prop, value, state[0]);
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af7c93282d79f803794ce8cde58d2b2b6ddbc8e3.js.map