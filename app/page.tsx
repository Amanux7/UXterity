import HeroSection from "@/components/hero/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServiceGrid from "@/components/services/ServiceGrid";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutSection from "@/components/sections/AboutSection";
import Timeline from "@/components/sections/Timeline";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";
import SplitTextReveal from "@/components/motion/SplitTextReveal";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <StatsBar />

      <SectionDivider />

      <SectionWrapper id="services">
        <ServiceGrid />
      </SectionWrapper>

      <SectionDivider />

      <SectionWrapper id="work">
        <SelectedWork />
      </SectionWrapper>

      <SectionDivider />

      <SectionWrapper id="about">
        <AboutSection />
      </SectionWrapper>

      <SectionDivider />

      {/* Timeline */}
      <SectionWrapper>
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
      </SectionWrapper>

      <SectionDivider />

      <SectionWrapper id="contact">
        <ContactSection />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
