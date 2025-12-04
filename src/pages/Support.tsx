import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, Book, MessageCircle, LifeBuoy } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Search Hero */}
        <div className="bg-primary py-20 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">How can we help?</h1>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-12 h-14 bg-background text-foreground rounded-full shadow-lg border-none"
                placeholder="Search for articles, errors, or keywords..."
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <SupportCard
              icon={Book}
              title="Documentation"
              desc="Guides, API references, and code examples."
            />
            <SupportCard
              icon={MessageCircle}
              title="Community Forum"
              desc="Connect with other developers and engineers."
            />
            <SupportCard
              icon={LifeBuoy}
              title="Contact Support"
              desc="Open a ticket with our engineering team."
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const SupportCard = ({ icon: Icon, title, desc }: any) => (
  <Card className="hover:shadow-lg transition-all cursor-pointer group">
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{desc}</p>
    </CardContent>
  </Card>
);

export default Support;
