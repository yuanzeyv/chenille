System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DRAFT_STATE, DRAFTABLE, hasSet, hasMap, ArchtypeObject, ArchtypeArray, ArchtypeMap, ArchtypeSet, die, _crd, ownKeys;

  /** Returns true if the given value is an Immer draft */

  /*#__PURE__*/
  function isDraft(value) {
    return !!value && !!value[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
      error: Error()
    }), DRAFT_STATE) : DRAFT_STATE];
  }
  /** Returns true if the given value can be drafted by Immer */

  /*#__PURE__*/


  function isDraftable(value) {
    if (!value) return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[_crd && DRAFTABLE === void 0 ? (_reportPossibleCrUseOfDRAFTABLE({
      error: Error()
    }), DRAFTABLE) : DRAFTABLE] || !!value.constructor[_crd && DRAFTABLE === void 0 ? (_reportPossibleCrUseOfDRAFTABLE({
      error: Error()
    }), DRAFTABLE) : DRAFTABLE] || isMap(value) || isSet(value);
  }
  /*#__PURE__*/


  function isPlainObject(value) {
    if (!value || typeof value !== "object") return false;
    const proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
  }
  /** Get the underlying object that is represented by the given draft */

  /*#__PURE__*/


  function original(value) {
    if (value && value[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
      error: Error()
    }), DRAFT_STATE) : DRAFT_STATE]) {
      return value[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE].base_;
    } // otherwise return undefined

  }
  /*#__PURE__*/


  function each(obj, iter, enumerableOnly = false) {
    if (getArchtype(obj) === (_crd && ArchtypeObject === void 0 ? (_reportPossibleCrUseOfArchtypeObject({
      error: Error()
    }), ArchtypeObject) : ArchtypeObject)) {
      ;
      (enumerableOnly ? Object.keys : ownKeys)(obj).forEach(key => iter(key, obj[key], obj));
    } else {
      obj.forEach((entry, index) => iter(index, entry, obj));
    }
  }
  /*#__PURE__*/


  function getArchtype(thing) {
    /* istanbul ignore next */
    const state = thing[_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
      error: Error()
    }), DRAFT_STATE) : DRAFT_STATE];
    return state ? state.type_ > 3 ? state.type_ - 4 // cause Object and Array map back from 4 and 5
    : state.type_ // others are the same
    : Array.isArray(thing) ? _crd && ArchtypeArray === void 0 ? (_reportPossibleCrUseOfArchtypeArray({
      error: Error()
    }), ArchtypeArray) : ArchtypeArray : isMap(thing) ? _crd && ArchtypeMap === void 0 ? (_reportPossibleCrUseOfArchtypeMap({
      error: Error()
    }), ArchtypeMap) : ArchtypeMap : isSet(thing) ? _crd && ArchtypeSet === void 0 ? (_reportPossibleCrUseOfArchtypeSet({
      error: Error()
    }), ArchtypeSet) : ArchtypeSet : _crd && ArchtypeObject === void 0 ? (_reportPossibleCrUseOfArchtypeObject({
      error: Error()
    }), ArchtypeObject) : ArchtypeObject;
  }
  /*#__PURE__*/


  function has(thing, prop) {
    return getArchtype(thing) === (_crd && ArchtypeMap === void 0 ? (_reportPossibleCrUseOfArchtypeMap({
      error: Error()
    }), ArchtypeMap) : ArchtypeMap) ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
  }
  /*#__PURE__*/


  function get(thing, prop) {
    // @ts-ignore
    return getArchtype(thing) === (_crd && ArchtypeMap === void 0 ? (_reportPossibleCrUseOfArchtypeMap({
      error: Error()
    }), ArchtypeMap) : ArchtypeMap) ? thing.get(prop) : thing[prop];
  }
  /*#__PURE__*/


  function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === (_crd && ArchtypeMap === void 0 ? (_reportPossibleCrUseOfArchtypeMap({
      error: Error()
    }), ArchtypeMap) : ArchtypeMap)) thing.set(propOrOldValue, value);else if (t === (_crd && ArchtypeSet === void 0 ? (_reportPossibleCrUseOfArchtypeSet({
      error: Error()
    }), ArchtypeSet) : ArchtypeSet)) {
      thing.delete(propOrOldValue);
      thing.add(value);
    } else thing[propOrOldValue] = value;
  }
  /*#__PURE__*/


  function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  /*#__PURE__*/


  function isMap(target) {
    return (_crd && hasMap === void 0 ? (_reportPossibleCrUseOfhasMap({
      error: Error()
    }), hasMap) : hasMap) && target instanceof Map;
  }
  /*#__PURE__*/


  function isSet(target) {
    return (_crd && hasSet === void 0 ? (_reportPossibleCrUseOfhasSet({
      error: Error()
    }), hasSet) : hasSet) && target instanceof Set;
  }
  /*#__PURE__*/


  function latest(state) {
    return state.copy_ || state.base_;
  }
  /*#__PURE__*/


  function shallowCopy(base, invokeGetters = false) {
    if (Array.isArray(base)) return base.slice();
    const clone = Object.create(Object.getPrototypeOf(base));
    each(base, key => {
      if (key === (_crd && DRAFT_STATE === void 0 ? (_reportPossibleCrUseOfDRAFT_STATE({
        error: Error()
      }), DRAFT_STATE) : DRAFT_STATE)) {
        return; // Never copy over draft state.
      }

      const desc = Object.getOwnPropertyDescriptor(base, key);
      let {
        value
      } = desc;

      if (desc.get) {
        if (!invokeGetters) (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
          error: Error()
        }), die) : die)(1);
        value = desc.get.call(base);
      }

      if (desc.enumerable) {
        clone[key] = value;
      } else {
        Object.defineProperty(clone, key, {
          value,
          writable: true,
          configurable: true
        });
      }
    });
    return clone;
  }

  function freeze(obj, deep) {
    if (isDraft(obj) || isFrozen(obj) || !isDraftable(obj)) return;

    if (getArchtype(obj) > 1
    /* Map or Set */
    ) {
      obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
    }

    Object.freeze(obj);
    if (deep) each(obj, (key, value) => freeze(value, true), true);
  }

  function dontMutateFrozenCollections() {
    (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
      error: Error()
    }), die) : die)(2);
  }

  function isFrozen(obj) {
    if (obj == null || typeof obj !== "object") return true; // See #600, IE dies on non-objects in Object.isFrozen

    return Object.isFrozen(obj);
  }

  function _reportPossibleCrUseOfDRAFT_STATE(extras) {
    _reporterNs.report("DRAFT_STATE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDRAFTABLE(extras) {
    _reporterNs.report("DRAFTABLE", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhasSet(extras) {
    _reporterNs.report("hasSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectish(extras) {
    _reporterNs.report("Objectish", "../internal", _context.meta, extras);
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

  function _reportPossibleCrUseOfAnyMap(extras) {
    _reporterNs.report("AnyMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnySet(extras) {
    _reporterNs.report("AnySet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhasMap(extras) {
    _reporterNs.report("hasMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArchtypeObject(extras) {
    _reporterNs.report("ArchtypeObject", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArchtypeArray(extras) {
    _reporterNs.report("ArchtypeArray", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArchtypeMap(extras) {
    _reporterNs.report("ArchtypeMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArchtypeSet(extras) {
    _reporterNs.report("ArchtypeSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../internal", _context.meta, extras);
  }

  _export({
    isDraft: isDraft,
    isDraftable: isDraftable,
    isPlainObject: isPlainObject,
    original: original,
    each: each,
    getArchtype: getArchtype,
    has: has,
    get: get,
    set: set,
    is: is,
    isMap: isMap,
    isSet: isSet,
    latest: latest,
    shallowCopy: shallowCopy,
    freeze: freeze,
    isFrozen: isFrozen
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DRAFT_STATE = _unresolved_2.DRAFT_STATE;
      DRAFTABLE = _unresolved_2.DRAFTABLE;
      hasSet = _unresolved_2.hasSet;
      hasMap = _unresolved_2.hasMap;
      ArchtypeObject = _unresolved_2.ArchtypeObject;
      ArchtypeArray = _unresolved_2.ArchtypeArray;
      ArchtypeMap = _unresolved_2.ArchtypeMap;
      ArchtypeSet = _unresolved_2.ArchtypeSet;
      die = _unresolved_2.die;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a75cFuRMtGGKqZ0A1OmGIV", "common", undefined);

      _export("ownKeys", ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? obj => Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)) :
      /* istanbul ignore next */
      Object.getOwnPropertyNames);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90e65f64db11ac06a0958c1fbef52da9dc8cab04.js.map