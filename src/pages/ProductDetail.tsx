import { useParams, Link } from "react-router-dom";
import { useProductBySlug } from "@/hooks/use-content";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { ProductActions } from "@/components/products/ProductActions";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, isError } = useProductBySlug(slug);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <main className="flex-grow pt-[110px] container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you are looking for does not exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">Back to Catalog</Link>
          </Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Standardized Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
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
                  <Link to="/products">Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {/* Optional Category Level */}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <span className="cursor-default">{product.category}</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Gallery & Details (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Header Mobile Only */}
              <div className="lg:hidden space-y-4">
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold font-heading">
                  {product.title}
                </h1>
              </div>

              <ProductGallery
                category={product.category}
                title={product.title}
              />

              {/* Description */}
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  Product Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <ProductSpecs specs={product.specs} />
            </div>

            {/* Right Column: Actions (4 cols) */}
            <div className="lg:col-span-4">
              <div className="hidden lg:block mb-6 space-y-4">
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  {product.category}
                </Badge>
                <h1 className="text-4xl font-bold font-heading text-foreground">
                  {product.title}
                </h1>
                <p className="text-muted-foreground text-sm font-mono">
                  SKU: {product.sku}
                </p>
              </div>

              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const ProductDetailSkeleton = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <main className="flex-grow pt-[110px] container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <Skeleton className="h-[400px] w-full rounded-xl" />
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-32 w-full" />
        </div>
        <div className="lg:col-span-4">
          <Skeleton className="h-[500px] w-full rounded-xl" />
        </div>
      </div>
    </main>
  </div>
);

export default ProductDetail;
