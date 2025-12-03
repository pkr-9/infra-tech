import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Box } from "lucide-react";
import { useServices, useProducts } from "@/hooks/use-content";
import { ServiceCard } from "./ServiceCard";
import { ProductCard } from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";

export const SolutionsShowcase = () => {
  const { data: services, isLoading: isServicesLoading } = useServices();
  const { data: products, isLoading: isProductsLoading } = useProducts();

  const featuredServices = services?.slice(0, 3) || [];
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Integrated <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need cloud-native software architecture or rugged
              industrial hardware, our converged platform delivers results.
            </p>
          </div>

          <div className="hidden md:block">
            <Button variant="ghost" asChild>
              <Link to="/solutions">
                View All Solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 mb-10 mx-auto md:mx-0 bg-muted/50 p-1">
            <TabsTrigger
              value="software"
              className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              <Layers className="w-4 h-4 mr-2" /> Software
            </TabsTrigger>
            <TabsTrigger
              value="hardware"
              className="data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm"
            >
              <Box className="w-4 h-4 mr-2" /> Hardware
            </TabsTrigger>
          </TabsList>

          <TabsContent value="software" className="mt-0">
            {isServicesLoading ? (
              <GridSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            )}
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="hardware" className="mt-0">
            {isProductsLoading ? (
              <GridSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.sku} product={product} />
                ))}
              </div>
            )}
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/products">View All Hardware</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const GridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="h-[350px] w-full bg-card border rounded-xl p-6 space-y-4"
      >
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-8 w-1/2 mt-auto" />
      </div>
    ))}
  </div>
);
