import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Server, Layers, Settings2 } from "lucide-react";

const iconMap: any = { Cloud, Server, Layers };

export const InfraCard = ({ item }: { item: any }) => {
  const Icon = iconMap[item.icon] || Server;

  return (
    <Link
      to={item.href}
      className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl bg-slate-50 dark:bg-card border border-slate-200 dark:border-border shadow-sm transition-all duration-500 hover:shadow-2xl hover:bg-indigo-600 hover:border-indigo-600 hover:-translate-y-1"
    >
      {/* LEFT: Image Section */}
      <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          {/* <img
            src={`https://placehold.co/800x600/1e293b/94a3b8?text=${item.title.replace(/ /g, "+")}`}
            alt={item.title}
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
          /> */}
          <img
            src={`/images/solutions/${item.slug}.jpeg`}
            alt={item.title}
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay Badge */}
        <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-indigo-600/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white shadow-sm transition-colors group-hover:bg-white group-hover:text-indigo-600">
          Infrastructure
        </div>
      </div>

      {/* RIGHT: Content Section */}
      <div className="lg:col-span-7 p-8 flex flex-col justify-center relative bg-transparent">
        {/* Tech Pattern BG - Fades on hover */}
        <div
          className="absolute inset-0 opacity-[0.03] group-hover:opacity-0 transition-opacity pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center transition-colors duration-300 group-hover:bg-white group-hover:border-transparent group-hover:text-indigo-600">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-foreground transition-colors group-hover:text-white">
              {item.title}
            </h3>
          </div>

          {/* Summary */}
          <p className="text-lg text-slate-600 dark:text-muted-foreground mb-8 leading-relaxed transition-colors group-hover:text-indigo-100">
            {item.summary}
          </p>

          {/* Tags Grid - Styled like 'Specs' */}
          <div className="flex flex-wrap gap-2 mb-8">
            {item.tags?.map((tag: string, i: number) => (
              <div
                key={i}
                className="flex items-center px-3 py-1.5 rounded-md bg-slate-100 dark:bg-muted border border-slate-200 dark:border-border text-xs font-mono font-medium text-slate-700 dark:text-foreground transition-all group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white"
              >
                <Settings2 className="w-3 h-3 mr-2 text-indigo-500 transition-colors group-hover:text-white" />
                {tag}
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-border transition-colors group-hover:border-white/20 flex items-center justify-between">
            <span className="text-sm font-semibold text-indigo-600 transition-colors group-hover:text-white">
              View Specifications
            </span>
            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-indigo-600 group-hover:translate-x-2">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
