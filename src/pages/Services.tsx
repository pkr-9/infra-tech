import { useState, useMemo } from "react";
import { useServices } from "@/hooks/use-content";
import { ServiceCard } from "@/components/home/ServiceCard";
import { ServiceFilters } from "@/components/services/ServiceFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { Layers } from "lucide-react";

const Services = () => {
  const { data: services, isLoading } = useServices();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from data
  const categories = useMemo(() => {
    if (!services) return [];
    const cats = new Set(services.map((s) => s.category));
    return Array.from(cats);
  }, [services]);

  // Filter logic
  const filteredServices = useMemo(() => {
    if (!services) return [];
    if (!selectedCategory) return services;
    return services.filter((s) => s.category === selectedCategory);
  }, [services, selectedCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-grow pt-[110px]">
        {/* Page Header */}
        <div className="bg-secondary/30 border-b border-border py-16">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-primary shadow-sm mb-6">
              <Layers className="h-4 w-4" />
              <span>Services & Capabilities</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Engineering the <span className="gradient-text">Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              From embedded firmware to cloud-native architectures, we deliver
              end-to-end engineering services that scale with your enterprise.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          {/* Filters */}
          <ServiceFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-[350px] bg-card border rounded-xl p-6 space-y-4"
                >
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-24 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-muted-foreground">
                    No services found for this category.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

    </div>
  );
};

export default Services;
