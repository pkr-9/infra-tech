import { SolutionsPageHero } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Trophy,
  Globe2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon mapping
const iconMap: Record<string, any> = {
  "Uptime Guaranteed": Trophy,
  "Global Regions": Globe2,
  Compliance: ShieldCheck,
};

export function SolutionsHero({ hero }: { hero: SolutionsPageHero }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* --- 1. Background Layers --- */}
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />

      {/* Ambient Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 opacity-30 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent -z-10" />

      {/* --- 2. Content Container --- */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        {/* Animated Badge */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out"></div>

        {/* Headline with subtle gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-100">
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            {hero.headline}
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-200">
          {hero.subhead}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-300">
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={hero.ctas.primary.href}>
              {hero.ctas.primary.label}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          {hero.ctas.secondary && (
            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 px-8 text-lg rounded-full border-border/50 bg-background/50 backdrop-blur-xl hover:bg-secondary/50 transition-all duration-300"
            >
              <a href={hero.ctas.secondary.href}>{hero.ctas.secondary.label}</a>
            </Button>
          )}
        </div>

        {/* --- 3. Stats Bar (Glassmorphic) --- */}
        {hero.stats && (
          <div className="animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="inline-flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
              {hero.stats.map((stat, idx) => {
                const Icon = iconMap[stat.label] || Trophy;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center px-12 py-8 min-w-[220px] group cursor-default hover:bg-white/5 transition-colors duration-500 first:rounded-l-2xl last:rounded-r-2xl"
                  >
                    <div className="flex items-center gap-2 mb-3 text-indigo-600 group-hover:text-indigo-800 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest opacity-90">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-4xl font-heading font-bold text-white tracking-tighter drop-shadow-lg">
                      {stat.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
