import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Layers, Box } from "lucide-react";
import { useOfferingsData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";
import { ServiceCard } from "./ServiceCard";
import { InfraCard } from "./InfraCard";

const PAGE_SIZE = 4;

export const SolutionsShowcase = () => {
  const { data, isLoading } = useOfferingsData();

  const [softwareCount, setSoftwareCount] = useState(PAGE_SIZE);
  const [infraCount, setInfraCount] = useState(PAGE_SIZE);

  if (isLoading) return <LoadingSkeleton />;
  if (!data) return null;

  // Filter offerings by category
  const software = data.offerings.filter((o) =>
    ["software", "ai-data"].includes(o.category),
  );

  const infrastructure = data.offerings.filter(
    (o) => o.category === "infrastructure",
  );

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            Our End-to-End Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Software engineering and infrastructure fulfillment under one
            accountable engagement.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="software" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="h-14 p-1 bg-muted/50 rounded-full border border-border">
              <TabsTrigger
                value="software"
                className="h-full rounded-full px-8 text-base data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
              >
                <Layers className="w-4 h-4 mr-2" />
                Software Solutions
              </TabsTrigger>

              <TabsTrigger
                value="infrastructure"
                className="h-full rounded-full px-8 text-base data-[state=active]:bg-background data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm transition-all"
              >
                <Box className="w-4 h-4 mr-2" />
                Infrastructure Fulfillment
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Software Tab */}
          <TabsContent value="software" className="space-y-8">
            {software.slice(0, softwareCount).map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}

            {softwareCount < software.length && (
              <div className="pt-8 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSoftwareCount((p) => p + PAGE_SIZE)}
                >
                  Load More Software
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Infrastructure Tab */}
          <TabsContent value="infrastructure" className="space-y-8">
            {infrastructure.slice(0, infraCount).map((item) => (
              <InfraCard key={item.id} item={item} />
            ))}

            {infraCount < infrastructure.length && (
              <div className="pt-8 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setInfraCount((p) => p + PAGE_SIZE)}
                >
                  Load More Infrastructure
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const LoadingSkeleton = () => (
  <div className="container mx-auto px-4 py-24 space-y-8">
    <Skeleton className="h-12 w-48 mx-auto" />
    <Skeleton className="h-96 w-full rounded-2xl" />
    <Skeleton className="h-96 w-full rounded-2xl" />
  </div>
);
