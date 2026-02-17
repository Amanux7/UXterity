import { Metadata } from "next";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import ServiceGrid from "@/components/services/ServiceGrid";
import CTAButton from "@/components/ui/CTAButton";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
    title: "Services — UXterity",
    description: "From brand strategy to 3D immersive experiences — explore the full range of capabilities we bring to every engagement.",
};

const process = [
    {
        step: "01",
        title: "Discovery",
        description: "We immerse ourselves in your business, audience, and competitive landscape to uncover the strategic foundation.",
    },
    {
        step: "02",
        title: "Strategy",
        description: "Define the brand narrative, product roadmap, and go-to-market plan that aligns vision with execution.",
    },
    {
        step: "03",
        title: "Design",
        description: "Pixel-perfect interfaces and visual systems that marry aesthetics with usability at every touchpoint.",
    },
    {
        step: "04",
        title: "Build",
        description: "Production-grade engineering with performance budgets, accessibility, and scalability baked in from day one.",
    },
    {
        step: "05",
        title: "Launch & Scale",
        description: "Strategic rollout, analytics integration, and ongoing optimization to ensure sustained growth.",
    },
];

export default function ServicesPage() {
    return (
        <main>
            {/* Hero */}
            <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        Our Services
                    </span>
                    <SplitTextReveal
                        text="Everything you need to build an empire."
                        as="h1"
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[var(--font-syne)] font-extrabold text-white leading-[1.05]"
                    />
                    <p className="mt-8 text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed font-[var(--font-inter)]">
                        We don&apos;t just offer services — we deliver transformations. Each capability is backed by
                        two decades of craft and a relentless pursuit of extraordinary.
                    </p>
                </div>
            </section>

            {/* Service Grid */}
            <ServiceGrid />

            {/* Our Process */}
            <section className="py-32 lg:py-40 bg-surface/30">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        The Process
                    </span>
                    <SplitTextReveal
                        text="How we work"
                        as="h2"
                        className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-syne)] font-extrabold text-white mb-20"
                    />

                    <div className="space-y-0">
                        {process.map((item, i) => (
                            <div
                                key={item.step}
                                className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b border-white/5 hover:bg-white/[0.02] px-6 -mx-6 transition-colors duration-300"
                            >
                                <span className="text-5xl md:text-6xl font-[var(--font-syne)] font-extrabold text-outline group-hover:text-outline-fill transition-all duration-500 shrink-0 w-24">
                                    {item.step}
                                </span>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-[var(--font-syne)] font-bold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm md:text-base text-white/40 leading-relaxed max-w-xl font-[var(--font-inter)]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 lg:py-40">
                <div className="container-fluid text-center">
                    <SplitTextReveal
                        text="Ready to start?"
                        as="h2"
                        className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-syne)] font-extrabold text-white justify-center mb-8"
                    />
                    <p className="text-lg text-white/40 max-w-lg mx-auto mb-12 font-[var(--font-inter)]">
                        Tell us about your project and let&apos;s explore how we can make it extraordinary.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <CTAButton href="/contact" size="large">Start a Project</CTAButton>
                        <CTAButton href="/work" variant="outline" size="large">See Our Work</CTAButton>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
