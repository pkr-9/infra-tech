import { useParams, Link } from "react-router-dom";
import { useServiceBySlug } from "@/hooks/use-content";
import { ServiceSidebar } from "@/components/services/ServiceSidebar";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Home, CheckCircle2, Layers } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: service, isLoading, isError } = useServiceBySlug(slug);

  if (isLoading) return <ServiceDetailSkeleton />;

  if (isError || !service) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-grow pt-[110px] container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-grow pt-[110px]">
        {/* Breadcrumbs */}
        <div className="bg-secondary/20 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-foreground font-medium">
                {service.title}
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Hero Header */}
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  {service.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {service.longDescription || service.shortDescription}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits?.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              {service.techStack && (
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm"
                      >
                        <Layers className="w-3 h-3 mr-2 text-muted-foreground" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <ServiceProcess />
            </div>

            {/* Right Column: Sidebar (4 cols) */}
            <div className="lg:col-span-4">
              <ServiceSidebar service={service} />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

const ServiceDetailSkeleton = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <main className="flex-grow pt-[110px] container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
        <div className="lg:col-span-4">
          <Skeleton className="h-[400px] w-full rounded-xl" />
        </div>
      </div>
    </main>
  </div>
);

export default ServiceDetail;
