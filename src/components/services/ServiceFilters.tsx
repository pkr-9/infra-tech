import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface ServiceFiltersProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  // Future extension: Industry filter
}

export const ServiceFilters = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: ServiceFiltersProps) => {
  return (
    <div className="space-y-6 mb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => onSelectCategory(null)}
              className="rounded-full"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => onSelectCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Active Filter Indicator (Mobile/Desktop) */}
        {selectedCategory && (
          <div className="flex items-center gap-2 animate-in fade-in">
            <span className="text-sm text-muted-foreground">Active:</span>
            <Badge
              variant="secondary"
              className="px-3 py-1 text-sm flex items-center gap-2"
            >
              {selectedCategory}
              <X
                className="w-3 h-3 cursor-pointer hover:text-destructive"
                onClick={() => onSelectCategory(null)}
              />
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};
