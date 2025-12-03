import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Company: [],
    Services: [],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "FAQs", href: "#" },
      { name: "API Docs", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-xl">TL</span>
              </div>
              <span className="font-heading font-bold text-xl">TenderLink</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              India's leading AI-powered platform for government, private, and
              NGO tenders. Find, bid, and win with confidence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-primary transition-all flex items-center justify-center group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TenderLink. All rights reserved.
          </p>
          {/* <p className="text-sm text-muted-foreground">
            Made with ❤️ in India
          </p> */}
        </div>
      </div>
    </footer>
  );
};
