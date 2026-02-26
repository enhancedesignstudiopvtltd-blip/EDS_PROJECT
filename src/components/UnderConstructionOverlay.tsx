import React, { PropsWithChildren } from 'react';

type Props = {
  sectionName: string;
};

const UnderConstructionOverlay: React.FC<PropsWithChildren<Props>> = ({ children, sectionName }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ filter: 'blur(8px)', opacity: 0.4, pointerEvents: 'none', userSelect: 'none' }}>
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: '200px',
            height: '3px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '40%',
              height: '100%',
              background: 'linear-gradient(90deg, #00C2FF, #0080FF)',
              borderRadius: '10px',
              animation: 'loadingSlide 2s ease-in-out infinite',
            }}
          />
        </div>
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {sectionName}
        </p>
        <h3
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 600,
            marginBottom: '8px',
          }}
        >
          Under Construction
        </h3>
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
            maxWidth: '400px',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          We're working on something amazing. This section will be available soon.
        </p>
        <div style={{ display: 'flex', gap: '6px', marginTop: '20px' }}>
          {[0, 0.2, 0.4].map((delay, i) => (
            <div
              key={i}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00C2FF',
                animation: `dotPulse 1.4s ease-in-out infinite ${delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionOverlay;
