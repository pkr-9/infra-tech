import { useParams, Link, Navigate } from "react-router-dom";
import { useCaseStudyBySlug } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, CheckCircle2, TrendingUp, Target, Zap } from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: study, isLoading, isError } = useCaseStudyBySlug(slug);

  if (isLoading) return <CaseDetailSkeleton />;
  if (isError || !study) return <Navigate to="/case-studies" replace />;

  return (
    <div className="min-h-screen bg-white flex flex-col animate-in fade-in duration-500">
      <main className="flex-grow pt-[110px]">
        {/* --- Header Section --- */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-4 py-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Cases
            </Link>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge
                    variant="outline"
                    className="border-primary/30 text-primary bg-primary/5 px-3 py-1"
                  >
                    {study.industry}
                  </Badge>
                  {study.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                  {study.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                  <span className="uppercase tracking-wide">
                    Client: {study.client}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="uppercase tracking-wide">
                    Metric: {study.metric}
                  </span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="lg:col-span-5">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Content Body --- */}
        <div className="container mx-auto px-4 py-20 max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Left: The Narrative */}
            <div className="md:col-span-8 space-y-16">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    The Challenge
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {study.challenge}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    The Solution
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {study.solution}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    The Outcome
                  </h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-green-500 pl-6 bg-green-50/50 py-4 pr-4 rounded-r-lg">
                  {study.outcome}
                </p>
              </section>
            </div>

            {/* Right: Sidebar CTA */}
            <div className="md:col-span-4">
              <div className="sticky top-32 bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">
                  Face a similar challenge?
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Our architects can walk you through the technical details of
                  this implementation.
                </p>
                <Button
                  className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold"
                  asChild
                >
                  <Link to="/get-proposal">Get a Proposal</Link>
                </Button>
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const CaseDetailSkeleton = () => (
  <div className="min-h-screen bg-white pt-[110px] container mx-auto px-4">
    <Skeleton className="h-64 w-full mb-12 rounded-3xl" />
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-8 space-y-12">
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
      <div className="md:col-span-4">
        <Skeleton className="h-64 w-full rounded-xl" />
      </div>
    </div>
  </div>
);

export default CaseStudyDetail;
