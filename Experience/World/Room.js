import * as THREE from 'three'
import Experience from "../Experience";
export default class Room{
    constructor(){
       
        
        this.experience = new Experience();
        this.scene = this.experience.scene;

        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color : 0x00ff00,wireframe:true })
        this.cube = new THREE.Mesh(geometry,material)
        this.scene.add(this.cube)
        
    }
    
    
    resize(){
       
    }
    update(){
        
    }
}