import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// //position属性是一个Vector3对象，包含x、y、z三个分量，表示物体在三维空间中的位置
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1   
// scene.add(mesh)

// console.log(mesh.position.length()) //获取位置向量的长度
// console.log(mesh.position.distanceTo(new THREE.Vector3(0, 1, 2))) //获取位置向量与另一个向量的距离
// console.log(mesh.position.normalize()) //将位置向量归一化
// mesh.position.set(0.8, -0.5, -1)    //直接设置位置向量的值


const group = new THREE.Group()
scene.add(group)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff0000})
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x00ff00})
)
cube2.rotateZ(Math.PI/4)
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x0000ff})
)
cube3.rotateZ(90)
group.add(cube3)

//移动组
group.position.y = 1


//axes helper显示坐标轴
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// //scale属性也是一个Vector3对象，包含x、y、z三个分量，表示物体在三个方向上的缩放比例
// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5
// mesh.scale.set(2, 0.25, 0.5) //直接设置缩放向量的值

// //rotation属性也是一个Vector3对象，包含x、y、z三个分量，表示物体绕三个轴的旋转角度，单位是弧度
// mesh.rotation.y = Math.PI / 4
// mesh.rotation.x = Math.PI / 4
// mesh.rotation.z = Math.PI / 4
// mesh.rotation.reorder('YXZ') //改变旋转顺序，默认是'XYZ'

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
camera.position.set(0, 0, 4) //直接设置位置向量的值
scene.add(camera)
camera.lookAt(new THREE.Vector3(0,0,1))
// camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)