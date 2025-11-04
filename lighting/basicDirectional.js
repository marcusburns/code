import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';

export function applyLighting(scene, renderer) {
  const light = new THREE.DirectionalLight(0xffffff, 1.5);
  light.position.set(5, 10, 7.5);
  light.castShadow = true;

  scene.add(light);

  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
}
