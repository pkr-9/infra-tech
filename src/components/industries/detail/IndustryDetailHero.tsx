import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IndustryDetailData } from "@/lib/api";
import { ArrowLeft, TrendingUp, ShieldCheck, Activity } from "lucide-react";

const StatIcons = [TrendingUp, ShieldCheck, Activity];

export function IndustryDetailHero({ data }: { data: IndustryDetailData }) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
          <Link
            to="/industries"
            className="group inline-flex items-center text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Industries
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Industry Vertical
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {data.hero.headline}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 border-l-2 border-emerald-500/30 pl-6">
              {data.hero.subhead}
            </p>

            <div className="mt-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-8 h-12"
                asChild
              >
                <Link to={data.cta.href}>{data.cta.label}</Link>
              </Button>
            </div>
          </div>

          {/* Stats Dock */}
          {data.hero.stats && (
            <div className="lg:col-span-4 w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6 shadow-2xl">
                <div className="space-y-6 divide-y divide-white/5">
                  {data.hero.stats.map((stat, i) => {
                    const Icon = StatIcons[i % StatIcons.length];
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between pt-6 first:pt-0 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-emerald-950/50 flex items-center justify-center text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-white tabular-nums">
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
