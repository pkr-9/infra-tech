import { useParams, Navigate } from "react-router-dom";
import { useSolutionDetails, useSolutionsPageData } from "@/hooks/use-content";

// Component Imports
import { SolutionDetailHero } from "@/components/solutions/detail/SolutionDetailHero";
import { SolutionBenefits } from "@/components/solutions/detail/SolutionBenefits";
import { SolutionProcess } from "@/components/solutions/detail/SolutionProcess";
import { SolutionTechStack } from "@/components/solutions/detail/SolutionTechStack";
import { SolutionDeliverables } from "@/components/solutions/detail/SolutionDeliverables";
import { SolutionDocuments } from "@/components/solutions/detail/SolutionDocuments";
import { SolutionContactCTA } from "@/components/solutions/detail/SolutionContactCTA";

export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // 1. Fetch Data
  const { data: listingData, isLoading: listingLoading } = useSolutionsPageData();
  const { data: detailData, isLoading: detailLoading } = useSolutionDetails(slug!);

  // 2. Loading / Error States
  if (!slug) return <Navigate to="/solutions" replace />;

  if (listingLoading || detailLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-400 font-medium animate-pulse">Initializing Solution Data...</p>
        </div>
      </div>
    );
  }

  // 3. Validation: Ensure solution exists
  const solutionCard = listingData?.solutions.find((s) => s.slug === slug);
  
  if (!solutionCard || !detailData) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="animate-in fade-in duration-700 bg-white">
      
      {/* 1. Hero (Dark) */}
      <SolutionDetailHero 
        hero={detailData.hero} 
        category={solutionCard.category} 
      />

      {/* 2. Benefits (Light) */}
      <SolutionBenefits benefits={detailData.benefits} />

      {/* 3. Process (Dark/Contrast) */}
      <SolutionProcess steps={detailData.process} />

      {/* 4. Tech Stack (Light) */}
      <SolutionTechStack tech={detailData.technologies} />

      {/* 5. Deliverables (White/Paper) */}
      <SolutionDeliverables deliverables={detailData.deliverables} />

      {/* 6. Documents (Grey) */}
      <SolutionDocuments docs={detailData.documents} />

      {/* 7. Final CTA (Dark) */}
      <SolutionContactCTA />

    </div>
  );
}