import React, { useEffect, useRef, useState } from 'react';
import consultingVideo from '@/assets/Preview_live.mp4';
import ServiceTicker from '@/components/ServiceTicker';

const ConsultingHero = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [isMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const markReady = () => {
      setVideoReady(true);
      v.muted = isMuted;
      const attemptPlay = () => v.play().catch(() => {});
      attemptPlay();
      const unlock = () => {
        attemptPlay();
        document.removeEventListener('pointerdown', unlock);
        document.removeEventListener('touchstart', unlock);
      };
      document.addEventListener('pointerdown', unlock, { once: true });
      document.addEventListener('touchstart', unlock, { once: true });
    };

    if (v.readyState >= 2) markReady();
    v.addEventListener('loadeddata', markReady);
    v.addEventListener('canplaythrough', markReady);
    return () => {
      v.removeEventListener('loadeddata', markReady);
      v.removeEventListener('canplaythrough', markReady);
    };
  }, [isMuted]);

  return (
    <section className="relative h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          muted={isMuted}
          loop
          autoPlay
          playsInline
          preload="auto"
          controls={false}
        >
          <source src={consultingVideo} type="video/mp4" />
        </video>

        

        
      </div>

      <div className="relative z-10 container mx-auto container-mobile text-center text-white"></div>
      <ServiceTicker />
    </section>
  );
};

export default ConsultingHero;
