System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Immer, _crd, immer, produce, produceWithPatches, setAutoFreeze, setUseProxies, applyPatches, createDraft, finishDraft;

  /**
   * This function is actually a no-op, but can be used to cast an immutable type
   * to an draft type and make TypeScript happy
   *
   * @param value
   */
  function castDraft(value) {
    return value;
  }
  /**
   * This function is actually a no-op, but can be used to cast a mutable type
   * to an immutable type and make TypeScript happy
   * @param value
   */


  function castImmutable(value) {
    return value;
  }

  function _reportPossibleCrUseOfIProduce(extras) {
    _reporterNs.report("IProduce", "./internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProduceWithPatches(extras) {
    _reporterNs.report("IProduceWithPatches", "./internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmer(extras) {
    _reporterNs.report("Immer", "./internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDraft(extras) {
    _reporterNs.report("Draft", "./internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmutable(extras) {
    _reporterNs.report("Immutable", "./internal", _context.meta, extras);
  }

  _export({
    castDraft: castDraft,
    castImmutable: castImmutable
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Immer = _unresolved_2.Immer;
    }, function (_unresolved_3) {
      _export({
        Draft: _unresolved_3.Draft,
        Immutable: _unresolved_3.Immutable,
        Patch: _unresolved_3.Patch,
        PatchListener: _unresolved_3.PatchListener,
        original: _unresolved_3.original,
        isDraft: _unresolved_3.isDraft,
        isDraftable: _unresolved_3.isDraftable,
        nothing: _unresolved_3.NOTHING,
        immerable: _unresolved_3.DRAFTABLE
      });
    }, function (_unresolved_4) {
      _export("enableES5", _unresolved_4.enableES5);
    }, function (_unresolved_5) {
      _export("enablePatches", _unresolved_5.enablePatches);
    }, function (_unresolved_6) {
      _export("enableMapSet", _unresolved_6.enableMapSet);
    }, function (_unresolved_7) {
      _export("enableAllPlugins", _unresolved_7.enableAllPlugins);
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e952TioxpBW5kvEt/U//uc", "immer", undefined);

      immer = new (_crd && Immer === void 0 ? (_reportPossibleCrUseOfImmer({
        error: Error()
      }), Immer) : Immer)();
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

      _export("produce", produce = immer.produce);

      _export("default", produce);
      /**
       * Like `produce`, but `produceWithPatches` always returns a tuple
       * [nextState, patches, inversePatches] (instead of just the next state)
       */


      _export("produceWithPatches", produceWithPatches = immer.produceWithPatches.bind(immer));
      /**
       * Pass true to automatically freeze all copies created by Immer.
       *
       * By default, auto-freezing is disabled in production.
       */


      _export("setAutoFreeze", setAutoFreeze = immer.setAutoFreeze.bind(immer));
      /**
       * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
       * always faster than using ES5 proxies.
       *
       * By default, feature detection is used, so calling this is rarely necessary.
       */


      _export("setUseProxies", setUseProxies = immer.setUseProxies.bind(immer));
      /**
       * Apply an array of Immer patches to the first argument.
       *
       * This function is a producer, which means copy-on-write is in effect.
       */


      _export("applyPatches", applyPatches = immer.applyPatches.bind(immer));
      /**
       * Create an Immer draft from the given base state, which may be a draft itself.
       * The draft can be modified until you finalize it with the `finishDraft` function.
       */


      _export("createDraft", createDraft = immer.createDraft.bind(immer));
      /**
       * Finalize an Immer draft from a `createDraft` call, returning the base state
       * (if no changes were made) or a modified copy. The draft must *not* be
       * mutated afterwards.
       *
       * Pass a function as the 2nd argument to generate Immer patches based on the
       * changes that were made.
       */


      _export("finishDraft", finishDraft = immer.finishDraft.bind(immer));

      _export("Immer", Immer);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac31214fcb18e5b1c01f41bbcca31882e4fa9372.js.map