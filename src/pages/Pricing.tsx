import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle, Link, Calculator } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link as RouterLink } from "react-router-dom";

const saasPlans = [
  {
    name: "Starter",
    price: "$0",
    desc: "For small teams and prototypes.",
    features: ["Up to 5 Edge Nodes", "Basic Telemetry", "Community Support"],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$199",
    period: "/mo",
    desc: "For scaling production deployments.",
    features: [
      "Up to 100 Edge Nodes",
      "Advanced Analytics",
      "Email Support",
      "30-day Data Retention",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For mission-critical infrastructure.",
    features: [
      "Unlimited Nodes",
      "SLA Guarantee",
      "Dedicated Account Manager",
      "On-Premise Deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const hardwarePlans = [
  {
    name: "Edge Gateway Lease",
    price: "$49",
    period: "/mo/device",
    desc: "OpEx model. Includes hardware refresh.",
    features: [
      "HW-X200 Gateway",
      "Next-Day Replacement",
      "Lifetime Warranty",
      "LTE Connectivity Included",
    ],
    cta: "Request Quote",
    popular: true,
  },
  {
    name: "CapEx Purchase",
    price: "$1,299",
    period: "one-time",
    desc: "Traditional procurement model.",
    features: [
      "HW-X200 Gateway",
      "Standard 3-Year Warranty",
      "Volume Discounts > 10 units",
    ],
    cta: "Buy Now",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        <div className="bg-secondary/30 py-20 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the model that fits your budget. Pay-as-you-go software or
              flexible hardware leasing.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <Tabs defaultValue="software" className="w-full max-w-5xl mx-auto">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                <TabsTrigger value="software">Software & SaaS</TabsTrigger>
                <TabsTrigger value="hardware">Hardware (HaaS)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="software">
              <div className="grid md:grid-cols-3 gap-8">
                {saasPlans.map((plan) => (
                  <PricingCard key={plan.name} plan={plan} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hardware">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {hardwarePlans.map((plan) => (
                  <PricingCard key={plan.name} plan={plan} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* ROI Calculator CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-secondary/30 p-6 rounded-xl border border-primary/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-bold text-foreground">
                    Unsure about the investment?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate your potential savings and break-even point in
                    seconds.
                  </p>
                </div>
              </div>
              <Button
                variant="default"
                className="w-full sm:w-auto ml-auto"
                asChild
              >
                <RouterLink to="/resources/roi-calculator">
                  Calculate ROI
                </RouterLink>
              </Button>
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="mt-20 text-center space-y-4">
            <h3 className="text-2xl font-bold font-heading">Have questions?</h3>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="gap-2">
                <HelpCircle className="w-4 h-4" /> Visit Help Center
              </Button>
              <Button
                variant="ghost"
                className="text-primary hover:bg-primary/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const PricingCard = ({ plan }: { plan: any }) => (
  <Card
    className={`relative flex flex-col ${
      plan.popular ? "border-primary shadow-lg scale-105 z-10" : "border-border"
    }`}
  >
    {plan.popular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Badge className="bg-primary text-white border-none px-4 py-1">
          Most Popular
        </Badge>
      </div>
    )}
    <CardHeader className="text-center pt-8">
      <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
      <div className="mt-4 flex items-baseline justify-center gap-1">
        <span className="text-4xl font-bold font-heading">{plan.price}</span>
        {plan.period && (
          <span className="text-muted-foreground">{plan.period}</span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-2">{plan.desc}</p>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-3 mt-4">
        {plan.features.map((feat: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{feat}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        className={`w-full ${plan.popular ? "bg-primary font-bold" : ""}`}
        variant={plan.popular ? "default" : "outline"}
      >
        {plan.cta}
      </Button>
    </CardFooter>
  </Card>
);

export default Pricing;
