import { Link } from "react-router-dom";
import {
  Check,
  Wallet,
  Briefcase,
  Users,
  Settings2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePricingData } from "@/hooks/use-content";
import { cn } from "@/lib/utils";

/* Icon Mapping based on card titles */
const iconMap: Record<string, any> = {
  "Project-Based Delivery": Briefcase,
  "Dedicated Team Model": Users,
  "Managed Services": Settings2,
};

export const PricingSnapshot = () => {
  const { data, isLoading } = usePricingData();

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[500px] w-full rounded-3xl" />
          ))}
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            <Wallet className="h-4 w-4" />
            <span className="uppercase tracking-wide text-xs">
              {data.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            {data.headline}
          </h2>

          <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
            {data.subhead}
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {data.models.map((model: any, idx: number) => {
            const Icon = iconMap[model.title] || Briefcase;
            // Highlight the middle card (Index 1)
            const isPopular = idx === 1;

            return (
              <div
                key={idx}
                className={cn(
                  "relative flex flex-col p-8 rounded-3xl transition-all duration-500",
                  "bg-card border shadow-sm",
                  isPopular
                    ? "border-primary shadow-2xl shadow-primary/10 scale-105 z-10"
                    : "border-border hover:border-primary/30 hover:shadow-lg mt-0 md:mt-8",
                )}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors",
                      isPopular
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed min-h-[48px]">
                    {model.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-border mb-8" />

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {model.highlights.map((point: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm font-medium text-foreground/80"
                    >
                      <div className="mt-0.5 rounded-full bg-green-500/10 p-1">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Card Action */}
                <Button
                  className={cn(
                    "w-full rounded-full font-bold h-12",
                    isPopular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/80",
                  )}
                  asChild
                >
                  <Link to={data.cta.href}>
                    {isPopular ? "Get Started" : "Learn More"}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom enterprise agreement?
          </p>
          <Link
            to={data.cta.href}
            className="inline-flex items-center font-bold text-primary hover:underline underline-offset-4"
          >
            {data.cta.label}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
