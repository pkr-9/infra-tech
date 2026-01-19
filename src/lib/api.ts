// src/lib/api.ts

// navbar ----------------------------------------------------
export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[]; // optional for future nested menus
}

export interface NavData {
    primary: NavItem[];
    categories: NavItem[];
}

// hero -----------------------------------------------------
export interface HeroStats {
    timeseries: number[];
    labels: string[];
}

export interface CTA {
    label: string;
    href: string;
}

export interface KPI {
    label: string;
    value: string;
}

export interface HomeData {
    headline: string;
    subhead: string;
    ctas: CTA[];
    kpis: KPI[];
}


// trustbar -----------------------------------------------------
export interface ClientLogo {
    name: string;
    logo: string;
}

export interface TrustData {
    headline: string;
    clients: ClientLogo[];
}


// corecapabilities -----------------------------------------------------
export interface CapabilityItem {
    title: string;
    description: string;
    icon: string;
    href: string;
    color: string;
    bg: string;
}

export interface CapabilityMetric {
    label: string;
    value: string;
}

export interface CapabilitiesData {
    badge: string;
    headline: string;
    subhead: string;
    capabilities: CapabilityItem[];
    metrics: CapabilityMetric[];
}

// process ----------------------------------------------
export interface ProcessStep {
    title: string;
    description: string;
    icon: string;
}

export interface ProcessData {
    badge: string;
    headline: string;
    subhead: string;
    steps: ProcessStep[];
    cta: {
        label: string;
        href: string;
    };
}

// solutions ----------------------------------------------------
export interface SolutionItem {
    id: string;
    title: string;
    summary: string;
    href: string;
    icon?: string;
    tags?: string[];
}

export interface SolutionsData {
    headline: string;
    subhead?: string;
    software: SolutionItem[];
    infrastructure: SolutionItem[];
    ctas: {
        viewAll: { label: string; href: string };
        requestProposal: { label: string; href: string };
    };
}

// industies ----------------------------------------------------
export interface IndustryItem {
    name: string;
    description: string;
    icon: string;
    href: string;
}

export interface IndustriesData {
    badge: string;
    headline: string;
    subhead: string;
    industries: IndustryItem[];
    cta: {
        label: string;
        href: string;
    };
}


// case studies ----------------------------------------------------
export interface CaseStudyItem {
    id: string;
    industry: string;
    title: string;
    summary: string;
    metric: string;
    href: string;
}

export interface CaseStudiesData {
    badge: string;
    headline: string;
    subhead: string;
    cta: {
        label: string;
        href: string;
    };
    cases: CaseStudyItem[];
}

// testimonials ----------------------------------------------------
export interface TestimonialItem {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
}

// pricing ----------------------------------------------------
export interface PricingModel {
    title: string;
    description: string;
    highlights: string[];
}

export interface PricingData {
    badge: string;
    headline: string;
    subhead: string;
    models: PricingModel[];
    cta: {
        label: string;
        href: string;
    };
}


// The generic adapter
export async function fetchJSON<T>(path: string): Promise<T> {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
    }
    return response.json();
}