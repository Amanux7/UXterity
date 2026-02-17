"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

export default function ContactSection() {
    return (
        <section id="contact">
            <div className="container-fluid">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left — CTA */}
                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                            Start a Project
                        </span>
                        <SplitTextReveal
                            text="Let's build something extraordinary together."
                            as="h2"
                            className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-syne)] font-extrabold text-white leading-[1.05]"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
                            className="mt-12 space-y-4"
                        >
                            <a
                                href="mailto:hello@uxterity.studio"
                                className="flex items-center gap-3 text-white/50 hover:text-empire-gold transition-colors duration-300 font-[var(--font-inter)] group"
                            >
                                <Mail size={18} className="text-empire-gold/60" />
                                <span>hello@uxterity.studio</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <div className="flex items-center gap-3 text-white/50 font-[var(--font-inter)]">
                                <MapPin size={18} className="text-empire-gold/60" />
                                <span>New York · London · Mumbai</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs tracking-[0.15em] uppercase text-white/30 mb-3 font-[var(--font-inter)]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-transparent border-b border-white/10 focus:border-empire-gold pb-3 text-white placeholder:text-white/20 outline-none transition-colors duration-300 font-[var(--font-inter)]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs tracking-[0.15em] uppercase text-white/30 mb-3 font-[var(--font-inter)]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="w-full bg-transparent border-b border-white/10 focus:border-empire-gold pb-3 text-white placeholder:text-white/20 outline-none transition-colors duration-300 font-[var(--font-inter)]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs tracking-[0.15em] uppercase text-white/30 mb-3 font-[var(--font-inter)]">
                                What are you building?
                            </label>
                            <select className="w-full bg-transparent border-b border-white/10 focus:border-empire-gold pb-3 text-white/50 outline-none transition-colors duration-300 font-[var(--font-inter)] cursor-pointer appearance-none">
                                <option value="" className="bg-surface text-white">Select a service</option>
                                <option value="branding" className="bg-surface text-white">Brand Strategy & Identity</option>
                                <option value="product" className="bg-surface text-white">Product Design</option>
                                <option value="development" className="bg-surface text-white">Web / App Development</option>
                                <option value="3d" className="bg-surface text-white">3D & Motion Design</option>
                                <option value="gtm" className="bg-surface text-white">Go-To-Market Strategy</option>
                                <option value="other" className="bg-surface text-white">Something Else</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs tracking-[0.15em] uppercase text-white/30 mb-3 font-[var(--font-inter)]">
                                Tell us more
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Briefly describe your project, timeline, and budget..."
                                className="w-full bg-transparent border-b border-white/10 focus:border-empire-gold pb-3 text-white placeholder:text-white/20 outline-none transition-colors duration-300 resize-none font-[var(--font-inter)]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 px-8 py-4 bg-empire-gold text-void font-[var(--font-syne)] font-bold rounded-full hover:bg-empire-gold/90 transition-all duration-300 flex items-center gap-3 group"
                        >
                            Send Inquiry
                            <ArrowUpRight
                                size={18}
                                className="group-hover:rotate-45 transition-transform duration-300"
                            />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
