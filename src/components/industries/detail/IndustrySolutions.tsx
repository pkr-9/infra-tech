import { Lightbulb, Check, ArrowRight } from "lucide-react";
import { RichItem } from "@/lib/api";

export function IndustrySolutions({ items }: { items?: RichItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            Tailored Solutions
          </h2>
          <p className="text-lg text-slate-600">
            Architectures designed to turn your industry constraints into
            competitive advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-6 p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/50 transition-colors"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Lightbulb className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-emerald-600 text-xs font-bold uppercase tracking-wide cursor-pointer hover:underline">
                  Explore Solution <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
