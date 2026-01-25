import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Server,
  Globe2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Privacy = () => {
  const lastUpdated = "January 15, 2026";

  return (
    <div className="min-h-screen bg-background pb-20 pt-24 mt-24">
      {/* --- HEADER --- */}
      <div className="container mx-auto px-4 max-w-4xl mb-12 text-center">
        <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
          <Shield className="h-4 w-4" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-lg">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe2 className="w-6 h-6 text-primary" />
              1. Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              InfraTech Systems ("we," "us," or "our") respects your privacy and
              is committed to protecting your personal data. This privacy policy
              will inform you as to how we look after your personal data when
              you visit our website (regardless of where you visit it from) or
              engage with us for software engineering and infrastructure
              fulfillment services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This policy is built in alignment with global standards, including
              GDPR, CCPA, and SOC2 confidentiality principles.
            </p>
          </section>

          <div className="h-px bg-border my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              2. Data We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect different types of data depending on your interaction
              with our platform:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Identity Data:</strong>{" "}
                First name, last name, username, or similar identifiers provided
                via our Proposal Request forms.
              </li>
              <li>
                <strong className="text-foreground">Contact Data:</strong>{" "}
                Billing address, delivery address (for hardware fulfillment),
                email address, and telephone numbers.
              </li>
              <li>
                <strong className="text-foreground">Technical Data:</strong>{" "}
                Internet protocol (IP) address, browser type and version, time
                zone setting, and location for security logging.
              </li>
              <li>
                <strong className="text-foreground">Project Data:</strong> RFPs,
                architectural diagrams, and proprietary specifications uploaded
                to our secure portal.
              </li>
            </ul>
          </section>

          <div className="h-px bg-border my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              3. How We Use Your Data
            </h2>
            <p className="text-muted-foreground mb-4">
              We only use your data when the law allows us to. Most commonly, we
              use your data in the following circumstances:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">
                  Service Delivery
                </h3>
                <p className="text-sm text-muted-foreground">
                  To process RFPs, generate quotes, and orchestrate hardware
                  delivery to your physical locations.
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">
                  Contractual Obligations
                </h3>
                <p className="text-sm text-muted-foreground">
                  To manage payments, fees, and charges, and to collect and
                  recover money owed to us.
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">
                  Legal Compliance
                </h3>
                <p className="text-sm text-muted-foreground">
                  To comply with tax laws, export control regulations (for
                  hardware), and security audits.
                </p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <h3 className="font-bold text-foreground mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  To detect fraud, monitor infrastructure health, and prevent
                  unauthorized access.
                </p>
              </div>
            </div>
          </section>

          <div className="h-px bg-border my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              4. Data Security (SOC2)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our infrastructure is ISO 27001 certified. We limit access to your
              personal data to those employees, agents, contractors, and other
              third parties who have a business need to know. They will only
              process your personal data on our instructions and are subject to
              a duty of confidentiality.
            </p>
          </section>

          <div className="h-px bg-border my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Sharing</h2>
            <p className="text-muted-foreground mb-4">
              To fulfill our "Vendor Agnostic" promise, we may share Contact and
              Delivery Data with specific hardware vendors (e.g., Dell, Cisco,
              AWS) solely for the purpose of shipping equipment to your
              location.
            </p>
            <p className="text-muted-foreground">
              We do not sell your data to third-party advertisers.
            </p>
          </section>

          <div className="h-px bg-border my-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
            </ul>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                <Mail className="w-5 h-5 text-primary" />
                Contact the Data Privacy Officer
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Have questions about your data or want to execute your rights?
              </p>
            </div>
            <Button asChild>
              <Link to="/contact">Contact Legal Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
