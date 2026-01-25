import {
  ShieldCheck,
  Zap,
  Headset,
  FileCheck,
  Cloud,
  Lock,
  Rocket,
  Activity,
} from "lucide-react";
import { useAchievementsData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

/* Icon Map */
const iconMap: Record<string, any> = {
  ShieldCheck,
  Zap,
  Headset,
  FileCheck,
  Cloud,
  Lock,
  Rocket,
  Activity,
};

export const Achievements = () => {
  const { data, isLoading } = useAchievementsData();

  if (isLoading) return <AchievementSkeleton />;
  if (!data) return null;

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-primary-foreground">
      {/* Dynamic Background: "Data Stream" Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent delay-100" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent delay-300" />
      </div>

      {/* Abstract Tech Graphic */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          {/* <div className="inline-flex items-center space-x-2 rounded px-3 py-1 bg-white/10 border border-white/10 text-xs font-mono mb-6">
            <Activity className="w-3 h-3 text-green-400" />
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6">
            {data.headline}
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            {data.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Primary Metrics (Takes 7 cols) */}
          <div className="lg:col-span-7 grid gap-6">
            {data.primaryMetrics.map((metric: any, idx: number) => {
              const Icon = iconMap[metric.icon];
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 transition-all hover:bg-white/10 hover:border-white/20"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-baseline space-x-2 mb-2">
                        <span className="text-5xl font-bold tracking-tighter text-white">
                          {metric.value}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-100 mb-2">
                        {metric.label}
                      </h3>
                      <p className="text-primary-foreground/60 max-w-md">
                        {metric.description}
                      </p>
                    </div>

                    <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Secondary Grid (Takes 5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            {data.secondaryMetrics.map((metric: any, idx: number) => {
              const Icon = iconMap[metric.icon];
              return (
                <div
                  key={idx}
                  className="aspect-square flex flex-col items-center justify-center p-6 text-center rounded-2xl bg-primary-foreground/5 border border-white/5 hover:border-white/20 transition-colors"
                >
                  <Icon className="w-8 h-8 mb-4 text-blue-300 opacity-80" />
                  <span className="text-2xl font-bold text-white mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
                    {metric.label}
                  </span>
                </div>
              );
            })}

            {/* Call to Action Block inside the grid */}
            <div className="col-span-1 sm:col-span-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 flex flex-col justify-center items-center text-center">
              <span className="text-lg font-bold mb-2">Ready to Scale?</span>
              <p className="text-sm opacity-90 mb-0">
                Deploy your infrastructure on our proven architecture today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementSkeleton = () => (
  <section className="py-24 bg-primary h-[800px] flex items-center justify-center">
    <Skeleton className="h-12 w-48 bg-white/10" />
  </section>
);
