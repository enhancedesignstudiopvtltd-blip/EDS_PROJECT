import React from 'react';

const NavbarLogo: React.FC = () => {
  return (
    <a href="/" aria-label="Enhance Design Studio Pvt. Ltd. Home" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      <div style={{ position: 'relative', width: '44px', height: '44px' }}>
        <div style={{ position: 'absolute', top: '8px', left: '-8px', width: '8px', height: '1.5px', background: 'rgba(255,255,255,0.85)' }} />
        <div style={{ position: 'absolute', top: '8px', right: '-8px', width: '8px', height: '1.5px', background: 'rgba(255,255,255,0.85)' }} />
        <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', width: '1.5px', height: '12px', background: 'rgba(255,255,255,0.85)' }} />
        <div style={{ position: 'absolute', top: '0px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '7px solid rgba(255,255,255,0.85)' }} />
        <div style={{ position: 'absolute', top: '8px', left: '0', width: '44px', height: '36px', border: '1.5px solid rgba(255,255,255,0.85)', borderRadius: '0px', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', fontFamily: "'Inter','Space Grotesk',sans-serif" }}>
            ED
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ color: '#FFFFFF', fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)', fontWeight: 700, letterSpacing: '0.02em', fontFamily: "'Inter','Space Grotesk',sans-serif" }}>
          Enhance Design Studio
        </span>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', fontWeight: 400, letterSpacing: '0.02em', fontFamily: "'Inter','Space Grotesk',sans-serif" }}>
          Pvt. Ltd.
        </span>
      </div>
    </a>
  );
};

export default NavbarLogo;
