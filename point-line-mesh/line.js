import * as THREE from 'three'
// 缓冲区几何体
const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    0, 0, 100,
    100, 100, 0,
    0, 0, 50
])

const attribute = new THREE.BufferAttribute(vertices, 3)

geometry.attributes.position = attribute

const material = new THREE.LineBasicMaterial({
    color:new THREE.Color('orange')
})


// const line = new THREE.Line(geometry, material)

// 首位相连
// const line = new THREE.LineLoop(geometry, material)

// 每两个点一条线段
const line = new THREE.LineSegments(geometry, material)


export default line