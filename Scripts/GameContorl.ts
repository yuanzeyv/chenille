import { _decorator, Component, Node, resources, Game, director, Button, UITransform, math,Graphics, Color, Vec2 } from 'cc';
import { Util } from './Util';

const { ccclass, property } = _decorator;
export class GameManager{
    static a:number = 999;
    static RefreshGame(){ 
        director.getScene().removeAllChildren();
        director.preloadScene("GameScene",function(){
            console.log("Next scene preloaded");
            director.loadScene("GameScene");
        }); 
    }
}

//负责控制游戏流程的单元
@ccclass('GameContorl')
export class GameContorl extends Component {  
    @property(UITransform)
    trans:UITransform = null;
    @property(Graphics)
    grap:Graphics = null;
    start() {
    } 
    RefreshGame(){  
        GameManager.RefreshGame(); 
    }
    update(deltaTime: number) {  
        let rect = Util.GetBoundingBox(this.trans)
        // 从(100,100)到(300,300)画一条宽为3像素的绿色直线
       this.grap.clear();
       this.grap.moveTo(rect.x,rect.y);
       this.grap.lineTo(rect.x,rect.y + rect.height);
       this.grap.stroke(); 
       this.grap.moveTo(rect.x,rect.y);
       this.grap.lineTo(rect.x + rect.width,rect.y );
       this.grap.stroke(); 
       this.grap.moveTo(rect.x,rect.y + rect.height);
       this.grap.lineTo(rect.x + rect.width,rect.y + rect.height );
       this.grap.stroke(); 
       this.grap.moveTo(rect.x + rect.width,rect.y );
       this.grap.lineTo(rect.x + rect.width,rect.y + rect.height );
       this.grap.stroke();  
        console.log(rect);
    }
}

