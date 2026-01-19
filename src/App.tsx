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
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ROICalculatorPage from "./pages/resources/ROICalculatorPage";
import Resources from "./pages/Resources";
import Solutions from "./pages/Solutions";
// import { IndustryDetail } from "./pages/industries/IndustryDetail";

// Footer Pages
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import Docs from "./pages/Docs";
import Security from "./pages/Security";
import { Privacy, Terms, Cookie } from "./pages/legal/LegalPages";

import NotFound from "./pages/NotFound";
import { FloatingIcons } from "@/components/FloatingIcons";

const queryClient = new QueryClient();

// Define router using the Data Router API
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<InnerPageLayout />} errorElement={<NotFound />}>
      <Route path="/" element={<Index />} />

      {/* Catalog Routes */}
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/resources/roi-calculator" element={<ROICalculatorPage />} />
      <Route path="/solutions" element={<Solutions />} />
      {/* <Route path="/industries/:slug" element={<IndustryDetail />} /> */}

      {/* Insights Routes */}
      <Route path="/industries" element={<Industries />} />
      <Route path="/case-studies" element={<CaseStudies />} />

      {/* Company Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />

      {/* Resources & Legal */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/support" element={<Support />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/security" element={<Security />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-of-service" element={<Terms />} />
      <Route path="/cookie-policy" element={<Cookie />} />

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
