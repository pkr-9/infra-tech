import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquareText, ArrowRight } from "lucide-react";
import { SidebarData } from "@/lib/api";

export function SolutionSidebar({ sidebar }: { sidebar?: SidebarData }) {
  if (!sidebar) return null;

  return (
    <aside className="hidden lg:block w-80 shrink-0 sticky top-48 self-start transition-all duration-300">
      <div className="space-y-6">
        {/* Support Card */}
        <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 shadow-xl shadow-black/5">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
            <MessageSquareText className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold mb-3 pr-4">
            {sidebar.cta.headline}
          </h3>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Unsure which solution fits your architecture? Our engineers can help
            you scope your project.
          </p>

          <Button asChild className="w-full group">
            <Link to={sidebar.cta.href}>
              {sidebar.cta.label}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="px-4 py-3 rounded-lg bg-secondary/20 border border-border/50 text-xs text-muted-foreground text-center">
          <span className="font-semibold text-foreground">SOC2 Type II</span>{" "}
          Certified & Compliant
        </div>
      </div>
    </aside>
  );
}
