import * as THREE from 'three'

import { OrbitControls } from 'three/addons/controls/OrbitControls'

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';


const scene = new THREE.Scene()

// 显示坐标系
const axesHelper = new THREE.AxesHelper(200)
// scene.add(axesHelper)

const width = window.innerWidth
const height = window.innerHeight

const camera = new THREE.PerspectiveCamera(60, width/height, 1, 1000);
camera.position.set(200,200,200)
camera.lookAt(0,0,0)

// 要看视椎体的话，我们需要创建另一个相机，用这个相机来观察：
// Three.js 提供了一个 CameraHelper 来画视椎体，传入 camera 就行：
// 这是另一个相机 fov, aspect, near far
const camera2 = new THREE.PerspectiveCamera(20, 16 / 9, 100, 300);
// 模拟相机视锥体.
let cameraHelper = new THREE.CameraHelper(camera2);
scene.add(cameraHelper);

const gui = new GUI();
function onChange() {
    scene.remove(cameraHelper);
    cameraHelper = new THREE.CameraHelper(camera2);
    scene.add(cameraHelper);
}
gui.add(camera2, 'fov', [30, 60, 10]).onChange(onChange);
gui.add(camera2, 'aspect', {
    '16/9': 16/9,
    '4/3': 4/3
}).onChange(onChange);
gui.add(camera2, 'near', 0, 300).onChange(onChange);
gui.add(camera2, 'far', 300, 800).onChange(onChange);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height)

function render(){
    renderer.render(scene, camera)
    requestAnimationFrame(render)
}

render()

document.body.append(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)


