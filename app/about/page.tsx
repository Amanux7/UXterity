import { Metadata } from "next";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import Timeline from "@/components/sections/Timeline";
import StatsBar from "@/components/sections/StatsBar";
import CTAButton from "@/components/ui/CTAButton";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
    title: "About — UXterity",
    description: "Two decades of building empires. Learn about our philosophy, team, and journey.",
};

const values = [
    {
        title: "Craft Over Speed",
        description: "We believe in obsessive attention to detail. Every pixel, every interaction is intentional.",
    },
    {
        title: "Strategy First",
        description: "Beautiful design without strategy is just decoration. We start with the 'why' before the 'how'.",
    },
    {
        title: "Partnership, Not Agency",
        description: "We embed ourselves in your vision. Your success is our portfolio piece.",
    },
    {
        title: "Push Boundaries",
        description: "The web is our canvas. We leverage cutting-edge tech to create what didn't exist yesterday.",
    },
];

export default function AboutPage() {
    return (
        <main>
            {/* Hero */}
            <section className="pt-40 pb-20 lg:pt-48 lg:pb-28">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        About Us
                    </span>
                    <SplitTextReveal
                        text="We don't just design. We architect digital empires."
                        as="h1"
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[var(--font-syne)] font-extrabold text-white leading-[1.05]"
                    />
                    <p className="mt-8 text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed font-[var(--font-inter)]">
                        For over two decades, we&apos;ve been the architects behind some of the most ambitious
                        digital products in the market. We combine deep strategic thinking with obsessive craft.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <StatsBar />

            {/* Story */}
            <section className="py-32 lg:py-40">
                <div className="container-fluid">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div>
                            <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                                The Story
                            </span>
                            <SplitTextReveal
                                text="From two designers to a global creative force."
                                as="h2"
                                className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-syne)] font-extrabold text-white leading-[1.1]"
                            />
                        </div>
                        <div className="space-y-6 lg:pt-4">
                            <p className="text-base md:text-lg text-white/50 leading-relaxed font-[var(--font-inter)]">
                                UXterity started in 2004 as a two-person design studio fueled by caffeine and an
                                unreasonable belief that digital experiences could be art. We cut our teeth on
                                identity systems and microsites, learning that great work comes from understanding
                                people — not just pixels.
                            </p>
                            <p className="text-base md:text-lg text-white/50 leading-relaxed font-[var(--font-inter)]">
                                As the web evolved, so did we. We embraced responsive design, then native apps,
                                then WebGL and 3D. Today, we&apos;re a team of 40+ strategists, designers, and
                                engineers across three continents — still driven by the same belief: that
                                extraordinary is always within reach if you care enough to get there.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-32 lg:py-40 bg-surface/30">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        Our Values
                    </span>
                    <SplitTextReveal
                        text="What we stand for"
                        as="h2"
                        className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-syne)] font-extrabold text-white mb-20"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="bg-void/50 border border-white/5 rounded-2xl p-8 lg:p-10 hover:border-empire-gold/20 transition-all duration-500"
                            >
                                <h3 className="text-xl md:text-2xl font-[var(--font-syne)] font-bold text-white mb-3">
                                    {v.title}
                                </h3>
                                <p className="text-sm md:text-base text-white/40 leading-relaxed font-[var(--font-inter)]">
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-32 lg:py-40">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        Our Journey
                    </span>
                    <SplitTextReveal
                        text="Two decades of craft"
                        as="h2"
                        className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-syne)] font-extrabold text-white mb-20"
                    />
                    <Timeline />
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 lg:py-40 bg-surface/30">
                <div className="container-fluid text-center">
                    <SplitTextReveal
                        text="Want to be part of the story?"
                        as="h2"
                        className="text-4xl md:text-6xl lg:text-7xl font-[var(--font-syne)] font-extrabold text-white justify-center mb-8"
                    />
                    <p className="text-lg text-white/40 max-w-lg mx-auto mb-12 font-[var(--font-inter)]">
                        We&apos;re always looking for ambitious partners and exceptional talent.
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
