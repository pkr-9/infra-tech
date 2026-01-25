import { FileText } from "lucide-react";

export function InfrastructureDocuments({
  docs,
}: {
  docs?: { title: string; url: string }[];
}) {
  if (!docs?.length) return null;

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold mb-6">Downloads</h3>

        <div className="space-y-3">
          {docs.map((doc) => (
            <a
              key={doc.url}
              href={doc.url}
              className="flex items-center gap-3 text-primary hover:underline"
            >
              <FileText className="w-4 h-4" />
              {doc.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
