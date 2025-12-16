import { useParams, Link } from "react-router-dom";
import { useBlogPostBySlug } from "@/hooks/use-blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = useBlogPostBySlug(slug);

  if (isLoading) return <BlogPostSkeleton />;
  if (isError || !post)
    return <div className="pt-32 text-center">Post not found</div>;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Insights</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1 max-w-[200px]">
                  {post.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content (8 cols) */}
            <article className="lg:col-span-8">
              <header className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center justify-between border-y border-border py-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`https://ui-avatars.com/api/?name=${post.author.name}`}
                      />
                      <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">
                        {post.author.name}
                      </div>
                      <div className="text-muted-foreground">
                        {post.author.role}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <div>
                      {new Date(post.date).toLocaleDateString(undefined, {
                        dateStyle: "long",
                      })}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden mb-10 border border-border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover max-h-[500px]"
                />
              </div>

              {/* Article Body - Simulating HTML injection */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-heading prose-headings:font-bold prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Share Widget */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Share this article
                </h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Sticky TOC Placeholder or Ad */}
              <div className="sticky top-24">
                <div className="bg-secondary/30 rounded-xl p-6 border border-primary/10">
                  <h3 className="font-heading font-bold text-lg mb-2">
                    Need help with {post.category}?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our team of engineers can help you implement these
                    strategies in your organization.
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

const BlogPostSkeleton = () => (
  <div className="pt-[110px] container mx-auto px-4">
    <Skeleton className="h-12 w-3/4 mb-4" />
    <Skeleton className="h-6 w-1/4 mb-12" />
    <Skeleton className="h-[400px] w-full rounded-xl mb-12" />
    <div className="space-y-4 max-w-3xl">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </div>
);

export default BlogPost;
