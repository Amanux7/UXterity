"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/data";

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.1 + i * 0.1,
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1] as const,
        },
    }),
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
} as const;

interface MobileMenuProps {
    onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-3xl flex flex-col justify-center px-8"
        >
            <nav className="space-y-2">
                {navLinks.map((link, i) => (
                    <motion.div key={link.label} custom={i} variants={itemVariants} initial="hidden" animate="visible" exit="exit">
                        <Link
                            href={link.href}
                            onClick={onClose}
                            className="block text-5xl md:text-7xl font-[var(--font-syne)] font-extrabold text-white/90 hover:text-empire-gold transition-colors duration-300 py-2"
                        >
                            {link.label}
                        </Link>
                    </motion.div>
                ))}
            </nav>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 pt-8 border-t border-white/5"
            >
                <p className="text-sm text-white/30 font-[var(--font-inter)]">
                    hello@uxterity.studio
                </p>
                <p className="text-sm text-white/30 font-[var(--font-inter)] mt-1">
                    © {new Date().getFullYear()} UXterity. All rights reserved.
                </p>
            </motion.div>
        </motion.div>
    );
}
