"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    description: string;
    gradient: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "Meridian Finance",
        category: "Branding · Web App",
        year: "2025",
        description: "Complete brand overhaul and fintech dashboard for a next-gen investment platform.",
        gradient: "from-neon-blue/20 to-transparent",
    },
    {
        id: "02",
        title: "Aether Studios",
        category: "3D · WebGL · Identity",
        year: "2024",
        description: "Immersive 3D portfolio and brand identity for a creative production house.",
        gradient: "from-empire-gold/20 to-transparent",
    },
    {
        id: "03",
        title: "Pulse Health",
        category: "Product Design · GTM",
        year: "2024",
        description: "End-to-end product design and go-to-market strategy for a health-tech startup.",
        gradient: "from-emerald-500/20 to-transparent",
    },
    {
        id: "04",
        title: "Nova Marketplace",
        category: "Development · UX",
        year: "2023",
        description: "High-performance e-commerce platform with AI-powered recommendations.",
        gradient: "from-purple-500/20 to-transparent",
    },
];

export default function SelectedWork() {
    return (
        <section id="work">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-4 block">
                            Selected Work
                        </span>
                        <SplitTextReveal
                            text="Case Studies"
                            as="h2"
                            className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-syne)] font-extrabold text-white"
                        />
                    </div>
                    <motion.a
                        href="#work"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-sm text-white/50 hover:text-empire-gold transition-colors duration-300 font-[var(--font-inter)] flex items-center gap-2 shrink-0"
                    >
                        View All Projects <ArrowUpRight size={14} />
                    </motion.a>
                </div>

                {/* Projects List */}
                <div className="space-y-1">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.id}
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.08,
                                ease: [0.33, 1, 0.68, 1] as const,
                            }}
                            className={`group block relative py-8 md:py-10 px-6 md:px-10 rounded-2xl border border-transparent hover:border-white/5 hover:bg-gradient-to-r ${project.gradient} transition-all duration-500 cursor-pointer`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                                {/* Number */}
                                <span className="text-sm text-white/20 font-[var(--font-syne)] font-bold w-16 shrink-0">
                                    {project.id}
                                </span>

                                {/* Title & Category */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-[var(--font-syne)] font-bold text-white group-hover:text-empire-gold transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-white/30 font-[var(--font-inter)]">
                                        {project.category}
                                    </p>
                                </div>

                                {/* Description (desktop) */}
                                <p className="hidden lg:block max-w-xs text-sm text-white/40 font-[var(--font-inter)] leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Year & Arrow */}
                                <div className="flex items-center gap-6 md:ml-8 shrink-0">
                                    <span className="text-sm text-white/20 font-[var(--font-inter)]">
                                        {project.year}
                                    </span>
                                    <ArrowUpRight
                                        size={20}
                                        className="text-white/20 group-hover:text-empire-gold group-hover:rotate-45 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Bottom divider */}
                            <div className="absolute bottom-0 left-6 right-6 h-px bg-white/5" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
