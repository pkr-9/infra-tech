import { Link } from "react-router-dom";
import { ROICalculator } from "@/components/calculators/ROICalculator";
import { CheckCircle2 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-[110px]">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
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
                  <span className="cursor-default">Resources</span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>ROI Calculator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="container mx-auto px-4 mb-12 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Calculate your Edge Efficiency
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how much you can save by moving data processing from the cloud
            to the edge. Reduce bandwidth, storage, and latency costs instantly.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="container mx-auto px-4 mb-24">
          <ROICalculator />
        </div>

        {/* Methodology / Trust Section */}
        <div className="bg-secondary/20 py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold font-heading mb-8 text-center">
              How we calculate your savings
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <CheckCircle2 className="text-green-500 w-5 h-5" /> Bandwidth
                  Reduction
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  By processing raw sensor data on InfraTech Gateways, we only
                  transmit high-value events to the cloud, reducing data ingress
                  by up to 80%.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <CheckCircle2 className="text-green-500 w-5 h-5" /> OpEx vs
                  CapEx
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We compare traditional high-maintenance server costs against
                  our Hardware-as-a-Service (HaaS) model which includes
                  maintenance and warranty.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-4 font-semibold text-lg">
                  <CheckCircle2 className="text-green-500 w-5 h-5" /> Latency
                  Value
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While harder to quantify, real-time decision making at the
                  edge prevents downtime. We estimate this saves an average of
                  $15/device/month in operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ROICalculatorPage;
