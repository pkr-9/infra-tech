import { SolutionsPageCTASection } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SolutionsCTA({ cta }: { cta: SolutionsPageCTASection }) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-slate-900 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">
            {cta.headline}
          </h2>

          <p className="text-xl text-slate-300 leading-relaxed">
            {cta.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
            >
              <a href={cta.cta.href}>
                {cta.cta.label}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <a href="/contact">Talk to an Expert</a>
            </Button>
          </div>

          <p className="text-sm text-slate-500 pt-8">
            No commitment required. Confidentiality agreements available upon
            request.
          </p>
        </div>
      </div>
    </section>
  );
}
