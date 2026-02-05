import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useNavData } from "@/hooks/use-content";

export const SolutionsMegaMenu = () => {
  const { data: nav } = useNavData();
  const menu = nav?.solutionsMenu;

  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

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

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, []);

  if (!menu) return null;

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={() => scheduleClose(120)}
      onFocus={openMenu}
      onBlur={() => scheduleClose(120)}
    >
      <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary py-2">
        <Link to="/solutions" className="hover:text-primary">
          Solutions
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen((s) => !s);
          }}
          className="p-1"
          aria-label="Toggle solutions menu"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div
        role="menu"
        aria-hidden={!isOpen}
        className={`absolute left-0 mt-2 w-[900px] bg-card border border-border rounded-xl shadow-lg p-6 z-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onMouseEnter={openMenu}
        onMouseLeave={() => scheduleClose(120)}
      >
        <div className="grid grid-cols-3 gap-6">
          {/* 1. Software uses default /solutions base */}
          <MenuColumn
            title="Software Solutions"
            items={menu.software}
            basePath="/solutions"
          />

          {/* 2. Infrastructure MUST use /infrastructure base */}
          <MenuColumn
            title="Infrastructure"
            items={menu.infrastructure}
            basePath="/infrastructure"
          />

          {/* 3. Managed Services usually live under /solutions (check your routes) */}
          <MenuColumn
            title="Managed Services"
            items={menu.managed}
            basePath="/solutions"
          />
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

function MenuColumn({
  title,
  items,
  basePath,
}: {
  title: string;
  items: { label: string; slug: string }[];
  basePath: string;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-3">
        {title}
      </h4>
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            // Use the dynamic basePath instead of hardcoded string
            to={`${basePath}/${item.slug}`}
            className="text-sm hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
