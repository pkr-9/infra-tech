import { ShieldCheck, FileCheck } from "lucide-react";
import { RichItem } from "@/lib/api";

export function IndustryCapabilities({ items }: { items?: RichItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" />
              Compliance & Security
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Rigorous Standards
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We don't just build software; we build auditable, compliant
              systems that stand up to regulatory scrutiny.
            </p>
          </div>

          <div className="grid gap-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <FileCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
