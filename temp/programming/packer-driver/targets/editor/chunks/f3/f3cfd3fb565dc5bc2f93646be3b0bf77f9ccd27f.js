System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, nodes, _dec, _class, _crd, ccclass, property, test;

  function _reportPossibleCrUseOfnodes(extras) {
    _reporterNs.report("nodes", "./External/BTree", _context.meta, extras);
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
        constructor(...args) {
          super(...args);
          this.HelloBehavior = (_crd && nodes === void 0 ? (_reportPossibleCrUseOfnodes({
            error: Error()
          }), nodes) : nodes).root('Hello behavior', () => (_crd && nodes === void 0 ? (_reportPossibleCrUseOfnodes({
            error: Error()
          }), nodes) : nodes).selector());
        }

        //// Create instance of tree
        //helloTree = null;
        start() {//this.helloTree = this.HelloBehavior();
        }

        update(deltaTime) {//this.helloTree.tick(); 
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f3cfd3fb565dc5bc2f93646be3b0bf77f9ccd27f.js.map