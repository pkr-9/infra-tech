import { Navigate } from "react-router-dom";
import { useIndustriesPageData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesOverview } from "@/components/industries/IndustriesOverview";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { IndustriesSummary } from "@/components/industries/IndustriesSummary";
import { IndustriesCTA } from "@/components/industries/IndustriesCTA";

export default function IndustriesLandingLayout() {
  const { data, isLoading, isError } = useIndustriesPageData();

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
      <IndustriesHero hero={data.hero} />

      <IndustriesOverview overview={data.overview} />

      <IndustriesGrid items={data.industries} />

      <IndustriesSummary blocks={data.summaryBlocks} />

      <IndustriesCTA cta={data.ctaSection} />
    </div>
  );
}
