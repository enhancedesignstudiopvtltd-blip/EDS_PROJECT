import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const getVariant = (el: HTMLElement) => {
  const aos = el.getAttribute('data-aos');
  const rev = el.getAttribute('data-reveal');
  return aos || rev || 'up';
};

const buildFrom = (variant: string) => {
  if (variant === 'fade' || variant === 'fade-up') return { opacity: 0, y: 16 };
  if (variant === 'up' || variant === 'slide-up') return { opacity: 0, y: 18 };
  if (variant === 'left' || variant === 'fade-left') return { opacity: 0, x: 18 };
  if (variant === 'right' || variant === 'fade-right') return { opacity: 0, x: -18 };
  if (variant === 'zoom-in') return { opacity: 0, scale: 0.98 };
  return { opacity: 0, y: 16 };
};

const GsapScrollProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll<HTMLElement>('[data-reveal], [data-aos]');
      sections.forEach((section) => {
        const onceAttr = section.getAttribute('data-aos-once');
        const once = onceAttr ? onceAttr === 'true' : true;
        const variant = getVariant(section);
        const delayAttr = section.getAttribute('data-aos-delay');
        const baseDelay = delayAttr ? Number(delayAttr) / 1000 : 0;
        const durAttr = section.getAttribute('data-aos-duration');
        const duration = durAttr ? Number(durAttr) / 1000 : 0.7;

        const children = section.hasAttribute('data-stagger')
          ? Array.from(section.querySelectorAll<HTMLElement>(':scope > *'))
          : [section];

        const tl = gsap.timeline({
          defaults: { ease: 'power2.out', duration },
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once,
          },
        });

        children.forEach((child, i) => {
          const from = buildFrom(variant);
          tl.from(child, { ...from, delay: baseDelay + i * 0.08 }, 0);
        });
      });

      const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
      parallaxEls.forEach((el) => {
        const factorAttr = el.getAttribute('data-parallax');
        const factor = factorAttr ? Number(factorAttr) : 0.15;
        gsap.to(el, {
          yPercent: factor * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return <>{children}</>;
};

export default GsapScrollProvider;