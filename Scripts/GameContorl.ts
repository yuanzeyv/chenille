import { _decorator, Component, Node, resources, Game, director, Button } from 'cc';
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
    start() {
    } 
    RefreshGame(){  
        GameManager.RefreshGame(); 
    }
    update(deltaTime: number) { 
    }
}

