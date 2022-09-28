System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, b3, _dec, _class, _crd, ccclass, property, test;

  function _reportPossibleCrUseOfb(extras) {
    _reporterNs.report("b3", "./External/BTree.js", _context.meta, extras);
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
      b3 = _unresolved_2.b3;
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
          console.log(_crd && b3 === void 0 ? (_reportPossibleCrUseOfb({
            error: Error()
          }), b3) : b3);
          console.log("asdasdasdasd");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=303db56c655b6a1447c7ca2d126ea57058e3dd76.js.map