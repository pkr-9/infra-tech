import { useHomeData } from "@/hooks/use-content";
import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";
import { Skeleton } from "@/components/ui/skeleton";

export const Hero = () => {
  const { data, isLoading } = useHomeData();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-[80vh] grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-3/4" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
        <div className="hidden lg:block">
          <Skeleton className="h-[500px] w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-background pl-3 pt-10 pb-20 lg:pt-20">
      {/* Optional Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column - 7 Cols */}
          <div className="lg:col-span-7">
            <HeroLeft data={data} />
          </div>

          {/* Right Column - 5 Cols */}
          <div className="lg:col-span-5">
            <HeroRight data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};
