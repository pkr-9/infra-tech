import { InfrastructureSummaryBlock } from "@/lib/api";
import { cn } from "@/lib/utils";

export function InfrastructureSummary({
  blocks,
}: {
  blocks: InfrastructureSummaryBlock[];
}) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 space-y-32">
        {blocks.map((block, index) => (
          <div
            key={block.id}
            className={cn(
              "grid lg:grid-cols-2 gap-12 items-center",
              index % 2 === 1 ? "lg:flex-row-reverse" : "", // Logic handled by grid-col order below
            )}
          >
            {/* Text Side */}
            <div
              className={cn(
                "space-y-6",
                index % 2 === 1 ? "lg:order-2" : "lg:order-1",
              )}
            >
              <div className="w-12 h-1 bg-cyan-500 mb-6" />
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                {block.headline}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {block.content}
              </p>
            </div>

            {/* Image Side */}
            <div
              className={cn(
                "relative",
                index % 2 === 1 ? "lg:order-1" : "lg:order-2",
              )}
            >
              <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
                {/*  or 

[Image of Global Logistics Map]
 */}
                <img
                  src={block.image}
                  alt={block.headline}
                  className="w-full h-auto object-cover aspect-[4/3] bg-slate-200"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
