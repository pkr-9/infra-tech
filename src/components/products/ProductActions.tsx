import { useState, useMemo } from "react";
import { Product } from "@/lib/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  ShieldCheck,
  Truck,
  Clock,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Mock configuration options (In a real app, these would come from the product JSON)
const HARDWARE_CONFIGS = {
  ram: [
    { label: "8GB", value: "8gb", price: 0 },
    { label: "16GB", value: "16gb", price: 150 },
    { label: "32GB", value: "32gb", price: 300 },
  ],
  storage: [
    { label: "256GB SSD", value: "256gb", price: 0 },
    { label: "512GB SSD", value: "512gb", price: 100 },
    { label: "1TB NVMe", value: "1tb", price: 250 },
  ],
  connectivity: [
    { label: "Wi-Fi 6 + 4G", value: "4g", price: 0 },
    { label: "Wi-Fi 6 + 5G", value: "5g", price: 120 },
  ],
};

export const ProductActions = ({ product }: { product: Product }) => {
  const [purchaseType, setPurchaseType] = useState("buy");
  const [config, setConfig] = useState({
    ram: "8gb",
    storage: "256gb",
    connectivity: "4g",
  });

  // Calculate Dynamic Price
  const totalPrice = useMemo(() => {
    // 1. Extract number from price string (e.g., "$1,299" -> 1299)
    const basePriceString = String(product.price).replace(/[^0-9.]/g, "");
    const basePrice = parseFloat(basePriceString) || 0;

    // 2. If it's not hardware or has no price, return original string
    if (product.category !== "Hardware" || basePrice === 0)
      return product.price;

    // 3. Add modifiers
    let additionalCost = 0;
    additionalCost +=
      HARDWARE_CONFIGS.ram.find((c) => c.value === config.ram)?.price || 0;
    additionalCost +=
      HARDWARE_CONFIGS.storage.find((c) => c.value === config.storage)?.price ||
      0;
    additionalCost +=
      HARDWARE_CONFIGS.connectivity.find((c) => c.value === config.connectivity)
        ?.price || 0;

    // 4. Format currency
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(basePrice + additionalCost);
  }, [product.price, product.category, config]);

  const isHardware = product.category === "Hardware";

  return (
    <Card className="sticky top-24 border-border shadow-lg overflow-hidden transition-all duration-300">
      <CardHeader className="bg-secondary/20 border-b border-border pb-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              {purchaseType === "haas" ? "Monthly Subscription" : "Total Price"}
            </p>
            <h2 className="text-4xl font-bold font-heading text-foreground animate-in fade-in">
              {purchaseType === "haas"
                ? `${String(product.price).split(" ")[0]}/mo`
                : totalPrice}
            </h2>
          </div>
          {isHardware && (
            <Badge
              variant="outline"
              className="border-green-500/50 text-green-600 bg-green-500/10"
            >
              In Stock
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* 1. Purchase Options (Buy vs Lease) */}
        {product.purchaseOptions && (
          <div className="space-y-3">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Payment Model
            </Label>
            <RadioGroup
              defaultValue="buy"
              onValueChange={setPurchaseType}
              className="grid grid-cols-2 gap-3"
            >
              {product.purchaseOptions.map((opt) => {
                const id = opt.toLowerCase();
                return (
                  <div key={id}>
                    <RadioGroupItem
                      value={id}
                      id={id}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={id}
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                    >
                      <span className="font-bold">{opt}</span>
                      <span className="text-[10px] text-muted-foreground font-medium mt-1">
                        {opt === "Buy" ? "CapEx" : "OpEx"}
                      </span>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        )}

        <Separator />

        {/* 2. Hardware Configuration (Only show for Hardware & Buy mode) */}
        {isHardware && purchaseType === "buy" && (
          <div className="space-y-5 animate-in slide-in-from-top-2">
            {/* RAM Selector */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <Cpu className="w-3 h-3" /> Memory (RAM)
                </Label>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {HARDWARE_CONFIGS.ram.map((opt) => (
                  <ConfigOption
                    key={opt.value}
                    label={opt.label}
                    price={opt.price}
                    isSelected={config.ram === opt.value}
                    onClick={() => setConfig({ ...config, ram: opt.value })}
                  />
                ))}
              </div>
            </div>

            {/* Storage Selector */}
            <div className="space-y-3">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <HardDrive className="w-3 h-3" /> Storage
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {HARDWARE_CONFIGS.storage.map((opt) => (
                  <ConfigOption
                    key={opt.value}
                    label={opt.label}
                    price={opt.price}
                    isSelected={config.storage === opt.value}
                    onClick={() => setConfig({ ...config, storage: opt.value })}
                  />
                ))}
              </div>
            </div>

            {/* Connectivity Selector */}
            <div className="space-y-3">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Wifi className="w-3 h-3" /> Connectivity
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {HARDWARE_CONFIGS.connectivity.map((opt) => (
                  <ConfigOption
                    key={opt.value}
                    label={opt.label}
                    price={opt.price}
                    isSelected={config.connectivity === opt.value}
                    onClick={() =>
                      setConfig({ ...config, connectivity: opt.value })
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Value Props */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-sm">
            <Truck className="w-4 h-4 text-primary" />
            <span>
              Shipping:{" "}
              <span className="font-semibold text-foreground">
                Free (3-5 Days)
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>
              Warranty:{" "}
              <span className="font-semibold text-foreground">
                3 Years Included
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>
              Lead Time:{" "}
              <span className="font-semibold text-foreground">Immediate</span>
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <Button
          size="lg"
          className="w-full bg-primary font-bold text-lg h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
        >
          {purchaseType === "haas" ? "Start Subscription" : "Add to Quote"}
        </Button>
        <Button
          variant="ghost"
          className="w-full text-muted-foreground hover:text-foreground"
        >
          Talk to an Engineer
        </Button>
      </CardFooter>
    </Card>
  );
};

// Helper Sub-component for options
const ConfigOption = ({
  label,
  price,
  isSelected,
  onClick,
}: {
  label: string;
  price: number;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={cn(
      "relative flex flex-col items-center justify-center rounded-md border text-center p-2 cursor-pointer transition-all hover:border-primary/50",
      isSelected
        ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
        : "border-input bg-background text-muted-foreground"
    )}
  >
    <span className="text-xs font-semibold">{label}</span>
    {price > 0 && (
      <span className="text-[10px] text-muted-foreground">+{price}</span>
    )}
    {isSelected && (
      <div className="absolute top-0.5 right-0.5">
        <Check className="w-3 h-3" />
      </div>
    )}
  </div>
);
