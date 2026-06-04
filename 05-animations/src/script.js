import * as THREE from 'three';
import "./style.css";
import gsap from "gsap";

console.log(gsap);

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

let deltax = 0.9;
let rotatez = -0.9;
let time = Date.now();
const clock = new THREE.Clock();

//gsap
const tl = gsap.timeline({repeat:-1, repeatDelay:0, yoyo:true});
tl.from(mesh.position, {duration:4, delay:0, x:-2, });// 无限重复
tl.to(mesh.position, {duration:4, delay:0, x:2,  });// 无限重复
// tl.from(mesh.position, {duration:4, delay:0, x:2,  });// 无限重复
// tl.to(mesh.position, {duration:4, delay:0, x:-2, }); // 无限重复


// Animation
const tick = () => {
    //gsap库
    
    // console.log('tick');
    //时间戳
    // const currentTime = Date.now();
    // const deltaTime = (currentTime - time)*Math.pow(10,-3);
    // time = currentTime;
    
    // //update objects
    // // 获取物体边界框
    // const box = new THREE.Box3().setFromObject(mesh);
    // const size = new THREE.Vector3();
    // // box.getSize(size);
    // // console.log(mesh.position.x+box.x/2)
    // if (mesh.position.x > 2){
    //     deltax *= -1;
    //     rotatez *= -1;
    // } else if (mesh.position.x < -2) {
    //     // mesh.position.x += 0.01;
    //     deltax *= -1;
    //     rotatez *= -1;
    // }
    // // console.log(mesh.position.x)
    // mesh.position.x += deltax * deltaTime;
    // mesh.rotation.z += rotatez * deltaTime;
    
    //clock
    // const elapsedTime = clock.getElapsedTime();
    // //update objects
    // mesh.position.x = 2*Math.sin(elapsedTime/3);
    // mesh.rotation.z = -Math.sin(elapsedTime/3)*10;// * Math.PI * 2 ;
    // camera.lookAt(mesh.position);

    //render
    renderer.render(scene, camera);
    //请求动画重绘
    window.requestAnimationFrame(tick);
}

// tick()
const requestID = window.requestAnimationFrame(tick);
// window.cancelAnimationFrame(requestID);
const axesHelph = new THREE.AxesHelper(5);
scene.add(axesHelph);

// renderer.render(scene, camera);