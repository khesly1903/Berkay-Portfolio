import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function RotatingModel({ path }) {
  const model = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) ref.current.rotation.x += 0.01;
    // if (ref.current) ref.current.rotation.y += 0.01;
    // if (ref.current) ref.current.rotation.z += 0.01;

  });

  return <primitive object={model.scene} ref={ref} scale={1.5} rotation={[0, Math.PI , Math.PI / 5.1]} />;
}

export default function CryptexViewer() {
  return (
    <div className="full-bg cryptex">
      <Canvas camera={{ position: [0, 0, 300] }}>
        <ambientLight intensity={0.5} />

        <directionalLight position={[0.5, 5, 5]} />
        <Suspense fallback={null}>
          <RotatingModel path="/models/cryptex.glb" />
        </Suspense>
      </Canvas>
    </div>
  );
}