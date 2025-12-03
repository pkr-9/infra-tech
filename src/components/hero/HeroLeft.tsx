import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeData } from "@/lib/api";

interface HeroLeftProps {
  data: HomeData;
}

export const HeroLeft = ({ data }: HeroLeftProps) => {
  return (
    <div className="flex flex-col justify-center space-y-8 animate-in slide-in-from-left-5 duration-700">
      {/* Superhead */}
      <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary w-fit">
        <ShieldCheck className="h-4 w-4" />
        <span>Enterprise Cloud & Edge Solutions</span>
      </div>

      {/* Headlines */}
      <div className="space-y-4">
        <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl">
          Build <span className="gradient-text">Intelligent</span> <br />
          Infrastructure Faster.
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
          {data.subhead}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 h-12 px-8 text-base shadow-glow"
          asChild
        >
          <Link to={data.ctas[0].href}>
            {data.ctas[0].label} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5"
          asChild
        >
          <Link to={data.ctas[1].href}>{data.ctas[1].label}</Link>
        </Button>
      </div>

      {/* Quick Features / Trust Badges */}
      <div className="pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {data.kpis.map((kpi, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-foreground">
                {kpi.value}
              </span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Micro-features */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-accent" /> SOC2 Compliant
        </div>
        <div className="flex items-center gap-1">
          <Zap className="w-4 h-4 text-accent" /> 50ms Latency
        </div>
      </div>
    </div>
  );
};
