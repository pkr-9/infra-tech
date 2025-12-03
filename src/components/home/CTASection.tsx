import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Heading & Buttons */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Ready to modernize your <br />
              <span className="text-accent">Infrastructure?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-lg">
              Join 500+ engineering teams building faster, safer systems with
              InfraTech. Get a custom architecture review today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">
                  Talk to Sales <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg bg-transparent border-primary-foreground/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/products">Explore Hardware</Link>
              </Button>
            </div>
          </div>

          {/* Right: Newsletter Card */}
          <div className="lg:pl-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 text-accent">
                <Mail className="w-6 h-6" />
                <span className="font-bold tracking-wide uppercase text-sm">
                  Engineering Newsletter
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Stay ahead of the curve
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                Get monthly deep dives on Edge AI, Kubernetes patterns, and
                industrial IoT security. No spam.
              </p>
              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="enter.email@company.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-12 focus-visible:ring-accent"
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-white/90 font-bold h-12"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-primary-foreground/40 mt-4 text-center">
                We care about your data in our{" "}
                <Link to="/privacy" className="underline hover:text-white">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
