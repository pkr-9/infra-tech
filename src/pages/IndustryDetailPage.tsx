import { Navigate, useParams } from "react-router-dom";
import { useIndustryDetail, useIndustriesPageData } from "@/hooks/use-content";

import { IndustryDetailHero } from "@/components/industries/detail/IndustryDetailHero";
import { IndustryChallenges } from "@/components/industries/detail/IndustryChallenges";
import { IndustrySolutions } from "@/components/industries/detail/IndustrySolutions";
import { IndustryCapabilities } from "@/components/industries/detail/IndustryCapabilities";
import { IndustryUseCases } from "@/components/industries/detail/IndustryUseCases";
import { IndustryCTA } from "@/components/industries/detail/IndustryCTA";

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/industries" replace />;
  }

  const { data: landingData } = useIndustriesPageData();
  const { data: detailData, isLoading } = useIndustryDetail(slug);

  // Validate slug exists in landing page data
  const slugExists = landingData?.industries.some(
    (industry) => industry.slug === slug,
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 font-medium animate-pulse">
            Loading Industry Data...
          </p>
        </div>
      </div>
    );
  }

  if (!slugExists || !detailData) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      <IndustryDetailHero data={detailData} />

      <IndustryChallenges items={detailData.challenges} />

      <IndustrySolutions items={detailData.solutions} />

      <IndustryCapabilities items={detailData.capabilities} />

      <IndustryUseCases items={detailData.useCases} />

      <IndustryCTA />
    </div>
  );
}
