import React, { useEffect, useState } from 'react';
import edsLogo from '@/EDS_logo.png';

type PreloaderProps = {
  onDone: () => void;
  durationMs?: number;
  ttlMs?: number; // show intro only if last run older than this
};

const Preloader: React.FC<PreloaderProps> = ({ onDone, durationMs = 4200, ttlMs = 12 * 60 * 60 * 1000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // localStorage TTL gating
    try {
      const isDev = import.meta.env?.DEV;
      const effectiveTtl = isDev ? 0 : ttlMs;
      const lastRunRaw = localStorage.getItem('eds_preloader_last');
      const lastRun = lastRunRaw ? Number(lastRunRaw) : 0;
      const now = Date.now();
      const withinTtl = lastRun && now - lastRun < effectiveTtl;
      if (withinTtl) {
        setVisible(false);
        onDone();
        return;
      }
    } catch {}

    const t = setTimeout(() => {
      // record last run time
      try {
        localStorage.setItem('eds_preloader_last', String(Date.now()));
      } catch {}
      setVisible(false);
      onDone();
    }, durationMs);
    return () => clearTimeout(t);
  }, [onDone, durationMs, ttlMs]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center justify-center">
        <img
          src={edsLogo}
          alt="Enhance Design Studio Pvt. Ltd."
          className="w-[160px] h-auto object-contain preloader-logo"
        />
        <span className="preloader-caption mt-2 text-[#111111] font-medium tracking-[0.02em] text-[12px] sm:text-[13px]">
          
        </span>
      </div>
    </div>
  );
};

export default Preloader;