import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  PenTool,
  Code2,
  Server,
  Rocket,
  Headset,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  Terminal,
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
  const [activeStep, setActiveStep] = useState(0);

  if (isLoading) return <LoadingSkeleton />;
  if (!data) return null;

  const ActiveIcon = iconMap[data.steps[activeStep].icon];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Tech Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-border pb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-primary font-mono text-xs uppercase tracking-widest mb-4">
              <Terminal className="h-4 w-4" />
              <span>{data.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-4">
              {data.headline}
            </h2>
            <p className="text-lg text-muted-foreground">{data.subhead}</p>
          </div>

          <Link
            to={data.cta.href}
            className="hidden md:inline-flex h-12 items-center justify-center rounded-none border border-primary bg-primary/5 px-8 text-sm font-medium text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {data.cta.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-5 space-y-2">
            {data.steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "w-full group flex items-start text-left p-4 rounded-lg transition-all duration-300 border border-transparent",
                    isActive
                      ? "bg-card border-primary/20 shadow-md translate-x-2"
                      : "hover:bg-accent/50 hover:translate-x-1",
                  )}
                >
                  {/* Number Indicator */}
                  <span
                    className={cn(
                      "mr-4 font-mono text-sm mt-1 transition-colors",
                      isActive
                        ? "text-primary font-bold"
                        : "text-muted-foreground/50",
                    )}
                  >
                    0{idx + 1}
                  </span>

                  <div>
                    <h3
                      className={cn(
                        "text-lg font-bold mb-1 transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary/80",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "text-sm line-clamp-2 transition-colors",
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {step.description}
                    </p>
                  </div>

                  {isActive && (
                    <ArrowRight className="ml-auto w-5 h-5 text-primary animate-in slide-in-from-left-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: The "System Monitor" Card */}
          <div className="lg:col-span-7 sticky top-8">
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
              {/* Card Header (Terminal Style) */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  STATUS:{" "}
                  <span className="text-green-600 font-bold">ACTIVE</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Background Decoration */}
                <ActiveIcon className="absolute -bottom-12 -right-12 w-64 h-64 text-primary/5 stroke-1" />

                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <ActiveIcon className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground uppercase font-mono tracking-wider mb-1">
                      Phase Duration
                    </div>
                    <div className="inline-flex items-center bg-secondary px-3 py-1 rounded-md text-sm font-semibold">
                      <Clock className="w-4 h-4 mr-2" />
                      {data.steps[activeStep].timeframe}
                    </div>
                  </div>
                </div>

                <div className="mb-8 relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {data.steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {data.steps[activeStep].description}
                  </p>
                </div>

                {/* Deliverables Section - The "More Data" Part */}
                <div className="mt-auto relative z-10">
                  <h4 className="flex items-center text-sm font-bold uppercase tracking-wider text-primary mb-4">
                    <Layers className="w-4 h-4 mr-2" />
                    Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {data.steps[activeStep].deliverables?.map(
                      (item: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-center p-3 rounded-lg bg-background border border-border"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ),
                    ) || (
                      <div className="col-span-2 text-sm text-muted-foreground italic">
                        Detailed specifications available upon request.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-primary/5 p-4 border-t border-primary/10 flex justify-between items-center">
                <span className="font-mono text-xs text-primary/70">
                  PROCESS ID: {data.steps[activeStep].status.toUpperCase()}_0
                  {activeStep + 1}
                </span>
              </div>
            </div>

            {/* Mobile Only CTA */}
            <div className="mt-8 md:hidden">
              <Link
                to={data.cta.href}
                className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary text-primary-foreground font-medium"
              >
                {data.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Skeleton */
const LoadingSkeleton = () => (
  <section className="py-24">
    <div className="container px-4">
      <Skeleton className="h-12 w-1/2 mb-12" />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-20 w-full" />
          ))}
        </div>
        <Skeleton className="h-[500px] w-full rounded-2xl" />
      </div>
    </div>
  </section>
);
