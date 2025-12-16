import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check local storage to see if user has already consented
    const consent = localStorage.getItem("infra-tech-cookie-consent");

    // If no consent found, show banner after a short delay
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (action: "accepted" | "declined") => {
    setIsClosing(true);
    // Wait for animation to finish before hiding
    setTimeout(() => {
      localStorage.setItem("infra-tech-cookie-consent", action);
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out p-4 md:p-6",
        isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
        // Initial animation class
        "animate-in slide-in-from-bottom duration-500"
      )}
    >
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
        {/* Content Area */}
        <div className="flex items-start gap-4 flex-1">
          <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Cookie className="h-5 w-5 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-heading text-base font-semibold leading-none">
              We value your privacy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
              We use cookies to improve your experience, analyze site traffic,
              and personalize content. By clicking "Accept All", you agree to
              our use of cookies. For more details, see our{" "}
              <Link
                to="/privacy"
                className="text-primary hover:underline underline-offset-4 font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col-reverse sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <Button
            variant="outline"
            onClick={() => handleAction("declined")}
            className="w-full sm:w-auto font-medium"
          >
            Necessary Only
          </Button>
          <Button
            onClick={() => handleAction("accepted")}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
          >
            Accept All
          </Button>
        </div>

        {/* Mobile Close Icon (Top Right) */}
        <button
          onClick={() => handleAction("declined")}
          className="absolute top-2 right-2 p-2 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Close cookie banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
