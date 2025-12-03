import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* <main className="pt-[110px]"> */}
      <main>
        <Hero />
        <CoreCapabilities />
        <SolutionsShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
