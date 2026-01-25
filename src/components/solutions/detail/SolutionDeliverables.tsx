import { PackageCheck, FileCheck, Check, ClipboardCheck } from "lucide-react";

export function SolutionDeliverables({
  deliverables,
}: {
  deliverables?: string[];
}) {
  if (!deliverables || deliverables.length === 0) return null;

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <ClipboardCheck className="w-96 h-96" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Context */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest border border-green-100">
              <PackageCheck className="w-3.5 h-3.5" />
              Guaranteed Output
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Concrete Deliverables
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe in tangible outcomes. Upon project completion, you
              receive full ownership of all assets, codebases, and documentation
              listed in this manifest.
            </p>
          </div>

          {/* Right: The Manifest Card */}
          <div className="relative bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm">
            {/* decorative 'tape' */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-100/50 -rotate-2 backdrop-blur-sm border border-yellow-200/50" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 border-dashed">
              <span className="font-mono text-xs text-slate-400 uppercase">
                Ref: PRJ-OUTPUT-v1.0
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase">
                <FileCheck className="w-4 h-4 text-primary" />
                Verified
              </div>
            </div>

            <ul className="space-y-4">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-600 shrink-0 shadow-sm group-hover:border-green-500 transition-colors">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                    {d}
                  </span>
                </li>
              ))}
            </ul>

            {/* Signature Area (Visual Decor) */}
            <div className="mt-8 pt-6 border-t border-slate-200 border-dashed flex items-center justify-between opacity-50">
              <div className="h-8 w-24 bg-slate-200/50 rounded" />
              <div className="h-8 w-8 rounded-full bg-slate-200/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
