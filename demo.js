import * as THREE from 'https://cdn.skypack.dev/three@0.133.1/build/three.module';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls';


var { camera, scene, renderer, geometry, material, mesh, light, controls } = {}

//1. 建立場景
scene = new THREE.Scene();

//2. 建立 renderer : CSS | SVG | Canvas | WebGL
renderer = new THREE.WebGLRenderer({ alpha: true, })
// renderer.setClearColor(new THREE.Color('color: #fff)'))

//設定場景被渲染的大小
renderer.setSize(window.innerWidth, window.innerHeight)

//將渲染器綁定到網頁(DOM)上
document.getElementById('earth_container').appendChild(renderer.domElement)

//使渲染器可以依視窗比例
window.addEventListener('resize', function () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
})

//3. 建立攝影機
camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 10)

controls = new OrbitControls(camera, renderer.domElement);


const texture = new THREE.TextureLoader().load("./image/map/map1.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);

//建立物件和材質
geometry = new THREE.SphereGeometry(0.2, 30, 16)

material = new THREE.MeshBasicMaterial({
  map: texture
});
//材質
mesh = new THREE.Mesh(geometry, material)
scene.add(mesh);

//建立光源
light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(2, 2, 2)
scene.add(light)

var ambientLight = new THREE.AmbientLight('#333')
scene.add(ambientLight)

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
scene.add(directionalLight)

var spotLight = new THREE.SpotLight({ color: "#fff" })
spotLight.position.set(-20, 20, 10)
spotLight.CastShadow = true
scene.add(spotLight)

camera.position.z = 1;
controls.update();

function animate() {
  console.log('animate');
  light.position.x = 1
  mesh.rotation.y += 0.0010
  controls.update();
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()