import { HomeData } from "@/lib/api";
import {
  Cloud,
  Cpu,
  ShieldCheck,
  Wifi,
  Activity,
  Database,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroRightProps {
  data: HomeData;
}

export const HeroRight = ({ data }: HeroRightProps) => {
  return (
    <div className="relative hidden lg:flex items-center justify-center h-full min-h-[600px] w-full select-none">
      {/* 1. Background Grid & Glow */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30 blur-3xl rounded-full scale-75" />

      {/* 2. SVG Connectivity Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient
            id="line-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="hsl(var(--primary))"
              stopOpacity="0.1"
            />
            <stop
              offset="50%"
              stopColor="hsl(var(--primary))"
              stopOpacity="0.5"
            />
            <stop
              offset="100%"
              stopColor="hsl(var(--primary))"
              stopOpacity="0.1"
            />
          </linearGradient>
        </defs>

        {/* Connecting Lines */}
        <line
          x1="50%"
          y1="50%"
          x2="25%"
          y2="25%"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse"
        />
        <line
          x1="50%"
          y1="50%"
          x2="75%"
          y2="25%"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse delay-75"
        />
        <line
          x1="50%"
          y1="50%"
          x2="25%"
          y2="75%"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse delay-150"
        />
        <line
          x1="50%"
          y1="50%"
          x2="75%"
          y2="75%"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-pulse delay-300"
        />
      </svg>

      {/* 3. Central Core Node (InfraTech Platform) */}
      {/* Removed 'animate-float' from this container */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-background border-4 border-primary/20 shadow-glow">
          {/* Outer Ring: Spins in REVERSE for a gyro effect */}
          <div className="absolute inset-0 rounded-full border border-primary/40 border-t-transparent animate-[spin_15s_linear_infinite_reverse]" />

          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground shadow-inner">
            {/* INNER GLOBE: Spins 360 degrees continuously (12s duration for smoothness) */}
            <Globe className="w-10 h-10 animate-[spin_12s_linear_infinite]" />
          </div>

          {/* Status Indicator (Static) */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-background rounded-full flex items-center justify-center border border-border z-10">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="mt-4 text-center bg-card/80 backdrop-blur px-4 py-1 rounded-full border border-primary/20 shadow-sm">
          <span className="text-sm font-bold tracking-wider text-foreground">
            CORE PLATFORM
          </span>
        </div>
      </div>

      {/* 4. Satellite Nodes (Sectors) */}

      {/* Node 1: Cloud & DevOps (Top Left) */}
      <div
        className="absolute top-[15%] left-[10%] z-10 animate-slide-up"
        style={{ animationDelay: "0.1s" }}
      >
        <FeatureNode
          icon={<Cloud className="w-6 h-6 text-blue-500" />}
          label="Cloud Native"
          sub="Kubernetes / Hybrid"
          delay="0s"
        />
      </div>

      {/* Node 2: Data & Storage (Top Right) */}
      <div
        className="absolute top-[15%] right-[10%] z-10 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        <FeatureNode
          icon={<Database className="w-6 h-6 text-purple-500" />}
          label="Data Pipelines"
          sub="Real-time Analytics"
          delay="1s"
        />
      </div>

      {/* Node 3: Security (Bottom Left) */}
      <div
        className="absolute bottom-[15%] left-[10%] z-10 animate-slide-up"
        style={{ animationDelay: "0.3s" }}
      >
        <FeatureNode
          icon={<ShieldCheck className="w-6 h-6 text-emerald-500" />}
          label="Zero Trust"
          sub="SOC2 & HIPAA"
          delay="2s"
        />
      </div>

      {/* Node 4: Edge AI (Bottom Right) */}
      <div
        className="absolute bottom-[15%] right-[10%] z-10 animate-slide-up"
        style={{ animationDelay: "0.4s" }}
      >
        <FeatureNode
          icon={<Cpu className="w-6 h-6 text-accent" />}
          label="Edge AI"
          sub="Embedded Systems"
          isAccent
          delay="3s"
        />
      </div>

      {/* 5. Floating Metrics (Small Details) */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden xl:block">
        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg border border-border">
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-muted-foreground">
            Latency: 24ms
          </span>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden xl:block">
        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg border border-border">
          <Wifi className="w-4 h-4 text-accent" />
          <span className="text-xs font-mono text-muted-foreground">
            Uptime: 99.99%
          </span>
        </div>
      </div>
    </div>
  );
};

const FeatureNode = ({
  icon,
  label,
  sub,
  isAccent = false,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  isAccent?: boolean;
  delay: string;
}) => (
  <div
    className={cn(
      "flex flex-row items-center gap-3 p-3 rounded-xl bg-card border shadow-lg transition-all hover:scale-105 hover:shadow-xl cursor-default w-48",
      isAccent ? "border-accent/50 shadow-accent/10" : "border-border"
    )}
  >
    <div
      className={cn(
        "flex items-center justify-center w-12 h-12 rounded-lg bg-background border",
        isAccent ? "border-accent/30 bg-accent/5" : "border-border"
      )}
    >
      {icon}
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold text-foreground leading-none mb-1">
        {label}
      </span>
      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
        {sub}
      </span>
    </div>
  </div>
);
