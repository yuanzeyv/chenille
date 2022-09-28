System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, CountDownLabelPrefab;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "175ablsIdlFjbhxngym7kUp", "CountDownLabelPrefab", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'CCObject', 'SpriteFrame', 'find', 'resources', 'Texture2D', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CountDownLabelPrefab", CountDownLabelPrefab = (_dec = ccclass('CountDownLabelPrefab'), _dec2 = property({
        type: Number
      }), _dec3 = property({
        type: Number,
        tooltip: "0代表时间类型,1代表普通"
      }), _dec4 = property(String), _dec5 = property(Boolean), _dec6 = property(Label), _dec7 = property(String), _dec(_class = (_class2 = class CountDownLabelPrefab extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Tick", _descriptor, this);

          _initializerDefineProperty(this, "TextType", _descriptor2, this);

          _initializerDefineProperty(this, "TimeTypeStr", _descriptor3, this);

          _initializerDefineProperty(this, "IsInc", _descriptor4, this);

          _initializerDefineProperty(this, "LabelNode", _descriptor5, this);

          _initializerDefineProperty(this, "EndTimeStr", _descriptor6, this);
        }

        start() {}

        UpdateLabel() {
          let a = new Date();
        }

        update(deltaTime) {
          this.Tick += this.IsInc ? deltaTime : -deltaTime;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Tick", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "TextType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "TimeTypeStr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "YYYY";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "IsInc", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "LabelNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "EndTimeStr", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=effcd00459e4d20760e9ecb05a8fd71cc741eb42.js.map