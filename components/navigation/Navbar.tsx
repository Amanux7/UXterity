"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] as const }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    scrolled
                        ? "bg-void/80 backdrop-blur-xl border-b border-white/5"
                        : "bg-transparent"
                )}
            >
                <div className="container-fluid flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-[var(--font-syne)] font-extrabold text-2xl tracking-tight text-white"
                    >
                        UX
                        <span className="text-empire-gold">terity</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() =>
                                    link.hasMegaMenu && setMegaMenuOpen(true)
                                }
                                onMouseLeave={() =>
                                    link.hasMegaMenu && setMegaMenuOpen(false)
                                }
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-300 font-[var(--font-inter)]"
                                >
                                    {link.label}
                                </Link>

                                {link.hasMegaMenu && (
                                    <AnimatePresence>
                                        {megaMenuOpen && <MegaMenu />}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="hidden lg:flex items-center gap-2 px-6 py-3 text-sm font-bold text-void bg-empire-gold rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 font-[var(--font-syne)] group relative overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                        <span className="relative">Start a Project</span>
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden relative z-50 p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu onClose={() => setMobileMenuOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}
