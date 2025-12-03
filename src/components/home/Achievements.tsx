import { Users, Globe2, Server, Award } from "lucide-react";

const metrics = [
  { icon: Users, value: "200+", label: "Enterprise Clients" },
  { icon: Globe2, value: "15", label: "Countries Served" },
  { icon: Server, value: "50k+", label: "Edge Nodes Managed" },
  { icon: Award, value: "12", label: "Industry Awards" },
];

export const Achievements = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <div className="p-3 bg-white/10 rounded-full mb-2 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-white/10">
                <metric.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wide">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
