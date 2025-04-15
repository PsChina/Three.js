import * as THREE from 'three'
// 几何体
const geometry = new THREE.BufferGeometry()
// 顶点
const vertices = new Float32Array([
    0,0,0,
    100,0,0,
    0,100,0,
    0,0,100,
    100,100,0
])
// 几何体属性
const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute

// 点材质
const material = new THREE.PointsMaterial({
    color: new THREE.Color('orange'),
    size:10
})
const points = new THREE.Points(geometry, material)

export default points