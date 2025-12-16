import { useParams, Link } from "react-router-dom";
import { useCaseStudyBySlug } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, TrendingUp } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: study, isLoading, isError } = useCaseStudyBySlug(slug);

  if (isLoading) return <CaseDetailSkeleton />;
  if (isError || !study) return <div>Not Found</div>;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Standardized Breadcrumbs */}
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/case-studies">Case Studies</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{study.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl">
            <div className="flex gap-4 mb-6">
              <Badge
                variant="outline"
                className="border-primary text-primary px-3 py-1"
              >
                {study.industry}
              </Badge>
              <Badge variant="secondary">{study.client}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-accent pl-6">
              {study.summary}
            </p>
          </div>
        </div>

        {/* KPI Strip */}
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.kpis.map((kpi, idx) => (
                <div key={idx} className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                    {kpi.value}
                  </div>
                  <div className="text-sm uppercase tracking-widest font-medium opacity-80">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              {/* The Story Sections */}
              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">
                  The Challenge
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Legacy infrastructure was preventing {study.client} from
                  scaling effectively. Manual deployment processes resulted in
                  frequent downtime, and lack of observability made root-cause
                  analysis difficult.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">
                  The Solution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  InfraTech architected a bespoke solution leveraging our Core
                  Platform:
                </p>
                <div className="grid gap-4">
                  {[
                    "Automated CI/CD Pipelines with rollback capabilities",
                    "Edge Gateway deployment for local telemetry processing",
                    "Zero Trust network segmentation",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-card border rounded-lg"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading mb-4">
                  The Result
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Within 3 months of deployment, {study.client} achieved full
                  ROI. System stability improved dramatically, allowing their
                  engineering team to focus on product innovation rather than
                  firefighting.
                </p>
              </section>
            </div>

            {/* Sidebar Call to Action */}
            <div className="lg:col-span-4">
              <Card className="sticky top-32 p-8 bg-secondary/30 border-primary/20">
                <TrendingUp className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold font-heading mb-2">
                  Achieve similar results
                </h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation to see how we can help your
                  organization scale.
                </p>
                <Button className="w-full font-bold" asChild>
                  <Link to="/contact">Start a Conversation</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const CaseDetailSkeleton = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <main className="flex-grow pt-[110px] container mx-auto px-4 py-12">
      <Skeleton className="h-12 w-1/4 mb-8" />
      <Skeleton className="h-24 w-3/4 mb-12" />
      <Skeleton className="h-48 w-full rounded-xl" />
    </main>
  </div>
);

export default CaseStudyDetail;
