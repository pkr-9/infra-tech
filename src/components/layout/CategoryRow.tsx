import { useState } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "@/lib/api";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface CategoryRowProps {
  categories: NavItem[];
}

export const CategoryRow = ({ categories }: CategoryRowProps) => {
  const MAX_VISIBLE = 6;
  const visible = categories.slice(0, MAX_VISIBLE);
  const hidden = categories.slice(MAX_VISIBLE);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="w-full border-b border-border bg-muted/30 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-10 gap-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
            Industries:
          </span>

          <nav className="flex items-center gap-2 flex-1">
            {visible.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className={cn(
                  "text-xs font-medium px-3 py-1 rounded-full transition-all whitespace-nowrap",
                  "text-muted-foreground hover:text-primary hover:bg-primary/10",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20",
                )}
              >
                {cat.label}
              </Link>
            ))}

            {/* More dropdown trigger */}
            {hidden.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setMoreOpen((s) => !s)}
                  className="text-xs font-medium px-3 py-1 rounded-full transition-all whitespace-nowrap text-muted-foreground hover:text-primary hover:bg-primary/10 flex items-center gap-2"
                  aria-expanded={moreOpen}
                >
                  More <ChevronDown className="w-3 h-3" />
                </button>

                {moreOpen && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-card border border-border rounded-md shadow-lg p-3 z-40"
                    onMouseLeave={() => setMoreOpen(false)}
                  >
                    <div className="grid gap-2">
                      {hidden.map((cat) => (
                        <Link
                          key={cat.href}
                          to={cat.href}
                          onClick={() => setMoreOpen(false)}
                          className="text-sm px-2 py-1 rounded hover:bg-muted/50"
                        >
                          {cat.label}
                        </Link>
                      ))}
                      <div className="pt-2 border-t border-border mt-2">
                        <Link
                          to="/solutions"
                          className="text-sm font-semibold hover:text-primary"
                        >
                          View all solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Optionally: small inline search or CTA */}
          <div className="flex items-center gap-2">
            <Link
              to="/get-proposal"
              className="text-xs font-semibold text-primary hover:underline"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
