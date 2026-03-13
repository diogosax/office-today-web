import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import PartnersSection from "@/components/sections/PartnersSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CtaBandSection from "@/components/sections/CtaBandSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ValuePropositionSection />
        <PartnersSection />
        <ServicesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CtaBandSection />
      </main>
      <Footer />
    </>
  );
}
