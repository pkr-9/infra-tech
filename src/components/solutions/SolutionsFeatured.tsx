import { FeaturedSolution } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function SolutionsFeatured({
  featured,
}: {
  featured?: FeaturedSolution;
}) {
  if (!featured) return null;

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-30" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 rounded px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{featured.badge || "Featured Solution"}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              {featured.title}
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed">
              {featured.summary}
            </p>

            {/* Metric Grid */}
            {featured.stats && (
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                {featured.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Button
              asChild
              size="lg"
              className="bg-white text-slate-950 hover:bg-slate-200"
            >
              <Link to={featured.cta.href}>
                {featured.cta.label}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right: Visual */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-indigo-600 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-500 opacity-50 blur-lg" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay UI Mockup (Optional Decoration) */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <div className="flex items-center gap-3 text-sm text-white font-mono">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Migration Pipeline: Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
