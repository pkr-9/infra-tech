// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TopNav } from "./TopNav";
import { CategoryRow } from "./CategoryRow";
import { Button } from "@/components/ui/button";
import { useSite } from "@/context/SiteContext";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ NEW: read from SiteContext
  const { nav } = useSite();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Safe fallbacks
  const primaryLinks = nav?.primary || [];
  const categoryLinks = nav?.categories || [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <TopNav
        items={primaryLinks}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Category Row */}
      <div
        className={`transition-all duration-300 origin-top ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <CategoryRow categories={categoryLinks} />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-xl animate-in slide-in-from-top-5">
          <div className="p-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-md hover:bg-muted text-foreground font-medium"
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </nav>

            <div className="border-t border-border pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
                Industries
              </p>
              <div className="grid grid-cols-2 gap-2">
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.href}
                    to={cat.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm p-2 rounded hover:bg-primary/5 text-muted-foreground hover:text-primary"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Button className="w-full bg-primary" asChild>
                <Link to="/get-proposal">Request Proposal</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
