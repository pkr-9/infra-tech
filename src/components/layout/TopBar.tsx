import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-muted/50 border-b border-border text-[11px] or text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center text-muted-foreground">
        {/* Left: Quick Links */}
        <div className="flex items-center space-x-6">
          <Link to="/careers" className="hover:text-primary transition-colors">
            Careers
          </Link>
          <Link
            to="/investors"
            className="hover:text-primary transition-colors"
          >
            Investors
          </Link>
          <Link to="/news" className="hover:text-primary transition-colors">
            Newsroom
          </Link>
        </div>

        {/* Right: Contact & Support */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:support@infratech.com"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Mail className="w-3 h-3 mr-1.5" />
            support@infratech.com
          </a>
          <a
            href="tel:+18005550123"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Phone className="w-3 h-3 mr-1.5" />
            +1 (800) 555-0123
          </a>
          <div className="h-3 w-[1px] bg-border mx-2" />
          <Link to="/login" className="hover:text-primary font-medium">
            Client Login
          </Link>
        </div>
      </div>
    </div>
  );
};
