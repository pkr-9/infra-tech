import { InfrastructureCTASection } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function InfrastructureCTA({ cta }: { cta: InfrastructureCTASection }) {
  return (
    <section className="py-32 bg-slate-900 text-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-slate-900 to-slate-900" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          {cta.headline}
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          {cta.subhead}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900"
            asChild
          >
            <Link to={cta.cta.href}>
              {cta.cta.label}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
