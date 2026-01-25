import { SolutionCard, SidebarData } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { SolutionSidebar } from "./SolutionSidebar";
import {
  ArrowUpRight,
  Code2,
  Server,
  ShieldCheck,
  Cpu,
  RadioTower,
  Lock,
  BrainCircuit,
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, any> = {
  Code2,
  Server,
  ShieldCheck,
  Cpu,
  RadioTower,
  Lock,
  BrainCircuit,
};

interface SolutionsGridProps {
  solutions: SolutionCard[];
  sidebar?: SidebarData;
}

export function SolutionsGrid({ solutions, sidebar }: SolutionsGridProps) {
  return (
    <section id="solutions-grid" className="container mx-auto px-4 pb-24">
      {/* Main Layout Container: 
        Uses Flex to create the Side-by-Side layout.
        'items-start' is CRITICAL for sticky positioning to work on the child.
      */}
      <div className="flex flex-col lg:flex-row gap-8 items-start relative">
        {/* --- Left Column: The Grid --- */}
        <div className="flex-1 min-w-0 w-full">
          <div className="grid xl:grid-cols-2 gap-6">
            {solutions.map((solution) => {
              const Icon = iconMap[solution.icon] || Code2;

              return (
                <Link
                  key={solution.id}
                  to={solution.href}
                  className="group relative block h-full"
                >
                  {/* Hover Bloom */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                  {/* Card Container */}
                  <div className="relative h-full rounded-[1.75rem] bg-background border border-border/60 p-2 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="relative h-full flex flex-col rounded-[1.25rem] bg-secondary/10 p-6 md:p-8 overflow-hidden">
                      {/* Decor */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

                      {/* Header */}
                      <div className="flex justify-between items-start mb-6">
                        <Badge
                          variant="outline"
                          className="bg-background/50 backdrop-blur border-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm"
                        >
                          {solution.category}
                        </Badge>

                        <div className="relative">
                          <div className="w-12 h-12 rounded-2xl bg-background shadow-sm border border-border/50 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="flex-1 space-y-3 mb-8 relative z-10">
                        <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                          {solution.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {solution.summary}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-auto border-t border-border/50 pt-6 flex items-end justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {solution.tags?.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium text-muted-foreground bg-background/80 px-2 py-1 rounded-md border border-border/50"
                            >
                              {tag}
                            </span>
                          ))}
                          {(solution.tags?.length || 0) > 2 && (
                            <span className="text-[10px] font-medium text-muted-foreground px-1 py-1">
                              +{(solution.tags?.length || 0) - 2}
                            </span>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg shadow-primary/25">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* --- Right Column: Sticky Sidebar --- */}
        {/* We pass the data here, and since it's in the same flex container, 
            it will track the height of the grid perfectly. */}
        {sidebar && <SolutionSidebar sidebar={sidebar} />}
      </div>
    </section>
  );
}
