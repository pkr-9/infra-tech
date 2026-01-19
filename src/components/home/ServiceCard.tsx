import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: any = { Code2, Cpu, FileText };

export const ServiceCard = ({ item }: { item: any }) => {
  const Icon = iconMap[item.icon] || Code2;

  return (
    <Link
      to={item.href}
      className="group relative flex flex-col p-6 bg-card border border-border rounded-xl
                 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60
                 hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4
                      transition-transform duration-300 group-hover:scale-110"
      >
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {item.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 flex-grow">
        {item.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags?.map((tag: string, i: number) => (
          <span
            key={i}
            className="text-[10px] px-2 py-1 rounded-full bg-primary/5 text-primary font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center text-sm font-semibold text-primary mt-auto">
        Explore Service
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
