import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  LucideIcon,
  Cloud,
  Cpu,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { Service } from "@/lib/api";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Map string icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Cloud: Cloud,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Code: Code2,
};

export const ServiceCard = ({ service }: { service: Service }) => {
  const Icon =
    service.icon && iconMap[service.icon] ? iconMap[service.icon] : Code2;

  return (
    <div className="group flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300">
      <div className="p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          {/* Optional: Add a "Popular" badge if needed */}
        </div>

        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 flex-grow">
          {service.shortDescription}
        </p>

        {/* Feature List */}
        <ul className="space-y-2 mb-6">
          {service.features?.slice(0, 3).map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-foreground/80"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / CTA */}
      <div className="p-6 pt-0 mt-auto">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Learn more{" "}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
