// src/components/home/TrustBar.tsx
import { useSite } from "@/context/SiteContext";
import { Skeleton } from "@/components/ui/skeleton";

export const TrustBar = () => {
  const { trustBar } = useSite();

  if (!trustBar) {
    return (
      <div className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <Skeleton className="h-4 w-64 mx-auto mb-6" />
          <div className="flex justify-center gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 border-b border-border bg-muted/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          {trustBar.headline}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-20">
          {trustBar.clients.map((client, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-center border border-border bg-card p-4 rounded-md hover:shadow-lg transition-shadow duration-300"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 sm:h-16 md:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
