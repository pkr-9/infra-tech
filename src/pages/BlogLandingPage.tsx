import { useBlogData } from "@/hooks/use-content";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";

const BlogLandingPage = () => {
  const { data, isLoading } = useBlogData();

  if (isLoading)
    return (
      <div className="pt-32 container">
        <Skeleton className="h-64 w-full" />
      </div>
    );
  if (!data) return null;

  return (
    <div className="min-h-screen bg-background pt-[110px] pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
          <BookOpen className="w-4 h-4" /> {data.pageMeta.title}
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          {data.hero.headline}
        </h1>
        <p className="text-xl text-muted-foreground">{data.hero.subhead}</p>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 backdrop-blur"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                  <span>{post.date}</span> • <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-primary font-bold text-sm flex items-center mt-auto">
                  Read Article{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default BlogLandingPage;
