"use client";

import { motion } from "framer-motion";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

export default function AboutSection() {
    return (
        <section id="about">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left — Statement */}
                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                            Philosophy
                        </span>
                        <SplitTextReveal
                            text="We don't just design. We architect digital empires."
                            as="h2"
                            className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-syne)] font-extrabold text-white leading-[1.1]"
                        />
                    </div>

                    {/* Right — Body copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] as const }}
                        className="space-y-6 lg:pt-8"
                    >
                        <p className="text-base md:text-lg text-white/50 leading-relaxed font-[var(--font-inter)]">
                            For over two decades, we&apos;ve been the architects behind some of the
                            most ambitious digital products in the market. We combine deep
                            strategic thinking with obsessive craft to build brands that command
                            attention and products that people genuinely love.
                        </p>
                        <p className="text-base md:text-lg text-white/50 leading-relaxed font-[var(--font-inter)]">
                            Every pixel, every interaction, every line of code — it all serves a
                            singular purpose: to make your vision inevitable. We don&apos;t do
                            &ldquo;good enough.&rdquo; We do extraordinary.
                        </p>

                        {/* Capabilities tags */}
                        <div className="pt-6 flex flex-wrap gap-3">
                            {[
                                "Strategy",
                                "Branding",
                                "UI/UX Design",
                                "Web Development",
                                "WebGL & 3D",
                                "Motion Design",
                                "Go-To-Market",
                                "Content",
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 text-xs tracking-wide text-white/50 border border-white/10 rounded-full hover:border-empire-gold/40 hover:text-empire-gold transition-all duration-300 cursor-default font-[var(--font-inter)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
