System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, test;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
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
        //HelloBehavior = nodes.root('Hello behavior', () =>
        //  nodes.selector([
        //    nodes.sequence([
        //      nodes.condition('Has admin role', (state) => {return true;}),
        //      nodes.action('Say hello to admin', () => {
        //        console.log('Hello boss')
        //      })
        //    ]),
        //    nodes.action('Say hello to user', () => {
        //      console.log('Hello user')
        //    })
        //  ])
        //)
        //// Create instance of tree
        //helloTree = null;
        start() {//this.helloTree = this.HelloBehavior(true);
        }

        update(deltaTime) {//this.helloTree.tick(); 
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2242eb9409f580a7a4ea64d0018e7eefe2a230d.js.map