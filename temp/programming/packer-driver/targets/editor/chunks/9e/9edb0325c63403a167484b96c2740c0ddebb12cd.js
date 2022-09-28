System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, get, each, has, getArchtype, isSet, isMap, loadPlugin, ProxyTypeProxyObject, ProxyTypeES5Object, ProxyTypeMap, ProxyTypeES5Array, ProxyTypeProxyArray, ProxyTypeSet, ArchtypeMap, ArchtypeSet, ArchtypeArray, die, isDraft, _crd;

  function enablePatches() {
    const REPLACE = "replace";
    const ADD = "add";
    const REMOVE = "remove";

    function generatePatches_(state, basePath, patches, inversePatches) {
      switch (state.type_) {
        case _crd && ProxyTypeProxyObject === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyObject({
          error: Error()
        }), ProxyTypeProxyObject) : ProxyTypeProxyObject:
        case _crd && ProxyTypeES5Object === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Object({
          error: Error()
        }), ProxyTypeES5Object) : ProxyTypeES5Object:
        case _crd && ProxyTypeMap === void 0 ? (_reportPossibleCrUseOfProxyTypeMap({
          error: Error()
        }), ProxyTypeMap) : ProxyTypeMap:
          return generatePatchesFromAssigned(state, basePath, patches, inversePatches);

        case _crd && ProxyTypeES5Array === void 0 ? (_reportPossibleCrUseOfProxyTypeES5Array({
          error: Error()
        }), ProxyTypeES5Array) : ProxyTypeES5Array:
        case _crd && ProxyTypeProxyArray === void 0 ? (_reportPossibleCrUseOfProxyTypeProxyArray({
          error: Error()
        }), ProxyTypeProxyArray) : ProxyTypeProxyArray:
          return generateArrayPatches(state, basePath, patches, inversePatches);

        case _crd && ProxyTypeSet === void 0 ? (_reportPossibleCrUseOfProxyTypeSet({
          error: Error()
        }), ProxyTypeSet) : ProxyTypeSet:
          return generateSetPatches(state, basePath, patches, inversePatches);
      }
    }

    function generateArrayPatches(state, basePath, patches, inversePatches) {
      let {
        base_,
        assigned_
      } = state;
      let copy_ = state.copy_; // Reduce complexity by ensuring `base` is never longer.

      if (copy_.length < base_.length) {
        // @ts-ignore
        ;
        [base_, copy_] = [copy_, base_];
        [patches, inversePatches] = [inversePatches, patches];
      }

      const delta = copy_.length - base_.length; // Find the first replaced index.

      let start = 0;

      while (base_[start] === copy_[start] && start < base_.length) {
        ++start;
      } // Find the last replaced index. Search from the end to optimize splice patches.


      let end = base_.length;

      while (end > start && base_[end - 1] === copy_[end + delta - 1]) {
        --end;
      } // Process replaced indices.


      for (let i = start; i < end; ++i) {
        if (assigned_[i] && copy_[i] !== base_[i]) {
          const path = basePath.concat([i]);
          patches.push({
            op: REPLACE,
            path,
            // Need to maybe clone it, as it can in fact be the original value
            // due to the base/copy inversion at the start of this function
            value: clonePatchValueIfNeeded(copy_[i])
          });
          inversePatches.push({
            op: REPLACE,
            path,
            value: clonePatchValueIfNeeded(base_[i])
          });
        }
      }

      const replaceCount = patches.length; // Process added indices.

      for (let i = end + delta - 1; i >= end; --i) {
        const path = basePath.concat([i]);
        patches[replaceCount + i - end] = {
          op: ADD,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        };
        inversePatches.push({
          op: REMOVE,
          path
        });
      }
    } // This is used for both Map objects and normal objects.


    function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
      const {
        base_,
        copy_
      } = state;
      (_crd && each === void 0 ? (_reportPossibleCrUseOfeach({
        error: Error()
      }), each) : each)(state.assigned_, (key, assignedValue) => {
        const origValue = (_crd && get === void 0 ? (_reportPossibleCrUseOfget({
          error: Error()
        }), get) : get)(base_, key);
        const value = (_crd && get === void 0 ? (_reportPossibleCrUseOfget({
          error: Error()
        }), get) : get)(copy_, key);
        const op = !assignedValue ? REMOVE : (_crd && has === void 0 ? (_reportPossibleCrUseOfhas({
          error: Error()
        }), has) : has)(base_, key) ? REPLACE : ADD;
        if (origValue === value && op === REPLACE) return;
        const path = basePath.concat(key);
        patches.push(op === REMOVE ? {
          op,
          path
        } : {
          op,
          path,
          value
        });
        inversePatches.push(op === ADD ? {
          op: REMOVE,
          path
        } : op === REMOVE ? {
          op: ADD,
          path,
          value: clonePatchValueIfNeeded(origValue)
        } : {
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(origValue)
        });
      });
    }

    function generateSetPatches(state, basePath, patches, inversePatches) {
      let {
        base_,
        copy_
      } = state;
      let i = 0;
      base_.forEach(value => {
        if (!copy_.has(value)) {
          const path = basePath.concat([i]);
          patches.push({
            op: REMOVE,
            path,
            value
          });
          inversePatches.unshift({
            op: ADD,
            path,
            value
          });
        }

        i++;
      });
      i = 0;
      copy_.forEach(value => {
        if (!base_.has(value)) {
          const path = basePath.concat([i]);
          patches.push({
            op: ADD,
            path,
            value
          });
          inversePatches.unshift({
            op: REMOVE,
            path,
            value
          });
        }

        i++;
      });
    }

    function generateReplacementPatches_(rootState, replacement, patches, inversePatches) {
      patches.push({
        op: REPLACE,
        path: [],
        value: replacement
      });
      inversePatches.push({
        op: REPLACE,
        path: [],
        value: rootState.base_
      });
    }

    function applyPatches_(draft, patches) {
      patches.forEach(patch => {
        const {
          path,
          op
        } = patch;
        let base = draft;

        for (let i = 0; i < path.length - 1; i++) {
          base = (_crd && get === void 0 ? (_reportPossibleCrUseOfget({
            error: Error()
          }), get) : get)(base, path[i]);
          if (typeof base !== "object") (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
            error: Error()
          }), die) : die)(15, path.join("/"));
        }

        const type = (_crd && getArchtype === void 0 ? (_reportPossibleCrUseOfgetArchtype({
          error: Error()
        }), getArchtype) : getArchtype)(base);
        const value = deepClonePatchValue(patch.value); // used to clone patch to ensure original patch is not modified, see #411

        const key = path[path.length - 1];

        switch (op) {
          case REPLACE:
            switch (type) {
              case _crd && ArchtypeMap === void 0 ? (_reportPossibleCrUseOfArchtypeMap({
                error: Error()
              }), ArchtypeMap) : ArchtypeMap:
                return base.set(key, value);

              /* istanbul ignore next */

              case _crd && ArchtypeSet === void 0 ? (_reportPossibleCrUseOfArchtypeSet({
                error: Error()
              }), ArchtypeSet) : ArchtypeSet:
                (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
                  error: Error()
                }), die) : die)(16);

              default:
                // if value is an object, then it's assigned by reference
                // in the following add or remove ops, the value field inside the patch will also be modifyed
                // so we use value from the cloned patch
                // @ts-ignore
                return base[key] = value;
            }

          case ADD:
            switch (type) {
              case _crd && ArchtypeArray === void 0 ? (_reportPossibleCrUseOfArchtypeArray({
                error: Error()
              }), ArchtypeArray) : ArchtypeArray:
                return base.splice(key, 0, value);

              case _crd && ArchtypeMap === void 0 ? (_reportPossibleCrUseOfArchtypeMap({
                error: Error()
              }), ArchtypeMap) : ArchtypeMap:
                return base.set(key, value);

              case _crd && ArchtypeSet === void 0 ? (_reportPossibleCrUseOfArchtypeSet({
                error: Error()
              }), ArchtypeSet) : ArchtypeSet:
                return base.add(value);

              default:
                return base[key] = value;
            }

          case REMOVE:
            switch (type) {
              case _crd && ArchtypeArray === void 0 ? (_reportPossibleCrUseOfArchtypeArray({
                error: Error()
              }), ArchtypeArray) : ArchtypeArray:
                return base.splice(key, 1);

              case _crd && ArchtypeMap === void 0 ? (_reportPossibleCrUseOfArchtypeMap({
                error: Error()
              }), ArchtypeMap) : ArchtypeMap:
                return base.delete(key);

              case _crd && ArchtypeSet === void 0 ? (_reportPossibleCrUseOfArchtypeSet({
                error: Error()
              }), ArchtypeSet) : ArchtypeSet:
                return base.delete(patch.value);

              default:
                return delete base[key];
            }

          default:
            (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
              error: Error()
            }), die) : die)(17, op);
        }
      });
      return draft;
    } // optimize: this is quite a performance hit, can we detect intelligently when it is needed?
    // E.g. auto-draft when new objects from outside are assigned and modified?
    // (See failing test when deepClone just returns obj)


    function deepClonePatchValue(obj) {
      if (!obj || typeof obj !== "object") return obj;
      if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
      if ((_crd && isMap === void 0 ? (_reportPossibleCrUseOfisMap({
        error: Error()
      }), isMap) : isMap)(obj)) return new Map(Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)]));
      if ((_crd && isSet === void 0 ? (_reportPossibleCrUseOfisSet({
        error: Error()
      }), isSet) : isSet)(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
      const cloned = Object.create(Object.getPrototypeOf(obj));

      for (const key in obj) cloned[key] = deepClonePatchValue(obj[key]);

      return cloned;
    }

    function clonePatchValueIfNeeded(obj) {
      if ((_crd && isDraft === void 0 ? (_reportPossibleCrUseOfisDraft({
        error: Error()
      }), isDraft) : isDraft)(obj)) {
        return deepClonePatchValue(obj);
      } else return obj;
    }

    (_crd && loadPlugin === void 0 ? (_reportPossibleCrUseOfloadPlugin({
      error: Error()
    }), loadPlugin) : loadPlugin)("Patches", {
      applyPatches_,
      generatePatches_,
      generateReplacementPatches_
    });
  }

  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatch(extras) {
    _reporterNs.report("Patch", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSetState(extras) {
    _reporterNs.report("SetState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfES5ArrayState(extras) {
    _reporterNs.report("ES5ArrayState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyArrayState(extras) {
    _reporterNs.report("ProxyArrayState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapState(extras) {
    _reporterNs.report("MapState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfES5ObjectState(extras) {
    _reporterNs.report("ES5ObjectState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyObjectState(extras) {
    _reporterNs.report("ProxyObjectState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatchPath(extras) {
    _reporterNs.report("PatchPath", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfget(extras) {
    _reporterNs.report("get", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeach(extras) {
    _reporterNs.report("each", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhas(extras) {
    _reporterNs.report("has", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetArchtype(extras) {
    _reporterNs.report("getArchtype", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisSet(extras) {
    _reporterNs.report("isSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisMap(extras) {
    _reporterNs.report("isMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadPlugin(extras) {
    _reporterNs.report("loadPlugin", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeProxyObject(extras) {
    _reporterNs.report("ProxyTypeProxyObject", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeES5Object(extras) {
    _reporterNs.report("ProxyTypeES5Object", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeMap(extras) {
    _reporterNs.report("ProxyTypeMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeES5Array(extras) {
    _reporterNs.report("ProxyTypeES5Array", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeProxyArray(extras) {
    _reporterNs.report("ProxyTypeProxyArray", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeSet(extras) {
    _reporterNs.report("ProxyTypeSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArchtypeMap(extras) {
    _reporterNs.report("ArchtypeMap", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArchtypeSet(extras) {
    _reporterNs.report("ArchtypeSet", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArchtypeArray(extras) {
    _reporterNs.report("ArchtypeArray", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdie(extras) {
    _reporterNs.report("die", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisDraft(extras) {
    _reporterNs.report("isDraft", "../utils/common", _context.meta, extras);
  }

  _export("enablePatches", enablePatches);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      get = _unresolved_2.get;
      each = _unresolved_2.each;
      has = _unresolved_2.has;
      getArchtype = _unresolved_2.getArchtype;
      isSet = _unresolved_2.isSet;
      isMap = _unresolved_2.isMap;
      loadPlugin = _unresolved_2.loadPlugin;
      ProxyTypeProxyObject = _unresolved_2.ProxyTypeProxyObject;
      ProxyTypeES5Object = _unresolved_2.ProxyTypeES5Object;
      ProxyTypeMap = _unresolved_2.ProxyTypeMap;
      ProxyTypeES5Array = _unresolved_2.ProxyTypeES5Array;
      ProxyTypeProxyArray = _unresolved_2.ProxyTypeProxyArray;
      ProxyTypeSet = _unresolved_2.ProxyTypeSet;
      ArchtypeMap = _unresolved_2.ArchtypeMap;
      ArchtypeSet = _unresolved_2.ArchtypeSet;
      ArchtypeArray = _unresolved_2.ArchtypeArray;
      die = _unresolved_2.die;
    }, function (_unresolved_3) {
      isDraft = _unresolved_3.isDraft;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a7c7coC+dHSI3UboGH9WrA", "patches", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9edb0325c63403a167484b96c2740c0ddebb12cd.js.map