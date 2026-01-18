import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useHomeData } from "@/hooks/use-content";

import {
  FileText,
  PenTool,
  Code2,
  ShoppingCart,
  Rocket,
  Headset,
} from "lucide-react";

/* Process Steps */
const steps = [
  { icon: FileText, label: "Requirement" },
  { icon: PenTool, label: "Design" },
  { icon: Code2, label: "Development" },
  { icon: ShoppingCart, label: "Procurement" },
  { icon: Rocket, label: "Deployment" },
  { icon: Headset, label: "Support" },
];

export const Hero = () => {
  const { data, isLoading } = useHomeData();

  if (isLoading) {
    return (
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Skeleton className="h-10 w-2/3 mx-auto" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* ===== Background Video ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ===== Video Overlay (for readability) ===== */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />

      {/* ===== Grid Pattern Overlay ===== */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),
        linear-gradient(to_bottom,#80808010_1px,transparent_1px)]
        bg-[size:32px_32px]
        [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]
        pointer-events-none"
      />

      {/* ===== Hero Content ===== */}
      <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl animate-in slide-in-from-top-5 duration-700">
          {data.headline}
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed whitespace-pre-line animate-in slide-in-from-top-5 duration-700 delay-150">
          {data.subhead}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-top-5 duration-700 delay-300">
          {data.ctas.map((cta, idx) => (
            <Button
              key={idx}
              size="lg"
              variant={idx === 1 ? "outline" : "default"}
              className={
                idx === 1
                  ? "h-12 px-8 text-base border-primary/30 bg-background/60 hover:bg-primary/10"
                  : "bg-primary text-white hover:bg-primary/90 h-12 px-6 text-base shadow-glow"
              }
              asChild
            >
              <Link to={cta.href}>
                {cta.label}
                {idx === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Link>
            </Button>
          ))}
        </div>

        {/* ===== Process Flow ===== */}
        <div className="mt-14 bg-card/90 border border-border rounded-xl shadow-lg px-6 py-5 w-full max-w-5xl animate-in slide-in-from-top-5 duration-700 delay-500">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                    {step.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block w-10 h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 mx-3 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== KPI Strip ===== */}
        <div className="mt-10 pt-6 border-t border-border w-full max-w-4xl animate-in slide-in-from-top-5 duration-700 delay-700">
          <div className="grid grid-cols-3 gap-6 text-center">
            {data.kpis.map((kpi, idx) => (
              <div key={idx}>
                <div className="text-2xl font-bold text-foreground">
                  {kpi.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
