import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Cpu,
  Server,
  ShieldCheck,
  Code2,
  CircuitBoard,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Static definition of core capabilities based on Doc Section 9 & 11
const capabilities = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud-native architecture, Kubernetes orchestration, and CI/CD automation for scalable enterprise systems.",
    href: "/services/cloud-devops",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Cpu,
    title: "Edge AI & IoT",
    description:
      "Deploy real-time inference models and computer vision on rugged edge gateways and industrial sensors.",
    href: "/services/edge-ai",
    color: "text-amber-500", // Using the Amber Accent
    bg: "bg-amber-500/10",
  },
  {
    icon: Server,
    title: "Rugged Hardware",
    description:
      "Industrial-grade gateways, tablets, and servers designed to withstand harsh environments (IP67, MIL-STD).",
    href: "/products/hardware",
    color: "text-indigo-500", // Using the Primary Indigo
    bg: "bg-indigo-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "End-to-end security audits, VAPT, and SOC monitoring to ensure compliance with HIPAA, SOC2, and GDPR.",
    href: "/services/security",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export const CoreCapabilities = () => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-background px-3 py-1 text-sm font-medium text-primary shadow-sm">
            <CircuitBoard className="h-4 w-4" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
            Engineered for{" "}
            <span className="gradient-text">Mission-Critical</span> Scale
          </h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            We provide end-to-end infrastructure solutions, bridging the gap
            between high-performance hardware and intelligent software.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <Link
              key={idx}
              to={cap.href}
              className="group relative flex flex-col p-6 bg-card rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                  cap.bg
                )}
              >
                <cap.icon className={cn("w-6 h-6", cap.color)} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {cap.description}
              </p>

              {/* Footer Link */}
              <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Metric Strip (Optional Visual Context) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
          <MetricItem label="Uptime Guarantee" value="99.99%" />
          <MetricItem label="Global Support" value="24/7" />
          <MetricItem label="Certifications" value="ISO 27001" />
          <MetricItem label="Deployment Time" value="< 2 Weeks" />
        </div>
      </div>
    </section>
  );
};

const MetricItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <span className="text-2xl font-bold font-heading text-foreground">
      {value}
    </span>
    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">
      {label}
    </span>
  </div>
);
