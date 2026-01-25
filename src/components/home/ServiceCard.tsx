import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, FileText, CheckCircle2 } from "lucide-react";

const iconMap: any = { Code2, Cpu, FileText };

export const ServiceCard = ({ item }: { item: any }) => {
  const Icon = iconMap[item.icon] || Code2;

  return (
    <Link
      to={item.href}
      className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl bg-card border border-border shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-primary hover:border-primary hover:-translate-y-1"
    >
      {/* LEFT: Image Section (Cols 1-5) */}
      <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full overflow-hidden">
        <div className="absolute inset-0 bg-muted">
          {/* <img
            src={`https://placehold.co/800x600/f1f5f9/94a3b8?text=${item.title.replace(/ /g, "+")}`}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          /> */}
          <img
            src={`/images/solutions/${item.slug}.jpeg`}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary shadow-sm">
          Software
        </div>
      </div>

      {/* RIGHT: Content Section (Cols 6-12) */}
      <div className="lg:col-span-7 p-8 flex flex-col justify-center relative">
        {/* Top Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-foreground transition-colors group-hover:text-white">
            {item.title}
          </h3>
        </div>

        {/* Summary */}
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed transition-colors group-hover:text-blue-50">
          {item.summary || item.description}
        </p>

        {/* Tags Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {item.tags?.slice(0, 4).map((tag: string, i: number) => (
            <div
              key={i}
              className="flex items-center text-sm text-foreground/80 transition-colors group-hover:text-white"
            >
              <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 transition-colors group-hover:text-white" />
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom Action Area */}
        <div className="mt-auto pt-6 border-t border-border group-hover:border-white/20 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary transition-colors group-hover:text-white">
            View Capabilities
          </span>
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-primary group-hover:translate-x-2">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
};
