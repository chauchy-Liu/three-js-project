import * as THREE from 'three'
console.log('JavaScript is working!')
console.log('I just reload the page!') 
console.log(THREE)

//引用画布
const canvas = document.querySelector('canvas.webgl')
console.log(canvas)

//创建场景
const scene = new THREE.Scene()
// const sphereGemometry = new THREE.SphereGeometry(1.5, 32, 32)

//objects
	//geometry
const geometry = new THREE.BoxGeometry(1,1,1)
    //material
const material = new THREE.MeshBasicMaterial({color:0xff0000, wireframe:true})
    //mesh
const mesh = new THREE.Mesh(geometry, material)
    //add mesh to scene
scene.add(mesh)

//camera
    //size
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
camera.position.x = 1
scene.add(camera)

//renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)