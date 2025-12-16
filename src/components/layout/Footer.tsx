import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CircuitBoard,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Footer = () => {
  const footerSections = {
    Solutions: [
      { name: "Cloud & DevOps", href: "/services/cloud-devops" },
      { name: "Edge AI & Vision", href: "/services/edge-ai" },
      { name: "Industrial IoT", href: "/services/iot" },
      { name: "Cybersecurity", href: "/services/security" },
      { name: "Embedded Systems", href: "/services/embedded" },
    ],
    Products: [
      { name: "Edge Gateways", href: "/products/edge-gateway-x200" },
      { name: "Rugged Tablets", href: "/products/rugged-tablet-rt10" },
      { name: "InfraLog SIEM", href: "/products/infralog-siem" },
      { name: "Catalog", href: "/products" },
      { name: "Pricing", href: "/pricing" },
    ],
    Resources: [
      { name: "ROI Calculator", href: "/resources/roi-calculator" }, // Added context
      { name: "API Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Whitepapers", href: "/whitepapers" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers", badge: "Hiring" },
      { name: "Partners", href: "/about" },
      // Removed "Resources" to avoid duplication
    ],
    Support: [
      { name: "Contact", href: "/contact" },
      { name: "Help Center", href: "/support" },
      { name: "System Status", href: "#" },
      { name: "Trust Center", href: "/security" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* ROW 1: Brand & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 pb-12 border-b border-border">
          {/* Brand Left */}
          <div className="max-w-md space-y-4">
            <Link to="/" className="flex items-center space-x-2 group w-fit">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <CircuitBoard className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none">
                  InfraTech
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                  Intelligent Systems
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building secure, scalable infrastructure for the enterprise. From
              cloud-native applications to rugged edge hardware.
            </p>
          </div>

          {/* Socials Right */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center border border-border"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ROW 2: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {Object.entries(footerSections).map(([category, links]) => (
            <div key={category} className="flex flex-col">
              <h3 className="font-heading font-bold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                      {link.badge && (
                        <Badge
                          variant="secondary"
                          className="ml-2 h-5 px-1.5 text-[10px] bg-primary/10 text-primary border-primary/20"
                        >
                          {link.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ROW 3: Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InfraTech Systems Inc. All rights
            reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            All Systems Operational
          </div>
        </div>
      </div>
    </footer>
  );
};
