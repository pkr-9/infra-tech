import { Link } from "react-router-dom";
import {
  Calculator,
  FileText,
  BookOpen,
  Briefcase,
  ArrowRight,
  Download,
  Terminal,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Resources = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Breadcrumb */}
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
                <BreadcrumbPage>Resources</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary"
          >
            Library
          </Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Developer Resources & Tools
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to build, scale, and optimize your
            infrastructure. From technical guides to interactive planning tools.
          </p>
        </div>

        <div className="container mx-auto px-4 mb-24">
          {/* Featured Tool: ROI Calculator */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-heading mb-6">
              Interactive Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20 hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-heading">
                    ROI Calculator
                  </CardTitle>
                  <CardDescription className="text-base">
                    Estimate your cost savings by switching to Edge AI
                    processing. Compare Cloud vs. Edge costs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                      Instant cost comparison
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />{" "}
                      PDF Report generation
                    </li>
                  </ul>
                  <Button asChild className="w-full sm:w-auto">
                    <Link to="/resources/roi-calculator">
                      Try Calculator <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Placeholder for future tool */}
              <Card className="border-border bg-card/50 opacity-80 hover:opacity-100 transition-opacity">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground mb-4">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-heading">
                    Config Generator
                  </CardTitle>
                  <CardDescription className="text-base">
                    Generate YAML configurations for your InfraTech Edge
                    Gateways.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-6">
                    Coming Soon
                  </Badge>
                  <Button
                    disabled
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Early Access
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Knowledge Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Documentation */}
            <Link to="/docs" className="group">
              <Card className="h-full hover:shadow-lg transition-all border-border hover:border-primary/50">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-blue-500 mb-4 group-hover:translate-x-1 transition-transform" />
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>
                    API references, SDK guides, and integration tutorials.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm font-medium text-primary flex items-center">
                  View Docs{" "}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </Link>

            {/* Blog & Insights */}
            <Link to="/blog" className="group">
              <Card className="h-full hover:shadow-lg transition-all border-border hover:border-primary/50">
                <CardHeader>
                  <FileText className="w-8 h-8 text-green-500 mb-4 group-hover:translate-x-1 transition-transform" />
                  <CardTitle>Engineering Blog</CardTitle>
                  <CardDescription>
                    Deep dives into Edge AI, Kubernetes, and Industry 4.0
                    trends.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm font-medium text-primary flex items-center">
                  Read Articles{" "}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </Link>

            {/* Case Studies */}
            <Link to="/case-studies" className="group">
              <Card className="h-full hover:shadow-lg transition-all border-border hover:border-primary/50">
                <CardHeader>
                  <Briefcase className="w-8 h-8 text-purple-500 mb-4 group-hover:translate-x-1 transition-transform" />
                  <CardTitle>Case Studies</CardTitle>
                  <CardDescription>
                    Real-world success stories from Global 500 manufacturing
                    partners.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm font-medium text-primary flex items-center">
                  View Stories{" "}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Downloads Section */}
          <div className="bg-secondary/20 rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold font-heading mb-6">
              Downloads & Assets
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Product Catalog 2024", size: "4.2 MB" },
                { label: "Security Compliance Whitepaper", size: "1.8 MB" },
                { label: "InfraOS Datasheet", size: "2.5 MB" },
                { label: "API Specification (OpenAPI)", size: "0.5 MB" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-primary cursor-pointer transition-colors group"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{item.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.size} • PDF
                    </span>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-muted-foreground group-hover:text-primary"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resources;
