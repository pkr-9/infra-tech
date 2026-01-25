import { RichItem } from "@/lib/api";
import { Briefcase } from "lucide-react";

export function IndustryUseCases({ items }: { items?: RichItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Real-World Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
