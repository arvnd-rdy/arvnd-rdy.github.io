import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Vector3, Color } from "three";

// Hook to get CSS variable value
const useCSSVariable = (variableName: string) => {
  const [value, setValue] = useState("0x000000");

  useEffect(() => {
    const updateColor = () => {
      const style = getComputedStyle(document.body);
      const temp = document.createElement("div");
      temp.style.color = `hsl(var(${variableName}))`;
      temp.style.display = "none";
      document.body.appendChild(temp);
      const color = getComputedStyle(temp).color;
      document.body.removeChild(temp);
      setValue(color);
    };

    updateColor();
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, [variableName]);

  return value;
};

const InteractiveShape = ({
  position,
  geometry: Geometry,
  scale,
  speed = 1,
  mousePos
}: {
  position: [number, number, number];
  geometry: any;
  scale: number;
  speed?: number;
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
}) => {
  const meshRef = useRef<any>(null);
  const { viewport } = useThree();
  const initialPos = useMemo(() => new Vector3(...position), [position]);
  const color = useCSSVariable("--foreground");

  useFrame((state) => {
    if (!meshRef.current) return;

    // Continuous rotation
    meshRef.current.rotation.x += 0.002 * speed;
    meshRef.current.rotation.y += 0.003 * speed;

    // Mouse interaction - gentle parallax using global mouse ref
    // Convert normalized mouse (-1 to 1) to viewport units
    const x = (mousePos.current.x * viewport.width) / 20;
    const y = (mousePos.current.y * viewport.height) / 20;

    // Lerp towards mouse position offset
    meshRef.current.position.x += (initialPos.x + x - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += (initialPos.y + y - meshRef.current.position.y) * 0.05;
  });

  return (
    <Float speed={2 * speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={scale}>
        <Geometry args={[1, 1]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  // Global mouse tracking
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize to -1 to 1
      mousePos.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['transparent']} />

        {/* Large Icosahedron */}
        <InteractiveShape
          position={[8, 2, 0]}
          scale={5}
          geometry={(props: any) => <icosahedronGeometry {...props} args={[1, 0]} />}
          speed={0.8}
          mousePos={mousePos}
        />

        {/* Medium Octahedron */}
        <InteractiveShape
          position={[-8, -4, 0]}
          scale={4}
          geometry={(props: any) => <octahedronGeometry {...props} args={[1, 0]} />}
          speed={1.0}
          mousePos={mousePos}
        />

        {/* Small Icosahedron */}
        <InteractiveShape
          position={[-10, 8, 0]}
          scale={2}
          geometry={(props: any) => <icosahedronGeometry {...props} args={[1, 0]} />}
          speed={1.2}
          mousePos={mousePos}
        />

        {/* Small Octahedron */}
        <InteractiveShape
          position={[10, -8, 0]}
          scale={2.5}
          geometry={(props: any) => <octahedronGeometry {...props} args={[1, 0]} />}
          speed={0.9}
          mousePos={mousePos}
        />

        {/* Center detailed shape for interest - Torus */}
        <InteractiveShape
          position={[0, 0, -5]}
          scale={15}
          geometry={(props: any) => <torusGeometry {...props} args={[10, 3, 16, 100]} />}
          speed={0.2}
          mousePos={mousePos}
        />

      </Canvas>

      {/* Subtle overlay for depth feeling */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />
    </div>
  );
};

export default Background3D;
