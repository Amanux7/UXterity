"use client";

import { motion } from "framer-motion";

const footerLinks = [
    {
        heading: "Services",
        links: ["Brand Strategy", "Product Design", "Development", "3D & Motion", "GTM Strategy"],
    },
    {
        heading: "Company",
        links: ["About", "Careers", "Blog", "Press Kit"],
    },
    {
        heading: "Connect",
        links: ["Twitter / X", "LinkedIn", "Dribbble", "Instagram"],
    },
];

export default function Footer() {
    return (
        <footer className="pt-20 pb-8 border-t border-white/5 bg-void">
            <div className="container-fluid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }}
                    >
                        <a
                            href="/"
                            className="font-[var(--font-syne)] font-extrabold text-2xl text-white"
                        >
                            UX<span className="text-empire-gold">terity</span>
                        </a>
                        <p className="mt-4 text-sm text-white/30 leading-relaxed max-w-xs font-[var(--font-inter)]">
                            We build empires through branding, technology, and go-to-market
                            strategy. Two decades of craft, one obsession: extraordinary.
                        </p>
                    </motion.div>

                    {/* Link columns */}
                    {footerLinks.map((col, i) => (
                        <motion.div
                            key={col.heading}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1 + i * 0.1,
                                ease: [0.33, 1, 0.68, 1] as const,
                            }}
                        >
                            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-5 font-[var(--font-syne)] font-bold">
                                {col.heading}
                            </h4>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-white/30 hover:text-white transition-colors duration-300 font-[var(--font-inter)]"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/20 font-[var(--font-inter)]">
                        © {new Date().getFullYear()} UXterity. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors font-[var(--font-inter)]">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors font-[var(--font-inter)]">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
