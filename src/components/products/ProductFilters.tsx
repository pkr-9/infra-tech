import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, X, Box, Layers, Filter } from "lucide-react";

interface ProductFiltersProps {
  category: string | null;
  setCategory: (val: string | null) => void;
  search: string;
  setSearch: (val: string) => void;
  // Future: Purchase options filter
}

export const ProductFilters = ({
  category,
  setCategory,
  search,
  setSearch,
}: ProductFiltersProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 mb-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Left: Category Toggles */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <Button
            variant={category === null ? "default" : "outline"}
            onClick={() => setCategory(null)}
            className="rounded-full gap-2"
          >
            <Filter className="w-4 h-4" /> All
          </Button>
          <Button
            variant={category === "Hardware" ? "default" : "outline"}
            onClick={() => setCategory("Hardware")}
            className="rounded-full gap-2"
          >
            <Box className="w-4 h-4" /> Hardware
          </Button>
          <Button
            variant={category === "Software" ? "default" : "outline"}
            onClick={() => setCategory("Software")}
            className="rounded-full gap-2"
          >
            <Layers className="w-4 h-4" /> Software
          </Button>
        </div>

        {/* Right: Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by SKU or name..."
            className="pl-9 bg-background"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <X
              className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground"
              onClick={() => setSearch("")}
            />
          )}
        </div>
      </div>
    </div>
  );
};
