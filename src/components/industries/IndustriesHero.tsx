import { IndustriesPageHero } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Trophy,
  Briefcase,
  Building2,
  TrendingUp,
} from "lucide-react";

// Icon mapping for stats
const iconMap: Record<string, any> = {
  "Regulatory Success": Trophy,
  "Verticals Served": Briefcase,
  "Client Tier": Building2,
};

export function IndustriesHero({ hero }: { hero: IndustriesPageHero }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-32 bg-slate-950">
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] opacity-40 animate-pulse mix-blend-screen -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[100px] opacity-30 animate-blob mix-blend-screen translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 text-sm font-medium text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <TrendingUp className="w-4 h-4" />
            <span>Vertical-Specific Engineering</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-2xl">
          {hero.headline}
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {hero.subhead}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg rounded-full bg-emerald-600 text-white hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
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
              className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <a href={hero.ctas.secondary.href}>{hero.ctas.secondary.label}</a>
            </Button>
          )}
        </div>

        {/* Stats Bar */}
        {hero.stats && (
          <div className="animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <div className="inline-flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-white/10 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
              {hero.stats.map((stat, idx) => {
                const Icon = iconMap[stat.label] || Trophy;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center px-12 py-8 min-w-[220px] group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-3 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest opacity-90">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-4xl font-heading font-bold text-white tracking-tighter">
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
