import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MotionSection, MotionItem } from '@/components/Motion';

// Public assets served from /public
const logos = [
  '/Picture1.png',
 
  '/Picture3.png',
  '/Picture4.png',
  '/Picture5.png',
  '/Picture6.png',
  '/Picture7.png',
  '/Picture8.png',
];

const ClientsBand = () => {
  // base list with global de-duplication while preserving order
  const baseLogos = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const src of logos) {
      if (!seen.has(src)) {
        seen.add(src);
        result.push(src);
      }
    }
    // remove any immediate duplicates if present (robustness)
    return result.filter((src, idx) => idx === 0 || src !== result[idx - 1]);
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [copies, setCopies] = useState(2);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const compute = () => {
      const containerWidth = container.offsetWidth;
      const singleWidth = measure.scrollWidth || measure.offsetWidth || 0;
      // ensure content width significantly exceeds container to avoid right-side gaps
      // target total track width >= containerWidth * 2
      const needed = singleWidth > 0 ? Math.max(2, Math.ceil((containerWidth * 2) / singleWidth)) : 2;
      setCopies(needed);
    };

    compute();
    const ro = new ResizeObserver(() => compute());
    ro.observe(container);
    ro.observe(measure);
    return () => ro.disconnect();
  }, [baseLogos]);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeadingVisible(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const buildSeamlessSequence = (items: string[], repeat: number) => {
    const seq: string[] = [];
    for (let r = 0; r < repeat; r++) {
      for (let i = 0; i < items.length; i++) {
        const src = items[i];
        const last = seq[seq.length - 1];
        // skip if adding would create adjacent duplicates across boundaries
        if (last === src) continue;
        seq.push(src);
      }
    }
    return seq;
  };

  const loopLogos = useMemo(() => buildSeamlessSequence(baseLogos, copies), [baseLogos, copies]);

  return (
    <MotionSection aria-label="Client logos" className="py-10 bg-background" variant="fade" data-aos-once="true">
      <div className="container mx-auto px-6">
        <h3
          ref={headingRef}
          className={`text-center text-responsive-lg font-heading font-bold mb-6 uppercase tracking-[0.12em] leading-tight text-primary ${headingVisible ? 'animate-fade-up animate-scale-in' : ''}`}
        >
          KEY CLIENT LIST
        </h3>
        {/* Marquee wrapper */}
        <div ref={containerRef} className="logo-marquee relative overflow-hidden rounded-xl bg-secondary">
          {/* Hidden single-measure track to calculate width of one cycle */}
          <div ref={measureRef} className="absolute -z-10 opacity-0 pointer-events-none flex flex-nowrap items-center gap-8 whitespace-nowrap">
            {baseLogos.map((src) => (
              <div key={`m-${src}`} className="logo-item inline-flex items-center justify-center">
                <img src={src} alt="" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Continuous track */}
          <div className="logo-track flex flex-nowrap items-center gap-8 whitespace-nowrap py-6 will-change-transform">
            {loopLogos.map((src, idx) => (
              <div key={`${src}-${idx}`} className="logo-item inline-flex items-center justify-center">
                <img
                  src={src}
                  alt={`Client logo ${((idx % baseLogos.length) + 1)}`}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ClientsBand;