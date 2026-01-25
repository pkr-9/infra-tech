import { InfrastructureOverview as OverviewType } from "@/lib/api";
import { CheckCircle2 } from "lucide-react";

export function InfrastructureOverview({
  overview,
}: {
  overview: OverviewType;
}) {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-slate-900">
          {overview.headline}
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed mb-12">
          {overview.content}
        </p>

        {overview.keyPoints && (
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {overview.keyPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <h3 className="font-bold text-slate-900">{point.label}</h3>
                </div>
                <p className="text-sm text-slate-500">{point.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
