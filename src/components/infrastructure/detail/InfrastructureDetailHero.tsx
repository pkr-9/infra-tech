import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InfrastructureDetailData } from "@/lib/api";
import { ArrowLeft, Globe2, Truck, Activity, Box } from "lucide-react";

// Icon mapping for stats
const StatIcons = [Globe2, Truck, Activity, Box];

export function InfrastructureDetailHero({
  data,
}: {
  data: InfrastructureDetailData;
}) {
  const { hero } = data;

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* --- Background Layers --- */}
      {/* 1. Industrial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* 2. Cyan Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] opacity-40 animate-pulse mix-blend-screen -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] opacity-30 animate-blob mix-blend-screen translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Back Link */}
        <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
          <Link
            to="/infrastructure"
            className="group inline-flex items-center text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              Back to Infrastructure
            </span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Main Text */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Physical Deployment
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {hero.headline}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 border-l-2 border-cyan-500/30 pl-6">
              {hero.subhead}
            </p>

            <div className="mt-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full px-8 h-12"
                asChild
              >
                <Link to={data.cta.href}>{data.cta.label}</Link>
              </Button>
            </div>
          </div>

          {/* Stats Dock */}
          {hero.stats && (
            <div className="lg:col-span-4 w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-2xl shadow-black/50">
                <div className="space-y-6 divide-y divide-white/5">
                  {hero.stats.map((stat, i) => {
                    const Icon = StatIcons[i % StatIcons.length];
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between pt-6 first:pt-0 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-cyan-950/50 flex items-center justify-center text-cyan-400/70 group-hover:text-cyan-400 group-hover:bg-cyan-900/50 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="text-sm font-medium text-slate-400 uppercase tracking-wide group-hover:text-cyan-200 transition-colors">
                            {stat.label}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
                          {stat.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
