import { Link } from "react-router-dom";
import { ArrowUpRight, Trophy } from "lucide-react";
import { CaseStudy } from "@/lib/api";
import { Badge } from "@/components/ui/badge";

export const CaseStudyCard = ({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) => {
  return (
    <Link to={`/case-studies/${study.slug}`} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        {/* Image Half */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={study.image}
            alt={study.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge
              variant="secondary"
              className="bg-white/90 text-slate-900 backdrop-blur font-bold shadow-sm"
            >
              {study.industry}
            </Badge>
          </div>
        </div>

        {/* Content Half */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          {/* Metric */}
          <div className="flex items-center gap-2 mb-3 text-primary font-bold">
            <Trophy className="w-4 h-4" />
            <span className="text-sm uppercase tracking-wide">
              {study.metric}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">
            {study.title}
          </h3>

          <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow">
            {study.summary}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {study.client}
            </span>
            <div className="flex items-center text-sm font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Read Case Study <ArrowUpRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
