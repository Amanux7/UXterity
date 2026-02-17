"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Timeline() {
    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-empire-gold/40 via-white/10 to-transparent" />

            <div className="space-y-16 md:space-y-24">
                {timeline.map((item, i) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-5%" }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: [0.33, 1, 0.68, 1] as const,
                        }}
                        className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Dot on timeline */}
                        <div className="absolute left-6 md:left-1/2 top-2 w-3 h-3 -ml-1.5 rounded-full bg-empire-gold shadow-[0_0_12px_rgba(212,175,55,0.5)] z-10" />

                        {/* Content */}
                        <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                            <span className="text-empire-gold font-[var(--font-syne)] font-extrabold text-lg">
                                {item.year}
                            </span>
                            <h3 className="mt-2 text-2xl md:text-3xl font-[var(--font-syne)] font-bold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm md:text-base text-white/40 leading-relaxed font-[var(--font-inter)]">
                                {item.description}
                            </p>
                        </div>

                        {/* Spacer for alternating layout */}
                        <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
