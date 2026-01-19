import { Link } from "react-router-dom";
import {
  Landmark,
  Shield,
  HeartPulse,
  GraduationCap,
  Factory,
  ShoppingBag,
  ArrowRight,
  Building2,
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

export const IndustriesServed = () => {
  const { data, isLoading } = useIndustriesData();

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-xl" />
          ))}
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Building2 className="h-4 w-4" />
            <span>{data.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            {data.headline}
          </h2>

          <p className="max-w-[720px] text-lg text-muted-foreground">
            {data.subhead}
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.industries.map((industry, idx) => {
            const Icon = iconMap[industry.icon];

            return (
              <Link
                key={idx}
                to={industry.href}
                className={cn(
                  "group p-6 bg-card border border-border rounded-xl transition-all duration-300",
                  "hover:border-primary/50 hover:shadow-lg hover:-translate-y-1",
                )}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>

                {/* CTA */}
                <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            to={data.cta.href}
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            {data.cta.label}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
