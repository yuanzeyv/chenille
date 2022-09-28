System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, die, _crd, plugins;

  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];

    if (!plugin) {
      (_crd && die === void 0 ? (_reportPossibleCrUseOfdie({
        error: Error()
      }), die) : die)(__DEV__ ? 18 : 19, pluginKey);
    } // @ts-ignore


    return plugin;
  }

  function loadPlugin(pluginKey, implementation) {
    plugins[pluginKey] = implementation;
  }
  /** ES5 Plugin */


  function _reportPossibleCrUseOfImmerState(extras) {
    _reporterNs.report("ImmerState", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatch(extras) {
    _reporterNs.report("Patch", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerScope(extras) {
    _reporterNs.report("ImmerScope", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDrafted(extras) {
    _reporterNs.report("Drafted", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAnyObject(extras) {
    _reporterNs.report("AnyObject", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfImmerBaseState(extras) {
    _reporterNs.report("ImmerBaseState", "../internal", _context.meta, extras);
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

  function _reportPossibleCrUseOfProxyTypeES5Array(extras) {
    _reporterNs.report("ProxyTypeES5Array", "../internal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProxyTypeES5Object(extras) {
    _reporterNs.report("ProxyTypeES5Object", "../internal", _context.meta, extras);
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

  _export({
    getPlugin: getPlugin,
    loadPlugin: loadPlugin
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      die = _unresolved_2.die;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75c908rR5RKmbIefeIrWm0p", "plugins", undefined);

      /** Plugin utilities */
      plugins = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eafa8f701385b3b5ffcb6db8c9c5993cbe60afbc.js.map