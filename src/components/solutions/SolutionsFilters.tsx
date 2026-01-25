import { useState } from "react";
import { SolutionsPageFilters } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function SolutionsFilters({
  filters,
}: {
  filters: SolutionsPageFilters;
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  return (
    <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border/60 mb-12 shadow-sm">
      <div className="container mx-auto px-4 py-4 space-y-4">
        {/* Top Row: Primary Categories (Tabs style) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex p-1 bg-muted/50 rounded-lg overflow-x-auto max-w-full no-scrollbar">
            {filters.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap
                  ${
                    activeCategory === cat.id
                      ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search solutions..."
              className="pl-9 h-10 bg-muted/30 focus:bg-background transition-colors"
            />
          </div>
        </div>

        {/* Bottom Row: Granular Filters (Pill Cloud) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 pb-1">
          <div className="flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">
            <Filter className="w-3 h-3 mr-1" /> Filters:
          </div>

          {filters.industries.slice(0, 5).map((industry) => (
            <Badge
              key={industry}
              variant={activeFilters.includes(industry) ? "default" : "outline"}
              className="cursor-pointer hover:bg-orange-400 transition-colors"
              onClick={() => toggleFilter(industry)}
            >
              {industry}
              {activeFilters.includes(industry) && (
                <X className="w-3 h-3 ml-1" />
              )}
            </Badge>
          ))}

          <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
            + View All
          </Button>

          {activeFilters.length > 0 && (
            <Button
              variant="link"
              size="sm"
              onClick={() => setActiveFilters([])}
              className="text-xs text-muted-foreground ml-auto"
            >
              Clear all
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
