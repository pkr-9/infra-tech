import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

// --- 1. Zod Validation Schema ---
const proposalSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  companyName: z.string().min(2, "Company name is required"),
  role: z.string().optional(),
  industry: z.string({ required_error: "Please select an industry" }),
  serviceType: z.string({ required_error: "Please select a service type" }),
  budgetRange: z.string().optional(),
  projectBrief: z
    .string()
    .min(20, "Please provide a bit more detail (min 20 chars)"),
});

type ProposalFormValues = z.infer<typeof proposalSchema>;

export default function GetProposal() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      role: "",
      projectBrief: "",
    },
  });

  // --- 2. File Handling ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // --- 3. Submission Handler ---
  const onSubmit = async (data: ProposalFormValues) => {
    setIsSubmitting(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", data);
    console.log("Attached File:", file);

    toast({
      title: "Proposal Request Received",
      description:
        "Our engineering team will review your brief and respond within 24 hours.",
    });

    setIsSubmitting(false);
    form.reset();
    setFile(null);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 relative overflow-hidden pt-36 pb-24">
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Page Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white border border-primary/20 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span> */}
            <span>Engineering & Procurement Request</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-slate-900">
            Start Your <span className="text-primary">Transformation</span>{" "}
            Project
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Tell us about your infrastructure or software needs. We will
            assemble the right architects and vendors to build your quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Value Prop & Trust */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1 sticky top-32">
            {/* Trust Card */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-slate-900">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Why Partner With Us?
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Single Accountability",
                    desc: "One contract for software dev and hardware fulfillment.",
                    icon: Building2,
                  },
                  {
                    title: "Vendor Agnostic",
                    desc: "We procure from AWS, Cisco, Dell, or Azure based on your needs.",
                    icon: Zap,
                  },
                  {
                    title: "Secure Delivery",
                    desc: "SOC2 compliant processes for sensitive data handling.",
                    icon: Lock,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <item.icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NDA Card */}
            <div className="bg-slate-100/50 rounded-2xl p-6 border border-dashed border-slate-300 text-center">
              <p className="text-sm font-medium text-slate-700 mb-3">
                Require an NDA first?
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white hover:bg-slate-50 border-slate-200"
              >
                Download Mutual NDA
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/50 p-6 md:p-10 relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Section 1: Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs text-slate-600">
                      1
                    </span>
                    Your Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="e.g. Jane Doe"
                        className="bg-slate-50 border-slate-200 focus:bg-white transition-all"
                        {...form.register("fullName")}
                      />
                      {form.formState.errors.fullName && (
                        <p className="text-red-500 text-xs font-medium mt-1 animate-in slide-in-from-left-1">
                          {form.formState.errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        placeholder="jane@company.com"
                        className="bg-slate-50 border-slate-200 focus:bg-white transition-all"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-xs font-medium mt-1 animate-in slide-in-from-left-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="Acme Enterprises"
                        className="bg-slate-50 border-slate-200 focus:bg-white transition-all"
                        {...form.register("companyName")}
                      />
                      {form.formState.errors.companyName && (
                        <p className="text-red-500 text-xs font-medium mt-1 animate-in slide-in-from-left-1">
                          {form.formState.errors.companyName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Industry Sector</Label>
                      <Select
                        onValueChange={(val) =>
                          form.setValue("industry", val, {
                            shouldValidate: true,
                          })
                        }
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white">
                          <SelectValue placeholder="Select Industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="banking">
                            Banking & Finance
                          </SelectItem>
                          <SelectItem value="healthcare">
                            Healthcare & MedTech
                          </SelectItem>
                          <SelectItem value="manufacturing">
                            Manufacturing & IoT
                          </SelectItem>
                          <SelectItem value="retail">
                            Retail & E-commerce
                          </SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.industry && (
                        <p className="text-red-500 text-xs font-medium mt-1 animate-in slide-in-from-left-1">
                          {form.formState.errors.industry.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Project Scope */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs text-slate-600">
                      2
                    </span>
                    Project Scope
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Primary Interest</Label>
                      <Select
                        onValueChange={(val) =>
                          form.setValue("serviceType", val, {
                            shouldValidate: true,
                          })
                        }
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white">
                          <SelectValue placeholder="What do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="infrastructure">
                            Infrastructure Deployment
                          </SelectItem>
                          <SelectItem value="software">
                            Custom Software Engineering
                          </SelectItem>
                          <SelectItem value="cloud-migration">
                            Cloud Migration & DevOps
                          </SelectItem>
                          <SelectItem value="consulting">
                            Compliance & Security Audit
                          </SelectItem>
                          <SelectItem value="full-stack">
                            End-to-End (Software + Infra)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.serviceType && (
                        <p className="text-red-500 text-xs font-medium mt-1 animate-in slide-in-from-left-1">
                          {form.formState.errors.serviceType.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Estimated Budget (USD)</Label>
                      <Select
                        onValueChange={(val) =>
                          form.setValue("budgetRange", val)
                        }
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 focus:bg-white">
                          <SelectValue placeholder="Select Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k-500k">
                            $100k - $500k
                          </SelectItem>
                          <SelectItem value="500k+">$500k+</SelectItem>
                          <SelectItem value="undecided">
                            To Be Determined
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectBrief">Project Brief</Label>
                    <Textarea
                      id="projectBrief"
                      placeholder="Describe your goals, timeline, and any specific technical requirements..."
                      className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white resize-none"
                      {...form.register("projectBrief")}
                    />
                    {form.formState.errors.projectBrief && (
                      <p className="text-red-500 text-xs font-medium mt-1 animate-in slide-in-from-left-1">
                        {form.formState.errors.projectBrief.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Section 3: Attachments */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-xs text-slate-600">
                      3
                    </span>
                    Attachments
                  </h3>

                  <div
                    className={cn(
                      "relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group overflow-hidden",
                      file
                        ? "bg-primary/5 border-primary/50"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-primary/30",
                    )}
                  >
                    <input
                      type="file"
                      id="file-upload"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />

                    {file ? (
                      <div className="relative z-10 animate-in zoom-in-95 duration-300">
                        <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-3">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-slate-900 block">
                          {file.name}
                        </span>
                        <span className="text-xs text-slate-500 mt-1 block">
                          {(file.size / 1024 / 1024).toFixed(2)} MB attached
                        </span>
                        <p className="text-xs text-primary mt-2 font-medium">
                          Click to replace
                        </p>
                      </div>
                    ) : (
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                          <UploadCloud className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 block">
                          Click to upload or drag and drop RFP
                        </span>
                        <span className="text-xs text-slate-500 mt-1 block">
                          PDF, DOCX up to 10MB
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-[0.99]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        Request Proposal <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting this form, you agree to our Privacy Policy.
                    Your data is processed securely.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
