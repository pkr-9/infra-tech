import { useState, useMemo } from "react";
import { useProducts } from "@/hooks/use-content";
import { ProductCard } from "@/components/home/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { Package } from "lucide-react";

const Products = () => {
  const { data: products, isLoading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter((product) => {
      // 1. Category Filter
      if (selectedCategory && product.category !== selectedCategory)
        return false;

      // 2. Search Filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchTitle = product.title.toLowerCase().includes(query);
        const matchSku = product.sku.toLowerCase().includes(query);
        const matchTag = product.tags?.some((t) =>
          t.toLowerCase().includes(query)
        );
        return matchTitle || matchSku || matchTag;
      }

      return true;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-grow pt-[110px]">
        {/* Header */}
        <div className="bg-secondary/30 border-b border-border py-16">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-primary shadow-sm mb-6">
              <Package className="h-4 w-4" />
              <span>Product Catalog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Rugged Hardware &{" "}
              <span className="gradient-text">Enterprise Software</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Browse our catalog of industrial gateways, edge AI appliances, and
              cloud-native software platforms.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <ProductFilters
            category={selectedCategory}
            setCategory={setSelectedCategory}
            search={searchQuery}
            setSearch={setSearchQuery}
          />

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-[400px] bg-card border rounded-xl p-6 space-y-4"
                >
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-24 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard key={product.sku} product={product} />
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <Package className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">No products found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search query.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>

    </div>
  );
};

export default Products;
