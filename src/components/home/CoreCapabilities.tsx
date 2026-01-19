import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Server,
  ShieldCheck,
  Code2,
  FileText,
  CircuitBoard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCapabilitiesData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

/* Icon Map */
const iconMap: Record<string, any> = {
  Cloud,
  Cpu,
  Server,
  ShieldCheck,
  Code2,
  FileText,
};

export const CoreCapabilities = () => {
  const { data, isLoading } = useCapabilitiesData();

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-56 rounded-xl" />
          ))}
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-primary shadow-sm">
            <CircuitBoard className="h-4 w-4" />
            <span>{data.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
            {data.headline}
          </h2>

          <p className="max-w-[720px] text-lg text-muted-foreground">
            {data.subhead}
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.capabilities.map((cap, idx) => {
            const Icon = iconMap[cap.icon];

            return (
              <Link
                key={idx}
                to={cap.href}
                className="group relative flex flex-col p-6 bg-card rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
                    cap.bg,
                  )}
                >
                  <Icon className={cn("w-6 h-6", cap.color)} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {cap.description}
                </p>

                {/* Footer */}
                <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          {data.metrics.map((metric, idx) => (
            <MetricItem key={idx} label={metric.label} value={metric.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MetricItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <span className="text-2xl font-bold font-heading text-foreground">
      {value}
    </span>
    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
      {label}
    </span>
  </div>
);
