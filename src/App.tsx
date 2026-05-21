import { Suspense, lazy, useCallback, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteLoader } from "@/components/SiteLoader";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

// Each page is its own lazily-loaded chunk so the initial bundle stays small.
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Highlights = lazy(() => import("./pages/Highlights"));
const Programs = lazy(() => import("./pages/Programs"));
const Resources = lazy(() => import("./pages/Resources"));
const Ideas = lazy(() => import("./pages/Ideas"));
const Join = lazy(() => import("./pages/Join"));
const Partner = lazy(() => import("./pages/Partner"));
const PartnerApply = lazy(() => import("./pages/PartnerApply"));
const Articles = lazy(() => import("./pages/Articles"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/highlights" element={<PageTransition><Highlights /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
        <Route path="/events" element={<Navigate to="/highlights" replace />} />
        <Route path="/achievements" element={<Navigate to="/highlights" replace />} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/ideas" element={<PageTransition><Ideas /></PageTransition>} />
        <Route path="/join" element={<PageTransition><Join /></PageTransition>} />
        <Route path="/partner" element={<PageTransition><Partner /></PageTransition>} />
        <Route path="/partner/apply" element={<PageTransition><PartnerApply /></PageTransition>} />
        <Route path="/articles" element={<PageTransition><Articles /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showLoader && <SiteLoader onComplete={handleLoaderComplete} />}
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
