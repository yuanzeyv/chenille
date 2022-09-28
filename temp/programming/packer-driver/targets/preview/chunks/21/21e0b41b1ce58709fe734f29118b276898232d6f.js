System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, resources, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BoxSpritePrefab;

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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6961WZteJNt4cu+fFy59jZ", "BoxSpritePrefab", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'CCObject', 'SpriteFrame', 'find', 'resources', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BoxSpritePrefab", BoxSpritePrefab = (_dec = ccclass('BoxSpritePrefab'), _dec2 = property({
        type: Number,
        displayName: "ͼƬ����",
        tooltip: "������ʾ����ͼƬ",
        min: 1,
        max: 4,
        step: 1
      }), _dec3 = property(Sprite), _dec4 = property({
        type: Boolean,
        displayName: "����״̬"
      }), _dec(_class = (_class2 = class BoxSpritePrefab extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "BoxType", _descriptor, this);

          _initializerDefineProperty(this, "ImageSprite", _descriptor2, this);

          _initializerDefineProperty(this, "BoxStatus", _descriptor3, this);

          this.CloseImage = null;
          this.OpenImage = null;
          this.FrontBoxType = 0;
          this.FrontBoxStatus = true;
        }

        //ǰһ֡����״̬
        start() {}

        IsChangeStatus() {
          if (this.FrontBoxStatus != this.BoxStatus) {
            this.ChangeStatus(); //�ı�һ�µ�ǰ��״̬
          }
        }

        IsChangeType() {
          if (this.FrontBoxType != this.BoxType) {
            this.ChangeType(); //�ı�һ�µ�ǰ������

            this.ChangeStatus(); //�ı�һ�µ�ǰ��״̬
          }
        }

        ChangeType() {
          resources.load("/BoxClose_" + this.BoxType + "spriteFrame", SpriteFrame, (err, frame) => {
            if (err) {
              console.log(err);
              return;
            }

            this.CloseImage = frame;
          });
          resources.load("/BoxOpen_" + this.BoxType + "spriteFrame", SpriteFrame, (err, frame) => {
            if (err) {
              console.log(err);
              return;
            }

            this.OpenImage = frame;
          });
          this.FrontBoxType = this.BoxType;
        }

        ChangeStatus() {
          this.ImageSprite.spriteFrame = this.BoxStatus ? this.OpenImage : this.CloseImage;
          this.FrontBoxStatus = this.BoxStatus;
        }

        update(deltaTime) {
          this.IsChangeType();
          this.IsChangeStatus();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BoxType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ImageSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BoxStatus", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21e0b41b1ce58709fe734f29118b276898232d6f.js.map