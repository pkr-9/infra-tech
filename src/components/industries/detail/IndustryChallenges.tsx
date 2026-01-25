import { AlertTriangle, TrendingDown } from "lucide-react";
import { RichItem } from "@/lib/api";

export function IndustryChallenges({ items }: { items?: RichItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
            <TrendingDown className="w-8 h-8 text-rose-500" />
            Critical Challenges
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The friction points slowing down innovation in your sector. We solve
            for these specific constraints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-50 group-hover:border-rose-200 transition-colors">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
