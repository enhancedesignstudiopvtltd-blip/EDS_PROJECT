import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ChatWidget } from "@/components/ChatBot";
import Index from "./pages/Index";
import CaseStudies from "./pages/CaseStudies";
import ConsultingPage from "./pages/Consulting";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Preloader from "@/components/Preloader";
import GsapScrollProvider from "@/components/GsapScrollProvider";
import ComingSoon from "./pages/ComingSoon";

const queryClient = new QueryClient();

const App = () => {
  const [preloadDone, setPreloadDone] = useState(false);
  const comingSoon = (
    (import.meta.env?.VITE_COMING_SOON ?? 'true') === 'true' ||
    (import.meta.env as any)?.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
  );

  useEffect(() => {
    // Allow forcing intro via ?intro for testing
    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.has('intro');
    if (forceIntro) {
      // Reset localStorage timestamp to force showing intro
      try { localStorage.removeItem('eds_preloader_last'); } catch {}
      setPreloadDone(false);
      return;
    }

    // In dev, always show the preloader so you can verify animation
    const isDev = import.meta.env?.DEV;
    if (isDev) {
      setPreloadDone(false);
      return;
    }

    // In production: skip intro if within TTL
    try {
      const ttlMs = 12 * 60 * 60 * 1000; // 12 hours
      const lastRunRaw = localStorage.getItem('eds_preloader_last');
      const lastRun = lastRunRaw ? Number(lastRunRaw) : 0;
      const now = Date.now();
      if (lastRun && now - lastRun < ttlMs) {
        setPreloadDone(true);
      }
    } catch {}
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!comingSoon && !preloadDone && (
          <Preloader onDone={() => setPreloadDone(true)} ttlMs={12 * 60 * 60 * 1000} />
        )}
        <div className={preloadDone ? 'content-enter' : ''}>
          <GsapScrollProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<ConsultingPage />} />
                <Route path="/design-build" element={comingSoon ? <ComingSoon /> : <Index />} />
                <Route path="/consulting" element={<ConsultingPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/services" element={comingSoon ? <ComingSoon /> : <Index />} />
                <Route path="/projects" element={comingSoon ? <ComingSoon /> : <Index />} />
                <Route path="/news" element={comingSoon ? <ComingSoon /> : <Index />} />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              {!comingSoon && <ChatWidget />}
            </BrowserRouter>
          </GsapScrollProvider>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
