"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

interface ServiceCardProps {
    service: Service;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1] as const,
            }}
            className="group relative bg-surface border border-white/5 rounded-2xl p-8 lg:p-10 hover:bg-white/5 transition-all duration-500 ease-out cursor-pointer"
        >
            {/* Outline Number */}
            <span className="text-7xl lg:text-8xl font-[var(--font-syne)] font-extrabold text-outline group-hover:text-outline-fill transition-all duration-500 select-none leading-none">
                {service.number}
            </span>

            {/* Title */}
            <h3 className="mt-6 text-xl lg:text-2xl font-[var(--font-syne)] font-bold text-white">
                {service.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm lg:text-base text-white/50 leading-relaxed font-[var(--font-inter)]">
                {service.description}
            </p>

            {/* Arrow Icon */}
            <div className="absolute top-8 right-8">
                <ArrowUpRight
                    size={24}
                    className="text-white/20 group-hover:text-empire-gold group-hover:rotate-45 transition-all duration-500 ease-out"
                />
            </div>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-empire-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}
