import { CheckCircle2, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePricingData } from "@/hooks/use-content";

export const PricingSnapshot = () => {
  const { data, isLoading } = usePricingData();

  if (isLoading) {
    return (
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-56 rounded-xl" />
          ))}
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-24 bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Wallet className="h-4 w-4" />
            <span>{data.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            {data.headline}
          </h2>

          <p className="max-w-[720px] text-lg text-muted-foreground">
            {data.subhead}
          </p>
        </div>

        {/* Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.models.map((model, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6
                         transition-all duration-300 hover:border-primary/50
                         hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                {model.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-6">
                {model.description}
              </p>

              <ul className="space-y-3 mb-6">
                {model.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-[2px]" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button className="bg-primary text-white hover:bg-primary/90" asChild>
            <a href={data.cta.href}>{data.cta.label}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
