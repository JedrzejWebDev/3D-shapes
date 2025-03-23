import useStore from "../store";
import { OrbitControls, Edges } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const ShapeViewer = () => {
  const { shape, size } = useStore();

  const numericSize = Number(size);

  return (
    <Canvas
      style={{ height: "calc(100vh - 144px)" }}
      camera={{ position: [3, 3, 3] }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {shape && size && <OrbitControls enableZoom={false} enablePan={false} />}
      <mesh>
        {shape === "cube" && size && (
          <>
            <boxGeometry args={[numericSize, numericSize, numericSize]} />
            <Edges color="black" />
          </>
        )}

        {shape === "sphere" && size && <sphereGeometry args={[numericSize]} />}
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};
