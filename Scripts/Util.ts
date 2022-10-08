import { _decorator, Component, Node,Vec2,UITransform,math} from 'cc';
const { ccclass, property } = _decorator; 
export class Util{  
    static GetBoundingBoxToWorld(node:UITransform,rect:math.Rect){ 
       let worldRect:math.Rect = node.getBoundingBoxToWorld();
       if(worldRect.x < rect.x)
           rect.x = worldRect.x
       if(worldRect.y < rect.y)
           rect.y = worldRect.y
       if(worldRect.width > rect.width)
           rect.width = worldRect.width
       if(worldRect.height > rect.height)
           rect.height = worldRect.height
       let children = node.node.children;
       children.forEach((value,index,values)=>{
            if(value.active == false )
                return;
            let uiTrans = value.getComponent<UITransform>(UITransform) //比较最小  
            this.GetBoundingBoxToWorld(uiTrans,rect);
       });
       return rect;
    }
    
    static GetBoundingBox(node:UITransform){ 
        let rect:math.Rect = new math.Rect(9999999,9999999,-9999999,-9999999);
        this.GetBoundingBoxToWorld(node,rect);
        return rect;
     }
}

