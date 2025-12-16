import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/use-blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, Clock, ArrowRight, Search, Rss } from "lucide-react";

const BlogIndex = () => {
  const { data: posts, isLoading, isError } = useBlogPosts();

  if (isLoading) return <BlogSkeleton />;
  if (isError)
    return <div className="pt-32 text-center">Failed to load insights.</div>;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[80px]">
        {/* Hero Section */}
        <div className="bg-secondary/20 border-b border-border py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Badge
              variant="outline"
              className="mb-4 border-primary text-primary"
            >
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Insights for the Modern Enterprise
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Technical deep dives, industry trends, and engineering stories
              from the InfraTech team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 h-10 bg-background/80 backdrop-blur"
              />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-card"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background">
                    {post.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm font-medium text-primary mt-auto">
                    Read Article{" "}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter / CTA Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2 text-primary font-semibold">
                <Rss className="w-4 h-4" /> Stay Updated
              </div>
              <h2 className="text-2xl font-bold font-heading mb-2">
                Get the latest engineering insights
              </h2>
              <p className="text-muted-foreground">
                Join 5,000+ developers and CTOs receiving our monthly technical
                newsletter.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-background min-w-[240px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const BlogSkeleton = () => (
  <div className="pt-[80px] container mx-auto px-4 py-16 space-y-8">
    <Skeleton className="h-64 w-full rounded-xl" />
    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-[400px] w-full rounded-xl" />
      ))}
    </div>
  </div>
);

export default BlogIndex;
