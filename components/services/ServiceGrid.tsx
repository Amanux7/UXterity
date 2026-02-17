"use client";

import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

export default function ServiceGrid() {
    return (
        <section id="services">
            <div className="container-fluid">
                {/* Section Header */}
                <div className="mb-20">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-4 block">
                        What We Build
                    </span>
                    <SplitTextReveal
                        text="Our Capabilities"
                        as="h2"
                        className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-syne)] font-extrabold text-white"
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
