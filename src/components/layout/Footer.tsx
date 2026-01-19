import { Link } from "react-router-dom";
import {
  CircuitBoard,
  ArrowRight,
  PhoneCall,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useTrustData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

/* Social links */
const socials = [
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Instagram, href: "https://instagram.com" },
];

/* Quick nav blocks */
const quickLinks = [
  { title: "Solutions", href: "/solutions" },
  { title: "Infrastructure", href: "/infrastructure" },
  { title: "Industries", href: "/industries" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "About Us", href: "/about" },
  { title: "Careers", href: "/careers" },
];

/* initials fallback */
const initials = (name?: string) => {
  if (!name) return "";
  const p = name.split(" ");
  return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase();
};

export const Footer = () => {
  const { data: trustData, isLoading } = useTrustData();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-14">
        {/* ===== TOP GRID ===== */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          {/* BRAND PANEL */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <CircuitBoard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-heading font-bold text-xl">InfraTech</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">
                  Intelligent Systems
                </div>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Enterprise software engineering and IT infrastructure deployment —
              delivered through a single accountable partner.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center
                               text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS GRID */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {quickLinks.map((l) => (
              <Link
                key={l.title}
                to={l.href}
                className="group rounded-lg border border-border p-4 text-sm font-medium
                           hover:border-primary hover:bg-primary/5 transition"
              >
                {l.title}
                <ArrowRight className="w-4 h-4 mt-2 text-muted-foreground group-hover:text-primary transition" />
              </Link>
            ))}
          </div>

          {/* ENGAGEMENT PANEL */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-4">
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Start Engagement
              </div>

              <Link
                to="/get-proposal"
                className="flex items-center justify-between text-sm font-semibold text-primary"
              >
                Request Proposal
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-between text-sm font-semibold text-primary"
              >
                Talk to Architect
                <PhoneCall className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-between text-sm font-semibold text-primary"
              >
                Email Us
                <Mail className="w-4 h-4" />
              </Link>

              <p className="text-xs text-muted-foreground">
                Response within 24 business hours.
              </p>
            </div>
          </div>
        </div>

        {/* ===== TRUST STRIP ===== */}
        <div className="border-y border-border py-6 mb-8">
          {isLoading ? (
            <div className="flex gap-6 justify-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-20 rounded-md" />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-6">
              {trustData?.clients?.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-muted/30">
                    {c.logo ? (
                      <img
                        src={c.logo}
                        alt={c.name}
                        className="object-contain w-full h-full p-1"
                      />
                    ) : (
                      <span className="text-xs font-semibold">
                        {initials(c.name)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} InfraTech Systems. All rights reserved.
          </span>

          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary">
              Terms
            </Link>
            <Link to="/cookie-policy" className="hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
