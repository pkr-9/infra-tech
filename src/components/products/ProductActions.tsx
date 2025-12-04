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
import { Check, ShieldCheck, Truck, Clock } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const ProductActions = ({ product }: { product: Product }) => {
  const [purchaseType, setPurchaseType] = useState("buy");

  return (
    <Card className="sticky top-24 border-border shadow-lg overflow-hidden">
      <CardHeader className="bg-secondary/20 border-b border-border pb-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Starting at
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              {product.price}
            </h2>
          </div>
          {product.category === "Hardware" && (
            <Badge variant="outline" className="border-accent text-accent">
              In Stock
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Purchase Options */}
        {product.purchaseOptions && (
          <div className="space-y-3">
            <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Purchase Option
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
                      className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                    >
                      <span className="font-bold">{opt}</span>
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        )}

        <Separator />

        {/* Value Props */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Truck className="w-4 h-4 text-primary" />
            <span>
              Standard shipping: <span className="font-semibold">3-5 Days</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>
              Warranty: <span className="font-semibold">3 Years Included</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-primary" />
            <span>
              Lead Time: <span className="font-semibold">Immediate</span>
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <Button
          size="lg"
          className="w-full bg-primary font-bold text-lg h-12 shadow-glow"
        >
          {purchaseType === "haas" ? "Subscribe Now" : "Add to Quote"}
        </Button>
        <Button variant="ghost" className="w-full">
          Contact Sales for Volume
        </Button>
      </CardFooter>
    </Card>
  );
};
