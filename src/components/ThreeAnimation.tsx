import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import type { Mesh } from 'three';

const RotatingCube = () => {
    const meshRef = useRef<Mesh>(null);

    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5;
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial color="#4f46e5" wireframe />
        </mesh>
    );
};

const ThreeAnimation = () => {
    return (
        <div className="h-full w-full min-h-[400px] flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <RotatingCube />
                </Float>
            </Canvas>
        </div>
    );
};

export default ThreeAnimation;
