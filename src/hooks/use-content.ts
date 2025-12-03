// src/hooks/use-content.ts
import { useQuery } from "@tanstack/react-query";
import { fetchJSON, NavData, HomeData, Service, Product, Testimonial } from "@/lib/api";

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

export function useServices() {
    return useQuery({
        queryKey: ["services"],
        queryFn: () => fetchJSON<Service[]>("/data/services.json"),
    });
}

export function useProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => fetchJSON<Product[]>("/data/products.json"),
    });
}


export interface KPI {
    label: string;
    value: string;
}

export interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string;
    industry: string;
    summary: string;
    kpis: KPI[];
    image?: string;
}

// ... existing hooks

export function useCaseStudies() {
    return useQuery({
        queryKey: ["case-studies"],
        queryFn: () => fetchJSON<CaseStudy[]>("/data/case-studies.json"),
    });
}
// ... existing imports & hooks
export function useTestimonials() {
    return useQuery({
        queryKey: ["testimonials"],
        queryFn: () => fetchJSON<Testimonial[]>("/data/testimonials.json"),
    });
}