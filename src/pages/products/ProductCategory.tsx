import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Server,
  Wifi,
  Cpu,
  Tablet,
  Layers,
  Activity,
  ShieldCheck,
  ArrowRight,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/use-content";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// 1. Configuration: Map URL paths to Page Content
const CATEGORY_METADATA: Record<string, any> = {
  hardware: {
    title: "Hardware Catalog",
    description: "Ruggedized computing solutions for the edge. Built to last.",
    icon: Box,
    filterTag: "Hardware", // Will match product.category === 'Hardware'
    type: "Category",
  },
  software: {
    title: "Software Platform",
    description: "Enterprise-grade OS, Security, and Management tools.",
    icon: Layers,
    filterTag: "Software",
    type: "Category",
  },
  // Hardware
  gateways: {
    title: "Edge Gateways",
    description:
      "Secure, ruggedized IoT gateways designed for seamless connectivity in harsh industrial environments.",
    icon: Wifi,
    filterTag: "Gateway", // Matches 'category' or 'subcategory' in your JSON
    type: "Hardware",
  },
  servers: {
    title: "Rugged Servers",
    description:
      "High-performance edge computing nodes built to withstand extreme temperatures and vibration.",
    icon: Server,
    filterTag: "Server",
    type: "Hardware",
  },
  sensors: {
    title: "Industrial Sensors",
    description:
      "Precision data acquisition modules for predictive maintenance and real-time monitoring.",
    icon: Cpu,
    filterTag: "Sensor",
    type: "Hardware",
  },
  hmi: {
    title: "HMI Panels",
    description:
      "Intuitive touch interfaces for machine control and visualization on the factory floor.",
    icon: Tablet,
    filterTag: "HMI",
    type: "Hardware",
  },
  // Software
  "infra-os": {
    title: "InfraOS",
    description:
      "A real-time, container-optimized operating system built specifically for the edge.",
    icon: Layers,
    filterTag: "OS",
    type: "Software",
  },
  "fleet-manager": {
    title: "Fleet Manager",
    description:
      "Centralized observability and orchestration for thousands of distributed devices.",
    icon: Activity,
    filterTag: "Management",
    type: "Software",
  },
  security: {
    title: "Security Suite",
    description:
      "Zero-trust networking, threat detection, and automated compliance enforcement.",
    icon: ShieldCheck,
    filterTag: "Security",
    type: "Software",
  },
};

export const ProductCategory = () => {
  const location = useLocation();
  const { data: products } = useProducts();

  // 2. Determine which category we are on based on the URL
  // e.g. "/products/gateways" -> "gateways"
  const slug = location.pathname.split("/").pop() || "";
  const meta = CATEGORY_METADATA[slug];

  // 3. Filter Products
  const filteredProducts = useMemo(() => {
    if (!products || !meta) return [];
    // Filter logic: Check if product category or tags match our filterTag
    return products.filter((p: any) => {
      // 1. Strict check on subcategory (Best match)
      if (p.subcategory === meta.filterTag) return true;

      // 2. Fallback check on tags (Flexible match)
      if (p.tags && p.tags.includes(meta.filterTag)) return true;

      // 3. Fallback check on main category (Broad match, e.g. for "Hardware" page)
      if (meta.filterTag === "Hardware" && p.category === "Hardware")
        return true;

      return false;
    });
  }, [products, meta]);

  // Fallback if route doesn't exist in metadata
  if (!meta)
    return (
      <div className="pt-32 text-center container">
        <h1 className="text-2xl font-bold">Category Not Found</h1>
        <Button asChild className="mt-4">
          <Link to="/products">View All Products</Link>
        </Button>
      </div>
    );

  const Icon = meta.icon;

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
                <BreadcrumbLink asChild>
                  <Link to="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{meta.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-secondary/20 border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Badge
                  variant="outline"
                  className="bg-background text-primary border-primary/20"
                >
                  {meta.type}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {meta.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {meta.description}
              </p>
            </div>
            {/* Visual Icon */}
            <div className="w-32 h-32 md:w-48 md:h-48 bg-background rounded-full flex items-center justify-center shadow-lg border border-border shrink-0">
              <Icon className="w-16 h-16 md:w-24 md:h-24 text-primary opacity-80" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 mb-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-heading">
              Available Models
            </h2>
            <span className="text-muted-foreground text-sm">
              Showing {filteredProducts.length} results
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-16 border-2 border-dashed border-border rounded-xl">
              <Box className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                We are currently updating our {meta.title} catalog.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Sales for Inventory</Link>
              </Button>
            </div>
          )}
        </div>

        {/* CTA Strip */}
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold font-heading mb-4">
              Need a custom configuration?
            </h2>
            <p className="opacity-90 mb-8 max-w-2xl mx-auto">
              Our engineering team can customize {meta.title.toLowerCase()} to
              meet specific industrial protocols or form factors.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="font-bold gap-2"
              asChild
            >
              <Link to="/contact">
                Talk to Engineering <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
