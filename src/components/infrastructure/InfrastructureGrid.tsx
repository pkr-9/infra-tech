import { InfrastructureCard as CardType } from "@/lib/api";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  RadioTower,
  Wifi,
  Cloud,
  ShieldCheck,
  Laptop,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Server,
  RadioTower,
  Wifi,
  Cloud,
  ShieldCheck,
  Laptop,
};

export function InfrastructureGrid({ items }: { items: CardType[] }) {
  return (
    <section id="infrastructure-grid" className="py-24 bg-slate-100/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Infrastructure Catalog
          </h2>
          <p className="text-slate-600">
            From the data center core to the industrial edge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = iconMap[item.icon] || Server;

            return (
              <Link
                key={item.id}
                to={item.href}
                className="group relative block h-full"
              >
                <div className="relative h-full rounded-[1.5rem] bg-white border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {item.summary}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-slate-100 text-slate-600 hover:bg-slate-200 font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
