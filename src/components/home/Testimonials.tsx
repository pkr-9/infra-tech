import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";

export const Testimonials = () => {
  const { data, isLoading } = useTestimonials();

  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what engineering leaders are saying about our infrastructure and
            services.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-64 w-full rounded-xl" />
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {data?.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <Card className="h-full border-border/60 shadow-sm hover:shadow-md transition-all duration-300">
                      <CardContent className="flex flex-col p-8 h-full">
                        <Quote className="h-8 w-8 text-primary/20 mb-6" />

                        <blockquote className="text-lg font-medium text-foreground/80 leading-relaxed flex-grow mb-8">
                          "{item.quote}"
                        </blockquote>

                        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/40">
                          <Avatar className="h-10 w-10 border border-primary/20">
                            <AvatarImage src={item.avatar} alt={item.author} />
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {item.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-foreground">
                              {item.author}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {item.role}, {item.company}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 text-primary hover:bg-primary/10" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 text-primary hover:bg-primary/10" />
          </Carousel>
        )}
      </div>
    </section>
  );
};
