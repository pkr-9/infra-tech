import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useTestimonialsData } from "@/hooks/use-content";

/* Helper: Get Initials from Name */
const getInitials = (name: string) => {
  const parts = name.split(" ");
  const first = parts[0]?.charAt(0) || "";
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
  return (first + last).toUpperCase();
};

export const Testimonials = () => {
  const { data, isLoading } = useTestimonialsData();

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Skeleton className="h-12 w-1/3 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-72 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden border-b border-border">
      {/* Background Decor - Subtle Grid */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          {/* <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 animate-in fade-in zoom-in duration-500">
            <Quote className="h-6 w-6 text-primary fill-primary/20" />
          </div> */}

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
            Trusted by Engineering Leaders
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            See how forward-thinking enterprises are scaling their digital and
            physical infrastructure with our unified delivery model.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-6 pb-4">
            {data?.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-6 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full flex flex-col p-8 bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-default">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <blockquote className="text-xl font-medium text-foreground leading-relaxed mb-8 flex-grow">
                    "{item.quote}"
                  </blockquote>

                  {/* Author Section */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                      {item.avatar ? (
                        <AvatarImage src={item.avatar} alt={item.author} />
                      ) : null}
                      <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white font-bold text-sm">
                        {getInitials(item.author)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.role}, {item.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Modern Controls (Bottom Center) */}
          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
