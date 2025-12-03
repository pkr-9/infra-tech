import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { CaseStudy } from "@/hooks/use-content";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 group">
      <CardHeader className="p-6 pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge
            variant="outline"
            className="text-xs font-mono text-muted-foreground uppercase tracking-widest"
          >
            {study.industry}
          </Badge>
          <div className="text-xs font-semibold text-primary">
            {study.client}
          </div>
        </div>
        <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-tight">
          {study.title}
        </h3>
      </CardHeader>

      <CardContent className="p-6 pt-2 flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
          {study.summary}
        </p>

        {/* KPI Grid - The "Impact" section */}
        <div className="mt-auto grid grid-cols-2 gap-4 bg-secondary/50 rounded-lg p-4 border border-border/50">
          {study.kpis.map((kpi, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-foreground group-hover:text-accent transition-colors">
                {kpi.value}
              </span>
              <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link
          to={`/case-studies/${study.slug}`}
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors w-full justify-between"
        >
          Read Case Study
          <span className="bg-primary/10 p-1.5 rounded-full group-hover:bg-accent group-hover:text-white transition-all">
            <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
};
