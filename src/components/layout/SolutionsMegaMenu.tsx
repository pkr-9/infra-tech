import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/**
 * SolutionsMegaMenu
 * - Opens on mouseenter / focus
 * - Keeps open while hovering panel or trigger
 * - Small close delay to avoid flicker
 * - Basic ARIA: aria-expanded, role="menu" on panel
 */

export const SolutionsMegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const openMenu = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const scheduleClose = (ms = 120) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setIsOpen(false), ms);
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={() => scheduleClose(120)}
      onFocus={openMenu} // for keyboard navigation
      onBlur={() => scheduleClose(120)}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary py-2"
        onClick={() => setIsOpen((s) => !s)}
      >
        Solutions <ChevronDown className="w-4 h-4" />
      </button>

      {/* Panel: keep in DOM for accessibility */}
      <div
        role="menu"
        aria-hidden={!isOpen}
        className={`transition-opacity duration-150 pointer-events-none transform origin-top-left ${
          isOpen
            ? "opacity-100 visible pointer-events-auto translate-y-0"
            : "opacity-0 invisible -translate-y-1"
        } absolute left-0 mt-2 w-[900px] bg-card border border-border rounded-xl shadow-lg p-6 z-50`}
        onMouseEnter={openMenu}
        onMouseLeave={() => scheduleClose(120)}
      >
        <div className="grid grid-cols-3 gap-6">
          {/* Column 1: Software Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">
              Software
            </h4>
            <nav
              className="flex flex-col gap-2"
              aria-label="Software solutions"
            >
              <Link
                to="/solutions/web-mobile"
                className="text-sm hover:text-primary"
              >
                Web & Mobile Development
              </Link>
              <Link
                to="/solutions/enterprise-systems"
                className="text-sm hover:text-primary"
              >
                Enterprise Systems (ERP/CRM/LMS)
              </Link>
              <Link to="/solutions/saas" className="text-sm hover:text-primary">
                SaaS Product Engineering
              </Link>
              <Link
                to="/solutions/integration"
                className="text-sm hover:text-primary"
              >
                API & Integration
              </Link>
              <Link
                to="/solutions/automation"
                className="text-sm hover:text-primary"
              >
                RPA & Business Automation
              </Link>
            </nav>
          </div>

          {/* Column 2: AI & Data + Document Intelligence */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">
              AI & Data
            </h4>
            <nav
              className="flex flex-col gap-2"
              aria-label="AI and data solutions"
            >
              <Link
                to="/solutions/ai-data"
                className="text-sm hover:text-primary"
              >
                AI / Machine Learning
              </Link>
              <Link
                to="/solutions/computer-vision"
                className="text-sm hover:text-primary"
              >
                Computer Vision
              </Link>
              <Link to="/solutions/nlp" className="text-sm hover:text-primary">
                NLP & Conversational AI
              </Link>
              <Link
                to="/solutions/document-intelligence"
                className="text-sm hover:text-primary"
              >
                OCR / ICR / Document Intelligence
              </Link>
              <Link
                to="/solutions/analytics"
                className="text-sm hover:text-primary"
              >
                Predictive Analytics
              </Link>
            </nav>
          </div>

          {/* Column 3: Infrastructure & Managed Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">
              Infrastructure & Services
            </h4>
            <nav
              className="flex flex-col gap-2"
              aria-label="Infrastructure & services"
            >
              <Link
                to="/infrastructure/servers-storage"
                className="text-sm hover:text-primary"
              >
                Servers & Storage Setup
              </Link>
              <Link
                to="/infrastructure/networking"
                className="text-sm hover:text-primary"
              >
                Network, Wi-Fi & Security
              </Link>
              <Link
                to="/infrastructure/edge-iot"
                className="text-sm hover:text-primary"
              >
                Edge & IoT Deployments
              </Link>
              <Link
                to="/infrastructure/data-center"
                className="text-sm hover:text-primary"
              >
                Data Center & Colocation
              </Link>
              <Link
                to="/solutions/managed-services"
                className="text-sm hover:text-primary"
              >
                Managed Services & DevOps
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">
              Need a combined software + infrastructure solution?
            </div>
            <div className="text-xs text-muted-foreground">
              We design, procure, and deploy — single accountable partner.
            </div>
          </div>
          <Link
            to="/get-proposal"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white font-medium shadow-md"
          >
            Request Proposal
          </Link>
        </div>
      </div>
    </div>
  );
};
