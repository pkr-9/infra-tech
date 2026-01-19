import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CaseStudyCard = ({ study }: { study: any }) => {
  return (
    <Link
      to={study.href}
      className="group relative flex flex-col p-6 bg-card border border-border rounded-xl
                 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60
                 hover:shadow-lg hover:shadow-primary/10"
    >
      {/* Industry Badge */}
      <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
        {study.industry}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {study.title}
      </h3>

      {/* Summary */}
      <p className="text-sm text-muted-foreground mb-6 flex-grow">
        {study.summary}
      </p>

      {/* Metric Highlight */}
      <div className="mb-6">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
          {study.metric}
        </span>
      </div>

      {/* CTA */}
      <div className="flex items-center text-sm font-semibold text-primary mt-auto">
        Read Case Study
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};
