import { IndustriesOverview as OverviewType } from "@/lib/api";
import { ShieldCheck, Layers, Cpu } from "lucide-react";

const icons = [ShieldCheck, Layers, Cpu];

export function IndustriesOverview({ overview }: { overview: OverviewType }) {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-slate-900">
            {overview.headline}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {overview.content}
          </p>
        </div>

        {overview.keyPoints && (
          <div className="grid md:grid-cols-3 gap-8">
            {overview.keyPoints.map((point, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {point.label}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
