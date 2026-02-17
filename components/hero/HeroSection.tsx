"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import to avoid SSR for R3F
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-void" />,
});

const lineVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i: number) => ({
        y: "0%",
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.4 + i * 0.15,
            ease: [0.33, 1, 0.68, 1] as const,
        },
    }),
};

const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: 1.2, ease: [0.33, 1, 0.68, 1] as const },
    },
};

const scrollVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 2, duration: 1 },
    },
};

const lines = ["SMART IDEAS.", "BOLD EXECUTIONS."];

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-void">
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* 3D Canvas */}
            <HeroCanvas />

            {/* Typography Overlay */}
            <div
                className="relative z-10 text-center pointer-events-none select-none"
                style={{ mixBlendMode: "exclusion" }}
            >
                {lines.map((line, i) => (
                    <div key={i} className="overflow-hidden">
                        <motion.h1
                            className="font-[var(--font-syne)] font-extrabold text-[clamp(2.5rem,8vw,9rem)] leading-[0.95] tracking-[-0.02em] text-white whitespace-nowrap"
                            custom={i}
                            variants={lineVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {line}
                        </motion.h1>
                    </div>
                ))}

                <motion.p
                    className="mt-8 text-base md:text-lg lg:text-xl text-white/50 max-w-xl mx-auto font-[var(--font-inter)] leading-relaxed px-6"
                    variants={subtitleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    We are a premium digital agency that builds empires through
                    branding, technology, and go-to-market strategy.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                variants={scrollVariants}
                initial="hidden"
                animate="visible"
            >
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-[var(--font-inter)]">
                    Scroll
                </span>
                <motion.div
                    className="w-px h-10 bg-gradient-to-b from-empire-gold to-transparent origin-top"
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-[5]" />
        </section>
    );
}
