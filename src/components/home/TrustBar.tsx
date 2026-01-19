import { useTrustData } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

export const TrustBar = () => {
  const { data, isLoading } = useTrustData();

  if (isLoading) {
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

  if (!data) return null;

  return (
    <section className="py-10 border-b border-border bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          {data.headline}
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-20">
          {data.clients.map((client, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-center"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="
                h-10 sm:h-14 md:h-20 w-auto 
                 object-contain 
                transition-all duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
