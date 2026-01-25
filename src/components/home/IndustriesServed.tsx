import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Landmark,
  Shield,
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
  ArrowRight,
  Building2,
  TrendingUp,
  LineChart,
} from "lucide-react";

import { useIndustriesData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/* Icon Map */
const iconMap: Record<string, any> = {
  Landmark,
  Shield,
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
};

const imageFolder = "/images/industries";

// Fallback images
const fallbackImages: Record<string, string> = {
  "Banking & Finance":
    "https://images.unsplash.com/photo-1565514020176-db7933dc7d3d?q=80&w=1000&auto=format&fit=crop",
  Insurance:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  Education:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
  Manufacturing:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
  Retail:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
};

export const IndustriesServed = () => {
  const { data, isLoading } = useIndustriesData();
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (slug: string) => {
    setFailedImages((prev) => new Set(prev).add(slug));
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-[400px] rounded-2xl" />
          ))}
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header - Adaptive Colors */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
              <Building2 className="h-4 w-4" />
              <span>{data.badge}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-4">
              {data.headline}
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {data.subhead}
            </p>
          </div>

          <Link
            to={data.cta.href}
            className="group hidden md:inline-flex items-center text-sm font-bold text-primary border-b border-primary/20 pb-1 hover:text-primary/80 transition-colors"
          >
            {data.cta.label}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.industries.map((industry: any, idx: number) => {
            const Icon = iconMap[industry.icon];
            const localImage = `${imageFolder}/${industry.slug}.jpeg`;
            const fallbackImage = fallbackImages[industry.name];
            const bgImage = failedImages.has(industry.slug)
              ? fallbackImage
              : localImage;

            return (
              <Link
                key={idx}
                to={industry.href}
                className="group relative h-[420px] overflow-hidden rounded-2xl border border-border shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${bgImage})` }}
                  onError={() => handleImageError(industry.slug)}
                />

                {/* OVERLAY LOGIC:
                   1. Default: Dark gradient (black/60) so white text is readable on any image.
                   2. Hover: Indigo/Blue gradient (indigo-600/90) as requested.
                */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-colors duration-500 group-hover:from-indigo-600/95 group-hover:via-indigo-600/80 group-hover:to-indigo-500/60" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Floating Icon */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-indigo-600 group-hover:scale-110 shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
                  <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    {/* Stat Badge */}
                    <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 mb-0 group-hover:mb-4 opacity-0 group-hover:opacity-100">
                      <div className="inline-flex items-center space-x-2 rounded bg-white/20 backdrop-blur-md px-3 py-1 text-white border border-white/30">
                        <LineChart className="w-3 h-3 text-white" />
                        <span className="text-xs font-bold uppercase tracking-wide shadow-sm">
                          {industry.stat || "Enterprise Ready"}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-md">
                      {industry.name}
                    </h3>

                    <p className="text-slate-200 leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors drop-shadow-sm">
                      {industry.description}
                    </p>

                    {/* Link Indicator */}
                    <div className="flex items-center text-sm font-semibold text-white mt-6 opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      View Capability
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile Only CTA */}
        <div className="mt-12 md:hidden flex justify-center">
          <Link
            to={data.cta.href}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            {data.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
};
