import { _decorator, Component, Node, Sprite, CCObject, SpriteFrame, find, resources, Texture2D, Label } from 'cc';
import tempe from '../../Extern/Tempe';
const { ccclass, property } = _decorator; 
@ccclass('CountDownLabelPrefab')
export class CountDownLabelPrefab extends Component {
    @property(Number)
    Tick:number = 0;  
    @property(String)
    TimeTypeStr:string = "mm:ss";
    @property(Boolean)
    IsInc:Boolean = false;
    @property(Label)
    LabelNode:Label = null;
    @property(String)
    EndTimeStr:String = "";
    start() {  
    }  
    update(deltaTime: number) {  
    }
}