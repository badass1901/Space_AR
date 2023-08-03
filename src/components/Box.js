import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/map.jpg";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh rotation={[90, 0, 20]}>
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        <boxGeometry attach="geometry" args={[3, 3, 3]} />
        <meshStandardMaterial map={colorMap} />
      </Suspense>
    </mesh>
  );
};

export default Box;
