import { _decorator, Component, Node, Sprite, CCObject, SpriteFrame, find, resources, Texture2D, Label } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('CountDownLabelPrefab')
export class CountDownLabelPrefab extends Component {
    @property({type:Number})
    Tick:number = 0;
    @property({
        type:Number,
        tooltip:"0代表时间类型,1代表普通"})
    TextType:Number= 0;
    @property(String)
    TimeTypeStr:String = "YYYY";
    @property(Boolean)
    IsInc:Boolean = false;
    @property(Label)
    LabelNode:Label = null;
    @property(String)
    EndTimeStr:String = "";
    start() { 
    }
    UpdateLabel()
    {
        let a:Date = new Date();
        
    }
    update(deltaTime: number) { 
        this.Tick += this.IsInc ? deltaTime :-deltaTime;

    }
}