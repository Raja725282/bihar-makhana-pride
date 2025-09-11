import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import BulkOrder from "./pages/BulkOrder";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Agriculture from "./pages/Agriculture";
import Global from "./pages/Global";
import Farmers from "./pages/Farmers";
import ExportServices from "./pages/ExportServices";
import QualityAssurance from "./pages/QualityAssurance";
import CustomPackaging from "./pages/CustomPackaging";
import Logistics from "./pages/Logistics";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/bulk-order" element={<BulkOrder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/global" element={<Global />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/export-services" element={<ExportServices />} />
            <Route path="/quality-assurance" element={<QualityAssurance />} />
            <Route path="/custom-packaging" element={<CustomPackaging />} />
            <Route path="/logistics" element={<Logistics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
