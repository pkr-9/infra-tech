import { ShieldCheck, Lock, FileText, Server } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-heading font-bold mb-6">
            Security & Trust Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-12">
            We protect your critical infrastructure with enterprise-grade
            security standards. Security is built into every layer of our
            platform, from the edge to the cloud.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 border border-border rounded-xl bg-card">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">SOC2 Type II Certified</h3>
              <p className="text-muted-foreground">
                We undergo annual third-party audits to ensure our controls meet
                the highest standards for security, availability, and
                confidentiality.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-card">
              <Lock className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
              <p className="text-muted-foreground">
                All data is encrypted in transit (TLS 1.3) and at rest
                (AES-256). We support BYOK (Bring Your Own Key) for enterprise
                tiers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Security;
