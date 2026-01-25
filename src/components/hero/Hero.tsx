import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  PenTool,
  Code2,
  ShoppingCart,
  Rocket,
  Headset,
  Cloud,
  BrainCircuit,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useHomeData } from "@/hooks/use-content";

/* --- Slide 1: Process Steps Data --- */
const processSteps = [
  { icon: FileText, label: "Requirement" },
  { icon: PenTool, label: "Design" },
  { icon: Code2, label: "Development" },
  { icon: ShoppingCart, label: "Procurement" },
  { icon: Rocket, label: "Deployment" },
  { icon: Headset, label: "Support" },
];

/* --- Slide 2: Software Solutions Data --- */
const softwareFeatures = [
  {
    icon: Code2,
    title: "Custom Engineering",
    desc: "Web & mobile apps tailored to your business goals.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable cloud migration and CI/CD automation.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Analytics",
    desc: "Data-driven insights and intelligent automation.",
  },
];

/* --- Slide 3: Hardware Solutions Data --- */
const hardwareFeatures = [
  {
    icon: Server,
    title: "Infrastructure",
    desc: "Data center deployment and server management.",
  },
  {
    icon: Wifi,
    title: "Networking",
    desc: "High-speed enterprise connectivity solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Hardened firewalls and physical asset protection.",
  },
];

export const Hero = () => {
  const { data, isLoading } = useHomeData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Process Flow Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // 2. Carousel Auto-Slide (5 seconds)
  useEffect(() => {
    if (isPaused) return; // Stop sliding if hovered
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [isPaused]);

  // Navigation Handlers
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  }, []);

  if (isLoading) {
    return (
      <section className="relative overflow-hidden py-24 bg-muted/10">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Skeleton className="h-12 w-2/3 mx-auto" />
          <Skeleton className="h-6 w-3/4 mx-auto" />
          <Skeleton className="h-32 w-full max-w-4xl mx-auto rounded-xl mt-8" />
        </div>
      </section>
    );
  }

  const hero = data?.hero;

  const headline = hero?.headline || "End-to-End Technology Services";
  const subhead =
    hero?.subhead || "We design software and deploy infrastructure.";

  const ctas = [hero?.primaryCTA, hero?.secondaryCTA].filter(Boolean);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 mt-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container relative mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative overflow-hidden min-h-[600px] flex items-center">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* === SLIDE 1: EXISTING HERO CONTENT === */}
            <div className="w-full flex-shrink-0 px-4 flex flex-col items-center text-center justify-center pt-0">
              {/* Text Container (Kept Narrow for Readability) */}
              <div className="max-w-4xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-md">
                  {headline}
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {subhead}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  {ctas.map((cta: any, idx: number) => (
                    <Button
                      key={idx}
                      size="lg"
                      className={
                        idx === 1
                          ? "bg-transparent border border-white/30 hover:bg-white/10 text-white"
                          : "bg-white text-blue-900 hover:bg-blue-50 font-bold"
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
              </div>

              {/* Process Steps Container (Wider: max-w-6xl to prevent scrollbar) */}
              <div className="mt-12 w-full max-w-6xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-full overflow-x-auto no-scrollbar">
                  <div className="flex min-w-max md:min-w-0 items-center justify-center gap-4 md:gap-8">
                    {processSteps.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = index === activeStep;
                      return (
                        <div key={index} className="flex items-center">
                          <div className="flex flex-col items-center min-w-[80px]">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-500 ${
                                isActive
                                  ? "bg-white text-blue-600 scale-110 shadow-lg"
                                  : "bg-white/20 text-blue-100"
                              }`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <span
                              className={`text-xs font-semibold uppercase tracking-wide whitespace-nowrap ${isActive ? "text-white" : "text-blue-200"}`}
                            >
                              {step.label}
                            </span>
                          </div>
                          {index < processSteps.length - 1 && (
                            <div className="hidden md:block w-12 h-[2px] bg-white/20 mx-2 lg:mx-4" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* === SLIDE 2: SOFTWARE SOLUTIONS === */}
            <div className="w-full flex-shrink-0 px-4 flex flex-col items-center text-center justify-center pt-0">
              <div className="max-w-5xl mx-auto space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Intelligent Software Solutions
                </h2>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                  We build scalable, high-performance digital products tailored
                  to your business needs, from cloud migrations to custom AI
                  integration.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
                  {softwareFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors"
                    >
                      <feat.icon className="w-10 h-10 text-blue-300 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-blue-100 text-sm">{feat.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50"
                    asChild
                  >
                    <Link to="/solutions/software">
                      Explore Software Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* === SLIDE 3: HARDWARE SOLUTIONS === */}
            <div className="w-full flex-shrink-0 px-4 flex flex-col items-center text-center justify-center pt-0">
              <div className="max-w-5xl mx-auto space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Enterprise IT Infrastructure
                </h2>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                  Robust physical foundations for your digital operations. We
                  supply, deploy, and configure servers, networks, and data
                  centers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
                  {hardwareFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors"
                    >
                      <feat.icon className="w-10 h-10 text-emerald-300 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-blue-100 text-sm">{feat.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-blue-50"
                    asChild
                  >
                    <Link to="/solutions/hardware">View Hardware Catalog</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white hover:bg-white hover:text-blue-900 transition-all backdrop-blur-sm z-20"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white hover:bg-white hover:text-blue-900 transition-all backdrop-blur-sm z-20"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
