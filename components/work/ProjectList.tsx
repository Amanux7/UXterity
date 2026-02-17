"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, categories } from "@/app/work/data";

export default function ProjectList() {
    const [filter, setFilter] = useState("all");

    const filteredProjects = projects.filter((project) => {
        if (filter === "all") return true;
        // Check if the project tags include the selected filter (or motion maps to 3d for simplicity)
        if (filter === "3d" && project.tags.includes("motion")) return true;
        return project.tags.includes(filter);
    });

    return (
        <section id="project-list" className="pb-32 lg:pb-40">
            <div className="container-fluid">
                {/* Filter Controls */}
                <div className="flex flex-wrap gap-2 md:gap-4 mb-16 lg:mb-24">
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setFilter(cat.value)}
                            className={`px-5 py-2.5 rounded-full text-xs md:text-sm tracking-wide font-[var(--font-inter)] transition-all duration-300 border ${filter === cat.value
                                    ? "bg-white text-void border-white font-medium"
                                    : "bg-transparent text-white/50 border-white/10 hover:border-empire-gold/50 hover:text-white"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <a
                                    href={`/work/${project.id}`} // Future dynamic route
                                    className={`group block h-full relative p-8 rounded-3xl border border-white/5 bg-surface/20 hover:border-white/10 overflow-hidden transition-all duration-500`}
                                >
                                    {/* Hover Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                    <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                                        {/* Top: ID and Arrow */}
                                        <div className="flex justify-between items-start">
                                            <span className="text-sm text-white/20 font-[var(--font-syne)] font-bold">
                                                {project.id}
                                            </span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-empire-gold group-hover:border-empire-gold transition-all duration-300">
                                                <ArrowUpRight
                                                    size={18}
                                                    className="text-white/50 group-hover:text-void transition-colors duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom: Content */}
                                        <div>
                                            <h3 className="text-2xl font-[var(--font-syne)] font-bold text-white group-hover:text-empire-gold transition-colors duration-300 mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-white/40 font-[var(--font-inter)] mb-4">
                                                {project.category}
                                            </p>
                                            <p className="text-sm text-white/30 font-[var(--font-inter)] leading-relaxed line-clamp-2 group-hover:text-white/50 transition-colors">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center text-white/30 font-[var(--font-inter)]">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}
