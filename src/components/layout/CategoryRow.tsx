import { Link } from "react-router-dom";
import { NavItem } from "@/lib/api";
import { cn } from "@/lib/utils";

interface CategoryRowProps {
  categories: NavItem[];
}

export const CategoryRow = ({ categories }: CategoryRowProps) => {
  return (
    <div className="w-full border-b border-border bg-muted/30 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-10 gap-6 overflow-x-auto no-scrollbar mask-fade-right">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
            Sectors:
          </span>
          <nav className="flex items-center space-x-1">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className={cn(
                  "text-xs font-medium px-3 py-1 rounded-full transition-all whitespace-nowrap",
                  "text-muted-foreground hover:text-primary hover:bg-primary/10",
                  "focus:outline-none focus:ring-2 focus:ring-primary/20"
                )}
              >
                {cat.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
