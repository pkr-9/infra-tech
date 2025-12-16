import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, ArrowRight, TrendingDown, Cloud, Zap } from "lucide-react";

export const ROICalculator = () => {
  // State for user inputs
  const [deviceCount, setDeviceCount] = useState([500]);
  const [dataPerDevice, setDataPerDevice] = useState([5]); // GB per month
  const [cloudCostPerGB, setCloudCostPerGB] = useState(0.08); // $0.08 standard AWS/Azure ingest avg

  // Calculation Logic
  const results = useMemo(() => {
    const devices = deviceCount[0];
    const data = dataPerDevice[0];

    // 1. Traditional Cloud Model (High Egress/Ingest)
    // Formula: Devices * GB * Cost
    const monthlyCloudDataCost = devices * data * cloudCostPerGB;
    const maintenanceCost = devices * 15; // $15/device manual maintenance
    const traditionalTotal = monthlyCloudDataCost + maintenanceCost;

    // 2. InfraTech Edge Model (Process locally, send 80% less data)
    // Formula: Data reduced by 80% due to edge processing
    const edgeDataCost = devices * (data * 0.2) * cloudCostPerGB;
    const infraTechLicense = devices * 8; // $8/device license (cheaper than maintenance)
    const infraTechTotal = edgeDataCost + infraTechLicense;

    // 3. Savings
    const monthlySavings = traditionalTotal - infraTechTotal;
    const annualSavings = monthlySavings * 12;
    const percentSaved = Math.round((monthlySavings / traditionalTotal) * 100);

    return {
      traditionalTotal,
      infraTechTotal,
      monthlySavings,
      annualSavings,
      percentSaved,
    };
  }, [deviceCount, dataPerDevice, cloudCostPerGB]);

  // Helper for currency formatting
  const formatMoney = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Inputs */}
      <Card className="lg:col-span-5 border-border shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant="outline"
              className="w-fit border-primary/30 text-primary"
            >
              <Calculator className="w-3 h-3 mr-1" /> ROI Estimator
            </Badge>
          </div>
          <CardTitle className="font-heading text-2xl">
            Configure Your Fleet
          </CardTitle>
          <CardDescription>
            Adjust the sliders to match your current operational scale.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Input: Device Count */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">
                Number of Devices
              </label>
              <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-1 rounded text-sm">
                {deviceCount[0]} units
              </span>
            </div>
            <Slider
              value={deviceCount}
              onValueChange={setDeviceCount}
              max={5000}
              step={50}
              className="py-2"
            />
            <p className="text-xs text-muted-foreground">
              Sensors, gateways, or edge servers currently deployed.
            </p>
          </div>

          {/* Input: Data Volume */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">
                Data Upload / Device
              </label>
              <span className="font-mono text-primary font-bold bg-primary/10 px-2 py-1 rounded text-sm">
                {dataPerDevice[0]} GB/mo
              </span>
            </div>
            <Slider
              value={dataPerDevice}
              onValueChange={setDataPerDevice}
              max={100}
              step={1}
              className="py-2"
            />
            <p className="text-xs text-muted-foreground">
              Average data transmitted to the cloud per device monthly.
            </p>
          </div>

          {/* Input: Cloud Cost (Advanced) */}
          <div className="pt-4 border-t border-border">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 block">
              Advanced: Cloud Cost ($/GB)
            </label>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">$</span>
              <Input
                type="number"
                step="0.01"
                value={cloudCostPerGB}
                onChange={(e) => setCloudCostPerGB(parseFloat(e.target.value))}
                className="w-24 font-mono"
              />
              <span className="text-xs text-muted-foreground">
                per GB ingestion cost
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Right Column: Visual Results */}
      <div className="lg:col-span-7 space-y-6">
        {/* Big Savings Card */}
        <div className="bg-gradient-to-br from-primary to-blue-900 rounded-xl p-8 text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="text-blue-200 font-medium mb-1">
              Projected Annual Savings
            </div>
            <div className="text-5xl sm:text-6xl font-bold font-heading mb-4 tracking-tight">
              {formatMoney(results.annualSavings)}
            </div>
            <div className="flex items-center gap-2 text-blue-100 bg-white/10 w-fit px-3 py-1 rounded-full text-sm">
              <TrendingDown className="w-4 h-4" />
              <span>
                Reduces operational costs by{" "}
                <strong>{results.percentSaved}%</strong>
              </span>
            </div>
          </div>

          {/* Decorative BG element */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
        </div>

        {/* Comparison Chart */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Traditional Card */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between h-48">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Cloud className="w-5 h-5" />
              <span className="font-semibold text-sm">Traditional Cloud</span>
            </div>
            <div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gray-400 w-full" />
              </div>
              <div className="text-2xl font-bold text-foreground">
                {formatMoney(results.traditionalTotal)}
              </div>
              <div className="text-xs text-muted-foreground">per month</div>
            </div>
          </div>

          {/* InfraTech Card */}
          <div className="bg-card border-2 border-primary/20 bg-primary/5 rounded-xl p-6 flex flex-col justify-between h-48 relative overflow-hidden">
            <div className="flex items-center gap-2 text-primary mb-4 relative z-10">
              <Zap className="w-5 h-5" />
              <span className="font-semibold text-sm">With InfraTech Edge</span>
            </div>
            <div className="relative z-10">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden mb-2">
                {/* Visual bar width relative to traditional cost */}
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${100 - results.percentSaved}%` }}
                />
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatMoney(results.infraTechTotal)}
              </div>
              <div className="text-xs text-muted-foreground">per month</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-secondary/30 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Ready to realize these savings? Get a detailed breakdown from our
            engineering team.
          </p>
          <Button asChild className="shrink-0">
            <Link to="/contact">
              Get Full Report <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
