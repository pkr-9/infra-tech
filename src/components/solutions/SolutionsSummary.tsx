import { SolutionsPageSummaryBlock } from "@/lib/api";
import { cn } from "@/lib/utils";
import { CheckCircle2, ArrowRight, Zap, Shield, BarChart } from "lucide-react";

export function SolutionsSummary({
  blocks,
}: {
  blocks: SolutionsPageSummaryBlock[];
}) {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Global Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 space-y-32">
        {blocks.map((block, idx) => {
          const isEven = idx % 2 === 0;
          const stepNumber = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={block.id}
              className="group relative grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* --- Text Content Side --- */}
              <div
                className={cn(
                  "lg:col-span-5 relative z-10",
                  isEven ? "lg:order-1" : "lg:order-2 lg:col-start-8",
                )}
              >
                {/* Giant Background Number */}
                <span className="absolute -top-20 -left-6 text-[10rem] font-bold text-foreground/5 select-none -z-10 font-heading leading-none">
                  {stepNumber}
                </span>

                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                      <Zap className="w-3 h-3" />
                      <span>Strategic Value</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                      {block.headline}
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
                    {block.content}
                  </p>

                  {/* Enhanced Feature Grid */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    {[
                      "Single SLA for Ops & Dev",
                      "Transparent Pricing",
                      "Audit-Ready Docs",
                      "24/7 Expert Support",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-transparent hover:border-primary/20 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- Visual Side (Tech Frame) --- */}
              <div
                className={cn(
                  "lg:col-span-7 relative",
                  isEven ? "lg:order-2 lg:col-start-7" : "lg:order-1",
                )}
              >
                {/* Decorative Elements around image */}
                <div className="absolute -inset-4 border border-dashed border-border/60 rounded-3xl opacity-50 z-0" />
                <div className="absolute top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />

                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl group-hover:shadow-primary/10 transition-shadow duration-500">
                  {/* Glass Overlay with Tech Details */}
                  <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-8 h-8 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-3 py-1 rounded-md border border-white/20 bg-black/20 backdrop-blur-md text-xs font-mono text-white/80">
                        SYS.STATUS: ACTIVE
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={block.image}
                      alt={block.headline}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient Overlay for text readability contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>

                {/* Corner Accents (Technical look) */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
