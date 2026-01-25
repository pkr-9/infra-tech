import { ArrowRight } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export function SolutionProcess({ steps }: { steps?: ProcessStep[] }) {
  if (!steps) return null;

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Abstract Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Engagement Lifecycle
          </h2>
          <p className="text-lg text-slate-400">
            A transparent, agile workflow designed to reduce risk and accelerate
            time-to-value from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent -z-10" />

          {steps.map((item, idx) => (
            <div key={idx} className="group relative">
              {/* Step Number Badge */}
              <div className="w-24 h-24 rounded-2xl bg-card/70 border border-slate-800 flex items-center justify-center mx-auto mb-8 relative z-10 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-3xl font-bold text-slate-700 group-hover:text-primary transition-colors duration-300">
                  {item.step}
                </span>

                {/* Active Dot */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950 group-hover:bg-primary transition-colors duration-300" />
              </div>

              {/* Connector Arrow (Mobile hidden, Desktop visible except last) */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 text-slate-800 z-0">
                  <ArrowRight className="w-8 h-8 opacity-20" />
                </div>
              )}

              <div className="text-center px-2">
                <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
