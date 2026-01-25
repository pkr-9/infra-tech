import { Navigate, useParams } from "react-router-dom";
import {
  useInfrastructureDetail,
  useInfrastructurePageData,
} from "@/hooks/use-content";

import { InfrastructureDetailHero } from "@/components/infrastructure/detail/InfrastructureDetailHero";
import { InfrastructureCapabilities } from "@/components/infrastructure/detail/InfrastructureCapabilities";
import { InfrastructureProcess } from "@/components/infrastructure/detail/InfrastructureProcess";
import { InfrastructureDeliverables } from "@/components/infrastructure/detail/InfrastructureDeliverables";
import { InfrastructureTechStack } from "@/components/infrastructure/detail/InfrastructureTechStack";
import { InfrastructureDocuments } from "@/components/infrastructure/detail/InfrastructureDocuments";
import { InfrastructureContactCTA } from "@/components/infrastructure/detail/InfrastructureContactCTA";

export default function InfrastructureDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/infrastructure" replace />;
  }

  const { data: landingData } = useInfrastructurePageData();
  const { data: detailData, isLoading } = useInfrastructureDetail(slug);

  // Validate slug exists in landing page data to prevent 404s on refresh if needed
  // (Optional depending on how strict you want to be)
  const slugExists = landingData?.infrastructure.some(
    (item) => item.slug === slug,
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 font-medium animate-pulse">
            Loading Infrastructure Data...
          </p>
        </div>
      </div>
    );
  }

  if (!slugExists || !detailData) {
    return <Navigate to="/infrastructure" replace />;
  }

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      {/* 1. Hero */}
      <InfrastructureDetailHero data={detailData} />

      {/* 2. Capabilities (Grid) */}
      <InfrastructureCapabilities items={detailData.capabilities} />

      {/* 3. Process (Dark Timeline) */}
      <InfrastructureProcess steps={detailData.process} />

      {/* 4. Deliverables (Manifest) */}
      <InfrastructureDeliverables deliverables={detailData.deliverables} />

      {/* 5. Tech Stack (OEMs) */}
      <InfrastructureTechStack technologies={detailData.technologies} />

      {/* 6. Documents (Resources) */}
      <InfrastructureDocuments docs={detailData.documents} />

      {/* 7. CTA */}
      <InfrastructureContactCTA />
    </div>
  );
}
