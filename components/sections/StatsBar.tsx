"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "20+", label: "Years of Craft" },
    { value: "40+", label: "Global Clients" },
    { value: "12", label: "Industry Awards" },
];

export default function StatsBar() {
    return (
        <section className="border-y border-white/5">
            <div className="container-fluid">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: [0.33, 1, 0.68, 1] as const,
                            }}
                            className="text-center"
                        >
                            <span className="block text-4xl md:text-5xl lg:text-6xl font-[var(--font-syne)] font-extrabold text-empire-gold">
                                {stat.value}
                            </span>
                            <span className="block mt-2 text-xs md:text-sm tracking-[0.15em] uppercase text-white/40 font-[var(--font-inter)]">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
