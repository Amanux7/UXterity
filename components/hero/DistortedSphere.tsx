"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Wireframe Torus Knot ─── */
function WireframeKnot() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { pointer } = useThree();

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Slow auto-rotation
        meshRef.current.rotation.x += delta * 0.15;
        meshRef.current.rotation.z += delta * 0.1;

        // Magnetic mouse influence
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            pointer.x * 0.5,
            delta * 1.5
        );
    });

    return (
        <mesh ref={meshRef} scale={2.2}>
            <torusKnotGeometry args={[1, 0.35, 256, 32, 2, 3]} />
            <meshStandardMaterial
                color="#4f46e5"
                wireframe
                transparent
                opacity={0.35}
                emissive="#4f46e5"
                emissiveIntensity={0.3}
            />
        </mesh>
    );
}

/* ─── Inner Glowing Core ─── */
function GlowingCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;
        meshRef.current.scale.setScalar(0.6 + Math.sin(t * 0.8) * 0.08);
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[0.8, 1]} />
            <meshStandardMaterial
                color="#D4AF37"
                wireframe
                transparent
                opacity={0.2}
                emissive="#D4AF37"
                emissiveIntensity={0.6}
            />
        </mesh>
    );
}

/* ─── Orbiting Particles ─── */
function OrbitingParticles({ count = 200 }: { count?: number }) {
    const pointsRef = useRef<THREE.Points>(null);

    const [positions, speeds] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            // Distribute in a spherical shell
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 2.5 + Math.random() * 2;

            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);

            spd[i] = 0.2 + Math.random() * 0.5;
        }
        return [pos, spd];
    }, [count]);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const geo = pointsRef.current.geometry;
        const posAttr = geo.attributes.position as THREE.BufferAttribute;
        const t = state.clock.elapsedTime;

        for (let i = 0; i < count; i++) {
            const idx = i * 3;
            const x = positions[idx];
            const y = positions[idx + 1];
            const z = positions[idx + 2];
            const speed = speeds[i];

            // Rotate each particle around Y axis
            const angle = t * speed * 0.3;
            const cos = Math.cos(angle);
            const sin = Math.sin(angle);

            posAttr.array[idx] = x * cos - z * sin;
            posAttr.array[idx + 1] = y + Math.sin(t * speed + i) * 0.1;
            posAttr.array[idx + 2] = x * sin + z * cos;
        }
        posAttr.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions.slice(), 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#ffffff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

/* ─── Orbital Rings ─── */
function OrbitalRing({ radius, speed, tilt }: { radius: number; speed: number; tilt: number }) {
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!ringRef.current) return;
        ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    });

    return (
        <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
            <torusGeometry args={[radius, 0.005, 16, 128]} />
            <meshBasicMaterial color="#D4AF37" transparent opacity={0.15} />
        </mesh>
    );
}

/* ─── Main Export ─── */
export default function HeroArtifact() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y += delta * 0.05;
    });

    return (
        <group ref={groupRef}>
            <WireframeKnot />
            <GlowingCore />
            <OrbitingParticles count={250} />
            <OrbitalRing radius={3.2} speed={0.15} tilt={Math.PI * 0.35} />
            <OrbitalRing radius={3.8} speed={-0.1} tilt={Math.PI * 0.55} />
            <OrbitalRing radius={4.2} speed={0.08} tilt={Math.PI * 0.15} />
        </group>
    );
}
