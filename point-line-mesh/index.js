import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
// import mesh from './points.js'
import mesh from './line.js'

const scene = new THREE.Scene()

scene.add(mesh)

// 新建点光源
const pointLight = new THREE.PointLight(0xffffff, 10000)
// 设置点光源位置
pointLight.position.set(80, 80, 80)
scene.add(pointLight)

// const axesHelper = new THREE.AxesHelper(200)
// scene.add(axesHelper)

const width = window.innerWidth
const height = window.innerHeight
// 新建相机
const camera = new THREE.PerspectiveCamera(60, width/height, 1, 1000)
// 设置相机位置
camera.position.set(200, 200, 200)
// 设置相机朝向
camera.lookAt(0, 0, 0)

// 场景渲染者
const renderer = new THREE.WebGLRenderer()
// 设置场景渲染大小
renderer.setSize(width, height)

function render(){
    renderer.render(scene, camera)
    requestAnimationFrame(render)
}

render()


document.body.append(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)


