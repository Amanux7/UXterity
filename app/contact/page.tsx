import { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

export const metadata: Metadata = {
    title: "Contact — UXterity",
    description: "Ready to build something extraordinary? Get in touch with us to start your project.",
};

const faqs = [
    {
        q: "What's your typical project timeline?",
        a: "Most projects run 8–16 weeks depending on scope. We'll define clear milestones in our kickoff.",
    },
    {
        q: "Do you work with startups?",
        a: "Absolutely. Some of our best work has been with ambitious startups who dream big and move fast.",
    },
    {
        q: "What's your pricing model?",
        a: "We offer project-based and retainer models. We'll recommend the best fit after understanding your needs.",
    },
    {
        q: "Can you work with our existing brand?",
        a: "Yes — whether it's a refresh, extension, or complete overhaul, we adapt to where you are in your brand journey.",
    },
];

export default function ContactPage() {
    return (
        <main>
            {/* Hero */}
            <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        Get in Touch
                    </span>
                    <SplitTextReveal
                        text="Let's build something extraordinary together."
                        as="h1"
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-[var(--font-syne)] font-extrabold text-white leading-[1.05]"
                    />
                </div>
            </section>

            {/* Contact Form */}
            <ContactSection />

            {/* FAQ */}
            <section className="py-32 lg:py-40 bg-surface/30">
                <div className="container-fluid">
                    <span className="text-xs tracking-[0.3em] uppercase text-empire-gold font-[var(--font-inter)] mb-6 block">
                        FAQ
                    </span>
                    <SplitTextReveal
                        text="Common questions"
                        as="h2"
                        className="text-3xl md:text-5xl lg:text-6xl font-[var(--font-syne)] font-extrabold text-white mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                        {faqs.map((faq, i) => (
                            <div key={i} className="space-y-3">
                                <h3 className="text-base md:text-lg font-[var(--font-syne)] font-bold text-white">
                                    {faq.q}
                                </h3>
                                <p className="text-sm text-white/40 leading-relaxed font-[var(--font-inter)]">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
