import { MeshDistortMaterial, Mesh } from "@react-three/drei";
import React from "react";

const Main = () => {
  return (
    <mesh>
      <planeGeometry attach="geometry" args={[5, 5, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        color="red"
        side={2}
        flatShading={true}
      />
    </mesh>
  );
};

export default Main;
