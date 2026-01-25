import { IndustryCard as CardType } from "@/lib/api";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  HeartPulse,
  Landmark,
  Factory,
  ShoppingCart,
  Zap,
  Building2,
} from "lucide-react";

// Robust Icon Mapping
const iconMap: Record<string, any> = {
  HeartPulse,
  Landmark,
  Factory,
  ShoppingCart,
  Zap,
  Building2,
};

export function IndustriesGrid({ items }: { items: CardType[] }) {
  return (
    <section id="industries-grid" className="py-24 bg-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
            Sectors
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900">
            Specialized Capabilities
          </h2>
          <p className="text-slate-600">
            Select your industry to see tailored case studies and compliance
            frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || Building2;

            return (
              <Link
                key={item.id}
                to={item.href}
                className="group relative block h-full"
              >
                <div className="relative h-full rounded-2xl bg-slate-50 border border-slate-200 p-8 hover:bg-white hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Icon Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-emerald-600">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white border border-slate-200 text-slate-600 font-medium group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
