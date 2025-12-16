import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { NavItem } from "@/lib/api";
import { GlobalSearch } from "@/components/GlobalSearch";
import { ProductsMegaMenu } from "./ProductsMegaMenu"; // Import the new menu

interface TopNavProps {
  items: NavItem[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const TopNav = ({
  items,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: TopNavProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Left: Brand */}
        <Link to="/" className="flex items-center space-x-2 group shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center shadow-lg group-hover:shadow-primary/20 transition-all">
            <span className="text-white font-heading font-bold text-xl tracking-tighter">
              IT
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg leading-none tracking-tight">
              InfraTech
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
              Intelligent Systems
            </span>
          </div>
        </Link>

        {/* Center: Primary Nav (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 h-full">
          {items.map((item) => {
            // Render Mega Menu for "Products"
            if (item.label === "Products") {
              return <ProductsMegaMenu key={item.href} />;
            }

            // Render Standard Link for others
            return (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3 shrink-0">
          <div className="hidden sm:block">
            <GlobalSearch />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-muted"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <div className="hidden md:flex">
            <Button
              className="bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20"
              asChild
            >
              <Link to="/products">Get Quote</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
