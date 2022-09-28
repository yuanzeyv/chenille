System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, nodes, _dec, _class, _crd, ccclass, property, test;

  function _reportPossibleCrUseOfnodes(extras) {
    _reporterNs.report("nodes", "./External/BTree.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      nodes = _unresolved_2.nodes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6961WZteJNt4cu+fFy59jZ", "test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test", test = (_dec = ccclass('test'), _dec(_class = class test extends Component {
        start() {
          console.log(_crd && nodes === void 0 ? (_reportPossibleCrUseOfnodes({
            error: Error()
          }), nodes) : nodes);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6843a867012d22cd3771c168488d6e931527e836.js.map