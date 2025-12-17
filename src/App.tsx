
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import SnakeGame from "./components/PacManGame";
import { ThemeProvider } from "./contexts/ThemeContext";



// Lazy load routes for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const JobMonitorBot = lazy(() => import("./pages/JobMonitorBot"));
const PortfolioWebsite = lazy(() => import("./pages/PortfolioWebsite"));
const InsightAdvantage = lazy(() => import("./pages/InsightAdvantage"));
const EcoArtMarket = lazy(() => import("./pages/EcoArtMarket"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Memoize QueryClient to prevent recreation on every render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

const App = () => {
  // Memoize QueryClient instance
  const memoizedQueryClient = useMemo(() => queryClient, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={memoizedQueryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <SnakeGame />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/job-monitor-bot" element={<JobMonitorBot />} />
                <Route path="/projects/portfolio-website" element={<PortfolioWebsite />} />
                <Route path="/projects/insight-advantage" element={<InsightAdvantage />} />
                <Route path="/projects/ecoart-market" element={<EcoArtMarket />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
