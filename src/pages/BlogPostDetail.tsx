import { useParams, Link, Navigate } from "react-router-dom";
import { useBlogPostBySlug } from "@/hooks/use-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = useBlogPostBySlug(slug);

  if (isLoading) return <div className="pt-32 text-center">Loading...</div>;
  if (isError || !post) return <Navigate to="/blog" replace />;

  return (
    <article className="min-h-screen bg-background pt-[110px] pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>By {post.author}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
          />
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>{post.content}</p>
          <p className="italic text-muted-foreground mt-8">
            (This is a placeholder for the full markdown content of the blog
            post. In a real application, you would render the rich text or
            markdown here.)
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
          <Button size="lg" asChild>
            <Link to="/get-proposal">Talk to our Engineers</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
