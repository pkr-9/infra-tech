import { Link } from "react-router-dom";
import { LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCaseStudiesData } from "@/hooks/use-content";
import { CaseStudyCard } from "./CaseStudyCard";

export const CaseStudies = () => {
  const { data, isLoading } = useCaseStudiesData();

  if (isLoading) {
    return (
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[340px] w-full rounded-xl border border-border bg-card p-6 space-y-4"
            >
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-8 w-1/2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!data) return null;

  const highlights = data.cases.slice(0, 3);

  return (
    <section className="py-24 bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-primary">
              <LineChart className="h-4 w-4" />
              <span className="uppercase tracking-widest">{data.badge}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              {data.headline}
            </h2>

            <p className="text-lg text-muted-foreground">{data.subhead}</p>
          </div>

          <div className="hidden md:block">
            <Button variant="outline" asChild>
              <Link to={data.cta.href}>{data.cta.label}</Link>
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full" asChild>
            <Link to={data.cta.href}>{data.cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
