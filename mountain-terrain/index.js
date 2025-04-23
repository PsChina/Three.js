import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import mesh, { updatePosition } from './mesh.js'

const scene = new THREE.Scene()

scene.add(mesh)
// 坐标系辅助线
// const axesHelper = new THREE.AxesHelper(200)

// scene.add(axesHelper)

const width = window.innerWidth
const height = window.innerHeight

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000)
// camera.position.set(200, 200, 200)
camera.position.set(450, 150, 100)
camera.lookAt(0,0,0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)

function render(){
    updatePosition()
    mesh.rotateZ(0.0006)
    renderer.render(scene, camera)
    requestAnimationFrame(render)
}

render()

document.body.append(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

controls.addEventListener('change',()=>{
    console.log(camera.position)
})