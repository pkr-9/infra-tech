import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

// Fetcher for industries
const fetchIndustries = async () => {
  const res = await fetch("/data/industries.json");
  if (!res.ok) throw new Error("Failed to load industries");
  return res.json();
};

export const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: industries, isLoading: isIndLoading } = useQuery({
    queryKey: ["industries"],
    queryFn: fetchIndustries,
  });
  const { data: products } = useProducts();

  if (isIndLoading) return <IndustrySkeleton />;

  const industry = industries?.find((i: any) => i.slug === slug);
  if (!industry)
    return <div className="pt-32 text-center">Sector not found</div>;

  // Filter related products
  const relatedProducts =
    products?.filter(
      (p: any) =>
        industry.relatedProducts.includes(p.slug) ||
        industry.relatedProducts.includes(p.id)
    ) || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={industry.heroImage}
            alt={industry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl animate-fade-in-up">
            <Badge className="mb-4 bg-primary text-primary-foreground border-none">
              Industry Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              {industry.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
              {industry.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="font-semibold text-lg h-12 px-8"
                asChild
              >
                <Link to="/contact">Consult an Expert</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 bg-background/50 backdrop-blur"
                asChild
              >
                <Link to="#solution">View Architecture</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-20 space-y-24">
        {/* Section 1: The Challenge */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold">The Challenge</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Modern enterprises in {industry.title} are facing unprecedented
              pressure to optimize efficiency while navigating complex legacy
              environments.
            </p>
            <div className="space-y-6">
              {industry.challenges.map((challenge: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-6 rounded-xl hover:border-red-500/30 transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {challenge.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Stat placeholder */}
          <div className="relative bg-secondary/30 rounded-2xl p-8 min-h-[400px] flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="text-6xl font-bold font-heading text-primary mb-2">
                30%
              </div>
              <div className="text-muted-foreground">
                Average Efficiency Loss due to Legacy Tech
              </div>
            </div>
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          </div>
        </section>

        {/* Section 2: The Solution (Architecture) */}
        <section
          id="solution"
          className="bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full text-primary mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                {industry.solution.heading}
              </h2>
              <p className="text-xl text-muted-foreground">
                {industry.solution.text}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              {industry.solution.steps.map((step: string, idx: number) => (
                <div
                  key={idx}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-background border-2 border-primary rounded-full flex items-center justify-center text-2xl font-bold font-heading mb-6 shadow-lg shadow-primary/10">
                    {idx + 1}
                  </div>
                  <p className="font-medium text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Benefits & KPI */}
        <section>
          <h2 className="text-3xl font-heading font-bold mb-12 text-center">
            Operational Impact
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {industry.benefits.map((benefit: string, idx: number) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border shadow-sm"
              >
                <CheckCircle2 className="w-10 h-10 text-green-500 mb-4" />
                <span className="font-semibold text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Related Products */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-border pt-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-primary" />
                Recommended Hardware
              </h2>
              <Button variant="ghost" asChild>
                <Link to="/products" className="gap-2">
                  View Full Catalog <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

const IndustrySkeleton = () => (
  <div className="min-h-screen">
    <Skeleton className="h-[60vh] w-full" />
    <div className="container mx-auto px-4 py-20 space-y-12">
      <Skeleton className="h-64 w-full rounded-2xl" />
      <div className="grid md:grid-cols-3 gap-8">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  </div>
);
