import React, { Suspense } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/earth.jpg";
import clouds from "../assets/cloud.jpg";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const AnimatedSphere = () => {
  const [colorMap, cloudMap] = useLoader(TextureLoader, [texture, clouds]);
  return (
    <>
      <ambientLight intensity={1} />
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <Suspense fallback={null}>
          <meshPhongMaterial
            attach="material"
            depthWrite={true}
            map={cloudMap}
            transparent={true}
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </Suspense>
      </Sphere>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 0, 10]} intensity={1} />
        <OrbitControls enableZoom={true} autoRotate={true} />
        <Suspense fallback={null}>
          <meshStandardMaterial map={colorMap} metalness={2} />
        </Suspense>
      </Sphere>
    </>
  );
};

export default AnimatedSphere;
