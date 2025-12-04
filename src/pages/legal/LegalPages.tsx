const LegalLayout = ({ title, date, children }: any) => (
  <div className="min-h-screen bg-background flex flex-col">
    <main className="flex-grow pt-[110px]">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: {date}
        </p>
        <div className="prose dark:prose-invert max-w-none">{children}</div>
      </div>
    </main>
  </div>
);

export const Privacy = () => (
  <LegalLayout title="Privacy Policy" date="Jan 1, 2025">
    <p>
      At InfraTech, we take your privacy seriously. This policy describes how we
      collect, use, and protect your personal data.
    </p>
    <h3>1. Data Collection</h3>
    <p>
      We collect information you provide directly to us, such as when you create
      an account, subscribe to our newsletter, or contact customer support.
    </p>
    <h3>2. Usage</h3>
    <p>
      We use the information to provide, maintain, and improve our services.
    </p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout title="Terms of Service" date="Jan 1, 2025">
    <p>
      By accessing or using our services, you agree to be bound by these Terms.
    </p>
    <h3>1. Acceptable Use</h3>
    <p>You agree not to misuse our services or help anyone else do so.</p>
  </LegalLayout>
);

export const Cookie = () => (
  <LegalLayout title="Cookie Policy" date="Jan 1, 2025">
    <p>We use cookies to improve your experience on our site.</p>
    <h3>1. Essential Cookies</h3>
    <p>Necessary for the operation of the website.</p>
  </LegalLayout>
);
