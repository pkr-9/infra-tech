import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function SolutionContactCTA() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 tracking-tight">
          Ready to Engineer Your Vision?
        </h2>

        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
          Stop compromising between speed and stability. Let's build a solution
          that scales with your ambition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            asChild
            size="lg"
            className="h-16 px-10 text-lg rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
          >
            <Link to="/get-proposal">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-16 px-10 text-lg rounded-full border-slate-700 text-white hover:bg-white/5 hover:text-white bg-transparent"
          >
            <Link to="/contact">
              <MessageSquare className="mr-2 w-5 h-5" />
              Talk to an Architect
            </Link>
          </Button>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Typical response time: &lt; 2 hours for enterprise inquiries.
        </p>
      </div>
    </section>
  );
}
