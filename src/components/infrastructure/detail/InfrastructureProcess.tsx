import { ArrowDown } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export function InfrastructureProcess({ steps }: { steps?: ProcessStep[] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Deployment Lifecycle
          </h2>
          <p className="text-lg text-slate-400">
            From BOM validation to the final cable label. A standardized process
            for global consistency.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Connector (Desktop) */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-10" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-cyan-400 mb-6 shadow-lg z-10">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Mobile Connector */}
                {idx !== steps.length - 1 && (
                  <ArrowDown className="md:hidden w-6 h-6 text-slate-700 mt-8" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
