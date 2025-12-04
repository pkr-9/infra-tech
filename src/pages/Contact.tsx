import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-grow pt-[110px]">
        {/* Header */}
        <div className="bg-secondary/30 border-b border-border py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to modernize your infrastructure? Our architects are ready
              to help you scope your project.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column: Info */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-heading">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Headquarters
                      </h3>
                      <p className="text-muted-foreground">
                        101 Tech Plaza, Suite 400
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        sales@infratech.com
                      </p>
                      <p className="text-muted-foreground">
                        support@infratech.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">
                        +1 (555) 123-4567 (Sales)
                      </p>
                      <p className="text-muted-foreground">
                        +1 (555) 987-6543 (Support)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulated Map */}
              <div className="h-64 w-full bg-muted rounded-xl border border-border overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                  <span className="text-muted-foreground font-medium flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> View on Google Maps
                  </span>
                </div>
                {/* In a real app, embed Google Maps iframe here */}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold font-heading mb-6">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Contact;
