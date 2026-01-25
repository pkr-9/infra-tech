import { Server, Box, Radio } from "lucide-react";

export function InfrastructureTechStack({
  technologies,
}: {
  technologies?: string[];
}) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="py-20 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-slate-100 rounded-lg">
            <Server className="w-6 h-6 text-slate-700" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Supported Hardware & OEMs
            </h3>
            <p className="text-sm text-slate-500">
              We are vendor-agnostic and procure directly from major
              manufacturers.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium rounded-md bg-slate-50 text-slate-700 border border-slate-200 hover:border-cyan-500 hover:text-cyan-700 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
