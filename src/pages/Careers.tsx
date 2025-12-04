import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// In real app: import { useCareers } from "@/hooks/use-content";
const jobs = [
  {
    id: "job-1",
    title: "Senior Rust Engineer",
    department: "Embedded Systems",
    location: "Remote / SF",
    type: "Full-time",
  },
  {
    id: "job-2",
    title: "Solutions Architect",
    department: "Customer Success",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: "job-3",
    title: "DevOps Engineer",
    department: "Cloud Platform",
    location: "Remote",
    type: "Contract",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-grow pt-[110px]">
        {/* Hero */}
        <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 transform translate-x-20" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge className="bg-white/20 text-white border-none hover:bg-white/30 mb-6">
              We're Hiring
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Build the Future of <br /> Infrastructure
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Join a team of curious engineers, designers, and problem solvers
              dealing with complex challenges at the edge.
            </p>
            <Button size="lg" variant="secondary" className="font-bold" asChild>
              <a href="#openings">View Open Positions</a>
            </Button>
          </div>
        </div>

        {/* Benefits / Culture (Brief) */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-secondary/20 rounded-xl border border-border">
              <h3 className="font-bold text-lg mb-2">Remote-First</h3>
              <p className="text-muted-foreground text-sm">
                Work from anywhere. We value output over hours.
              </p>
            </div>
            <div className="p-6 bg-secondary/20 rounded-xl border border-border">
              <h3 className="font-bold text-lg mb-2">Competitive Equity</h3>
              <p className="text-muted-foreground text-sm">
                Own a piece of the company you help build.
              </p>
            </div>
            <div className="p-6 bg-secondary/20 rounded-xl border border-border">
              <h3 className="font-bold text-lg mb-2">Health & Wellness</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive coverage for you and your family.
              </p>
            </div>
          </div>

          {/* Job List */}
          <div id="openings" className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8">
              Open Positions
            </h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-primary/50 transition-colors group cursor-pointer"
                >
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-white transition-all shrink-0"
                  >
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Careers;
