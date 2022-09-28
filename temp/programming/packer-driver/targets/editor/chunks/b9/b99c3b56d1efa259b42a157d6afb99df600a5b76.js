System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRAFT_STATE, getCurrentScope, latest, iteratorSymbol, isDraftable, createProxy, loadPlugin, markChanged, ProxyTypeMap, ProxyTypeSet, die, _crd;

  function enableMapSet() {
    /* istanbul ignore next */
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    }; // Ugly hack to resolve #502 and inherit built in Map / Set


    function __extends(d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = ( // @ts-ignore
      __.prototype = b.prototype, new __());
    }

    const DraftMap = function (_super) {
      __extends(DraftMap, _super); // Create class manually, cause #502


      function DraftMap(target, parent) {
        this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE] = {
          type_: _crd && ProxyTypeMap === void 0 ? (_reportPossibleCrUseOfProxyTypeMap({
            error: Error()
          }), ProxyTypeMap) : ProxyTypeMap,
          parent_: parent,
          scope_: parent ? parent.scope_ : (_crd && getCurrentScope === void 0 ? (_reportPossibleCrUseOfgetCurrentScope({
            error: Error()
          }), getCurrentScope) : getCurrentScope)(),
          modified_: false,
          finalized_: false,
          copy_: undefined,
          assigned_: undefined,
          base_: target,
          draft_: this,
          isManual_: false,
          revoked_: false
        };
        return this;
      }

      const p = DraftMap.prototype;
      Object.defineProperty(p, "size", {
        get: function () {
          return (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
            error: Error()
          }), latest) : latest)(this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
            error: Error()
          }), DRAFT_STATE) : DRAFT_STATE]).size;
        } // enumerable: false,
        // configurable: true

      });

      p.has = function (key) {
        return (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
          error: Error()
        }), latest) : latest)(this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE]).has(key);
      };

      p.set = function (key, value) {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);

        if ((_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
          error: Error()
        }), latest) : latest)(state).get(key) !== value) {
          prepareMapCopy(state);
          (_crd && markChanged === void 0 ? (_reportPossibleCrUseOfmarkChanged({
            error: Error()
          }), markChanged) : markChanged)(state.scope_.immer_, state);
          state.assigned_.set(key, true);
          state.copy_.set(key, value);
          state.assigned_.set(key, true);
        }

        return this;
      };

      p.delete = function (key) {
        if (!this.has(key)) {
          return false;
        }

        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);
        prepareMapCopy(state);
        (_crd && markChanged === void 0 ? (_reportPossibleCrUseOfmarkChanged({
          error: Error()
        }), markChanged) : markChanged)(state.scope_.immer_, state);
        state.assigned_.set(key, false);
        state.copy_.delete(key);
        return true;
      };

      p.clear = function () {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);
        prepareMapCopy(state);
        (_crd && markChanged === void 0 ? (_reportPossibleCrUseOfmarkChanged({
          error: Error()
        }), markChanged) : markChanged)(state.scope_.immer_, state);
        state.assigned_ = new Map();
        return state.copy_.clear();
      };

      p.forEach = function (cb, thisArg) {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
          error: Error()
        }), latest) : latest)(state).forEach((_value, key, _map) => {
          cb.call(thisArg, this.get(key), key, this);
        });
      };

      p.get = function (key) {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);
        const value = (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
          error: Error()
        }), latest) : latest)(state).get(key);

        if (state.finalized_ || !(_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
          error: Error()
        }), isDraftable) : isDraftable)(value)) {
          return value;
        }

        if (value !== state.base_.get(key)) {
          return value; // either already drafted or reassigned
        } // despite what it looks, this creates a draft only once, see above condition


        const draft = (_crd && createProxy === void 0 ? (_reportPossibleCrUseOfcreateProxy({
          error: Error()
        }), createProxy) : createProxy)(state.scope_.immer_, value, state);
        prepareMapCopy(state);
        state.copy_.set(key, draft);
        return draft;
      };

      p.keys = function () {
        return (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
          error: Error()
        }), latest) : latest)(this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE]).keys();
      };

      p.values = function () {
        const iterator = this.keys();
        return {
          [_crd && iteratorSymbol === void 0 ? (_reportPossibleCrUseOfiteratorSymbol({
            error: Error()
          }), iteratorSymbol) : iteratorSymbol]: () => this.values(),
          next: () => {
            const r = iterator.next();
            /* istanbul ignore next */

            if (r.done) return r;
            const value = this.get(r.value);
            return {
              done: false,
              value
            };
          }
        };
      };

      p.entries = function () {
        const iterator = this.keys();
        return {
          [_crd && iteratorSymbol === void 0 ? (_reportPossibleCrUseOfiteratorSymbol({
            error: Error()
          }), iteratorSymbol) : iteratorSymbol]: () => this.entries(),
          next: () => {
            const r = iterator.next();
            /* istanbul ignore next */

            if (r.done) return r;
            const value = this.get(r.value);
            return {
              done: false,
              value: [r.value, value]
            };
          }
        };
      };

      p[_crd && iteratorSymbol === void 0 ? (_reportPossibleCrUseOfiteratorSymbol({
        error: Error()
      }), iteratorSymbol) : iteratorSymbol] = function () {
        return this.entries();
      };

      return DraftMap;
    }(Map);

    function proxyMap_(target, parent) {
      // @ts-ignore
      return new DraftMap(target, parent);
    }

    function prepareMapCopy(state) {
      if (!state.copy_) {
        state.assigned_ = new Map();
        state.copy_ = new Map(state.base_);
      }
    }

    const DraftSet = function (_super) {
      __extends(DraftSet, _super); // Create class manually, cause #502


      function DraftSet(target, parent) {
        this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE] = {
          type_: _crd && ProxyTypeSet === void 0 ? (_reportPossibleCrUseOfProxyTypeSet({
            error: Error()
          }), ProxyTypeSet) : ProxyTypeSet,
          parent_: parent,
          scope_: parent ? parent.scope_ : (_crd && getCurrentScope === void 0 ? (_reportPossibleCrUseOfgetCurrentScope({
            error: Error()
          }), getCurrentScope) : getCurrentScope)(),
          modified_: false,
          finalized_: false,
          copy_: undefined,
          base_: target,
          draft_: this,
          drafts_: new Map(),
          revoked_: false,
          isManual_: false
        };
        return this;
      }

      const p = DraftSet.prototype;
      Object.defineProperty(p, "size", {
        get: function () {
          return (_crd && latest === void 0 ? (_reportPossibleCrUseOflatest({
            error: Error()
          }), latest) : latest)(this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
            error: Error()
          }), DRAFT_STATE) : DRAFT_STATE]).size;
        } // enumerable: true,

      });

      p.has = function (value) {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state); // bit of trickery here, to be able to recognize both the value, and the draft of its value

        if (!state.copy_) {
          return state.base_.has(value);
        }

        if (state.copy_.has(value)) return true;
        if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
        return false;
      };

      p.add = function (value) {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);

        if (!this.has(value)) {
          prepareSetCopy(state);
          (_crd && markChanged === void 0 ? (_reportPossibleCrUseOfmarkChanged({
            error: Error()
          }), markChanged) : markChanged)(state.scope_.immer_, state);
          state.copy_.add(value);
        }

        return this;
      };

      p.delete = function (value) {
        if (!this.has(value)) {
          return false;
        }

        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);
        prepareSetCopy(state);
        (_crd && markChanged === void 0 ? (_reportPossibleCrUseOfmarkChanged({
          error: Error()
        }), markChanged) : markChanged)(state.scope_.immer_, state);
        return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) :
        /* istanbul ignore next */
        false);
      };

      p.clear = function () {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);
        prepareSetCopy(state);
        (_crd && markChanged === void 0 ? (_reportPossibleCrUseOfmarkChanged({
          error: Error()
        }), markChanged) : markChanged)(state.scope_.immer_, state);
        return state.copy_.clear();
      };

      p.values = function () {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);
        prepareSetCopy(state);
        return state.copy_.values();
      };

      p.entries = function entries() {
        const state = this[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
          error: Error()
        }), DRAFT_STATE) : DRAFT_STATE];
        assertUnrevoked(state);
        prepareSetCopy(state);
        return state.copy_.entries();
      };

      p.keys = function () {
        return this.values();
      };

      p[_crd && iteratorSymbol === void 0 ? (_reportPossibleCrUseOfiteratorSymbol({
        error: Error()
      }), iteratorSymbol) : iteratorSymbol] = function () {
        return this.values();
      };

      p.forEach = function forEach(cb, thisArg) {
        const iterator = this.values();
        let result = iterator.next();

        while (!result.done) {
          cb.call(thisArg, result.value, result.value, this);
          result = iterator.next();
        }
      };

      return DraftSet;
    }(Set);

    function proxySet_(target, parent) {
      // @ts-ignore
      return new DraftSet(target, parent);
    }

    function prepareSetCopy(state) {
      if (!state.copy_) {
        // create drafts for all entries to preserve insertion order
        state.copy_ = new Set();
        state.base_.forEach(value => {
          if ((_crd && isDraftable === void 0 ? (_reportPossibleCrUseOfisDraftable({
            error: Error()
          }), isDraftable) : isDraftable)(value)) {
            const draft = (_crd && createProxy === void 0 ? (_reportPossibleCrUseOfcreateProxy({
              error: Error()
            }), createProxy) : createProxy)(state.scope_.immer_, value, state);
            state.drafts_.set(value, draft);
            state.copy_.add(draft);
          } else {
            state.copy_.add(value);
          }
        });
      }
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
    }), loadPlugin) : loadPlugin)("MapSet", {
      proxyMap_,
      proxySet_
    });
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnyMap(extras) {
    _reporterNs.report("AnyMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnySet(extras) {
    _reporterNs.report("AnySet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapState(extras) {
    _reporterNs.report("MapState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSetState(extras) {
    _reporterNs.report("SetState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRAFT_STATE(extras) {
    _reporterNs.report("DRAFT_STATE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetCurrentScope(extras) {
    _reporterNs.report("getCurrentScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOflatest(extras) {
    _reporterNs.report("latest", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfiteratorSymbol(extras) {
    _reporterNs.report("iteratorSymbol", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraftable(extras) {
    _reporterNs.report("isDraftable", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateProxy(extras) {
    _reporterNs.report("createProxy", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadPlugin(extras) {
    _reporterNs.report("loadPlugin", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmarkChanged(extras) {
    _reporterNs.report("markChanged", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeMap(extras) {
    _reporterNs.report("ProxyTypeMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeSet(extras) {
    _reporterNs.report("ProxyTypeSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../internal", _context.meta, extras);
  }

  _export("enableMapSet", enableMapSet);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DRAFT_STATE = _unresolved_2.DRAFT_STATE;
      getCurrentScope = _unresolved_2.getCurrentScope;
      latest = _unresolved_2.latest;
      iteratorSymbol = _unresolved_2.iteratorSymbol;
      isDraftable = _unresolved_2.isDraftable;
      createProxy = _unresolved_2.createProxy;
      loadPlugin = _unresolved_2.loadPlugin;
      markChanged = _unresolved_2.markChanged;
      ProxyTypeMap = _unresolved_2.ProxyTypeMap;
      ProxyTypeSet = _unresolved_2.ProxyTypeSet;
      die = _unresolved_2.die;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d22651iCBpDdLmV2RXF/btp", "mapset", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b99c3b56d1efa259b42a157d6afb99df600a5b76.js.map