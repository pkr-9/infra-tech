import { CheckCircle2, ArrowDown } from "lucide-react";

export const ServiceProcess = () => {
  const steps = [
    {
      title: "Discovery & Audit",
      description:
        "We analyze your current infrastructure, identify bottlenecks, and map out a migration strategy.",
    },
    {
      title: "Architecture Design",
      description:
        "Our architects design a cloud-native blueprint focused on security, scalability, and cost-efficiency.",
    },
    {
      title: "Implementation & Migration",
      description:
        "We execute the migration using automated pipelines with zero downtime strategies (Blue/Green).",
    },
    {
      title: "Optimization & Handoff",
      description:
        "We fine-tune performance, set up monitoring, and train your team on the new stack.",
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-heading font-bold">Our Process</h3>
      <div className="relative border-l-2 border-primary/20 ml-3 space-y-8 pb-4">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pl-8">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

            <h4 className="text-lg font-bold text-foreground mb-2">
              {step.title}
            </h4>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
