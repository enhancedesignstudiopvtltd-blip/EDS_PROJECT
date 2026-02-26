import React, { useEffect, useRef, useState } from 'react';
import consultingVideo from '@/assets/Preview_live.mp4';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlHeight = html.style.height;
    const prevBodyHeight = body.style.height;
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    html.style.height = '100vh';
    body.style.height = '100vh';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      html.style.height = prevHtmlHeight;
      body.style.height = prevBodyHeight;
    };
  }, []);

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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      setParallax({ x: relX * 6, y: relY * 6 });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const isMobile = width < 768;
    const count = isMobile ? 10 : 22;
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.6 + 0.2
    }));
    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5;
        if (p.y > height + 5) p.y = -5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.shadowColor = 'rgba(255,255,255,0.35)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const headline = "We're Crafting Something Extraordinary.";
  const words = headline.split(' ');

  return (
    <main className="fixed inset-0 h-[100vh] w-[100vw] overflow-y-auto md:overflow-hidden">
      <section ref={containerRef} className="absolute inset-0 md:relative">
        <video
          ref={videoRef}
          className={`cs-video absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          muted
          loop
          autoPlay
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          preload="metadata"
          controls={false}
          poster="/src/assets/hero-mep-building.jpg"
        >
          <source src={consultingVideo} type="video/mp4" />
        </video>
        <div className="cinematic-overlay" />
        <div className="video-corner-mask" />
        <canvas id="particles" className="absolute inset-0 w-full h-full pointer-events-none" />

        <div
          className="relative z-10 min-h-[100vh] w-full flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-10"
          style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
        >
          <div className="max-w-4xl w-full text-center text-white">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
              className="font-premium font-bold tracking-tight mb-3"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.45 }}
                  className="inline-block mr-2"
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="font-premium font-light text-white/80 leading-relaxed mb-4 sm:mb-6 px-2"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '0.02em', lineHeight: 1.7 }}
            >
              Our digital experience is currently under development. Big things are on the horizon. Stay tuned.
            </motion.p>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="mx-auto mb-6 progress-line"
              style={{ maxWidth: 200 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mb-6 flex justify-center"
            >
              <a
                href="mailto:Info@enhancedesignstudio.com?subject=Inquiry%20%E2%80%93%20Enhance%20Design%20Studio"
                className="btn-premium glow mx-auto"
                aria-label="Get in Touch via email"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="mb-6"
            >
              <div className="relative mx-auto" style={{ width: 240 }}>
                <div className="progress-line">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '35%' }}
                    transition={{ delay: 1.7, duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-[hsl(var(--premium-accent))] rounded-full"
                  />
                  <motion.span
                    initial={{ left: 0 }}
                    animate={{ left: '35%' }}
                    transition={{ delay: 1.7, duration: 1.2, ease: 'easeOut' }}
                    className="progress-dot"
                  />
                </div>
                <div className="mt-3 text-[0.8rem] font-premium tracking-[0.3em] text-white/70 uppercase">
                  LAUNCHING Q2 2026
                </div>
              </div>
            </motion.div>

            <motion.address
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
              className="not-italic grid grid-cols-1 gap-3 justify-items-center mb-8 sm:mb-6 px-2"
            >
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white/85 mt-0.5" aria-hidden="true" />
                <div className="font-body text-[0.9rem] sm:text-[0.95rem] flex flex-wrap justify-center gap-2 text-white">
                  <a href="mailto:Info@enhancedesignstudio.com" className="hover:text-white">Info@enhancedesignstudio.com</a>
                  <span className="text-white/40">|</span>
                  <a href="mailto:rabbani@enhancedesignstudio.com" className="hover:text-white">rabbani@enhancedesignstudio.com</a>
                  <span className="text-white/40">|</span>
                  <a href="mailto:rizwan@enhancedesignstudio.com" className="hover:text-white">rizwan@enhancedesignstudio.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white/85 mt-0.5" aria-hidden="true" />
                <div className="font-body text-[0.9rem] sm:text-[0.95rem] text-white">
                  <div>RABBANI ALI — <a href="tel:+919504322143" className="hover:text-white">+91 9504322143</a></div>
                  <div>MD Rizwan — <a href="tel:+917798469191" className="hover:text-white">+91 77984 69191</a></div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/85 mt-0.5" aria-hidden="true" />
                <div className="font-body text-[0.9rem] sm:text-[0.95rem] text-white max-w-[90%] sm:max-w-none">
                  PHOENIX PARAGON PLAZA, 1ST FLOOR, OFFICE NO. 1B/53, LBS MARG, KURLA WEST, MUMBAI – 400070
                </div>
              </div>
            </motion.address>

            
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
