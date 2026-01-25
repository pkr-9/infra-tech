// ----------------------------------------------------
// Navbar
// ----------------------------------------------------

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export interface NavSolutionLink {
    label: string;
    slug: string;
}

export interface NavData {
    primary: NavItem[];
    categories: NavItem[];
    solutionsMenu?: {
        software: NavSolutionLink[];
        infrastructure: NavSolutionLink[];
        managed: NavSolutionLink[];
    };
}


// ----------------------------------------------------
// Home Hero
// ----------------------------------------------------

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

// ----------------------------------------------------
// Trust
// ----------------------------------------------------

export interface ClientLogo {
    name: string;
    logo: string;
}

export interface TrustData {
    headline: string;
    clients: ClientLogo[];
}

// ----------------------------------------------------
// Process
// ----------------------------------------------------

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

// ----------------------------------------------------
// Homepage Solutions Showcase
// ----------------------------------------------------

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


// ===============================
// SOLUTIONS LANDING PAGE TYPES
// ===============================

export interface SolutionsPageHero {
    headline: string;
    subhead: string;
    ctas: {
        primary: CTA;
        secondary?: CTA;
    };
    stats?: Array<{ label: string; value: string }>;
}

export interface SolutionsPageFilters {
    categories: { id: string; label: string }[];
    industries: string[];
    technologies: string[];
}


export interface SolutionsPageSummaryBlock {
    id: string;
    headline: string;
    content: string;
    image: string;
}

export interface SolutionsPageCTASection {
    headline: string;
    subhead: string;
    cta: CTA;
}

export interface SolutionsPageMeta {
    title: string;
    subtitle?: string;
    description: string;
    canonical: string;
    ogImage: string;
}

export interface SolutionsPageData {
    pageMeta: SolutionsPageMeta;
    hero: SolutionsPageHero;
    filters: SolutionsPageFilters;
    featuredSolution?: FeaturedSolution;
    solutions: SolutionCard[];
    summaryBlocks: SolutionsPageSummaryBlock[];

    // Add these two optional fields:
    faqs?: FAQItem[];
    sidebar?: SidebarData;

    ctaSection: SolutionsPageCTASection;
}

// Add these new interfaces
export interface FAQItem {
    question: string;
    answer: string;
}

export interface SidebarData {
    cta: {
        headline: string;
        href: string;
        label: string;
    };
}
export interface FeaturedSolution {
    id: string;
    slug: string;
    badge?: string;
    title: string;
    summary: string;
    image: string;
    cta: CTA;
    stats?: Array<{ label: string; value: string }>;
}

// ===============================
// SOLUTION DETAIL PAGE TYPES
// ===============================

export interface SolutionDetailHero {
    headline: string;
    subhead: string;
}

export interface SolutionDetailCTA {
    label: string;
    href: string;
}

export interface SolutionDetailData {
    title: string;
    hero: {
        headline: string;
        subhead: string;
        stats?: Array<{ label: string; value: string }>;
    };
    overview: string;
    whatWeDo: string[];
    howWeWork: string[];
    benefits?: Array<{
        title: string;
        description: string;
        icon?: string;
    }>;
    process?: Array<{
        step: string;
        title: string;
        description: string;
    }>;
    deliverables: string[];
    useCases: string[];
    technologies: string[];
    documents?: Array<{ title: string; url: string }>;
    cta: {
        label: string;
        href: string;
    };
}


// ----------------------------------------------------
// Solutions Landing - Card Item
// ----------------------------------------------------

export interface SolutionCard {
    id: string;
    slug: string;
    title: string;
    category: "software" | "infrastructure" | "managed";
    summary: string;
    icon: string;
    tags?: string[];
    industries?: string[];
    href: string;
}

// ===============================
// INFRASTRUCTURE LANDING PAGE
// ===============================

export interface InfrastructurePageHero {
    headline: string;
    subhead: string;
    ctas: {
        primary: CTA;
        secondary?: CTA;
    };
    stats?: Array<{ label: string; value: string }>;
}

export interface InfrastructureOverview {
    headline: string;
    content: string;
    keyPoints?: Array<{ label: string; desc: string }>;
}

// ... other interfaces remain compatible

export interface InfrastructureCard {
    id: string;
    slug: string;
    title: string;
    summary: string;
    icon: string;
    tags?: string[];
    industries?: string[];
    href: string;
}

export interface InfrastructureSummaryBlock {
    id: string;
    headline: string;
    content: string;
    image: string;
}

export interface InfrastructureCTASection {
    headline: string;
    subhead: string;
    cta: {
        label: string;
        href: string;
    };
}

export interface InfrastructurePageMeta {
    title: string;
    subtitle?: string;
}

export interface InfrastructurePageData {
    pageMeta: InfrastructurePageMeta;
    hero: InfrastructurePageHero;
    overview: InfrastructureOverview;
    infrastructure: InfrastructureCard[];
    summaryBlocks: InfrastructureSummaryBlock[];
    ctaSection: InfrastructureCTASection;
}

// ===============================
// INFRASTRUCTURE DETAIL PAGE
// ===============================

export interface InfrastructureDetailHero {
    headline: string;
    subhead: string;
}

export interface InfrastructureDetailCTA {
    label: string;
    href: string;
}
// src/lib/api.ts

export interface InfrastructureDetailData {
    title: string;
    hero: {
        headline: string;
        subhead: string;
        stats?: Array<{ label: string; value: string }>;
    };
    overview: string;

    // UPDATED: Rich object instead of string[]
    capabilities: Array<{
        title: string;
        description: string;
        icon?: string;
    }>;

    // UPDATED: Rich object instead of string[]
    process: Array<{
        step: string;
        title: string;
        description: string;
    }>;

    deliverables: string[];
    technologies: string[];

    // NEW: Documents section
    documents?: Array<{ title: string; url: string }>;

    cta: {
        label: string;
        href: string;
    };
}


// ===============================
// INDUSTRIES LANDING PAGE
// ===============================

export interface IndustriesPageHero {
    headline: string;
    subhead: string;
    ctas: {
        primary: CTA;
        secondary?: CTA;
    };
    // NEW: Added stats support
    stats?: Array<{ label: string; value: string }>;
}

export interface IndustriesOverview {
    headline: string;
    content: string;
    // NEW: Added keyPoints support
    keyPoints?: Array<{ label: string; desc: string }>;
}

export interface IndustryCard {
    id: string;
    slug: string;
    title: string;
    summary: string;
    icon: string;
    tags?: string[];
    href: string;
}

export interface IndustriesSummaryBlock {
    id: string;
    headline: string;
    content: string;
    image: string;
}

export interface IndustriesCTASection {
    headline: string;
    subhead: string;
    cta: {
        label: string;
        href: string;
    };
}

export interface IndustriesPageMeta {
    title: string;
    subtitle?: string;
}

export interface IndustriesPageData {
    pageMeta: IndustriesPageMeta;
    hero: IndustriesPageHero;
    overview: IndustriesOverview;
    industries: IndustryCard[];
    summaryBlocks: IndustriesSummaryBlock[];
    ctaSection: IndustriesCTASection;
}

// ===============================
// INDUSTRIES DETAIL PAGE
// ===============================

export interface IndustryDetailHero {
    headline: string;
    subhead: string;
}

export interface IndustryDetailCTA {
    label: string;
    href: string;
}


// 1. Define the rich item interface
export interface RichItem {
    title: string;
    description: string;
}

// 2. Update the IndustryDetailData interface
export interface IndustryDetailData {
    title: string;
    hero: {
        headline: string;
        subhead: string;
        stats?: Array<{ label: string; value: string }>;
    };
    overview: string;

    // UPDATED: All list fields are now RichItem[]
    challenges: RichItem[];
    solutions: RichItem[];
    capabilities: RichItem[];
    useCases: RichItem[];

    cta: {
        label: string;
        href: string;
    };
}


// ----------------------------------------------------
// Industries
// ----------------------------------------------------

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

// ----------------------------------------------------
// Case Studies
// ----------------------------------------------------

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


export interface CaseStudy {
    id: string;
    slug: string;
    client: string;
    industry: string;
    title: string;
    metric: string;
    summary: string;
    challenge: string;
    solution: string;
    outcome: string;
    tags: string[];
    image: string;
}

export interface CaseStudiesPageData {
    pageMeta: {
        title: string;
        description: string;
    };
    hero: {
        headline: string;
        subhead: string;
    };
    // NEW: Added this section
    homeSection: {
        badge: string;
        headline: string;
        subhead: string;
        cta: {
            label: string;
            href: string;
        };
    };
    cases: CaseStudy[];
}


export async function fetchCaseStudiesData(): Promise<CaseStudiesPageData> {
    const response = await fetch("/data/case-studies.json");
    if (!response.ok) {
        throw new Error("Failed to fetch case studies data");
    }
    return response.json();
}

// ----------------------------------------------------
// Testimonials
// ----------------------------------------------------

export interface TestimonialItem {
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
}

// ----------------------------------------------------
// Pricing
// ----------------------------------------------------

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
// ----------------------------------------------------
// Offerings Catalog
// ----------------------------------------------------

export interface Offering {
    id: string;
    slug: string;
    title: string;
    summary: string;
    description?: string;
    category: "software" | "infrastructure" | "managed";
    icon: string;
    tags?: string[];
    href: string;

    hero?: {
        headline: string;
        subhead: string;
    };

    features?: string[];
    deliverables?: string[];
    techStack?: string[];
    seo?: {
        title: string;
        description: string;
    };
    industries?: string[];
    caseStudies?: string[];
    documents?: {
        title: string;
        url: string;
    }[];
}

export interface OfferingsData {
    featuredCapabilities: string[];
    categories: {
        id: string;
        label: string;
        icon: string;
    }[];
    offerings: Offering[];
}

// ----------------------------------------------------
// Solutions Landing - Card Item
// ----------------------------------------------------

export interface SolutionCard {
    id: string;
    slug: string;
    title: string;
    category: "software" | "infrastructure" | "managed";
    summary: string;
    icon: string;
    tags?: string[];
    industries?: string[];
    href: string;
}

// ----------------------------------------------------
// Generic Fetch Helper
// ----------------------------------------------------

export async function fetchJSON<T>(path: string): Promise<T> {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
    }
    return response.json();
}


export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    initials: string;
    linkedin?: string;
}

export interface CompanyValue {
    title: string;
    description: string;
    icon: string;
}

export interface AboutPageData {
    pageMeta: {
        title: string;
        description: string;
    };
    hero: {
        headline: string;
        subhead: string;
    };
    story: {
        headline: string;
        content: string;
        stats: Array<{ label: string; value: string }>;
    };
    values: CompanyValue[];
    team: TeamMember[];
    certifications: string[];
}

// --- Fetcher ---

export async function fetchAboutPageData(): Promise<AboutPageData> {
    // In a real app, this might be a CMS call.
    // For now, we fetch the static JSON file.
    const response = await fetch("/data/about-page.json");
    if (!response.ok) {
        throw new Error("Failed to fetch about page data");
    }
    return response.json();
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    category: string;
    image: string;
    content: string;
}

export interface BlogPageData {
    pageMeta: { title: string; description: string };
    hero: { headline: string; subhead: string };
    posts: BlogPost[];
}

export async function fetchBlogData(): Promise<BlogPageData> {
    const response = await fetch("/data/blog-posts.json");
    if (!response.ok) throw new Error("Failed to fetch blog data");
    return response.json();
}