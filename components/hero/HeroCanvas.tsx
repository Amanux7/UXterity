"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroArtifact from "./DistortedSphere";

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.4} />
                    <pointLight position={[10, 10, 10]} intensity={1.2} color="#4f46e5" />
                    <pointLight position={[-8, -5, -8]} intensity={0.8} color="#D4AF37" />
                    <directionalLight position={[0, 5, 5]} intensity={0.6} color="#ffffff" />

                    {/* 3D Artifact */}
                    <HeroArtifact />
                </Suspense>
            </Canvas>
        </div>
    );
}
