// src/hooks/use-content.ts
import { useQuery } from "@tanstack/react-query";
import { fetchJSON, NavData, HomeData, Service, Product } from "@/lib/api";

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