import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Lock, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const solutions = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Migrate legacy workloads to scalable, containerized cloud environments.",
    href: "/services/cloud-devops",
  },
  {
    icon: Cpu,
    title: "Edge AI & Vision",
    desc: "Deploy neural networks to the edge for real-time inference and analytics.",
    href: "/services/edge-ai",
  },
  {
    icon: Network,
    title: "Industrial IoT",
    desc: "Connect thousands of sensors securely with our specialized gateways.",
    href: "/services/iot",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    desc: "Zero Trust architecture implementation for critical infrastructure.",
    href: "/services/security",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        <div className="container mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Solutions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <div className="container mx-auto px-4 mb-20 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            End-to-End Solutions for the{" "}
            <span className="text-primary">Connected Enterprise</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            We don't just sell hardware. We architect complete digital
            ecosystems that integrate OT reliability with IT scalability.
          </p>
          <Button size="lg" className="h-12 px-8 text-lg">
            Schedule a Discovery Call
          </Button>
        </div>

        {/* Feature Grid */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol, idx) => (
              <Link key={idx} to={sol.href} className="group">
                <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-lg bg-secondary/5">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <div className="p-3 rounded-lg bg-background border border-border group-hover:bg-primary group-hover:text-white transition-colors">
                      <sol.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {sol.title}
                      </CardTitle>
                      <CardDescription className="text-base mb-4">
                        {sol.desc}
                      </CardDescription>
                      <span className="text-sm font-semibold text-primary flex items-center">
                        Learn more{" "}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-heading mb-6">
              Ready to modernize your infrastructure?
            </h2>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Solutions;
