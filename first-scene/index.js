import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

//场景
const scene = new THREE.Scene();

{
    // 盒子几何体 长宽高为100的立方体
    const geometry = new THREE.BoxGeometry(100,100,100)
    // 网格漫反射材质
    const material = new THREE.MeshLambertMaterial({
        color:new THREE.Color('orange')
    })

    // 网
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,0,0)
    scene.add(mesh)
}


{
    // 点光源
    const pointLight = new THREE.PointLight(0xffffff, 10000)
    pointLight.position.set(80,80,80);
    scene.add(pointLight)
}

{
    // 坐标系
    const axesHelper = new THREE.AxesHelper(200);
    scene.add(axesHelper)
}

{
    const width = window.innerWidth
    const height = window.innerHeight
    // 透视相机
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000)
    camera.position.set(200,200,200);
    camera.lookAt(0,0,0)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width,height)


    function render(){
        renderer.render(scene, camera)
        requestAnimationFrame(render)
    }

    render();

    document.body.append(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
}

