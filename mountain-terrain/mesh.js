import * as THREE from 'three'
import { createNoise2D } from 'simplex-noise'

// 快速建立平面 宽高各分 100段
const geometry = new THREE.PlaneGeometry(3000, 3000, 100, 100)

const noise2D = createNoise2D()

const { position } = geometry.attributes

// 设置随机Z坐标
// for(let i = 0; i < position.count; i++) {
//     position.setZ(i, Math.random() * 50)
// }


export function updatePosition(){
    // 使用工具库设置平滑变化的坐标
    for(let i = 0; i < position.count; i++) {
        const x = position.getX(i)
        const y = position.getY(i)
        //  分母越大噪音幅度越小
        // const z = noise2D(x/100, y/100) * 50
        const z = noise2D(x/300, y/300) * 50
        const sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10

        position.setZ(i, z + sinNum)
    }
    position.needsUpdate = true
}

const material = new THREE.MeshBasicMaterial({
    color:new THREE.Color('orange'),
    wireframe:true // 显示组件网格的三角形线框
})

const mesh = new THREE.Mesh(geometry, material)

// 旋转90度
mesh.rotateX(Math.PI/2)

console.log(mesh)

export default mesh
