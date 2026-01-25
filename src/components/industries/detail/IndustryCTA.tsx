import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function IndustryCTA() {
  return (
    <section className="py-32 bg-emerald-950 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-emerald-950 to-emerald-950" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">
          Ready to Modernize?
        </h2>
        <p className="text-xl text-emerald-100/80 mb-10 leading-relaxed">
          Speak with an architect who understands your industry's specific
          regulations and technical challenges.
        </p>
        <Button
          size="lg"
          className="h-14 px-10 text-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-full shadow-lg shadow-emerald-900/50"
          asChild
        >
          <Link to="/get-proposal">
            Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
