"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Particle system for the cosmic explosion
function ParticleField({
  count = 15000,
  scrollProgress
}: {
  count?: number;
  scrollProgress: number
}) {
  const ref = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  // Generate particles in a sphere that will explode outward
  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Start clustered at center
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.random() * 0.5;

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      // Velocity direction (outward)
      vel[i3] = pos[i3] * (2 + Math.random() * 3);
      vel[i3 + 1] = pos[i3 + 1] * (2 + Math.random() * 3);
      vel[i3 + 2] = pos[i3 + 2] * (2 + Math.random() * 3);

      // Color gradient based on distance (birth = warm, far = cool)
      const t = Math.random();
      if (t < 0.3) {
        // Warm core - orange/gold
        col[i3] = 1;
        col[i3 + 1] = 0.4 + Math.random() * 0.3;
        col[i3 + 2] = 0.2;
      } else if (t < 0.6) {
        // Mid - cyan
        col[i3] = 0.1;
        col[i3 + 1] = 0.8 + Math.random() * 0.2;
        col[i3 + 2] = 1;
      } else {
        // Far - purple
        col[i3] = 0.6 + Math.random() * 0.3;
        col[i3 + 1] = 0.3;
        col[i3 + 2] = 1;
      }
    }

    return [pos, vel, col];
  }, [count]);

  // Original positions for lerping
  const originalPositions = useMemo(() => positions.slice(), [positions]);

  useFrame((state) => {
    if (!ref.current) return;

    const geometry = ref.current.geometry;
    const positionAttribute = geometry.getAttribute("position") as THREE.BufferAttribute;
    const posArray = positionAttribute.array as Float32Array;

    // Explosion progress based on scroll
    const explosionProgress = Math.min(scrollProgress * 3, 1);

    // Additional time-based animation
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Lerp from original to exploded position
      const targetX = originalPositions[i3] + velocities[i3] * explosionProgress * 15;
      const targetY = originalPositions[i3 + 1] + velocities[i3 + 1] * explosionProgress * 15;
      const targetZ = originalPositions[i3 + 2] + velocities[i3 + 2] * explosionProgress * 15;

      // Add subtle floating motion
      const floatOffset = Math.sin(time * 0.5 + i * 0.01) * 0.05 * explosionProgress;

      posArray[i3] = targetX + floatOffset;
      posArray[i3 + 1] = targetY + floatOffset;
      posArray[i3 + 2] = targetZ;
    }

    positionAttribute.needsUpdate = true;

    // Rotate the entire field slowly
    ref.current.rotation.y = time * 0.02;
    ref.current.rotation.x = Math.sin(time * 0.01) * 0.1;

    // Update material opacity based on scroll
    if (materialRef.current) {
      materialRef.current.opacity = 0.6 + Math.sin(time) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Central singularity point
function Singularity({ scrollProgress }: { scrollProgress: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current || !glowRef.current) return;

    const time = state.clock.elapsedTime;

    // Pulse effect
    const pulse = 1 + Math.sin(time * 3) * 0.1;
    const scale = Math.max(0.1, 1 - scrollProgress * 2) * pulse;

    ref.current.scale.setScalar(scale);
    glowRef.current.scale.setScalar(scale * 3);

    // Intensity increases before explosion
    const material = ref.current.material as THREE.MeshBasicMaterial;
    material.opacity = Math.max(0, 1 - scrollProgress * 3);
  });

  return (
    <group>
      {/* Core */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={1} />
      </mesh>
      {/* Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Energy rings that appear during force sections
function EnergyRings({ scrollProgress, activeForce }: { scrollProgress: number; activeForce: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const forceColors = useMemo(() => [
    "#ffffff",  // Singularity
    "#22d3ee",  // Logistics
    "#a855f7",  // Technology
    "#fbbf24",  // Finance
    "#f97316",  // Trade
    "#10b981",  // Real Estate
    "#ffffff",  // Convergence
  ], []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.rotation.z = time * 0.1;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
  });

  // Only show rings during force sections (progress > 0.15)
  const ringOpacity = scrollProgress > 0.12 && scrollProgress < 0.95 ?
    Math.min(1, (scrollProgress - 0.12) * 5) : 0;

  return (
    <group ref={groupRef}>
      {[1, 1.5, 2, 2.5].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.5]}>
          <torusGeometry args={[radius + activeForce * 0.5, 0.01, 16, 100]} />
          <meshBasicMaterial
            color={forceColors[activeForce] || "#ffffff"}
            transparent
            opacity={ringOpacity * (0.3 - i * 0.05)}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Camera controller
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    // Camera pulls back as universe expands
    const z = 5 - scrollProgress * 2;
    camera.position.z = Math.max(3, z);

    // Slight camera movement for dynamism
    camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 0.5;
    camera.position.y = Math.cos(scrollProgress * Math.PI) * 0.3;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Mouse interaction
function MouseInteraction() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    // Subtle camera tilt based on mouse position
    camera.rotation.x = -pointer.y * 0.1;
    camera.rotation.y = pointer.x * 0.1;
  });

  return null;
}

interface CosmicSceneProps {
  scrollProgress: number;
  activeForce: number;
}

export function CosmicScene({ scrollProgress, activeForce }: CosmicSceneProps) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 30]} />

        <CameraController scrollProgress={scrollProgress} />
        <MouseInteraction />

        <Singularity scrollProgress={scrollProgress} />
        <ParticleField scrollProgress={scrollProgress} />
        <EnergyRings scrollProgress={scrollProgress} activeForce={activeForce} />

        {/* Ambient glow */}
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />
      </Canvas>
    </div>
  );
}
