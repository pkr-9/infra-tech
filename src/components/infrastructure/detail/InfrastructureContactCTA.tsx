import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function InfrastructureContactCTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">
          Planning an Infrastructure Project?
        </h2>
        <p className="mb-10 opacity-90">
          Talk to our infrastructure architects and get a tailored proposal.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link to="/get-proposal">Talk to an Infrastructure Architect</Link>
        </Button>
      </div>
    </section>
  );
}
