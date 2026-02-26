import React from 'react';

const ServiceTicker: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        zIndex: 5,
        background: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: 'clamp(10px, 2.5vw, 14px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'tickerScroll 20s linear infinite',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: 'clamp(0.75rem, 1.3vw, 0.95rem)',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginRight: '24px',
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>MEPF DESIGN</span>
            <span style={{ color: '#00C2FF', margin: '0 20px' }}>●</span>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>BIM CONSULTANCY</span>
            <span style={{ color: '#00C2FF', margin: '0 20px' }}>●</span>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>ENGINEERING SERVICES</span>
            <span style={{ color: '#00C2FF', margin: '0 20px' }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceTicker;
