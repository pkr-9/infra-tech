import { useCaseStudies } from "@/hooks/use-content";
import { CaseStudyCard } from "@/components/home/CaseStudyCard";
import { Skeleton } from "@/components/ui/skeleton";
import { LineChart } from "lucide-react";

const CaseStudies = () => {
  const { data: studies, isLoading } = useCaseStudies();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Header */}
        <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-4 text-accent font-bold tracking-wider uppercase text-sm">
              <LineChart className="w-4 h-4" /> Client Success Stories
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Proven Impact at Scale
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Explore how leading enterprises solve complex infrastructure
              challenges with InfraTech.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="container mx-auto px-4 py-16">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-[400px] w-full rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies?.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;
