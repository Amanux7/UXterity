import { Metadata } from "next";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import CTAButton from "@/components/ui/CTAButton";
import Footer from "@/components/sections/Footer";
import ProjectList from "@/components/work/ProjectList";

export const metadata: Metadata = {
    title: "Work — UXterity",
    description: "Explore our portfolio of award-winning projects across branding, web, 3D, and go-to-market strategy.",
};

const testimonials = [
    {
        quote: "UXterity didn't just build our platform — they built our brand's future. The attention to detail is unmatched.",
        author: "Sarah Chen",
        role: "CEO, Meridian Finance",
    },
    {
        quote: "Working with UXterity felt like having a world-class creative team embedded in our company. Pure excellence.",
        author: "James Okafor",
        role: "Founder, Aether Studios",
    },
    {
        quote: "They took a vague vision and turned it into a product that exceeded every expectation. Truly transformative.",
        author: "Priya Sharma",
        role: "CPO, Pulse Health",
    },
];

export default function WorkPage() {
    return (
        <main>
            {/* Hero */}
            <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        Our Work
                    </span>
                    <SplitTextReveal
                        text="Projects that speak louder than pitches."
                        as="h1"
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[var(--font-syne)] font-extrabold text-white leading-[1.05]"
                    />
                    <p className="mt-8 text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed font-[var(--font-inter)]">
                        A curated selection of work that showcases our range — from brand identities to immersive
                        3D experiences and full-stack platforms.
                    </p>
                </div>
            </section>

            {/* Project List */}
            <ProjectList />

            {/* Testimonials */}
            <section className="py-32 lg:py-40 bg-surface/30">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        Client Words
                    </span>
                    <SplitTextReveal
                        text="What they say"
                        as="h2"
                        className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-syne)] font-extrabold text-white mb-20"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-void/50 border border-white/5 rounded-2xl p-8 lg:p-10 hover:border-empire-gold/20 transition-all duration-500"
                            >
                                <p className="text-base md:text-lg text-white/60 leading-relaxed font-[var(--font-inter)] italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <p className="text-sm font-[var(--font-syne)] font-bold text-white">
                                        {t.author}
                                    </p>
                                    <p className="text-xs text-white/30 mt-1 font-[var(--font-inter)]">
                                        {t.role}
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
                        text="Your project could be next."
                        as="h2"
                        className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-syne)] font-extrabold text-white justify-center mb-8"
                    />
                    <p className="text-lg text-white/40 max-w-lg mx-auto mb-12 font-[var(--font-inter)]">
                        Let&apos;s discuss how we can turn your vision into the next case study.
                    </p>
                    <CTAButton href="/contact" size="large">Start a Conversation</CTAButton>
                </div>
            </section>

            <Footer />
        </main>
    );
}
