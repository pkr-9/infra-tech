import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Box } from "lucide-react";
import { useSolutionsData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";
import { ServiceCard } from "./ServiceCard";
import { InfraCard } from "./InfraCard";

const PAGE_SIZE = 3;

export const SolutionsShowcase = () => {
  const { data, isLoading } = useSolutionsData();

  const [softwareCount, setSoftwareCount] = useState(PAGE_SIZE);
  const [infraCount, setInfraCount] = useState(PAGE_SIZE);

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <GridSkeleton />
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {data.headline.split(" ")[0]}{" "}
              <span className="gradient-text">
                {data.headline.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">{data.subhead}</p>
          </div>

          <div className="hidden md:flex gap-3">
            <Button variant="ghost" asChild>
              <Link to={data.ctas.viewAll.href}>
                {data.ctas.viewAll.label}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button className="bg-primary text-white" asChild>
              <Link to={data.ctas.requestProposal.href}>
                {data.ctas.requestProposal.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="software">
          <TabsList className="grid w-full max-w-[420px] grid-cols-2 mb-10 bg-muted/50 p-1 rounded-md">
            <TabsTrigger value="software">
              <Layers className="w-4 h-4 mr-2" /> Software
            </TabsTrigger>
            <TabsTrigger value="infrastructure">
              <Box className="w-4 h-4 mr-2" /> Infrastructure
            </TabsTrigger>
          </TabsList>

          {/* Software */}
          <TabsContent value="software">
            <div className="grid md:grid-cols-3 gap-8">
              {data.software.slice(0, softwareCount).map((item) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>

            {softwareCount < data.software.length && (
              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  onClick={() => setSoftwareCount((p) => p + PAGE_SIZE)}
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Infrastructure */}
          <TabsContent value="infrastructure">
            <div className="grid md:grid-cols-3 gap-8">
              {data.infrastructure.slice(0, infraCount).map((item) => (
                <InfraCard key={item.id} item={item} />
              ))}
            </div>

            {infraCount < data.infrastructure.length && (
              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  onClick={() => setInfraCount((p) => p + PAGE_SIZE)}
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

/* Skeleton */
const GridSkeleton = () => (
  <div className="grid md:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="h-[320px] bg-card border rounded-xl p-6 space-y-4"
      >
        <Skeleton className="h-12 w-12 rounded-lg" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-20 w-full" />
      </div>
    ))}
  </div>
);
