import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Layout
import { InnerPageLayout } from "@/components/layout/InnerPageLayout";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";

import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import CaseStudiesLandingPage from "./pages/CaseStudiesLandingPage";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import BlogLandingPage from "@/pages/BlogLandingPage";
import BlogPostDetail from "@/pages/BlogPostDetail";
import ROICalculatorPage from "./pages/resources/ROICalculatorPage";
import Resources from "./pages/Resources";
import GetProposal from "./pages/GetProposal";
// import DeliveryProcess from "./pages/DeliveryProcess";
// import EngagementModels from "./pages/EngagementModels";
// import SecurityCompliance from "./pages/SecurityCompliance";
// import ProcurementApproach from "./pages/ProcurementApproach";
// import FAQ from "./pages/FAQ";

// Footer Pages
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Docs from "./pages/Docs";
import Security from "./pages/Security";
import { Privacy } from "./pages/legal/Privacy";

import NotFound from "./pages/NotFound";
import { FloatingIcons } from "@/components/FloatingIcons";
import { SolutionsLandingLayout } from "./pages/SolutionsLandingLayout";
import { SolutionDetailPage } from "./pages/SolutionDetailPage";
import InfrastructureLandingLayout from "./pages/InfrastructureLandingLayout";
import InfrastructureDetailPage from "./pages/InfrastructureDetailPage";
import IndustriesLandingLayout from "./pages/IndustriesLandingLayout";
import IndustryDetailPage from "./pages/IndustryDetailPage";

const queryClient = new QueryClient();

// Define router using the Data Router API
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<InnerPageLayout />} errorElement={<NotFound />}>
      <Route path="/" element={<Index />} />

      {/* Catalog Routes */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/resources/roi-calculator" element={<ROICalculatorPage />} />
      <Route path="/get-proposal" element={<GetProposal />} />
      {/* <Route path="/industries/:slug" element={<IndustryDetail />} /> */}

      {/* Insights Routes */}
      <Route path="/solutions" element={<SolutionsLandingLayout />} />
      <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
      <Route path="/case-studies" element={<CaseStudiesLandingPage />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
      <Route path="/infrastructure" element={<InfrastructureLandingLayout />} />
      <Route
        path="/infrastructure/:slug"
        element={<InfrastructureDetailPage />}
      />
      <Route path="/industries" element={<IndustriesLandingLayout />} />
      <Route path="/industries/:slug" element={<IndustryDetailPage />} />

      {/* Company Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<BlogLandingPage />} />
      <Route path="/blog/:slug" element={<BlogPostDetail />} />

      {/* Resources & Legal */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/support" element={<Support />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/security" element={<Security />} />
      <Route path="/privacy-policy" element={<Privacy />} />

      {/* <Route path="/delivery-process" element={<DeliveryProcess />} />
      <Route path="/engagement-models" element={<EngagementModels />} />
      <Route path="/security-compliance" element={<SecurityCompliance />} />
      <Route path="/procurement-approach" element={<ProcurementApproach />} />
      <Route path="/faq" element={<FAQ />} /> */}

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <FloatingIcons />
        {/* RouterProvider is required for Data Routers */}
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
