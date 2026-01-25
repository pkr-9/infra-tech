import { CheckCircle2, Truck, Server, Settings, Shield } from "lucide-react";

// Icon mapping
const Icons = [Truck, Server, Settings, Shield];

interface Capability {
  title: string;
  description: string;
}

export function InfrastructureCapabilities({
  items,
}: {
  items?: Capability[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            Core Capabilities
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Engineered for reliability. We handle the complexity of physical
            logistics and deployment so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = Icons[idx % Icons.length];
            return (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-xl border border-slate-200 hover:border-cyan-500/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
