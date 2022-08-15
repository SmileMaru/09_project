import * as THREE from 'https://cdn.skypack.dev/three@0.133.1/build/three.module';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls';
//

var { camera, scene, renderer, geometry, material, mesh, light, controls } = {}


scene = new THREE.Scene();
renderer = new THREE.WebGLRenderer({ alpha: true, })
// renderer.setClearColor(new THREE.Color('color: #fff)'))

renderer.setSize(816, 400)
document.getElementById('earth_container').appendChild(renderer.domElement)


camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 10)

controls = new OrbitControls(camera, renderer.domElement);


const texture = new THREE.TextureLoader().load("img/map1.jpg");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);

geometry = new THREE.SphereGeometry(0.2, 30, 16)

material = new THREE.MeshBasicMaterial({
  map: texture
});

mesh = new THREE.Mesh(geometry, material)
scene.add(mesh);

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
  mesh.rotation.y += 0.005
  controls.update();
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()