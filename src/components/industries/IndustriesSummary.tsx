import { IndustriesSummaryBlock } from "@/lib/api";
import { cn } from "@/lib/utils";
import { Shield, Settings } from "lucide-react";

export function IndustriesSummary({
  blocks,
}: {
  blocks: IndustriesSummaryBlock[];
}) {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 space-y-32">
        {blocks.map((block, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={block.id}
              className="group relative grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Text Side */}
              <div
                className={cn(
                  "space-y-8",
                  isEven ? "lg:order-1" : "lg:order-2",
                )}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 mb-2">
                  {idx === 0 ? (
                    <Shield className="w-6 h-6" />
                  ) : (
                    <Settings className="w-6 h-6" />
                  )}
                </div>

                <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                  {block.headline}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-emerald-500 pl-6">
                  {block.content}
                </p>
              </div>

              {/* Image Side */}
              <div
                className={cn("relative", isEven ? "lg:order-2" : "lg:order-1")}
              >
                {/* Decorative background blob */}
                <div className="absolute inset-0 bg-emerald-500/10 rounded-[2rem] transform rotate-3 scale-105 -z-10" />

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
                  <div className="absolute inset-0 border-[6px] border-white/20 z-10 rounded-2xl pointer-events-none" />
                  <img
                    src={block.image}
                    alt={block.headline}
                    className="w-full h-auto object-cover aspect-[16/10] bg-slate-200 transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
