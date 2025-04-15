import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import mesh from './mesh.js'
import mesh2 from './mesh2.js'
import mesh3 from './mesh3.js'

const scene = new THREE.Scene()

scene.add(mesh3)

const pointLight = new THREE.PointLight(0xffffff, 10000);

pointLight.position.set(80,80,80)

scene.add(pointLight)
// 每个坐标轴（X/Y/Z） 会从原点 (0,0,0) 向外延伸 200 个单位。
const axesHelper = new THREE.AxesHelper(200)

scene.add(axesHelper)

const width = window.innerWidth
const height = window.innerHeight
//  PerspectiveCamera(fov?: number, aspect?: number, near?: number, far?: number): THREE.PerspectiveCamera
const camera = new THREE.PerspectiveCamera(60,width/height,1,1000)
// 相机位置
camera.position.set(200,200,200)
// 相机朝向
camera.lookAt(0,0,0)
// 渲染者
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
// 自定义渲染函数
function render(){
    // 渲染者需要场景和相机才能渲染场景
    renderer.render(scene,camera)
    // 不断递归自己刷新页面
    requestAnimationFrame(render)
}
// 渲染
render()

document.body.append(renderer.domElement)
// 修改参数的控制器
const controls = new OrbitControls(camera, renderer.domElement)

