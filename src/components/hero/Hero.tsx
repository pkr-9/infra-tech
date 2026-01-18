import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useHomeData } from "@/hooks/use-content";
import { useEffect, useState } from "react";

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

  /* Auto-highlight process steps */
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  /* Loading Skeleton */
  if (isLoading) {
    return (
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Skeleton className="h-10 w-2/3 mx-auto" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
          <div className="flex justify-center gap-4 pt-4">
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-36" />
            <Skeleton className="h-12 w-36" />
          </div>
          <Skeleton className="h-28 w-full max-w-4xl mx-auto rounded-xl" />
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 mt-10">
      {/* ===== Visible Grid Background Pattern ===== */}
      <div
        className="absolute inset-0 -z-10 
        bg-[linear-gradient(to_right,rgba(120,120,120,0.08)_1px,transparent_1px),
        linear-gradient(to_bottom,rgba(120,120,120,0.08)_1px,transparent_1px)]
        bg-[size:28px_28px]"
      />

      {/* Soft radial fade so grid blends nicely */}
      <div
        className="absolute inset-0 -z-10 
        [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]
        bg-background"
      />

      {/* ===== Hero Content ===== */}
      <div className="container relative mx-auto px-4 flex flex-col items-center text-center">
        {/* Headline */}
        <div className="relative inline-block">
          <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl animate-in slide-in-from-top-5 duration-700">
            {data.headline}
          </h1>

          {/* Animated Gradient Underline */}
          <span
            className="absolute left-1/2 -bottom-3 w-2/3 h-[3px] -translate-x-1/2 rounded-full
            bg-gradient-to-r from-primary via-blue-500 to-primary
            bg-[length:200%_100%] animate-gradient"
          />
        </div>

        {/* Subheading */}
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed whitespace-pre-line animate-in slide-in-from-top-5 duration-700 delay-150">
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
                  ? "h-12 px-8 text-base border-primary/30 hover:bg-primary/5"
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
        <div className="mt-14 bg-card/90 backdrop-blur border border-border rounded-xl shadow-lg px-6 py-5 w-full max-w-5xl animate-in slide-in-from-top-5 duration-700 delay-500">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center mb-2 transition-all duration-500
                        ${
                          isActive
                            ? "bg-primary text-white shadow-md shadow-primary/40 scale-110"
                            : "bg-primary/10 text-primary"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wide transition-colors duration-500
                        ${isActive ? "text-primary" : "text-muted-foreground"}
                      `}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-10 h-[2px] bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 mx-3 rounded-full" />
                  )}
                </div>
              );
            })}
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

      {/* ===== Gradient Animation Keyframes ===== */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          .animate-gradient {
            animation: gradientMove 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
};
