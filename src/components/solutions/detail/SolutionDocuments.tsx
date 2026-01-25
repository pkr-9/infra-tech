import { FileText, Download, Shield, FileCheck } from "lucide-react";

export function SolutionDocuments({
  docs,
}: {
  docs?: { title: string; url: string }[];
}) {
  if (!docs || docs.length === 0) return null;

  return (
    <section className="py-24 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" />
              Compliance & Specs
            </div>
            <h2 className="text-3xl font-heading font-bold text-slate-900">
              Technical Resources
            </h2>
            <p className="text-slate-600 max-w-xl">
              Download detailed architecture diagrams, compliance certificates
              (SOC2/ISO), and sample service level agreements.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc, idx) => (
            <a
              key={idx}
              href={doc.url}
              className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                <FileText className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-900 truncate group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded">
                    PDF
                  </span>
                  <span>•</span>
                  <span>2.4 MB</span>
                </div>
              </div>

              <div className="shrink-0 self-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <Download className="w-5 h-5 text-primary" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
