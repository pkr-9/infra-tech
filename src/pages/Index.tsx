import { Hero } from "@/components/hero/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { ProcessOverview } from "@/components/home/ProcessOverview";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { IndustriesServed } from "@/components/home/IndustriesServed";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Achievements } from "@/components/home/Achievements";
import { Testimonials } from "@/components/home/Testimonials";
import { PricingSnapshot } from "@/components/home/PricingSnapshot";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <TrustBar />
        <CoreCapabilities />
        <ProcessOverview />
        <SolutionsShowcase />
        <IndustriesServed />
        <CaseStudies />
        <Achievements />
        <Testimonials />
        <PricingSnapshot />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
