import { Link } from "react-router-dom";
import { Product } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Product Image Placeholder */}
      <div className="relative h-48 bg-secondary/50 flex items-center justify-center overflow-hidden">
        {/* Placeholder Simulated Image */}
        <div className="w-32 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-md shadow-lg transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-xs text-white font-mono">
          {product.sku}
        </div>

        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur text-foreground"
        >
          {product.category || "Hardware"}
        </Badge>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold font-heading group-hover:text-primary transition-colors line-clamp-1">
            {product.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Specs Grid */}
        {product.specs && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {Object.entries(product.specs)
              .slice(0, 4)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="bg-muted/30 p-2 rounded border border-border/50"
                >
                  <span className="block text-[10px] text-muted-foreground uppercase font-bold">
                    {key}
                  </span>
                  <span className="block text-xs font-mono text-foreground font-medium truncate">
                    {value}
                  </span>
                </div>
              ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-foreground uppercase">
              Price
            </span>
            <span className="text-sm font-bold text-foreground">
              {product.price || "Inquire"}
            </span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
            asChild
          >
            <Link to={`/products/${product.slug}`}>View Specs</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
