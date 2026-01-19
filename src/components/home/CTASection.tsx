import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, ClipboardList } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white min-h-[90vh]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="container relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Ready to transform your <br />
              <span className="text-accent">Digital Infrastructure?</span>
            </h2>

            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Whether you need enterprise software, AI platforms, or complete IT
              infrastructure deployment — we deliver everything under one
              accountable engagement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary CTA */}
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg font-semibold"
                asChild
              >
                <Link to="/get-proposal">
                  Request Proposal <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg bg-transparent border-primary-foreground/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">
                  <PhoneCall className="mr-2 w-5 h-5" />
                  Talk to an Architect
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Engagement Highlights */}
          <div className="lg:pl-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">What happens next?</h3>

              <ul className="space-y-4 text-primary-foreground/80 text-sm">
                <li className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>We review your requirements and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Our architects design a tailored solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>
                    You receive a detailed technical & commercial proposal
                  </span>
                </li>
              </ul>

              <div className="mt-6 text-xs text-primary-foreground/50">
                No obligation. Response within 24 business hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
