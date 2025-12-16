import { useQuery } from "@tanstack/react-query";

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        role: string;
    };
    date: string;
    readTime: string;
    image: string;
    content: string; // HTML string or Markdown
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
    const response = await fetch("/data/blog.json");
    if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
    }
    return response.json();
};

export const useBlogPosts = () => {
    return useQuery({
        queryKey: ["blog-posts"],
        queryFn: fetchBlogPosts,
    });
};

export const useBlogPostBySlug = (slug?: string) => {
    return useQuery({
        queryKey: ["blog-post", slug],
        queryFn: async () => {
            const posts = await fetchBlogPosts();
            const post = posts.find((p) => p.slug === slug);
            if (!post) throw new Error("Post not found");
            return post;
        },
        enabled: !!slug,
    });
};