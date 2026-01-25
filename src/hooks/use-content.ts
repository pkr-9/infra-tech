import { useQuery } from "@tanstack/react-query";
import {
    NavData,
    HomeData,
    TrustData,
    ProcessData,
    SolutionsData,
    IndustriesData,
    CaseStudiesData,
    fetchCaseStudiesData,
    CaseStudy,
    TestimonialItem,
    PricingData,
    OfferingsData,
    SolutionsPageData,
    SolutionDetailData,
    InfrastructurePageData,
    InfrastructureDetailData,
    IndustriesPageData,
    IndustryDetailData,
    fetchAboutPageData,
    fetchBlogData,
    BlogPost
} from "@/lib/api";
import { fetchJSON } from "@/lib/api";

/* ---------------------------------------------------------
   Core site.json loader (global shared content)
--------------------------------------------------------- */

function useSiteData() {
    return useQuery({
        queryKey: ["site"],
        queryFn: () => fetchJSON<any>("/data/site.json"),
        staleTime: 1000 * 60 * 60
    });
}

/* ---------------------------------------------------------
   Home Page (still separate for fast iteration)
--------------------------------------------------------- */

export function useHomeData() {
    return useQuery({
        queryKey: ["home"],
        queryFn: () => fetchJSON<HomeData>("/data/home.json")
    });
}

/* ---------------------------------------------------------
   Derived global site.json sections
--------------------------------------------------------- */

export function useNavData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.nav as NavData, isLoading };
}


export function useTrustData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.trust as TrustData, isLoading };
}

export function useProcessData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.process as ProcessData, isLoading };
}

export function useSolutionsShowcaseData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.solutions as SolutionsData, isLoading };
}

export function useIndustriesData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.industries as IndustriesData, isLoading };
}

export function useAchievementsData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.achievements, isLoading };
}

export function useTestimonialsData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.testimonials as TestimonialItem[], isLoading };
}

export function usePricingData() {
    const { data, isLoading } = useSiteData();
    return { data: data?.pricing as PricingData, isLoading };
}

/* ---------------------------------------------------------
   Solutions Landing Page Layout Data
--------------------------------------------------------- */

export function useSolutionsPageData() {
    return useQuery<SolutionsPageData>({
        queryKey: ["solutions-page"],
        queryFn: () =>
            fetchJSON<SolutionsPageData>("/data/solutions-page.json")
    });
}
export function useSolutionDetails(slug?: string) {
    return useQuery<SolutionDetailData | undefined>({
        queryKey: ["solution-details", slug],
        queryFn: async () => {
            const data = await fetchJSON<
                Record<string, SolutionDetailData>
            >("/data/solutions-details.json");

            return slug ? data[slug] : undefined;
        },
        enabled: !!slug
    });
}



/* ---------------------------------------------------------
   Unified Offerings Catalog (Software + Infrastructure)
--------------------------------------------------------- */

export function useOfferingsData() {
    return useQuery({
        queryKey: ["offerings"],
        queryFn: () => fetchJSON<OfferingsData>("/data/offerings.json")
    });
}

/* ---------------------------------------------------------
   Single Offering by Slug (Detail Page Helper)
--------------------------------------------------------- */

export function useOfferingBySlug(slug: string) {
    const { data, isLoading } = useOfferingsData();

    const offering = data?.offerings.find(o => o.slug === slug);

    return { data: offering, isLoading };
}

/* ---------------------------------------------------------
   Infrastructure Landing Page Layout Data
--------------------------------------------------------- */

export function useInfrastructurePageData() {
    return useQuery<InfrastructurePageData>({
        queryKey: ["infrastructure-page"],
        queryFn: () =>
            fetchJSON<InfrastructurePageData>("/data/infrastructure-page.json")
    });
}

/* ---------------------------------------------------------
   Infrastructure Detail Page Data
--------------------------------------------------------- */

export function useInfrastructureDetail(slug?: string) {
    return useQuery<InfrastructureDetailData | undefined>({
        queryKey: ["infrastructure-detail", slug],
        queryFn: async () => {
            const data = await fetchJSON<
                Record<string, InfrastructureDetailData>
            >("/data/infrastructure-detail.json");

            return slug ? data[slug] : undefined;
        },
        enabled: !!slug
    });
}

/* ---------------------------------------------------------
   Industries Landing Page Layout Data
--------------------------------------------------------- */

export function useIndustriesPageData() {
    return useQuery<IndustriesPageData>({
        queryKey: ["industries-page"],
        queryFn: () =>
            fetchJSON<IndustriesPageData>("/data/industries-page.json")
    });
}

/* ---------------------------------------------------------
   Industries Detail Page Data
--------------------------------------------------------- */

export function useIndustryDetail(slug?: string) {
    return useQuery<IndustryDetailData | undefined>({
        queryKey: ["industry-detail", slug],
        queryFn: async () => {
            const data = await fetchJSON<
                Record<string, IndustryDetailData>
            >("/data/industries-detail.json");

            return slug ? data[slug] : undefined;
        },
        enabled: !!slug
    });
}


export function useAboutPageData() {
    return useQuery({
        queryKey: ["about-page"],
        queryFn: fetchAboutPageData,
        staleTime: 1000 * 60 * 60, // 1 hour
    });
}

// 1. Fetch All Case Studies (Landing Page)
export function useCaseStudiesData() {
    return useQuery({
        queryKey: ["case-studies-page"],
        queryFn: fetchCaseStudiesData,
        staleTime: 1000 * 60 * 60,
    });
}

// 2. Fetch Single Case Study (Detail Page)
// Since we have a single JSON, we fetch all and filter client-side.
export function useCaseStudyBySlug(slug?: string) {
    return useQuery({
        queryKey: ["case-study", slug],
        queryFn: async () => {
            const data = await fetchCaseStudiesData();
            const study = data.cases.find((c: CaseStudy) => c.slug === slug);
            if (!study) throw new Error("Case study not found");
            return study;
        },
        enabled: !!slug, // Only run if slug exists
        staleTime: 1000 * 60 * 60,
    });
}

export function useBlogData() {
    return useQuery({
        queryKey: ["blog-page"],
        queryFn: fetchBlogData,
    });
}

export function useBlogPostBySlug(slug?: string) {
    return useQuery({
        queryKey: ["blog-post", slug],
        queryFn: async () => {
            const data = await fetchBlogData();
            const post = data.posts.find((p) => p.slug === slug);
            if (!post) throw new Error("Post not found");
            return post;
        },
        enabled: !!slug,
    });
}