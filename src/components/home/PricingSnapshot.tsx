import { Link } from "react-router-dom";
import { Check, ArrowRight, Cloud, Box, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    icon: Cloud,
    title: "Software & SaaS",
    desc: "For cloud-native platforms and security suites.",
    price: "Usage-based",
    features: ["Pay-as-you-go models", "Volume licensing", "Float licenses"],
    href: "/pricing#software",
    popular: false,
  },
  {
    icon: Box,
    title: "Hardware (HaaS)",
    desc: "Edge gateways and industrial sensors.",
    price: "OpEx / Lease",
    features: [
      "Monthly subscription",
      "Hardware refresh included",
      "CapEx purchase options",
    ],
    href: "/pricing#hardware",
    popular: true,
  },
  {
    icon: Building2,
    title: "Enterprise",
    desc: "Full-stack infrastructure transformation.",
    price: "Custom",
    features: [
      "SLA guarantees",
      "Dedicated support manager",
      "On-prem deployment",
    ],
    href: "/contact",
    popular: false,
  },
];

export const PricingSnapshot = () => {
  return (
    <section className="py-20 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground">
            Flexible <span className="gradient-text">Procurement Models</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Whether you need CapEx hardware or OpEx cloud services, we align
            with your budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                plan.popular ? "border-primary shadow-md" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white hover:bg-primary">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pt-8 pb-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-4 text-primary shadow-sm">
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading">{plan.title}</h3>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
              </CardHeader>

              <CardContent className="flex-grow text-center">
                <div className="text-2xl font-bold text-foreground mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 text-left px-4">
                  {plan.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 pb-8">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to={plan.href}>
                    View Options <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
