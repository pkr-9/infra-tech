import { Link } from "react-router-dom";
import {
  FileText,
  PenTool,
  Code2,
  Server,
  Rocket,
  Headset,
  ArrowRight,
  Workflow,
} from "lucide-react";

import { useProcessData } from "@/hooks/use-content";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

/* Icon Map */
const iconMap: Record<string, any> = {
  FileText,
  PenTool,
  Code2,
  Server,
  Rocket,
  Headset,
};

export const ProcessOverview = () => {
  const { data, isLoading } = useProcessData();

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-40 mb-4 mx-auto" />
          <Skeleton className="h-10 w-2/3 mx-auto mb-6" />
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Workflow className="h-4 w-4" />
            <span>{data.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
            {data.headline}
          </h2>

          <p className="max-w-[720px] text-lg text-muted-foreground">
            {data.subhead}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.steps.map((step, idx) => {
            const Icon = iconMap[step.icon];

            return (
              <div
                key={idx}
                className={cn(
                  "relative p-6 bg-card border border-border rounded-xl",
                  "transition-all duration-300 hover:shadow-lg hover:border-primary/50",
                )}
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-xs font-bold text-muted-foreground">
                  STEP {idx + 1}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
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
