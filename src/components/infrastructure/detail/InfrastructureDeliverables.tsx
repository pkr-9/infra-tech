import { PackageCheck, CheckSquare } from "lucide-react";

export function InfrastructureDeliverables({
  deliverables,
}: {
  deliverables?: string[];
}) {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest mb-4">
              <PackageCheck className="w-4 h-4" />
              Handover Assets
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">
              Tangible Deliverables
            </h2>
            <p className="text-lg text-slate-600">
              Complete documentation and asset tracking. We don't leave the site
              until you have full visibility into what was deployed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-sm font-mono text-slate-400 uppercase mb-6 border-b border-slate-100 pb-2">
              Manifest_v1.0
            </h4>
            <ul className="space-y-4">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
