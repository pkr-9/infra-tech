import { Link } from "react-router-dom";
import { LineChart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCaseStudiesData } from "@/hooks/use-content";
import { CaseStudyCard } from "./CaseStudyCard";

export const CaseStudies = () => {
  const { data, isLoading } = useCaseStudiesData();

  if (isLoading) {
    return (
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[500px] w-full rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  // Safety Check: If data failed to load or is missing the homeSection
  if (!data || !data.homeSection) return null;

  const { homeSection } = data;
  const highlights = data.cases ? data.cases.slice(0, 3) : [];

  return (
    <section className="py-24 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-sm font-bold text-primary tracking-wide uppercase">
              <LineChart className="h-4 w-4" />
              <span>{homeSection.badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              {homeSection.headline}
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {homeSection.subhead}
            </p>
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white transition-all"
              asChild
            >
              <Link to={homeSection.cta.href}>
                {homeSection.cta.label}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Immersive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((study, idx) => (
            <CaseStudyCard key={study.id || idx} study={study} index={idx} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 md:hidden">
          <Button size="lg" className="w-full rounded-full" asChild>
            <Link to={homeSection.cta.href}>
              {homeSection.cta.label}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};