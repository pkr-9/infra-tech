import {
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
  TrendingUp,
  Layers,
} from "lucide-react";

// Icon cycling for visual variety
const Icons = [Zap, Shield, TrendingUp, Layers, BarChart3, CheckCircle2];

interface Benefit {
  title: string;
  description: string;
}

export function SolutionBenefits({ benefits }: { benefits?: Benefit[] }) {
  if (!benefits) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Strategic Advantage
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We move beyond basic execution to deliver strategic value through
            engineering excellence and architectural discipline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = Icons[idx % Icons.length];
            return (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-6">
                  <div className="shrink-0 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:text-primary group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
