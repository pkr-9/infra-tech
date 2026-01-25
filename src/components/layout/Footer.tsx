// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import {
  CircuitBoard,
  ArrowRight,
  PhoneCall,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MapPin,
  Globe2,
  ChevronRight,
  Layers,
  Server,
  Building2,
  FileText,
  Users,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSite } from "@/context/SiteContext";

/* Icon maps (unchanged UI behavior) */
const socialIcons = {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
};

const navIcons = [Layers, Server, Building2, FileText, Users, LifeBuoy];

export const Footer = () => {
  const { footer, trustBar } = useSite();

  if (!footer) return null;

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        {/* ===== TOP SECTION ===== */}
        <div className="grid lg:grid-cols-12 gap-12 mb-10">
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <CircuitBoard className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-white tracking-tight">
                  {footer.brand.companyName}
                </div>
                <div className="text-[10px] text-indigo-400 font-bold tracking-[0.2em] uppercase">
                  {footer.brand.tagline}
                </div>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {footer.brand.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              {footer.socials.map((s, i) => {
                const Icon = socialIcons[s.platform];
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* NAV CARDS */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 content-start">
            {footer.navCards.map((card, idx) => {
              const Icon = navIcons[idx];
              return (
                <div key={idx} className="group relative">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer relative z-10 h-full">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                      <span className="font-semibold text-xs text-slate-300 group-hover:text-white transition-colors">
                        {card.title}
                      </span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-transform duration-300 group-hover:rotate-90" />
                  </div>

                  <div className="absolute top-full left-0 w-full pt-2 opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-3 shadow-2xl shadow-black/50">
                      <div className="space-y-1">
                        {card.links.map((link, i) => (
                          <Link
                            key={i}
                            to={link.href}
                            className="px-2 py-2 rounded-lg text-xs text-slate-400 hover:bg-slate-800 hover:text-white transition-all flex items-center"
                          >
                            <ChevronRight className="w-3 h-3 mr-2 text-indigo-500" />
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ENGAGEMENT CARD */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/50 p-6 shadow-2xl">
              <h4 className="font-bold text-white mb-2">
                {footer.engagement.title}
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                {footer.engagement.subtitle}
              </p>

              <div className="space-y-3">
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                  asChild
                >
                  <Link to={footer.engagement.primaryButton.href}>
                    {footer.engagement.primaryButton.label}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-primary hover:bg-slate-800 hover:text-white"
                  asChild
                >
                  <Link to={footer.engagement.secondaryButton.href}>
                    <PhoneCall className="mr-2 w-4 h-4" />
                    {footer.engagement.secondaryButton.label}
                  </Link>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <div className="text-xs text-slate-400">
                  <span className="text-white font-semibold block mb-1">
                    {footer.address.label}
                  </span>
                  {footer.address.line1}
                  <br />
                  {footer.address.line2}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <p className="text-[10px] font-bold text-center text-slate-600 uppercase tracking-widest mb-6">
            {trustBar.headline}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {trustBar.clients.map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                {c.logo ? (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-10 w-auto grayscale invert"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-400">
                      {c.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 mt-8">
            <p>
              © {new Date().getFullYear()} InfraTech Systems. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              {footer.copyrightLinks.map((l, i) => (
                <Link
                  key={i}
                  to={l.href}
                  className="hover:text-slate-400 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
