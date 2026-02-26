import React, { useEffect, useRef, useState } from 'react';
import edsLogo from '@/EDS_logo.png';
import consultingVideo from '@/assets/Preview_live.mp4';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ComingSoon = () => {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const markReady = () => {
      setVideoReady(true);
      v.muted = true;
      v.play().catch(() => {});
    };
    if (v.readyState >= 2) markReady();
    v.addEventListener('loadeddata', markReady);
    v.addEventListener('canplaythrough', markReady);
    return () => {
      v.removeEventListener('loadeddata', markReady);
      v.removeEventListener('canplaythrough', markReady);
    };
  }, []);

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          controls={false}
        >
          <source src={consultingVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center text-white rounded-2xl border border-white/20 ring-1 ring-white/15 bg-white/10 backdrop-blur-2xl backdrop-saturate-150 shadow-2xl px-6 sm:px-8 py-8 sm:py-10 animate-float">
          <div className="flex justify-center mb-6">
            <img src={edsLogo} alt="DesignEdge SpaceCraft" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-3">
            We&apos;re Crafting Something Extraordinary.
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-6">
            Our digital experience is currently under development. Big things are on the horizon. Stay tuned.
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="shimmer-bar w-44 sm:w-56 h-0.5 rounded-full overflow-hidden"></div>
          </div>

          <div className="mb-6">
            <Button
              asChild
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20"
            >
              <a href="mailto:info@designedgemep.com?subject=Inquiry%20-%20DesignEdge%20SpaceCraft">Get in Touch</a>
            </Button>
          </div>

          <div className="mb-8">
            <span className="font-body text-xs sm:text-sm uppercase tracking-widest text-white/70">
              Launching Soon — Q2 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center mb-6">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-white/80" />
              <div className="text-sm sm:text-base font-body">
                <a href="mailto:info@designedgemep.com" className="hover:text-white">info@designedgemep.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-white/80" />
              <div className="text-sm sm:text-base font-body">
                <a href="tel:+919504322143" className="hover:text-white">+91 9504322143</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-white/80 mt-0.5" />
              <div className="text-sm sm:text-base font-body text-white/85 max-w-[28ch]">
                Office No. 511C, C‑Wing, Baitunnoor, Kurla West, Mumbai, Maharashtra, 400070
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
