import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { Profitable } from "@/components/Profitable";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhatIs } from "@/components/WhatIs";
import { Variants } from "@/components/Variants";
import { CtaBanner } from "@/components/CtaBanner";
import { SeoContent } from "@/components/SeoContent";
import { DocsSection } from "@/components/DocsSection";
import { BrandsList } from "@/components/BrandsList";
import { BoughtSlider } from "@/components/BoughtSlider";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <span id="valuation" className="block" />
        <Hero />
        <WhyUs />
        <Profitable />
        <ProcessSteps />
        <WhatIs />
        <Variants />
        <CtaBanner />
        <SeoContent />
        <DocsSection />
        <BrandsList />
        <BoughtSlider />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
