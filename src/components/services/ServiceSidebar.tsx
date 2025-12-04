import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Mail, Phone } from "lucide-react";
import { Service } from "@/lib/api";

export const ServiceSidebar = ({ service }: { service: Service }) => {
  return (
    <div className="sticky top-24 space-y-6">
      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="bg-primary/5 pb-4">
          <CardTitle className="text-lg">Start your project</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <p className="text-sm text-muted-foreground">
            Ready to implement <strong>{service.title}</strong>? Schedule a
            technical discovery call with our architects.
          </p>

          <Button size="lg" className="w-full font-bold" asChild>
            <Link to="/contact">Request Consultation</Link>
          </Button>

          <div className="text-xs text-center text-muted-foreground">
            Or call us at{" "}
            <span className="text-foreground font-medium">
              +1 (555) 000-0000
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Deliverables
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {service.deliverables ? (
            service.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">
              Custom scope defined during discovery.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
