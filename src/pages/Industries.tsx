import { useIndustries } from "@/hooks/use-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Stethoscope,
  Factory,
  Building2,
  Globe,
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, any> = {
  Landmark,
  Stethoscope,
  Factory,
  Building2,
};

const Industries = () => {
  const { data: industries, isLoading } = useIndustries();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Header */}
        <div className="bg-secondary/30 border-b border-border py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-primary shadow-sm mb-6">
              <Globe className="h-4 w-4" />
              <span>Vertical Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Solutions for Every <span className="gradient-text">Sector</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We understand the unique regulatory and technical challenges of
              your industry. Our platforms are built to ensure compliance and
              performance from day one.
            </p>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="container mx-auto px-4 py-16">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-64 w-full rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {industries?.map((ind) => {
                const Icon = iconMap[ind.icon] || Globe;
                return (
                  <Card
                    key={ind.id}
                    className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl font-bold font-heading">
                        {ind.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-6">
                      <p className="text-muted-foreground text-lg">
                        {ind.description}
                      </p>

                      {/* Stats / Compliance Tags */}
                      <div className="flex flex-wrap gap-2">
                        {ind.stats.map((stat, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="px-3 py-1 bg-secondary/50 border-border"
                          >
                            {stat}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border flex justify-end">
                        <Button
                          variant="ghost"
                          className="hover:bg-primary/10 hover:text-primary"
                          asChild
                        >
                          <Link to="/contact">
                            Discuss Requirements{" "}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Industries;
