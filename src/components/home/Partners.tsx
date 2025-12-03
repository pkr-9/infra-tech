import { cn } from "@/lib/utils";

// Mock Data for Partners (In a real app, these would be SVG paths)
const partners = [
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Terraform", category: "DevOps" },
  { name: "SAP", category: "Enterprise" },
  { name: "Stripe", category: "Fintech" },
  { name: "Datadog", category: "Observability" },
  { name: "NVIDIA", category: "AI Hardware" },
];

export const Partners = () => {
  return (
    <section className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by Industry Leaders & Integrated with Modern Stacks
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-80">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
            >
              <LogoPlaceholder text={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// A helper to generate professional text-based logos in place of missing SVGs
const LogoPlaceholder = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-lg group-hover:bg-secondary/30 transition-colors">
    {/* Abstract Icon Shape */}
    <div
      className={cn(
        "w-8 h-8 rounded bg-foreground/20 group-hover:bg-primary transition-colors flex items-center justify-center text-background font-bold text-xs",
        // Conditional styling for visual variety
        text === "AWS" && "rounded-full",
        text === "Azure" && "rotate-45 rounded-sm",
        text === "SAP" && "rounded-sm"
      )}
    >
      {text.substring(0, 1)}
    </div>

    {/* Logo Text */}
    <span className="text-xl font-heading font-bold text-foreground/60 group-hover:text-foreground transition-colors">
      {text}
    </span>
  </div>
);
