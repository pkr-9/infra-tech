import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Activity, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  hero: {
    headline: string;
    subhead: string;
    stats?: Array<{ label: string; value: string }>;
  };
  category: string;
}

// Icon map for stats context
const StatIcons = [Activity, Shield, Zap];

export function SolutionDetailHero({ hero, category }: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-primary text-white">
      {/* ========================================================= */}
      {/* DYNAMIC BACKGROUND LAYERS                                */}
      {/* ========================================================= */}

      {/* 1. Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />

      {/* 2. Animated Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse mix-blend-screen -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-20 animate-blob mix-blend-screen translate-y-1/2 -translate-x-1/4" />
      </div>

      {/* ========================================================= */}
      {/* CONTENT LAYER                                            */}
      {/* ========================================================= */}
      <div className="container mx-auto px-4 relative z-10 max-w-9xl">
        {/* 1. Breadcrumb / Back Link */}
        <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
          <Link
            to="/solutions"
            className="group inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              Back to Catalog
            </span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* 2. Main Text Content */}
          <div className="lg:col-span-8">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {category} Solution
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {hero.headline}
            </h1>

            {/* Subhead */}
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 border-l-2 border-white/10 pl-6">
              {hero.subhead}
            </p>
          </div>

          {/* 3. Floating Stats Dock */}
          {hero.stats && (
            <div className="lg:col-span-4 w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50">
                <div className="space-y-6 divide-y divide-white/10">
                  {hero.stats.map((stat, i) => {
                    const Icon = StatIcons[i % StatIcons.length];
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between pt-6 first:pt-0 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-primary/20 transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="text-sm font-medium text-slate-400 uppercase tracking-wide group-hover:text-slate-300 transition-colors">
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

                {/* Decorative Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono uppercase">
                  <span>Live Metrics</span>
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                    <span>System Online</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Internal Animation Styles */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
      `}</style>
    </section>
  );
}
