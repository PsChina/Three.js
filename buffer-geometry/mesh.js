import * as THREE from 'three'
// geometry 几何学，几何体；  BufferGeometry 缓冲几何体。
const geometry = new THREE.BufferGeometry();
// vertices 顶点 x, y, z
// const vertices = new Float32Array([
//     0, 0, 0,
//     100, 0, 0,
//     0, 100, 0,
//     0, 0, 10,
//     0, 0, 100,
//     100, 0, 10
// ])

const vertices = new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,

    // 0, 100, 0,
    // 100, 0, 0,
    100, 100, 0
])
// BufferAttribute 缓冲区(几何体)属性 第二个参数 3 代表顶点位置（每个顶点需要 3 个数值） 或者 顶点颜色 1 代表索引数据
const attribute = new THREE.BufferAttribute(vertices, 3)
geometry.attributes.position = attribute;

// 优化存储空间
const indexes = new Uint16Array([
    0, 1, 2, 2, 1, 3
])

geometry.index = new THREE.BufferAttribute(indexes, 1)

const material = new THREE.MeshBasicMaterial({
    color:new THREE.Color('orange'),
    wireframe:true, // 展示线框 默认值为 false
});

const mesh = new THREE.Mesh(geometry, material)

export default mesh