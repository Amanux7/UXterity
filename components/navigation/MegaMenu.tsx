"use client";

import { motion } from "framer-motion";
import { megaMenuItems } from "@/lib/data";

export default function MegaMenu() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] as const }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] p-8 rounded-2xl bg-surface/95 backdrop-blur-2xl border border-white/5 shadow-2xl"
        >
            <div className="grid grid-cols-3 gap-8">
                {megaMenuItems.map((group) => (
                    <div key={group.category}>
                        <h4 className="text-xs tracking-[0.2em] uppercase text-empire-gold mb-4 font-[var(--font-syne)] font-bold">
                            {group.category}
                        </h4>
                        <ul className="space-y-3">
                            {group.items.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-white/60 hover:text-white transition-colors duration-300 block font-[var(--font-inter)]"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <p className="text-sm text-white/40 font-[var(--font-inter)]">
                    Not sure what you need?
                </p>
                <a
                    href="#contact"
                    className="text-sm text-empire-gold hover:text-empire-gold/80 transition-colors duration-300 font-[var(--font-inter)]"
                >
                    Let&apos;s Talk →
                </a>
            </div>
        </motion.div>
    );
}
