import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Achievements } from "@/components/home/Achievements";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingSnapshot } from "@/components/home/PricingSnapshot";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* <main className="pt-[110px]"> */}
      <main>
        <Hero />
        <CoreCapabilities />
        <SolutionsShowcase />
        <CaseStudies />
        <Achievements />
        <Testimonials />
        <PricingSnapshot />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
