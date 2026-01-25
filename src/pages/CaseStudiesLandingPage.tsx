import { useCaseStudiesData } from "@/hooks/use-content";
import { CaseStudyCard } from "@/components/home/CaseStudyCard";
import { Skeleton } from "@/components/ui/skeleton";
import { LineChart, Sparkles } from "lucide-react";

const CaseStudiesLandingPage = () => {
  const { data, isLoading } = useCaseStudiesData();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 container px-4">
        <Skeleton className="h-64 w-full rounded-3xl mb-12" />
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-96 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Header */}
        <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" />

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Client Success Stories</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              {data.hero.headline}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {data.hero.subhead}
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="container mx-auto px-4 py-24 -mt-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.cases.map((study) => (
              <CaseStudyCard key={study.id} study={study} index={0} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudiesLandingPage;
