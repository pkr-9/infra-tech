import { Cpu, Terminal, Code2, Database, Cloud, Layers } from "lucide-react";

// Helper to guess icon based on text (optional visual flair)
function getIconForTech(tech: string) {
  const t = tech.toLowerCase();
  if (t.includes("data") || t.includes("sql")) return Database;
  if (t.includes("cloud") || t.includes("aws")) return Cloud;
  if (t.includes("react") || t.includes("node")) return Code2;
  return Layers;
}

export function SolutionTechStack({ tech }: { tech?: string[] }) {
  if (!tech || tech.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header with Terminal Vibe */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Technology Stack
            </h2>
            <p className="text-sm text-slate-500 font-mono">
              // Core libraries & infrastructure
            </p>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tech.map((t, idx) => {
            const Icon = getIconForTech(t);
            return (
              <div
                key={t}
                className="group relative bg-white border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default"
              >
                {/* Active Indicator */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-green-500 transition-colors" />

                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="font-semibold text-sm text-slate-700 group-hover:text-slate-900 text-center">
                  {t}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
