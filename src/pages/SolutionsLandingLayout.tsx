import { useSolutionsPageData } from "@/hooks/use-content";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { SolutionsFeatured } from "@/components/solutions/SolutionsFeatured";
import { SolutionsFilters } from "@/components/solutions/SolutionsFilters";
import { SolutionsGrid } from "@/components/solutions/SolutionsGrid";
import { SolutionsSummary } from "@/components/solutions/SolutionsSummary";
import { SolutionFAQAccordion } from "@/components/solutions/SolutionFAQAccordion";
import { SolutionSidebar } from "@/components/solutions/SolutionSidebar";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";
import { Skeleton } from "@/components/ui/skeleton";

export function SolutionsLandingLayout() {
  const { data, isLoading } = useSolutionsPageData();

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

  if (!data) return null;

  // Destructure with fallbacks for new optional fields
  const {
    hero,
    featuredSolution,
    filters,
    solutions,
    summaryBlocks,
    ctaSection,
    // Assuming these might be undefined in old JSON, so we handle safely
    // You might need to add these to your API interface
    faqs,
    sidebar,
  } = data as any;

  return (
    <div className="flex flex-col gap-0 w-full">
      {/* 1. Hero Section */}
      <SolutionsHero hero={hero} />

      {/* 2. Featured Spotlight */}
      <SolutionsFeatured featured={featuredSolution} />

      {/* 3. Main Catalog Section (With Sidebar Layout) */}
      <div className="bg-muted/30 py-24" id="solutions-matrix">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Capability Matrix
            </h2>
            <p className="text-muted-foreground">
              Explore our complete catalog of engineering and infrastructure
              services. Filter by category or industry to find your fit.
            </p>
          </div>

          {/* Sticky Filters */}
          <SolutionsFilters filters={filters} />

          {/* Two-Column Layout: Grid + Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8 items-start relative mt-8">
            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              <SolutionsGrid solutions={solutions} />
            </div>

            {/* Sticky Sidebar (Desktop Only) */}
            {sidebar && <SolutionSidebar sidebar={sidebar} />}
          </div>
        </div>
      </div>

      {/* 4. Value Proposition Blocks */}
      <SolutionsSummary blocks={summaryBlocks} />

      {/* 5. FAQ Section (New Addition) */}
      {faqs && <SolutionFAQAccordion faqs={faqs} />}

      {/* 6. Bottom CTA */}
      <SolutionsCTA cta={ctaSection} />
    </div>
  );
}
