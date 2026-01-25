import { Navigate } from "react-router-dom";
import { useInfrastructurePageData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

import { InfrastructureHero } from "@/components/infrastructure/InfrastructureHero";
import { InfrastructureOverview } from "@/components/infrastructure/InfrastructureOverview";
import { InfrastructureGrid } from "@/components/infrastructure/InfrastructureGrid";
import { InfrastructureSummary } from "@/components/infrastructure/InfrastructureSummary";
import { InfrastructureCTA } from "@/components/infrastructure/InfrastructureCTA";

export default function InfrastructureLandingLayout() {
  const { data, isLoading, isError } = useInfrastructurePageData();

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 container px-4 space-y-12">
        <Skeleton className="h-[60vh] w-full rounded-3xl" />
        <Skeleton className="h-24 w-full" />
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-96 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col gap-0 w-full overflow-x-hidden">
      <InfrastructureHero hero={data.hero} />

      <InfrastructureOverview overview={data.overview} />

      <InfrastructureGrid items={data.infrastructure} />

      <InfrastructureSummary blocks={data.summaryBlocks} />

      <InfrastructureCTA cta={data.ctaSection} />
    </div>
  );
}
