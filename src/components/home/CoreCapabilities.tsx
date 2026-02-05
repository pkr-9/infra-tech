import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOfferingsData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

const imageFolder = "/images/core-capabilities";

export const CoreCapabilities: React.FC = () => {
  const { data, isLoading } = useOfferingsData();

  // Show skeleton while loading
  if (isLoading) {
    return (
      <section className="py-20 bg-transparent overflow-hidden">
        <div className="container mx-auto px-4">
          <Skeleton className="h-12 w-1/3 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-[320px] rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // If no data at all, don't render the section
  if (!data || !Array.isArray(data.offerings) || data.offerings.length === 0) {
    return null;
  }

  // featuredCapabilities may be missing — use safe default
  const featuredSlugs: string[] = Array.isArray(data.featuredCapabilities)
    ? data.featuredCapabilities
    : [];

  // If featured list present, resolve those offerings in order.
  // Otherwise, fallback to the first 4 offerings from the catalog.
  const featuredCaps =
    featuredSlugs.length > 0
      ? (featuredSlugs
          .map((slug) => data.offerings.find((o) => o.slug === slug))
          .filter(Boolean) as any[])
      : data.offerings.slice(0, 4);

  // final safety: if still empty, bail out
  if (!featuredCaps || featuredCaps.length === 0) return null;

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* DESKTOP SPLIT CONTAINER */}
        <div className="hidden md:block w-full mb-20">
          <div className="split-hit-area group mx-auto flex items-center justify-center">
            <div className="split-container relative rounded-2xl transition-all duration-700 ease-in-out bg-transparent">
              {/* Overlay Intro Panel */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl z-20 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 group-hover:opacity-0 group-hover:pointer-events-none group-hover:scale-90 shadow-2xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Built for End-to-End Delivery
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl">
                  We design software, deploy IT infrastructure, and manage
                  operations — giving enterprises a single accountable
                  technology partner.
                </p>
                <div className="mt-8 py-2 px-4 rounded-full border border-white/30 text-white text-sm font-medium animate-pulse">
                  Hover to Explore Services
                </div>
              </div>

              {/* Quadrants */}
              {featuredCaps.map((cap, index) => {
                // guard cap (should be safe due to filter)
                if (!cap) return null;

                let posClass = "";
                let hoverTransform = "";

                if (index === 0) {
                  posClass = "top-0 left-0";
                  hoverTransform =
                    "group-hover:-translate-x-3 group-hover:-translate-y-3";
                } else if (index === 1) {
                  posClass = "top-0 right-0";
                  hoverTransform =
                    "group-hover:translate-x-3 group-hover:-translate-y-3";
                } else if (index === 2) {
                  posClass = "bottom-0 left-0";
                  hoverTransform =
                    "group-hover:-translate-x-3 group-hover:translate-y-3";
                } else if (index === 3) {
                  posClass = "bottom-0 right-0";
                  hoverTransform =
                    "group-hover:translate-x-3 group-hover:translate-y-3";
                }

                return (
                  <div
                    key={cap.slug || cap.id || index}
                    className={cn(
                      "absolute w-1/2 h-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-10",
                      posClass,
                      hoverTransform,
                    )}
                  >
                    <ServiceCard cap={cap} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE GRID */}
        <div className="md:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {featuredCaps.map((cap) => (
            <div key={cap.slug || cap.id} className="h-[400px]">
              <ServiceCard cap={cap} />
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="w-full flex justify-center -mt-6">
          <Link
            to="/solutions"
            className="group relative flex items-center justify-between w-full md:w-[50vw] h-24 md:h-28 bg-primary rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primary transition-all duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

            <div className="relative z-10 flex flex-col justify-center px-8 md:px-10 h-full">
              <span className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                Explore All Services
              </span>
              <span className="text-sm md:text-base text-blue-100 font-medium mt-1">
                Software, Infrastructure & Managed Ops
              </span>
            </div>

            <div className="relative z-10 h-full aspect-square flex items-center justify-center bg-black/10 backdrop-blur-sm border-l border-white/10 group-hover:bg-white/20 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Layout sizing */}
      <style>{`
        .split-hit-area {
          width: 1100px;
          height: 700px;
        }
        .split-container {
          width: 1100px;
          height: 700px;
        }
      `}</style>
    </section>
  );
};

// ----------------------------------------------------------------

const ServiceCard = ({ cap }: { cap: any }) => {
  const imgSrc = cap?.slug
    ? `${imageFolder}/${cap.slug}.jpeg`
    : `${imageFolder}/placeholder.png`;

  return (
    <Link
      to={cap.href || "/solutions"}
      className="group/card relative w-full h-full bg-transparent rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
    >
      <div className="relative flex-[8] overflow-hidden bg-gray-100">
        <img
          src={imgSrc}
          alt={cap.title || ""}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

        <div className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all duration-300 group-hover/card:bg-blue-600 group-hover/card:border-blue-600 group-hover/card:scale-110">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="relative flex-[2] p-5 flex flex-col justify-center items-center bg-white">
        <h3 className="text-base text-center font-bold text-gray-900 mb-2">
          {cap.title}
        </h3>
        <p className="text-xs text-center text-gray-500 line-clamp-3">
          {cap.summary}
        </p>
      </div>
    </Link>
  );
};
