import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/map3.jpg";
import { MeshDistortMaterial } from "@react-three/drei";
const Knot = () => {
  const colorMap = useLoader(TextureLoader, texture);
  return (
    <mesh>
      <torusKnotGeometry attach="geometry" args={[1, 0.2, 255, 10, 3, 7]} />

      <MeshDistortMaterial
        distort={0.2}
        speed={4}
        roughness={0.3}
        radius={1}
        map={colorMap}
        // metalness={0.4}
      />
    </mesh>
  );
};

export default Knot;
