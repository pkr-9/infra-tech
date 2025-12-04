import { useState } from "react";
import { cn } from "@/lib/utils";
import { Box, Layers, Maximize2 } from "lucide-react";

interface ProductGalleryProps {
  category: "Hardware" | "Software";
  title: string;
}

export const ProductGallery = ({ category, title }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);

  // Simulated images array
  const images = [1, 2, 3];

  return (
    <div className="space-y-4">
      {/* Main Stage */}
      <div className="relative aspect-square md:aspect-[4/3] bg-secondary/30 rounded-xl border border-border overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/50 to-background">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3">
            {/* Dynamic Icon based on Category */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            {category === "Hardware" ? (
              <Box
                className="w-32 h-32 text-foreground/80 drop-shadow-2xl"
                strokeWidth={1}
              />
            ) : (
              <Layers
                className="w-32 h-32 text-primary drop-shadow-2xl"
                strokeWidth={1}
              />
            )}
          </div>
        </div>

        {/* Zoom Trigger */}
        <button className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur rounded-full border border-border opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Label */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur px-4 py-2 rounded-lg border border-border/50 text-xs font-mono text-muted-foreground">
          View {activeImage + 1}: Front Angle
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setActiveImage(idx)}
            className={cn(
              "relative aspect-square rounded-lg border bg-secondary/20 overflow-hidden transition-all",
              activeImage === idx
                ? "ring-2 ring-primary border-primary"
                : "border-border hover:border-primary/50"
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {category === "Hardware" ? (
                <Box className="w-8 h-8 text-muted-foreground" />
              ) : (
                <Layers className="w-8 h-8 text-muted-foreground" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
