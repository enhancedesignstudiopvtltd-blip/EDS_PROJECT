import React, { useEffect } from 'react';

type RevealType = 'fade' | 'up' | 'left' | 'right';

const ScrollRevealProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    const init = () => {
      const toReveal = document.querySelectorAll<HTMLElement>('[data-reveal]');
      toReveal.forEach((el) => {
        // mark base class once
        el.classList.add('reveal');
        observer.observe(el);
        // Optional stagger support
        if (el.hasAttribute('data-stagger')) {
          const children = Array.from(el.querySelectorAll<HTMLElement>(':scope > *'));
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 60}ms`;
          });
        }
      });
    };

    init();
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};

export default ScrollRevealProvider;