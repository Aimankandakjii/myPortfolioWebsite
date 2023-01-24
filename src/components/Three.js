import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[3, 3, 2]} />
      <MeshWobbleMaterial
        attach="material"
        color="red"
        speed={3}
        factor={0.2}
      />
    </mesh>
  );
}

export default function Three() {
  return (
    <div className="md:maxh-[800px] m-auto  md:ml-52 w-[200px] md:w-[400px] h-[400px] md:minh-[700px]  ">
      <Canvas
        className="mix-blend-difference bg-black
         md:bg-white md:z-40 rounded-full"
        camera={{ fov: 60, position: [4, 0, 4] }}
      >
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <spotLight position={[0, 10, 5]} angle={10} />
        <spotLight position={[4, 4, 10]} angle={90} />
        <Box />
      </Canvas>
    </div>
  );
}
