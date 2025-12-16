import { Link } from "react-router-dom";
import { ArrowRight, Box, Layers, MoreHorizontal } from "lucide-react";
import { Product } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  // Helper to get the first few specs to display
  const previewSpecs = product.specs
    ? Object.entries(product.specs).slice(0, 3)
    : [];

  return (
    <Card className="group flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
      {/* Image / Placeholder Area */}
      <div className="relative h-48 bg-secondary/30 flex items-center justify-center overflow-hidden border-b border-border">
        {/* Decorative Background Blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Placeholder Icon (In real app, use <img> tag) */}
        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500 text-muted-foreground/50">
          {product.category === "Software" ? (
            <Layers className="w-20 h-20" strokeWidth={1} />
          ) : (
            <Box className="w-20 h-20" strokeWidth={1} />
          )}
        </div>

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.category === "Software" ? (
            <Badge
              variant="secondary"
              className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20"
            >
              Software
            </Badge>
          ) : (
            <Badge
              variant="secondary"
              className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20"
            >
              Hardware
            </Badge>
          )}
        </div>
      </div>

      <CardHeader className="p-5 pb-2">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {product.title}
          </h3>
        </div>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {product.sku}
        </p>
      </CardHeader>

      <CardContent className="p-5 py-2 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.shortDescription}
        </p>

        {/* Mini Specs Preview */}
        {previewSpecs.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-border/50">
            {previewSpecs.map(([key, value]) => (
              <div key={key} className="flex justify-between text-xs">
                <span className="text-muted-foreground font-medium">
                  {key}:
                </span>
                <span className="text-foreground truncate max-w-[120px] text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-5 pt-2 flex items-center justify-between mt-auto">
        <div className="font-heading font-bold text-lg">{product.price}</div>
        <Button
          size="sm"
          variant="outline"
          className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
          asChild
        >
          <Link to={`/products/${product.slug}`}>
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
