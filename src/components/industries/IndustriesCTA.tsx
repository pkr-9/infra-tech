import { IndustriesCTASection } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function IndustriesCTA({ cta }: { cta: IndustriesCTASection }) {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900" />

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          {cta.headline}
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          {cta.subhead}
        </p>
        <Button
          size="lg"
          className="h-14 px-10 text-lg bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-900/20"
          asChild
        >
          <Link to={cta.cta.href}>
            {cta.cta.label}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
