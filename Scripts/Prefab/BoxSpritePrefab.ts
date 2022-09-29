import { _decorator, Component, Node, Sprite,PageView, CCObject, SpriteFrame, find, resources, Texture2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BoxSpritePrefab')
export class BoxSpritePrefab extends Component {
    @property({
        type:Number,    
        displayName:"图片类型",
        tooltip:"用于显示宝箱图片",
        min:0,
        max:2,
        step:1,
    })
    BoxType:number = 0;
    @property(Sprite)
    ImageSprite:Sprite = null;  
    @property({
        type:Boolean,    
        displayName:"宝箱状态",  
    }) 
    BoxStatus:Boolean = false;//默认为关闭状态

    @property(SpriteFrame)
    SpriteOpenArr:SpriteFrame[] = Array<SpriteFrame>();
    @property(SpriteFrame)
    SpriteCloseArr:SpriteFrame[] = Array<SpriteFrame>();

    CloseImage:SpriteFrame = null;
    OpenImage:SpriteFrame = null;

    FrontBoxType:number = 0;//前一帧盒子类型
    FrontBoxStatus:Boolean = true;//前一帧盒子状态
    start() { 
    }
    IsChangeStatus(){
        if(this.FrontBoxStatus != this.BoxStatus){
            this.ChangeStatus();//改变一下当前的状态
        }
    }
    IsChangeType(){ 
        if(this.FrontBoxType != this.BoxType){
            this.ChangeType();//改变一下当前的类型
            this.ChangeStatus();//改变一下当前的状态
        }
    }
    ChangeType(){
        
        this.OpenImage = this.SpriteOpenArr[this.BoxType];
        this.CloseImage = this.SpriteCloseArr[this.BoxType];
        this.FrontBoxType = this.BoxType;
    }
    ChangeStatus(){  
        this.ImageSprite.spriteFrame = this.BoxStatus ? this.OpenImage : this.CloseImage;
        this.FrontBoxStatus = this.BoxStatus;
    }
    update(deltaTime: number) {
        
        this.IsChangeType();
        this.IsChangeStatus();
    }
}