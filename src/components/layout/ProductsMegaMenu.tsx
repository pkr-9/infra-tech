import { Link } from "react-router-dom";
import {
  ChevronDown,
  Server,
  Cpu,
  Tablet,
  Wifi,
  ShieldCheck,
  Activity,
  Layers,
  ArrowRight,
} from "lucide-react";

export const ProductsMegaMenu = () => {
  return (
    <div className="group relative h-full flex items-center">
      {/* Trigger Link */}
      <Link
        to="/products"
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors py-2"
      >
        Products
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
      </Link>

      {/* Invisible Bridge (prevents menu from closing when moving mouse from link to menu) */}
      <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

      {/* Mega Menu Content */}
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[850px] bg-background border border-border rounded-xl shadow-2xl p-0 overflow-hidden z-50">
        <div className="flex flex-row h-full">
          {/* Column 1: Hardware */}
          <div className="flex-1 p-6 bg-muted/10">
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-primary" />
              <h3 className="font-heading font-semibold text-foreground">
                Hardware
              </h3>
            </div>
            <ul className="space-y-3">
              <ListItem
                to="/products/gateways"
                title="Edge Gateways"
                icon={<Wifi className="w-4 h-4" />}
              >
                Secure connectivity for IoT devices.
              </ListItem>
              <ListItem
                to="/products/servers"
                title="Rugged Servers"
                icon={<Server className="w-4 h-4" />}
              >
                High-performance compute for harsh environments.
              </ListItem>
              <ListItem
                to="/products/sensors"
                title="Industrial Sensors"
                icon={<Cpu className="w-4 h-4" />}
              >
                Precision monitoring for manufacturing.
              </ListItem>
              <ListItem
                to="/products/hmi"
                title="HMI Panels"
                icon={<Tablet className="w-4 h-4" />}
              >
                Touch interfaces for machine control.
              </ListItem>
            </ul>
          </div>

          {/* Column 2: Software */}
          <div className="flex-1 p-6 border-l border-border/50">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-blue-600" />
              <h3 className="font-heading font-semibold text-foreground">
                Software
              </h3>
            </div>
            <ul className="space-y-3">
              <ListItem
                to="/products/infra-os"
                title="InfraOS"
                icon={<Layers className="w-4 h-4" />}
              >
                Real-time operating system for edge nodes.
              </ListItem>
              <ListItem
                to="/products/fleet-manager"
                title="Fleet Manager"
                icon={<Activity className="w-4 h-4" />}
              >
                Centralized dashboard for device health.
              </ListItem>
              <ListItem
                to="/products/security"
                title="Security Suite"
                icon={<ShieldCheck className="w-4 h-4" />}
              >
                Zero-trust networking & threat detection.
              </ListItem>
            </ul>
          </div>

          {/* Column 3: Featured / Callout */}
          <div className="w-64 bg-gradient-to-br from-primary/5 to-blue-500/5 p-6 border-l border-border/50 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                New Release
              </span>
              <h4 className="font-heading font-bold text-lg mb-2">
                Edge AI Series X200
              </h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Now with 20% faster neural processing units for real-time vision
                analytics.
              </p>
            </div>
            <Link
              to="/products/x200"
              className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              View Specs <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for List Items
const ListItem = ({
  to,
  title,
  children,
  icon,
}: {
  to: string;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) => (
  <li>
    <Link
      to={to}
      className="group/item block p-2 rounded-lg hover:bg-muted transition-colors"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-muted-foreground group-hover/item:text-primary transition-colors">
          {icon}
        </span>
        <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
          {title}
        </span>
      </div>
      <p className="text-xs text-muted-foreground line-clamp-1 pl-6">
        {children}
      </p>
    </Link>
  </li>
);
