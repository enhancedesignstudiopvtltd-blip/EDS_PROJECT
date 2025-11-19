import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import consultingVideo from '@/assets/Preview_live.mp4';

const ConsultingHero = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const markReady = () => {
      setVideoReady(true);
      v.muted = isMuted;
      v.play().catch(() => {});
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
    <section className="relative h-[88vh] md:h-screen flex items-center justify-center overflow-hidden mb-4 md:mb-8">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          muted={isMuted}
          loop
          autoPlay
          playsInline
          preload="auto"
          controls={false}
        >
          <source src={consultingVideo} type="video/mp4" />
        </video>

        <button
          aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            setIsMuted(prev => {
              const next = !prev;
              v.muted = next;
              v.play().catch(() => {});
              return next;
            });
          }}
          className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          <span className="text-sm">{isMuted ? 'Unmute' : 'Mute'}</span>
        </button>

        
      </div>

      <div className="relative z-10 container mx-auto container-mobile text-center text-white"></div>
    </section>
  );
};

export default ConsultingHero;