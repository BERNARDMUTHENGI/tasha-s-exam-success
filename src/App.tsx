import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HESIPage from "./pages/HESIPage";
import TEASPage from "./pages/TEASPage";
import GEDPage from "./pages/GEDPage";
import OnlineClassesPage from "./pages/OnlineClassesPage";
import OtherServicesPage from "./pages/OtherServicesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hesi" element={<HESIPage />} />
          <Route path="/teas" element={<TEASPage />} />
          <Route path="/ged" element={<GEDPage />} />
          <Route path="/online-classes" element={<OnlineClassesPage />} />
          <Route path="/other-services" element={<OtherServicesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
