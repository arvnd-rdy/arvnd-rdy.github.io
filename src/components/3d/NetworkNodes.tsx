import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Node {
  position: THREE.Vector3;
  connections: number[];
}

export const NetworkNodes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const { nodes, lineGeometry } = useMemo(() => {
    const nodeCount = 12;
    const nodes: Node[] = [];
    
    // Create nodes in a rough sphere
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      
      const x = 8 * Math.cos(theta) * Math.sin(phi);
      const y = 8 * Math.sin(theta) * Math.sin(phi);
      const z = 8 * Math.cos(phi);
      
      nodes.push({
        position: new THREE.Vector3(x, y, z),
        connections: []
      });
    }
    
    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j && node.position.distanceTo(otherNode.position) < 12) {
          node.connections.push(j);
        }
      });
    });
    
    // Create line geometry for connections
    const points: number[] = [];
    nodes.forEach((node, i) => {
      node.connections.forEach(connectionIndex => {
        if (i < connectionIndex) { // Avoid duplicate lines
          points.push(
            node.position.x, node.position.y, node.position.z,
            nodes[connectionIndex].position.x, 
            nodes[connectionIndex].position.y, 
            nodes[connectionIndex].position.z
          );
        }
      });
    });
    
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    
    return { nodes, lineGeometry };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.2} />
      </lineSegments>
      
      {/* Nodes */}
      {nodes.map((node, index) => (
        <mesh key={index} position={node.position}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.6}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};