// src/hooks/use-content.ts
import { useQuery } from "@tanstack/react-query";
import { fetchJSON, NavData, HomeData, TestimonialItem, TrustData, CapabilitiesData, ProcessData, SolutionsData, IndustriesData, CaseStudiesData, CaseStudyItem, PricingData } from "@/lib/api";

export function useNavData() {
    return useQuery({
        queryKey: ["nav"],
        queryFn: () => fetchJSON<NavData>("/data/nav.json"),
        staleTime: 1000 * 60 * 60, // 1 hour
    });
}

export function useHomeData() {
    return useQuery({
        queryKey: ["home"],
        queryFn: () => fetchJSON<HomeData>("/data/home.json"),
    });
}

export const useTrustData = () => {
    return useQuery<TrustData>({
        queryKey: ["trust"],
        queryFn: () => fetch("/data/trust.json").then(res => res.json())
    });
};

export const useCapabilitiesData = () => {
    return useQuery<CapabilitiesData>({
        queryKey: ["capabilities"],
        queryFn: () => fetch("/data/capabilities.json").then(res => res.json())
    });
};

export const useProcessData = () => {
    return useQuery<ProcessData>({
        queryKey: ["process"],
        queryFn: () => fetch("/data/process.json").then(res => res.json())
    });
};

export const useIndustriesData = () => {
    return useQuery<IndustriesData>({
        queryKey: ["industries"],
        queryFn: () => fetch("/data/industries.json").then(res => res.json())
    });
};


const caseStudiesQueryOptions = {
    queryKey: ["case-studies"] as const,
    queryFn: () => fetchJSON<CaseStudiesData>("/data/case-studies.json"),
};

export const useCaseStudiesData = () => {
    return useQuery(caseStudiesQueryOptions);
};

export const useCaseStudies = () => {
    return useQuery<CaseStudiesData, Error, CaseStudyItem[]>({
        ...caseStudiesQueryOptions,
        select: (data) => data.cases,
    });
};


export const useSolutionsData = () => {
    return useQuery<SolutionsData>({
        queryKey: ["solutions"],
        queryFn: async () => {
            const res = await fetch("/data/solutions.json");
            if (!res.ok) throw new Error("Failed to load solutions.json");
            return res.json();
        }
    });
};


export function useIndustries() {
    return useQuery({
        queryKey: ["industries"],
        queryFn: () => fetchJSON<IndustriesData>("/data/industries.json"),
    });
}

export const useTestimonialsData = () => {
    return useQuery<TestimonialItem[]>({
        queryKey: ["testimonials"],
        queryFn: () => fetch("/data/testimonials.json").then(res => res.json())
    });
};

export const usePricingData = () => {
    return useQuery<PricingData>({
        queryKey: ["pricing"],
        queryFn: () => fetch("/data/pricing.json").then(res => res.json())
    });
};
