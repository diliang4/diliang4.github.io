import { useEffect } from 'react';
import AnimatedText from 'react-animated-text-content';
import * as THREE from 'three';
// import "./App.css";

// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import TextLoop from "react-text-loop";
// import Link from 'react-router';
// import { BodyText } from "./ui";
 

import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);
    
    let loadedModel;
    let mixer;
    const glftLoader = new GLTFLoader();
    glftLoader.load('src/assets/doggo/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);

      gltfScene.scene.rotation.y = Math.PI / 10;
      gltfScene.scene.position.y = 8;
      gltfScene.scene.scale.set(5, 5, 5);

      test.scene.add(gltfScene.scene);
      mixer = new THREE.AnimationMixer(gltfScene.scene);
      const clips = gltfScene.animations;
      clips.forEach(function(clip) {
        const action = mixer.clipAction(clip);
        action.play();
      });

    });
const clock = new THREE.Clock();
    const animate = () => {
      if (mixer) {
        mixer.update(clock.getDelta());
      }
      if (loadedModel) {
        // loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.001;
        //loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>



     
      <canvas id="myThreeJsCanvas" />
     
    </div>
  );
}

export default App;