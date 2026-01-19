import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Server, Layers } from "lucide-react";

const iconMap: any = { Cloud, Server, Layers };

export const InfraCard = ({ item }: { item: any }) => {
  const Icon = iconMap[item.icon] || Server;

  return (
    <Link
      to={item.href}
      className="group relative flex flex-col p-6 bg-card border border-border rounded-xl
                 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/60
                 hover:shadow-lg hover:shadow-indigo-500/10"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4
                      transition-transform duration-300 group-hover:scale-110"
      >
        <Icon className="w-6 h-6 text-indigo-500" />
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">
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
            className="text-[10px] px-2 py-1 rounded-full bg-indigo-500/5 text-indigo-500 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center text-sm font-semibold text-indigo-500 mt-auto">
        Explore Infrastructure
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
