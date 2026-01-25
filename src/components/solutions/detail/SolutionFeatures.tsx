// src/components/solutions/detail/SolutionFeatures.tsx
import { CheckCircle2 } from "lucide-react";

export function SolutionFeatures({ features }: { features?: string[] }) {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
