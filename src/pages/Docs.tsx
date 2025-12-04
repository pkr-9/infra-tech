import { Button } from "@/components/ui/button";
import { ChevronRight, Code } from "lucide-react";

const Docs = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px] flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-border hidden lg:block p-6 bg-secondary/10 sticky top-[110px] h-[calc(100vh-110px)] overflow-y-auto">
          <h4 className="font-bold mb-4">Getting Started</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="text-primary font-medium">Introduction</li>
            <li className="hover:text-foreground cursor-pointer">Quickstart</li>
            <li className="hover:text-foreground cursor-pointer">
              Authentication
            </li>
          </ul>
          <h4 className="font-bold mt-8 mb-4">API Reference</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer">Devices</li>
            <li className="hover:text-foreground cursor-pointer">Telemetry</li>
            <li className="hover:text-foreground cursor-pointer">Alerts</li>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 lg:p-12 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-primary mb-6">
            <Code className="w-4 h-4" /> Developer Portal
          </div>
          <h1 className="text-4xl font-heading font-bold mb-6">Introduction</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Welcome to the InfraTech API documentation. Our REST API allows you
            to programmatically manage your edge devices, retrieve telemetry
            streams, and configure alerts.
          </p>

          <div className="bg-secondary/30 p-6 rounded-lg border border-border font-mono text-sm mb-8">
            <div className="text-muted-foreground mb-2"># Install the CLI</div>
            <div className="text-foreground">
              $ npm install -g @infratech/cli
            </div>
          </div>

          <Button>
            Read Quickstart Guide <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Docs;
