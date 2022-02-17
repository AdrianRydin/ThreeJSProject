import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { WireframeGeometry } from "three";

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects

const Geometry = new THREE.SphereBufferGeometry(0.5, 64, 64);

// Materials

const material = new THREE.MeshStandardMaterial();
material.wireframe = true;
material.metalness = 0.5;
material.roughness = 0.9;
material.color = new THREE.Color(0xff0000);

// Mesh
const sphere = new THREE.Mesh(Geometry, material);
scene.add(sphere);

// Light 1

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(1, 1, 1);
pointLight.intensity = 0.3;
pointLight.castShadow = true;

scene.add(pointLight);

const light = gui.addFolder("Light 1");

light.add(pointLight.position, "x").min(-3).max(3).step(0.01);
light.add(pointLight.position, "y").min(-6).max(6).step(0.01);
light.add(pointLight.position, "z").min(-3).max(3).step(0.01);
light.add(pointLight, "intensity").min(0).max(10).step(0.01);

const lightColor = {
  color: 0xff0000,
};

light.addColor(lightColor, "color").onChange(() => {
  pointLight.color.set(lightColor.color);
});

// Light 2

const pointLight2 = new THREE.PointLight(0xd2);

pointLight2.position.set(-1.08, -1.06, 0);
pointLight2.intensity = 5.78;
pointLight2.castShadow = true;

scene.add(pointLight2);

const light2 = gui.addFolder("Light 2");

light2.add(pointLight2.position, "x").min(-3).max(3).step(0.01);
light2.add(pointLight2.position, "y").min(-6).max(6).step(0.01);
light2.add(pointLight2.position, "z").min(-3).max(3).step(0.01);
light2.add(pointLight2, "intensity").min(0).max(10).step(0.01);

const light2Color = {
  color: 0xd2,
};

light2.addColor(light2Color, "color").onChange(() => {
  pointLight2.color.set(light2Color.color);
});

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  sphere.rotation.y = 0.1 * elapsedTime;
  sphere.rotation.x = 0.01 * elapsedTime;

  // Render

  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
