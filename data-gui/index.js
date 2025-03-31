import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial(({
    color: new THREE.Color('orange')
}));
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
scene.add(mesh);

const gui = new GUI()

const meshFolder = gui.addFolder('立方体')

meshFolder.addColor(mesh.material, 'color')
meshFolder.add(mesh.position, 'x').step(10)
meshFolder.add(mesh.position, 'y').step(10)
meshFolder.add(mesh.position, 'z').step(10)

const pointLight = new THREE.PointLight(0xffffff, 10000);
pointLight.position.set(80, 80, 80);
scene.add(pointLight);

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const lightFolder = gui.addFolder('灯光')

lightFolder.add(pointLight.position, 'x').step(10);
lightFolder.add(pointLight.position, 'y').step(10);
lightFolder.add(pointLight.position, 'z').step(10);
lightFolder.add(pointLight, 'intensity').step(1000);

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

render();

document.body.append(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);



// 过一下其他控件类型

const otherFolder = gui.addFolder('其他控件类型')

const obj = {
    a:'天王盖地虎',
    b:false,
    c:0,
    d:'1',
    f:'FFF',
    logic(){
        alert('执行一段逻辑')
        console.log(obj)
    }
}

otherFolder.add(obj, 'a');
otherFolder.add(obj, 'b');
otherFolder.add(obj, 'c').min(-10).max(10).step(0.1).onChange((val)=>{
    console.log('联动 val=>',val)
})
otherFolder.add(obj, 'd', ['1','2','3'])
otherFolder.add(obj, 'f', { FFF:0, GGG:0.2, SSS:10 })
otherFolder.add(obj, 'logic')

