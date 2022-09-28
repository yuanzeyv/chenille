import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;   
import {nodes} from "./External/BTree.d";

@ccclass('test')
export class test extends Component {  
   // HelloBehavior = nodes.root('Hello behavior', () =>
   //   nodes.selector([
   //     //nodes.sequence([
   //     //  nodes.condition('Has admin role', () => {return true;}),
   //     //  nodes.action('Say hello to admin', () => {
   //     //    console.log('Hello boss')
   //     //  })
   //     //]),
   //     //nodes.action('Say hello to user', () => {
   //     //  console.log('Hello user')
   //     //})
   //   ]
   //   )
   // );

    //// Create instance of tree
    //helloTree = null;

    start() {   
        //this.helloTree = this.HelloBehavior();
    }

    update(deltaTime: number) {
        //this.helloTree.tick(); 
    }
}
  