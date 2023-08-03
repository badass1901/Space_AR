import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Sphere from "./components/AnimatedSphere";
import TorusKnot from "./components/Knot";
import Main from "./components/Main";
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";
function App() {
  // const scene = new THREE.Scene();
  // const camera = new THREE.PerspectiveCamera(
  //   75,
  //   window.innerWidth / window.innerHeight,
  //   0.1,
  //   1000
  // );

  // const renderer = new THREE.WebGLRenderer();

  // renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);
  // camera.position.z = 5;
  // const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
  // const planeMaterial = new THREE.MeshPhongMaterial({
  //   color: 0xff0000,
  //   side: THREE.DoubleSide,
  //   flatShading: THREE.FlatShading,
  // });
  // const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
  // scene.add(planeMesh);
  // const light = new THREE.DirectionalLight(0xffffff, 1);
  // light.position.set(0, 0, 1);
  // scene.add(light);
  // const { array } = planeMesh.geometry.attributes.position;
  // console.log(array);
  // for (let i = 0; i < array.length; i += 3) {
  //   const x = array[i];
  //   const y = array[i + 1];
  //   const z = array[i + 2];
  //   array[i + 2] = z + Math.random();
  // }

  // function animate() {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera);
  // }
  // animate();

  return (
    <div className="App">
      <h1>App</h1>
      <Canvas
        style={{
          height: "1000px",
        }}
      >
        <Stars
          radius={200}
          depth={60}
          count={20000}
          factor={7}
          saturation={0}
          fade={true}
        />
        <Sphere />
      </Canvas>
      {/* <Canvas>
        <OrbitControls enableZoom={false} rotation={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Main />
      </Canvas> */}

      {/* <Canvas
        style={{
          height: "500px",
          width: "500px",
        }}
        className="canvas"
      ></Canvas> */}

      <Canvas
        style={{
          height: "500px",
          width: "500px",
        }}
        className="canvas"
      ></Canvas>
      <Canvas
        style={{
          height: "500px",
          width: "500px",
        }}
        className="canvas"
      >
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={6}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <TorusKnot />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
