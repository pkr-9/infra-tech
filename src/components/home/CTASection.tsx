// src/components/home/CTASection.tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, ClipboardList } from "lucide-react";
import { useSite } from "@/context/SiteContext";

export const CTASection = () => {
  const { globalCTA } = useSite();

  if (!globalCTA) return null;

  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white min-h-[90vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="container relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              {globalCTA.title.split(globalCTA.highlight)[0]}
              <span className="text-accent">{globalCTA.highlight}</span>
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-xl">
              {globalCTA.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg font-semibold"
                asChild
              >
                <Link to={globalCTA.primaryButton.link}>
                  {globalCTA.primaryButton.label}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg bg-transparent border-primary-foreground/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to={globalCTA.secondaryButton.link}>
                  <PhoneCall className="mr-2 w-5 h-5" />
                  {globalCTA.secondaryButton.label}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pl-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">What happens next?</h3>

              <ul className="space-y-4 text-primary-foreground/80 text-sm">
                {globalCTA.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ClipboardList className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-xs text-primary-foreground/50">
                {globalCTA.note}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
