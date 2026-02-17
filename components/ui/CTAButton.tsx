"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTAButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "outline" | "ghost";
    size?: "default" | "large";
    className?: string;
    external?: boolean;
}

export default function CTAButton({
    href,
    children,
    variant = "primary",
    size = "default",
    className,
    external = false,
}: CTAButtonProps) {
    const baseStyles =
        "relative inline-flex items-center gap-3 font-[var(--font-syne)] font-bold rounded-full overflow-hidden group transition-all duration-500";

    const sizeStyles = {
        default: "px-7 py-3.5 text-sm",
        large: "px-10 py-5 text-base",
    };

    const variantStyles = {
        primary: "bg-empire-gold text-void hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]",
        outline:
            "border border-white/15 text-white hover:border-empire-gold/50 hover:text-empire-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]",
        ghost: "text-white/60 hover:text-empire-gold",
    };

    const content = (
        <>
            {/* Shine sweep on primary */}
            {variant === "primary" && (
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            )}
            <span className="relative z-10">{children}</span>
            <ArrowUpRight
                size={size === "large" ? 18 : 16}
                className="relative z-10 group-hover:rotate-45 transition-transform duration-300"
            />
        </>
    );

    const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

    if (external || href.startsWith("#") || href.startsWith("mailto:")) {
        return (
            <motion.a
                href={href}
                className={classes}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {content}
        </Link>
    );
}
