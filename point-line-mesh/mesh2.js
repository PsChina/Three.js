import * as THREE from 'three'
// 新建分段几何体 PlaneGeometry 继承自 BufferGeometry  BufferGeometry 更高效 PlaneGeometry 则更直观和快捷的建立几何体
// 第三个参数和第四个参数分别代表 宽和高的分段 分段越多越细腻 同事也越损耗性能。
const geometry = new THREE.PlaneGeometry(100, 100, 2, 3)

//PlaneGeometry 内置了生成 vertices  position 等的代码

const material = new THREE.MeshBasicMaterial(({
    color: new THREE.Color('orange'),
    wireframe: true // 展示线框 即几何体如何被三角形构成的线框
}))

const mesh = new THREE.Mesh(geometry, material)

console.log(mesh)

export default mesh;